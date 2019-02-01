# CSS Only

```css
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,700');

/*********************************************************************
**********************************************************************
Cherry 0.0.1 - Design System
Entry Points
**********************************************************************
*********************************************************************/
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
/* Document
   ========================================================================== */
/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */
html {
	line-height: 1.15;
	/* 1 */
	-webkit-text-size-adjust: 100%;
	/* 2 */
}

/* Sections
   ========================================================================== */
/**
 * Remove the margin in all browsers.
 */
body {
	margin: 0;
}

/**
 * Render the `main` element consistently in IE.
 */
main {
	display: block;
}

/**
 * Correct the font size and margin on `h1` elements within `section` and
 * `article` contexts in Chrome, Firefox, and Safari.
 */
h1 {
	font-size: 2em;
	margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */
/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
hr {
	box-sizing: content-box;
	/* 1 */
	height: 0;
	/* 1 */
	overflow: visible;
	/* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */
pre {
	font-family: monospace, monospace;
	/* 1 */
	font-size: 1em;
	/* 2 */
}

/* Text-level semantics
   ========================================================================== */
/**
 * Remove the gray background on active links in IE 10.
 */
a {
	background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
	border-bottom: none;
	/* 1 */
	text-decoration: underline;
	/* 2 */
	-webkit-text-decoration: underline dotted;
	text-decoration: underline dotted;
	/* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
	font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */
code,
kbd,
samp {
	font-family: monospace, monospace;
	/* 1 */
	font-size: 1em;
	/* 2 */
}

/**
 * Add the correct font size in all browsers.
 */
small {
	font-size: 80%;
}

/**
 * Prevent `sub` and `sup` elements from affecting the line height in
 * all browsers.
 */
sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
}

sub {
	bottom: -0.25em;
}

sup {
	top: -0.5em;
}

/* Embedded content
   ========================================================================== */
/**
 * Remove the border on images inside links in IE 10.
 */
img {
	border-style: none;
}

/* Forms
   ========================================================================== */
/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */
button,
input,
optgroup,
select,
textarea {
	font-family: inherit;
	/* 1 */
	font-size: 100%;
	/* 1 */
	line-height: 1.15;
	/* 1 */
	margin: 0;
	/* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */
button,
input {
	/* 1 */
	overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */
button,
select {
	/* 1 */
	text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */
button,
[type="button"],
[type="reset"],
[type="submit"] {
	-webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
	border-style: none;
	padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
	outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */
fieldset {
	padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from `fieldset` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    `fieldset` elements in all browsers.
 */
legend {
	box-sizing: border-box;
	/* 1 */
	color: inherit;
	/* 2 */
	display: table;
	/* 1 */
	max-width: 100%;
	/* 1 */
	padding: 0;
	/* 3 */
	white-space: normal;
	/* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
	vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */
textarea {
	overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */
[type="checkbox"],
[type="radio"] {
	box-sizing: border-box;
	/* 1 */
	padding: 0;
	/* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
	height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */
[type="search"] {
	-webkit-appearance: textfield;
	/* 1 */
	outline-offset: -2px;
	/* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type="search"]::-webkit-search-decoration {
	-webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to `inherit` in Safari.
 */
::-webkit-file-upload-button {
	-webkit-appearance: button;
	/* 1 */
	font: inherit;
	/* 2 */
}

/* Interactive
   ========================================================================== */
/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */
details {
	display: block;
}

/*
 * Add the correct display in all browsers.
 */
summary {
	display: list-item;
}

/* Misc
   ========================================================================== */
/**
 * Add the correct display in IE 10+.
 */
template {
	display: none;
}

/**
 * Add the correct display in IE 10.
 */
[hidden] {
	display: none;
}

/*********************************************************************
**********************************************************************
Cherry 0.0.1 - Design System
Global Styles
**********************************************************************
*********************************************************************/
/*********************************************************************
**********************************************************************
Cherry 0.0.1 - Design System
Variables & Mixins
**********************************************************************
*********************************************************************/
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
	font-family: 'Roboto', sans-serif;
	font-family: var(--font-text);
	font-size: 16px;
	font-size: var(--size-mobile-text);
	line-height: 1.5;
	line-height: var(--lineheight-mobile-text);
	padding-top: 70px;
	padding-top: var(--padding-top-body-mobile)
}

@media (min-width: 992px) {
	body {
		font-size: 18px;
		font-size: var(--size-desktop-text);
		line-height: 1.7;
		line-height: var(--lineheight-desktop-text);
		padding-top: 0;
		padding-top: var(--padding-top-body-desktop)
	}
}

* {
	box-sizing: border-box
}

*::-moz-selection {
	background: #000;
	background: var(--color-dark);
	color: #fff;
	color: var(--color-light);
}

*::selection {
	background: #000;
	background: var(--color-dark);
	color: #fff;
	color: var(--color-light);
}

a,
button {
	outline: none;
	text-decoration: none;
	transition: all 0.3s ease;
}

a {
	color: #1F2D3D;
	color: var(--color-primary)
}

a:hover {
	color: #8492A6;
	color: var(--color-secondary);
}

figure {
	margin: 0;
}

hr {
	border: none;
	border-bottom: solid 1px #E5E5E5;
	border-bottom: solid 1px var(--color-gray-light);
}

fieldset {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	border: none;
}

img,
svg {
	transition: all 0.3s ease
}

img *,
svg * {
	transition: all 0.3s ease;
}

img {
	max-width: 100%;
	width: 100%;
}

strong,
b {
	font-weight: 700;
	color: #1F2D3D;
	color: var(--color-primary);
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-family: 'Roboto', sans-serif;
	font-family: var(--font-head);
	font-weight: 300;
	margin: 0;
	padding: 0;
}

h1 {
	font-size: 38px;
	font-size: var(--size-mobile-h1);
	line-height: 1.35;
	line-height: var(--lineheight-mobile-h1);
}

@media (min-width: 992px) {
	h1 {
		font-size: 40px;
		font-size: var(--size-desktop-h1);
		line-height: 1.15;
		line-height: var(--lineheight-desktop-h1);
	}
}

h2 {
	font-size: 28px;
	font-size: var(--size-mobile-h2);
	line-height: 1.35;
	line-height: var(--lineheight-mobile-h2);
}

@media (min-width: 992px) {
	h2 {
		font-size: 32px;
		font-size: var(--size-desktop-h2);
		line-height: 1.15;
		line-height: var(--lineheight-desktop-h2);
	}
}

h3 {
	font-size: 24px;
	font-size: var(--size-mobile-h3);
	line-height: 1.35;
	line-height: var(--lineheight-mobile-h3);
}

@media (min-width: 992px) {
	h3 {
		font-size: 28px;
		font-size: var(--size-desktop-h3);
		line-height: 1.15;
		line-height: var(--lineheight-desktop-h3);
	}
}

h4 {
	font-size: 22px;
	font-size: var(--size-mobile-h4);
	line-height: 1.35;
	line-height: var(--lineheight-mobile-h4);
}

@media (min-width: 992px) {
	h4 {
		font-size: 24px;
		font-size: var(--size-desktop-h4);
		line-height: 1.15;
		line-height: var(--lineheight-desktop-h4);
	}
}

h5 {
	font-size: 18px;
	font-size: var(--size-mobile-h5);
	line-height: 1.35;
	line-height: var(--lineheight-mobile-h5);
}

@media (min-width: 992px) {
	h5 {
		font-size: 20px;
		font-size: var(--size-desktop-h5);
		line-height: 1.15;
		line-height: var(--lineheight-desktop-h5);
	}
}

h6 {
	font-size: 14px;
	font-size: var(--size-mobile-h6);
	line-height: 1.35;
	line-height: var(--lineheight-mobile-h6);
}

@media (min-width: 992px) {
	h6 {
		font-size: 16px;
		font-size: var(--size-desktop-h6);
		line-height: 1.15;
		line-height: var(--lineheight-desktop-h6);
	}
}

p {
	color: #8492A6;
	color: var(--color-secondary);
	font-size: 16px;
	font-size: var(--size-mobile-text);
	line-height: 1.5;
	line-height: var(--lineheight-mobile-text);
}

@media (min-width: 992px) {
	p {
		font-size: 18px;
		font-size: var(--size-desktop-text);
		line-height: 1.7;
		line-height: var(--lineheight-desktop-text);
	}
}
```
