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
    exports.captureScreen = async function () {

    }
    exports.verifyPresence = async function () {

    }
    exports.verifyAbsence = async function () {

    }