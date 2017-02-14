var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

module.exports = Backbone.View.extend({
    tagName: 'fieldset',

    // template: _.template("<p><%= appDescription %></p><form></form>"),

    initialize: function () {
        var t = "<p><%= appDescription %></p>";
        t += "<form>";

        t += "<p>";
        t += "<label for=\"to_field\">To:</label>";
        t += "<input type=\"text\" id=\"to_field\" value=\"<%= to %>\">";
        t += "</p>";

        t += "<p>";
        t += "<label for=\"from_field\">From:</label>";
        t += "<input type=\"text\" id=\"from_field\" value=\"<%= from %>\">";
        t += "</p>";

        t += "<p>";
        t += "<label for=\"html_file\">File Location:</label>";
        t += "<input type=\"text\" id=\"html_file\">";
        t += "</p>";

        t += "<input type=\"submit\" value=\"Submit\">";
        t += "</form>";

        this.template = _.template(t);
    },

    render: function () {
        "use strict";

        // var template = _.template(this.template);
        // this.$el.html('is this on???');
        // this.$el.html('this is where the form gets inserted');
        this.$el.html(this.template(this.model.toJSON()));


        return this;
    },
});
