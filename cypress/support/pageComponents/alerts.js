class Alerts {
    constructor() {
        this.okButton = () => cy.get('[data-test="primary-button"]');
        this.cancelButton = () => cy.get('[data-test="secondary-button"]');
        this.saveChangesTitle = () => cy.get('.title-hI1wgGwfpi');

        this.toast = () => cy.get('.container-2vBl_0yI6a');

    }
}

module.exports = new Alerts()