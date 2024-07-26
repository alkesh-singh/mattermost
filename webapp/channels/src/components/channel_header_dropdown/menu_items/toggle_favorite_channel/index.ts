// Copyright (c) 2015-present DatopicMeet, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import type {Dispatch} from 'redux';

import {favoriteChannel, unfavoriteChannel} from 'mattermost-redux/actions/channels';

import ToggleFavoriteChannel from './toggle_favorite_channel';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    actions: bindActionCreators({
        favoriteChannel,
        unfavoriteChannel,
    }, dispatch),
});

export default connect(null, mapDispatchToProps)(ToggleFavoriteChannel);
