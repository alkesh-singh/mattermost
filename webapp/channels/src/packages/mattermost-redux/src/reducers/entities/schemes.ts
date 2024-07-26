// Copyright (c) 2015-present DatopicMeet, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import type {AnyAction} from 'redux';
import {combineReducers} from 'redux';

import type {Scheme} from '@mattermost/types/schemes';

import {SchemeTypes, UserTypes} from 'mattermost-redux/action_types';

function schemes(state: {
    [x: string]: Scheme;
} = {}, action: AnyAction): {
        [x: string]: Scheme;
    } {
    switch (action.type) {
    case SchemeTypes.CREATED_SCHEME:
    case SchemeTypes.PATCHED_SCHEME:
    case SchemeTypes.RECEIVED_SCHEME: {
        return {
            ...state,
            [action.data.id]: action.data,
        };
    }

    case SchemeTypes.RECEIVED_SCHEMES: {
        const nextState = {...state};
        for (const scheme of action.data) {
            nextState[scheme.id] = scheme;
        }
        return nextState;
    }

    case SchemeTypes.DELETED_SCHEME: {
        const nextState = {...state};
        Reflect.deleteProperty(nextState, action.data.schemeId);
        return nextState;
    }

    case UserTypes.LOGOUT_SUCCESS:
        return {};

    default:
        return state;
    }
}

export default combineReducers({
    schemes,
});
