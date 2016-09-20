module.exports = function(grunt) {
  grunt.initConfig({
    config: {
      dev: {
        options: {
          variables: {
            'environment': 'dev'
          }
        }
      },
      prod: {
        options: {
          variables: {
            'environment': 'prod'
          }
        }
      }
    },
    concat: {
      vendor: {
        files: [
          {
          src: [
            'vendor/js/angular-1.5.8.min.js',
            'vendor/js/angular-animate-1.5.8.min.js',
            'vendor/js/angular-aria-1.5.8.min.js',
            'vendor/js/angular-material-1.1.1.min.js',
            'vendor/js/angular-messages-1.5.8.min.js',
            'vendor/js/jquery-3.1.0.min.js',
            'vendor/js/angular-ui-1.0.0-beta.2.js'
          ],
          dest: '../public/build/vendor.js'
          }
        ]
      },
      app: {
        files: [
          {
            src: [
              'js/constants/base.js',
              'js/constants/config.<%= grunt.config.get("environment") %>.js',
              'js/utils/*.js',
              'js/services/*.js',
              'js/components/*.js',
              'js/main.js'
            ],
            dest: '../public/build/app.js'
          }
        ]
      }
    },
    uglify: {
      options: {
      compress: {}
      },
      all: {
      files: {
        '../public/build/app.js':
        [
          'js/utils/*.js',
          'js/main.js'
        ]
      }
      }
    },
    cssmin: {
      combine: {
      files: {
        '../public/build/vendor.css': ['vendor/css/angular-material-1.1.0.min.css'],
        '../public/build/app.css': ['css/sections/*.css']
      }
      }
    },
    watch: {
      everything: {
      files: ['css/**/*.css','js/**/*.js','templates/**/*.tpl'],
      tasks: ['develop'],
      options: {
        spawn: false
      }
      }
    },
    template: {
      'process-html-template': {
        'options': {
          'data': {
            'version': new Date().getTime()
          }
        },
        'files': {
          '../public/index.html': ['templates/index.html.tpl']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-template');
  grunt.loadNpmTasks('grunt-config');

  grunt.registerTask('develop', ['config:dev', 'concat','cssmin','template']);
  grunt.registerTask('production', ['config:prod', 'concat:app', 'concat:vendor', 'uglify','cssmin','template']);
};
