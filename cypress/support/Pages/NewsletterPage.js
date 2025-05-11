///<reference types="Cypress"/>

class NewsletterPage {

  navigateToNewsletter() {
    cy.get("li a").contains("Resources").trigger("mouseover", { force: true });
    cy.contains("Newsletter sign-up").click({ force: true });
  }

  fillNewsletterForm(email, firstName, lastName) {
    cy.get(".fserv-form-name").should('contain', 'Newsletter Sign Up');

    cy.get('input[placeholder="eg: john.smith@acmecorp.com"]').type(email);
    cy.get('input[placeholder="eg: John"]').type(firstName);
    cy.get('input[placeholder="eg: Smith"]').type(lastName);

    cy.get('button[type="submit"]').click();
  }

  verifyNewsletterSuccessMessage() {
    cy.get("div[class='fs-notifier success show-notification visible'] span")
      .should('contain', 'Thank you for signing up for our newsletter');
  }
}

export default new NewsletterPage();
