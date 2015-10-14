var BlogCollection = Backbone.Collection.extend({
    model: Blog,
    url: 'http://wgg.dev/v1/blogs',

    parse: function(data) {
        return data.blogs;
    }
});
