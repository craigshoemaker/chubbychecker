const
      ruleApplicator = require('./ruleApplicator')
    , commonRules = require('./commonRules')
;

const _module = {

    type: 'Tutorial',

    rules: [
        {
            description: 'Required text in H1: "Tutorial: "',
            apply: input => /\# ?Tutorial\: /.test(input)
        },

        {
            description: 'Checklist must appear before first H2',
            apply: input => commonRules.stringBefore(input, 'class="checklist"', '##')
        },

        {
            description: 'Checklist is required',
            apply: input => /\> \[\!div class=\"checklist\"\]/.test(input)
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
            description: '"Clean up resouces" section must appear before "Next steps" section',
            apply: input => commonRules.stringBefore(input, 'Clean up resources', 'Next steps')
        }
    ],

    apply: (input) => ruleApplicator(input, _module)
};

module.exports = _module;