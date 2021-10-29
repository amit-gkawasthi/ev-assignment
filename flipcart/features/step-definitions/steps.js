const { Given, When, Then } = require('@wdio/cucumber-framework');
var performAction = require('../common/actions.js');
const Locators = require('../support/loctors.js');
let objectRepo = new Locators();
const Configuration = require('../support/config.js');
let config = new Configuration();

const EC = require('wdio-wait-for');


Given(/^I am on the (\w+) page$/, async (page) => {
    await browser.url(config.url);
    await browser.maximizeWindow();
    //Close Login layover popup
    await performAction.clickElement(objectRepo.Close);
    // Search for phone starts here
    await performAction.clickElement(objectRepo.Mobiles);
    await performAction.clickElement(objectRepo.Electronics);
    await performAction.clickElement(objectRepo.MobileCompany);
    await performAction.clickElement(objectRepo.PhonePriceRange);
    // Product selection (cart population) starts here
    await performAction.clickElement(objectRepo.PhoneModel);
    var parentWindow = await browser.getWindowHandle()
    var handles = await browser.getWindowHandles()
    for(var i = 0; i< handles.length; i++){
        if( handles[i]!= parentWindow){
            await browser.switchToWindow(handles[i]);
            await browser.waitUntil(EC.visibilityOf(objectRepo.productLabel));

            await browser.waitUntil(EC.visibilityOf(objectRepo.AddToCart));
            if(!await $(objectRepo.AddToCart).isEnabled()){
                console.log("Button is not enabled hence can't perform shopping");
                await browser.saveScreenshot('./screenshots/screenshot.png');
            }else{
                await $(objectRepo.AddToCart).click();
                await browser.waitUntil(EC.visibilityOf('//div[contains(text(),"My Cart")]'));
                await browser.saveScreenshot('./screenshots/screenshot.png');
                break;
            }

        }
    }
    
    //Click on Flipcart home
    await performAction.clickElement(objectRepo.Home);
    //Closed login layover popup
    await performAction.clickElement(objectRepo.Close);
    //Click populated cart
    await performAction.clickElement(objectRepo.Cart);
    // Put assert here to verify added product
    await browser.waitUntil(EC.visibilityOf(objectRepo.PhoneModelInCart));
    //Click place order
    await performAction.clickElement(objectRepo.PlaceOrder);
    //Enter email address
    await performAction.enterText(objectRepo.EnterEmail, "amitkumarkawasthi@gmail.com");
    //Click continue
    await performAction.clickElement(objectRepo.Continue);
    //Enter mobile number
    await performAction.enterText(objectRepo.EnterMobile, "8411884758");
    //Click continue
    await performAction.clickElement(objectRepo.Continue);
    //Enter password
    await performAction.enterText(objectRepo.EnterPassword, "Gaurang@108");
    //Click Login
    await performAction.clickElement(objectRepo.Login);
    //Click continue
    await performAction.clickElement(objectRepo.Continue);
    //Click payment option
    await performAction.clickElement(objectRepo.PaymentOptions);
    //Click Net Banking
    await performAction.clickElement(objectRepo.NetBanking);
    await performAction.selectOption(objectRepo.BanksDropDown,"value","CORPORATION");
    await browser.saveScreenshot('./screenshots/screenshot.png');
    await browser.pause(250000);
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await $('#username').setValue(username);
    await $('#password').setValue(password);
    await $('button[type="submit"]').click();
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect($('#flash')).toBeExisting();
    await expect($('#flash')).toHaveTextContaining(message);
});

