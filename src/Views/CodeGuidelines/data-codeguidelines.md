# Code Guidelines

Cherry can be integrated and used in any technology or workflow. You can use it with single-purpose classes, as PostCSS modules or even pre-build JavaScript components.

### Code Style

- We use: **Tabs**
- Tab size: **4**
- Always leave an empty line before the **nested** CSS blocks 👇
  ```css
  .parent {
    color: var(--color-dark);

    & .child {
        color: var(--color-light);
      }
    }
  }

  ```
  Another empty line at the end of each file ☝

---

**Naming:** `[property]-[value]-[state's(optional)]-[screen(optional)]`

---

## Variables

- **Spacing**

`--max-width`

`--padding-top-body-mobile`

`--padding-top-body-desktop`

`--margin-container-mobile`

`--margin-container-desktop`

`--margin-container-child-mobile`

`--margin-container-child-desktop`

`--margin-row-mobile`

`--margin-row-desktop`

`--gutter-col-mobile`

`--gutter-col-desktop`

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

- **Font Sizes (Unit: PX)**

  ***

  - **Font Size**

    ***

    `--size-hero1-mobile`

    `--size-hero1-desktop`

    `--size-hero2-[mobile|desktop]`

    `--size-hero3-[mobile|desktop]`

    ***

    `--size-eyebrow-[mobile|desktop]`

    ***

    `--size-h1-[mobile|desktop]`

    `--size-h2-[mobile|desktop]`

    `--size-h3-[mobile|desktop]`

    `--size-h4-[mobile|desktop]`

    `--size-h5-[mobile|desktop]`

    `--size-h6-[mobile|desktop]`

    ***

    `--size-subtitle-[mobile|desktop]`

    ***

    `--size-lead-[mobile|desktop]`

    ***

    `--size-text-[mobile|desktop]`

    ***

    `--size-small-[mobile|desktop]`

    ***

    `--size-blockquotes-[mobile|desktop]`

    ***

    `--size-list-[mobile|desktop]`

    ***

  - **Line Height**

    ***

    `--lineheight-hero1-mobile`

    `--lineheight-hero1-desktop`

    `--lineheight-hero2-[mobile|desktop]`

    `--lineheight-hero3-[mobile|desktop]`

    ***

    `--lineheight-eyebrow-[mobile|desktop]`

    ***

    `--lineheight-h1-[mobile|desktop]`

    `--lineheight-h2-[mobile|desktop]`

    `--lineheight-h3-[mobile|desktop]`

    `--lineheight-h4-[mobile|desktop]`

    `--lineheight-h5-[mobile|desktop]`

    `--lineheight-h6-[mobile|desktop]`

    ***

    `--lineheight-subtitle-[mobile|desktop]`

    ***

    `--lineheight-lead-[mobile|desktop]`

    ***

    `--lineheight-text-[mobile|desktop]`

    ***

    `--lineheight-small-[mobile|desktop]`

    ***

    `--lineheight-blockquotes-[mobile|desktop]`

    ***

    `--lineheight-list-[mobile|desktop]`

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
