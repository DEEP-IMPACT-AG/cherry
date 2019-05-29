import postcss from 'rollup-plugin-postcss';

export default {
	input: __dirname + '/src/css.js',

	output: [
		{
			file: __dirname + '/build/css.module.js',
			format: 'es',
			name: 'CSS',
			globals: {
				react: 'React',
				'react-dom': 'ReactDOM',
			},
		},
	],

	plugins: [
		postcss({
			extract: __dirname + '/build/css/styles.css',
			modules: false,
			plugins: [
				require('cssnano')({
					preset: 'default',
				}),
			],
		}),
	],
};