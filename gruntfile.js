'use strict';

module.exports = function gruntConfig(grunt) {

  grunt.initConfig({

    clean: [ '/build' ],

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
          singleRun: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('build', ['karma']);

};
