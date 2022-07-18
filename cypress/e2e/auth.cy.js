describe('testy autentykacji', () => {

  it('1A1 good user with good password', () => {
    cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    cy.get(`[data-test="username"]`).type("standard_user")
    cy.get(`[data-test="password"]`).type("secret_sauce")
    cy.get(`[data-test="login-button"]`).click()
    cy.getCookie('session-username').should('exist')


  })
  it('1A2 good user with wrong password', () => {
    cy.visit('/').url().should('eq','https://www.saucedemo.com/')
    cy.get(`[data-test="username"]`).type("standard_user")
    cy.get(`[data-test="password"]`).type("seC3ret_sauce")
    cy.get(`[data-test="login-button"]`).click()
    cy.get(`[data-test="error"]`).contains("Epic sadface: Username and password do not match any user in this service").should('be.visible')
    cy.getCookie('session-username').should('not.exist')
  })

  it('1B1 locked user with good pasword', () => {
    cy.visit('/').url().should('eq','https://www.saucedemo.com/')
    cy.get(`[data-test="username"]`).type("locked_out_user")
    cy.get(`[data-test="password"]`).type("secret_sauce")
    cy.get(`[data-test="login-button"]`).click()
    cy.get(`[data-test="error"]`).contains("Epic sadface: Sorry, this user has been locked out.").should('be.visible')
  })

  it('1B2 locked user with wrong password', () => {
    cy.visit('/').url().should('eq','https://www.saucedemo.com/')
    cy.get(`[data-test="username"]`).type("locked_out_user")
    cy.get(`[data-test="password"]`).type("seCret_sauce")
    cy.get(`[data-test="login-button"]`).click()
    cy.getCookie('session-username').should('not.exist')
  })


  it(`1C1 problem user with good password `,  () => {
    cy.visit('/').url().should('eq','https://www.saucedemo.com/')
    cy.get(`[data-test="username"]`).type("problem_user")
    cy.get(`[data-test="password"]`).type("secret_sauce")
    cy.get(`[data-test="login-button"]`).click()
    cy.getCookie('session-username').should('exist')
  })

  it(`1C2 problem user with wrong password`, () => {
    cy.visit('/').url().should('eq', 'https://www.saucedemo.com/')
    cy.get(`[data-test="username"]`).type("problem_user")
    cy.get(`[data-test="password"]`).type("secreT_sauce")
    cy.get(`[data-test="login-button"]`).click()
    cy.getCookie('session-username').should('not.exist')
  })

  it(`1D1 performance user with good password `, () => {
    cy.visit('/').url().should('eq','https://www.saucedemo.com/')
    cy.get(`[data-test="username"]`).type("performance_glitch_user")
    cy.get(`[data-test="password"]`).type("secret_sauce")
    cy.get(`[data-test="login-button"]`).click()
    cy.getCookie('session-username').should('exist')
  })

  it(`1D2 performance user with wrong password`, () => {
    cy.visit('/').url().should('eq','https://www.saucedemo.com/')
    cy.get(`[data-test="username"]`).type("performance_glitch_user")
    cy.get(`[data-test="password"]`).type("seret_sauce")
    cy.get(`[data-test="login-button"]`).click()
    cy.getCookie('session-username').should('not.exist')
  })

  it(`1F1 empty data`, () => {
    cy.visit('/').url().should('eq','https://www.saucedemo.com/')
    cy.get(`[data-test="login-button"]`).click()
    cy.get(`[data-test="error"]`).contains("Epic sadface: Username is required").should('be.visible')
    cy.getCookie('session-username').should('not.exist')
  })

});