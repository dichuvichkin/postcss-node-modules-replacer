# postcss-node-modules-replacer [![Build Status][ci-img]][ci]

[PostCSS] plugin replaces path from node_modules to ~.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/dichuvichkin/postcss-node-modules-replacer.svg
[ci]:      https://travis-ci.org/dichuvichkin/postcss-node-modules-replacer

```scss
.foo {
    @import "../../../../../../../node_modules/billing-ui/variables";
    @import "../../../../../../../node_modules/billing-ui/placeholders";
    @import "./newStyle.scss";
    @import "../../../../newStyle.scss";
}
```

```scss
.foo {
    @import "~billing-ui/variables";
    @import "~billing-ui/placeholders";
    @import "./newStyle.scss";
    @import "../../../../newStyle.scss";
}
```

## Usage

```js
postcss([ require('postcss-node-modules-replacer') ])
```

See [PostCSS] docs for examples for your environment.
