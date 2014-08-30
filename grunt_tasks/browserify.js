
/**
 * browserify
 * Grunt task for node-browserify.
 */

var remapify		= require('remapify');

module.exports = function (grunt) {

	return {

		dev: {
			src: '<%= sourceScripts %>/initialize.js',
			dest: '<%= localScripts %>/<%= fileName %>.js',
			options: {
				preBundleCB: function (b) {
					b.plugin(remapify, [
						{
							cwd: './src/scripts/config',
							src: './**/*.*',
							expose: 'config'
						},
						{
							cwd: './src/scripts/events',
							src: './**/*.*',
							expose: 'events'
						},
						{
							cwd: './src/scripts/utils',
							src: './**/*.*',
							expose: 'utils'
						},
						{
							cwd: './src/scripts/collections',
							src: './**/*.*',
							expose: 'collections'
						},
						{
							cwd: './src/scripts/models',
							src: './**/*.*',
							expose: 'models'
						},
						{
							cwd: './src/scripts/views',
							src: './**/*.*',
							expose: 'views'
						},
						{
							cwd: './src/scripts/widgets',
							src: './**/*.*',
							expose: 'widgets'
						},
						{
							cwd: './src/templates',
							src: './**/*.*',
							expose: 'templates'
						}
					]);
				},
				transform: ['browserify-handlebars'],
				debug: true
			}
		},

		dist: {
			src: '<%= sourceScripts %>/initialize.js',
			dest: '<%= publicScripts %>/<%= fileName %>.js',
			options: {
				preBundleCB: function (b) {
					b.plugin(remapify, [
						{
							cwd: './src/scripts/config',
							src: './**/*.*',
							expose: 'config'
						},
						{
							cwd: './src/scripts/events',
							src: './**/*.*',
							expose: 'events'
						},
						{
							cwd: './src/scripts/utils',
							src: './**/*.*',
							expose: 'utils'
						},
						{
							cwd: './src/scripts/collections',
							src: './**/*.*',
							expose: 'collections'
						},
						{
							cwd: './src/scripts/models',
							src: './**/*.*',
							expose: 'models'
						},
						{
							cwd: './src/scripts/views',
							src: './**/*.*',
							expose: 'views'
						},
						{
							cwd: './src/scripts/widgets',
							src: './**/*.*',
							expose: 'widgets'
						},
						{
							cwd: './src/templates',
							src: './**/*.*',
							expose: 'templates'
						}
					]);
				},
				transform: ['browserify-handlebars'],
				debug: false
			}
		}

	};

};