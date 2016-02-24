
/**
 * imagemin
 * Minify images
 */

module.exports = function (grunt) {

	return {

		options: {
			optimizationLevel: 5
		},

		dist: {
			files: [{
				cwd: '<%= sourceImages %>',
				src: '**/*.*',
				dest: '<%= publicImages %>',
				expand: true
			}]
		}

	};

};