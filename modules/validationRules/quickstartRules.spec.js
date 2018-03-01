const quickstartRules = require('./quickstartRules');

const validQuickstart = `
# Quickstart: Sample quickstart

To complete this quickstart, you need an [Azure subscription](https://azure.microsoft.com/free/?WT.mc_id=A261C142F)

## Download the sample application

## Clean up resources
this is a test

## Next steps`;

describe('quickstart-rules => ', () => {

    describe('passes: ', () => {

        it('valid document passes all rules', () => {
            const result = quickstartRules.apply(validQuickstart);
            expect(result.total).toEqual(result.passed);
            expect(result.allPassed).toBe(true);
        });

        it('is valid if no link to free account', () => {
            const result = quickstartRules.apply(validQuickstart.replace('azure.microsoft.com/free', ''));
            expect(result.total).toEqual(result.passed);
            expect(result.allPassed).toBe(true);
        });
    });

    describe('fails: ', () => {

        it('title has a lowercase "q" in "Quickstart"', () => {
            const invalid = validQuickstart.replace('Quickstart', 'quickstart');
            const results = quickstartRules.apply(invalid);
            expect(results.brokenRules.includes('Required text in H1: "Quickstart: "')).toBe(true);
        });

        it('title has no space after "Quickstart:"', () => {
            const invalid = validQuickstart.replace('Quickstart: ', 'Quickstart:');
            const results = quickstartRules.apply(invalid);
            expect(results.brokenRules.includes('Required text in H1: "Quickstart: "')).toBe(true);
        });

        it('"Next steps" comes before "Clean up resources"', () => {
            const invalid = validQuickstart.replace('# Clean up resources', '# Next steps # Clean up resources');
            const results = quickstartRules.apply(invalid);
            expect(results.brokenRules.includes('"Clean up resouces" comes before "Next steps"')).toBe(true);
        });
        
        it('missing required "Next steps" section', () => {
            const invalid = validQuickstart.replace('Next steps', '');
            const results = quickstartRules.apply(invalid);
            expect(results.brokenRules.includes('Required section: "Next steps"')).toBe(true);
        });

        it('free account link comes after first H2', () => {
            const invalid = validQuickstart.replace('# Quickstart: Sample quickstart', '# Quickstart: Sample quickstart\n## Download sample application');
            const results = quickstartRules.apply(invalid);
            expect(results.allPassed).toBe(false);
        });
    });

});