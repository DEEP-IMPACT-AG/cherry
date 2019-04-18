# Styling Structure

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
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
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
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}
/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */
pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
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
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted; /* 2 */
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
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
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
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}
/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */
button,
input { /* 1 */
  overflow: visible;
}
/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */
button,
select { /* 1 */
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
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
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
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
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
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
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
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
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
  --margin-container-mobile: 20px;
  --margin-container-desktop: 20px;
  --margin-row-mobile: -20px;
  --margin-row-desktop: -20px;
  --gutter-col-mobile: 10px;
  --gutter-col-desktop: 10px;

  /* Colors ----------------------------------------------------- */
  --color-primary: #1f2d3d;
  --color-secondary: #8492a6;
  --color-tertiary: #f9fafc;
  --color-dark: #000;
  --color-light: #fff;
  --color-gray-light: #e5e5e5;
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
  font-size: var(--size-text-mobile);
  line-height: 1.5;
  line-height: var(--lineheight-text-mobile);
  padding-top: 70px;
  padding-top: var(--padding-top-body-mobile);
}

@media (min-width: 992px) {
  body {
    font-size: 18px;
    font-size: var(--size-text-desktop);
    line-height: 1.7;
    line-height: var(--lineheight-text-desktop);
    padding-top: 0;
    padding-top: var(--padding-top-body-desktop);
  }
}

* {
  box-sizing: border-box;
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
  color: #1f2d3d;
  color: var(--color-primary);
}

a:hover {
  color: #8492a6;
  color: var(--color-secondary);
}

figure {
  margin: 0;
}

hr {
  border: none;
  border-bottom: solid 1px #e5e5e5;
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
  transition: all 0.3s ease;
}

img *,
svg * {
  transition: all 0.3s ease;
}

img {
  display: block;
  max-width: 100%;
  width: 100%;
}

strong,
b {
  font-weight: 700;
  color: #1f2d3d;
  color: var(--color-primary);
}

small {
  display: inline-block;
  font-size: 12px;
  font-size: var(--size-small-mobile);
  line-height: 1.7;
  line-height: var(--lineheight-small-mobile);
}

@media (min-width: 992px) {
  small {
    font-size: 14px;
    font-size: var(--size-small-desktop);
    line-height: 1.7;
    line-height: var(--lineheight-small-desktop);
  }
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
  font-size: var(--size-h1-mobile);
  line-height: 1.35;
  line-height: var(--lineheight-h1-mobile);
}

@media (min-width: 992px) {
  h1 {
    font-size: 40px;
    font-size: var(--size-h1-desktop);
    line-height: 1.15;
    line-height: var(--lineheight-h1-desktop);
  }
}

h2 {
  font-size: 28px;
  font-size: var(--size-h2-mobile);
  line-height: 1.35;
  line-height: var(--lineheight-h2-mobile);
}

@media (min-width: 992px) {
  h2 {
    font-size: 32px;
    font-size: var(--size-h2-desktop);
    line-height: 1.15;
    line-height: var(--lineheight-h2-desktop);
  }
}

h3 {
  font-size: 24px;
  font-size: var(--size-h3-mobile);
  line-height: 1.35;
  line-height: var(--lineheight-h3-mobile);
}

@media (min-width: 992px) {
  h3 {
    font-size: 28px;
    font-size: var(--size-h3-desktop);
    line-height: 1.15;
    line-height: var(--lineheight-h3-desktop);
  }
}

h4 {
  font-size: 22px;
  font-size: var(--size-h4-mobile);
  line-height: 1.35;
  line-height: var(--lineheight-h4-mobile);
}

@media (min-width: 992px) {
  h4 {
    font-size: 24px;
    font-size: var(--size-h4-desktop);
    line-height: 1.15;
    line-height: var(--lineheight-h4-desktop);
  }
}

h5 {
  font-size: 18px;
  font-size: var(--size-h5-mobile);
  line-height: 1.35;
  line-height: var(--lineheight-h5-mobile);
}

@media (min-width: 992px) {
  h5 {
    font-size: 20px;
    font-size: var(--size-h5-desktop);
    line-height: 1.15;
    line-height: var(--lineheight-h5-desktop);
  }
}

h6 {
  font-size: 14px;
  font-size: var(--size-h6-mobile);
  line-height: 1.35;
  line-height: var(--lineheight-h6-mobile);
}

@media (min-width: 992px) {
  h6 {
    font-size: 16px;
    font-size: var(--size-h6-desktop);
    line-height: 1.15;
    line-height: var(--lineheight-h6-desktop);
  }
}

p {
  color: #8492a6;
  color: var(--color-secondary);
  font-size: 16px;
  font-size: var(--size-text-mobile);
  line-height: 1.5;
  line-height: var(--lineheight-text-mobile);
}

@media (min-width: 992px) {
  p {
    font-size: 18px;
    font-size: var(--size-text-desktop);
    line-height: 1.7;
    line-height: var(--lineheight-text-desktop);
  }
}
```
