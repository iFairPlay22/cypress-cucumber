Feature: GoogleSearchPage
  Scenario: Keyword search in google search page
    When I visit google search page
    Then Page url should be prefixed by ["https://www.google.fr/"]
    Then The popin should be opened
    When I close the popin
    Then The popin should be closed
    Then I should see a valid google search page with language ["France"]
    When I search for ["Darva"]
    Then Page url should be prefixed by ["https://www.google.fr/search?q=Darva"]