const runner = require('./index');

const invalidInput = '';

describe('index => ', () => {

    it('no type still runs general rules', () => {
        const results = runner.apply(invalidInput);
        expect(results.details[0].type).toEqual('General');
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
        expect(results.details[0].brokenRules.includes('H1 title must immediately follow metadata')).toBe(true);
    });

});