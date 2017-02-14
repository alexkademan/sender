var Backbone = require('backbone');
var $ = require('jquery');

module.exports = Backbone.Model.extend({
    defaults: {

        // project info:
        appName: 'HTML Email Sender',
        appDescription: 'A simple form for sending HTML email',
        author: 'AlexKademan.site',
        pageTitle: '',

        // scripts:
        phpLocation: 'http://192.168.1.110/~Alex/mjml/sender/php/',
        result: '',

        // message stuff:
        to: 'alex@designbymodus.com',
        from: 'alexkademan@gmail.com',
        htmlLocation: '/Users/Alex/Sites/mjml/test01/example.html',
        subject: 'test email',

    }
});
