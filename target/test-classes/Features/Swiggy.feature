Feature: Food Order 

@smokeTest
Scenario: Search Location

Given Open url:www.swiggy.com
Then Search with Kolkata
Then Search Resturent with Arsanal biryani
Then Find Mughal Arsalan Biryani 
Then add Two Biriyani
Then Click on Checkout button
