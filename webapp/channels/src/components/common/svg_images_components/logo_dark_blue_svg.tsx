// Copyright (c) 2015-present DatopicMeet, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import styled from 'styled-components';

type Props = {
    width?: number;
    height?: number;
    className?: string;
}

const Svg = styled.svg.attrs({
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``;

export default (props: Props) => (
    <Svg
       width="150" height="60" viewBox="0 0 197 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0 C1.65 0 3.3 0 5 0 C4.95875 0.78375 4.9175 1.5675 4.875 2.375 C4.71271266 5.16116119 4.71271266 5.16116119 7 7 C7.66 4.69 8.32 2.38 9 0 C12.04263267 -0.10845027 15.08136204 -0.18752063 18.125 -0.25 C18.9809375 -0.28351562 19.836875 -0.31703125 20.71875 -0.3515625 C27.40023833 -0.45435463 30.85398315 1.16858483 35.875 5.6875 C37.68841481 9.41507488 37.758111 12.94972177 37 17 C34.94881754 20.85003693 32.04072848 23.38816529 28 25 C25.640625 25.1953125 25.640625 25.1953125 23.25 25.125 C22.45078125 25.10695313 21.6515625 25.08890625 20.828125 25.0703125 C20.22484375 25.04710938 19.6215625 25.02390625 19 25 C19.01160156 25.63808594 19.02320313 26.27617188 19.03515625 26.93359375 C19.04417969 27.75988281 19.05320313 28.58617188 19.0625 29.4375 C19.07410156 30.26121094 19.08570313 31.08492187 19.09765625 31.93359375 C19 34 19 34 18 35 C16.48071962 35.07179964 14.95832518 35.08392007 13.4375 35.0625 C12.61121094 35.05347656 11.78492187 35.04445312 10.93359375 35.03515625 C10.29550781 35.02355469 9.65742187 35.01195312 9 35 C8.34 33.35 7.68 31.7 7 30 C6.38125 30.495 5.7625 30.99 5.125 31.5 C0.56415727 33.68920451 -3.04877268 34.18217506 -8 33 C-13.06671334 30.27472237 -18.02019656 27.07741082 -19.83203125 21.38671875 C-20.05488529 15.94742952 -18.68608478 12.10735162 -15 8 C-14.01 7.67 -13.02 7.34 -12 7 C-12 5.68 -12 4.36 -12 3 C-10.35 3 -8.7 3 -7 3 C-6.67 3.66 -6.34 4.32 -6 5 C-4.02 4.67 -2.04 4.34 0 4 C0 2.68 0 1.36 0 0 Z M19 9 C19 11.31 19 13.62 19 16 C20.99954746 16.04254356 23.00041636 16.04080783 25 16 C26.29633621 14.93354885 26.29633621 14.93354885 26.0625 12.4375 C26.041875 11.633125 26.02125 10.82875 26 10 C23.69 9.67 21.38 9.34 19 9 Z " fill="#F1DE33" transform="translate(111,13)"/>
        <path d="M0 0 C13.98633826 0.1565104 13.98633826 0.1565104 19.47265625 4.90234375 C23.49288379 9.39777549 24.88670403 12.95588063 24.7734375 19.12890625 C24.27841938 24.10658849 22.35932227 27.82923869 18.625 31.0625 C14.59914346 33.93811182 12.00492353 35.51273545 7.015625 35.4453125 C5.74912109 35.43564453 5.74912109 35.43564453 4.45703125 35.42578125 C3.14798828 35.40064453 3.14798828 35.40064453 1.8125 35.375 C0.92433594 35.36597656 0.03617188 35.35695312 -0.87890625 35.34765625 C-3.06538058 35.32414577 -5.25130094 35.29128499 -7.4375 35.25 C-7.4621519 30.42619198 -7.48033693 25.60242033 -7.49243164 20.77856445 C-7.49747174 19.13630536 -7.50430378 17.49405077 -7.51293945 15.85180664 C-7.52501926 13.49624521 -7.53073139 11.14074291 -7.53515625 8.78515625 C-7.54031754 8.04660904 -7.54547882 7.30806183 -7.55079651 6.5471344 C-7.5509925 4.78101912 -7.49944719 3.01502854 -7.4375 1.25 C-5.56059942 -0.62690058 -2.50786973 0.03239444 0 0 Z M2.5625 10.25 C2.5625 15.2 2.5625 20.15 2.5625 25.25 C9.06285912 25.87961047 9.06285912 25.87961047 12 23.6875 C14.18249672 20.28280512 14.19984462 18.21569988 13.5625 14.25 C11.5526643 11.65878096 11.5526643 11.65878096 8.5625 10.25 C6.5825 10.25 4.6025 10.25 2.5625 10.25 Z " fill="#363636" transform="translate(11.4375,12.75)"/>
        <path d="M0 0 C1.23556641 0.01740234 1.23556641 0.01740234 2.49609375 0.03515625 C3.32238281 0.04417969 4.14867188 0.05320312 5 0.0625 C5.63808594 0.07410156 6.27617188 0.08570313 6.93359375 0.09765625 C9.90923404 5.82851902 12.34568496 11.59853759 14.58984375 17.65625 C15.68752753 20.26601815 15.68752753 20.26601815 18.08984375 20.9453125 C18.69828125 20.99558594 19.30671875 21.04585937 19.93359375 21.09765625 C19.93359375 22.08765625 19.93359375 23.07765625 19.93359375 24.09765625 C19.27359375 24.09765625 18.61359375 24.09765625 17.93359375 24.09765625 C18.15015625 24.64035156 18.36671875 25.18304688 18.58984375 25.7421875 C18.86828125 26.45761719 19.14671875 27.17304687 19.43359375 27.91015625 C19.71203125 28.61785156 19.99046875 29.32554688 20.27734375 30.0546875 C20.93359375 32.09765625 20.93359375 32.09765625 20.93359375 35.09765625 C17.30359375 35.09765625 13.67359375 35.09765625 9.93359375 35.09765625 C9.27359375 32.78765625 8.61359375 30.47765625 7.93359375 28.09765625 C6.13735519 28.49415038 4.3466094 28.91559077 2.55859375 29.34765625 C1.56085937 29.5796875 0.563125 29.81171875 -0.46484375 30.05078125 C-3.54885774 30.95786626 -3.54885774 30.95786626 -5.06640625 35.09765625 C-8.69640625 35.09765625 -12.32640625 35.09765625 -16.06640625 35.09765625 C-15.19702406 30.75074531 -14.06562547 27.36152458 -12.37890625 23.30078125 C-12.11634033 22.66654236 -11.85377441 22.03230347 -11.58325195 21.37884521 C-11.03065619 20.04674456 -10.47584761 18.71555991 -9.91894531 17.38525391 C-9.06420426 15.34239342 -8.21713428 13.29647695 -7.37109375 11.25 C-2.74873768 0.12990254 -2.74873768 0.12990254 0 0 Z M1.93359375 15.09765625 C1.27359375 17.07765625 0.61359375 19.05765625 -0.06640625 21.09765625 C1.58359375 21.09765625 3.23359375 21.09765625 4.93359375 21.09765625 C4.27359375 19.11765625 3.61359375 17.13765625 2.93359375 15.09765625 C2.60359375 15.09765625 2.27359375 15.09765625 1.93359375 15.09765625 Z " fill="#373737" transform="translate(49.06640625,12.90234375)"/>
        <path d="M0 0 C3.04263267 -0.10845027 6.08136204 -0.18752063 9.125 -0.25 C9.9809375 -0.28351562 10.836875 -0.31703125 11.71875 -0.3515625 C18.40023833 -0.45435463 21.85398315 1.16858483 26.875 5.6875 C28.68841481 9.41507488 28.758111 12.94972177 28 17 C25.94881754 20.85003693 23.04072848 23.38816529 19 25 C16.640625 25.1953125 16.640625 25.1953125 14.25 25.125 C13.45078125 25.10695313 12.6515625 25.08890625 11.828125 25.0703125 C11.22484375 25.04710938 10.6215625 25.02390625 10 25 C10.01160156 25.63808594 10.02320313 26.27617188 10.03515625 26.93359375 C10.04417969 27.75988281 10.05320313 28.58617188 10.0625 29.4375 C10.07410156 30.26121094 10.08570313 31.08492187 10.09765625 31.93359375 C10 34 10 34 9 35 C7.48071962 35.07179964 5.95832518 35.08392007 4.4375 35.0625 C3.61121094 35.05347656 2.78492187 35.04445312 1.93359375 35.03515625 C1.29550781 35.02355469 0.65742187 35.01195312 0 35 C-0.02696365 33.20841511 -0.04637917 31.41671527 -0.0625 29.625 C-0.07410156 28.62726562 -0.08570312 27.62953125 -0.09765625 26.6015625 C0 24 0 24 1 22 C1.09584979 20.1478437 1.12983606 18.29212847 1.125 16.4375 C1.12757812 15.44621094 1.13015625 14.45492188 1.1328125 13.43359375 C1.27438431 11.05187652 1.27438431 11.05187652 0 10 C-0.07205511 8.31391034 -0.08386068 6.62499341 -0.0625 4.9375 C-0.05347656 4.01839844 -0.04445313 3.09929688 -0.03515625 2.15234375 C-0.02355469 1.44207031 -0.01195313 0.73179688 0 0 Z M10 9 C10 11.31 10 13.62 10 16 C11.99954746 16.04254356 14.00041636 16.04080783 16 16 C17.29633621 14.93354885 17.29633621 14.93354885 17.0625 12.4375 C17.041875 11.633125 17.02125 10.82875 17 10 C14.69 9.67 12.38 9.34 10 9 Z " fill="#42494E" transform="translate(120,13)"/>
        <path d="M0 0 C1.70408872 0.97531887 3.33730248 2.07170943 4.9609375 3.17578125 C5.9509375 3.83578125 6.9409375 4.49578125 7.9609375 5.17578125 C7.9609375 6.16578125 7.9609375 7.15578125 7.9609375 8.17578125 C5.16432829 10.19555457 2.4323123 11.81667351 -1.0390625 12.17578125 C-1.6990625 11.51578125 -2.3590625 10.85578125 -3.0390625 10.17578125 C-6.62250226 10.00900843 -6.62250226 10.00900843 -10.0390625 10.17578125 C-10.3690625 10.83578125 -10.6990625 11.49578125 -11.0390625 12.17578125 C-11.6990625 12.17578125 -12.3590625 12.17578125 -13.0390625 12.17578125 C-12.3790625 15.47578125 -11.7190625 18.77578125 -11.0390625 22.17578125 C-5.94187372 23.30271105 -5.94187372 23.30271105 -1.1015625 21.73828125 C-0.4209375 21.22265625 0.2596875 20.70703125 0.9609375 20.17578125 C3.2709375 21.49578125 5.5809375 22.81578125 7.9609375 24.17578125 C7.9609375 25.16578125 7.9609375 26.15578125 7.9609375 27.17578125 C3.49238139 31.43649754 -0.1034399 33.84344662 -6.3515625 34.55078125 C-11.96369143 33.98005627 -16.07318351 31.77952464 -20.4140625 28.23828125 C-24.31798674 23.28330048 -24.7116739 18.29437524 -24.0390625 12.17578125 C-22.2250965 6.73388326 -18.65643612 3.39744875 -14.0390625 0.17578125 C-9.45175297 -1.35332193 -4.57439874 -1.84903857 0 0 Z " fill="#484848" transform="translate(186.0390625,13.82421875)"/>
        <path d="M0 0 C1.67542976 0.28604898 3.34385343 0.61781233 5 1 C5 2.98 5 4.96 5 7 C3.02 7 1.04 7 -1 7 C-0.979375 8.299375 -0.95875 9.59875 -0.9375 10.9375 C-0.91600546 12.29165633 -0.92851801 13.64756083 -1 15 C-1.33 15.33 -1.66 15.66 -2 16 C-4.97 16 -7.94 16 -11 16 C-11 24.25 -11 32.5 -11 41 C-14.63 41 -18.26 41 -22 41 C-22 32.75 -22 24.5 -22 16 C-24.97 16 -27.94 16 -31 16 C-31 12.7 -31 9.4 -31 6 C-21.1 6 -11.2 6 -1 6 C-1 4.35 -1 2.7 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#363636" transform="translate(96,7)"/>
        <path d="M0 0 C3.63 0 7.26 0 11 0 C11 11.55 11 23.1 11 35 C7.37 35 3.74 35 0 35 C0 23.45 0 11.9 0 0 Z " fill="#246EA2" transform="translate(149,13)"/>
        <path d="M0 0 C3.3 0 6.6 0 10 0 C10 11.55 10 23.1 10 35 C6.37 35 2.74 35 -1 35 C-1.0246519 30.17619198 -1.04283693 25.35242033 -1.05493164 20.52856445 C-1.05997174 18.88630536 -1.06680378 17.24405077 -1.07543945 15.60180664 C-1.08751926 13.24624521 -1.09323139 10.89074291 -1.09765625 8.53515625 C-1.10281754 7.79660904 -1.10797882 7.05806183 -1.11329651 6.2971344 C-1.1134925 4.53101912 -1.06194719 2.76502854 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#595959" transform="translate(5,13)"/>
        <path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3.309375 1.825 3.61875 2.65 3.9375 3.5 C4.72199931 6.08316853 4.72199931 6.08316853 6.6875 6.875 C11.41730137 7.13066494 15.04397097 6.63735268 19 4 C21.31 5.32 23.62 6.64 26 8 C26 8.99 26 9.98 26 11 C21.53144389 15.26071629 17.9356226 17.66766537 11.6875 18.375 C6.32104595 17.82925891 1.83304948 15.83304948 -2 12 C-2.4140625 9.8359375 -2.4140625 9.8359375 -2.625 7.375 C-2.69976562 6.55773438 -2.77453125 5.74046875 -2.8515625 4.8984375 C-2.90054688 4.27195312 -2.94953125 3.64546875 -3 3 C-2.01 2.67 -1.02 2.34 0 2 C0 1.34 0 0.68 0 0 Z " fill="#454545" transform="translate(168,30)"/>
        <path d="M0 0 C0.33 0 0.66 0 1 0 C1.06058594 0.63808594 1.12117188 1.27617187 1.18359375 1.93359375 C1.30927734 3.17302734 1.30927734 3.17302734 1.4375 4.4375 C1.51871094 5.26121094 1.59992188 6.08492187 1.68359375 6.93359375 C1.78930815 8.98662025 1.78930815 8.98662025 3 10 C3.09879565 11.810285 3.12971514 13.62452727 3.125 15.4375 C3.12886719 16.92056641 3.12886719 16.92056641 3.1328125 18.43359375 C3 21 3 21 2 23 C1.77377919 24.70363822 1.59111527 26.41328701 1.4375 28.125 C1.35371094 29.03507812 1.26992187 29.94515625 1.18359375 30.8828125 C1.09271484 31.93082031 1.09271484 31.93082031 1 33 C0.34 31.68 -0.32 30.36 -1 29 C-2.99954746 28.95745644 -5.00041636 28.95919217 -7 29 C-7.33 29.33 -7.66 29.66 -8 30 C-9.51928038 30.07179964 -11.04167482 30.08392007 -12.5625 30.0625 C-13.38878906 30.05347656 -14.21507813 30.04445313 -15.06640625 30.03515625 C-16.02353516 30.01775391 -16.02353516 30.01775391 -17 30 C-17.33 29.34 -17.66 28.68 -18 28 C-17.49210937 27.56429687 -16.98421875 27.12859375 -16.4609375 26.6796875 C-14.29201884 24.80320731 -12.14419359 22.90466206 -10 21 C-9.12794922 20.24783203 -9.12794922 20.24783203 -8.23828125 19.48046875 C-2.35434289 14.10044451 -0.80506412 7.72861553 0 0 Z " fill="#F1EA32" transform="translate(119,14)"/>
        <path d="M0 0 C1.98 0.99 1.98 0.99 4 2 C3.34 2.66 2.68 3.32 2 4 C2.680625 4.7425 3.36125 5.485 4.0625 6.25 C6 9 6 9 5.75 11.0625 C5.5025 11.701875 5.255 12.34125 5 13 C4.56613908 16.87797662 4.56613908 16.87797662 6.5 18.75 C6.995 19.1625 7.49 19.575 8 20 C7.01 20.66 6.02 21.32 5 22 C4.27617533 24.05925139 4.27617533 24.05925139 4 26 C5.65 25.67 7.3 25.34 9 25 C9 22.36 9 19.72 9 17 C9.66 17 10.32 17 11 17 C11 19.31 11 21.62 11 24 C14.3 23.67 17.6 23.34 21 23 C19 25 19 25 16.8359375 25.1953125 C16.02382812 25.17210938 15.21171875 25.14890625 14.375 25.125 C13.55773437 25.10695313 12.74046875 25.08890625 11.8984375 25.0703125 C11.27195313 25.04710938 10.64546875 25.02390625 10 25 C10.01160156 25.63808594 10.02320313 26.27617188 10.03515625 26.93359375 C10.04417969 27.75988281 10.05320313 28.58617188 10.0625 29.4375 C10.07410156 30.26121094 10.08570313 31.08492187 10.09765625 31.93359375 C10 34 10 34 9 35 C7.48071962 35.07179964 5.95832518 35.08392007 4.4375 35.0625 C3.61121094 35.05347656 2.78492187 35.04445312 1.93359375 35.03515625 C1.29550781 35.02355469 0.65742187 35.01195312 0 35 C-0.02696365 33.20841511 -0.04637917 31.41671527 -0.0625 29.625 C-0.07410156 28.62726562 -0.08570312 27.62953125 -0.09765625 26.6015625 C0 24 0 24 1 22 C1.09584979 20.1478437 1.12983606 18.29212847 1.125 16.4375 C1.12757812 15.44621094 1.13015625 14.45492188 1.1328125 13.43359375 C1.27438431 11.05187652 1.27438431 11.05187652 0 10 C-0.07205511 8.31391034 -0.08386068 6.62499341 -0.0625 4.9375 C-0.05347656 4.01839844 -0.04445313 3.09929688 -0.03515625 2.15234375 C-0.02355469 1.44207031 -0.01195313 0.73179688 0 0 Z " fill="#404243" transform="translate(120,13)"/>
        <path d="M0 0 C2.125 0 2.125 0 5 1 C7.37239994 3.42681278 9.43759657 5.9809197 11 9 C9.48954775 13.53135674 6.0892213 15.69740646 2 18 C-2.08695652 17.91304348 -2.08695652 17.91304348 -4 16 C-4.56156303 11.11163982 -4.84365411 6.5651193 -2 2.375 C-1.34 1.59125 -0.68 0.8075 0 0 Z " fill="#E04444" transform="translate(96,21)"/>
        <path d="M0 0 C1.67542976 0.28604898 3.34385343 0.61781233 5 1 C5 2.98 5 4.96 5 7 C3.02 7 1.04 7 -1 7 C-0.979375 8.299375 -0.95875 9.59875 -0.9375 10.9375 C-0.91600546 12.29165633 -0.92851801 13.64756083 -1 15 C-1.33 15.33 -1.66 15.66 -2 16 C-4.97 16 -7.94 16 -11 16 C-11 24.25 -11 32.5 -11 41 C-11.33 41 -11.66 41 -12 41 C-12 29.45 -12 17.9 -12 6 C-8.37 6 -4.74 6 -1 6 C-1 4.35 -1 2.7 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#484848" transform="translate(96,7)"/>
        <path d="M0 0 C1.65 0 3.3 0 5 0 C4.39733215 4.50727647 2.63400206 7.8587963 0.4375 11.8125 C-0.0565332 12.7087207 -0.0565332 12.7087207 -0.56054688 13.62304688 C-1.36773267 15.08533998 -2.18304917 16.5431399 -3 18 C-6.66666667 14.33333333 -10.33333333 10.66666667 -14 7 C-13.34 7 -12.68 7 -12 7 C-12 5.68 -12 4.36 -12 3 C-10.35 3 -8.7 3 -7 3 C-6.67 3.66 -6.34 4.32 -6 5 C-4.02 4.67 -2.04 4.34 0 4 C0 2.68 0 1.36 0 0 Z " fill="#4983B1" transform="translate(111,13)"/>
        <path d="M0 0 C1.4540625 0.0309375 1.4540625 0.0309375 2.9375 0.0625 C4.1414337 3.81649798 4.03627617 7.39467412 4 11.3125 C3.99097656 12.57578125 3.98195313 13.8390625 3.97265625 15.140625 C3.96105469 16.10484375 3.94945312 17.0690625 3.9375 18.0625 C1.2975 18.7225 -1.3425 19.3825 -4.0625 20.0625 C-4.08933697 16.91661056 -4.10925902 13.77094729 -4.125 10.625 C-4.13337891 9.72716797 -4.14175781 8.82933594 -4.15039062 7.90429688 C-4.15361328 7.05029297 -4.15683594 6.19628906 -4.16015625 5.31640625 C-4.16801147 4.13026733 -4.16801147 4.13026733 -4.17602539 2.92016602 C-3.98010202 -0.28581445 -3.26361999 0.06660449 0 0 Z " fill="#444444" transform="translate(8.0625,12.9375)"/>
        <path d="M0 0 C9.96875 -0.34375 9.96875 -0.34375 14 2 C15.44169389 4.97587381 16.16859127 7.76674383 17 11 C13.7 11 10.4 11 7 11 C6.67 10.01 6.34 9.02 6 8 C3.03 7.505 3.03 7.505 0 7 C0 4.69 0 2.38 0 0 Z " fill="#0F70B6" transform="translate(130,14)"/>
        <path d="M0 0 C2.64 0 5.28 0 8 0 C8.8125 1.625 8.8125 1.625 9 4 C5.3255814 9.51162791 5.3255814 9.51162791 1.625 10.875 C-1.5893246 11.02806308 -4.78270225 11.06308427 -8 11 C-8 8.69 -8 6.38 -8 4 C-6.865625 3.71125 -5.73125 3.4225 -4.5625 3.125 C-3.386875 2.75375 -2.21125 2.3825 -1 2 C-0.67 1.34 -0.34 0.68 0 0 Z " fill="#1572B4" transform="translate(139,26)"/>
        <path d="M0 0 C6.22297833 -0.24403837 9.84599161 0.56399441 15 4 C15 4.99 15 5.98 15 7 C12.12498789 9.07639763 9.48624056 10.3543999 6 11 C5.34 9.68 4.68 8.36 4 7 C2.68 7 1.36 7 0 7 C0 4.69 0 2.38 0 0 Z " fill="#1B6DA8" transform="translate(179,15)"/>
        <path d="M0 0 C0 3 0 3 -2.4375 5.6875 C-6.34474955 8.8170476 -10.21006352 8.47899365 -15 8 C-15 5.69 -15 3.38 -15 1 C-9.10563242 -2.19278244 -6.3461382 -2.1153794 0 0 Z " fill="#156FAF" transform="translate(194,38)"/>
        <path d="M0 0 C0.76183594 -0.01417969 1.52367187 -0.02835938 2.30859375 -0.04296875 C4.79597315 0.21137334 6.41058106 0.94732804 8.5625 2.1875 C5.49359813 3.72195094 2.86155734 2.73734289 -0.4375 2.1875 C-0.4375 4.4975 -0.4375 6.8075 -0.4375 9.1875 C0.8825 9.5175 2.2025 9.8475 3.5625 10.1875 C1.2525 10.5175 -1.0575 10.8475 -3.4375 11.1875 C-3.7675 10.5275 -4.0975 9.8675 -4.4375 9.1875 C-3.7775 9.1875 -3.1175 9.1875 -2.4375 9.1875 C-2.7675 7.8675 -3.0975 6.5475 -3.4375 5.1875 C-5.7475 5.5175 -8.0575 5.8475 -10.4375 6.1875 C-10.540625 6.80625 -10.64375 7.425 -10.75 8.0625 C-11.4375 10.1875 -11.4375 10.1875 -14.4375 12.1875 C-14.7675 13.1775 -15.0975 14.1675 -15.4375 15.1875 C-16.0975 15.1875 -16.7575 15.1875 -17.4375 15.1875 C-16.43979522 9.07655822 -14.12517406 6.50096286 -9.41015625 2.5703125 C-6.31985745 0.40404364 -3.67562227 0.03099176 0 0 Z " fill="#595959" transform="translate(179.4375,12.8125)"/>
        <path d="M0 0 C0.99 0.66 1.98 1.32 3 2 C3.29296875 5.0390625 3.29296875 5.0390625 3.1875 8.625 C3.16042969 9.81351563 3.13335937 11.00203125 3.10546875 12.2265625 C3.07066406 13.14179687 3.03585937 14.05703125 3 15 C0.36 15 -2.28 15 -5 15 C-5 12.69 -5 10.38 -5 8 C-3.68 7.34 -2.36 6.68 -1 6 C-1 4.68 -1 3.36 -1 2 C-0.67 1.34 -0.34 0.68 0 0 Z " fill="#484848" transform="translate(9,33)"/>
        <path d="M0 0 C1.32 0.66 2.64 1.32 4 2 C4.25 4.3125 4.25 4.3125 4 7 C1.95575462 8.97610386 0.8823175 10 -2 10 C-2.33 10.99 -2.66 11.98 -3 13 C-4.32 13.33 -5.64 13.66 -7 14 C-4.69 9.38 -2.38 4.76 0 0 Z " fill="#F7C51E" transform="translate(114,18)"/>
        <path d="M0 0 C4.63607655 1.19213397 6.49826189 3.52902771 9.1796875 7.24609375 C10 9 10 9 9 12 C7.29296875 13.60546875 7.29296875 13.60546875 5.1875 15.1875 C4.50042969 15.71730469 3.81335938 16.24710938 3.10546875 16.79296875 C1 18 1 18 -3 18 C-1.48328036 13.44984107 2.16891053 11.49942736 6 9 C5.690625 8.38125 5.38125 7.7625 5.0625 7.125 C4.375 5.75 3.6875 4.375 3 3 C2.01 2.67 1.02 2.34 0 2 C0 1.34 0 0.68 0 0 Z " fill="#C91F25" transform="translate(97,21)"/>
        <path d="M0 0 C0.33 0 0.66 0 1 0 C1.06058594 0.63808594 1.12117188 1.27617187 1.18359375 1.93359375 C1.26738281 2.75988281 1.35117188 3.58617187 1.4375 4.4375 C1.55931641 5.67306641 1.55931641 5.67306641 1.68359375 6.93359375 C1.78930815 8.98662025 1.78930815 8.98662025 3 10 C3.09879565 11.810285 3.12971514 13.62452727 3.125 15.4375 C3.12757812 16.42621094 3.13015625 17.41492188 3.1328125 18.43359375 C3 21 3 21 2 23 C1.77377919 24.70363822 1.59111527 26.41328701 1.4375 28.125 C1.35371094 29.03507812 1.26992187 29.94515625 1.18359375 30.8828125 C1.12300781 31.58148438 1.06242187 32.28015625 1 33 C0.67 33 0.34 33 0 33 C-0.144375 32.0925 -0.28875 31.185 -0.4375 30.25 C-0.89426761 27.15624001 -0.89426761 27.15624001 -1.6875 24.875 C-2 23 -2 23 -1.03173828 21.16699219 C0.13563142 18.71512908 0.23177787 17.15156203 0.1953125 14.453125 C0.18886719 13.60878906 0.18242188 12.76445312 0.17578125 11.89453125 C0.15902344 11.02183594 0.14226562 10.14914063 0.125 9.25 C0.11597656 8.36183594 0.10695313 7.47367188 0.09765625 6.55859375 C0.07414577 4.37211942 0.04128499 2.18619906 0 0 Z " fill="#D6A74C" transform="translate(119,14)"/>
        <path d="M0 0 C2.475 1.485 2.475 1.485 5 3 C4.01 3 3.02 3 2 3 C1.195625 3.33 0.39125 3.66 -0.4375 4 C-3 5 -3 5 -7 5 C-7 7.31 -7 9.62 -7 12 C-5.02 12 -3.04 12 -1 12 C-3 14 -3 14 -6.3125 14.25 C-9.72514084 14.01863452 -11.95465935 13.4765288 -15 12 C-12 11 -12 11 -9 12 C-9 9.36 -9 6.72 -9 4 C-7.88625 3.71125 -6.7725 3.4225 -5.625 3.125 C-1.99708908 2.30758671 -1.99708908 2.30758671 0 0 Z " fill="#576169" transform="translate(186,34)"/>
        <path d="M0 0 C1.98 0 3.96 0 6 0 C6 1.65 6 3.3 6 5 C4.39125 5.0928125 4.39125 5.0928125 2.75 5.1875 C-1.10929973 5.66946131 -1.10929973 5.66946131 -3.4375 8.4375 C-5.17353581 10.78438176 -5.17353581 10.78438176 -5 13 C-6.32 12.67 -7.64 12.34 -9 12 C-8.34 11.67 -7.68 11.34 -7 11 C-6.34227572 7.97065509 -6.34227572 7.97065509 -6 5 C-5.01 5 -4.02 5 -3 5 C-2.67 4.01 -2.34 3.02 -2 2 C-1.34 2 -0.68 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#3D3D3D" transform="translate(171,17)"/>
        <path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C0.50260417 2.20442708 -0.99479167 3.40885417 -2.4921875 4.61328125 C-4.25292107 6.12270545 -4.25292107 6.12270545 -6 9 C-6.99 9 -7.98 9 -9 9 C-9.33 9.99 -9.66 10.98 -10 12 C-10.99 10.68 -11.98 9.36 -13 8 C-11.3990869 6.84962529 -9.79414775 5.70485184 -8.1875 4.5625 C-7.29417969 3.92441406 -6.40085937 3.28632812 -5.48046875 2.62890625 C-3 1 -3 1 0 0 Z " fill="#F6C826" transform="translate(109,31)"/>
        <path d="M0 0 C4.95 0.99 4.95 0.99 10 2 C8.25 7.75 8.25 7.75 6 10 C4.99421411 8.71283353 3.99553202 7.42011342 3 6.125 C2.443125 5.40570312 1.88625 4.68640625 1.3125 3.9453125 C0 2 0 2 0 0 Z " fill="#6CB6DC" transform="translate(101,21)"/>
        <path d="M0 0 C1.65 0.33 3.3 0.66 5 1 C5 2.98 5 4.96 5 7 C3.02 7 1.04 7 -1 7 C-1 9.64 -1 12.28 -1 15 C-1.33 15 -1.66 15 -2 15 C-2.21755666 9.5610835 -2.10428384 5.12919186 0 0 Z " fill="#CF917F" transform="translate(96,7)"/>
        <path d="M0 0 C2.79192205 -0.05380578 5.5828141 -0.09357669 8.375 -0.125 C9.1690625 -0.14175781 9.963125 -0.15851562 10.78125 -0.17578125 C12.85492015 -0.19335473 14.92883241 -0.10335168 17 0 C17.66 0.66 18.32 1.32 19 2 C15.04 1.67 11.08 1.34 7 1 C7 1.99 7 2.98 7 4 C6.34 4 5.68 4 5 4 C4.34 4.66 3.68 5.32 3 6 C1.68 5.34 0.36 4.68 -1 4 C-0.34 3.34 0.32 2.68 1 2 C0.67 1.34 0.34 0.68 0 0 Z " fill="#535252" transform="translate(122,13)"/>
        <path d="M0 0 C2.03125 0.05078125 2.03125 0.05078125 4.5 0.3125 C5.3146875 0.39113281 6.129375 0.46976563 6.96875 0.55078125 C7.97421875 0.77314453 7.97421875 0.77314453 9 1 C9.33 1.66 9.66 2.32 10 3 C7.03 2.67 4.06 2.34 1 2 C1 4.31 1 6.62 1 9 C2.32 9.33 3.64 9.66 5 10 C2.69 10.33 0.38 10.66 -2 11 C-2.33 10.34 -2.66 9.68 -3 9 C-2.34 9 -1.68 9 -1 9 C-1.020625 7.700625 -1.04125 6.40125 -1.0625 5.0625 C-1.08399454 3.70834367 -1.07148199 2.35243917 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#576169" transform="translate(178,13)"/>
        <path d="M0 0 C2.64 0 5.28 0 8 0 C8 3.3 8 6.6 8 10 C5.03 10 2.06 10 -1 10 C-1 9.67 -1 9.34 -1 9 C1.31 9 3.62 9 6 9 C6 6.69 6 4.38 6 2 C4.02 2 2.04 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#222222" transform="translate(86,13)"/>
        <path d="M0 0 C1.98 0 3.96 0 6 0 C6 1.98 6 3.96 6 6 C4.02 6 2.04 6 0 6 C0 4.02 0 2.04 0 0 Z " fill="#CF89B3" transform="translate(106,4)"/>
        <path d="M0 0 C0.66 0 1.32 0 2 0 C2.09765625 6.15234375 2.09765625 6.15234375 2 8 C1 9 1 9 -2.0625 9.0625 C-3.031875 9.041875 -4.00125 9.02125 -5 9 C-5.33 8.01 -5.66 7.02 -6 6 C-5.38125 5.9175 -4.7625 5.835 -4.125 5.75 C-1.82838304 5.18766395 -1.82838304 5.18766395 -0.75 3 C0.05852057 1.19994529 0.05852057 1.19994529 0 0 Z " fill="#4C4C4C" transform="translate(128,39)"/>
        <path d="M0 0 C0.33 0.66 0.66 1.32 1 2 C3.64 2 6.28 2 9 2 C8.67 3.32 8.34 4.64 8 6 C8 5.34 8 4.68 8 4 C4.59687262 5.05875074 1.98646769 6.00902154 -1 8 C-1.125 2.25 -1.125 2.25 0 0 Z " fill="#262626" transform="translate(26,28)"/>
        <path d="M0 0 C0.99 0.66 1.98 1.32 3 2 C1.54144353 5.68646141 -0.30229045 7.16143971 -3.625 9.25 C-4.44226563 9.77078125 -5.25953125 10.2915625 -6.1015625 10.828125 C-7.04128906 11.40820312 -7.04128906 11.40820312 -8 12 C-8.33 10.35 -8.66 8.7 -9 7 C-8.34 7.66 -7.68 8.32 -7 9 C-3.26115668 6.34345343 -1.35021826 4.41889613 0 0 Z " fill="#E85656" transform="translate(101,26)"/>
        <path d="M0 0 C1.32 0 2.64 0 4 0 C3 3 3 3 1 4 C-0.70702735 4.06996014 -2.41668003 4.08440154 -4.125 4.0625 C-5.03507812 4.05347656 -5.94515625 4.04445313 -6.8828125 4.03515625 C-7.58148438 4.02355469 -8.28015625 4.01195312 -9 4 C-9.33 3.34 -9.66 2.68 -10 2 C-9.04287109 1.90912109 -9.04287109 1.90912109 -8.06640625 1.81640625 C-6.82697266 1.69072266 -6.82697266 1.69072266 -5.5625 1.5625 C-4.73878906 1.48128906 -3.91507812 1.40007813 -3.06640625 1.31640625 C-1.01337975 1.21069185 -1.01337975 1.21069185 0 0 Z " fill="#E5B440" transform="translate(112,42)"/>
        <path d="M0 0 C0.33 0.66 0.66 1.32 1 2 C1.99 2.33 2.98 2.66 4 3 C2.02 5.31 0.04 7.62 -2 10 C-3.26066301 6.21801096 -2.42292658 4.63636792 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#DA3839" transform="translate(96,21)"/>
        <path d="M0 0 C0.66 1.32 1.32 2.64 2 4 C4.13002316 4.79875868 5.73304965 5 8 5 C7.67 5.99 7.34 6.98 7 8 C3.4375 9.1875 3.4375 9.1875 0 10 C0 6.7 0 3.4 0 0 Z " fill="#4D4D4D" transform="translate(4,23)"/>
        <path d="M0 0 C1.65 0 3.3 0 5 0 C4.67 1.65 4.34 3.3 4 5 C2.125 5.625 2.125 5.625 0 6 C-0.66 5.34 -1.32 4.68 -2 4 C-1.34 4 -0.68 4 0 4 C0 2.68 0 1.36 0 0 Z " fill="#BB6DAB" transform="translate(99,16)"/>
        <path d="M0 0 C0.66 0.66 1.32 1.32 2 2 C4.06874034 2.6425235 4.06874034 2.6425235 6 3 C6 3.99 6 4.98 6 6 C5.34 6 4.68 6 4 6 C4.33 7.98 4.66 9.96 5 12 C4.34 12 3.68 12 3 12 C2.06576355 8.98968256 1.95550089 8.13349732 3 5 C2.01 4.67 1.02 4.34 0 4 C0 2.68 0 1.36 0 0 Z " fill="#4A4A4A" transform="translate(63,31)"/>
        <path d="M0 0 C1.65 0 3.3 0 5 0 C4.67 1.65 4.34 3.3 4 5 C2.68 5 1.36 5 0 5 C0 3.35 0 1.7 0 0 Z " fill="#71C3EA" transform="translate(111,13)"/>
        <path d="M0 0 C1.32 0.66 2.64 1.32 4 2 C3.67 3.32 3.34 4.64 3 6 C1.68 6 0.36 6 -1 6 C-1.33 5.01 -1.66 4.02 -2 3 C-1.34 2.01 -0.68 1.02 0 0 Z " fill="#ADB571" transform="translate(114,18)"/>
        <path d="M0 0 C2.125 0.375 2.125 0.375 4 1 C2.63016497 4.16115776 2.0109362 4.9927092 -1 7 C-1.625 4.625 -1.625 4.625 -2 2 C-1.34 1.34 -0.68 0.68 0 0 Z " fill="#3D3D3D" transform="translate(126,38)"/>
        <path d="M0 0 C0.99 0 1.98 0 3 0 C3.66 1.98 4.32 3.96 5 6 C4.34 6 3.68 6 3 6 C3 6.66 3 7.32 3 8 C2.34 8 1.68 8 1 8 C0.67 5.36 0.34 2.72 0 0 Z " fill="#3D3D3D" transform="translate(165,33)"/>
        <path d="M0 0 C1.88391785 3.26545761 2.49287967 6.28111761 3 10 C0.525 9.01 0.525 9.01 -2 8 C-1.34 6.68 -0.68 5.36 0 4 C-0.66 3.67 -1.32 3.34 -2 3 C-1.34 2.01 -0.68 1.02 0 0 Z " fill="#4D4D4D" transform="translate(126,23)"/>
        <path d="M0 0 C0.33 0 0.66 0 1 0 C1 1.65 1 3.3 1 5 C1.66 5 2.32 5 3 5 C3.33 7.31 3.66 9.62 4 12 C2 11 2 11 0.875 8.8125 C-0.08328236 5.73230669 -0.14915816 3.20690052 0 0 Z " fill="#777777" transform="translate(162,29)"/>
        <path d="M0 0 C0.66 1.32 1.32 2.64 2 4 C1.34 4.66 0.68 5.32 0 6 C-2.625 5.625 -2.625 5.625 -5 5 C-3.35 3.35 -1.7 1.7 0 0 Z " fill="#3B3B3B" transform="translate(10,23)"/>
        <path d="M0 0 C1.98 0.99 1.98 0.99 4 2 C3.34 2.66 2.68 3.32 2 4 C2 4.99 2 5.98 2 7 C1.34 7.66 0.68 8.32 0 9 C0 6.03 0 3.06 0 0 Z " fill="#3A3A3C" transform="translate(120,13)"/>
        <path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C2.67 2.32 2.34 3.64 2 5 C2.99 5.33 3.98 5.66 5 6 C5 6.33 5 6.66 5 7 C3.35 7 1.7 7 0 7 C0 4.69 0 2.38 0 0 Z " fill="#34383E" transform="translate(123,26)"/>
        <path d="M0 0 C0.33 0.66 0.66 1.32 1 2 C1.66 2.33 2.32 2.66 3 3 C1.02 3.99 1.02 3.99 -1 5 C-1 5.66 -1 6.32 -1 7 C-1.66 7 -2.32 7 -3 7 C-1.125 1.125 -1.125 1.125 0 0 Z " fill="#F2B020" transform="translate(112,22)"/>
        <path d="M0 0 C2.97 0.495 2.97 0.495 6 1 C5.34 2.65 4.68 4.3 4 6 C2.62437146 4.71034824 1.29233607 3.37310707 0 2 C0 1.34 0 0.68 0 0 Z " fill="#81DBEB" transform="translate(104,25)"/>
        <path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3 2.32 3 3.64 3 5 C2.34 5 1.68 5 1 5 C0.34 4.34 -0.32 3.68 -1 3 C-1.99 3 -2.98 3 -4 3 C-2.1875 1.4375 -2.1875 1.4375 0 0 Z " fill="#515151" transform="translate(172,21)"/>
        <path d="M0 0 C-0.33 1.65 -0.66 3.3 -1 5 C-3.475 4.01 -3.475 4.01 -6 3 C-4.60722783 0.21445565 -3.01148006 0 0 0 Z " fill="#4D4D4D" transform="translate(177,13)"/>
        <path d="M0 0 C1.32 0 2.64 0 4 0 C4 1.32 4 2.64 4 4 C2.68 4 1.36 4 0 4 C0 2.68 0 1.36 0 0 Z " fill="#F47C4C" transform="translate(105,11)"/>
    </Svg>
);
