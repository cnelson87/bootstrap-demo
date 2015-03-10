
/**
 * concat
 * Concatenate files.
 */

module.exports = function (grunt) {

	return {

		options: {
			separator: '\n;\n'
		},

		dev: {
			src: [
				'<%= sourceVendor %>/modernizr.custom.min.js',
				'<%= sourceVendor %>/jquery.min.js',
				'<%= sourceVendor %>/TweenMax.min.js',
				'<%= sourceVendor %>/underscore.min.js',
				'<%= sourceVendor %>/bootstrap.min.js',
				'<%= sourceVendor %>/bootstrap-datepicker.js'
			],
			dest: '<%= localScripts %>/vendor.js'
		},

		dist: {
			src: [
				'<%= sourceVendor %>/modernizr.custom.min.js',
				'<%= sourceVendor %>/jquery.min.js',
				'<%= sourceVendor %>/TweenMax.min.js',
				'<%= sourceVendor %>/underscore.min.js',
				'<%= sourceVendor %>/bootstrap.min.js',
				'<%= sourceVendor %>/bootstrap-datepicker.js'
			],
			dest: '<%= publicScripts %>/vendor.js'
		}

	};

};