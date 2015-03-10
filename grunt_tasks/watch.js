
/**
 * watch
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 */

module.exports = function (grunt) {

	return {

		options: {
			livereload: '<%= lrPortNum %>',
			spawn: false
		},

		data: {
			files: ['<%= sourceData %>/**/*.json'],
			tasks: ['copy:data']
		},

		html: {
			files: '<%= sourceHTML %>/**/*.html',
			tasks: ['includereplace:dev']
		},

		scripts: {
			files: '<%= sourceScripts %>/**/*.js',
			tasks: ['jshint', 'browserify:dev']
		},

		styles: {
			files: '<%= sourceStyles %>/**/*.scss',
			tasks: ['sass:dev', 'autoprefixer:dev']
		},

		templates: {
			files: '<%= sourceTemplates %>/**/*.hbs',
			tasks: ['browserify:dev']
		},

		images: {
			files: ['<%= sourceImages %>/**/*.*'],
			tasks: ['copy:images']
		}

	};

};