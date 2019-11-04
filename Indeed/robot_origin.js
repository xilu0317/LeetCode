const judgeCircle = (moves) => {
    if (!moves) return false

    let x = 0, y = 0

    for (let move of moves) {
        switch (move) {
            case 'L':
                x--
                break
            case 'R':
                x++
                break
            case 'U':
                y++
                break
            case 'D':
                y--
                break
        }
    }

    return x === 0 && y === 0
}
