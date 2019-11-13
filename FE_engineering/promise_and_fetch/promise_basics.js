// promise definition

// resolve
p1 = new Promise((resolve, reject) => {
    let time = 3
    // simulate the delay using setTimeout
    setTimeout(() => resolve(`My promise has been RESOVLED at ${time} sec`), time * 1000)
})

// reject
p2 = new Promise((resolve, reject) => {
    let time = 1

    setTimeout(() => reject(`My promise has been REJECTED at ${time} sec`), time * 1000)
})

// resolve will settle the state and invalidate pending
p3 = new Promise((resolve, reject) => {
    resolve(' 1) First solve')
    // either resolve or reject will settle the state
    reject(' 2) Then reject')
})

p4 = new Promise((resolve, reject) => {
    reject(' 1) First reject')
    // either resolve or reject will settle the state
    resolve(' 2) Then solve')
})

// promise consumption

// the 1st argument of 'then' handles 'resovle'
// the 2st argument of 'then' handles 'rejecte'
p1.then(console.log)
  .catch(console.error)

p2.then(console.log)
  .catch(console.error)

p3.then(console.log)
  .catch(console.error)

p4.then(console.log)
  .catch(console.error)
