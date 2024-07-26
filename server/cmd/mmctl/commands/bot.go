// Copyright (c) 2015-present DatopicMeet, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

package commands

import (
	"context"
	"fmt"

	"github.com/mattermost/mattermost/server/public/model"

	"github.com/mattermost/mattermost/server/v8/cmd/mmctl/client"
	"github.com/mattermost/mattermost/server/v8/cmd/mmctl/printer"

	"github.com/hashicorp/go-multierror"
	"github.com/pkg/errors"
	"github.com/spf13/cobra"
)

var BotCmd = &cobra.Command{
	Use:   "bot",
	Short: "Management of bots",
}

var CreateBotCmd = &cobra.Command{
	Use:     "create [username]",
	Short:   "Create bot",
	Long:    "Create bot.",
	Example: `  bot create testbot`,
	PreRun:  disableLocalPrecheck,
	RunE:    withClient(botCreateCmdF),
	Args:    cobra.ExactArgs(1),
}

var UpdateBotCmd = &cobra.Command{
	Use:     "update [username]",
	Short:   "Update bot",
	Long:    "Update bot information.",
	Example: `  bot update testbot --username newbotusername`,
	RunE:    withClient(botUpdateCmdF),
	Args:    cobra.ExactArgs(1),
}

var ListBotCmd = &cobra.Command{
	Use:     "list",
	Short:   "List bots",
	Long:    "List the bots users.",
	Example: `  bot list`,
	RunE:    withClient(botListCmdF),
	Args:    cobra.NoArgs,
}

var DisableBotCmd = &cobra.Command{
	Use:     "disable [username]",
	Short:   "Disable bot",
	Long:    "Disable an enabled bot",
	Example: `  bot disable testbot`,
	RunE:    withClient(botDisableCmdF),
	Args:    cobra.MinimumNArgs(1),
}

var EnableBotCmd = &cobra.Command{
	Use:     "enable [username]",
	Short:   "Enable bot",
	Long:    "Enable a disabled bot",
	Example: `  bot enable testbot`,
	RunE:    withClient(botEnableCmdF),
	Args:    cobra.MinimumNArgs(1),
}

var AssignBotCmd = &cobra.Command{
	Use:     "assign [bot-username] [new-owner-username]",
	Short:   "Assign bot",
	Long:    "Assign the ownership of a bot to another user",
	Example: `  bot assign testbot user2`,
	RunE:    withClient(botAssignCmdF),
	Args:    cobra.ExactArgs(2),
}

func init() {
	CreateBotCmd.Flags().String("display-name", "", "Optional. The display name for the new bot.")
	CreateBotCmd.Flags().String("description", "", "Optional. The description text for the new bot.")
	CreateBotCmd.Flags().Bool("with-token", false, "Optional. Auto genreate access token for the bot.")
	ListBotCmd.Flags().Bool("orphaned", false, "Optional. Only show orphaned bots.")
	ListBotCmd.Flags().Bool("all", false, "Optional. Show all bots (including deleleted and orphaned).")
	UpdateBotCmd.Flags().String("username", "", "Optional. The new username for the bot.")
	UpdateBotCmd.Flags().String("display-name", "", "Optional. The new display name for the bot.")
	UpdateBotCmd.Flags().String("description", "", "Optional. The new description text for the bot.")

	BotCmd.AddCommand(
		CreateBotCmd,
		UpdateBotCmd,
		ListBotCmd,
		EnableBotCmd,
		DisableBotCmd,
		AssignBotCmd,
	)

	RootCmd.AddCommand(BotCmd)
}

func botCreateCmdF(c client.Client, cmd *cobra.Command, args []string) error {
	username := args[0]
	displayName, _ := cmd.Flags().GetString("display-name")
	description, _ := cmd.Flags().GetString("description")

	bot, _, err := c.CreateBot(context.TODO(), &model.Bot{
		Username:    username,
		DisplayName: displayName,
		Description: description,
	})
	if err != nil {
		return errors.Errorf("could not create bot: %s", err)
	}

	printer.PrintT("Created bot {{.UserId}}", bot)

	if withToken, _ := cmd.Flags().GetBool("with-token"); withToken {
		return generateTokenForAUserCmdF(c, cmd, []string{args[0], "autogenerated"})
	}

	return nil
}

func botUpdateCmdF(c client.Client, cmd *cobra.Command, args []string) error {
	if !cmd.Flags().Changed("username") && !cmd.Flags().Changed("display-name") && !cmd.Flags().Changed("description") {
		return errors.New("at least one of --username, --display-name or --description must be set")
	}

	user := getUserFromUserArg(c, args[0])
	if user == nil {
		return errors.New("unable to find user '" + args[0] + "'")
	}
	patch := model.BotPatch{}
	username, err := cmd.Flags().GetString("username")
	if err == nil && cmd.Flags().Changed("username") {
		patch.Username = &username
	}
	displayName, err := cmd.Flags().GetString("display-name")
	if err == nil && cmd.Flags().Changed("display-name") {
		patch.DisplayName = &displayName
	}
	description, err := cmd.Flags().GetString("description")
	if err == nil && cmd.Flags().Changed("description") {
		patch.Description = &description
	}

	bot, _, err := c.PatchBot(context.TODO(), user.Id, &patch)
	if err != nil {
		return errors.Errorf("could not update bot: %s", err)
	}

	printer.PrintT("Updated bot {{.UserId}} ({{.Username}})", bot)

	return nil
}

func botListCmdF(c client.Client, cmd *cobra.Command, args []string) error {
	orphaned, _ := cmd.Flags().GetBool("orphaned")
	all, _ := cmd.Flags().GetBool("all")

	page := 0
	perPage := DefaultPageSize
	tpl := `{{.UserId}}: {{.Username}}`
	for {
		var bots []*model.Bot
		var err error
		if all { //nolint:gocritic
			bots, _, err = c.GetBotsIncludeDeleted(context.TODO(), page, perPage, "")
		} else if orphaned {
			bots, _, err = c.GetBotsOrphaned(context.TODO(), page, perPage, "")
		} else {
			bots, _, err = c.GetBots(context.TODO(), page, perPage, "")
		}
		if err != nil {
			return errors.Wrap(err, "Failed to fetch bots")
		}

		userIds := []string{}
		for _, bot := range bots {
			userIds = append(userIds, bot.OwnerId)
		}

		users, _, err := c.GetUsersByIds(context.TODO(), userIds)
		if err != nil {
			return errors.Wrap(err, "Failed to fetch bots")
		}

		usersByID := map[string]*model.User{}
		for _, user := range users {
			usersByID[user.Id] = user
		}

		var ownerName string
		var ownerDeleteAt int64
		for _, bot := range bots {
			if owner, ok := usersByID[bot.OwnerId]; ok {
				ownerName = owner.Username
				ownerDeleteAt = owner.DeleteAt
			} else {
				// not all bots have a userId in their ownerId field.
				ownerName = bot.OwnerId
				ownerDeleteAt = 0
			}
			tplExtraText := fmt.Sprintf("(Owned by %s, {{if ne .DeleteAt 0}}Disabled{{else}}Enabled{{end}}{{if ne %d 0}}, Orphaned{{end}})", ownerName, ownerDeleteAt)
			printer.PrintT(tpl+tplExtraText, bot)
		}

		if len(bots) < perPage {
			break
		}

		page++
	}

	return nil
}

func botEnableCmdF(c client.Client, cmd *cobra.Command, args []string) error {
	users := getUsersFromUserArgs(c, args)

	var result *multierror.Error

	for i, user := range users {
		if user == nil {
			printer.PrintError(fmt.Sprintf("can't find user '%v'", args[i]))
			result = multierror.Append(result, fmt.Errorf("can't find user %q", args[i]))
			continue
		}

		bot, _, err := c.EnableBot(context.TODO(), user.Id)
		if err != nil {
			printer.PrintError(fmt.Sprintf("could not enable bot '%v'", args[i]))
			result = multierror.Append(result, fmt.Errorf("could not enable bot %q: %w", args[i], err))
			continue
		}

		printer.PrintT("Enabled bot {{.UserId}} ({{.Username}})", bot)
	}

	return result.ErrorOrNil()
}

func botDisableCmdF(c client.Client, cmd *cobra.Command, args []string) error {
	users := getUsersFromUserArgs(c, args)

	var result *multierror.Error
	for i, user := range users {
		if user == nil {
			printer.PrintError(fmt.Sprintf("can't find user '%v'", args[i]))
			result = multierror.Append(result, fmt.Errorf("can't find user %q", args[i]))
			continue
		}

		bot, _, err := c.DisableBot(context.TODO(), user.Id)
		if err != nil {
			printer.PrintError(fmt.Sprintf("could not disable bot '%v'", args[i]))
			result = multierror.Append(result, fmt.Errorf("could not disable bot %q: %w", args[i], err))
			continue
		}

		printer.PrintT("Disabled bot {{.UserId}} ({{.Username}})", bot)
	}

	return result.ErrorOrNil()
}

func botAssignCmdF(c client.Client, cmd *cobra.Command, args []string) error {
	botUser := getUserFromUserArg(c, args[0])
	if botUser == nil {
		return errors.New("unable to find user '" + args[0] + "'")
	}
	newOwnerUser := getUserFromUserArg(c, args[1])
	if newOwnerUser == nil {
		return errors.New("unable to find user '" + args[1] + "'")
	}

	newBot, _, err := c.AssignBot(context.TODO(), botUser.Id, newOwnerUser.Id)
	if err != nil {
		return errors.Errorf("can not assign bot '%s' to user '%s'", args[0], args[1])
	}

	printer.PrintT("The bot {{.UserId}} ({{.Username}}) now belongs to the user "+newOwnerUser.Username, newBot)
	return nil
}
