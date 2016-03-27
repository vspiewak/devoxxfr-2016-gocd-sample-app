module.exports = function() {

    this.Given(/^I open Boilerplate page$/, function() {
        this
            .init()
            .waitForElementVisible('body', 1000);
    });

    this.Then(/^the title is "([^"]*)"$/, function(title) {
        this.assert.title(title);
    });

    this.Then(/^the '([^"]*)' div exists$/, function(id) {
        this.assert.visible(id);
    });

};
