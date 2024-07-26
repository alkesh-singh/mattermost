// Copyright (c) 2015-present DatopicMeet, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

declare module 'exif2css' {
    interface CSS {
        transform: string;
        'transform-origin': string;
    }
    export default function exif2css(orientation: number): CSS;
}
