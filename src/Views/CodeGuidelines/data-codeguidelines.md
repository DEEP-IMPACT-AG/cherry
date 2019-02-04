# Code Guidelines

Cherry can be integrated and used in any technology or workflow. You can use it with single-purpose classes, as PostCSS modules or even pre-build React components.

---

**Naming:** `[property]-[screen(optional)]-[value]-[state's(optional)]`

---

## Variables

- **Spacing**

`--padding-top-body-mobile`

`--padding-top-body-desktop`

`--gutter-col-mobile`

`--gutter-col-desktop`

`--margin-container-mobile`

`--margin-container-desktop`

---

- **Media Queries**

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