const convertToTitle = (n) => {
    let len = 26, dict = {}, res = []

    for (let i = 0; i < len; i++) {
        dict[i] = String.fromCharCode(i + 65)
    }

    while (n > 0) {
        res.push(dict[(n - 1) % len])
        n = parseInt((n - 1) / len)
    }

    return res.reverse().join('')
}
