// example of XHR
let xhr = new XMLHttpRequest()

// register callback here
xhr.onreadystatechange = () => {
    if (this.readyState === 4 && this.status === 200)
        console.log(xhr.responseText)
}

// HTTP METHOD
xhr.open('GET', 'xmlhttp_info.txt', true)
xhr.send()

//  XHR ready state
let xhr = new XMLHttpRequest()
console.log('UNSENT', xhr.readyState) // readyState = 0

xhr.open('GET', '/api', true)
console.log('OPENED', xhr.readyState) // readyState = 1

xhr.onprogress = () => {
    console.log('LOADING', xhr.readyState) // readyState = 3
}

xhr.onload = () => {
    console.log('DONE', xhr.readyState) // readyState = 4
}

xhr.send(null)


// XHR status
/**
 * Outputs the following:
 *
 * UNSENT: 0
 * OPENED: 0
 * LOADING: 200
 * DONE: 200
 */

let xhr = new XMLHttpRequest()
console.log('UNSENT: ', xhr.status)

xhr.open('GET', '/server')
console.log('OPENED: ', xhr.status)

xhr.onprogress = () => {
    console.log('LOADING: ', xhr.status)
}

xhr.onload = () => {
    console.log('DONE: ', xhr.status)
}

xhr.send()
