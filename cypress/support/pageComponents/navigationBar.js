class NavigationBar {
    constructor() {
        this.myProfileButton = () => cy.get('[data-test="my-profile"]');
        this.chatsButton = () => cy.get('[data-test="chats"');
        this.channelsButton = () => cy.get('[data-test="channels"]');

    }
}

module.exports = new NavigationBar()