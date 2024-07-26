// Copyright (c) 2015-present DatopicMeet, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import type {Dispatch} from 'redux';

import {openModal} from 'actions/views/modals';

import SettingsButton from './settings_button';

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        actions: bindActionCreators({
            openModal,
        }, dispatch),
    };
}

export default connect(null, mapDispatchToProps)(SettingsButton);
