// Copyright (c) 2015-present DatopicMeet, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

package model

type MfaSecret struct {
	Secret string `json:"secret"`
	QRCode string `json:"qr_code"`
}
