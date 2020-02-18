# Babel and Webpack Integration Setup

I'm trying to figure out how to integrate Babel and Webpack. The goal of this setup are:
- Webpack must utilize Babel as transpiler while bundling the modules.
- Babel must convert all ES6-ESNext syntax to ES5 (condition changed based on defined browser targets).
- Babel has to only include polyfills that are needed by the code by utilizing both `core-js` and `regenerator-runtime` since @babel/polyfill has been deprecated.

### Key things to remember in settings:
- Define Babel's `useBuiltIns` to either `entry` or `usage`.
- Define Babel preset in `.babelrc` rather than directly in `webpack.config.js`. Because webpack config can't recognize preset's options.