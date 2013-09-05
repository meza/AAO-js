module.exports = function (grunt) {
	grunt.initConfig({
		jshint: {
			options: require('./jshint_conf.json'),
			self: [
				'Gruntfile.js'
			],
			common: [
				'lib/*.js',
				'lib/**/*.js'
			]
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('test:common', ['jshint:common']);
	grunt.registerTask('test', ['test:common']);
	grunt.registerTask('default', ['test']);
}
