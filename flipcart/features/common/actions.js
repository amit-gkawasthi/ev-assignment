const EC = require('wdio-wait-for');

    exports.clickElement = async function (locator) {
        await browser.waitUntil(EC.visibilityOf(locator));
        await $(locator).click();
    }
    exports.enterText = async function () {
        return browser.url('https://www.johnlewis.com')
        // return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
    exports.selectOption = async function () {
        return browser.url('https://www.johnlewis.com')
        // return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
    exports.captureScreen = async function () {
        return browser.url('https://www.johnlewis.com')
        // return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
    exports.verifyPresence = async function () {
        return browser.url('https://www.johnlewis.com')
        // return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
    exports.verifyAbsence = async function () {
        return browser.url('https://www.johnlewis.com')
        // return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
    // export {clickElement};