export default class {
    private readonly ecologyText = "body > div.L3eUgb > div.o3j99.c93Gbe > div.KxwPGc.SSwjIe.waLeGd > div.KxwPGc.ssOUyb > a > span"

    private readonly aboutButton = "body > div.L3eUgb > div.o3j99.c93Gbe > div.KxwPGc.SSwjIe.waLeGd > div.KxwPGc.AghGtd > a:nth-child(1)"
    private readonly advertisingButton = "body > div.L3eUgb > div.o3j99.c93Gbe > div.KxwPGc.SSwjIe.waLeGd > div.KxwPGc.AghGtd > a:nth-child(2)"
    private readonly companyButton = "body > div.L3eUgb > div.o3j99.c93Gbe > div.KxwPGc.SSwjIe.waLeGd > div.KxwPGc.AghGtd > a:nth-child(3)"
    private readonly howSearchWorksButton = "body > div.L3eUgb > div.o3j99.c93Gbe > div.KxwPGc.SSwjIe.waLeGd > div.KxwPGc.AghGtd > a:nth-child(4)"

    private readonly reportInappropriateContentButton = "body > div.L3eUgb > div.o3j99.c93Gbe > div.KxwPGc.SSwjIe.waLeGd > div.KxwPGc.iTjxkf > a:nth-child(1)"
    private readonly consumerInformationButton = "body > div.L3eUgb > div.o3j99.c93Gbe > div.KxwPGc.SSwjIe.waLeGd > div.KxwPGc.iTjxkf > a:nth-child(2)"
    private readonly privacyButton = "body > div.L3eUgb > div.o3j99.c93Gbe > div.KxwPGc.SSwjIe.waLeGd > div.KxwPGc.iTjxkf > a:nth-child(3)"
    private readonly conditionsButton = "body > div.L3eUgb > div.o3j99.c93Gbe > div.KxwPGc.SSwjIe.waLeGd > div.KxwPGc.iTjxkf > a:nth-child(4)"
    private readonly settingsButton = "body > div.L3eUgb > div.o3j99.c93Gbe > div.KxwPGc.SSwjIe.waLeGd > div.KxwPGc.iTjxkf > span > span > g-popup > div.CcNe6e > div"

    isVisible() {
        cy.get(this.ecologyText).should("be.visible")
        cy.get(this.aboutButton).should("be.visible")
        cy.get(this.advertisingButton).should("be.visible")
        cy.get(this.companyButton).should("be.visible")
        cy.get(this.howSearchWorksButton).should("be.visible")
        cy.get(this.reportInappropriateContentButton).should("be.visible")
        cy.get(this.consumerInformationButton).should("be.visible")
        cy.get(this.privacyButton).should("be.visible")
        cy.get(this.conditionsButton).should("be.visible")
        cy.get(this.settingsButton).should("be.visible")
    }
}