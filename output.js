const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
const input = require('./input');

module.exports = {
    out(data) {
        console.log(`Your name is ${data}.`);
        input.prompt(`\nWhat is your name?\n`);
    }
}