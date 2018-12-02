;(function() {

	//get video
	var bgVideo = document.getElementById('bgvideo__box');
	var defWidth;
	var defHeight;

	//add resize funcs to window
	window.addEventListener('resize', videoResizeFunc);
	window.addEventListener('load', videoResizeFunc);

	function videoResizeFunc() {

		//get widndow width
		var currWidth = document.body.clientWidth;

		if (currWidth <= 1300) {
			defWidth = 900;
			defHeight = 504;
		} else {
			defWidth = 1601;
			defHeight = 548;
		} 

		//resize video
		var coef = currWidth / defWidth;
		bgVideo.style.height = (defHeight * coef) + 'px';

	}
})();