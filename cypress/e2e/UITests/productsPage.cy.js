///<reference types="Cypress"/>

//In terminal, select **Command Prompt** and run "npx cypress open" to open the Cypress Test Runner.

import ProductsPage from '../../support/Pages/Productspage'

describe('Products Dropdown Test using POM', () => {

  // Runs before each test block
  beforeEach(() => {

    //Visit products page
    ProductsPage.visit();

    //cy.get('.failing-test-intentionally-to-see-screenshot').should('be.visible');    //Failing test intentionally to see the screenshot

  });

  it('should assert all dropdown options are visible', () => {

    //Click "Products dropdown"
    ProductsPage.clickProduct();

    //Verify all options inside the dropdown are visible
    ProductsPage.verifyDropdownOptions();
  });
});
