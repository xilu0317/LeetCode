callback = (args) => {
    console.log('**********************')

    console.log(args)

    console.log('**********************')
}

// promise definition
p = new Promise((resolve, reject) => {
    setTimeout(() => resolve('fuck this'), 3000)
})

// promise consumption
// KEY: the callback in 'then' usually will happen a 'long' time afterwords
p.then(x => callback(x))