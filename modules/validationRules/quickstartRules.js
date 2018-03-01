const 
      ruleApplicator = require('./ruleApplicator')
    , commonRules = require('./commonRules')
;

const _module = {

    type: 'Quickstart',

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
            apply: input =>  commonRules.stringBefore(input, 'azure.microsoft.com/free', '##')
        },

        {
            description: '"Clean up resouces" comes before "Next steps"',
            apply: input => commonRules.stringBefore(input, 'Clean up resources', 'Next steps')
        }
    ],

    apply: (input) => ruleApplicator(input, _module)
};

module.exports = _module;