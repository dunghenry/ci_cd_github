function add(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    c = a + b;
    if (isNaN(c)) {
        throw new Error('Input is not a number');
    }

    return c;
}
function minus(a, b) {
    return a - b;
}

module.exports = { add, minus };
