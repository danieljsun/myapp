/* global module:false */
module.exports = function(grunt) {
  'use strict';
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      'public/app.js': ['client/app.js']
    },
    watch: {
      files: [ "client/**/*.js"],
      tasks: [ 'browserify' ]
    },
    jade: {
      compile: {
        options: {
          pretty: true,
          data: {
            debug: false
          }
        },
        files: [{
          expand: true,
          cwd: 'client',
          src: '{,*/}*.jade',
          dest: 'public/',
          ext: '.html'
        }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
};
