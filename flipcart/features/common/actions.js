const EC = require('wdio-wait-for');

    exports.clickElement = async function (locator) {
        await browser.waitUntil(EC.visibilityOf(locator));
        await $(locator).click();
    }
    exports.enterText = async function (locator, text) {
        await browser.waitUntil(EC.visibilityOf(locator));
        await $(locator).setValue(text);
    }
    exports.selectOption = async function (locator,attribute,value) {
        await browser.waitUntil(EC.elementToBeEnabled(locator));
        await $(locator).selectByAttribute(attribute, value);
     
    }
    exports.captureScreen = async function (name) {
        await browser.saveScreenshot('./screenshots/'+name+'.png');

    }
    exports.verifyPresence = async function () {

    }
    exports.verifyAbsence = async function () {

    }

    exports.switchToChildWindow = async function(){
        var parentWindow =  await browser.getWindowHandle()
        var handles =  await browser.getWindowHandles()
        for(var i = 0; i< handles.length; i++){
            if( handles[i]!= parentWindow){
                 await browser.switchToWindow(handles[i]);
                break;
            }
        }
    }