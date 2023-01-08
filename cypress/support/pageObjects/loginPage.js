class LoginPage {
    constructor() {
        this.usingPhoneNumberLink = () => cy.get('.container-1Jj15Y1cve');
        this.usingQrCodeLink = () => cy.get('.container-1Jj15Y1cve');
        this.privacyPolicyLink = () => cy.get('.privacy-1Av--iZGzB a').eq(0);
        this.termsOfUseLink = () => cy.get('.privacy-1Av--iZGzB a').eq(1);
        this.phoneLoginPageHeader = () => cy.get('.title-3dwnqUhAEb');
        this.qrLoginPageHeader = () => cy.get('.title-mBdaCz8skH');
        this.selectCountryField = () => cy.get('[data-test="open-popup"]');
        this.selectCountryPopOverInputField = () => cy.get('[data-test="search-input"]');
        this.selectCountrySearchResults = () => cy.get('.container-3k7FIpw-RK');
        this.phoneNumberInputField = () => cy.get('[name="phoneNumber"]');
        this.phoneNumberValidationLineElement = () => cy.get('[data-test="phoneNumber-helper-text"]');
        this.phoneNumberValidationTooltip = () => cy.get('[data-test="phoneNumber-helper-text"]');
        this.nextButton = () => cy.get('.container-1sJTa4YxuA');
    }
}

module.exports = new LoginPage()