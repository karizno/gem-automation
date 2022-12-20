class MyProfilePage {
    constructor() {
        this.myProfilePopover = () => cy.get('[data-test="my-profile-popup"]');
        this.usernamePlaceholder = () => cy.get('.title-17bc0S97hd');
        this.nicknamePlaceholder = () => cy.get('.link-3NNY9cfFq7');
        this.phoneNumberPlaceholder = () => cy.get('.link-2WuEOazOCo');
        this.editProfileButton = () => cy.get('.text-2uvO87uAmc');
        this.closeButton = () => cy.get('.close-1uISRFLOHb');
        this.editProfilePopoverTitle = () => cy.get('.title-kmIoyoXHws');
        this.editProfileBackButton = () => cy.get('.arrow-block-2Q857fhxP9');
        this.editProfileUsernameInput = () => cy.get('[name="userName"]');
        this.editProfileNicknameInput = () => cy.get('[name="nickName"]');
        this.editProfileSaveButton = () => cy.get('.container-3aIjzhM8QV button');
        this.editProfileUsernameTooltip = () => cy.get('[data-test="userName-helper-text"]');
        this.editProfileNicknameTooltip = () => cy.get('[data-test="nickName-helper-text"]');
        this.editProfileValidationLineElement = () => cy.get('.content-1OcmN00Igg');

        this.savedMessagesButton = () => cy.get('[title="Saved Messages"]');
    }
}

module.exports = new MyProfilePage()