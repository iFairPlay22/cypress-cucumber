import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

export default class {
    readonly route = "https://google.fr"

    readonly header = new Header()
    readonly content = new Content()
    readonly footer = new Footer()

    navigate() {
        cy.visit(this.route);
    }

    isVisible() {
        this.header.isVisible()
        this.content.isVisible()
        this.footer.isVisible()
    }
}