@regression
Feature: User is able to login

    @validlogin @smoketest
    Scenario: User is able to login with valid credentials
        Given As a user, I am on the login page
        When I enter valid username and valid password
        And I click on login button
        Then I should be on user profile page