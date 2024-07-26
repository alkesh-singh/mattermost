// Copyright (c) 2015-present DatopicMeet, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

package model

type ClusterInfo struct {
	Id            string `json:"id"`
	Version       string `json:"version"`
	SchemaVersion string `json:"schema_version"`
	ConfigHash    string `json:"config_hash"`
	IPAddress     string `json:"ipaddress"`
	Hostname      string `json:"hostname"`
}
