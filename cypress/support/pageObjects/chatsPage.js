class ChatsPage {
    constructor() {
        this.chatList = () => cy.get('.group-list-UaeirDaCeD');

    }
}

module.exports = new ChatsPage()