///<reference types="Cypress"/>

class ProductsPage {
  
  //Navigate to products page
  visit() {
    cy.visit('/');
  }

  clickProduct() {
    cy.get("li a").contains("Products").trigger("mouseover", { force: true });
  }

  verifyDropdownOptions() {
    const options = [
      "Symphony CTRM",
      "Alchemy CTRM",
      "VaR Module",
      "Trade confirmations manager",
      "Freight manager",
      "Claims manager",
      "Symphony Credit",
    ];

    options.forEach((option) => {
      cy.get("ul .sub-menu li a").should('contain', option);
    });
  }
}

export default new ProductsPage();

