@amazon
Feature: Navigate to tablet accessories page and view product details

   Background: 
    Given I visit the home page

    Scenario: Navigate to tablet accessories page and view product details
    When I click on the continue shopping button three times
    And I click on the hamburger menu
    And I click on the computers category
    And I scroll to the top of the page
    And I click on the sort by dropdown
    And I select the newest arrivals option
    And I click on the first product
    And I click on the product title
    Then I should see the product details page