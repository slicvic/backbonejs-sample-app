var BlogView = Backbone.View.extend({
    tagName: 'tr',
    events: {
        'click .edit-blog': 'onEdit',
        'click .delete-blog': 'onDelete',
        'click .update-blog': 'onUpdate',
        'click .cancel': 'onCancel'
    },

    initialize: function() {
        var self = this;
        this.showTemplate = _.template($('#blogs-list-template').html());
        this.editTemplate = _.template($('#blogs-list-edit-template').html());
        this.model.on('destroy', this.remove, this);
        this.model.on('change', this.render, this);
    },

    render: function() {
        this.$el.html(this.showTemplate(this.model.toJSON()));
        return this;
    },

    onEdit: function() {
        this.$el.html(this.editTemplate(this.model.toJSON()));
    },

    onCancel: function() {
        this.render();
    },

    onUpdate: function() {
        this.model.set({
            author: this.$('.author-update').val(),
            title: this.$('.title-update').val(),
            url: this.$('.url-update').val()
        });

        if ('{}' === JSON.stringify(this.model.changed)) {
            this.onCancel();
        }
        else {
            this.model.save();
        }
    },

    onDelete: function() {
        if (confirm('Are you sure?')) {
            this.model.destroy();
        }
    }
});
