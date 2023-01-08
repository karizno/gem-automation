class ChatHeader {
    constructor() {
        this.kebabMenu = () => cy.get('[data-test="chat-settings-button"]');
        this.kebabMenuDeleteChatButton = () => cy.get('[data-test="menu-item-delete_group"]');

    }
}

module.exports = new ChatHeader()