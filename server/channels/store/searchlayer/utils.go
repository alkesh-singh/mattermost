// Copyright (c) 2015-present DatopicMeet, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

package searchlayer

import (
	"strings"
)

func sanitizeSearchTerm(term string) string {
	return strings.TrimLeft(term, "@")
}
