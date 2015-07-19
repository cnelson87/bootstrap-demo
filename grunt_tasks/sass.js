
/**
 * sass
 * Compile Sass to CSS
 */

module.exports = function (grunt) {

	return {

		dev: {
			options: {
				sourcemap: 'auto',
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
				sourcemap: 'none',
				style: 'expanded',
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