const myProfilePopover = require('../support/pageObjects/myProfilePage');
const chatsScreen = require('../support/pageObjects/chatsPage');
const navigationBar = require('../support/pageComponents/navigationBar');
const chatHeader = require('../support/pageComponents/chatHeader');
const alert = require('../support/pageComponents/alerts');
const reconnectKey = '1895a246-36da-4c3e-9fea-2dd10f34f491-375175000000-1671374692105-713134c2-4592-4293-b2f7-f72c5ee25f78';

describe('My Profile page scenarios', () => {
    beforeEach('login app with reconnect key', () => {
        cy.loginWithReconnectKey(reconnectKey);
    })

    it('"my profile" pop-over should be opened/closed after click on appropriate button', () => {
        navigationBar.myProfileButton().click();
        myProfilePopover.myProfilePopover().should('be.visible');
        cy.url().should('contain', 'popup=my-profile');
        myProfilePopover.closeButton().click();
        navigationBar.myProfileButton().should('be.visible');
    })

    it('"edit profile" section should be opened/closed after click on appropriate button', () => {
        navigationBar.myProfileButton().click();
        myProfilePopover.editProfileButton().click();
        myProfilePopover.editProfilePopoverTitle().should('contain','Edit Profile');
        myProfilePopover.editProfileBackButton().click();
        myProfilePopover.myProfilePopover().should('be.visible');
    })

    it('edited username should be saved and displayed on "my profile" pop-over', () => {
        navigationBar.myProfileButton().click();
        myProfilePopover.editProfileButton().click();
        const userNameGenerated = `userName${Cypress._.random(0, 1e6)}`;
        myProfilePopover.editProfileUsernameInput().clear().type(userNameGenerated);
        myProfilePopover.editProfileSaveButton().click();
        alert.okButton().click();
        myProfilePopover.usernamePlaceholder().should('contain', userNameGenerated);
    })

    it('edited nickname should be saved and displayed on "my profile" pop-over', () => {
        navigationBar.myProfileButton().click();
        myProfilePopover.editProfileButton().click();
        const nickNameGenerated = `nickName${Cypress._.random(0, 1e6)}`;
        myProfilePopover.editProfileNicknameInput().clear().type(nickNameGenerated);
        myProfilePopover.editProfileSaveButton().click();
        alert.okButton().click();
        myProfilePopover.nicknamePlaceholder().should('contain', nickNameGenerated);
    })

    it('tooltip with red color validation line should be displayed if enter only 1 character in username field', () => {
        navigationBar.myProfileButton().click();
        myProfilePopover.editProfileButton().click();
        myProfilePopover.editProfileUsernameInput().clear().type('a');
        myProfilePopover.editProfileUsernameTooltip().should('contain', 'Min length is 2 characters');
        myProfilePopover.editProfileValidationLineElement().eq(0).should('have.css', 'border-color', 'rgb(227, 70, 70)');
    })

    it('tooltip with red color validation line should be displayed if enter less than 3 characters in nickname field', () => {
        navigationBar.myProfileButton().click();
        myProfilePopover.editProfileButton().click();
        myProfilePopover.editProfileNicknameInput().clear().type('ab');
        myProfilePopover.editProfileNicknameTooltip().should('contain', 'Min length is 3 characters');
        myProfilePopover.editProfileValidationLineElement().eq(1).should('have.css', 'border-color', 'rgb(227, 70, 70)');
    })

    it('tooltip with red color validation line should be displayed if entered nickname exist', () => {
        navigationBar.myProfileButton().click();
        myProfilePopover.editProfileButton().click();
        myProfilePopover.editProfileNicknameInput().clear().type('mi4c');
        myProfilePopover.editProfileNicknameTooltip().should('contain', 'Nickname already exists');
        myProfilePopover.editProfileValidationLineElement().eq(1).should('have.css', 'border-color', 'rgb(227, 70, 70)');
    })

    it('"nickname is copied" toast should be displayed after click on nickname placeholder', () => {
        navigationBar.myProfileButton().click();
        myProfilePopover.nicknamePlaceholder().click();
        alert.toast().should('contain', 'Nickname is copied');
    })

    it('"phone number is copied" toast should be displayed after click on ', () => {
        navigationBar.myProfileButton().click();
        myProfilePopover.phoneNumberPlaceholder().click();
        alert.toast().should('contain', 'Phone number is copied');
    })
    
    it('"saved messages" chat should appear after click on "saved messages" button', () => {
        navigationBar.myProfileButton().click();
        myProfilePopover.savedMessagesButton().click();
        chatsScreen.chatList().should('contain', 'Saved Messages');
        chatHeader.kebabMenu().click();
        chatHeader.kebabMenuDeleteChatButton().click();
        alert.okButton().click();
        chatsScreen.chatList().should('not.contain', 'Saved Messages');
    })

})