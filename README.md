# TA-Bootcamp-E2E

Develop E2E automated JS tests for https://www.newegg.com

Create bootcamp.feature file with the following 2 scenarios. Prepare tests only for Desktop run

Feature: Bootcamp E2E

Scenario: Search bar
1. Open the home page
2. Close the promo banner if it appears
3. Entry the word "Windows" in the search bar (top middle)
4. Click the search
5. Check that at least one item appears

Scenario: Internet shop logo button
1. Open the home page
2. Close the promo banner if it appears
3. Open "Today's Best Deals" tab
4. Click on the Internet shop logo (top right corner)
5. Check that the main page opened

# Setup
Clone this repository.

# Tests
Run `yarn install` in the root directory to install all dependencies.  
Run `yarn wdio` to run test.  
You will see the test result in the console output.  


