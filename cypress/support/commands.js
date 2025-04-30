Cypress.Commands.add('checkHomePage', () => {
    cy.get('#slider-carousel', { timeout: 5000 }).should('be.visible');
    cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
})

Cypress.Commands.add('fillCreditCardInfo', (creditCard) => {
    cy.get('[data-qa="name-on-card"]').type(creditCard.name);
    cy.get('[data-qa="card-number"]').type(creditCard.number);
    cy.get('[data-qa="cvc"]').type(creditCard.cvc);
    cy.get('[data-qa="expiry-month"]').type(creditCard.expiryMonth);
    cy.get('[data-qa="expiry-year"]').type(creditCard.expiryYear);
})