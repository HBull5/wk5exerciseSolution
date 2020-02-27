const input = require('./input.js');
const output = require('./output.js');

console.log(`Type 'exit' @ anytime to exit\n\n`);
input.prompt(`What is your name?\n`);
input.in(output.out);