jssdk-base-app
==============

Base skeleton App for JSSDK.
Download a release and use it as a skeleton for your project.

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
