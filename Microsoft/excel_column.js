// KEY: remember the constant 65
const convertToTitle = (n) => {
    let len = 26, dict = {}, res = []

    for (let i = 0; i < len; i++) {
        // map numberal to char
        dict[i] = String.fromCharCode(i + 65)
    }

    while (n) {
        res.unshift(dict[(n - 1) % len])
        n = parseInt((n - 1) / len)
    }

    return res.join('')
}
