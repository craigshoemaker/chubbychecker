const rules = require('../validationRules')
const renderer = require('./markdownRenderer');

const input = '';
const rulesResult = rules.apply(input, 'quickstart');

describe('markdownRenderer => ', () => {

    describe('render => ', () => {

        it('renders markdown titles', () => {
            const result = renderer.render(rulesResult, 'markdown');
            expect(/\#\# .+/.test(result)).toBe(true);
        });

        it('renders markdown list items', () => {
            const result = renderer.render(rulesResult, 'markdown');
            expect(/\- .+/.test(result)).toBe(true);
            expect(/  \* .+/.test(result)).toBe(true);
        });

    });

});