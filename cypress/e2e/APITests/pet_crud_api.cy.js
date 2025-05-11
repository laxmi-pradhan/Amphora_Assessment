/// <reference types="Cypress" />

//In terminal, select **Command Prompt** and run "npx cypress open" to open the Cypress Test Runner.

describe('Petstore Swagger API CRUD operations', () => {
    let petId; // To store unique pet ID
    let petData; // For creating pet
    let updatedPetData; // For updating pet
    const url = Cypress.env("petApiUrl"); // Base URL from cypress.config.js

    // Load fixture and prepare test data
    before(() => {
        cy.fixture('petData').then((data) => {
            petId = Date.now(); // Generate unique ID

            // Create pet data from fixture
            petData = {
                id: petId,
                name: data.name,
                status: data.status
            };

            // Updated pet data
            updatedPetData = {
                id: petId,
                name: `${data.name}_Updated`,
                status: 'sold'
            };
        });
    });

    // Create pet - POST request
    it('Create a pet', () => {
        cy.request('POST', `${url}/pet`, petData).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.name).to.eq(petData.name);
        });
    });

    // Update pet - PUT request
    it('Update the pet', () => {
        cy.request('PUT', `${url}/pet`, updatedPetData).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.name).to.eq(updatedPetData.name);
        });
    });

    // Read pet - GET request (with wait)
    it('Read the pet', () => {
        // As its a public API, sometimes it takes time to sync, hence waiting
        cy.wait(10000); // waiting before reading 
        cy.request({
            method: 'GET',
            url: `${url}/pet/${petId}`,
            failOnStatusCode: false
        }).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.name).to.eq(updatedPetData.name);
            expect(res.body.status).to.eq(updatedPetData.status);
        });
    });

    // Delete pet - DELETE request (with wait)
    it('Delete pet', () => {
        // As its a public API, sometimes it takes time to sync, hence waiting 
        cy.wait(10000); // waiting before deleting 
        cy.request({
            method: 'DELETE',
            url: `${url}/pet/${petId}`,
            failOnStatusCode: false
        }).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.message).to.eq(petId.toString());
        });
    });
});
