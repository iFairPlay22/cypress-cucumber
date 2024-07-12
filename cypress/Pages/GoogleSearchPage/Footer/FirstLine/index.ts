export default class {
    private readonly countryLabel = "body > div.L3eUgb > div.o3j99.c93Gbe > div.uU7dJb"

    isVisible() {
        cy.get(this.countryLabel).should("be.visible")
    }

    languageShouldBe(language: string) {
        cy.get(this.countryLabel).should("have.text", language)
    }
}