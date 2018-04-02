const 
      ruleApplicator = require('./ruleApplicator')
    , commonRules = require('./commonRules')
;

const _module = {

    type: 'Quickstart',

    rules: [
        {
            description: 'H1 format must be: "Quickstart: "',
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

        // different orgs have different urls for "free"
        {
            description: 'Link to free Azure account must come before first H2',
            apply: input =>  commonRules.stringBefore(input, 'azure.microsoft.com/free', '##')
        },

        // update to ensure clean up resources come directly before
        {
            description: '"Clean up resouces" section must appear before "Next steps" section',
            apply: input => commonRules.stringBefore(input, 'Clean up resources', 'Next steps')
        },

        {
            description: '"mstopic: quickstart" is required in metadata',
            apply: input => /ms\.topic:\s*quickstart\s*\n/.test(input)
        }
    ],

    apply: (input) => ruleApplicator(input, _module)
};

module.exports = _module;