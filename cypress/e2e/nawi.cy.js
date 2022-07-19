describe('nawigacja', () => {
  beforeEach('user logi', () => {
    cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    cy.get(`[data-test="username"]`).type("standard_user")
    cy.get(`[data-test="password"]`).type("secret_sauce")
    cy.get(`[data-test="login-button"]`).click()
  })
  
  it('left menu',() => {
      cy.get('.bm-burger-button').click()
      cy.get('.bm-item-list').should('be.visible')
    })

    it('product to list',() => {
      cy.get('.inventory_item_name').contains("Sauce Labs Bolt T-Shirt").click()
      cy.get('[data-test="back-to-products"]').click() 
      cy.get('.inventory_container').should('be.visible')
    })

    it('cart', () => {
      cy.get('.shopping_cart_link').click()
      cy.url().should('contain', 'cart.html')
    })

    it('social media',() => {
      cy.get('.social_facebook').children().should('have.attr', 'href', 'https://www.facebook.com/saucelabs')
    })

    it('all items',() => {
      cy.get('.inventory_item_name').first().click()
      cy.get('.bm-burger-button').click()
      cy.get('.bm-item').contains('All Items').click()
      cy.url().should('contain', 'inventory.html')
    })

    it('about',() => {
      cy.get('.bm-burger-button').click()
      cy.get('.bm-item').contains('About').should('have.attr', 'href', 'https://saucelabs.com/')
  
    })

    it('logout',() => {
      cy.get('.bm-burger-button').click()
      cy.get('.bm-item').contains('Logout').click()
      cy.getCookie('session-username').should('not.exist')
    })

})