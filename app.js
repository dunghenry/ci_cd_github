const { add, minus } = require('./function');
const util = require('util');
function sum(a, b) {
    return a + b;
}
// const rs = sum(1, 2);
// console.log(rs);
// console.log(1 + 3);

const a = 2;
const b = 9;
console.log(util.format('Add: %d + %d = %d', a, b, add(a, b)));
console.log(util.format('Minus: %d - %d= %d', a, b, minus(a, b)));
