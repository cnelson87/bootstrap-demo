/**
 * browserify
 * Grunt task for node-browserify.
 */

var path = require('path');
var pathmodify = require('pathmodify');

module.exports = function (grunt) {

	// list all aliases
	var paths = [
		pathmodify.mod.dir('config', path.join(__dirname, '../src/scripts/config')),
		pathmodify.mod.dir('collections', path.join(__dirname, '../src/scripts/collections')),
		pathmodify.mod.dir('models', path.join(__dirname, '../src/scripts/models')),
		pathmodify.mod.dir('utilities', path.join(__dirname, '../src/scripts/utilities')),
		pathmodify.mod.dir('views', path.join(__dirname, '../src/scripts/views')),
		pathmodify.mod.dir('widgets', path.join(__dirname, '../src/scripts/widgets')),
		pathmodify.mod.dir('templates', path.join(__dirname, '../src/templates'))
	];

	return {

		options: {
			transform: ['browserify-handlebars', ['babelify', {presets: ['es2015']}]],
			configure: function(b) {
				b.plugin(pathmodify, {mods: paths});
			},
			browserifyOptions: {
				extensions: ['.hbs'],
				fullPaths: false
			}
		},

		dev: {
			src: '<%= sourceScripts %>/initialize.js',
			dest: '<%= localScripts %>/<%= assetName %>.js',
			options: {
				debug: true
			}
		},

		dist: {
			src: '<%= sourceScripts %>/initialize.js',
			dest: '<%= publicScripts %>/<%= assetName %>.js',
			options: {
				debug: false
			}
		}

	};

};