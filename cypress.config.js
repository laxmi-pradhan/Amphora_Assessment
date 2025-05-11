const { defineConfig } = require("Cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").default;
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const mochawesome = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.amphora.net',

    // Enable Video & Screenshots
    video: true,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    env: {
      petApiUrl: "https://petstore.swagger.io/v2",
    },

    viewportHeight: 900,
    viewportWidth: 1200,
    defaultCommandTimeout: 10000,
    requestTimeout: 15000,
    pageLoadTimeout: 60000,
    retries: {
      runMode: 1,
      openMode: 0,
    },

    // Mochawesome reporter
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true
    },

    // Add this 👇 to resolve your step definitions properly
    cucumber: {
      stepDefinitions: ["cypress/e2e/BDD/step_definitions"]
    },

    // Include both BDD & POM test files
    specPattern: [
      "cypress/e2e/BDD/**/*.feature",
      "cypress/e2e/UITests/productsPage.cy.js",
      "cypress/e2e/UITests/newsLetterPage.cy.js",
      "cypress/e2e/APITests/pet_crud_api.cy.js"

    ],

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      mochawesome(on);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)]
        })
      );
      return config;
    }
  }
});


