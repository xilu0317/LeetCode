// 1) await method
// Note fetch is not supported by IE11 which is about to go extinct in 2025
(async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')

    let myJson = await res.json()

    console.table(myJson)
})()

