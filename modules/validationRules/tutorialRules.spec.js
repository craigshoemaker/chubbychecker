const rules = require('./tutorialRules');

const validInput = `
---
metadata
---

# Tutorial: Yep?

> [!div class="checklist"]
> * Create and connect to a VM
> * Select and use VM images
> * Resize a VM
> * Veiew and understand VM state

## Clean up resources

## Next steps`;

describe('tutorialRules => ', () => {

    describe('passes: ', () => {

        it('valid document passes all rules', () => {
            const result = rules.apply(validInput);
            expect(result.total).toEqual(result.passed);
            expect(result.allPassed).toBe(true);
        });

    });

    describe('fails: ', () => {

        it('missing required words in tutorial title"', () => {
            const invalid = validInput.replace('# Tutorial: ', '# ');
            const results = rules.apply(invalid);
            expect(results.brokenRules.includes('Required text in H1: "Tutorial: "')).toBe(true);
        });

        it('missing checklist"', () => {
            const invalid = validInput.replace('class="checklist"', '');
            const results = rules.apply(invalid);
            expect(results.brokenRules.includes('Checklist is required')).toBe(true);
        });

        it('missing required "Next steps" section', () => {
            const invalid = validInput.replace('Next steps', '');
            const results = rules.apply(invalid);
            expect(results.brokenRules.includes('Required section: "Next steps"')).toBe(true);
        });

        it('"Next steps" comes before "Clean up resources"', () => {
            const invalid = validInput.replace('# Clean up resources', '# Next steps # Clean up resources');
            const results = rules.apply(invalid);
            expect(results.brokenRules.includes('"Clean up resouces" section must appear before "Next steps" section')).toBe(true);
        });
        
        it('missing required "Next steps" section', () => {
            const invalid = validInput.replace('Next steps', '');
            const results = rules.apply(invalid);
            expect(results.brokenRules.includes('Required section: "Next steps"')).toBe(true);
        });

        it('checklist is not before first H2', () => {
            const invalid = validInput.replace('> [!div', '## Test\n\n> [!div');
            const results = rules.apply(invalid);
            expect(results.brokenRules.includes('Checklist must appear before first H2')).toBe(true);
        });

    });

});