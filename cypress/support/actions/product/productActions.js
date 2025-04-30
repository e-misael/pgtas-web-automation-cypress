Cypress.Commands.add('addProduct', (position) => {
    const product = { description: null, price: 0, total: 0 }

    cy.get('.features_items .single-products img').eq(position - 1).scrollIntoView();
    cy.get('.features_items .single-products').eq(position - 1).within(() => {
        cy.get('p').then((x) => { product.description = x.last().text() })
        cy.get('h2').then((x) => { product.price = x.last().text() })
        product.total = product.price;

        cy.contains(`[data-product-id="${position}"]`, 'Add to cart').click();
    })

    return cy.wrap(product);

})

Cypress.Commands.add('verifyProductsInTheCart', (products) => {
    cy.get('#cart_info_table tr[id^="product"]').each((item, i) => {
        cy.wrap(item).find('.cart_description').should('contain', products[i].description);
        cy.wrap(item).find('.cart_price').should('contain', products[i].price);
        cy.wrap(item).find('.cart_quantity').should('contain', 1);
        cy.wrap(item).find('.cart_total').should('contain', products[i].price);
    })
})

Cypress.Commands.add('productTableShouldBeEmpty', () => {
    cy.get('#cart_info_table tr[id^="product"]').should('not.exist', { timeout: 3000 });
})

Cypress.Commands.add('scrollToRecommendedItems', () => {
    cy.get('.recommended_items').scrollIntoView();
    cy.contains('RECOMMENDED ITEMS', { matchCase: false }).should('be.visible');
})

Cypress.Commands.add('removeProductFromTheCart', () => {
    cy.get('#cart_info_table tr[id^="product"]').within(() => {
        cy.get('.cart_quantity_delete').click();
    })
})

Cypress.Commands.add('verifyThatTheProductExistsInTheCart', (productName) => {
    cy.get('#cart_info_table tr[id^="product"]').each((item) => {
        cy.wrap(item).find('.cart_description').should('contain', productName);
    })
})

Cypress.Commands.add('addFirstRecommendedProductToTheCart', () => {
    return cy.get('.recommended_items').find('.productinfo > p').first()
        .invoke('text').then((productName) => {
            cy.get('.recommended_items').find('.btn').contains('Add to cart').first().click({ force: true });

            return cy.wrap(productName);
        });
})