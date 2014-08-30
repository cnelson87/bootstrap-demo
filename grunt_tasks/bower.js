
/**
 * bower
 * Copy bower installed components to dist folder.
 */

module.exports = function (grunt) {

	return {

		install: {
			options: {
				stripJsAffix: true
			},
			dest: '<%= sourceVendor %>'
		}


	};

};