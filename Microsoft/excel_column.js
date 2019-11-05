// KEY: remember the constant 65
const convertToTitle = (n) => {
    let len = 26, dict = {}, res = []

    // map numberal to char
    for (let i = 0; i < len; i++) {
        dict[i] = String.fromCharCode(i + 65)
    }

    while (n) {
        // calculate the 26 based number using moduale operator
        res.unshift(dict[(n - 1) % len])
        // calculate the '10th' place value
        n = parseInt((n - 1) / len)
    }

    return res.join('')
}
