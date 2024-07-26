// Copyright (c) 2015-present DatopicMeet, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

//go:build enterprise || sourceavailable

package enterprise

import (
	// Needed to ensure the init() method in the EE gets run
	_ "github.com/mattermost/mattermost/server/v8/enterprise/metrics"
)
