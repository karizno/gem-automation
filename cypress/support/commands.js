// reconnectKey = '1895a246-36da-4c3e-9fea-2dd10f34f491-375175000000-1671374692105-713134c2-4592-4293-b2f7-f72c5ee25f78';
Cypress.Commands.add('loginWithReconnectKey', (reconnectKey) => {
    cy.visit('/');
    window.localStorage.setItem('reconnect-key', reconnectKey);
})