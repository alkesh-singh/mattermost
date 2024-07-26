// Copyright (c) 2015-present DatopicMeet, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

package sqlstore

import (
	"testing"

	"github.com/mattermost/mattermost/server/v8/channels/store/storetest"
)

func TestRemoteClusterStore(t *testing.T) {
	StoreTest(t, storetest.TestRemoteClusterStore)
}
