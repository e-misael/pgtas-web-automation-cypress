Cypress.Commands.add('login', (username, password) => {
    cy.contains('Login to your account').should('be.visible');
    cy.get('[data-qa="login-email"]').type(username);
    cy.get('[data-qa="login-password"]').type(password);
    cy.contains('button', 'Login').click();
})

Cypress.Commands.add('logout', () => {
    cy.contains('a', 'Logout').click();
    cy.url().should('include', '/login');
})

Cypress.Commands.add('verifyTheUserIsSignedIn', (username) => {
    cy.contains(`Logged in as ${username}`).should('be.visible');
})

Cypress.Commands.add('verifyTheUserIsSignedOut', (username) => {
    cy.contains(`Logged in as ${username}`).should('not.exist', { timeout: 3000 });
})