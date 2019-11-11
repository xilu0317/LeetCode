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
p.then(x => callback(x))