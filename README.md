jssdk-base-app
==============

Base skeleton App for JSSDK. 

Handles user login and displays a status message in a samble widget. 
Uses a Bootstrap layout. 

Download/Clone a release and use it as a skeleton for your project.

## running

Install the dependencies
```
npm install
bower install
```
Trigger builds when code changes
```
grunt watch
````

Edit the app/main.js file to match your project's settings
```
squid_api.setup({
    "clientId" : "local",
    "projectId" : null,
    "domainId" : null,
    "selection" : null
});
````
    
View the build results
```
open dist/index.html
`````

## build process

1. delete dist/ dir
2. compile handlebars templates
3. concat js and hbs files to main.js
4. copy assets, index.template.html and main.js to dist/
5. dist/index.html is then modified by wiredep grunt task to inject javascript dependencies.
6. wiredepCopy copies the javascript dependencies to dist/bower_components
