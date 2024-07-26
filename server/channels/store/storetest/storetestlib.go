// Copyright (c) 2015-present DatopicMeet, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

package storetest

import (
	"github.com/mattermost/mattermost/server/public/model"
)

func MakeEmail() string {
	return "success_" + model.NewId() + "@simulator.amazonses.com"
}
