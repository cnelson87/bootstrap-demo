
/**
 * browserify
 * Grunt task for node-browserify.
 */

var remapify = require('remapify');

module.exports = function (grunt) {

	return {

		dev: {
			src: '<%= sourceScripts %>/initialize.js',
			dest: '<%= localScripts %>/<%= assetName %>.js',
			options: {
				preBundleCB: function(b) {
					b.plugin(remapify, [
						{
							cwd: './src/templates',
							src: './**/*.hbs',
							expose: 'templates'
						},
						{
							cwd: './src/scripts/config',
							src: './**/*.*',
							expose: 'config'
						},
						{
							cwd: './src/scripts/utilities',
							src: './**/*.*',
							expose: 'utilities'
						},
						{
							cwd: './src/scripts/widgets',
							src: './**/*.*',
							expose: 'widgets'
						}
					]);
				},
				browserifyOptions: {
					extensions: ['.hbs'],
					fullPaths: false
				},
				debug: true
			}
		},

		dist: {
			src: '<%= sourceScripts %>/initialize.js',
			dest: '<%= publicScripts %>/<%= assetName %>.js',
			options: {
				preBundleCB: function(b) {
					b.plugin(remapify, [
						{
							cwd: './src/templates',
							src: './**/*.hbs',
							expose: 'templates'
						},
						{
							cwd: './src/scripts/config',
							src: './**/*.*',
							expose: 'config'
						},
						{
							cwd: './src/scripts/utilities',
							src: './**/*.*',
							expose: 'utilities'
						},
						{
							cwd: './src/scripts/widgets',
							src: './**/*.*',
							expose: 'widgets'
						}
					]);
				},
				browserifyOptions: {
					extensions: ['.hbs'],
					fullPaths: false
				},
				debug: false
			}
		}

	};

};