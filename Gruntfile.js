module.exports = function(grunt) {
    grunt.initConfig({
        jshint : {
            all : [ 'app/**/*.js' ]
        },
        handlebars : {
            options : {
                namespace : 'app.template',
                processName : function(filePath) {
                    return filePath.replace(/^app\/templates\//, '').replace(
                            /\.hbs$/, '');
                }
            },
            all : {
                files : {
                    "dist/templates.js" : [ "app/templates/*.hbs" ]
                }
            }
        },
        concat : {
            options : {
                stripBanners : true,
            },
            all : {
                src : [ 'app/**/*.js', 'dist/templates.js' ],
                dest : 'dist/main.js',
            }
        },
        wiredep : {
            target : {
                src : [ 'test.html' ],
            }
        },
        watch : {
            js : {
                files : [ 'app/**/*.js', 'app/**/*.hbs' ],
                tasks : [ 'default' ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-wiredep');

    grunt.registerTask('default',
            [ 'jshint', 'handlebars', 'concat', 'wiredep' ]);
};
