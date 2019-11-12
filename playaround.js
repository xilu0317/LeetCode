// promise setup
let p1 = new Promise((resolve, rejct) => {
    const time = 0

    const obj = {}
    obj.name = 'p1'
    obj.description = `wait time -> ${time} sec`

    // simulating a remote API call taking x amount of time
    resolve(obj)
})

let p2 = new Promise((resolve, rejct) => {
    const time = 5

    const obj = {}
    obj.name = 'p2'
    obj.description = `wait time -> ${time} sec`

    // simulating a remote API call taking x amount of time
    setTimeout(() => resolve(obj), time * 1000)
})

let p3 = new Promise((resolve, rejct) => {
    let time = 2

    let obj = {}
    obj.name = 'p3'
    obj.description = `wait time -> ${time} sec`

    setTimeout(() => resolve(obj), time * 1000)
})

console.log('print 1')

// promise consumption
// note 'then' is async, CALLBACKs go to 'then'
// this method will wait for all API calls to finsh
Promise.all([p1, p2, p3]).then(res => {
    console.table(res[0])
    console.table(res[1])
    console.table(res[2])
})

// notice that 'then' will not block this line from been printed
console.log('print 3')
