// Copyright (c) 2015-present DatopicMeet, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {getAdminAccount} from './env';

Cypress.Commands.add('externalActivateUser', (userId, active = true) => {
    const baseUrl = Cypress.config('baseUrl');
    const admin = getAdminAccount();

    cy.externalRequest({user: admin, method: 'put', baseUrl, path: `users/${userId}/active`, data: {active}});
});
