## styles.css
Main entry point with the required imports.

```css
/*********************************************************************
**********************************************************************
Cherry 0.0.1 - Design System
Entry Points
**********************************************************************
*********************************************************************/

@import './variables.css';
@import './Content/Container.css';
@import './Content/Row.css';
@import './Content/Col.css';

:global {
	& .container {
		@mixin container;
	}

	& .row {
		@mixin row;
	}

	& .col1 {
		@mixin col1;
	}

	& .col2 {
		@mixin col2;
	}

	& .col3 {
		@mixin col3;
	}

	& .col4 {
		@mixin col4;
	}

	& .col5 {
		@mixin col5;
	}

	& .col6 {
		@mixin col6;
	}

	& .col7 {
		@mixin col7;
	}

	& .col8 {
		@mixin col8;
	}

	& .col9 {
		@mixin col9;
	}

	& .col10 {
		@mixin col10;
	}

	& .col11 {
		@mixin col11;
	}

	& .col12 {
		@mixin col12;
	}

	/* XS --------------------------------------------------------- */

	& .col1-xs {
		@media (--screen-xs) {
			@mixin col1;
		}
	}

	& .col2-xs {
		@media (--screen-xs) {
			@mixin col2;
		}
	}

	& .col3-xs {
		@media (--screen-xs) {
			@mixin col3;
		}
	}

	& .col4-xs {
		@media (--screen-xs) {
			@mixin col4;
		}
	}

	& .col5-xs {
		@media (--screen-xs) {
			@mixin col5;
		}
	}

	& .col6-xs {
		@media (--screen-xs) {
			@mixin col6;
		}
	}

	& .col7-xs {
		@media (--screen-xs) {
			@mixin col7;
		}
	}

	& .col8-xs {
		@media (--screen-xs) {
			@mixin col8;
		}
	}

	& .col9-xs {
		@media (--screen-xs) {
			@mixin col9;
		}
	}

	& .col10-xs {
		@media (--screen-xs) {
			@mixin col10;
		}
	}

	& .col11-xs {
		@media (--screen-xs) {
			@mixin col11;
		}
	}

	& .col12-xs {
		@media (--screen-xs) {
			@mixin col12;
		}
	}

	/* SM --------------------------------------------------------- */

	& .col1-sm {
		@media (--screen-sm) {
			@mixin col1;
		}
	}

	& .col2-sm {
		@media (--screen-sm) {
			@mixin col2;
		}
	}

	& .col3-sm {
		@media (--screen-sm) {
			@mixin col3;
		}
	}

	& .col4-sm {
		@media (--screen-sm) {
			@mixin col4;
		}
	}

	& .col5-sm {
		@media (--screen-sm) {
			@mixin col5;
		}
	}

	& .col6-sm {
		@media (--screen-sm) {
			@mixin col6;
		}
	}

	& .col7-sm {
		@media (--screen-sm) {
			@mixin col7;
		}
	}

	& .col8-sm {
		@media (--screen-sm) {
			@mixin col8;
		}
	}

	& .col9-sm {
		@media (--screen-sm) {
			@mixin col9;
		}
	}

	& .col10-sm {
		@media (--screen-sm) {
			@mixin col10;
		}
	}

	& .col11-sm {
		@media (--screen-sm) {
			@mixin col11;
		}
	}

	& .col12-sm {
		@media (--screen-sm) {
			@mixin col12;
		}
	}

	/* MD --------------------------------------------------------- */

	& .col1-md {
		@media (--screen-md) {
			@mixin col1;
		}
	}

	& .col2-md {
		@media (--screen-md) {
			@mixin col2;
		}
	}

	& .col3-md {
		@media (--screen-md) {
			@mixin col3;
		}
	}

	& .col4-md {
		@media (--screen-md) {
			@mixin col4;
		}
	}

	& .col5-md {
		@media (--screen-md) {
			@mixin col5;
		}
	}

	& .col6-md {
		@media (--screen-md) {
			@mixin col6;
		}
	}

	& .col7-md {
		@media (--screen-md) {
			@mixin col7;
		}
	}

	& .col8-md {
		@media (--screen-md) {
			@mixin col8;
		}
	}

	& .col9-md {
		@media (--screen-md) {
			@mixin col9;
		}
	}

	& .col10-md {
		@media (--screen-md) {
			@mixin col10;
		}
	}

	& .col11-md {
		@media (--screen-md) {
			@mixin col11;
		}
	}

	& .col12-md {
		@media (--screen-md) {
			@mixin col12;
		}
	}

	/* LG --------------------------------------------------------- */

	& .col1-lg {
		@media (--screen-lg) {
			@mixin col1;
		}
	}

	& .col2-lg {
		@media (--screen-lg) {
			@mixin col2;
		}
	}

	& .col3-lg {
		@media (--screen-lg) {
			@mixin col3;
		}
	}

	& .col4-lg {
		@media (--screen-lg) {
			@mixin col4;
		}
	}

	& .col5-lg {
		@media (--screen-lg) {
			@mixin col5;
		}
	}

	& .col6-lg {
		@media (--screen-lg) {
			@mixin col6;
		}
	}

	& .col7-lg {
		@media (--screen-lg) {
			@mixin col7;
		}
	}

	& .col8-lg {
		@media (--screen-lg) {
			@mixin col8;
		}
	}

	& .col9-lg {
		@media (--screen-lg) {
			@mixin col9;
		}
	}

	& .col10-lg {
		@media (--screen-lg) {
			@mixin col10;
		}
	}

	& .col11-lg {
		@media (--screen-lg) {
			@mixin col11;
		}
	}

	& .col12-lg {
		@media (--screen-lg) {
			@mixin col12;
		}
	}

	/* XL --------------------------------------------------------- */

	& .col1-xl {
		@media (--screen-xl) {
			@mixin col1;
		}
	}

	& .col2-xl {
		@media (--screen-xl) {
			@mixin col2;
		}
	}

	& .col3-xl {
		@media (--screen-xl) {
			@mixin col3;
		}
	}

	& .col4-xl {
		@media (--screen-xl) {
			@mixin col4;
		}
	}

	& .col5-xl {
		@media (--screen-xl) {
			@mixin col5;
		}
	}

	& .col6-xl {
		@media (--screen-xl) {
			@mixin col6;
		}
	}

	& .col7-xl {
		@media (--screen-xl) {
			@mixin col7;
		}
	}

	& .col8-xl {
		@media (--screen-xl) {
			@mixin col8;
		}
	}

	& .col9-xl {
		@media (--screen-xl) {
			@mixin col9;
		}
	}

	& .col10-xl {
		@media (--screen-xl) {
			@mixin col10;
		}
	}

	& .col11-xl {
		@media (--screen-xl) {
			@mixin col11;
		}
	}

	& .col12-xl {
		@media (--screen-xl) {
			@mixin col12;
		}
	}

	/* XXL --------------------------------------------------------- */

	& .col1-xxl {
		@media (--screen-xxl) {
			@mixin col1;
		}
	}

	& .col2-xxl {
		@media (--screen-xxl) {
			@mixin col2;
		}
	}

	& .col3-xxl {
		@media (--screen-xxl) {
			@mixin col3;
		}
	}

	& .col4-xxl {
		@media (--screen-xxl) {
			@mixin col4;
		}
	}

	& .col5-xxl {
		@media (--screen-xxl) {
			@mixin col5;
		}
	}

	& .col6-xxl {
		@media (--screen-xxl) {
			@mixin col6;
		}
	}

	& .col7-xxl {
		@media (--screen-xxl) {
			@mixin col7;
		}
	}

	& .col8-xxl {
		@media (--screen-xxl) {
			@mixin col8;
		}
	}

	& .col9-xxl {
		@media (--screen-xxl) {
			@mixin col9;
		}
	}

	& .col10-xxl {
		@media (--screen-xxl) {
			@mixin col10;
		}
	}

	& .col11-xxl {
		@media (--screen-xxl) {
			@mixin col11;
		}
	}

	& .col12-xxl {
		@media (--screen-xxl) {
			@mixin col12;
		}
	}

	/* XXXL --------------------------------------------------------- */

	& .col1-xxxl {
		@media (--screen-xxxl) {
			@mixin col1;
		}
	}

	& .col2-xxxl {
		@media (--screen-xxxl) {
			@mixin col2;
		}
	}

	& .col3-xxxl {
		@media (--screen-xxxl) {
			@mixin col3;
		}
	}

	& .col4-xxxl {
		@media (--screen-xxxl) {
			@mixin col4;
		}
	}

	& .col5-xxxl {
		@media (--screen-xxxl) {
			@mixin col5;
		}
	}

	& .col6-xxxl {
		@media (--screen-xxxl) {
			@mixin col6;
		}
	}

	& .col7-xxxl {
		@media (--screen-xxxl) {
			@mixin col7;
		}
	}

	& .col8-xxxl {
		@media (--screen-xxxl) {
			@mixin col8;
		}
	}

	& .col9-xxxl {
		@media (--screen-xxxl) {
			@mixin col9;
		}
	}

	& .col10-xxxl {
		@media (--screen-xxxl) {
			@mixin col10;
		}
	}

	& .col11-xxxl {
		@media (--screen-xxxl) {
			@mixin col11;
		}
	}

	& .col12-xxxl {
		@media (--screen-xxxl) {
			@mixin col12;
		}
	}
}
```

## variables.css
```css
:root {
	/* Spacing ----------------------------------------------- */
	--margin-container-mobile: 20px;
	--margin-container-desktop: 20px;
	--margin-row-mobile: -20px;
	--margin-row-desktop: -20px;
	--gutter-col-mobile: 10px;
	--gutter-col-desktop: 10px;
}
```

## container.css
```css
@define-mixin container {
	margin: auto;
	max-width: var(--max-width);
	padding-right: var(--margin-container-mobile);
	padding-left: var(--margin-container-mobile);

	@media (--screen-lg) {
		padding-right: var(--margin-container-desktop);
		padding-left: var(--margin-container-desktop);
	}

	@media (--screen-xxxl) {
		max-width: 1704px;
	}
}

@define-mixin containerFluid {
	width: 100%;
	max-width: initial;
	padding-right: var(--margin-container-mobile);
	padding-left: var(--margin-container-mobile);
	margin-right: auto;
	margin-left: auto;

	@media (--screen-lg) {
		padding-right: var(--margin-container-desktop);
		padding-left: var(--margin-container-desktop);
	}
}

.container {
	@mixin container;
}

.containerFluid {
	@mixin containerFluid;
}
```

## row.css
```
@define-mixin row {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 0 var(--margin-row-mobile);

	@media (--screen-lg) {
		margin: 0 var(--margin-row-desktop);
	}
}

.row {
	@mixin row;
}

.justifyContent-flex-start {
	justify-content: flex-start;
}

.justifyContent-flex-end {
	justify-content: flex-end;
}

.justifyContent-center {
	justify-content: center;
}

.justifyContent-space-between {
	justify-content: space-between;
}

.justifyContent-space-around {
	justify-content: space-around;
}

.justifyContent-initial {
	justify-content: initial;
}

.alignItems-stretch {
	align-items: stretch;
}

.alignItems-center {
	align-items: center;
}

.alignItems-flex-start {
	align-items: flex-start;
}

.alignItems-flex-end {
	align-items: flex-end;
}

.alignItems-baseline {
	align-items: baseline;
}

.alignItems-initial {
	align-items: initial;
}
```

## col.css
```css
@define-mixin col {
	position: relative;
	width: 100%;
	min-height: 1px;
	padding-right: var(--gutter-col-mobile);
	padding-left: var(--gutter-col-mobile);
	flex-basis: 0;
	flex-grow: 1;
	max-width: 100%;

	@media (--screen-lg) {
		padding-right: var(--gutter-col-desktop);
		padding-left: var(--gutter-col-desktop);
	}
}

@define-mixin colAuto {
	flex: 0 0 auto;
	width: auto;
	max-width: none;
}

@define-mixin col1 {
	flex: 0 0 8.333333%;
	max-width: 8.333333%;
}

@define-mixin col2 {
	flex: 0 0 16.666667%;
	max-width: 16.666667%;
}

@define-mixin col3 {
	flex: 0 0 25%;
	max-width: 25%;
}

@define-mixin col4 {
	flex: 0 0 33.333333%;
	max-width: 33.333333%;
}

@define-mixin col5 {
	flex: 0 0 41.666667%;
	max-width: 41.666667%;
}

@define-mixin col6 {
	flex: 0 0 50%;
	max-width: 50%;
}

@define-mixin col7 {
	flex: 0 0 58.333333%;
	max-width: 58.333333%;
}

@define-mixin col8 {
	flex: 0 0 66.666667%;
	max-width: 66.666667%;
}

@define-mixin col9 {
	flex: 0 0 75%;
	max-width: 75%;
}

@define-mixin col10 {
	flex: 0 0 83.333333%;
	max-width: 83.333333%;
}

@define-mixin col11 {
	flex: 0 0 91.666667%;
	max-width: 91.666667%;
}

@define-mixin col12 {
	flex: 0 0 100%;
	max-width: 100%;
}

.textAlign-left {
	text-align: left;
}

.textAlign-center {
	text-align: center;
}

.textAlign-right {
	text-align: right;
}

.col {
	@mixin col;
}

.colAuto {
	@mixin colAuto;
}

.col1 {
	@mixin col1;
}

.col2 {
	@mixin col2;
}

.col3 {
	@mixin col3;
}

.col4 {
	@mixin col4;
}

.col5 {
	@mixin col5;
}

.col6 {
	@mixin col6;
}

.col7 {
	@mixin col7;
}

.col8 {
	@mixin col8;
}

.col9 {
	@mixin col9;
}

.col10 {
	@mixin col10;
}

.col11 {
	@mixin col11;
}

.col12 {
	@mixin col12;
}

.orderFirst {
	order: -1;
}

.orderLast {
	order: 13;
}

@media (--screen-sm) {
	.colSm {
		@mixin col;
	}

	.colSm {
		@mixin col;
	}

	.colSmAuto {
		@mixin colAuto;
	}

	.colSm1 {
		@mixin col1;
	}

	.colSm2 {
		@mixin col2;
	}

	.colSm3 {
		@mixin col3;
	}

	.colSm4 {
		@mixin col4;
	}

	.colSm5 {
		@mixin col5;
	}

	.colSm6 {
		@mixin col6;
	}

	.colSm7 {
		@mixin col7;
	}

	.colSm8 {
		@mixin col8;
	}

	.colSm9 {
		@mixin col9;
	}

	.colSm10 {
		@mixin col10;
	}

	.colSm11 {
		@mixin col11;
	}

	.colSm12 {
		@mixin col12;
	}

	.orderSmFirst {
		order: -1;
	}

	.orderSmLast {
		order: 13;
	}
}

@media (--screen-md) {
	.colMd {
		@mixin col;
	}

	.colMd {
		@mixin col;
	}

	.colMdAuto {
		@mixin colAuto;
	}

	.colMd1 {
		@mixin col1;
	}

	.colMd2 {
		@mixin col2;
	}

	.colMd3 {
		@mixin col3;
	}

	.colMd4 {
		@mixin col4;
	}

	.colMd5 {
		@mixin col5;
	}

	.colMd6 {
		@mixin col6;
	}

	.colMd7 {
		@mixin col7;
	}

	.colMd8 {
		@mixin col8;
	}

	.colMd9 {
		@mixin col9;
	}

	.colMd10 {
		@mixin col10;
	}

	.colMd11 {
		@mixin col11;
	}

	.colMd12 {
		@mixin col12;
	}

	.orderMdFirst {
		order: -1;
	}

	.orderMdLast {
		order: 13;
	}
}

@media (--screen-lg) {
	.colLg {
		@mixin col;
	}

	.colLgAuto {
		@mixin colAuto;
	}

	.colLg1 {
		@mixin col1;
	}

	.colLg2 {
		@mixin col2;
	}

	.colLg3 {
		@mixin col3;
	}

	.colLg4 {
		@mixin col4;
	}

	.colLg5 {
		@mixin col5;
	}

	.colLg6 {
		@mixin col6;
	}

	.colLg7 {
		@mixin col7;
	}

	.colLg8 {
		@mixin col8;
	}

	.colLg9 {
		@mixin col9;
	}

	.colLg10 {
		@mixin col10;
	}

	.colLg11 {
		@mixin col11;
	}

	.colLg12 {
		@mixin col12;
	}

	.orderLgFirst {
		order: -1;
	}

	.orderLgLast {
		order: 13;
	}
}

@media (--screen-xl) {
	.colXl {
		@mixin col;
	}

	.colXlAuto {
		@mixin colAuto;
	}

	.colXl1 {
		@mixin col1;
	}

	.colXl2 {
		@mixin col2;
	}

	.colXl3 {
		@mixin col3;
	}

	.colXl4 {
		@mixin col4;
	}

	.colXl5 {
		@mixin col5;
	}

	.colXl6 {
		@mixin col6;
	}

	.colXl7 {
		@mixin col7;
	}

	.colXl8 {
		@mixin col8;
	}

	.colXl9 {
		@mixin col9;
	}

	.colXl10 {
		@mixin col10;
	}

	.colXl11 {
		@mixin col11;
	}

	.colXl12 {
		@mixin col12;
	}

	.orderXlFirst {
		order: -1;
	}

	.orderXlLast {
		order: 13;
	}
}

@media (--screen-xxl) {
	.colXxl {
		@mixin col;
	}

	.colXxlAuto {
		@mixin colAuto;
	}

	.colXxl1 {
		@mixin col1;
	}

	.colXxl2 {
		@mixin col2;
	}

	.colXxl3 {
		@mixin col3;
	}

	.colXxl4 {
		@mixin col4;
	}

	.colXxl5 {
		@mixin col5;
	}

	.colXxl6 {
		@mixin col6;
	}

	.colXxl7 {
		@mixin col7;
	}

	.colXxl8 {
		@mixin col8;
	}

	.colXxl9 {
		@mixin col9;
	}

	.colXxl10 {
		@mixin col10;
	}

	.colXxl11 {
		@mixin col11;
	}

	.colXxl12 {
		@mixin col12;
	}

	.orderXxlFirst {
		order: -1;
	}

	.orderXxlLast {
		order: 13;
	}
}

@media (--screen-xxxl) {
	.colXxxl {
		@mixin col;
	}

	.colXxxlAuto {
		@mixin colAuto;
	}

	.colXxxl1 {
		@mixin col1;
	}

	.colXxxl2 {
		@mixin col2;
	}

	.colXxxl3 {
		@mixin col3;
	}

	.colXxxl4 {
		@mixin col4;
	}

	.colXxxl5 {
		@mixin col5;
	}

	.colXxxl6 {
		@mixin col6;
	}

	.colXxxl7 {
		@mixin col7;
	}

	.colXxxl8 {
		@mixin col8;
	}

	.colXxxl9 {
		@mixin col9;
	}

	.colXxxl10 {
		@mixin col10;
	}

	.colXxxl11 {
		@mixin col11;
	}

	.colXxxl12 {
		@mixin col12;
	}

	.orderXxxlFirst {
		order: -1;
	}

	.orderXxxlLast {
		order: 13;
	}
}
```