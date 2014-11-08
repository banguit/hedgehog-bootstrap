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
                tasks: 'default'
            }
        },
        clean: {
            dist: ['dist/css', 'dist/fonts', 'dist/js'],
            docs: ['docs/'],
            ghost_folder: ['ghost/'],
            docs_dist: ['docs/dist/css'],
            gh_pages: ['_gh_pages/'],
            docs_dist_css: [
                'docs/dist/css/<%= pkg.name %>.css',
                'docs/dist/css/<%= pkg.name %>.min.css',
                'docs/dist/css/<%= pkg.name %>.css.map'
            ]
        },
        // Copy documentation files
        copy: {
            fonts: {
                expand: true,
                flatten: true,
                src: ['bootstrap/fonts/*', 'fontawesome/fonts/*'],
                dest: 'dist/fonts'
            },
            grunt_folder: {
                expand: true,
                cwd: 'bootstrap/grunt/',
                src: ['**'],
                dest: 'grunt/'
            },
            docs: {
                expand: true,
                cwd: 'bootstrap/docs/',
                src: ['**'],
                dest: 'docs'
            },
            docs_dist: {
                expand: true,
                cwd: 'dist/',
                src: ['**'],
                dest: 'docs/dist/'
            },
            docs_dist_css: {
                src: 'docs/dist/css/<%= pkg.name %>.css',
                dest: 'docs/dist/css/bootstrap.css'
            },
            docs_dist_min_css: {
                src: 'docs/dist/css/<%= pkg.name %>.min.css',
                dest: 'docs/dist/css/bootstrap.min.css'
            },
            docs_dist_css_map: {
                src: 'docs/dist/css/<%= pkg.name %>.css.map',
                dest: 'docs/dist/css/bootstrap.css.map'
            },
            dist_js: {
                expand: true,
                cwd: 'bootstrap/dist/js',
                src: ['**'],
                dest: 'dist/js/'
            }
        },
        mkdir: {
            // Create distributive directory
            dist: {
                options: {
                    create: ['./dist']
                }
            }
        },
        shell: {
            // Build documentation
            jekyll_build: {
                command: 'jekyll build'
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-shell');

    // Register default tasks
    grunt.registerTask('default',
        [
            'clean:ghost_folder',
            'clean:dist',
            'clean:docs',
            'clean:gh_pages',
            'mkdir',
            'less',
            'copy:grunt_folder',
            'copy:fonts',
            'copy:dist_js',
            'copy:docs',
            'copy:docs_dist',
            'copy:docs_dist_css',
            'copy:docs_dist_min_css',
            'copy:docs_dist_css_map',
            'clean:docs_dist_css',
            'shell'
        ]
    );

    // CSS distribution task.
    grunt.registerTask('compile', [ 'less' ]);
};