require(['jquery',
'backbone',
'squid_api',
'jssdk/sdk/widgets/squid_api_login_widget',
'jssdk/sdk/widgets/squid_api_status',
'widgets/hello'], 
function($, Backbone, squid_api, LoginView, StatusView, ContentView) {
    
    var loginView, statusView, contentView, config;
    
    /*
     * Declare the views 
     */
     
    loginView = new LoginView({
        el : $('#login'),
        autoShow : false
    });
    
    statusView = new StatusView({
        el : $('#status')
    });
    
    contentView = new ContentView({
        el : $('#content')
    });
    
    /*
     * Controller part
     */
    
    squid_api.model.login.on('change:login', function(model) {
        // performed when login is updated
        if (model.get("login")) {
            // login ok
            contentView.model.set({"message" : "Hello, you are logged with a user account on customer "+squid_api.customerId});
            
        } else {
            // login ko
            contentView.model.set({"message" : "Please login"});
        }
        $('#main').show();
    });
    
    /*
     * Start the App
     */
    config = {
        "customerId" : null,
        "clientId" : null,
        "projectId" : null,
    };
    squid_api.init(config);
});
