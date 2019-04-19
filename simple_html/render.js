var render = function (template, node) {
    node.innerHTML = template;
};

var template = '<p>Hello world!</p>';
render(template, document.querySelector('#main'));