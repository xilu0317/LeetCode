// helper function used to do the calculation
const calculate = (n) => {
    let sum = 0

    while (n) {
        d = n % 10
        n = parseInt(n / 10)
        sum += d ** 2
    }

    return sum
}

// recall slow and faster pointer to detect cycle in a linkedlist
const isHappy = (n) => {
    let slow = fast = n
    do {
        slow = calculate(slow)
        fast = calculate(calculate(fast))
    } while (slow !== fast)

    return slow === 1
}

