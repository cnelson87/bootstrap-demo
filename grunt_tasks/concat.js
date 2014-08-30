
/**
 * concat
 * Concatenate files.
 */

module.exports = function (grunt) {

	return {

		options: {
			separator: '\n;\n'
			//separator: '\n\n'
		},

		dev: {
			src: [
				'<%= sourceVendor %>/modernizr.custom.js',
				'<%= sourceVendor %>/jquery.js',
				'<%= sourceVendor %>/lodash.js',
				'<%= sourceVendor %>/bootstrap.js'
			],
			dest: '<%= localScripts %>/vendor.js'
		},

		dist: {
			src: [
				'<%= sourceVendor %>/modernizr.custom.js',
				'<%= sourceVendor %>/jquery.js',
				'<%= sourceVendor %>/lodash.js',
				'<%= sourceVendor %>/bootstrap.js'
			],
			dest: '<%= publicScripts %>/vendor.js'
		}

	};

};