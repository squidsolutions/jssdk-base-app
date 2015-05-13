$( document ).ready(function() {
    
    var api = squid_api, config;

    api.setup({
        "clientId" : "local",
        "config" : {
            "project" : "musicbrainz"
        }
    });
    
    // get the config after setup
    config = api.model.config;
    
    /*
     * Declare the views 
     */
     
    new api.view.LoginView({
        el : '#login',
        autoShow : true
    });
    
    new api.view.StatusView({
        el : '#status'
    });
    
    var content = $("#main-content");

    /*
     * Controller part
     */
    
    // handle the login event
    api.model.login.on('change:login', function(model) {
        $("#main").removeClass("hidden");
        var login = model.get("login");
        if (login) {
            // login ok
            content.html("Hello "+login);
        } else {
            content.html("Please login");
        }
    });
    
    // handle project
    api.model.project.on('change', function(project) {
        if (project) {
            content.append("\nThe current Project fetched : "+project.get("name"));
        }
    });

    // handle configuration
    config.on('change', function(config) {
        if (config) {
            content.append("\nThe current app Config : "+JSON.stringify(config));
        }
    });
    
    /*
     * Start the App
     */
    api.init();
});
