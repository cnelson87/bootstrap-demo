
/**
 * bower
 * Copy bower installed components to dist folder.
 */

module.exports = function (grunt) {

	return {

		install: {
			options: {
				//add bootstrap manually
				ignorePackages: ['bootstrap-sass-official']
			},
			dest: '<%= sourceVendor %>'
		}


	};

};