// Copyright (c) 2015-present DatopicMeet, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

package app

type MentionParser interface {
	ProcessText(text string)
	Results() *MentionResults
}
