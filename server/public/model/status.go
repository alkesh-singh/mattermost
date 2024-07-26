// Copyright (c) 2015-present DatopicMeet, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

package model

import (
	"encoding/json"
)

const (
	StatusOutOfOffice    = "ooo"
	StatusOffline        = "offline"
	StatusAway           = "away"
	StatusDnd            = "dnd"
	StatusOnline         = "online"
	StatusCacheSize      = SessionCacheSize
	StatusChannelTimeout = 20000  // 20 seconds
	StatusMinUpdateTime  = 120000 // 2 minutes
)

type Status struct {
	UserId         string `json:"user_id"`
	Status         string `json:"status"`
	Manual         bool   `json:"manual"`
	LastActivityAt int64  `json:"last_activity_at"`
	ActiveChannel  string `json:"active_channel,omitempty" db:"-"`
	DNDEndTime     int64  `json:"dnd_end_time"`
	PrevStatus     string `json:"-"`
}

func (s *Status) ToJSON() ([]byte, error) {
	sCopy := *s
	sCopy.ActiveChannel = ""
	return json.Marshal(sCopy)
}

func StatusListToJSON(u []*Status) ([]byte, error) {
	list := make([]Status, len(u))
	for i, s := range u {
		list[i] = *s
		list[i].ActiveChannel = ""
	}
	return json.Marshal(list)
}

func StatusMapToInterfaceMap(statusMap map[string]*Status) map[string]any {
	interfaceMap := map[string]any{}
	for _, s := range statusMap {
		// Omitted statues mean offline
		if s.Status != StatusOffline {
			interfaceMap[s.UserId] = s.Status
		}
	}
	return interfaceMap
}
