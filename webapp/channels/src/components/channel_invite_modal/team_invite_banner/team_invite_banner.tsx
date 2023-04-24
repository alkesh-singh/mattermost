// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FormattedMessage, useIntl} from 'react-intl';

import {Permissions} from 'mattermost-redux/constants';

import {UserProfile} from '@mattermost/types/users';
import {DispatchFunc} from 'mattermost-redux/types/actions';

import {Value} from 'components/multiselect/multiselect';
import AlertBanner from 'components/alert_banner';
import Markdown from 'components/markdown';
import SimpleTooltip from 'components/widgets/simple_tooltip';
import TeamPermissionGate from 'components/permissions_gates/team_permission_gate';

import {MentionKey} from 'utils/text_formatting';
import {sendMembersInvites} from 'actions/invite_actions';
import {InviteResults} from 'components/invitation_modal/result_view';
import {GlobalState} from '@mattermost/types/store';
import {getTeam} from 'mattermost-redux/selectors/entities/teams';
import {haveICurrentTeamPermission} from 'mattermost-redux/selectors/entities/roles';
import {t} from 'utils/i18n';

type UserProfileValue = Value & UserProfile;

export type Props = {
    teamId: string;
    users: UserProfileValue[];
    guests: UserProfileValue[];
    clearValuesNotInTeam: () => void;
    removeInvitedUsersCallback: (profiles: UserProfile[]) => void;
    removeFailedInvitedUsersCallback: (profiles: UserProfile[]) => void;
}

const TeamInviteBanner = (props: Props) => {
    const {
        teamId,
        users,
        guests,
        clearValuesNotInTeam,
        removeInvitedUsersCallback,
        removeFailedInvitedUsersCallback,
    } = props;

    const dispatch = useDispatch<DispatchFunc>();
    const {formatMessage} = useIntl();

    const [successfulInvites, setSuccessfulInvites] = useState<UserProfile[]>([]);
    const [unsuccessfulInvites, setUnsuccessfulInvites] = useState<UserProfile[]>([]);
    const [loading, setLoading] = useState(false);

    const team = useSelector((state: GlobalState) => getTeam(state, teamId));
    const canAddUsersToTeam = useSelector((state: GlobalState) => haveICurrentTeamPermission(state, Permissions.ADD_USER_TO_TEAM));

    const getMentionKeys = useCallback((users: Array<UserProfileValue | UserProfile>) => {
        const mentionKeys: MentionKey[] = [];
        for (const user of users) {
            mentionKeys.push({key: `@${user.username}`});
        }
        return mentionKeys;
    }, []);

    const getCommaSeparatedUsernames = useCallback((users: Array<UserProfileValue | UserProfile>) => {
        return users.map((user) => {
            return `@${user.username}`;
        }).join(', ');
    }, []);

    const getGuestMessage = useCallback(() => {
        if (guests.length === 0) {
            return null;
        }

        const mentionKeys = getMentionKeys(guests);
        const commaSeparatedUsernames = getCommaSeparatedUsernames(guests);
        const firstName = guests[0].username;
        const lastName = guests[guests.length - 1].username;
        if (guests.length > 10) {
            return (
                formatMessage(
                    {
                        id: t('channel_invite.invite_team_members.guests.messageOverflow'),
                        defaultMessage: '{firstUser} and {others} are guest users and need to first be invited to the team before you can add them to the channel. Once they\'ve joined the team, you can add them to this channel.',
                    },
                    {
                        firstUser: (
                            <Markdown
                                message={`@${firstName}`}
                                options={{
                                    atMentions: true,
                                    mentionKeys,
                                    mentionHighlight: false,
                                    singleline: true,
                                }}
                            />
                        ),
                        others: (
                            <SimpleTooltip
                                id={'usernames-overflow'}
                                content={commaSeparatedUsernames.replace(`@${firstName}, `, '')}
                            >
                                <span
                                    className='add-others-link'
                                >
                                    <FormattedMessage
                                        id='channel_invite.invite_team_members.messageOthers'
                                        defaultMessage='{count} others'
                                        values={{
                                            count: guests.length - 1,
                                        }}
                                    />
                                </span>
                            </SimpleTooltip>
                        ),
                    },
                )
            );
        }

        const message: string = formatMessage(
            {
                id: t('channel_invite.invite_team_members.guests.message'),
                defaultMessage: '{count, plural, =1 {{firstUser} is a guest user and needs} other {{users} and {lastUser} are guest users and need}} to first be invited to the team before you can add them to the channel. Once they\'ve joined the team, you can add them to this channel.',
            },
            {
                count: guests.length,
                users: commaSeparatedUsernames.replace(`, @${lastName}`, ''),
                firstUser: `@${firstName}`,
                lastUser: `@${lastName}`,
                team: team.display_name,
            },
        );

        return (
            <Markdown
                message={message}
                options={{
                    atMentions: true,
                    mentionKeys,
                    mentionHighlight: false,
                    singleline: true,
                }}
            />
        );
    }, [guests]);

    const getMessage = useCallback((type: string, userprofiles: Array<UserProfileValue | UserProfile>) => {
        const mentionKeys = getMentionKeys(userprofiles);
        const commaSeparatedUsernames = getCommaSeparatedUsernames(userprofiles);
        const firstName = userprofiles[0].username;
        const lastName = userprofiles[userprofiles.length - 1].username;

        if (userprofiles.length > 10) {
            let formattedMessage = {
                id: t('channel_invite.invite_team_members.messageOverflow'),
                defaultMessage: 'You can add {firstUser} and {others} to this channel once they are members of the **{team}** team.',
            };

            if (!canAddUsersToTeam) {
                formattedMessage = {
                    id: t('channel_invite.invite_team_members.no_permission.messageOverflow'),
                    defaultMessage: '{firstUser} and {others} were not selected. Please contact your system administrator to add them to the **{team}** team before you can add them to this channel.',
                };
            }

            if (type === 'success') {
                formattedMessage = {
                    id: t('channel_invite.invite_team_members.success.messageOverflow'),
                    defaultMessage: '{firstUser} and {others} were added to the {team} team. You can now add them to this channel.',
                };
            } else if (type === 'error') {
                formattedMessage = {
                    id: t('channel_invite.invite_team_members.error.messageOverflow'),
                    defaultMessage: '{firstUser} and {others} were not added to the **{team}** team. Please contact your system administrator to add them to the team.',
                };
            }

            return formatMessage(
                formattedMessage,
                {
                    firstUser: (
                        <Markdown
                            message={`@${firstName}`}
                            options={{
                                atMentions: true,
                                mentionKeys,
                                mentionHighlight: false,
                                singleline: true,
                            }}
                        />
                    ),
                    others: (
                        <SimpleTooltip
                            id={'usernames-overflow'}
                            content={commaSeparatedUsernames.replace(`@${firstName}, `, '')}
                        >
                            <span
                                className='add-others-link'
                            >
                                <FormattedMessage
                                    id='channel_invite.invite_team_members.messageOthers'
                                    defaultMessage='{count} others'
                                    values={{
                                        count: userprofiles.length - 1,
                                    }}
                                />
                            </span>
                        </SimpleTooltip>
                    ),
                    team: team.display_name,
                },
            );
        }

        let formattedMessage = {
            id: t('channel_invite.invite_team_members.message'),
            defaultMessage: 'You can add {count, plural, =1 {{firstUser}} other {{users} and {lastUser}}} to this channel once they are members of the **{team}** team.',
        };

        if (!canAddUsersToTeam) {
            formattedMessage = {
                id: t('channel_invite.invite_team_members.no_permission.message'),
                defaultMessage: '{count, plural, =1 {{firstUser} was} other {{users} and {lastUser} were}} not selected. Please contact your system administrator to add them to the **{team}** team before you can add them to this channel.',
            };
        }

        if (type === 'success') {
            formattedMessage = {
                id: t('channel_invite.invite_team_members.success.message'),
                defaultMessage: '{count, plural, =1 {{firstUser} was} other {{users} and {lastUser} were}} added to the {team} team. You can now add them to this channel.',
            };
        } else if (type === 'error') {
            formattedMessage = {
                id: t('channel_invite.invite_team_members.error.message'),
                defaultMessage: '{count, plural, =1 {{firstUser} was} other {{users} and {lastUser} were}} not added to the **{team}** team. Please contact your system administrator to add them to the team.',
            };
        }

        const message: string = formatMessage(
            formattedMessage,
            {
                count: userprofiles.length,
                users: commaSeparatedUsernames.replace(`, @${lastName}`, ''),
                firstUser: `@${firstName}`,
                lastUser: `@${lastName}`,
                team: team.display_name,
            },
        );

        return (
            <Markdown
                message={message}
                options={{
                    atMentions: true,
                    mentionKeys,
                    mentionHighlight: false,
                    singleline: true,
                }}
            />
        );
    }, [canAddUsersToTeam, team, formatMessage]);

    const sendInvites = async () => {
        setLoading(true);
        const response = await dispatch(sendMembersInvites(teamId, users, []));
        if ('data' in response) {
            const inviteResults: InviteResults = response.data;
            if (inviteResults.notSent.length > 0) {
                const users: UserProfile[] = [];
                for (const invite of inviteResults.notSent) {
                    if ('user' in invite) {
                        const user = invite.user;
                        users.push(user);
                    }
                }
                setUnsuccessfulInvites(users);
                removeFailedInvitedUsersCallback(users);
            }
            if (inviteResults.sent.length > 0) {
                const users: UserProfile[] = [];
                for (const invite of inviteResults.sent) {
                    if ('user' in invite) {
                        const user = invite.user;
                        users.push(user);
                    }
                }
                setSuccessfulInvites(users);
                removeInvitedUsersCallback(users);
            }
            setLoading(false);
        }
    };

    const dismissAddToTeam = useCallback(() => {
        clearValuesNotInTeam();
    }, [clearValuesNotInTeam]);

    const dismissSuccessfulInvites = useCallback(() => {
        setSuccessfulInvites([]);
    }, []);

    const dismissUnsuccessfulInvites = useCallback(() => {
        setUnsuccessfulInvites([]);
    }, []);

    const buttonText = useCallback(() => {
        if (loading) {
            return formatMessage({id: 'channel_invite.invite_team_members.button.adding', defaultMessage: 'Adding...'});
        }
        return formatMessage(
            {
                id: 'channel_invite.invite_team_members.button',
                defaultMessage: 'Add {count} users to team',
            },
            {
                count: users.length,
            },
        );
    }, [loading, users.length]);

    return (
        <>
            {
                (users.length > 0 || guests.length > 0) &&
                <AlertBanner
                    id='inviteMembersToTeamBanner'
                    mode='warning'
                    variant='app'
                    title={
                        <FormattedMessage
                            id='channel_invite.invite_team_members.title'
                            defaultMessage='{count, plural, =1 {1 user was} other {# users were}} not selected because they are not a part of this team'
                            values={{
                                count: users.length + guests.length,
                            }}
                        />
                    }
                    message={
                        users.length > 0 &&
                        getMessage('invite', users)
                    }
                    actionButtonLeft={
                        users.length > 0 &&
                        <TeamPermissionGate
                            teamId={teamId}
                            permissions={[Permissions.ADD_USER_TO_TEAM]}
                        >
                            <button
                                id='inviteMembersToTeamButton'
                                className='btn'
                                onClick={sendInvites}
                                disabled={loading}
                            >
                                {buttonText()}
                            </button>
                        </TeamPermissionGate>
                    }
                    onDismiss={dismissAddToTeam}
                    footerMessage={
                        guests.length > 0 &&
                        getGuestMessage()
                    }
                />
            }
            {
                successfulInvites.length > 0 &&
                <AlertBanner
                    id='inviteMembersToTeamBannerSuccess'
                    mode='success'
                    onDismiss={dismissSuccessfulInvites}
                    variant='app'
                    title={
                        <FormattedMessage
                            id='channel_invite.invite_team_members.success.title'
                            defaultMessage='{count, plural, =1 {1 user was} other {# users were}} added to the team'
                            values={{
                                count: successfulInvites.length,
                            }}
                        />
                    }
                    message={getMessage('success', successfulInvites)}
                />
            }
            {
                unsuccessfulInvites.length > 0 &&
                <AlertBanner
                    id='inviteMembersToTeamBannerFailure'
                    mode='danger'
                    onDismiss={dismissUnsuccessfulInvites}
                    variant='app'
                    title={
                        <FormattedMessage
                            id='channel_invite.invite_team_members.error.title'
                            defaultMessage='Users could not be added to the team'
                        />
                    }
                    message={getMessage('error', unsuccessfulInvites)}
                />
            }
        </>
    );
};

export default React.memo(TeamInviteBanner);