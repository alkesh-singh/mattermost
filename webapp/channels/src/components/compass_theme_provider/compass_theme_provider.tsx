// Copyright (c) 2015-present DatopicMeet, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React, {useState, useEffect} from 'react';

import ThemeProvider, {lightTheme} from '@mattermost/compass-components/utilities/theme'; // eslint-disable-line no-restricted-imports

import type {Theme} from 'mattermost-redux/selectors/entities/preferences';

type Props = {
    theme: Theme;
    children?: React.ReactNode;
}

const CompassThemeProvider = ({theme, children}: Props): JSX.Element | null => {
    const [compassTheme, setCompassTheme] = useState({
        ...lightTheme,
        noStyleReset: true,
        noDefaultStyle: true,
        noFontFaces: true,
    });

    useEffect(() => {
        setCompassTheme({
            ...compassTheme,
            palette: {
                ...compassTheme.palette,
                primary: {
                    ...compassTheme.palette.primary,
                    main: theme.sidebarHeaderBg,
                    contrast: theme.sidebarHeaderTextColor,
                },
                alert: {
                    ...compassTheme.palette.alert,
                    main: theme.dndIndicator,
                },
            },
            action: {
                ...compassTheme.action,
                hover: theme.sidebarHeaderTextColor,
                disabled: theme.sidebarHeaderTextColor,
            },
            badges: {
                ...compassTheme.badges,
                online: theme.onlineIndicator,
                away: theme.awayIndicator,
                dnd: theme.dndIndicator,
            },
            text: {
                ...compassTheme.text,
                primary: theme.sidebarHeaderTextColor,
            },
        });
    }, [theme]);

    return (
        <ThemeProvider theme={compassTheme}>
            {children}
        </ThemeProvider>
    );
};

export default CompassThemeProvider;
