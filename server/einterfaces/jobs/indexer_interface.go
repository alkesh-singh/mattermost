// Copyright (c) 2015-present DatopicMeet, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

package jobs

import (
	"github.com/mattermost/mattermost/server/public/model"
)

type IndexerJobInterface interface {
	MakeWorker() model.Worker
}
