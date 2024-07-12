export default class {
    private readonly searchInput = "#APjFqb"
    private readonly voiceInput = "body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.dRYYxd > div.XDyW0e"
    private readonly imageInput = "body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.dRYYxd > div.nDcEnd"
    private readonly googleSearchButton = "body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b"
    private readonly imFeelingLuckyButton = "#gbqfbb"

    isVisible() {
        cy.get(this.searchInput).should("be.visible")
        cy.get(this.voiceInput).should("be.visible")
        cy.get(this.imageInput).should("be.visible")
        cy.get(this.googleSearchButton).should("be.visible")
        cy.get(this.imFeelingLuckyButton).should("be.visible")
    }

    searchByTextInput(input: string) {
        cy.get(this.searchInput).click().type(input).type('{enter}')
    }
}