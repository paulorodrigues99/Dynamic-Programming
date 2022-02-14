const fib = require('../../src/01/fib')

test('Should return the fibonacci number of index sequence | 5', () => {
    expect(fib(5)).toBe(5)
});

test('Should return the fibonacci number of index sequence | 40', () => {
    expect(fib(40)).toBe(102334155)
});
test('Should return the fibonacci number of index sequence | 0', () => {
    expect(fib(0)).toBe(1)
});