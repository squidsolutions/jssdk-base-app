define(['jssdk/sdk/squid_api'],function(squid_api) {
    var customerId = squid_api.utils.getParamValue("customerId", null);
    var clientId = squid_api.utils.getParamValue("clientId","512b643d0cf21c2b2e5e6e64");
    var projectId = squid_api.utils.getParamValue("projectId",null);
    var branch = squid_api.utils.getParamValue("api","release");
    var apiUrl = squid_api.utils.getParamValue("apiUrl","https://api.squidsolutions.com/");
    var host = apiUrl+branch+"/v4.2/rs";
    var local = squid_api.utils.getParamValue("local",null);
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
