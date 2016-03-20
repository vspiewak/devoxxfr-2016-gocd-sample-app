var expect = require('chai').expect;

module.exports = {

  after: (browser) => {
      browser.end();
  },
  
  'Root should be visible': (browser) => {

    browser
    .init()
    .waitForElementVisible('body');

    // expect body to be present
    browser.expect.element('body').to.be.present;

    // expect element <root> to be visible
    browser.expect.element('#root').to.be.visible;

  }

};
