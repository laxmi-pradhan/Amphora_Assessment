import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Productspage from "../../../support/Pages/Productspage"
import NewsletterPage from "../../../support/Pages/NewsletterPage";

Given("I open the Amphora website", () => {

  //Navigate to Amphora website
  cy.visit("/");
});

When("I hover over the Products menu", () => {

  //Hover on & click on the products menu
  Productspage.clickProduct();
});

//  Verify that  all product options listed in the dropdown
Then("I should see the product options:", (dataTable) => {
  const expectedProducts = dataTable.rawTable.flat();
  expectedProducts.forEach((product) => {
    cy.get("ul.sub-menu li a").should("contain.text", product);
  });
});

//Navigate to newletter page
When("I navigate to the Newsletter page", () => {
  NewsletterPage.navigateToNewsletter(); // Newsletter link is in the header
});

//Fill the newsletter form using the  parameters
When("I submit the newsletter form with {string}, {string}, {string}", (email, firstName, lastName) => {
  NewsletterPage.fillNewsletterForm(email, firstName, lastName);
});

//Verify the success message after submitting newsletter form
Then("I should see the newsletter success message", () => {
  NewsletterPage.verifyNewsletterSuccessMessage();
});
