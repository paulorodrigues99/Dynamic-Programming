function fib(n) {
    try {
        if (n <= 2) return 1
        return fib(n - 1) + fib(n - 2)
    } catch (error) {
        console.error(error)
    }
}

module.exports = fib