function render(template, node) {
    // I think inner html is better because it does that interpretation
    node.innerHTML = template
}

function loadTemplate() {
    let template = '<a href="https://www.google.com">click me</a>'

    return template
}

render(template, document.querySelector('#main'))