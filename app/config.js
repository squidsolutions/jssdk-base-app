define(function() {
    var getParamValue = function(name, defaultValue) {
        var l = window.location.href;
        var idx = l.indexOf(name+"=");
        var value = "";
        if (idx>0) {
            var i=idx+name.length+1;
            while(i<l.length && (l.charAt(i) != "&") && (l.charAt(i) != "#")) {
                value += l.charAt(i);
                i++;
            }
        } else {
            value = defaultValue;
        }
        return value;
    };
    var customerId = getParamValue("customerId", null);
    var clientId = getParamValue("clientId","512b643d0cf21c2b2e5e6e64");
    var projectId = getParamValue("projectId",null);
    var branch = getParamValue("api","release");
    var apiUrl = getParamValue("apiUrl","https://api.squidsolutions.com/");
    var host = apiUrl+branch+"/v4.2/rs";
    var local = getParamValue("local",null);
    if (local) {
        host = local;
    }
    var loginUrl = apiUrl+branch+"/v4.2/api/oauth?client_id=" + clientId;
    if (customerId) {
        loginUrl += "&customerId=" + customerId;
    }
    return {
        "customerId" : customerId,
        "clientId" : clientId,
        "projectId" : projectId,
        "apiUrl" : host,
        "loginUrl" : loginUrl
    };
});
