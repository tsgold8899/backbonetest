window.LoginView = Backbone.View.extend({

    initialize:function () {
        console.log('Initializing Login View');    
    },

    render: function() {
    	
        return this;
    },

     connect:function (event) {
        $('.alert-error').hide(); // Hide any errors on a new submit
        var url = 'http://api.twitter.com/oauth2/token';
        console.log('Connecting... ');
        
        $.ajax({
            url:url,
            type:'post',
            data: 'grant_type=client_credentials',
            crossDomain: true,
            dataType: 'json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Basic SFplOEhId2ZZdXBnaTJEbk5maHNnOk5BT2xLOUlnTUh0MGFqVDVBanJvYlN2SnpSYnFITWZDeWVNQktHY1F5Zzg=');
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
            },
            success:function (data) {
            	
                console.log(["Login request details: ", data]);
                
                if(data.error) {  // If there is an error, show the error messages
                    $('.alert-error').text(data.error.text).show();
                }
                else { // If not, send them back to the home page
                	document.cookie="twitter_access_token=" + data.access_token;
                    exercise.navigate("twitters.html");
                }
            },
            error:function(xhr, textStatus, thrownError) {
            	console.log("fail");
            }
        });
    }
});
