(function () {
	const myLocation = ".authorLocation ";
	const myString = '.interviewQuestion';

	let locations = $(myLocation);
	let question = $(myString);

	for (let i = 0; i < question.length; i++) {
		let text = question[i].innerText;

		if (locations[i]) {
			let geo = locations[i].innerText;
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
	let jobTitle = document.URL.replace(/[^]*\/Interview\/|-Interview-Questions[^]*/g, '');

	let h3Element = document.createElement("h3");
	let h3Text = document.createTextNode(`Job title: ${jobTitle}`);
	h3Element.appendChild(h3Text);

	document.body.insertBefore(h3Element, document.body.firstChild);
})();
