var postcss = require('postcss');

var plugin = require('./');

function run(input, output) {
    return postcss([plugin()])
        .process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

it('does something', () => {
    return run(
        `
            @import "../../../../../../../node_modules/billing-ui/variables";
            @import "../../../../../../../node_modules/billing-ui/placeholders";
            @import "./newStyle.scss";
            @import "../../../../newStyle.scss";
        `,
        `
            @import "~billing-ui/variables";
            @import "~billing-ui/placeholders";
            @import "./newStyle.scss";
            @import "../../../../newStyle.scss";
        `
    );
});
