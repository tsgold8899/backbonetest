window.Twitter = Backbone.Model.extend({
    });

window.Twitters = Backbone.Collection.extend({
    model: Twitter,
    url: "http://search.twitter.com/search.json?q=%23sncf&rpp=30",
    parse: function(response) {
    	console.log('parsing ...');
    	return response.results;
    }
});