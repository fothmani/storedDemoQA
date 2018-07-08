Feature: As a user
    I navigate to the sample page url, I am able to post a comment only if the email address is correct

  Scenario: Should post comment only if email is correct
    Given I navigate to the sample page
    When I enter a comment with wrong email "test"
    Then I should get an error message
    When I click on back
    And I enter a comment with correct email "test@gmail.com"
    Then The comment should be received
