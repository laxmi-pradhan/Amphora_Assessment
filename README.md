# Amphora_Assessment
# In terminal, select **Command Prompt** and run "npx cypress open" to open the Cypress Test Runner.

Description & structure of the project

**Features**

- UI Test Automation using Cypress
- API Test Automation using Cypress
- BDD Support with Cucumber
- Environment-Specific Configurations
- HTML Test Reports using Mochawesome
- Screenshots and Video Recording on Test Failure

**Project Structure**

cypress/
├── downloads/                  
├── e2e/
│   ├── APITests/             
│   │   └── pet_crud_api.cy.js
│   ├── BDD/                   
│   │   ├── step_definitions/  
│   │   └── amphora.feature    
│   └── UITests/               
│       ├── newsLetterPage.cy.js
│       ├── productsPage.cy.js
│       └── spec.cy.js
├── fixtures/                  
├── reports/                   
├── screenshots/               
├── support/
│   ├── Pages/                 
│   ├── commands.js            
│   └── e2e.js                 
├── videos/                    
├── node_modules/              
├── cypress.config.js          
├── package-lock.json          
└── package.json               

**Prerequisites**
Node.js 
npm
Cypress

**Installation**
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install

**Execution**
Single file = npx cypress run  "cypress\e2e\APITests"
Open Cypress test runner = npx cypress open
Project Run- npx cypress run

**Reports**
cypress/reports/mochawesome.html
