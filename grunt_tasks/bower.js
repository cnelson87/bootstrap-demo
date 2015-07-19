
/**
 * bower
 * Copy bower installed components to dist folder.
 */

module.exports = function (grunt) {

	return {

		install: {
			options: {
				stripJsAffix: true,
				keepExpandedHierarchy: false,
				expand: false,
				//add bootstrap manually
				ignorePackages: ['bootstrap', 'bootstrap-datepicker', 'bootstrap-sass-official']
			},
			dest: '<%= sourceVendor %>'
		}

	};

};