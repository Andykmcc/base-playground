module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          port: 9876,
          open: true,
          keepalive: true
        }
      }
    },

    compass: {
      dev: {
        options: {
          bundleExec: true,
          http_path: "/",
          cssDir: "assets/stylesheets",
          sassDir: "assets/scss",
          imagesDir: "assets/images",
          javascriptsDir: "assets/js",
          relativeAssets: true,
          watch: true
        }
      }
    },

    watch: {
      files: ['*.html', 'assets/stylesheets/**/*.css', 'assets/js/**/*.js', 'assets/images/**/*'],
      options: { 
        livereload: true 
      },
    },

    concurrent: {
      dev: ['connect', 'compass:dev', 'watch'],
      options: {
        logConcurrentOutput: true
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['concurrent:dev']);

};