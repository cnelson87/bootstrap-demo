
/**
 * bower
 * Copy bower installed components to dist folder.
 */

module.exports = function (grunt) {

	return {

		install: {

			dest: '<%= sourceVendor %>',
			css_dest: '<%= sourceStyles %>',
			scss_dest: '<%= sourceStyles %>',
			fonts_dest: '<%= sourceFonts %>',
			images_dest: '<%= sourceImages %>',

			options: {
				stripJsAffix: true,
				keepExpandedHierarchy: false,
				expand: false,

				//use 'bowercopy' task for copying specific files for the following components:
				ignorePackages: [
					'font-awesome',
					'bootstrap-datepicker',
					'bootstrap-sass-official',
					'bootstrap'
				],

				packageSpecific: {
					// 'font-awesome': {
					// 	files: [
					// 		'css/font-awesome.css',
					// 		'fonts/*.*'
					// 	]
					// },
					// 'bootstrap-datepicker': {
					// 	files: [
					// 		'dist/css/bootstrap-datepicker3.css',
					// 		'dist/js/bootstrap-datepicker.js'
					// 	]
					// },
					// 'bootstrap-sass-official': {
					// 	files: [
					// 		'assets/fonts/bootstrap/*.*',
					// 		'assets/javascripts/bootstrap.js',
					// 		'assets/stylesheets/bootstrap/*.scss',
					// 		'assets/stylesheets/_bootstrap.scss'
					// 	]
					// }
				}

			}

		}

	};

};