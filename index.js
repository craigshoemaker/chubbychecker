const rules = require('./modules/validationRules');
const renderer = require('./modules/renderer');
const args = require('yargs').argv;
const input = '';

const response = rules.apply(input, args.type);

console.log(renderer.render(response, args.output));