jssdk-base-app
==============

Base skeleton App for JSSDK

## running

npm install

bower install

grunt

open dist/index.html

## build process

default :
1. delete dist/ dir
2. compile handlebars templates
3. concat js and hbs files to main.js
4. copy assets, index.template.html and main.js to dist/
5. dist/index.html is then modified by wiredep grunt task to inject 
javascript dependencies.
6. wiredepCopy copies the javascript dependencies to dist/bower_components