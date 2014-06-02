define(['backbone', 'hbs!templates/hello'], function(Backbone, defaultTemplate) {

    var View = Backbone.View.extend({
        template : null,

        initialize: function(options) {
            if (this.model) {
                this.model.on('change', this.render, this);
            }
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = defaultTemplate;
            }
        },

        setModel: function(model) {
            this.model = model;
            this.initialize();
        },

        render: function() {
            // display
            var jsonData = this.model.toJSON();
            var html = this.template(jsonData);
            this.$el.html(html);
            this.$el.show();
            return this;
        }

    });

    return View;
});
