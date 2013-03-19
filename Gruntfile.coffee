module.exports = (grunt) ->

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    banner: '/**\n * <%= pkg.name %> — <%= pkg.description %>\n' +
            ' * \n' +
            ' * @version <%= pkg.version %>\n' +
            ' * @license <%= pkg.license.type %>\n' +
            ' * @author  <%= pkg.author %>\n' +
            ' */\n',
    src: [ 'Functions/*.js', 'Number/*.js', 'String/*.js' ],

    clean: {
      files: 'helpers*.js'
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      beforeconcat: '<%= src %>',
      afterconcat: '<%= pkg.name %>',
      test: 'tests/units/*.js'
    },

    concat: {
      options: {
        banner: '<%= banner %>\n',
        separator: ';\n\n'
      },
      build: {
        files: {
          '<%= pkg.name %>': '<%= src %>'
        }
      }
    },

    uglify: {
      options: {
        banner: '<%= banner %>',
        report: 'gzip'
      },
      build: {
        files: {
          '<%= pkg.name.replace(/js$/, "min.js") %>': '<%= pkg.name %>'
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: '.'
        }
      }
    },

    qunit: {
      all: {
        options: {
          urls: [ 'http://localhost:8000/tests/index.html' ]
        }
      }
    }

  })

  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-qunit')
  grunt.loadNpmTasks('grunt-contrib-connect')

  grunt.registerTask('default', [ 'clean', 'jshint:beforeconcat', 'concat', 'jshint:afterconcat', 'uglify' ])
  grunt.registerTask('test', [ 'jshint:test', 'connect', 'qunit' ])