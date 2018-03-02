
const rules = require('../validationRules')
const renderer = require('./index.js');

const input = '';
describe('renderer => ', () => {

    describe('render => ', () => {

        it('renders JSON by default', () => {
            const rulesResult = rules.apply(input, 'quickstart');
            const result = renderer.render(rulesResult);
            expect(result.allPassed).toEqual(false);
        });

        it('renders markdown', () => {
            const rulesResult = rules.apply(input, 'quickstart');
            const result = renderer.render(rulesResult, 'markdown');
            expect(/\#\# .+/.test(result)).toBe(true);            
            expect(/\- .+/.test(result)).toBe(true);
            expect(/  \* .+/.test(result)).toBe(true);
        });

        it('renders string', () => {
            const rulesResult = rules.apply(input, 'quickstart');
            const result = renderer.render(rulesResult, 'string');
            expect(/\.{20,}/.test(result)).toBe(true);            
            expect(/\-{20,}/.test(result)).toBe(true);
        });

    });

});