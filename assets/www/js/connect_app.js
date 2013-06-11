
var exercise = {
	    navigate: function (url) { window.location = url; }
};

(function($){
    
    exercise.initData = function(){
    };
    
}(jQuery));

$('#loginForm').live('pageinit', function(event){
	exercise.initData();
	exercise.loginView = new LoginView();
});


$('#connect-button').live('click', function(event){
	exercise.loginView.connect(event);
});

