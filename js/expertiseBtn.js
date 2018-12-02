;(function () {
	// get lines
	var lines = document.getElementsByClassName('expertise__line');
	lines.map = Array.prototype.map;
	//get button
	var btn = document.getElementById('expertise__btn');
	var turn = false;

	//add event
	btn.addEventListener('click', btnClick);

	//click func
	function btnClick() {

		if (!turn) {
			this.style.transform = 'rotate(765deg)';
			lines.map( (element) => element.style.height = '650px');
			turn = true;
		} else {
			turn = false;
			this.style.transform = 'rotate(45deg)';
			lines.map( (element) => element.style.height = '0px');
		}
	}
})();