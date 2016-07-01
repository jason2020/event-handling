window.onload = runJs;

function runJs() {
	var buttons = document.getElementsByClassName("click");

	var obj = {
		clicked1: 0,
		clicked2: 0,
		clicked3: 0
	};

	buttons.addEventListener("click", clickCounter);

	function clickCounter(evt) {
		console.log(evt.target.id)
		if (evt.target.id == "button1") {
			obj.clicked1 += 1;

		}
	}
}