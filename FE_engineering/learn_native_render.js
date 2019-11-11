function render(template, node) {
    node.innerHTML = template
}

function loadTemplate() {
    let template = '<a href="https://www.google.com">click me</a>'

    return template
}

render(template, document.querySelector('#main'))