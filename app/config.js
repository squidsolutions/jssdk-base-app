define(['jssdk/sdk/squid_api'],function(squid_api) {
    var customerId = squid_api.utils.getParamValue("customerId", null);
    var clientId = squid_api.utils.getParamValue("clientId","512b643d0cf21c2b2e5e6e64");
    var projectId = squid_api.utils.getParamValue("projectId",null);
    var api = squid_api.utils.getParamValue("api","release");
    var apiUrl = squid_api.utils.getParamValue("apiUrl","https://api.squidsolutions.com/");
    var host = apiUrl+api+"/v4.2/rs";
    var loginUrl = "http://localhost:8082/api/oauth?response_type=code&client_id=" + clientId;
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
