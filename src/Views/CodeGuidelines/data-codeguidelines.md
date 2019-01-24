# Code Guidelines

Cherry can be integrated and used in any technology or workflow. You can use it with single-purpose classes, as PostCSS modules or even pre-build React components.

---

**Naming:** `[property]-[screen(optional)]-[value]-[state's(optional)]`

---

## Variables

**Media Queries**

`--screen-xs: 0`

`--screen-sm: 576px`

`--screen-md: 768px`

`--screen-lg: 992px` - Considered as Desktop

`--screen-xl: 1200px`

`--screen-xxl: 1440px`

`--screen-xxxl: 1920px`

---

- **Colors**

  ***

  `--color-primary`

  `--color-secondary`

  `--color-tertiary`

  ***

  `--color-dark`

  `--color-light`

  ***

  `--color-gray-light`

  `--color-gray-medium`

  `--color-gray-dark`

  ***

  `--color-success`

  `--color-error`

  `--color-warning`

  `--color-info`

  ***

- **Font Family**

  ***

  `--font-text`

  `--font-head`

  `--font-special`

  `--font-mono`

  ***

- **Font Sizes (Unit: PX)a**

  ***

  - **Font Size**

    ***

    `--size-mobile-hero1`

    `--size-desktop-hero1`

    `--size-[mobile|desktop]-hero2`

    `--size-[mobile|desktop]-hero3`

    ***

    `--size-[mobile|desktop]-eyebrow`

    ***

    `--size-[mobile|desktop]-h1`

    `--size-[mobile|desktop]-h2`

    `--size-[mobile|desktop]-h3`

    `--size-[mobile|desktop]-h4`

    `--size-[mobile|desktop]-h5`

    `--size-[mobile|desktop]-h6`

    ***

    `--size-[mobile|desktop]-subtitle`

    ***

    `--size-[mobile|desktop]-lead`

    ***

    `--size-[mobile|desktop]-text`

    ***

    `--size-[mobile|desktop]-small`

    ***

    `--size-[mobile|desktop]-blockquotes`

    ***

    `--size-[mobile|desktop]-list`

    ***

  - **Line Height**

    ***

    `--lineheight-mobile-hero1`

    `--lineheight-desktop-hero1`

    `--lineheight-[mobile|desktop]-hero2`

    `--lineheight-[mobile|desktop]-hero3`

    ***

    `--lineheight-[mobile|desktop]-eyebrow`

    ***

    `--lineheight-[mobile|desktop]-h1`

    `--lineheight-[mobile|desktop]-h2`

    `--lineheight-[mobile|desktop]-h3`

    `--lineheight-[mobile|desktop]-h4`

    `--lineheight-[mobile|desktop]-h5`

    `--lineheight-[mobile|desktop]-h6`

    ***

    `--lineheight-[mobile|desktop]-subtitle`

    ***

    `--lineheight-[mobile|desktop]-lead`

    ***

    `--lineheight-[mobile|desktop]-text`

    ***

    `--lineheight-[mobile|desktop]-small`

    ***

    `--lineheight-[mobile|desktop]-blockquotes`

    ***

    `--lineheight-[mobile|desktop]-list`

  ***

- **Buttons**

  ***

  `--btn-primary`

  `--btn-secondary`

  `--btn-tertiary`

  ***

  `--btn-[primary|secondary|tertiary]-small`

  `--btn-[primary|secondary|tertiary]-default`

  `--btn-[primary|secondary|tertiary]-big`

  ***

  `--btn-[primary|secondary|tertiary]-[small|default|big]-disabled`

  `--btn-[primary|secondary|tertiary]-[small|default|big]-hover`

  `--btn-[primary|secondary|tertiary]-[small|default|big]-active`

  `--btn-[primary|secondary|tertiary]-[small|default|big]-inverted`

  `--btn-[primary|secondary|tertiary]-[small|default|big]-visited`

  ***

- **Forms**

  ***

  `--form-text`

  `--form-text-disabled`

  `--form-text-hover`

  `--form-text-focus`

  `--form-text-inverted`

  ***

  `--form-number`

  `--form-number-[disabled|hover|focus|inverted]`

  ***

  `--form-textarea`

  `--form-textarea-[disabled|hover|focus|inverted]`

  ***

  `--form-select`

  `--form-select-[disabled|hover|focus|inverted]`

  ***

  `--form-checkbox`

  `--form-checkbox-[disabled|hover|checked|inverted]`

  ***

  `--form-radio`

  `--form-radio-[disabled|hover|checked|inverted]`

  ***

  `--form-fieldset`

  `--form-fieldset-[disabled|inverted]`

  ***

  `--form-label`

  `--form-label-[disabled|inverted]`

  ***

- **Grid**

  ***

  `--container`

  `--container-fluid`

  ***

  `--row`

  ***

  `--col-1`

  `--col-2`

  `--col-3`

  `--col-4`

  `--col-6`

  `--col-7`

  `--col-8`

  `--col-9`

  `--col-10`

  `--col-11`

  `--col-12`

  ***

  `--col-xs-1`

  `--col-xs-2`

  `--col-xs-3`

  `--col-xs-4`

  `--col-xs-5`

  `--col-xs-6`

  `--col-xs-7`

  `--col-xs-8`

  `--col-xs-9`

  `--col-xs-10`

  `--col-xs-11`

  `--col-xs-12`

  ***

  `--col-[xs|sm|md|lg|xl|xxl|xxxl]-[1-12]`

  ***

- **Helper Classes**

  ***

  - **Margin**

    ***

    `--m-inital`

    `--m-auto`

    `--mx-[n|initial|auto]`

    `--my-[n|initial|auto]`

    `--mt-[n|initial|auto]`

    `--mr-[n|initial|auto]`

    `--mt-[n|initial|auto]`

    `--ml-[n|initial|auto]`

    ***

    `--m-xs-inital`

    `--m-xs-auto`

    `--mx-xs-[n|initial|auto]`

    `--my-xs-[n|initial|auto]`

    `--mt-xs-[n|initial|auto]`

    `--mr-xs-[n|initial|auto]`

    `--mt-xs-[n|initial|auto]`

    `--ml-xs-[n|initial|auto]`

    ***

    `--m-[xs|sm|md|lg|xl|xxl|xxxl]-inital`

    `--m-[xs|sm|md|lg|xl|xxl|xxxl]-auto`

    `--mx-[xs|sm|md|lg|xl|xxl|xxxl]-[n|initial|auto]`

    `--my-[xs|sm|md|lg|xl|xxl|xxxl]-[n|initial|auto]`

    `--mt-[xs|sm|md|lg|xl|xxl|xxxl]-[n|initial|auto]`

    `--mr-[xs|sm|md|lg|xl|xxl|xxxl]-[n|initial|auto]`

    `--mt-[xs|sm|md|lg|xl|xxl|xxxl]-[n|initial|auto]`

    `--ml-[xs|sm|md|lg|xl|xxl|xxxl]-[n|initial|auto]`

    ***

  - **Padding**

    ***

    `--p-inital`

    `--px-[n|initial]`

    `--py-[n|initial]`

    `--pt-[n|initial]`

    `--pr-[n|initial]`

    `--pt-[n|initial]`

    `--pl-[n|initial]`

    ***

    `--p-xs-inital`

    `--px-xs-[n|initial]`

    `--py-xs-[n|initial]`

    `--pt-xs-[n|initial]`

    `--pr-xs-[n|initial]`

    `--pt-xs-[n|initial]`

    `--pl-xs-[n|initial]`

    ***

    `--p-[xs|sm|md|lg|xl|xxl|xxxl]-inital`

    `--px-[xs|sm|md|lg|xl|xxl|xxxl]-[n|initial]`

    `--py-[xs|sm|md|lg|xl|xxl|xxxl]-[n|initial]`

    `--pt-[xs|sm|md|lg|xl|xxl|xxxl]-[n|initial]`

    `--pr-[xs|sm|md|lg|xl|xxl|xxxl]-[n|initial]`

    `--pt-[xs|sm|md|lg|xl|xxl|xxxl]-[n|initial]`

    `--pl-[xs|sm|md|lg|xl|xxl|xxxl]-[n|initial]`

    ***

  - **Align**

    ***

    `--align-left`

    `--align-center`

    `--align-right`

    ***

    `--align-xs-left`

    `--align-xs-center`

    `--align-xs-right`

    ***

    `--align-[xs|sm|md|lg|xl|xxl|xxxl]-left`

    `--align-[xs|sm|md|lg|xl|xxl|xxxl]-center`

    `--align-[xs|sm|md|lg|xl|xxl|xxxl]-right`

  - **Display**

    `--display-inline`

    `--display-inline-block`

    `--display-inline-flex`

    `--display-block`

    `--display-flex`

    `--display-none`

    ***

    `--display-xs-inline`

    `--display-xs-inline-block`

    `--display-xs-inline-flex`

    `--display-xs-block`

    `--display-xs-flex`

    `--display-xs-none`

    ***

    `--display-[xs|sm|md|lg|xl|xxl|xxxl]-inline`

    `--display-[xs|sm|md|lg|xl|xxl|xxxl]-inline-block`

    `--display-[xs|sm|md|lg|xl|xxl|xxxl]-inline-flex`

    `--display-[xs|sm|md|lg|xl|xxl|xxxl]-block`

    `--display-[xs|sm|md|lg|xl|xxl|xxxl]-flex`

    `--display-[xs|sm|md|lg|xl|xxl|xxxl]-none`

  - **Position**

    ***

    `--position-static`

    `--position-relative`

    `--position-absolute`

    `--position-fixed`

    ***

    `--position-xs-static`

    `--position-xs-relative`

    `--position-xs-absolute`

    `--position-xs-fixed`

    ***

    `--position-[xs|sm|md|lg|xl|xxl|xxxl]-inital`

    `--position-[xs|sm|md|lg|xl|xxl|xxxl]-inherit`

    `--position-[xs|sm|md|lg|xl|xxl|xxxl]-static`

    `--position-[xs|sm|md|lg|xl|xxl|xxxl]-relative`

    `--position-[xs|sm|md|lg|xl|xxl|xxxl]-absolute`

    `--position-[xs|sm|md|lg|xl|xxl|xxxl]-fixed`

  - **Radius**

    ***

    `--radius-small`

    `--radius-default`

    `--radius-big`

    ***

  - **Size (Width & Height)**

    ***

    `--w-100`

    `--h-100`

    ***

    `--w-100vw`

    `--h-100vh`

    ***

# Default CSS Files

## Variables.css

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

	/* Body Padding ----------------------------------------------- */
	--padding-body-top-desktop: 0;
	--padding-body-top-mobile: 66px;

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
	--size-mobile-hero1: 44px;
	--lineheight-mobile-hero1: 1.35;
	--size-desktop-hero1: 54px;
	--lineheight-desktop-hero1: 1.15;

	--size-mobile-hero2: 34px;
	--lineheight-mobile-hero2: 1.5;
	--size-desktop-hero2: 44px;
	--lineheight-desktop-hero2: 1.35;

	--size-mobile-hero3: 24px;
	--lineheight-mobile-hero3: 1.8;
	--size-desktop-hero3: 34px;
	--lineheight-desktop-hero3: 1.5;

	/* --> Eyebrow ------------------------------------------------ */
	--size-mobile-eyebrow: 14px;
	--lineheight-mobile-eyebrow: 1.5;
	--size-desktop-eyebrow: 16px;
	--lineheight-desktop-eyebrow: 1.5;

	/* --> Heading ------------------------------------------------ */
	--size-mobile-h1: 28px;
	--lineheight-mobile-h1: 1.35;
	--size-desktop-h1: 44px;
	--lineheight-desktop-h1: 1.35;

	--size-mobile-h2: 23px;
	--lineheight-mobile-h2: 1.4;
	--size-desktop-h2: 34px;
	--lineheight-desktop-h2: 1.25;

	--size-mobile-h3: 19px;
	--lineheight-mobile-h3: 1.35;
	--size-desktop-h3: 21px;
	--lineheight-desktop-h3: 1.35;

	--size-mobile-h4: 16px;
	--lineheight-mobile-h4: 1.5;
	--size-desktop-h4: 18px;
	--lineheight-desktop-h4: 1.75;

	--size-mobile-h5: 12px;
	--size-mobile-h5: 1.2;
	--size-desktop-h5: 16px;
	--lineheight-desktop-h5: 1.75;

	--size-mobile-h6: 10px;
	--lineheight-mobile-h6: 1.2;
	--size-desktop-h6: 12px;
	--lineheight-desktop-h6: 1.2;

	/* --> Subtitle ----------------------------------------------- */
	--size-mobile-subtitle: 18px;
	--lineheight-mobile-subtitle: 1.75;
	--size-desktop-subtitle: 20px;
	--lineheight-desktop-subtitle: 1.75;
	

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

## Global.css

```css
/*********************************************************************
**********************************************************************
Cherry 0.0.1 - Design System
Global Styles
**********************************************************************
*********************************************************************/

@import './variables.css';
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,700');
@import '../../../node_modules/normalize.css/normalize.css';
@import './github.css';

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
	padding-top: var(--padding-body-top-mobile);

	@media (--screen-lg) {
		font-size: var(--size-desktop-text);
		line-height: var(--lineheight-desktop-text);
		padding-top: var(--padding-body-top-desktop);
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
	font-family: var(--font-head);
	font-weight: 300;
	margin: 0;
	padding: 0;
}

h1 {
	font-size: var(--size-mobile-h1);
	line-height: var(--lineheight-mobile-h1);

	@media (--screen-lg) {
		font-size: var(--size-desktop-h1);
		line-height: var(--lineheight-desktop-h1);
	}
}

h2 {
	font-size: var(--size-mobile-h2);
	line-height: var(--lineheight-mobile-h2);

	@media (--screen-lg) {
		font-size: var(--size-desktop-h2);
		line-height: var(--lineheight-desktop-h2);
	}
}

h3 {
	font-size: var(--size-mobile-h3);
	line-height: var(--lineheight-mobile-h3);

	@media (--screen-lg) {
		font-size: var(--size-desktop-h3);
		line-height: var(--lineheight-desktop-h3);
	}
}

h4 {
	font-size: var(--size-mobile-h4);
	line-height: var(--lineheight-mobile-h4);

	@media (--screen-lg) {
		font-size: var(--size-desktop-h4);
		line-height: var(--lineheight-desktop-h4);
	}
}

h5 {
	font-size: var(--size-mobile-h5);
	line-height: var(--lineheight-mobile-h5);

	@media (--screen-lg) {
		font-size: var(--size-desktop-h5);
		line-height: var(--lineheight-desktop-h5);
	}
}

h6 {
	font-size: var(--size-mobile-h6);
	line-height: var(--lineheight-mobile-h6);

	@media (--screen-lg) {
		font-size: var(--size-desktop-h6);
		line-height: var(--lineheight-desktop-h6);
	}
}

p {
	color: var(--color-secondary);
	font-size: var(--size-mobile-text);
	line-height: var(--lineheight-mobile-text);

	@media (--screen-lg) {
		font-size: var(--size-desktop-text);
		line-height: var(--lineheight-desktop-text);
	}
}

hr {
	border: none;
	border-bottom: solid 1px var(--color-gray-light);
}
```

## Mixins.css

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
```
