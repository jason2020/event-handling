window.onload = runJs;

function runJs() {
	var buttons = document.getElementsByClassName("click");

	var obj = {
		clicked1: 0,
		clicked2: 0,
		clicked3: 0
	};

	var elementLength = buttons.length;

	for (var i = 0; i < elementLength; i++) {
		buttons[i].addEventListener("click", clickCounter);
	}

	function clickCounter(evt) {
		console.log(evt.target.id)
		if (evt.target.id == "button1") {
			obj.clicked1 += 1;
			console.log(obj.clicked1);
			evt.target.innerHTML = "Clicked: " + obj.clicked1;
		} else if (evt.target.id == "button2") {
			obj.clicked2 += 1;
			console.log(obj.clicked2);
			evt.target.innerHTML = "Clicked: " + obj.clicked2;
		} else if (evt.target.id == "button3") {
			obj.clicked3 += 1;
			console.log(obj.clicked3);
			evt.target.innerHTML = "Clicked: " + obj.clicked3;
		}
	}
}