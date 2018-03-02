const ruleApplicator = require('./ruleApplicator');

const _module = {

    type: 'General',

    rules: [
        {
            description: 'H1 title immediately after metadata',
            apply: input => /---\n(\n)?\#/.test(input)
        },

        {
            description: 'Metadata is required',
            apply: input => /(title|description|ms\.service|ms\.topic|ms\.date|ms\.author)\:/.test(input)
        }
    ],

    apply: (input) => ruleApplicator(input, _module)
};

module.exports = _module;