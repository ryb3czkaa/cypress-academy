import Auth from "../page-objects/auth"

describe("Authentication", () => {
    const auth = new Auth();
    beforeEach('visit website', () => {
        cy.visit("/").url().should("eq", "https://www.saucedemo.com/")
    })
    it("1A1", () => {
        auth.fillUsername("standard_user");
        auth.fillPassword("secret_sauce");
        auth.clickLogButton();
        auth.verifyCookie('exist')
    })

     it("1A2", () => {
       auth.fillUsername("standard_user");
       auth.fillPassword("set_sauce");
       auth.clickLogButton();
       auth.verifyCookie('not.exist')
    })

    it("1B1", () => {
        auth.fillUsername("locked_out_user");
        auth.fillPassword("secret_sauce");
        auth.clickLogButton();
        auth.verifyCookie('exist')
    })

    it("1B2", () => {
        auth.fillUsername("locked_out_user");
        auth.fillPassword("st_sauce");
        auth.clickLogButton();
        auth.verifyCookie('not.exist')
     }) 
            
    it("1C1", () => {
        auth.fillUsername("problem_user");
        auth.fillPassword("secret_sauce");
        auth.clickLogButton();
        auth.verifyCookie('exist')
    })

    it("1C2", () => {
        auth.fillUsername("problem_user");
        auth.fillPassword("st_sauce");
        auth.clickLogButton();
        auth.verifyCookie('not.exist')
    })

    it("1D1", () => {
        auth.fillUsername("performance_glitch_user");
        auth.fillPassword("secret_sauce");
        auth.clickLogButton();
        auth.verifyCookie('exist')
    })

    it("1D2", () => {
        auth.fillUsername("performance_glitch_user");
        auth.fillPassword("st_sauce");
        auth.clickLogButton();
        auth.verifyCookie('not.exist')
    })

    it("1F1", () => {
        auth.clickLogButton();
        auth.verifyCookie('not.exist')
    })
})