const 
      ruleApplicator = require('./ruleApplicator')
    , commonRules = require('./commonRules')
;

const _module = {

    type: 'Overview',

    rules: [
        {
            description: 'Required text in H1: "What is <service>?"',
            apply: input => /\# ?What is .+\?/.test(input)
        },

        {
            description: 'Required section: "Next steps"',
            apply: input => /## ?Next steps/.test(input)
        },
    ],

    apply: (input) => ruleApplicator(input, _module)
};

module.exports = _module;