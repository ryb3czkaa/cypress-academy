describe('Sample describe', () => {
    beforeEach('user logi', () => {
      cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
      cy.get(`[data-test="username"]`).type("standard_user")
      cy.get(`[data-test="password"]`).type("secret_sauce")
      cy.get(`[data-test="login-button"]`).click()
    })
    it('Sample name f.e. Should open home page and check url', () => {
      cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    })
    
    
    it('show t-shirt',() => {
      cy.get('.inventory_item_name').contains("Sauce Labs Bolt T-Shirt").click()
    })
  
    it('add to cart ',() => {
      cy.get('.inventory_item_name').contains("Sauce Labs Bolt T-Shirt").click()
      cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    })
  
    it('add to cart from list of products',() => {
      cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    })
  
    it('remov to products of cart ',() => {
      cy.get('.inventory_item_name').contains("Sauce Labs Bolt T-Shirt").click()
      cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
      cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
    })
  
    it('remov to products of cart from list products ',() => {
      cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
      cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
    })
  
    it('go to cart', () => {
      cy.get('.shopping_cart_link').click()
    })
  
    it('add products and go to cart',() => {
      cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
      cy.get('.shopping_cart_link').click()
    })
  
    it('make shoping',() => {
      cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
      cy.get('.shopping_cart_link').click()
      cy.get('[data-test="checkout"]').click()
      cy.get('[data-test="firstName"]').type("name").click()
      cy.get('[data-test="lastName"]').type("lastName").click()
      cy.get('[data-test="postalCode"]').type("postalCode").click()
      cy.get('[data-test="continue"]').click()
      cy.get('[data-test="finish"]').click()
    })
  
    it('reset app',() => {
      cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
      cy.get('.bm-burger-button').click()
      cy.get('.bm-item').contains('Reset App State').click()
    })
    
  })