const postcssPresetEnv = require('postcss-preset-env');
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';

export default {
	input: __dirname + '/src/index.js',

	output: [
		{
			file: __dirname + '/build/cherry.js',
			format: 'umd',
			name: 'CherryDesignSystem',
			sourcemap: true,
			globals: {
				react: 'React',
				'react-dom': 'ReactDOM',
			},
		},
		{
			file: __dirname + '/build/cherry.module.js',
			format: 'es',
			name: 'CherryDesignSystem',
			sourcemap: true,
			globals: {
				react: 'React',
				'react-dom': 'ReactDOM',
			},
		},
	],

	plugins: [
		postcss({
			modules: true,
			plugins: [
				require('postcss-flexbugs-fixes'),
				require('postcss-import'),
				require('postcss-for'),
				require('postcss-mixins'),
				require('postcss-calc'),
				postcssPresetEnv({
					stage: 0,
					features: {
						'nesting-rules': true,
						'color-mod-function': true,
						'custom-media': true,
					},
				}),
			],
		}),
		babel({
			exclude: __dirname + '/../node_modules/**',
		}),
		replace({
			'process.env.NODE_ENV': JSON.stringify('development'),
		}),
		resolve(),
		commonjs(),
	],

	external: ['react', 'react-dom'],
};
