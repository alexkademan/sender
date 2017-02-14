// app.documentHead
// model: app.documentModel

var Backbone = require('backbone');
// var _ = require('underscore');
var $ = require('jquery');

module.exports = Backbone.View.extend({

    el: 'head',

    initialize: function () {
        "use strict";
        this.render();
        this.model.on({'change:pageTitle': this.changeTitle}, this);
    },

    render: function () {
        "use strict";

        var headInfo = '';

        headInfo += '<meta charset="utf-8">';
        headInfo += '<title>' + this.model.get("appName") + '</title>';
        headInfo += '<meta name="description" content="' +
            this.model.get("appDescription") + '">';
        headInfo += '<meta name="author" content="' +
            this.model.get("author") + '">';
        headInfo += '<meta name="viewport" content="width=device-width">';

        this.$el.append(headInfo);
    },

    changeTitle: function () {
        "use strict";
        this.$("title").html(this.model.get("pageTitle"));
    }
});
