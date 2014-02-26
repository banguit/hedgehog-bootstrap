/*!
 * HEDGEHOG Gruntfile
 * https://github.com/banguit/hedgehog-bootstrap
 * Copyright 2014 Dmitry Antonenko
 */

module.exports = function(grunt) {
    'use strict';

    // Configure
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        // The less task.
        less: {
            compile: {
                options: {
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true,
                    compress: false,
                    sourceMapURL: '<%= pkg.name %>.css.map',
                    sourceMapFilename: 'dist/css/<%= pkg.name %>.css.map'
                },
                files: {
                    'dist/css/<%= pkg.name %>.css': 'less/theme.less'
                }
            },
            minify: {
                options: {
                    cleancss: true,
                    report: 'min'
                },
                files: {
                    'dist/css/<%= pkg.name %>.min.css': 'dist/css/<%= pkg.name %>.css'
                }
            }
        },
        // Watch task.
        watch: {
            less: {
                files: 'less/*.less',
                tasks: 'less'
            }
        },
        // Copy documentation files
        copy: {
            fonts: {
                expand: true,
                flatten: true,
                src: ['bootstrap/fonts/**', 'fonts/**'],
                dest: 'dist/fonts',
                filter: 'isFile'
            },
            docs: {
                expand: true,
                cwd: './dist',
                src: [
                    '{css,js}/*.min.*',
                    'css/*.map',
                    'fonts/*'
                ],
                dest: 'docs/dist'
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Register default tasks
    grunt.registerTask('default', [ 'less', 'copy' ]);

    // CSS distribution task.
    grunt.registerTask('compile', [ 'less' ]);
};