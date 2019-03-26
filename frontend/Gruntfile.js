module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          style: 'expanded',
          sourcemap: false
        },
        files: {
          'css/app.css': 'sass/app.scss'
        }
      }
    },

    cssmin: {
      dist: {
        files: {
          'css/app.min.css': 'css/app.css'
        }
      }
    },

    watch: {
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['sass']
      },
      styles: {
        files: ['css/app.css'],
        tasks: ['cssmin']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'cssmin']);
};
