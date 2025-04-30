Cypress.Commands.add('registerUser', (user) => {
    cy.fillInitialSignupFieldsAndSubmit(user.username, user.email);
    cy.fillComplementaryFieldsForSignUp(user)
})

Cypress.Commands.add('fillInitialSignupFieldsAndSubmit', (username, email) => {
    cy.contains('Signup / Login').click();
    cy.url().should('include', '/login');

    cy.contains('New User Signup!', { timeout: 5000 }).should('be.visible');
    cy.get('[data-qa="signup-name"]').type(username);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.contains('button', 'Signup').click();
})

Cypress.Commands.add('fillComplementaryFieldsForSignUp', (user) => {
    cy.contains('ENTER ACCOUNT INFORMATION', { matchCase: false }).should('be.visible');
    cy.get('#id_gender1').check();
    cy.get('[data-qa="name"]').should('have.value', user.username+'_expectingFailure');
    cy.get('[data-qa="email"]').should('have.value', user.email);
    cy.get('[data-qa="password"]').type(user.password);
    cy.get('[data-qa="days"]').select(user.day);
    cy.get('[data-qa="months"]').select(user.month);
    cy.get('[data-qa="years"]').select(user.year);
    cy.contains('Sign up for our newsletter!').click();
    cy.contains('Receive special offers from our partners!').click();
    cy.get('[data-qa="first_name"]').type(user.firstname);
    cy.get('[data-qa="last_name"]').type(user.lastname);
    cy.get('[data-qa="company"]').type(user.company);
    cy.get('[data-qa="address"]').type(user.address);
    cy.get('[data-qa="address2"]').type(user.address2);
    cy.get('[data-qa="country"]').select('United States');
    cy.get('[data-qa="state"]').type(user.state);
    cy.get('[data-qa="city"]').type(user.city);
    cy.get('[data-qa="zipcode"]').type(user.zipcode);
    cy.get('[data-qa="mobile_number"]').type(user.mobileNumber);
    cy.contains('button', 'Create Account').click();
    cy.url().should('include', '/account_created');
    cy.contains('ACCOUNT CREATED!', { matchCase: false }).should('be.visible');
})

Cypress.Commands.add('deleteAccount', () => {
    cy.contains('a', 'Delete Account').click();
    cy.url().should('include', '/delete_account');
    cy.contains('ACCOUNT DELETED!', { matchCase: false });
})

Cypress.Commands.add('subscribe', (email) => {
    cy.get('.footer-bottom').scrollIntoView();
    cy.contains('Subscription', { matchCase: false });
    cy.get('#susbscribe_email').type(email);
    cy.get('#subscribe').click();
    cy.contains('You have been successfully subscribed!');
})