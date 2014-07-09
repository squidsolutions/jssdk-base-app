(function (root, factory) {
    root.squid_api.view.ContentView = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({
        template : null,

        initialize: function(options) {
            var Model;
            if (!this.model) {
                // create a default Model
                Model = Backbone.Model.extend();
                this.model = new Model({"message" : null});
            }
            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = app.template.hello;
            }
            // listen for model changes
            this.model.on('change', this.render, this);
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
}));
