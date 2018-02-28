var ruleApplicator = require('./ruleApplicator');

const _module = {

    rules: [
        {
            description: 'Required text in H1: "Quickstart: "',
            apply: input => /\# ?Quickstart\: /.test(input)
        },

        {
            description: 'Required section: "Clean up resources"',
            apply: input => /## ?Clean up resources/.test(input)
        },

        {
            description: 'Required section: "Next steps"',
            apply: input => /## ?Next steps/.test(input)
        },

        {
            description: 'Link to free account must come before first H2',
            apply: input => {
                const 
                      freeLinkIndex = input.indexOf('azure.microsoft.com/free')
                    , firstH2Index = input.indexOf('##')
                ;

                return firstH2Index > freeLinkIndex;
            }
        }
    ],

    apply: (input) => ruleApplicator(input, _module.rules)
};

module.exports = _module;