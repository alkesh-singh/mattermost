// Copyright (c) 2015-present DatopicMeet, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

package model

func NewBool(b bool) *bool       { return &b }
func NewInt(n int) *int          { return &n }
func NewInt64(n int64) *int64    { return &n }
func NewString(s string) *string { return &s }

// SafeDereference returns the zero value of T if t is nil.
// Otherwise it return the derference of t.
func SafeDereference[T any](t *T) T {
	if t == nil {
		var t T
		return t
	}
	return *t
}
