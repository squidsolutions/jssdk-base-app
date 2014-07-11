module.exports = function(grunt) {
    grunt.initConfig({
        jshint : {
            all : [ 'app/**/*.js' ],
            options: {
                force : true
            }
        },
        clean : {
            all : "dist/"
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
        copy : {
            main : {
                files : [ {
                    expand : true,
                    src : [ "app/**", "*.html" ],
                    dest : 'dist/',
                    rename : function(dest, src) {
                        return dest + src.replace(/\.template.html$/, ".html");
                    }
                } ]
            }
        },
        wiredep : {
            target : {
                src : [ 'dist/index.html' ],
                ignorePath : '../'
            }
        },
        wiredepCopy : {
            target : {
                options : {
                    src : 'bower_components',
                    dest : 'dist/bower_components',
                    wiredep : {
                        src : [ 'dist/index.html' ],
                        ignorePath : '../'
                    }
                }
            },
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
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-wiredep-copy');

    grunt.registerTask('fast', [ 'handlebars', 'concat', 'copy' ]);

    grunt.registerTask('default', [ 'jshint', 'clean', 'handlebars', 'concat',
            'copy', 'wiredep', 'wiredepCopy' ]);
};
