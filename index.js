const rules = require('./modules/validationRules');
const renderer = require('./modules/renderer');
const args = require('yargs').argv;
const fs = require('fs');

let input = '';

if(args.src) {
    input = fs.readFileSync(args.src, 'utf8');
}

const response = rules.apply(input, args.type);

console.log(renderer.render(response, args.output));