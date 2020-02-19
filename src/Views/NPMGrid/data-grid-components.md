# NPM Cherry Grid

Cherry’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together.

---

## Install from NPM
💾 [Repository](https://github.com/DEEP-IMPACT-AG/cherry-grid) - 📦 [NPM Package](https://www.npmjs.com/package/cherry-grid)

**To install Cherry Grid, run the command:**
```
npm install cherry-grid
```

### Sample usage
Below you will find a typical example of the grid usage.
```javascript
import React from 'react';
import { Container, Row, Col } from 'cherry-grid';
import styles from './App.css';

function App() {
	return (
		<Container>
			<Row>
				<Col xs={4} lg={6}>
					<div>Child 1</div>
				</Col>
				<Col xs={4} lg={6}>
					<div>Child 2</div>
				</Col>
				<Col xs={4} lg={12}>
					<div>Child 3</div>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
```

### Container
The `<Container>` component is meant to be always the top level parent. They have a few properties available: 
- `className` - *string* - You can pass a className. Default: *not set*.
- `fluid` - *boolean* - Defines wheather the container should go full width, thus fluid. Default: `false`.
- `children` - *any* - Container children elements. Default: *not set*.

### Row
The `<Row>` component is a direct or non direct child of the `<Container>` component. Is comes with a few properties: 
- `className` - *string* - You can pass a className. Default: *not set*.
- `children` - *any* - Container children elements. Default: *not set*.
- `alignItems` - *string* - Use the align-items property to align the items vertically. Default: *not set*.
- `justifyContent` - *string* - Use the justify-content property to align the items horizontally. Default: *not set*.

### Col
Col stands for column. The `<Col>` component should **always** be a direct child of the `<Row>`. Available properties: 
- `id` - *string* - Columns can have html ID's. Default: *not set*.
- `className` - *string* - You can pass a className. Default: *not set*.
- `children` - *any* - Container children elements. Default: *not set*.
- `textAlign` - *string* - Text align property. Default: *not set*.
- `children` - *any* - Container children elements. Default: *not set*.
- `xs` - *number* - Define which grid layout should be rendered on `xs` media query. Default: *not set*.
- `sm` - *number* - Define which grid layout should be rendered on `sm` media query. Default: *not set*.
- `md` - *number* - Define which grid layout should be rendered on `md` media query. Default: *not set*.
- `lg` - *number* - Define which grid layout should be rendered on `lg` media query. Default: *not set*.
- `xl` - *number* - Define which grid layout should be rendered on `xl` media query. Default: *not set*.
- `xxl` - *number* - Define which grid layout should be rendered on `xxl` media query. Default: *not set*.
- `xxxl` - *number* - Define which grid layout should be rendered on `xxxl` media query. Default: *not set*.
- `first` - *boolean* - Define if the element should go first. Default: `false`.
- `firstSm` - *boolean* - Define if the element should go first on `sm` media query. Default: `false`.
- `firstMd` - *boolean* - Define if the element should go first on `md` media query. Default: `false`.
- `firstLg` - *boolean* - Define if the element should go first on `lg` media query. Default: `false`.
- `firstXl` - *boolean* - Define if the element should go first on `xl` media query. Default: `false`.
- `firstXxl` - *boolean* - Define if the element should go first on `xxl` media query. Default: `false`.
- `firstXxxl` - *boolean* - Define if the element should go first on `xxxl` media query. Default: `false`.
- `last` - *boolean* - Define if the element should go last. Default: `false`.
- `lastSm,` - *boolean* - Define if the element should go last on `sm` media query. Default: `false`.
- `lastMd` - *boolean* - Define if the element should go last on `md` media query. Default: `false`.
- `lastLg` - *boolean* - Define if the element should go last on `lg` media query. Default: `false`.
- `lastXl` - *boolean* - Define if the element should go last on `xl` media query. Default: `false`.
- `lastXxl` - *boolean* - Define if the element should go last on `xxl` media query. Default: `false`.
- `lastXxxl` - *boolean* - Define if the element should go last on `xxxl` media query. Default: `false`.

# Add Cherry's variables
If you don't have the Cherry's variables in the project yet, please add the minimum required for the Grid to work.
Import the [mixins.css](https://raw.githubusercontent.com/DEEP-IMPACT-AG/cherry/master/src/assets/css/mixins.css) and declare basic variables:
```css
@import './mixins.css';

@custom-media --screen-xs (min-width: 0);
@custom-media --screen-sm (min-width: 576px);
@custom-media --screen-md (min-width: 768px);
@custom-media --screen-lg (min-width: 992px);
@custom-media --screen-xl (min-width: 1200px);
@custom-media --screen-xxl (min-width: 1440px);
@custom-media --screen-xxxl (min-width: 1920px);

:root {
	--max-width: 1440px;

	--margin-container-mobile: 20px;
	--margin-container-desktop: 80px;
	--margin-container-child-mobile: 10px;
	--margin-container-child-desktop: 10px;

	--margin-row-mobile: -20px;
	--margin-row-desktop: -20px;
	--gutter-col-mobile: 20px;
	--gutter-col-desktop: 20px;
}
```

### 12 Column - Grid System
Cherry's grid system allows up to 12 columns across the page.
If you do not want to use all 12 column individually, you can group the columns together to create wider columns.
