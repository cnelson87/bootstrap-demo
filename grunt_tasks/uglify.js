
/**
 * uglify
 * Minify files with UglifyJS.
 */

module.exports = function (grunt) {

	return {

		dist: {
			files: [{
				src: '<%= publicScripts %>/<%= fileName %>.js',
				dest: '<%= publicScripts %>/<%= fileName %>.js'
			}]
		}

	};

};