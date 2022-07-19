describe('nawigacja', () => {
    beforeEach('user logi', () => {
      cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
      cy.get(`[data-test="username"]`).type("standard_user")
      cy.get(`[data-test="password"]`).type("secret_sauce")
      cy.get(`[data-test="login-button"]`).click()
    })
    it('Sample name f.e. Should open home page and check url', () => {
      cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    })

    it('left menu',() => {
        cy.get('.bm-burger-button').click()
      })

      it('product to list',() => {
        cy.get('.inventory_item_name').contains("Sauce Labs Bolt T-Shirt").click()
        cy.get('[data-test="back-to-products"]').click() 
      })

      it('cart', () => {
        cy.get('.shopping_cart_link').click()
      })

      it('social media',() => {
        cy.get('.social_facebook').children().should('have.attr', 'href', 'https://www.facebook.com/saucelabs')
      })

      it('all items',() => {
        cy.get('.bm-burger-button').click()
        cy.get('.bm-item').contains('All Items').click()
      })

      it('about',() => {
        cy.get('.bm-burger-button').click()
        cy.get('.bm-item').contains('About').click()
      })

      it('logout',() => {
        cy.get('.bm-burger-button').click()
        cy.get('.bm-item').contains('Logout').click()
      })

})