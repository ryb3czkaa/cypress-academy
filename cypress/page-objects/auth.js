
export class Auth {
login(name , password) {
    this.fillUsername().type(name);
    this.fillPssword().type(password);
    this.clickLogButton().click()
    return this;
}
verifyCookie(assertion) {
    cy.getCookie('session-username').should(assertion)
}

fillUsername(String) {
    this.#getUsername().type(String);
}

fillPassword(String) {
    this.#getPassword().type(String);
}

clickLogButton() {
    this.#getLogButton().click();
    return this
}

#getUsername() {
    return cy.get(`#user-name`)
}

#getPassword() {
    return cy.get(`#password`)
}

#getLogButton() {
    return cy.get(`#login-button`)
}
}
export default Auth;
