const loginPage = require('../support/pageObjects/loginPage');

describe('Login page scenarios', () => {

    it('"login via phone number" page should be opened after click on "using phone number" link', () => {
        cy.visit('/');
        loginPage.usingPhoneNumberLink().click();
        loginPage.phoneLoginPageHeader().should('contain', 'Start to Gem4me by Phone');
    })

    it('"login via qr" page should be opened after click on "using a qr code" link', () => {
        cy.visit('https://stage-2.gemfor.me/login/phone');
        loginPage.usingQrCodeLink().click();
        loginPage.qrLoginPageHeader().should('contain', 'Scan by Gem4me mobile application');
    })

    it('selected country should be displayed in country field', () => {
        cy.visit('https://stage-2.gemfor.me/login/phone');
        loginPage.selectCountryField().click();
        loginPage.selectCountryPopOverInputField().type('Belarus');
        loginPage.selectCountrySearchResults().should('contain', 'Belarus');
        loginPage.selectCountrySearchResults().click();
        loginPage.selectCountryField().should('contain', 'Belarus');
    })

    it('validation line should have green color when enter valid phone number', () => {
        cy.visit('https://stage-2.gemfor.me/login/phone');
        loginPage.phoneNumberInputField().clear().type('375175000000');
        loginPage.phoneNumberValidationLineElement().should('have.css', 'color', 'rgb(99, 205, 112)');
    })

    it('validation line should have red color and tooltip should be displayed when enter not valid phone number', () => {
        cy.visit('https://stage-2.gemfor.me/login/phone');
        loginPage.phoneNumberInputField().clear().type('37500000000');
        loginPage.phoneNumberValidationLineElement().should('have.css', 'color', 'rgb(227, 70, 70)');
        loginPage.phoneNumberValidationTooltip().should('contain', 'The phone number you entered is invalid.');
    })

    it('country should be determined automatically after entering country code', () => {
        cy.visit('https://stage-2.gemfor.me/login/phone');
        loginPage.phoneNumberInputField().clear().type('48');
        loginPage.selectCountryField().should('contain', 'Poland');
    })

    it('"privacy policy" link should be "https://gem4me.com/en/app_privacy_policy"', () => {
        cy.visit('https://stage-2.gemfor.me/login/phone');
        loginPage.privacyPolicyLink().should('have.attr', 'href').and('contain', 'https://gem4me.com/en/app_privacy_policy');
    })

    it('"terms of use" link should be "https://gem4me.com/en/app_terms_of_use"', () => {
        cy.visit('https://stage-2.gemfor.me/login/phone');
        loginPage.termsOfUseLink().should('have.attr', 'href').and('contain', 'https://gem4me.com/en/app_terms_of_use');
    })

})