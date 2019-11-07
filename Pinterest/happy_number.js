const calculate = (n) => {
    let sum = 0

    while (n) {
        let num = n % 10
        n = parseInt(n / 10)
        sum += num ** 2
    }

    return sum
}

const isHappy = (n) => {
    let slow = fast = n
    do {
        slow = calculate(slow)
        fast = calculate(calculate(fast))
    } while (slow !== fast)

    return slow === 1
}

