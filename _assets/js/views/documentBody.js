// app.documentHead
// model: app.documentModel

var Backbone = require('backbone');
var $ = require('jquery');

var MailForm = require('./mailForm');

module.exports = Backbone.View.extend({

    el: 'body',

    initialize: function () {
        "use strict";

        this.$el.append('<div class="outer"><hgroup><h1>' +
            this.model.get("appName") + '</h1></hgroup></div>');

        this.mainSection = this.$('div.outer');
        this.renderForm();
    },

    renderForm: function () {
        "use strict";

        var mailForm = new MailForm({model: this.model});

        console.log(mailForm.render());
        this.mainSection.append(mailForm.render().el); // does the actual rendering

        // this.mainSection.append(mailForm.el);

    },
});
