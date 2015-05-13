jssdk-base-app
==============

Base skeleton App for JSSDK. 

Handles user login and displays a status message in a sample widget.  
Download/Clone a release and use it as a skeleton for your project.  

It uses the standard stack : 
* [Bootstrap](http://getbootstrap.com/) for html layout.
* [Bower](http://bower.io/) for js libraries management.
* [Grunt](http://gruntjs.com/) for building the app.

Along with our JSSDK components :  
* squidsolutions/jssdk2
* squidsolutions/jssdk-core-widgets

## running

Install the dependencies
```
npm install
bower install
```

Build
```
grunt
````

Watch for future code changes (and automatically rebuild)
```
grunt watch
````

Edit the app/main.js file to match your Project's settings
(here we use the "musicbrainz" project on a local client)
```
squid_api.setup({
    "clientId" : "local",
    "projectId" : "musicbrainz"
});
````

View the build results
```
open dist/index.html
`````

Now you can follow our [tutorials](https://api.squidsolutions.com/wp/api-tutorial/) to deep dive into analytical apps devellopment
