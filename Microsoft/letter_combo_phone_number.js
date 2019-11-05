const letterCombinations = (digits) => {
    if (!digits) return []

    let res = [], dict = {}
    dict['2'] = 'abc'
    dict['3'] = 'def'
    dict['4'] = 'ghi'
    dict['5'] = 'jkl'
    dict['6'] = 'mno'
    dict['7'] = 'pqrs'
    dict['8'] = 'tuv'
    dict['9'] = 'wxyz'

    backtrack('', digits, res, dict)

    return res
}

// Effectively this is some form of recurisve DFS. Thus, this can be done by stack too.
// Please review DFS files for details.
const backtrack = (combination, digits, res, dict) => {
    // exit condition
    if (!digits.length) {
        res.push(combination)

        return
    }

    let digit = digits[0]
    let letters = dict[digit]

    for (let c of letters)
        backtrack(combination + c, digits.substring(1), res, dict)
}

// substring(i) => substring from i onwards
