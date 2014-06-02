// utility functions
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

// configure the jssdk
var jssdk = getParamValue("jssdkURI","https://api.squidsolutions.com/jssdk/release");

// deal with the cache-buster parameter
var cacheBuster = "";
if (document.location.href.indexOf("disable_cache_buster") < 0) {
    cacheBuster = "t=" + (new Date()).getTime();
}

// configure requireJS
require = {
    baseUrl: "app",
    paths: {
        jssdk : jssdk,
        jquery : jssdk+'/js/jquery.min',
        hbs: jssdk+'/js/hbs',
        'Handlebars' : 'Handlebars',
        underscore: jssdk+'/js/underscore-min',
        backbone: jssdk+'/js/backbone.1.1.0-min'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    },
    hbs: {
        templateExtension: 'hbs',
        // if disableI18n is `true` it won't load locales and the i18n helper
        // won't work as well.
        disableI18n: true
    },
    urlArgs: cacheBuster,
    waitSeconds : 30,
    config: {
        text: {
            useXhr: function(url, protocol, hostname, port) {
                // allow cross-domain requests
                // remote server allows CORS
                return true;
            }
        }
    }
};