
/**
 * sass
 * Compile Sass to CSS
 */

module.exports = function (grunt) {

	return {

		dev: {
			options: {
				style: 'expanded',
				debug: true,
				trace: true
			},
			files: [{
				src: '<%= sourceStyles %>/styles.scss',
				dest: '<%= localStyles %>/<%= fileName %>.css'
			}]
		},

		dist: {
			options: {
				style: 'compressed',
				debug: false,
				trace: false
			},
			files: [{
				src: '<%= sourceStyles %>/styles.scss',
				dest: '<%= publicStyles %>/<%= fileName %>.css'
			}]
		}

	};

};