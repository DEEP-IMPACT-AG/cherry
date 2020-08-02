
# CSS Cherry Grid

Cherry’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together.

---

## Install

💾 [Repository](https://github.com/DEEP-IMPACT-AG/cherry-grid) - 📦 [NPM Package](https://www.npmjs.com/package/cherry-grid) - 📌 [CSS Direct Link](https://cherry-design.s3-eu-west-1.amazonaws.com/cherry-grid/v.0.1.30.css)

**To install Cherry Grid, run the command:**

```shell
npm install cherry-grid
```

Import the CSS grid file in your code:

```css
@import 'cherry-grid/dist/css/styles.css';
```

## Install from CDN
When you only need to include Cherry's CSS, you can use CherryCDN.
```html
<link 
	rel="stylesheet"
	type="text/css"
	href="https://cherry-design.s3-eu-west-1.amazonaws.com/cherry-grid/v.0.1.30.css"
/>
```

### Features

|👇| Feature|
|:-:|:---|
|💻| Responsive|
|📱| Mobile first|
|📦| 12 columns grid|
|🍦| Vanilla CSS|
|🚀| Components|
|↔️| Column gaps|

### Sample usage
Below you will find a typical example of the grid usage.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<link 
			rel="stylesheet"
			type="text/css"
			href="https://cherry-design.s3-eu-west-1.amazonaws.com/cherry-grid/v.0.1.30.css"
		/>
	</head>
	<body>
		<!--- Grid Container -->
		<div class="container">
			<!--- Grid Row -->
			<div class="row">
				<!--- Grid Columns -->
				<div class="col-sm-4 col-lg-6">
					<div>Child 1</div>
				</div>
				<div class="col-sm-4 col-lg-6">
					<div>Child 2</div>
				</div>
				<div class="col-sm-4 col-lg-12">
					<div>Child 3</div>
				</div>
			</div>
		</div>
	</body>
</html>
```

  ***

### Container
The `class="container"` element is meant to be always the top level parent.
  ***
**Available variations:**
  ***
- `class="container-fluid"` - Defines wheather the container should go full width, thus fluid.
- `class="container-child"` - Defines wheather the container is a child of another container, thus removing additional paddings on the sides.


  ***

### Row
The `class="row"` element is a direct or non direct child of the `class="container"` element.
  ***
**Available variations:**
  ***
- `class="align-items-[variation]"` Use the align-items class name to align the items vertically.

	**Variations:** `stretch`, `center`, `flex-start`, `flex-end`, `baseline`, `initial`.
- `class="justify-content-[variation]"` - *string* - Use the justify-content property to align the items horizontally.

	**Variations:** `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `initial`.
- `class="[media-query]-gaps-[variation]"` - *string* - Use the gaps property to adjust the spacing between columns.

	**Media-Queries:** `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `xxxl`.

	**Variations:** `none`, `default`, `medium`, `big`.


  ***

### Col
The `class="col"` elements should **always** be direct childen of the `class="row"` element. 

  ***
**Available variations:**
  ***
- `class="text-align-[variation]"` - *string* - Text align property.

	**Variations:** `right`, `left`, `center`.
- `class="col-[1-12|auto]"` - Column size for **all** media query.
- `class="col-xs-[1-12|auto]"` - Define which grid layout should be displayed on `xs` media query.
- `class="col-sm-[1-12|auto]"` - Define which grid layout should be displayed on `sm` media query.
- `class="col-sm-[1-12|auto]"` - Define which grid layout should be displayed on `sm` media query.
- `class="col-md-[1-12|auto]"` - Define which grid layout should be displayed on `md` media query.
- `class="col-lg-[1-12|auto]"` - Define which grid layout should be displayed on `lg` media query.
- `class="col-xl-[1-12|auto]"` - Define which grid layout should be displayed on `xl` media query.
- `class="col-xxl-[1-12|auto]"` - Define which grid layout should be displayed on `xxl` media query.
- `class="col-xxxl-[1-12|auto]"` - Define which grid layout should be displayed on `xxxl` media query.
- `class="col-order-first"` - Define if the element should go first for **all** media query.
- `class="col-xs-order-first"` - Define if the element should go first on `xs` media query.
- `class="col-sm-order-first"` - Define if the element should go first on `sm` media query.
- `class="col-md-order-first"` - Define if the element should go first on `md` media query.
- `class="col-lg-order-first"` - Define if the element should go first on `lg` media query.
- `class="col-xl-order-first"` - Define if the element should go first on `xl` media query.
- `class="col-xxl-order-first"` - Define if the element should go first on `xxl` media query.
- `class="col-xxxl-order-first"` - Define if the element should go first on `xxxl` media query.
- `class="col-order-last"` - Define if the element should go last for **all** media query.
- `class="col-xs-order-last"` - Define if the element should go last on `xs` media query.
- `class="col-sm-order-last"` - Define if the element should go last on `sm` media query.
- `class="col-md-order-last"` - Define if the element should go last on `md` media query.
- `class="col-lg-order-last"` - Define if the element should go last on `lg` media query.
- `class="col-xsl-order-last"` - Define if the element should go last on `xl` media query.
- `class="col-xxl-order-last"` - Define if the element should go last on `xxl` media query.
- `class="col-xxxl-order-last"` - Define if the element should go last on `xxxl` media query.


  ***

### 12 Column - Grid System
Cherry's grid system allows up to 12 columns across the page.
If you do not want to use all 12 column individually, you can group the columns together to create wider columns:
