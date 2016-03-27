Feature: Boilerplate smoke tests

Scenario: Opening Boilerplate

    Given I open Boilerplate page
    Then the title is "Boilerplate"
    And the '#root' div exists
