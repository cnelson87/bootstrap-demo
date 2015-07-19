
/**
 * autoprefixer
 * Add vendor-prefixed CSS properties
 */

module.exports = function (grunt) {

	return {

		dev: {
			options: {
				browsers: ['last 2 versions', 'ie 9'],
				map: true
			},
			files: [{
				src: '<%= localStyles %>/<%= fileName %>.css',
				dest: '<%= localStyles %>/<%= fileName %>.css'
			}]
		},

		dist: {
			options: {
				browsers: ['last 2 versions', 'ie 9'],
				map: false
			},
			files: [{
				src: '<%= publicStyles %>/<%= fileName %>.css',
				dest: '<%= publicStyles %>/<%= fileName %>.css'
			}]
		}

	};

};