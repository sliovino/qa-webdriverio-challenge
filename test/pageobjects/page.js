const { browser } = require('@wdio/globals')

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    
    open () {
        return browser.url(`http://immense-hollows-74271.herokuapp.com/`)
    }
}
