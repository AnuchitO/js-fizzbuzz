const fb = require("./fizzbuzz")

// const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// const expected = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]

// for (let i = 0; i < inputs.length; i++) {
//     const result = fb.fizzbuzz(inputs[i])

//     if (result === expected[i]) {
//         console.log("PASS:", result)
//     } else {
//         console.log("FAIL:", result)
//         break
//     }
// }
const normalCases = [1, 2, 4, 7, 8, 11, 13, 14]
const normalCasesExpected = [1, 2, 4, 7, 8, 11, 13, 14]

for (let i = 0; i < normalCases.length; i++) {
    const result = fb.fizzbuzz(normalCases[i])

    if (result === normalCasesExpected[i]) {
        console.log("PASS:", result)
    } else {
        console.log("FAIL:", result)
        break
    }
}

const fizzCases = [9, 3, 6]
const expectedFizz = "Fizz"
for (let i = 0; i < fizzCases.length; i++) {
    const result = fb.fizzbuzz(fizzCases[i])

    if (result === expectedFizz) {
        console.log("PASS:", result)
    } else {
        console.log("FAIL:", result)
        break
    }
}

const buzzCases = [5, 10]
const expectedBuzz = "Buzz"
for (let i = 0; i < buzzCases.length; i++) {
    const result = fb.fizzbuzz(buzzCases[i])

    if (result === expectedBuzz) {
        console.log("PASS:", result)
    } else {
        console.log("FAIL:", result)
        break
    }
}