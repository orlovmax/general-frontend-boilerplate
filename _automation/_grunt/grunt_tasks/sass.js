// Compile Sass to CSS
module.exports = {
	all: {
		options: {
			style: 'expanded',
			sourcemap: 'none'
		},
		files: [{
			expand: true,
			cwd: '<%= paths.dev.sass %>',
			src: [ '*.{sass,scss}' ],
			dest: '<%= paths.build.css %>',
			ext: '.css'
		}]
	}
}
