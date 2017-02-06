module.exports = function(grunt) {

    grunt.initConfig({
        distdir: '../server/public',
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            options: {force:true},
            stuff: ['<%= distdir %>/*', '!<%= distdir %>/bower_components']
        },
        templatePath: ['../client/app/**/*.tpl.html'],
        html2js: {
            app: {
                options: {
                    base: '../client/app'
                },
                src: ['<%= templatePath %>'],
                dest: '<%= distdir %>/temp/<%= pkg.name %>-templates.js',
                module: 'myWeather.templates'
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['../client/app/**/*.js'],
                dest: '<%= distdir %>/temp/<%= pkg.name %>.js'
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            code: {
                files:{
                    '<%= distdir %>/js/<%= pkg.name %>.js': ['<%= concat.dist.dest %>']
                }
            },
            templates: {
                files: {

                    '<%= distdir %>/js/<%= pkg.name %>-templates.js': ['<%= html2js.app.dest %>']
                }
            }
        },
        uglify: {
            options: {
                compress: {
                    drop_console: true
                },
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    '<%= distdir %>/js/<%= pkg.name %>.min.js': ['<%= distdir %>/js/<%= pkg.name %>.js'],
                    '<%= distdir %>/js/<%= pkg.name %>-templates.min.js': ['<%= distdir %>/js/<%= pkg.name %>-templates.js']
                }
            }
        },
        copy: {
            css: {
                expand: true,
                flatten: true,
                filter: 'isFile',
                src: '../client/assets/css/*.css',
                dest: '<%= distdir %>/css/'
            },
            img:{
                expand: true,
                flatten: true,
                filter: 'isFile',
                src: ['../client/assets/img/*.jpg', '../client/assets/img/*.png', '../client/assets/img/*.gif', '../client/assets/img/*.svg'],
                dest: '<%= distdir %>/img/'
            },
            favicon:{
                src: '../client/assets/img/favicon.ico',
                dest: '<%= distdir %>/favicon.ico'
            },
            index:{
                src: '../client/index.html',
                dest: '<%= distdir %>/index.html'
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: '../client/assets/css',
                src: ['*.css', '!*.min.css'],
                dest: '<%= distdir %>/css/',
                ext: '.min.css'
            }
        },
        jshint: {
            files: ['gruntfile.js', '../client/app/**/*.js'],
            options: {
                // options here to override JSHint defaults
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true,
                    strict: false
                }
            }
        },
        bower: {
            install: {
                //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
            }
        },
        exec: {
            bowerInstallOffline: 'bower install -o'
        }
    });

    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-exec');



    grunt.registerTask('default', ['jshint', 'clean','bower', 'html2js', 'concat', 'ngAnnotate', 'uglify', 'cssmin', 'copy']);

    grunt.registerTask('build', ['jshint', 'clean','exec:bowerInstallOffline', 'html2js', 'concat', 'ngAnnotate', 'uglify', 'cssmin', 'copy']);


};
