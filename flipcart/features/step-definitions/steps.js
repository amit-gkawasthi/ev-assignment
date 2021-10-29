const { Given, When, Then } = require('@wdio/cucumber-framework');
var performAction = require('../common/actions.js');
const Locators = require('../support/loctors.js');
let objectRepo = new Locators();
const EC = require('wdio-wait-for');


Given(/^I am on the (\w+) page$/, async (page) => {
    await browser.url(`https://www.flipkart.com/`);


    // await performAction.clickElement('//span[contains(.,"Login")]/ancestor::div/div/div/button');

    // await browser.pause(250000);

    await browser.waitUntil(EC.visibilityOf('//span[contains(.,"Login")]/ancestor::div/div/div/button'));
    await $('//span[contains(.,"Login")]/ancestor::div/div/div/button').click();
    // browser.takeScreenshot();
    
    // ******************************Search starts here*********************************
    await browser.waitUntil(EC.visibilityOf('//div[text()="Mobiles"]'));
    await $('//div[text()="Mobiles"]').click();
    // browser.takeScreenshot();
    await browser.waitUntil(EC.visibilityOf('//span[text()="Electronics"]'));
    await $('//span[text()="Electronics"]').click();
    await browser.waitUntil(EC.visibilityOf('//a[@title="OPPO"]'));
    // browser.takeScreenshot();
    await $('//a[@title="OPPO"]').click();
    // browser.takeScreenshot();
    await browser.waitUntil(EC.visibilityOf('//h2[text()="Oppo Mobiles under ₹10K"]/parent::div/following-sibling::div/a'));
    await $('//h2[text()="Oppo Mobiles under ₹10K"]/parent::div/following-sibling::div/a').click();
    // ******************************Search ends here*********************************

    //*******************************Product selection (cart population) starts here********************
    await browser.waitUntil(EC.visibilityOf('//div[text()="OPPO A12 (Black, 32 GB)"]'));
    await $('//div[text()="OPPO A12 (Black, 32 GB)"]').click();
    await browser.maximizeWindow();
    var parentWindow = await browser.getWindowHandle()
    var ID = await browser.getWindowHandles()
    for(var i = 0; i< ID.length; i++){
        if( ID[i]!= parentWindow){
            await browser.switchToWindow(ID[i]);
            await browser.waitUntil(EC.visibilityOf('//h1[contains(.,"OPPO A12 (Black, 32 GB)")]'));
            // await $('//h1[contains(.,"OPPO A3s (Red, 16 GB)")]').moveTo(10,10);
            await browser.waitUntil(EC.visibilityOf('//button[contains(.,"ADD TO CART")]'));
            if(!await $('//button[contains(.,"ADD TO CART")]').isEnabled()){
                console.log("Button is enabled hence can perform shopping");
                await browser.saveScreenshot('./screenshots/screenshot.png');
            }
            await $('//button[contains(.,"ADD TO CART")]').click();
            await browser.waitUntil(EC.visibilityOf('//div[contains(text(),"My Cart")]'));
            await browser.saveScreenshot('./screenshots/screenshot.png');
            break;
        }
    }
    //*******************************Product selection (cart population) ends  here********************

    await browser.waitUntil(EC.visibilityOf('a:nth-child(1) > img'));
    await $('a:nth-child(1) > img').click();


    await browser.waitUntil(EC.visibilityOf('//span[contains(.,"Login")]/ancestor::div/div/div/button'));
    await $('//span[contains(.,"Login")]/ancestor::div/div/div/button').click();

    await browser.waitUntil(EC.visibilityOf('//span[text()="Cart"]'));
    await $('//span[text()="Cart"]').click();

    //************************************Put assert here************************************* */
    await browser.waitUntil(EC.visibilityOf('//a[text()="OPPO A12 (Black, 32 GB)"]'));
   //************************************Put assert here************************************* */


   await browser.waitUntil(EC.visibilityOf('//button[contains(.,"Place Order")]'));
   await $('//button[contains(.,"Place Order")]').click();


   await browser.waitUntil(EC.visibilityOf('//label[contains(.,"Enter Email/Mobile number")]/parent::div/input'));
   await $('//label[contains(.,"Enter Email/Mobile number")]/parent::div/input').setValue("amitkumarkawasthi@gmail.com");

   await browser.waitUntil(EC.visibilityOf('//button[contains(.,"CONTINUE")]'));
   await $('//button[contains(.,"CONTINUE")]').click();

   await browser.waitUntil(EC.visibilityOf('//label[contains(.,"Enter Mobile number")]/parent::div/input'));
   await $('//label[contains(.,"Enter Mobile number")]/parent::div/input').setValue("8411884758");

   await browser.waitUntil(EC.visibilityOf('//button[contains(.,"CONTINUE")]'));
   await $('//button[contains(.,"CONTINUE")]').click();

   await browser.waitUntil(EC.visibilityOf('//button[contains(.,"CONTINUE")]'));
   await $('//button[contains(.,"Login")]').click();

   await browser.waitUntil(EC.visibilityOf('//label[contains(.,"Enter Password")]/parent::div/input'));
   await $('//label[contains(.,"Enter Password")]/parent::div/input').setValue("Gaurang@108");

   await browser.waitUntil(EC.visibilityOf('//button[contains(.,"Login")]'));
   await $('//button[contains(.,"Login")]').click();
  
   await browser.waitUntil(EC.visibilityOf('//button[contains(.,"CONTINUE")]'));
   await $('//button[contains(.,"CONTINUE")]').click();


   await browser.waitUntil(EC.visibilityOf('//span[text()="Payment Options"]/parent::h3'));
   await $('//span[text()="Payment Options"]/parent::h3').click();


   await browser.waitUntil(EC.visibilityOf('//div[text()="Net Banking"]'));
   await $('//div[text()="Net Banking"]').click();

   await browser.waitUntil(EC.elementToBeEnabled('//h3[text()="Other Banks"]/following-sibling	::div/select'));

   await $('//h3[text()="Other Banks"]/following-sibling::div/select').selectByAttribute("value", "CORPORATION");

   await browser.saveScreenshot('./screenshots/screenshot.png');

    await browser.pause(250000);

    // await browser.switchToWindow(parentWindow);
    // browser.pause(3000)
    // browser.switchToWindow(parentWindow)
    // browser.pause(3000)

    // console.log("-----------------------------------------------------------------------------------------------------------------");
    // console.log("Parent window");
    // console.log(parentWindow);
    // console.log("-----------------------------------------------------------------------------------------------------------------");
    // // var window1 = windowHandles.value[0];
    // var window2 = windowHandles.value[1];
    // var title1 = browser.window(window1).getTitle();
    // console.log(title1); // title of one.html
    // var title2 = browser.window(window2).getTitle();
    // console.log(title2); // title of two.html



    // await browser.waitUntil(EC.visibilityOf('//h1[contains(.,"OPPO A3s (Red, 16 GB)")]'));


    // $(selector).moveTo({ xOffset, yOffset })
    // await browser.waitUntil(EC.visibilityOf('//button[contains(.,"ADD TO CART")]'));

    

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

