/**
 * includereplace
 * Grunt task to include files and replace variables to build HTML pages.
 */

module.exports = function (grunt) {

	// list all global vars
	var globalsVars = {
		"meta-title": "<%= metaTitle %>",
		"file-name": "<%= assetName %>",
		"img-path": "/_assets/images"
	};

	return {

		options: {
			globals: globalsVars,
			includesDir: '<%= sourceIncludes %>'
		},

		dev: {
			files: [{
				cwd: '<%= sourceHTML %>/',
				src: ['**/*.html', '!_includes/*.html'],
				dest: '<%= localPath %>/',
				expand: true
			}]
		},

		dist: {
			files: [{
				cwd: '<%= sourceHTML %>/',
				src: ['**/*.html', '!_includes/*.html'],
				dest: '<%= publicPath %>/',
				expand: true
			}]
		}

	};

};