# CSS Cherry Grid

Cherry’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together.

---

## Install from NPM

💾 [Repository](https://github.com/DEEP-IMPACT-AG/cherry-grid) - 📦 [NPM Package](https://www.npmjs.com/package/cherry-grid) - 📌 [CSS Direct Link](https://cherry-design.s3-eu-west-1.amazonaws.com/cherry-grid.css)

**To install Cherry Grid, run the command:**

```
npm install cherry-grid
```

Import the CSS grid file in your code:

```
@import 'cherry-grid/dist/css/styles.css';
```

## Install from CDN
When you only need to include Cherry's CSS, you can use CherryCDN.
```html
<link 
	rel="stylesheet"
	type="text/css"
	href="https://cherry-design.s3-eu-west-1.amazonaws.com/cherry-grid.css"
/>
```

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
			href="https://cherry-design.s3-eu-west-1.amazonaws.com/cherry-grid.css"
		/>
	</head>
	<body>
		<!--- Start Grid Container -->
		<div class="container"><!--- Grid Container -->
			<div class="row"><!--- Grid Row -->
				<div class="col4-xs col6-lg">1</div><!--- Grid Column -->
				<div class="col4-xs col6-lg">2</div><!--- Grid Column -->
				<div class="col4-xs col12-lg">3</div><!--- Grid Column -->
			</div>
		</div>
	</body>
</html>
```

### 12 Column - Grid System
Cherry's grid system allows up to 12 columns across the page.
If you do not want to use all 12 column individually, you can group the columns together to create wider columns:
