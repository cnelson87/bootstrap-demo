
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
				'<%= sourceVendor %>/greensock.js',
				'<%= sourceVendor %>/lodash.js',
				'<%= sourceVendor %>/bootstrap.js',
				'<%= sourceVendor %>/bootstrap-datepicker.js'
			],
			dest: '<%= localScripts %>/vendor.js'
		},

		dist: {
			src: [
				'<%= sourceVendor %>/modernizr.custom.js',
				'<%= sourceVendor %>/jquery.js',
				'<%= sourceVendor %>/greensock.js',
				'<%= sourceVendor %>/lodash.js',
				'<%= sourceVendor %>/bootstrap.js',
				'<%= sourceVendor %>/bootstrap-datepicker.js'
			],
			dest: '<%= publicScripts %>/vendor.js'
		}

	};

};