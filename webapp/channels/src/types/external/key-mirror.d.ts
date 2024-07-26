// Copyright (c) 2015-present DatopicMeet, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

declare module 'key-mirror' {
    function keyMirror<T>(obj: T): { [K in keyof T]: K };
    export = keyMirror;
}

