# Code Styles & Linting

In Cherry we use [ESLint](https://eslint.org/) for finding and fixing problems in the JavaScript code. For styling, Cherry uses [Stylelint](https://stylelint.io/), a mighty, modern linter that helps you avoid errors and enforce conventions in your styles. Last but not least, [Prettier](https://prettier.io/) is used to make sure the rules are being applied.

### ESLint Configuration
#### .eslintrc.js
```javascript
const eslintcfg = {
	parser: "babel-eslint",
	plugins: ["react"],
	rules: {
		"global-require": 0,
		"no-console": 0,
		"no-underscore-dangle": 0,
		"import/prefer-default-export": 0,
		"no-duplicate-imports": 0,
		"react/jsx-filename-extension": 0,
		"react/jsx-indent": [2, "tab"],
		"react/jsx-indent-props": [2, "tab"],
		"import/no-extraneous-dependencies": 0,
		"import/newline-after-import": 0,
		"comma-dangle": [
			2,
			{
				arrays: "always-multiline",
				objects: "always-multiline",
				imports: "always-multiline",
				exports: "always-multiline",
				functions: "always-multiline",
			},
		],
	},
};

module.exports = eslintcfg;
```

### Stylelint
#### .stylelintrc
```json
{
	"rules": {
		"block-no-empty": true,
		"color-no-invalid-hex": true,
		"comment-empty-line-before": [
			"always",
			{
				"ignore": [
					"stylelint-commands",
					"after-comment"
				]
			}
		],
		"declaration-colon-space-after": "always",
		"indentation": [
			"tab",
			{
				"except": [
					"value"
				]
			}
		],
		"max-empty-lines": 2,
		"rule-empty-line-before": [
			"always",
			{
				"except": [
					"first-nested"
				],
				"ignore": [
					"after-comment"
				]
			}
		],
		"unit-whitelist": [
			"px",
			"em",
			"rem",
			"vw",
			"vh",
			"deg",
			"ms",
			"%",
			"s",
			"dpi",
			"pt",
			"fr"
		]
	}
}
```

### Prettier
#### .prettierrc
```json
{
	"printWidth": 80,
	"useTabs": true,
	"tabWidth": 4,
	"endOfLine": "lf",
	"semi": true,
	"singleQuote": false,
	"trailingComma": "all",
	"bracketSpacing": true,
	"jsxBracketSameLine": false,
	"arrowParens": "always"
}
```