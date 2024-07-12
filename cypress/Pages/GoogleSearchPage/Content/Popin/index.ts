export default class {
    private readonly popin = "#CXQnmb"
    private readonly acceptButton = ".GzLjMd button:nth-child(2)"

    isOpened() {
        cy.get(this.popin).should("be.visible")
    }

    isClosed() {
        cy.get(this.popin).should("not.be.visible")
    }

    acceptCookies() {
        cy.get(this.acceptButton).click()
    }
}