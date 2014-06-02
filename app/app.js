require(['jquery',
'backbone',
'config',
'jssdk/sdk/squid_api',
'jssdk/sdk/widgets/squid_api_login_widget',
'jssdk/sdk/widgets/squid_api_status',
'hbs!templates/hello'], 
function($, Backbone, config, squid_api, LoginView, StatusView, HelloTemplate) {

    var loginUrl = config.loginUrl;
    
    /*
     * Declare the views 
     */
     
    var loginView = new LoginView({
        el : $('#login'),
        model : squid_api.model.login,
        loginUrl : config.loginUrl
    });
    
    var statusView = new StatusView({
        el : $('#status'),
        model : squid_api.model.status
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
    
    // start here
    var start = function() {
        // display hello
    var jsonData = {"customer" : squid_api.customerId};
        var html = HelloTemplate(jsonData);
        $("#hello").html(html);
    };

    /*
     * bootstrapping the APP
     */
    
    squid_api.model.login.on('change:login', function(model) {
        // performed when login is updated
        if (model.get("login")) {
            if (squid_api.utils.getParamValue("access_token")) {
                // update the url to clear the token param
                try {
                    window.history.pushState("", "", squid_api.utils.clearParam("access_token"));
                } catch(e) {
                    // not supported
                }
            }
            $('.sq-main').show();
            start();
        } else {
            $('.sq-main').hide();
        }
    });
     
    squid_api.init({
        apiURL: config.apiUrl,
        clientId: config.clientId
    });
});
