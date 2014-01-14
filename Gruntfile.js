"use strict";
module.exports = function (grunt) {

	grunt.initConfig({
			pkg: grunt.file.readJSON('package.json'),
			banner: '/*!\n' +
				' * Bootstrap v<%= pkg.version %> by @fat and @mdo\n' +
				' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
				' * Licensed under <%= _.pluck(pkg.licenses, "url").join(", ") %>\n' +
				' *\n' +
				' * Designed and built with all the love in the world by @mdo and @fat.\n' +
				' */\n\n',

			sass: {
				options: {
					banner: '<%= banner %>'
				},
				bootstrap: {
					src: ['vendor/assets/stylesheets/bootstrap.scss'],
					dest: 'dist/css/bootstrap.css'
				},
				min: {
					options: {
						style: 'compressed'
					},
					src: ['vendor/assets/stylesheets/bootstrap.scss'],
					dest: 'dist/css/bootstrap.min.css'
				},
				theme: {
					src: ['vendor/assets/stylesheets/bootstrap/_theme.scss'],
					dest: 'dist/css/bootstrap-theme.css'
				},
				theme_min: {
					options: {
						style: 'compressed'
					},
					src: ['vendor/assets/stylesheets/bootstrap/_theme.scss'],
					dest: 'dist/css/bootstrap-theme.min.css'
				}
			},
			copy: {
				fonts: {
					expand: true,
					cwd: "vendor/assets/fonts/bootstrap",
					src: ["*"],
					dest: 'dist/fonts'
				}
			}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['sass','copy']);

};