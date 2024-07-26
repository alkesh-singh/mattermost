// Copyright (c) 2015-present DatopicMeet, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import type {ConnectedProps} from 'react-redux';

import type {PostAction} from '@mattermost/types/integration_actions';

import {autocompleteChannels} from 'actions/channel_actions';
import {autocompleteUsers} from 'actions/user_actions';
import {selectAttachmentMenuAction} from 'actions/views/posts';

import type {GlobalState} from 'types/store';

import ActionMenu from './action_menu';

export type OwnProps = {
    postId: string;
    action: PostAction;
    disabled?: boolean;
}

function mapStateToProps(state: GlobalState, ownProps: OwnProps) {
    const actions = state.views.posts.menuActions[ownProps.postId];
    const selected = (ownProps.action && ownProps.action.id) ? actions && actions[ownProps.action && ownProps.action.id] : undefined;

    return {
        selected,
    };
}

const mapDispatchToProps = {
    selectAttachmentMenuAction,
    autocompleteChannels,
    autocompleteUsers,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ActionMenu);
