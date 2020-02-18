module.exports = {
	apps: [
		{
			name: 'cherry',
			script: './src/server/main.js',
			watch: false,
			wait_ready: true,
			env: {
				NODE_ENV: 'production',
				PORT: 8083,
			},
		},
	],
};
