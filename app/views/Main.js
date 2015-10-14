var MainView = Backbone.View.extend({
    el: '#app',

    events: {
        'click .add-blog': 'onAdd'
    },

    initialize: function() {
        this.blogsView = new BlogsView();
    },

    onAdd: function() {
        this.blogsView.collection.create({
            author: this.$('.author-input').val(),
            title: this.$('.title-input').val(),
            url: this.$('.url-input').val(),
        });

        this.$('.author-input').val('');
        this.$('.title-input').val('');
        this.$('.url-input').val('');
    }
});

