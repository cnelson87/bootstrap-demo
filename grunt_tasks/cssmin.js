
/**
 * cssmin
 * Minify CSS
 */

module.exports = function (grunt) {

	return {

		dist: {
			files: [{
				src: '<%= publicStyles %>/<%= fileName %>.css',
				dest: '<%= publicStyles %>/<%= fileName %>.css'
			}]
		}

	};

};