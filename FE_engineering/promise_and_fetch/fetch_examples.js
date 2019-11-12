// Note 1: fetch is not supported by Nodejs 
// Note 2: fetch is not supported by IE11 which is about to go extinct in 2025


// 1) await method
(async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')

    let myJson = await res.json()

    console.table(myJson)
})()

// 2) then method
(() => {
    let myPromise = fetch('https://jsonplaceholder.typicode.com/posts/1/comments')

    myPromise.then(res => res.json())
             .then(data => console.table(data))
})()
