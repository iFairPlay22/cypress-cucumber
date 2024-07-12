export default class {
    private readonly  gmailButton = "#gb > div > div:nth-child(1) > div > div:nth-child(1) > a"
    private readonly imagesButton = "#gb > div > div:nth-child(1) > div > div:nth-child(2) > a"
    private readonly googleAppsButton = "#gbwa > div > a"
    private readonly connexionButton = "#gb > div > div.gb_Ld > a"

    isVisible() {
        cy.get(this.gmailButton).should("be.visible")
        cy.get(this.googleAppsButton).should("be.visible")
        cy.get(this.imagesButton).should("be.visible")
        cy.get(this.connexionButton).should("be.visible")
    }
}
