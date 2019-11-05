const dailyTemperatures = (T) => {
    let res = []

    for (let i = 0; i < T.length; i++) {
        let count = 0

        for (let j = i + 1; j < T.length; j++) {
            if (T[i] < T[j]) {
                count++
                break
            } else {
                count++
            }

            if (j === T.length - 1) count = 0
        }

        res.push(count)
    }

    return res
}
