/*var BlogsView = Backbone.View.extend({
    el: '#blogs-list',

    initialize: function() {
        this.collection = new BlogCollection();
        this.collection.on('add', this.render, this);
        this.collection.fetch();
    },

    render: function() {
        var self = this;

        this.$el.html('');

        this.collection.each(function(model) {
            var v = new BlogView({model: model});
            self.$el.append(v.render().$el);
        });

        return this;
    }
});*/

var BlogsView = Backbone.View.extend({
    el: '#blogs-list',

    initialize: function() {
        this.$el.html('');
        this.collection = new BlogCollection();
        this.collection.on('add', this.render, this);
        this.collection.fetch();
    },

    render: function(model) {
        var view = new BlogView({model: model});
        this.$el.append(view.render().$el);
        return this;
    }
});
