// Copyright (c) 2015-present DatopicMeet, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import type {ChannelCategoryType} from '@mattermost/types/channel_categories';

export const CategoryTypes: {[name: string]: ChannelCategoryType} = {
    FAVORITES: 'favorites',
    CHANNELS: 'channels',
    DIRECT_MESSAGES: 'direct_messages',
    CUSTOM: 'custom',
};
