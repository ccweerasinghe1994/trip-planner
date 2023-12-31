module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended-type-checked',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:import/recommended',
		'plugin:promise/recommended',
		'plugin:react/jsx-runtime',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: true,
		tsconfigRootDir: __dirname,
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'prettier/prettier': 'error',
	},
	settings: {
		react: {
			version: '18.2.0',
		},
	},
	globals: {
		module: 'writable',
	},
};
