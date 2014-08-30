
/**
 * jshint
 * Validate files with JSHint.
 */

module.exports = function (grunt) {

	return {

		options: {
			// options here to override JSHint defaults
			globals: {
				'alert': true,
				'console': true,
				'document': true,
				'module': true,
				'require': true,
				'window': true,
				'Modernizr': true,
				'jQuery': true,
				'$': true,
				'_': true,
				'Backbone': true,
				'TweenMax': true
			}
		},

		files: [
			'<%= sourceScripts %>/**/*.js',
			'!<%= sourceScripts %>/shims/**/*.js'
		]

	};

};