require(['jquery',
'backbone',
'config',
'jssdk/sdk/squid_api',
'jssdk/sdk/widgets/squid_api_login_widget',
'jssdk/sdk/widgets/squid_api_status',
'widgets/hello'], 
function($, Backbone, config, squid_api, LoginView, StatusView, ContentView) {
    
    /*
     * Declare the views 
     */
     
    var loginView = new LoginView({
        el : $('#login'),
        model : squid_api.model.login,
        loginUrl : config.loginUrl,
        autoShow : true
    });
    
    var statusView = new StatusView({
        el : $('#status'),
        model : squid_api.model.status
    });
    
    var contentView = new ContentView({
        el : $('#content')
    });
    
    /*
     * Controller part
     */
    
    // handle logout
    $('.logout').click(function(event){
        event.preventDefault();
        squid_api.model.login.logout();
    });
    
    // handle session expiration
    squid_api.model.status.on('change:error', function(model) {
        var err = model.get("error").status;
        if ((err == 401) || (err == 403)) {
            squid_api.utils.clearLogin();
        }
    });

    /*
     * bootstrapping the APP
     */
    
    squid_api.model.login.on('change:login', function(model) {
        // performed when login is updated
        if (model.get("login")) {
            // login ok
            contentView.model.set({"message" : "Hello, you are logged with a user account on customer "+squid_api.customerId});
            $('.sq-main').show();
        } else {
            // login ko
            $('.sq-main').hide();
        }
    });
     
    squid_api.init({
        apiURL: config.apiUrl,
        clientId: config.clientId
    });
});
