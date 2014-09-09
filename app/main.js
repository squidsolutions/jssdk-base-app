$( document ).ready(function() {
    
    var loginView, statusView, contentView, config;
    
    squid_api.setup({
        "apiUrl" : "api.squidsolutions.com",
        "clientId" : "local",
        "projectId" : null,
        "domainId" : null,
        "selection" : null
    });
    
    /*
     * Declare the views 
     */
     
    loginView = new squid_api.view.LoginView({
        el : '#login',
        autoShow : false
    });
    
    statusView = new squid_api.view.StatusView({
        el : '#status'
    });
    
    contentView = new squid_api.view.ContentView({
        el : '#content'
    });
    
    /*
     * Controller part
     */
    
    squid_api.model.login.on('change:login', function(model) {
        // performed when login is updated
        if (model.get("login")) {
            // login ok
            contentView.model.set({"message" : "Hello, you are up and running"});
            
        } else {
            // login ko
            contentView.model.set({"message" : "Please login"});
        }
    });
    
    squid_api.model.status.on('change', function(model){
        // performed when the global status changes
        if (model.get("status") == model.STATUS_DONE) {
            $("#main").removeClass("hidden");
        }
    });
    
    /*
     * Start the App
     */
    squid_api.init();
});
