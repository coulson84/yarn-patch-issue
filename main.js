const a = require('./packages/a/main');
const b = require('./packages/b/main');

console.log('package a');
console.log(a(12));

console.log('package b');
console.log(b(12));
