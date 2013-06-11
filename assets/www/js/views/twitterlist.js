window.TwitterListView = Backbone.View.extend({
        tagName: 'ul',
        id: 'twitters-list',
        attributes: {"data-role": 'listview'},
        
        initialize: function() {
            this.collection.bind('add', this.add, this);
            this.template = _.template($('#twitter-list-item-template').html());
        },
        
        render: function() {
            var container = this.options.viewContainer,
            	twitters = this.collection,
                template = this.template,
                listView = $(this.el);
                
            $(this.el).empty();
            twitters.each(function(twitter){
                listView.append(template(twitter.toJSON()));
            });
            container.html($(this.el));
            container.trigger('create');
            return this;
        },
        
        add: function(item) {
            var twittersList = $('#twitters-list'),
                template = this.template;
                
            twittersList.append(template(item.toJSON()));
            twittersList.listview('refresh');
        }
});