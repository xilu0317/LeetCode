// Note 1: doesn't work on Node
// Note 2: doesn't work on IE11

// 1) using 'await'
(async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')

    let myJson = await res.json()

    console.table(myJson)
})()

// 2) using 'then'
(() => {
    let myPromise = fetch('https://jsonplaceholder.typicode.com/posts/1/comments')

    myPromise.then(res => res.json())
        .then(data => console.table(data))
})()

fetch(url, {
    method: 'post',
    headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body: 'foo=bar&lorem=ipsum'
})
  .then(json)
  .then(data => console.log('Request succeeded with JSON response', data))
  .catch(error => console.log('Request failed', error))