/// <reference types="cypress"/>
const { faker } = require('@faker-js/faker');

describe('Test Cases: 1, 2, 3, 4, 5, 11, 12, 16, 17 e 22', () => {
    let newUser, duplicatedUser, invalidUser;

    before(() => {
        cy.fixture('usersData').then((data) => {
            newUser = data.newUser;
            duplicatedUser = data.duplicatedUser;
            invalidUser = data.invalidUser;
        });
    });

    beforeEach('Visit the page', () => {
        cy.visit('/');
    })

    it('Test Case 1: Register User', () => {
        const user = newUser;

        cy.checkHomePage();
        cy.goToSignUpOrLoginPage();

        cy.registerUser(user);
        cy.clickToContinue();
        
        cy.verifyTheUserIsSignedIn(user.username);
        cy.deleteAccount();
        cy.clickToContinue();
        cy.verifyTheUserIsSignedOut(user.username);
    })

    it('Test Case 2: Login User with correct email and password', () => {
        const user = newUser;

        cy.checkHomePage();
        cy.goToSignUpOrLoginPage();
        cy.registerUser(user);
        cy.clickToContinue();
        cy.logout();

        cy.login(user.email, user.password);

        cy.verifyTheUserIsSignedIn(user.username);
        cy.deleteAccount();
    })

    it('Test Case 3: Login User with incorrect email and password', () => {

        cy.checkHomePage();

        cy.goToSignUpOrLoginPage();

        cy.login(invalidUser.email, invalidUser.password);

        cy.contains('p', 'Your email or password is incorrect!');
        cy.url().should('include', '/login');
    })

    it('Test Case 4: Logout User', () => {
        const user = newUser;

        cy.checkHomePage();
        cy.goToSignUpOrLoginPage();
        cy.registerUser(user);
        cy.clickToContinue();
        cy.logout();
        cy.login(user.email, user.password);
        cy.verifyTheUserIsSignedIn(user.username);

        cy.logout();

        cy.verifyTheUserIsSignedOut(user.username);
    })

    it('Test Case 5: Register User with existing email', () => {

        cy.checkHomePage();
        cy.goToSignUpOrLoginPage();
        cy.fillInitialSignupFieldsAndSubmit(duplicatedUser.username, duplicatedUser.email);

        cy.contains('p', 'Email Address already exist!');

    })

    it('Test Case 11: Verify Subscription in Cart page', () => {

        cy.checkHomePage();
        cy.proceedToTheCart();
        cy.subscribe(faker.internet.email());

    })

    it('Test Case 12: Add Products in Cart', () => {
        const products = []

        cy.checkHomePage();
        cy.goToProductsPage();
        cy.addProduct(1).then((productInfo) => { products.push(productInfo); })
        cy.clickToContinueShopping();
        cy.addProduct(2).then((productInfo) => { products.push(productInfo); })
        cy.clickToViewTheCart();
        cy.verifyProductsInTheCart(products);

    })

    it('Test Case 16: Place Order: Login before Checkout', () => {

        const user = newUser;
        const products = []

        cy.checkHomePage();
        cy.goToSignUpOrLoginPage();
        cy.login(user.email, user.password);
        cy.verifyTheUserIsSignedIn(user.username);
        
        cy.goToProductsPage();
        cy.addProduct(1).then((productInfo) => { products.push(productInfo); })
        cy.clickToViewTheCart();
        cy.clickToProceedToCheckout();
        cy.contains('Address Details');
        cy.contains('Review Your Order');
        cy.get('#ordermsg').type('Order message.');
        cy.clickToPlaceOrder();
        cy.fillCreditCardInfo(user.creditCard);
        cy.clickToPayAndConfirmOrder();

        cy.deleteAccount();
        cy.clickToContinue();
        cy.verifyTheUserIsSignedOut();
    })

    it('Test Case 17: Remove Products From Cart', () => {

        cy.checkHomePage();
        cy.goToProductsPage();
        cy.contains('[data-product-id="1"]', 'Add to cart').click();
        cy.clickToContinueShopping();
        cy.proceedToTheCart();

        cy.removeProductFromTheCart();
        
        cy.productTableShouldBeEmpty();
    })

    it('Test Case 22: Add to cart from Recommended items', () => {
        cy.checkHomePage();
        cy.scrollToRecommendedItems();
        cy.addFirstRecommendedProductToTheCart().then((productName) => {
            cy.clickToViewTheCart();
            cy.verifyThatTheProductExistsInTheCart(productName);
        });
    })
})