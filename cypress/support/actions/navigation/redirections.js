Cypress.Commands.add('goToSignUpOrLoginPage', () => {
    cy.contains('Signup / Login').click();
    cy.url().should('include', '/login');
})

Cypress.Commands.add('goToProductsPage', () => {
    cy.contains('Products').click();
    cy.url().should('include', '/products');
})

Cypress.Commands.add('proceedToTheCart', () => {
    cy.contains('Cart').click();
    cy.url().should('include', '/view_cart');
})

Cypress.Commands.add('clickToContinueShopping', () => {
    cy.get('.modal-content').contains('Continue Shopping').click();
})

Cypress.Commands.add('clickToViewTheCart', () => {
    cy.contains('View Cart').click();
    cy.url().should('include', '/view_cart');
})

Cypress.Commands.add('clickToPlaceOrder', () => {
    cy.contains('a', 'Place Order').click();
    cy.url().should('include', '/payment');
})

Cypress.Commands.add('clickToPayAndConfirmOrder', () => {
    cy.contains('button', 'Pay and Confirm Order').click();
    cy.contains('Congratulations! Your order has been confirmed!');
    cy.url().should('include', '/payment_done');
})

Cypress.Commands.add('clickToProceedToCheckout', () => {
    cy.contains('Proceed To Checkout').click();
    cy.url().should('include', '/checkout');
})

Cypress.Commands.add('clickToContinue', () => {
    cy.contains('a', 'Continue').click();
})
