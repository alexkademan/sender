var Backbone = require('backbone');
var $ = require('jquery');

module.exports = Backbone.Model.extend({
    defaults: {

        appName: 'HTML Email Sender',
        appDescription: 'A simple form for sending HTML email',
        author: 'AlexKademan.site',
        pageTitle: '',

        // message stuff:
        subject: '',
        htmlLocation: '',
        from: 'donotreply@designbymodus.com',
        to: 'alex@designbymodus.com',

    }
});
