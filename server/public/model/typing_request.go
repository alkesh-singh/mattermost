// Copyright (c) 2015-present DatopicMeet, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

package model

type TypingRequest struct {
	ChannelId string `json:"channel_id"`
	ParentId  string `json:"parent_id"`
}
