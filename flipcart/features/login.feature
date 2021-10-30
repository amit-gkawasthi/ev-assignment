Feature: Interview assignment

  Scenario: As a user, I want to place an order for a OPPO phone
    Given Evolent end to end test case


  Scenario: As a user, I want to purchase a OPPO phone 
    Given user is on "flipcart" page
    And user click element "Close"
    And user click element "Mobiles"
    And user click element "Electronics"
    And user click element "MobileCompany"
    And user click element "PhonePriceRange"
    And user click element "PhoneModel"
    And user switch to child window
    And user click element "AddToCart"
    # verify for mycart
    And User verify element on screen "MyCart"
    And user click element "Home"
    And user click element "Close"
    And user click element "Cart"
    # Verify cart
    And User verify element on screen "PhoneModelInCart"
    And user click element "PlaceOrder"
    And user login to his account
    And user click element "Continue"
    And user click element "PaymentOptions"
    And user click element "NetBanking"
    And user select option  "CORPORATION" from field "BanksDropDown"
    And user capture screenshot with name "paymentScreen"


 

