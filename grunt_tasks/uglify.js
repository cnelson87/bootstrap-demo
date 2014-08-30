
/**
 * uglify
 * Minify files with UglifyJS.
 */

module.exports = function (grunt) {

	return {

		options: {
			mangle: false
		},

		dist: {
			files: [
				{
					src: '<%= publicScripts %>/vendor.js',
					dest: '<%= publicScripts %>/vendor.js'
				},
				{
					src: '<%= publicScripts %>/<%= fileName %>.js',
					dest: '<%= publicScripts %>/<%= fileName %>.js'
				}
			]
		}

	};

};