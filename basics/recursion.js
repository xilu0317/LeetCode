// when dealing with nested structures, think about recursively
let arr = ['a', ['c', ['a', ['a']], 'b', ['a', 'e'], 'g']]
let target = 'a'

const findItem = (arr, target) => {
    let c = {}
    c.count = 0

    _helper(arr, target, c)

    return c.count
}

const _helper = (arr, target, c) => {
    if (!Array.isArray(arr)) {
        if (arr === target) c.count++
        return
    }

    for (let item of arr) {
        _helper(item, target, c)
    }
}

const solution2 = (arr, target) => {
    return arr.flat(Infinity).filter(x => x === target).length
}

const s1 = findItem(arr, target)
const s2 = solution2(arr, target)

console.log(`Found ${s1} target items.`)
if (s1 === s2)
    console.log('Solution is correct!')
else
    console.log('Solution is wrong!')