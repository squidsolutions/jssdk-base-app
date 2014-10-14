$( document ).ready(function() {
    
    var api = api, contentView;
    
    api.setup({
        "apiUrl" : "api.squidsolutions.com",
        "clientId" : null,
        "projectId" : null,
        "domainId" : null,
        "selection" : null
    });
    
    /*
     * Declare the views 
     */
     
    new api.view.LoginView({
        el : '#login',
        autoShow : false
    });
    
    new api.view.StatusView({
        el : '#status'
    });
    
    contentView = new api.view.ContentView({
        el : '#content'
    });
    
    /*
     * Controller part
     */
    
    api.model.login.on('change:login', function(model) {
        // performed when login is updated
        if (model.get("login")) {
            // login ok
            contentView.model.set({"message" : "Hello, you are up and running"});
            
        } else {
            // login ko
            contentView.model.set({"message" : "Please login"});
        }
    });
    
    api.model.status.on('change', function(model){
        // performed when the global status changes
        if (model.get("status") == model.STATUS_DONE) {
            $("#main").removeClass("hidden");
        }
    });
    
    /*
     * Start the App
     */
    api.init();
});
