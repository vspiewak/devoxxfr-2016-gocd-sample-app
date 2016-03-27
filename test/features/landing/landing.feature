Feature: Landing page

Scenario: Opening Boilerplate

    Given I open Boilerplate page
    Then the title is "Boilerplate"
    And the '#root' div exists

Scenario: Opening Boilerplate again

    Given I open Boilerplate page
    Then the title is "Boilerplate"
    And the '#root' div exists
