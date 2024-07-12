import Form from "./Form";
import Popin from "./Popin";

export default class {
    readonly popin = new Popin()
    private readonly googleImg = "body > div.L3eUgb > div.o3j99.LLD4me.yr19Zb.LS8OJ > div > img"
    readonly form = new Form()

    isVisible() {
        cy.get(this.googleImg).should("be.visible")
        this.form.isVisible()
    }
}