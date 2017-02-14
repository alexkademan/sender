var DocModel = require('./models/pageBasics');
var DocHead = require('./views/documentHead');
var DocBody = require('./views/documentBody');

var domReady = require('domready');

module.exports = {

    // this is the the whole app initter
    blastoff: function () {
        "use strict";
        window.app = this;

        // wait for document ready to render our main view
        // this ensures the document has a body, etc.
        domReady(function () {
            // render the pieces of the page:
            app.documentModel = new DocModel();
            app.documentHead = new DocHead({model: app.documentModel});
            app.documentBody = new DocBody({model: app.documentModel});
        });
    }
};

// run it
module.exports.blastoff();
