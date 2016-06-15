/**
 * jshint
 * Validate files with JSHint.
 */

module.exports = function (grunt) {

	return {

		options: {
			// options here to override JSHint defaults
			esnext: true,
			globals: {
				'alert': true,
				'console': true,
				'document': true,
				'export': true,
				'import': true,
				'module': true,
				'require': true,
				'window': true,
				'Modernizr': true,
				'jQuery': true,
				'$': true,
				'_': true,
				'Backbone': true,
				'TweenMax': true,
				'Linear': true,
				'Back': true,
				'Cubic': true,
				'Quad': true,
				'Quart': true,
				'Quint': true,
				'Bounce': true,
				'Elastic': true,
				'Application': true
			}
		},

		files: [
			'<%= sourceScripts %>/**/*.js',
			'!<%= sourceScripts %>/shims/classList.js'
		]

	};

};