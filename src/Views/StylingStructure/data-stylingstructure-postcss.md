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
	--gutter-col-mobile: 10px;
	--gutter-col-desktop: 10px;
	--margin-container-mobile: 20px;
	--margin-container-desktop: 20px;

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
	--size-mobile-hero1: 52px;
	--lineheight-mobile-hero1: 1.35;
	--size-desktop-hero1: 62px;
	--lineheight-desktop-hero1: 1.15;

	--size-mobile-hero2: 42px;
	--lineheight-mobile-hero2: 1.35;
	--size-desktop-hero2: 52px;
	--lineheight-desktop-hero2: 1.15;

	--size-mobile-hero3: 32px;
	--lineheight-mobile-hero3: 1.35;
	--size-desktop-hero3: 42px;
	--lineheight-desktop-hero3: 1.15;

	/* --> Eyebrow ------------------------------------------------ */
	--size-mobile-eyebrow: 14px;
	--lineheight-mobile-eyebrow: 1.35;
	--size-desktop-eyebrow: 16px;
	--lineheight-desktop-eyebrow: 1.15;

	/* --> Heading ------------------------------------------------ */
	--size-mobile-h1: 38px;
	--lineheight-mobile-h1: 1.35;
	--size-desktop-h1: 40px;
	--lineheight-desktop-h1: 1.15;

	--size-mobile-h2: 28px;
	--lineheight-mobile-h2: 1.35;
	--size-desktop-h2: 32px;
	--lineheight-desktop-h2: 1.15;

	--size-mobile-h3: 24px;
	--lineheight-mobile-h3: 1.35;
	--size-desktop-h3: 28px;
	--lineheight-desktop-h3: 1.15;

	--size-mobile-h4: 22px;
	--lineheight-mobile-h4: 1.35;
	--size-desktop-h4: 24px;
	--lineheight-desktop-h4: 1.15;

	--size-mobile-h5: 18px;
	--lineheight-mobile-h5: 1.35;
	--size-desktop-h5: 20px;
	--lineheight-desktop-h5: 1.15;

	--size-mobile-h6: 14px;
	--lineheight-mobile-h6: 1.35;
	--size-desktop-h6: 16px;
	--lineheight-desktop-h6: 1.15;

	/* --> Subtitle ----------------------------------------------- */
	--size-mobile-subtitle: 18px;
	--lineheight-mobile-subtitle: 1.35;
	--size-desktop-subtitle: 20px;
	--lineheight-desktop-subtitle: 1.15;
	

	/* --> Lead --------------------------------------------------- */
	--size-mobile-lead: 16px;
	--lineheight-mobile-lead: 1.5;
	--size-desktop-lead: 18px;
	--lineheight-desktop-lead: 1.75;

	/* --> Text --------------------------------------------------- */
	--size-mobile-text: 16px;
	--lineheight-mobile-text: 1.5;
	--size-desktop-text: 18px;
	--lineheight-desktop-text: 1.7;

	/* --> Small -------------------------------------------------- */
	--size-mobile-small: 12px;
	--lineheight-mobile-small: 1.2;
	--size-desktop-small: 14px;
	--lineheight-desktop-small: 1.2;

	/* --> Blockquote --------------------------------------------- */
	--size-mobile-blockquote: var(--size-mobile-h3);
	--size-desktop-blockquote: var(--size-desktop-h3);

	/* --> List --------------------------------------------------- */
	--size-mobile-list: var(--size-mobile-text);
	--size-desktop-list: var(--size-desktop-text);
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
	font-size: var(--size-mobile-text);
	line-height: var(--lineheight-mobile-text);

	@media (--screen-lg) {
		font-size: var(--size-desktop-text);
		line-height: var(--lineheight-desktop-text);
	}
}

@define-mixin heading {
	font-family: var(--font-head);
	font-weight: 300;
	margin: 0;
	padding: 0;
}

@define-mixin hero1 {
	font-size: var(--size-mobile-hero1);
	line-height: var(--lineheight-mobile-hero1);

	@media (--screen-lg) {
		font-size: var(--size-desktop-hero1);
		line-height: var(--lineheight-desktop-hero1);
	}
}

@define-mixin hero2 {
	font-size: var(--size-mobile-hero2);
	line-height: var(--lineheight-mobile-hero2);

	@media (--screen-lg) {
		font-size: var(--size-desktop-hero2);
		line-height: var(--lineheight-desktop-hero2);
	}
}

@define-mixin hero3 {
	font-size: var(--size-mobile-hero3);
	line-height: var(--lineheight-mobile-hero3);

	@media (--screen-lg) {
		font-size: var(--size-desktop-hero3);
		line-height: var(--lineheight-desktop-hero3);
	}
}

@define-mixin h1 {
	font-size: var(--size-mobile-h1);
	line-height: var(--lineheight-mobile-h1);

	@media (--screen-lg) {
		font-size: var(--size-desktop-h1);
		line-height: var(--lineheight-desktop-h1);
	}
}

@define-mixin h2 {
	font-size: var(--size-mobile-h2);
	line-height: var(--lineheight-mobile-h2);

	@media (--screen-lg) {
		font-size: var(--size-desktop-h2);
		line-height: var(--lineheight-desktop-h2);
	}
}

@define-mixin h3 {
	font-size: var(--size-mobile-h3);
	line-height: var(--lineheight-mobile-h3);

	@media (--screen-lg) {
		font-size: var(--size-desktop-h3);
		line-height: var(--lineheight-desktop-h3);
	}
}

@define-mixin h4 {
	font-size: var(--size-mobile-h4);
	line-height: var(--lineheight-mobile-h4);

	@media (--screen-lg) {
		font-size: var(--size-desktop-h4);
		line-height: var(--lineheight-desktop-h4);
	}
}

@define-mixin h5 {
	font-size: var(--size-mobile-h5);
	line-height: var(--lineheight-mobile-h5);

	@media (--screen-lg) {
		font-size: var(--size-desktop-h5);
		line-height: var(--lineheight-desktop-h5);
	}
}

@define-mixin h6 {
	font-size: var(--size-mobile-h6);
	line-height: var(--lineheight-mobile-h6);

	@media (--screen-lg) {
		font-size: var(--size-desktop-h6);
		line-height: var(--lineheight-desktop-h6);
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
	font-size: var(--size-mobile-text);
	line-height: var(--lineheight-mobile-text);
	padding-top: var(--padding-top-body-mobile);

	@media (--screen-lg) {
		font-size: var(--size-desktop-text);
		line-height: var(--lineheight-desktop-text);
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

	&:hover {
		color: var(--color-secondary);
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
	max-width: 100%;
	width: 100%;
}

strong,
b {
	font-weight: 700;
	color: var(--color-primary);
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
