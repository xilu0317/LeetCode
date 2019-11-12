
let xhr = new XMLHttpRequest()

// register callback here
xhr.onreadystatechange = () => {
    if (this.readyState === 4 && this.status === 200)
        document.getElementById('root').innerHTML = xhr.responseText
}

// HTTP METHOD
xhr.open('GET', 'xmlhttp_info.txt', true)
xhr.send()