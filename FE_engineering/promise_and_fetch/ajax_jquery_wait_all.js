// callback-hell
$.get("/feature/", function (html) {

    // Get the CSS
    $.get("/assets/feature.css", function (css) {

        // Get the JavaScript
        $.getScript("/assets/feature.js", function () {

            // do stuff

        })

    })

})

// 'Promise.all' in jquery
$.when(
    // Get the HTML
    $.get("/feature/"),

    // Get the CSS
    $.get("/assets/feature.css"),

    // Get the JS
    $.getScript("/assets/feature.js")

).then((html, css, script) => {
    // do stuff
})