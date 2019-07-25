(function () {
    const myLocation = ".authorLocation ";
    const myString = '.interviewQuestion';

    var locations = $(myLocation);
    var question = $(myString);

    for (var i = 0; i < question.length; i++) {
        var text = question[i].innerText;

        if (locations[i]) {
            var geo = locations[i].innerText;
        }

        document.write(geo);
        document.write("<br>");

        textOut = text.replace(/\s+Answer Question|\s+\d Answer$|\s+\d Answers$/g, '').toLocaleLowerCase();
        document.write(textOut);

        document.write("<br>");
        document.write("<br>");
        document.write("<br>");
    }

    // Add title
    var jobTitle = document.URL.replace(/[^]*\/Interview\/|-Interview-Questions[^]*/g, '');

    var h3Element = document.createElement("h3");
    var h3Text = document.createTextNode(`Job title: ${jobTitle}`);
    h3Element.appendChild(h3Text);

    document.body.insertBefore(h3Element, document.body.firstChild);
})();
