
const isBuzz = (num) => {
    return num % 5 === 0
}

const isFizz = (num) => {
    return num % 3 === 0
}

const isFizzBuzz = (num) => {
    return isFizz(num) && isBuzz(num)
}

const fizzbuzz = (num) => {
    if (isFizzBuzz(num)) {
        return "FizzBuzz"
    }

    if (isBuzz(num)) {
        return "Buzz"
    }

    if (isFizz(num)) {
        return "Fizz"
    }

    return num
}

module.exports = {
    fizzbuzz: fizzbuzz
}