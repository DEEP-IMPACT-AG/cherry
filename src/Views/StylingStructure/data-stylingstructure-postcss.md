# Styling Structure

## styles.css 
Main entry point with all imports. Don't forget to add `npm install normalize.css`

```css
/*********************************************************************
**********************************************************************
Cherry 0.0.1 - Design System
Entry Points
**********************************************************************
*********************************************************************/

@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,700');
@import '../../../node_modules/normalize.css/normalize.css';
@import './globals.css';

@import './utilities/github.css';
```

## variables.css
Variable definitions.

```css
/*********************************************************************
**********************************************************************
Cherry 0.0.1 - Design System
Variables & Mixins
**********************************************************************
*********************************************************************/

@import './mixins.css';

@custom-media --screen-xs (min-width: 0);
@custom-media --screen-sm (min-width: 576px);
@custom-media --screen-md (min-width: 768px);
@custom-media --screen-lg (min-width: 992px);
@custom-media --screen-xl (min-width: 1200px);
@custom-media --screen-xxl (min-width: 1440px);
@custom-media --screen-xxxl (min-width: 1920px);

:root {

	/* Spacing ----------------------------------------------- */
	--padding-top-body-mobile: 70px;
	--padding-top-body-desktop: 0;
	--margin-container-mobile: 20px;
	--margin-container-desktop: 20px;
	--margin-row-mobile: -10px;
	--margin-row-desktop: -10px;
	--gutter-col-mobile: 10px;
	--gutter-col-desktop: 10px;

	/* Colors ----------------------------------------------------- */
	--color-primary: #1F2D3D;
	--color-secondary: #8492A6;
	--color-tertiary: #F9FAFC;

	--color-dark: #000;
	--color-light: #fff;

	--color-gray-light: #E5E5E5;
	--color-gray-medium: #666666;
	--color-gray-dark: #4a4a4a;

	--color-success: #28a745;
	--color-error: #dc3545;
	--color-warning: #ffc107;
	--color-info: #17a2b8;

	/* Fonts ------------------------------------------------------ */
	--font-text: 'Roboto', sans-serif;
	--font-head: 'Roboto', sans-serif;
	--font-special: var(--font-text);
	--font-mono: 'Roboto Mono', monospace;

	/* Font Sizes ------------------------------------------------- */
	/* --> Hero --------------------------------------------------- */
	--size-hero1-mobile: 52px;
	--lineheight-hero1-mobile: 1.35;
	--size-hero1-desktop: 62px;
	--lineheight-hero1-desktop: 1.15;

	--size-hero2-mobile: 42px;
	--lineheight-hero2-mobile: 1.35;
	--size-hero2-desktop: 52px;
	--lineheight-hero2-desktop: 1.15;

	--size-hero3-mobile: 32px;
	--lineheight-hero3-mobile: 1.35;
	--size-hero3-desktop: 42px;
	--lineheight-hero3-desktop: 1.15;

	/* --> Eyebrow ------------------------------------------------ */
	--size-eyebrow-mobile: 16px;
	--lineheight-eyebrow-mobile: 1.35;
	--size-eyebrow-desktop: 18px;
	--lineheight-eyebrow-desktop: 1.15;

	/* --> Heading ------------------------------------------------ */
	--size-h1-mobile: 38px;
	--lineheight-h1-mobile: 1.35;
	--size-h1-desktop: 40px;
	--lineheight-h1-desktop: 1.15;

	--size-h2-mobile: 28px;
	--lineheight-h2-mobile: 1.35;
	--size-h2-desktop: 32px;
	--lineheight-h2-desktop: 1.15;

	--size-h3-mobile: 24px;
	--lineheight-h3-mobile: 1.35;
	--size-h3-desktop: 28px;
	--lineheight-h3-desktop: 1.15;

	--size-h4-mobile: 22px;
	--lineheight-h4-mobile: 1.35;
	--size-h4-desktop: 24px;
	--lineheight-h4-desktop: 1.15;

	--size-h5-mobile: 18px;
	--lineheight-h5-mobile: 1.35;
	--size-h5-desktop: 20px;
	--lineheight-h5-desktop: 1.15;

	--size-h6-mobile: 14px;
	--lineheight-h6-mobile: 1.35;
	--size-h6-desktop: 16px;
	--lineheight-h6-desktop: 1.15;

	/* --> Subtitle ----------------------------------------------- */
	--size-subtitle-mobile: 18px;
	--lineheight-subtitle-mobile: 1.35;
	--size-subtitle-desktop: 20px;
	--lineheight-subtitle-desktop: 1.15;
	

	/* --> Lead --------------------------------------------------- */
	--size-lead-mobile: 16px;
	--lineheight-lead-mobile: 1.5;
	--size-lead-desktop: 18px;
	--lineheight-lead-desktop: 1.75;

	/* --> Text --------------------------------------------------- */
	--size-text-mobile: 16px;
	--lineheight-text-mobile: 1.5;
	--size-text-desktop: 18px;
	--lineheight-text-desktop: 1.7;

	/* --> Small -------------------------------------------------- */
	--size-small-mobile: 12px;
	--lineheight-small-mobile: 1.7;
	--size-small-desktop: 14px;
	--lineheight-small-desktop: 1.7;

	/* --> Blockquote --------------------------------------------- */
	--size-blockquote-mobile: var(--size-h3-mobile);
	--size-blockquote-desktop: var(--size-h3-desktop);

	/* --> List --------------------------------------------------- */
	--size-list-mobile: var(--size-text-mobile);
	--size-list-desktop: var(--size-text-desktop);
}
```

## mixins.css
Chunks of reusable css.

```css
@define-mixin resetButton {
	appearance: none;
	background: none;
	border: none;
	border-radius: 0;
	cursor: pointer;
}

@define-mixin noList {
	list-style: none;
	margin: 0;
	padding: 0;

	& li {
		padding: 0;
		margin: 0;
	}
}

@define-mixin paragraph {
	color: var(--color-secondary);
	font-size: var(--size-text-mobile);
	line-height: var(--lineheight-text-mobile);

	@media (--screen-lg) {
		font-size: var(--size-text-desktop);
		line-height: var(--lineheight-text-desktop);
	}
}

@define-mixin heading {
	font-family: var(--font-head);
	font-weight: 300;
	margin: 0;
	padding: 0;
}

@define-mixin hero1 {
	font-size: var(--size-hero1-mobile);
	line-height: var(--lineheight-hero1-mobile);

	@media (--screen-lg) {
		font-size: var(--size-hero1-desktop);
		line-height: var(--lineheight-hero1-desktop);
	}
}

@define-mixin hero2 {
	font-size: var(--size-hero2-mobile);
	line-height: var(--lineheight-hero2-mobile);

	@media (--screen-lg) {
		font-size: var(--size-hero2-desktop);
		line-height: var(--lineheight-hero2-desktop);
	}
}

@define-mixin hero3 {
	font-size: var(--size-hero3-mobile);
	line-height: var(--lineheight-hero3-mobile);

	@media (--screen-lg) {
		font-size: var(--size-hero3-desktop);
		line-height: var(--lineheight-hero3-desktop);
	}
}

@define-mixin eyebrow {
	position: relative;
	font-size: var(--size-eyebrow-mobile);
	line-height: var(--lineheight-eyebrow-mobile);
	margin: 10px 0;

	&:before {
		content: '';
		display: block;
		width: 60px;
		border-top: solid 2px var(--color-primary);
		margin-bottom: 20px;
	}

	@media (--screen-lg) {
		font-size: var(--size-eyebrow-desktop);
		line-height: var(--size-eyebrow-desktop);
	}
}

@define-mixin h1 {
	font-size: var(--size-h1-mobile);
	line-height: var(--lineheight-h1-mobile);

	@media (--screen-lg) {
		font-size: var(--size-h1-desktop);
		line-height: var(--lineheight-h1-desktop);
	}
}

@define-mixin h2 {
	font-size: var(--size-h2-mobile);
	line-height: var(--lineheight-h2-mobile);

	@media (--screen-lg) {
		font-size: var(--size-h2-desktop);
		line-height: var(--lineheight-h2-desktop);
	}
}

@define-mixin h3 {
	font-size: var(--size-h3-mobile);
	line-height: var(--lineheight-h3-mobile);

	@media (--screen-lg) {
		font-size: var(--size-h3-desktop);
		line-height: var(--lineheight-h3-desktop);
	}
}

@define-mixin h4 {
	font-size: var(--size-h4-mobile);
	line-height: var(--lineheight-h4-mobile);

	@media (--screen-lg) {
		font-size: var(--size-h4-desktop);
		line-height: var(--lineheight-h4-desktop);
	}
}

@define-mixin h5 {
	font-size: var(--size-h5-mobile);
	line-height: var(--lineheight-h5-mobile);

	@media (--screen-lg) {
		font-size: var(--size-h5-desktop);
		line-height: var(--lineheight-h5-desktop);
	}
}

@define-mixin h6 {
	font-size: var(--size-h6-mobile);
	line-height: var(--lineheight-h6-mobile);

	@media (--screen-lg) {
		font-size: var(--size-h6-desktop);
		line-height: var(--lineheight-h6-desktop);
	}
}


@define-mixin subtitle {
	font-size: var(--size-subtitle-mobile);
	line-height: var(--lineheight-subtitle-mobile);

	@media (--screen-lg) {
		font-size: var(--size-subtitle-desktop);
		line-height: var(--lineheight-subtitle-desktop);
	}
}

@define-mixin lead {
	font-size: var(--size-lead-mobile);
	line-height: var(--lineheight-lead-mobile);

	@media (--screen-lg) {
		font-size: var(--size-lead-desktop);
		line-height: var(--lineheight-lead-desktop);
	}
}

@define-mixin small {
	display: inline-block;
	font-size: var(--size-small-mobile);
	line-height: var(--lineheight-small-mobile);

	@media (--screen-lg) {
		font-size: var(--size-small-desktop);
		line-height: var(--lineheight-small-desktop);
	}
}

@define-mixin blockquote {
	font-size: var(--size-text-mobile);
	line-height: var(--lineheight-text-mobile);
	position: relative;
	display: block;
	margin: 0;
	padding: 0;

	@media (--screen-lg) {
		font-size: var(--size-text-desktop);
		line-height: var(--lineheight-text-desktop);
	}
}

@define-mixin unorderedList {
	@mixin noList;
	display: block;

	& li {
		display: inline-block;
		width: 100%;
		position: relative;
		padding: 0 0 0 15px;

		&:before {
			content: '';
			display: block;
			position: absolute;
			width: 8px;
			height: 8px;
			border-radius: 50%;
			background: var(--color-primary);
			top: 10px;
			left: 0;
		}
	}
}

@define-mixin orderedList {
	@mixin noList;
	display: block;

	& li {
		display: inline-block;
		width: 100%;
		position: relative;
		padding: 0 0 0 20px;

		&:first-child {
			counter-reset: section;
		}

		&:before {
			content: '';
			display: block;
			position: absolute;
			border-radius: 50%;
			top: 0;
			left: 0;
			counter-increment: section;
			content: counters(section, '.') '.';
			font-weight: bold;
			color: var(--color-primary);
		}
	}
}

@define-mixin specialList {
	@mixin noList;
	display: block;

	& li {
		display: inline-block;
		width: 100%;
		position: relative;
		padding: 0 0 0 25px;

		&:before {
			content: '🍒';
			display: block;
			position: absolute;
			width: 8px;
			height: 8px;
			border-radius: 50%;
			background: var(--color-primary);
			top: 3px;
			left: 0;
		}
	}
}
```

## globals.css 
Appying the cherry variables to the global styles.

```css
/*********************************************************************
**********************************************************************
Cherry 0.0.1 - Design System
Global Styles
**********************************************************************
*********************************************************************/

@import './variables.css';

html,
body {
	margin: 0;
	padding: 0;
	height: 100%;
}

body {
	font-size-adjust: none;
	-moz-osx-font-smoothing: grayscale;
	-webkit-text-size-adjust: none;
	-webkit-font-smoothing: antialiased;
	font-family: var(--font-text);
	font-size: var(--size-text-mobile);
	line-height: var(--lineheight-text-mobile);
	padding-top: var(--padding-top-body-mobile);

	@media (--screen-lg) {
		font-size: var(--size-text-desktop);
		line-height: var(--lineheight-text-desktop);
		padding-top: var(--padding-top-body-desktop);
	}
}

* {
	box-sizing: border-box;

	&::selection {
		background: var(--color-dark);
		color: var(--color-light);
	}
}

a,
button {
	outline: none;
	text-decoration: none;
	transition: all 0.3s ease;
}

a {
	color: var(--color-primary);

	@media (hover: hover) {
		&:hover {
			color: var(--color-secondary);
		}
	}
}

figure {
	margin: 0;
}

hr {
	border: none;
	border-bottom: solid 1px var(--color-gray-light);
}

fieldset {
	appearance: none;
	border: none;
}

img,
svg {
	transition: all 0.3s ease;

	& * {
		transition: all 0.3s ease;
	}
}

img {
	display: block;
	max-width: 100%;
	width: 100%;
}

strong,
b {
	font-weight: 700;
	color: var(--color-primary);
}

small {
	@mixin small;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	@mixin heading;
}

h1 {
	@mixin h1;
}

h2 {
	@mixin h2;
}

h3 {
	@mixin h3;
}

h4 {
	@mixin h4;
}

h5 {
	@mixin h5;
}

h6 {
	@mixin h6;
}

p {
	@mixin paragraph;
}
```
