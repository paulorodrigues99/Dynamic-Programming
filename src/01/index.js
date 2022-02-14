const fib = require("./fib")

const testCases = [0, 5, 6, 7, 8, 40]

function main() {
    // O(n) - Onde n é o tamanho do Array testCases
    for (let index = 0; index < testCases.length; index++) {
        const testNumber = testCases[index];
        console.log(`Para o valor ${testNumber} o resultado é: `, fib(testNumber))
    }
}

main()