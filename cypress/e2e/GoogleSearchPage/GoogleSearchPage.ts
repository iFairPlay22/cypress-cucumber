import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import GoogleSearchPage from "../../Pages/GoogleSearchPage";

const page = new GoogleSearchPage();

When("I visit google search page", () => {
  page.navigate()
});

When("I close the popin", () => {
  page.content.popin.acceptCookies()
});

When("I search for [{string}]", (language: string) => {
  page.isVisible()
  page.content.form.searchByTextInput(language)
});

Then("Page url should be prefixed by [{string}]", (url: string) => {
  cy.url().should('satisfy', (cyUrl: string) => cyUrl.startsWith(url))
});

Then("I should see a valid google search page with language [{string}]", (language: string) => {
  page.isVisible()
  page.footer.firstLine.languageShouldBe(language)
});

Then("The popin should be opened", () => {
  page.content.popin.isOpened()
});

Then("The popin should be closed", () => {
  page.content.popin.isClosed()
});