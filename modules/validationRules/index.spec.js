const runner = require('./index');

const invalidInput = '';

describe('index => ', () => {

    it('unrecognized type returns and empty object', () => {
        const results = runner.apply(invalidInput, 'foo');
        expect(results.details).toBeUndefined(0);
    });

    it('overview', () => {
        const results = runner.apply(invalidInput, 'overview');
        expect(results.allPassed).toBe(false);
        expect(results.details[1].type).toEqual('Overview');
    });

    it('quickstart', () => {
        const results = runner.apply(invalidInput, 'quickstart');
        expect(results.allPassed).toBe(false);
        expect(results.details[1].type).toEqual('Quickstart');
    });

    it('tutorial', () => {
        const results = runner.apply(invalidInput, 'tutorial');
        expect(results.allPassed).toBe(false);
        expect(results.details[1].type).toEqual('Tutorial');
    });

    it('general rules are always run', () => {
        const results = runner.apply(invalidInput, 'tutorial');
        expect(results.allPassed).toBe(false);
        expect(results.details[0].brokenRules.includes('H1 title immediately after metadata')).toBe(true);
    });

});