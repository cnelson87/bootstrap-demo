/**
 * bowercopy
 * Scrupulously manage file locations for bower dependencies.
 */

module.exports = function (grunt) {

	return {

		// options: {

		// },

		'font-awesome': {
			files: {
				'<%= sourceFonts %>/': 'font-awesome/fonts/*.*',
				'<%= sourceStyles %>/font-awesome.scss': 'font-awesome/css/font-awesome.css'
			}
		},

		'bootstrap-datepicker': {
			files: {
				'<%= sourceVendor %>/bootstrap-datepicker.js': 'bootstrap-datepicker/dist/js/bootstrap-datepicker.js',
				'<%= sourceStyles %>/bootstrap-datepicker3.scss': 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.css'
			}
		},

		'bootstrap-sass-official': {
			files: {
				'<%= sourceFonts %>/': 'bootstrap-sass-official/assets/fonts/bootstrap/*.*',
				'<%= sourceVendor %>/bootstrap.js': 'bootstrap-sass-official/assets/javascripts/bootstrap.js',
				'<%= sourceStyles %>/bootstrap/': 'bootstrap-sass-official/assets/stylesheets/bootstrap/',
				'<%= sourceStyles %>/bootstrap.scss': 'bootstrap-sass-official/assets/stylesheets/_bootstrap.scss'
			}
		}

	};

};