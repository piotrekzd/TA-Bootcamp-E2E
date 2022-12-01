Feature: The newegg website automated tests

    Background:
        Given I am on the newegg website
        When I am on the home page I can close the promo banner, if it appears

    @searchbar
    Scenario: As a user I can search for items using the searchbar
        When I entry 'Windows' word in the searchbar
        Then I click on the search button
        * I see that at least 1 item appears on the results page
