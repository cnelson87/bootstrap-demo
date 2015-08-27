
/**
 * concat
 * Concatenate files.
 */

module.exports = function (grunt) {

	// list all vendor libs
	var vendorLibs = [
		'<%= sourceVendor %>/modernizr.js',
		'<%= sourceVendor %>/jquery.js',
		'<%= sourceVendor %>/jquery.touchSwipe.js',
		'<%= sourceVendor %>/picturefill.js',
		'<%= sourceVendor %>/TweenMax.js',
		'<%= sourceVendor %>/bootstrap.js',
		'<%= sourceVendor %>/bootstrap-datepicker.js'
	];

	return {

		options: {
			separator: '\n\n'
		},

		devlibs: {
			src: vendorLibs,
			dest: '<%= localScripts %>/vendor.js'
		},

		distlibs: {
			src: vendorLibs,
			dest: '<%= publicScripts %>/vendor.js'
		}

	};

};