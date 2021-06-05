const { it, expect, describe } = require("@jest/globals");
const fb = require("./fizzbuzz");

describe("FizzBuzz", () => {
    // AAA
    it("should returns Fizz", () => {
        // Arrage
        const input = 3

        // Action
        const result = fb.fizzbuzz(input)

        // Assertion
        expect(result).toBe("Fizz")
    })

    it("should returns Buzz", () => {
        const inputs = [5, 10, 20]

        inputs.forEach(input => {
            const result = fb.fizzbuzz(input)

            expect(result).toBe("Buzz")
        })
    })
})