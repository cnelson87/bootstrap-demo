
module.exports = function(grunt) {

	'use strict';

	var path		= require('path');
	var cwd			= process.cwd();
	var pkg			= grunt.file.readJSON('package.json');

	require('load-grunt-config')(grunt, {
		configPath: path.join(cwd,'grunt_tasks'),
		init: true,
		data: {

			// Pkg data
			pkg			: pkg,
			pkgName		: pkg.name,
			metaTitle	: pkg.title,
			pkgDesc		: pkg.description,
			fileName	: pkg.namespace,
			portNum		: pkg.portNumber,
			lrPortNum	: pkg.livereloadPortNum,

			// source file paths
			sourcePath			: './src',
			sourceAssets		: '<%= sourcePath %>/assets',
			sourceData			: '<%= sourcePath %>/data',
			sourceHTML			: '<%= sourcePath %>/html',
			sourceIncludes		: '<%= sourceHTML %>/_includes',
			sourceAudio			: '<%= sourceAssets %>/audio',
			sourceVideo			: '<%= sourceAssets %>/video',
			sourceFonts			: '<%= sourceAssets %>/fonts',
			sourceImages		: '<%= sourceAssets %>/images',
			sourceScripts		: '<%= sourcePath %>/scripts',
			sourceStyles		: '<%= sourcePath %>/styles',
			sourceTemplates		: '<%= sourcePath %>/templates',
			sourceVendor		: '<%= sourcePath %>/vendor',

			// local file paths
			localPath			: './local',
			localData			: '<%= localPath %>/_api',
			localAssets			: '<%= localPath %>/_ui',
			localAudio			: '<%= localAssets %>/audio',
			localVideo			: '<%= localAssets %>/video',
			localFonts			: '<%= localAssets %>/fonts',
			localImages			: '<%= localAssets %>/img',
			localScripts		: '<%= localAssets %>/js',
			localStyles			: '<%= localAssets %>/css',

			// public file paths
			publicPath			: './public',
			publicData			: '<%= publicPath %>/_api',
			publicAssets		: '<%= publicPath %>/_ui',
			publicAudio			: '<%= publicAssets %>/audio',
			publicVideo			: '<%= publicAssets %>/video',
			publicFonts			: '<%= publicAssets %>/fonts',
			publicImages		: '<%= publicAssets %>/img',
			publicScripts		: '<%= publicAssets %>/js',
			publicStyles		: '<%= publicAssets %>/css'

		},
		loadGruntTasks: {
			config: require('./package.json'),
			scope: 'devDependencies',
			pattern: 'grunt-*'
		}
	});


	// Register custom tasks
	//grunt.registerTask('bower', ['bower']);
	grunt.registerTask('build', 'generate a build', function(target) {
		var target = (target === 'dev') ? 'dev' : 'dist';
		var tasks = [
			'includereplace:' + target,
			'copy:' + target,
			'sass:' + target,
			'jshint',
			'concat:' + target,
			'browserify:' + target
		];
		// optimize for dist build only
		if (target === 'dist') {
			tasks.push('uglify');
		}
		grunt.task.run(tasks);
	});
	grunt.registerTask('run', ['build:dev', 'connect', 'watch']);


};