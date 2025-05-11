#In terminal, select **Command Prompt** and run "npx cypress open" to open the Cypress Test Runner.


Feature: Amphora UI Tests

  Scenario: Open Amphora website and verify Products menu
    Given I open the Amphora website
    When I hover over the Products menu
    Then I should see the product options:
      | Symphony CTRM              |
      | Alchemy CTRM               |
      | VaR Module                 |
      | Trade confirmations manager |
      | Freight manager            |
      | Claims manager             |
      | Symphony Credit            |

  Scenario: Subscribe to the newsletter
    Given I open the Amphora website
    When I navigate to the Newsletter page
    And I submit the newsletter form with "test@gmail.com", "QA", "Engineer"
    Then I should see the newsletter success message
