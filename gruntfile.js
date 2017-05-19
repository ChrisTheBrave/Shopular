'use strict';

module.exports = function gruntConfig(grunt) {

  grunt.initConfig({

    // clean: [ '/build' ],

    concat: {
          alljs: {
            options: {
              sourceMap: true
            },
            src: ['src/js/shop.module.js', 'src/js/**/*.js'],
            dest: 'build/js/app.js'
          }
        },

    babel: {
          all: {
            options: {
              presets: ['es2015'],
              sourceMap: true
            },
            files: {
              'build/js/app.js': 'build/js/app.js'
            }
          }
        },

    karma: {
      all: {
        options: {
          frameworks: [ 'mocha', 'chai' ],
          browsers: [ 'Chrome' ],
          files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'src/js/shop.module.js',
            'src/js/**/*.js',
            'test/**/*.spec.js'
          ],
          singleRun: true,
          preprocessors: {
            'src/js/**/*.js': [ 'coverage' ]
          },
          reporters: [ 'dots', 'coverage' ],
          coverageReporter: {
            type: 'text-summary'
          }
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('build', ['karma', 'concat', 'babel']);

};
