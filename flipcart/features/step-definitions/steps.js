const { Given, When, Then } = require('@wdio/cucumber-framework');
//config properties
var ConfigReader = require('properties-reader');
var config = ConfigReader('C:/Projects/evolent/flipcart/features/support/config.properties');

//Locators
var PropertiesReader = require('properties-reader');
var locators = PropertiesReader('C:/Projects/evolent/flipcart/features/support/locator.properties');

//Generic actions
var performAction = require('../common/actions.js');

//Expected Conditions wait
const EC = require('wdio-wait-for');


Given(/^user is on "(\w+)" page$/, async (page) => {
    await browser.url(config.get(page));
    await browser.maximizeWindow();
});

When(/^user click element "(\w+)"$/, async (locator) => {
    await performAction.clickElement(locators.get(locator));
});


When(/^user enter text "(\w@+)" in field "(\w+)"$/, async (text, locator) => {
    await performAction.enterText(locators.get(locator), text);
});

When(/^user select option  "(\w+)" from field "(\w+)"$/, async (option, locator) => {
    await performAction.selectOption(locators.get(locator),"value",option);
});

Then(/^I should see a "(\w+)" message in field "(\w+)"$/, async (message, locator) => {
    await expect($(locators.get(locator))).toBeExisting();
    await expect($(locators.get(locator))).toHaveTextContaining(message);
});

Then(/^User verify element on screen "(\w+)"$/, async (locator) => {
    await expect($(locators.get(locator))).toBeDisplayed();
});

Then(/^user capture screenshot with name "(\w+)"$/, async (name) => {
    await performAction.captureScreen(name);
});

Then(/^user switch to child window$/, async () => {
    await performAction.switchToChildWindow();
});

Then(/^user login to his account$/, async () =>{
       //Enter email address
       await performAction.enterText(locators.get("EnterEmail"), "amitkumarkawasthi@gmail.com");
       //Click continue
       await performAction.clickElement(locators.get("Continue"));
       //Enter mobile number
       await performAction.enterText(locators.get("EnterMobile"), "8411884758");
       //Click continue
       await performAction.clickElement(locators.get("Continue"));
       //Enter password
       await performAction.enterText(locators.get("EnterPassword"), "Gaurang@108");
       //Click Login
       await performAction.clickElement(locators.get("Login"));
});

Given(/^Evolent end to end test case$/, async () => {
    await browser.url(config.get("url"));
    await browser.maximizeWindow();
    //Close Login layover popup
    await performAction.clickElement(locators.get("Close"));
    // Search for phone starts here
    await performAction.clickElement(locators.get("Mobiles"));
    await performAction.clickElement(locators.get("Electronics"));
    await performAction.clickElement(locators.get("MobileCompany"));
    await performAction.clickElement(locators.get("PhonePriceRange"));
    // Product selection (cart population) starts here
    await performAction.clickElement(locators.get("PhoneModel"));
    var parentWindow = await browser.getWindowHandle()
    var handles = await browser.getWindowHandles()
    for(var i = 0; i< handles.length; i++){
        if( handles[i]!= parentWindow){
            await browser.switchToWindow(handles[i]);
            await browser.waitUntil(EC.visibilityOf(locators.get("productLabel")));

            await browser.waitUntil(EC.visibilityOf(locators.get("AddToCart")));
            if(!await $(locators.get("AddToCart")).isEnabled()){
                console.log("Button is not enabled hence can't perform shopping");
                await browser.saveScreenshot('./screenshots/screenshot.png');
            }else{
                await $(locators.get("AddToCart")).click();
                await browser.waitUntil(EC.visibilityOf(locators.get("myCart")));
                await browser.saveScreenshot('./screenshots/screenshot.png');
                break;
            }

        }
    }
    
    //Click on Flipcart home
    await performAction.clickElement(locators.get("Home"));
    //Closed login layover popup
    await performAction.clickElement(locators.get("Close"));
    //Click populated cart
    await performAction.clickElement(locators.get("Cart"));
    // Put assert here to verify added product
    await browser.waitUntil(EC.visibilityOf(locators.get("PhoneModelInCart")));
    //Click place order
    await performAction.clickElement(locators.get("PlaceOrder"));
    //Enter email address
    await performAction.enterText(locators.get("EnterEmail"), "amitkumarkawasthi@gmail.com");
    //Click continue
    await performAction.clickElement(locators.get("Continue"));
    //Enter mobile number
    await performAction.enterText(locators.get("EnterMobile"), "8411884758");
    //Click continue
    await performAction.clickElement(locators.get("Continue"));
    //Enter password
    await performAction.enterText(locators.get("EnterPassword"), "Gaurang@108");
    //Click Login
    await performAction.clickElement(locators.get("Login"));
    //Click continue
    await performAction.clickElement(locators.get("Continue"));
    //Click payment option
    await performAction.clickElement(locators.get("PaymentOptions"));
    //Click Net Banking
    await performAction.clickElement(locators.get("NetBanking"));
    //Select corporation bank
    await performAction.selectOption(locators.get("BanksDropDown"),"value","CORPORATION");
    //Capture screenshot
    await performAction.captureScreen("LastScreen");

});