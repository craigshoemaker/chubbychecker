const rules = require('./modules/validationRules');
const renderer = require('./modules/renderer');
const args = require('yargs').argv;
const fs = require('fs');

let input = '';

args.src = "C:\\Users\\cshoe\\Documents\\data\\docs\\azure-docs-pr\\articles\\storage\\blobs\\storage-quickstart-blobs-nodejs.md";
args.type = 'quickstart';
args.output = 'string';

if(args.src) {
    input = fs.readFileSync(args.src, 'utf8');
}

const response = rules.apply(input, args.type);

console.log(renderer.render(response, args.output));