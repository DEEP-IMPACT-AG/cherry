# Styling Structure

These are the pre-defined CSS styles.

- [Styles](https://github.com/DEEP-IMPACT-AG/cherry/blob/master/src/assets/css/styles.css) - Main entry point with all imports.
- [Variables](https://github.com/DEEP-IMPACT-AG/cherry/blob/master/src/assets/css/variables.css) - Variable definitions.
- [Mixins](https://github.com/DEEP-IMPACT-AG/cherry/blob/master/src/assets/css/mixins.css) - Chunks of reusable css.
- [Globals](https://github.com/DEEP-IMPACT-AG/cherry/blob/master/src/assets/css/globals.css) - Appying the Cherry's variables to the global styles.

Add all your imports in: `styles.css`. Please note that only: `styles.css` and `variables.css` are supposed to be modified. The rest of the css is boilerplate template code, mapping the Cherry patterns, thus `mixins.css` and `globals.css` should stay untouched. 

You can import additional mixins by adding them as imports on the `styles.css`.

### File Structure
```shell
    ├── src/                     # Source files
    │   ├── assets/              # Assets directory
    │       ├── css/             # CSS files
    │       ├── fonts/           # Fonts directory
    │       ├── img/             # Image directory
```
