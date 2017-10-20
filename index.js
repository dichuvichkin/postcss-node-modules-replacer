const postcss = require('postcss');

module.exports = postcss.plugin('postcss-node-modules-replacer', () => {
    const re = new RegExp('(../){1,}(node_modules/){1}', 'g');
    return css => {
        css.walkAtRules(atRule => {
            atRule.params = atRule.params.toString().replace(re, '~');
        });
    };
});
