```css
/*********************************************************************
**********************************************************************
Cherry - Design System
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
}

.container {
	margin: auto;
	max-width: var(--max-width);
	padding-right: 20px;
	padding-right: var(--margin-container-mobile);
	padding-left: 20px;
	padding-left: var(--margin-container-mobile);
}

@media (min-width: 992px) {
	.container {
		padding-right: 20px;
		padding-right: var(--margin-container-desktop);
		padding-left: 20px;
		padding-left: var(--margin-container-desktop);
	}
}

@media (min-width: 1920px) {
	.container {
		max-width: 1704px;
	}
}

.containerFluid {
	width: 100%;
	max-width: none;
	padding-right: 20px;
	padding-right: var(--margin-container-mobile);
	padding-left: 20px;
	padding-left: var(--margin-container-mobile);
	margin-right: auto;
	margin-left: auto;
}

@media (min-width: 992px) {
	.containerFluid {
		padding-right: 20px;
		padding-right: var(--margin-container-desktop);
		padding-left: 20px;
		padding-left: var(--margin-container-desktop);
	}
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
	position: relative;
	width: 100%;
	min-height: 1px;
	padding-right: 10px;
	padding-right: var(--gutter-col-mobile);
	padding-left: 10px;
	padding-left: var(--gutter-col-mobile);
	flex-basis: 0;
	flex-grow: 1;
	max-width: 100%;
	box-sizing: border-box;
}

@media (min-width: 992px) {
	.col {
		padding-right: 10px;
		padding-right: var(--gutter-col-desktop);
		padding-left: 10px;
		padding-left: var(--gutter-col-desktop);
	}
}

.colAuto {
	flex: 0 0 auto;
	width: auto;
	max-width: none;
}

.col1 {
	flex: 0 0 8.333333%;
	max-width: 8.333333%;
}

.col2 {
	flex: 0 0 16.666667%;
	max-width: 16.666667%;
}

.col3 {
	flex: 0 0 25%;
	max-width: 25%;
}

.col4 {
	flex: 0 0 33.333333%;
	max-width: 33.333333%;
}

.col5 {
	flex: 0 0 41.666667%;
	max-width: 41.666667%;
}

.col6 {
	flex: 0 0 50%;
	max-width: 50%;
}

.col7 {
	flex: 0 0 58.333333%;
	max-width: 58.333333%;
}

.col8 {
	flex: 0 0 66.666667%;
	max-width: 66.666667%;
}

.col9 {
	flex: 0 0 75%;
	max-width: 75%;
}

.col10 {
	flex: 0 0 83.333333%;
	max-width: 83.333333%;
}

.col11 {
	flex: 0 0 91.666667%;
	max-width: 91.666667%;
}

.col12 {
	flex: 0 0 100%;
	max-width: 100%;
}

.orderFirst {
	order: -1;
}

.orderLast {
	order: 13;
}

@media (min-width: 576px) {
	.colSm {
		position: relative;
		width: 100%;
		min-height: 1px;
		padding-right: 10px;
		padding-right: var(--gutter-col-mobile);
		padding-left: 10px;
		padding-left: var(--gutter-col-mobile);
		flex-basis: 0;
		flex-grow: 1;
		max-width: 100%;
		box-sizing: border-box;
	}

	@media (min-width: 992px) {
		.colSm {
			padding-right: 10px;
			padding-right: var(--gutter-col-desktop);
			padding-left: 10px;
			padding-left: var(--gutter-col-desktop);
		}
	}

	.colSmAuto {
		flex: 0 0 auto;
		width: auto;
		max-width: none;
	}

	.colSm1 {
		flex: 0 0 8.333333%;
		max-width: 8.333333%;
	}

	.colSm2 {
		flex: 0 0 16.666667%;
		max-width: 16.666667%;
	}

	.colSm3 {
		flex: 0 0 25%;
		max-width: 25%;
	}

	.colSm4 {
		flex: 0 0 33.333333%;
		max-width: 33.333333%;
	}

	.colSm5 {
		flex: 0 0 41.666667%;
		max-width: 41.666667%;
	}

	.colSm6 {
		flex: 0 0 50%;
		max-width: 50%;
	}

	.colSm7 {
		flex: 0 0 58.333333%;
		max-width: 58.333333%;
	}

	.colSm8 {
		flex: 0 0 66.666667%;
		max-width: 66.666667%;
	}

	.colSm9 {
		flex: 0 0 75%;
		max-width: 75%;
	}

	.colSm10 {
		flex: 0 0 83.333333%;
		max-width: 83.333333%;
	}

	.colSm11 {
		flex: 0 0 91.666667%;
		max-width: 91.666667%;
	}

	.colSm12 {
		flex: 0 0 100%;
		max-width: 100%;
	}

	.orderSmFirst {
		order: -1;
	}

	.orderSmLast {
		order: 13;
	}
}

@media (min-width: 768px) {
	.colMd {
		position: relative;
		width: 100%;
		min-height: 1px;
		padding-right: 10px;
		padding-right: var(--gutter-col-mobile);
		padding-left: 10px;
		padding-left: var(--gutter-col-mobile);
		flex-basis: 0;
		flex-grow: 1;
		max-width: 100%;
		box-sizing: border-box;
	}

	@media (min-width: 992px) {
		.colMd {
			padding-right: 10px;
			padding-right: var(--gutter-col-desktop);
			padding-left: 10px;
			padding-left: var(--gutter-col-desktop);
		}
	}

	.colMdAuto {
		flex: 0 0 auto;
		width: auto;
		max-width: none;
	}

	.colMd1 {
		flex: 0 0 8.333333%;
		max-width: 8.333333%;
	}

	.colMd2 {
		flex: 0 0 16.666667%;
		max-width: 16.666667%;
	}

	.colMd3 {
		flex: 0 0 25%;
		max-width: 25%;
	}

	.colMd4 {
		flex: 0 0 33.333333%;
		max-width: 33.333333%;
	}

	.colMd5 {
		flex: 0 0 41.666667%;
		max-width: 41.666667%;
	}

	.colMd6 {
		flex: 0 0 50%;
		max-width: 50%;
	}

	.colMd7 {
		flex: 0 0 58.333333%;
		max-width: 58.333333%;
	}

	.colMd8 {
		flex: 0 0 66.666667%;
		max-width: 66.666667%;
	}

	.colMd9 {
		flex: 0 0 75%;
		max-width: 75%;
	}

	.colMd10 {
		flex: 0 0 83.333333%;
		max-width: 83.333333%;
	}

	.colMd11 {
		flex: 0 0 91.666667%;
		max-width: 91.666667%;
	}

	.colMd12 {
		flex: 0 0 100%;
		max-width: 100%;
	}

	.orderMdFirst {
		order: -1;
	}

	.orderMdLast {
		order: 13;
	}
}

@media (min-width: 992px) {
	.colLg {
		position: relative;
		width: 100%;
		min-height: 1px;
		padding-right: 10px;
		padding-right: var(--gutter-col-mobile);
		padding-left: 10px;
		padding-left: var(--gutter-col-mobile);
		flex-basis: 0;
		flex-grow: 1;
		max-width: 100%;
		box-sizing: border-box;
		padding-right: var(--gutter-col-desktop);
		padding-left: var(--gutter-col-desktop);
	}

	.colLgAuto {
		flex: 0 0 auto;
		width: auto;
		max-width: none;
	}

	.colLg1 {
		flex: 0 0 8.333333%;
		max-width: 8.333333%;
	}

	.colLg2 {
		flex: 0 0 16.666667%;
		max-width: 16.666667%;
	}

	.colLg3 {
		flex: 0 0 25%;
		max-width: 25%;
	}

	.colLg4 {
		flex: 0 0 33.333333%;
		max-width: 33.333333%;
	}

	.colLg5 {
		flex: 0 0 41.666667%;
		max-width: 41.666667%;
	}

	.colLg6 {
		flex: 0 0 50%;
		max-width: 50%;
	}

	.colLg7 {
		flex: 0 0 58.333333%;
		max-width: 58.333333%;
	}

	.colLg8 {
		flex: 0 0 66.666667%;
		max-width: 66.666667%;
	}

	.colLg9 {
		flex: 0 0 75%;
		max-width: 75%;
	}

	.colLg10 {
		flex: 0 0 83.333333%;
		max-width: 83.333333%;
	}

	.colLg11 {
		flex: 0 0 91.666667%;
		max-width: 91.666667%;
	}

	.colLg12 {
		flex: 0 0 100%;
		max-width: 100%;
	}

	.orderLgFirst {
		order: -1;
	}

	.orderLgLast {
		order: 13;
	}
}

@media (min-width: 1200px) {
	.colXl {
		position: relative;
		width: 100%;
		min-height: 1px;
		padding-right: 10px;
		padding-right: var(--gutter-col-mobile);
		padding-left: 10px;
		padding-left: var(--gutter-col-mobile);
		flex-basis: 0;
		flex-grow: 1;
		max-width: 100%;
		box-sizing: border-box;
	}

	@media (min-width: 992px) {
		.colXl {
			padding-right: 10px;
			padding-right: var(--gutter-col-desktop);
			padding-left: 10px;
			padding-left: var(--gutter-col-desktop);
		}
	}

	.colXlAuto {
		flex: 0 0 auto;
		width: auto;
		max-width: none;
	}

	.colXl1 {
		flex: 0 0 8.333333%;
		max-width: 8.333333%;
	}

	.colXl2 {
		flex: 0 0 16.666667%;
		max-width: 16.666667%;
	}

	.colXl3 {
		flex: 0 0 25%;
		max-width: 25%;
	}

	.colXl4 {
		flex: 0 0 33.333333%;
		max-width: 33.333333%;
	}

	.colXl5 {
		flex: 0 0 41.666667%;
		max-width: 41.666667%;
	}

	.colXl6 {
		flex: 0 0 50%;
		max-width: 50%;
	}

	.colXl7 {
		flex: 0 0 58.333333%;
		max-width: 58.333333%;
	}

	.colXl8 {
		flex: 0 0 66.666667%;
		max-width: 66.666667%;
	}

	.colXl9 {
		flex: 0 0 75%;
		max-width: 75%;
	}

	.colXl10 {
		flex: 0 0 83.333333%;
		max-width: 83.333333%;
	}

	.colXl11 {
		flex: 0 0 91.666667%;
		max-width: 91.666667%;
	}

	.colXl12 {
		flex: 0 0 100%;
		max-width: 100%;
	}

	.orderXlFirst {
		order: -1;
	}

	.orderXlLast {
		order: 13;
	}
}

@media (min-width: 1440px) {
	.colXxl {
		position: relative;
		width: 100%;
		min-height: 1px;
		padding-right: 10px;
		padding-right: var(--gutter-col-mobile);
		padding-left: 10px;
		padding-left: var(--gutter-col-mobile);
		flex-basis: 0;
		flex-grow: 1;
		max-width: 100%;
		box-sizing: border-box;
	}

	@media (min-width: 992px) {
		.colXxl {
			padding-right: 10px;
			padding-right: var(--gutter-col-desktop);
			padding-left: 10px;
			padding-left: var(--gutter-col-desktop);
		}
	}

	.colXxlAuto {
		flex: 0 0 auto;
		width: auto;
		max-width: none;
	}

	.colXxl1 {
		flex: 0 0 8.333333%;
		max-width: 8.333333%;
	}

	.colXxl2 {
		flex: 0 0 16.666667%;
		max-width: 16.666667%;
	}

	.colXxl3 {
		flex: 0 0 25%;
		max-width: 25%;
	}

	.colXxl4 {
		flex: 0 0 33.333333%;
		max-width: 33.333333%;
	}

	.colXxl5 {
		flex: 0 0 41.666667%;
		max-width: 41.666667%;
	}

	.colXxl6 {
		flex: 0 0 50%;
		max-width: 50%;
	}

	.colXxl7 {
		flex: 0 0 58.333333%;
		max-width: 58.333333%;
	}

	.colXxl8 {
		flex: 0 0 66.666667%;
		max-width: 66.666667%;
	}

	.colXxl9 {
		flex: 0 0 75%;
		max-width: 75%;
	}

	.colXxl10 {
		flex: 0 0 83.333333%;
		max-width: 83.333333%;
	}

	.colXxl11 {
		flex: 0 0 91.666667%;
		max-width: 91.666667%;
	}

	.colXxl12 {
		flex: 0 0 100%;
		max-width: 100%;
	}

	.orderXxlFirst {
		order: -1;
	}

	.orderXxlLast {
		order: 13;
	}
}

@media (min-width: 1920px) {
	.colXxxl {
		position: relative;
		width: 100%;
		min-height: 1px;
		padding-right: 10px;
		padding-right: var(--gutter-col-mobile);
		padding-left: 10px;
		padding-left: var(--gutter-col-mobile);
		flex-basis: 0;
		flex-grow: 1;
		max-width: 100%;
		box-sizing: border-box;
	}

	@media (min-width: 992px) {
		.colXxxl {
			padding-right: 10px;
			padding-right: var(--gutter-col-desktop);
			padding-left: 10px;
			padding-left: var(--gutter-col-desktop);
		}
	}

	.colXxxlAuto {
		flex: 0 0 auto;
		width: auto;
		max-width: none;
	}

	.colXxxl1 {
		flex: 0 0 8.333333%;
		max-width: 8.333333%;
	}

	.colXxxl2 {
		flex: 0 0 16.666667%;
		max-width: 16.666667%;
	}

	.colXxxl3 {
		flex: 0 0 25%;
		max-width: 25%;
	}

	.colXxxl4 {
		flex: 0 0 33.333333%;
		max-width: 33.333333%;
	}

	.colXxxl5 {
		flex: 0 0 41.666667%;
		max-width: 41.666667%;
	}

	.colXxxl6 {
		flex: 0 0 50%;
		max-width: 50%;
	}

	.colXxxl7 {
		flex: 0 0 58.333333%;
		max-width: 58.333333%;
	}

	.colXxxl8 {
		flex: 0 0 66.666667%;
		max-width: 66.666667%;
	}

	.colXxxl9 {
		flex: 0 0 75%;
		max-width: 75%;
	}

	.colXxxl10 {
		flex: 0 0 83.333333%;
		max-width: 83.333333%;
	}

	.colXxxl11 {
		flex: 0 0 91.666667%;
		max-width: 91.666667%;
	}

	.colXxxl12 {
		flex: 0 0 100%;
		max-width: 100%;
	}

	.orderXxxlFirst {
		order: -1;
	}

	.orderXxxlLast {
		order: 13;
	}
}

.row {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 0 -20px;
	margin: 0 var(--margin-row-mobile);
}

@media (min-width: 992px) {
	.row {
		margin: 0 -20px;
		margin: 0 var(--margin-row-desktop);
	}
}

.justifyContent-flex-end {
	justify-content: flex-end;
}

.justifyContent-flex-start {
	justify-content: flex-start;
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

:global .container {
	margin: auto;
	max-width: var(--max-width);
	padding-right: 20px;
	padding-right: var(--margin-container-mobile);
	padding-left: 20px;
	padding-left: var(--margin-container-mobile);
}

@media (min-width: 992px) {
	:global .container {
		padding-right: 20px;
		padding-right: var(--margin-container-desktop);
		padding-left: 20px;
		padding-left: var(--margin-container-desktop);
	}
}

@media (min-width: 1920px) {
	:global .container {
		max-width: 1704px;
	}
}

:global .row {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 0 -20px;
	margin: 0 var(--margin-row-mobile);
}

@media (min-width: 992px) {
	:global .row {
		margin: 0 -20px;
		margin: 0 var(--margin-row-desktop);
	}
}

:global .col1 {
	flex: 0 0 8.333333%;
	max-width: 8.333333%;
}

:global .col2 {
	flex: 0 0 16.666667%;
	max-width: 16.666667%;
}

:global .col3 {
	flex: 0 0 25%;
	max-width: 25%;
}

:global .col4 {
	flex: 0 0 33.333333%;
	max-width: 33.333333%;
}

:global .col5 {
	flex: 0 0 41.666667%;
	max-width: 41.666667%;
}

:global .col6 {
	flex: 0 0 50%;
	max-width: 50%;
}

:global .col7 {
	flex: 0 0 58.333333%;
	max-width: 58.333333%;
}

:global .col8 {
	flex: 0 0 66.666667%;
	max-width: 66.666667%;
}

:global .col9 {
	flex: 0 0 75%;
	max-width: 75%;
}

:global .col10 {
	flex: 0 0 83.333333%;
	max-width: 83.333333%;
}

:global .col11 {
	flex: 0 0 91.666667%;
	max-width: 91.666667%;
}

:global .col12 {
	flex: 0 0 100%;
	max-width: 100%;
}

@media (min-width: 0) {
	:global .col1-xs {
		flex: 0 0 8.333333%;
		max-width: 8.333333%;
	}
}

@media (min-width: 0) {
	:global .col2-xs {
		flex: 0 0 16.666667%;
		max-width: 16.666667%;
	}
}

@media (min-width: 0) {
	:global .col3-xs {
		flex: 0 0 25%;
		max-width: 25%;
	}
}

@media (min-width: 0) {
	:global .col4-xs {
		flex: 0 0 33.333333%;
		max-width: 33.333333%;
	}
}

@media (min-width: 0) {
	:global .col5-xs {
		flex: 0 0 41.666667%;
		max-width: 41.666667%;
	}
}

@media (min-width: 0) {
	:global .col6-xs {
		flex: 0 0 50%;
		max-width: 50%;
	}
}

@media (min-width: 0) {
	:global .col7-xs {
		flex: 0 0 58.333333%;
		max-width: 58.333333%;
	}
}

@media (min-width: 0) {
	:global .col8-xs {
		flex: 0 0 66.666667%;
		max-width: 66.666667%;
	}
}

@media (min-width: 0) {
	:global .col9-xs {
		flex: 0 0 75%;
		max-width: 75%;
	}
}

@media (min-width: 0) {
	:global .col10-xs {
		flex: 0 0 83.333333%;
		max-width: 83.333333%;
	}
}

@media (min-width: 0) {
	:global .col11-xs {
		flex: 0 0 91.666667%;
		max-width: 91.666667%;
	}
}

@media (min-width: 0) {
	:global .col12-xs {
		flex: 0 0 100%;
		max-width: 100%;
	}
}

@media (min-width: 576px) {
	:global .col1-sm {
		flex: 0 0 8.333333%;
		max-width: 8.333333%;
	}
}

@media (min-width: 576px) {
	:global .col2-sm {
		flex: 0 0 16.666667%;
		max-width: 16.666667%;
	}
}

@media (min-width: 576px) {
	:global .col3-sm {
		flex: 0 0 25%;
		max-width: 25%;
	}
}

@media (min-width: 576px) {
	:global .col4-sm {
		flex: 0 0 33.333333%;
		max-width: 33.333333%;
	}
}

@media (min-width: 576px) {
	:global .col5-sm {
		flex: 0 0 41.666667%;
		max-width: 41.666667%;
	}
}

@media (min-width: 576px) {
	:global .col6-sm {
		flex: 0 0 50%;
		max-width: 50%;
	}
}

@media (min-width: 576px) {
	:global .col7-sm {
		flex: 0 0 58.333333%;
		max-width: 58.333333%;
	}
}

@media (min-width: 576px) {
	:global .col8-sm {
		flex: 0 0 66.666667%;
		max-width: 66.666667%;
	}
}

@media (min-width: 576px) {
	:global .col9-sm {
		flex: 0 0 75%;
		max-width: 75%;
	}
}

@media (min-width: 576px) {
	:global .col10-sm {
		flex: 0 0 83.333333%;
		max-width: 83.333333%;
	}
}

@media (min-width: 576px) {
	:global .col11-sm {
		flex: 0 0 91.666667%;
		max-width: 91.666667%;
	}
}

@media (min-width: 576px) {
	:global .col12-sm {
		flex: 0 0 100%;
		max-width: 100%;
	}
}

@media (min-width: 768px) {
	:global .col1-md {
		flex: 0 0 8.333333%;
		max-width: 8.333333%;
	}
}

@media (min-width: 768px) {
	:global .col2-md {
		flex: 0 0 16.666667%;
		max-width: 16.666667%;
	}
}

@media (min-width: 768px) {
	:global .col3-md {
		flex: 0 0 25%;
		max-width: 25%;
	}
}

@media (min-width: 768px) {
	:global .col4-md {
		flex: 0 0 33.333333%;
		max-width: 33.333333%;
	}
}

@media (min-width: 768px) {
	:global .col5-md {
		flex: 0 0 41.666667%;
		max-width: 41.666667%;
	}
}

@media (min-width: 768px) {
	:global .col6-md {
		flex: 0 0 50%;
		max-width: 50%;
	}
}

@media (min-width: 768px) {
	:global .col7-md {
		flex: 0 0 58.333333%;
		max-width: 58.333333%;
	}
}

@media (min-width: 768px) {
	:global .col8-md {
		flex: 0 0 66.666667%;
		max-width: 66.666667%;
	}
}

@media (min-width: 768px) {
	:global .col9-md {
		flex: 0 0 75%;
		max-width: 75%;
	}
}

@media (min-width: 768px) {
	:global .col10-md {
		flex: 0 0 83.333333%;
		max-width: 83.333333%;
	}
}

@media (min-width: 768px) {
	:global .col11-md {
		flex: 0 0 91.666667%;
		max-width: 91.666667%;
	}
}

@media (min-width: 768px) {
	:global .col12-md {
		flex: 0 0 100%;
		max-width: 100%;
	}
}

@media (min-width: 992px) {
	:global .col1-lg {
		flex: 0 0 8.333333%;
		max-width: 8.333333%;
	}
}

@media (min-width: 992px) {
	:global .col2-lg {
		flex: 0 0 16.666667%;
		max-width: 16.666667%;
	}
}

@media (min-width: 992px) {
	:global .col3-lg {
		flex: 0 0 25%;
		max-width: 25%;
	}
}

@media (min-width: 992px) {
	:global .col4-lg {
		flex: 0 0 33.333333%;
		max-width: 33.333333%;
	}
}

@media (min-width: 992px) {
	:global .col5-lg {
		flex: 0 0 41.666667%;
		max-width: 41.666667%;
	}
}

@media (min-width: 992px) {
	:global .col6-lg {
		flex: 0 0 50%;
		max-width: 50%;
	}
}

@media (min-width: 992px) {
	:global .col7-lg {
		flex: 0 0 58.333333%;
		max-width: 58.333333%;
	}
}

@media (min-width: 992px) {
	:global .col8-lg {
		flex: 0 0 66.666667%;
		max-width: 66.666667%;
	}
}

@media (min-width: 992px) {
	:global .col9-lg {
		flex: 0 0 75%;
		max-width: 75%;
	}
}

@media (min-width: 992px) {
	:global .col10-lg {
		flex: 0 0 83.333333%;
		max-width: 83.333333%;
	}
}

@media (min-width: 992px) {
	:global .col11-lg {
		flex: 0 0 91.666667%;
		max-width: 91.666667%;
	}
}

@media (min-width: 992px) {
	:global .col12-lg {
		flex: 0 0 100%;
		max-width: 100%;
	}
}

@media (min-width: 1200px) {
	:global .col1-xl {
		flex: 0 0 8.333333%;
		max-width: 8.333333%;
	}
}

@media (min-width: 1200px) {
	:global .col2-xl {
		flex: 0 0 16.666667%;
		max-width: 16.666667%;
	}
}

@media (min-width: 1200px) {
	:global .col3-xl {
		flex: 0 0 25%;
		max-width: 25%;
	}
}

@media (min-width: 1200px) {
	:global .col4-xl {
		flex: 0 0 33.333333%;
		max-width: 33.333333%;
	}
}

@media (min-width: 1200px) {
	:global .col5-xl {
		flex: 0 0 41.666667%;
		max-width: 41.666667%;
	}
}

@media (min-width: 1200px) {
	:global .col6-xl {
		flex: 0 0 50%;
		max-width: 50%;
	}
}

@media (min-width: 1200px) {
	:global .col7-xl {
		flex: 0 0 58.333333%;
		max-width: 58.333333%;
	}
}

@media (min-width: 1200px) {
	:global .col8-xl {
		flex: 0 0 66.666667%;
		max-width: 66.666667%;
	}
}

@media (min-width: 1200px) {
	:global .col9-xl {
		flex: 0 0 75%;
		max-width: 75%;
	}
}

@media (min-width: 1200px) {
	:global .col10-xl {
		flex: 0 0 83.333333%;
		max-width: 83.333333%;
	}
}

@media (min-width: 1200px) {
	:global .col11-xl {
		flex: 0 0 91.666667%;
		max-width: 91.666667%;
	}
}

@media (min-width: 1200px) {
	:global .col12-xl {
		flex: 0 0 100%;
		max-width: 100%;
	}
}

@media (min-width: 1440px) {
	:global .col1-xxl {
		flex: 0 0 8.333333%;
		max-width: 8.333333%;
	}
}

@media (min-width: 1440px) {
	:global .col2-xxl {
		flex: 0 0 16.666667%;
		max-width: 16.666667%;
	}
}

@media (min-width: 1440px) {
	:global .col3-xxl {
		flex: 0 0 25%;
		max-width: 25%;
	}
}

@media (min-width: 1440px) {
	:global .col4-xxl {
		flex: 0 0 33.333333%;
		max-width: 33.333333%;
	}
}

@media (min-width: 1440px) {
	:global .col5-xxl {
		flex: 0 0 41.666667%;
		max-width: 41.666667%;
	}
}

@media (min-width: 1440px) {
	:global .col6-xxl {
		flex: 0 0 50%;
		max-width: 50%;
	}
}

@media (min-width: 1440px) {
	:global .col7-xxl {
		flex: 0 0 58.333333%;
		max-width: 58.333333%;
	}
}

@media (min-width: 1440px) {
	:global .col8-xxl {
		flex: 0 0 66.666667%;
		max-width: 66.666667%;
	}
}

@media (min-width: 1440px) {
	:global .col9-xxl {
		flex: 0 0 75%;
		max-width: 75%;
	}
}

@media (min-width: 1440px) {
	:global .col10-xxl {
		flex: 0 0 83.333333%;
		max-width: 83.333333%;
	}
}

@media (min-width: 1440px) {
	:global .col11-xxl {
		flex: 0 0 91.666667%;
		max-width: 91.666667%;
	}
}

@media (min-width: 1440px) {
	:global .col12-xxl {
		flex: 0 0 100%;
		max-width: 100%;
	}
}

:global {

	/* XXXL --------------------------------------------------------- */
}

@media (min-width: 1920px) {
	:global .col1-xxxl {
		flex: 0 0 8.333333%;
		max-width: 8.333333%;
	}
}

@media (min-width: 1920px) {
	:global .col2-xxxl {
		flex: 0 0 16.666667%;
		max-width: 16.666667%;
	}
}

@media (min-width: 1920px) {
	:global .col3-xxxl {
		flex: 0 0 25%;
		max-width: 25%;
	}
}

@media (min-width: 1920px) {
	:global .col4-xxxl {
		flex: 0 0 33.333333%;
		max-width: 33.333333%;
	}
}

@media (min-width: 1920px) {
	:global .col5-xxxl {
		flex: 0 0 41.666667%;
		max-width: 41.666667%;
	}
}

@media (min-width: 1920px) {
	:global .col6-xxxl {
		flex: 0 0 50%;
		max-width: 50%;
	}
}

@media (min-width: 1920px) {
	:global .col7-xxxl {
		flex: 0 0 58.333333%;
		max-width: 58.333333%;
	}
}

@media (min-width: 1920px) {
	:global .col8-xxxl {
		flex: 0 0 66.666667%;
		max-width: 66.666667%;
	}
}

@media (min-width: 1920px) {
	:global .col9-xxxl {
		flex: 0 0 75%;
		max-width: 75%;
	}
}

@media (min-width: 1920px) {
	:global .col10-xxxl {
		flex: 0 0 83.333333%;
		max-width: 83.333333%;
	}
}

@media (min-width: 1920px) {
	:global .col11-xxxl {
		flex: 0 0 91.666667%;
		max-width: 91.666667%;
	}
}

@media (min-width: 1920px) {
	:global .col12-xxxl {
		flex: 0 0 100%;
		max-width: 100%;
	}
}
```