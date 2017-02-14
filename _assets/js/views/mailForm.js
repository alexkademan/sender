var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

module.exports = Backbone.View.extend({

    tagName: 'fieldset',

    events: {
        "click .submit": "submitForm",
    },

    initialize: function () {
        "use strict";

        var t = "<p><%= appDescription %></p>";
        t += "<form>";

        t += "<p>";
        t += "<label for=\"to_field\">To:</label>";
        t += "<input type=\"text\" id=\"to_field\" ";
        t += "name=\"to_field\" value=\"<%= to %>\">";
        t += "</p>";

        t += "<p>";
        t += "<label for=\"from_field\">From:</label>";
        t += "<input type=\"text\" id=\"from_field\" ";
        t += "name=\"from_field\" value=\"<%= from %>\">";
        t += "</p>";

        t += "<p>";
        t += "<label for=\"html_file\">File Location:</label>";
        t += "<input type=\"text\" id=\"html_file\" ";
        t += "name=\"html_file\" value=\"<%= htmlLocation %>\">";
        t += "</p>";

        t += "<input type=\"submit\" value=\"Submit\" class=\"submit\">";
        t += "</form>";

        t += "<div class=\"result\"></div>";

        this.template = _.template(t);

        this.model.on({'change:result': this.showResult}, this);
        // this.model.on({"change:value": this.validate}, this);

    },

    render: function () {
        "use strict";
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    submitForm: function (e) {
        "use strict";
        e.preventDefault();

        this.phpScript();
    },

    phpScript: function () {
        "use strict";
        // send away!
        var formData = this.$('form').serialize();
        console.log(formData);

        $.ajax({
            url: this.model.get("phpLocation") + 'sender.php',
            type: "post",
            data: formData,
            dataType: "html",

            success: function (result) {
                app.documentModel.set({result: result});
            }
        });
    },

    showResult: function () {
        "use strict";
        var result = this.model.get("result");
        this.$('div.result').html(result);
    },
});
