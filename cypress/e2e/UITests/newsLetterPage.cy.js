///<reference types="Cypress"/>

//In terminal, select **Command Prompt** and run "npx cypress open" to open the Cypress Test Runner.

import NewsletterPage from '../../support/Pages/NewsletterPage';
import ProductsPage from '../../support/Pages/Productspage'

describe('Newsletter Signup Test using POM', () => {
  beforeEach(() => {
    ProductsPage.visit(); // Navigate to Amphora Home page
  });

  it('Should fill the newsletter form and assert success message', () => {

    //Click and navigate to the Newsletter section
    NewsletterPage.navigateToNewsletter();

    //Fill the newsletter form with email, first name, and last name
    // used Date.now() to email to make it unique every time and avoid duplicate error message
    NewsletterPage.fillNewsletterForm("test+" + Date.now() + "@gmail.com", "QA", "Engineer");
  });
});


