// promise definition

// resolve
p1 = new Promise((resolve, reject) => {
    let time = 3
    // simulate the delay using setTimeout
    setTimeout(() => resolve(` p1 -> My promise has been RESOVLED at ${time} sec`), time * 1000)
})

// reject
p2 = new Promise((resolve, reject) => {
    let time = 1

    setTimeout(() => reject(` p2 -> My promise has been REJECTED at ${time} sec`), time * 1000)
})

// resolve will settle the state and invalidate pending
p3 = new Promise((resolve, reject) => {
    resolve(' p3 -> 1) First solve')
    // either resolve or reject will settle the state
    reject(' p3 -> 2) Then reject')
})

p4 = new Promise((resolve, reject) => {
    reject(' p4 -> 1) First reject')
    // either resolve or reject will settle the state
    resolve(' p4 -> 2) Then solve')
})

// promise consumption
console.log('------------------------------------')

p1.then(console.log)
  .catch(console.error)

p2.then(console.log)
  .catch(console.error)

p3.then(console.log)
  .catch(console.error)

p4.then(console.log)
  .catch(console.error)
