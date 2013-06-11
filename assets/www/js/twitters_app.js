/*jslint browser: true */
/*global _, jQuery, $, console, Backbone */

var exercise = {
	    navigate: function (url) { window.location = url; }
};
(function($){
    
    exercise.initData = function(){
        exercise.twitters = new Twitters();
        exercise.twitters.fetch({async: false});  // use async false to have the app wait for data before rendering the list
    };
    
}(jQuery));

$('#twitters').live('pageinit', function(event){
    var twittersListContainer = $('#twitters').find(":jqmData(role='content')"),
    	twittersListView;
    exercise.initData();
    twittersListView = new TwitterListView({collection: exercise.twitters, viewContainer: twittersListContainer});
    twittersListView.render();
});

$('#refresh-button').live('click', function(){
    exercise.twitters.fetch({async:false});
});

$('#back-button').live('click', function(){
	exercise.navigate("index.html");
});
