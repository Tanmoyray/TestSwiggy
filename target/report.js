$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Swiggy.feature");
formatter.feature({
  "line": 1,
  "name": "Food Order",
  "description": "",
  "id": "food-order",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Search Location",
  "description": "",
  "id": "food-order;search-location",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open url:www.swiggy.com",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Search with Kolkata",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Search Resturent with Arsanal biryani",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Find Mughal Arsalan Biryani",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "add Two Biriyani",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on Checkout button",
  "keyword": "Then "
});
formatter.match({
  "location": "SwiggyStepDefination.open_url_www_swiggy_com()"
});
formatter.result({
  "duration": 478721186,
  "status": "passed"
});
formatter.match({
  "location": "SwiggyStepDefination.search_with_Kolkata()"
});
formatter.result({
  "duration": 27259,
  "status": "passed"
});
formatter.match({
  "location": "SwiggyStepDefination.search_Resturent_with_Arsanal_biryani()"
});
formatter.result({
  "duration": 22124,
  "status": "passed"
});
formatter.match({
  "location": "SwiggyStepDefination.find_Mughal_Arsalan_Biryani()"
});
formatter.result({
  "duration": 23704,
  "status": "passed"
});
formatter.match({
  "location": "SwiggyStepDefination.add_Two_Biriyani()"
});
formatter.result({
  "duration": 25679,
  "status": "passed"
});
formatter.match({
  "location": "SwiggyStepDefination.click_on_Checkout_button()"
});
formatter.result({
  "duration": 29235,
  "status": "passed"
});
});