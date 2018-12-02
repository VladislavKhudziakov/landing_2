(function() {

	var ul = document.getElementById('testimotionalsSliderUl');
	var li  = ul.children;
	var length = li.length;
	
	var indBox = document.getElementById('testSliderIndBox');
	var indicators = indBox.children;
	indicators.indexOf = Array.prototype.indexOf;

	var counter = 0;
	var options = {
		time: 3000
	}

	var timerId = setInterval(slide, options.time);
	indicators[0].style.background = '#000';

	function slide() {

		for (var i = 0; i < indicators.length; i++) {
		    	indicators[i].style.background = '#1abc9c';
		};

		if (counter >= length) {
			counter = 0;
			ul.style.left = '0px';
		};

		var width = li[counter].scrollWidth;

		currWidth = width * counter;
		ul.style.left = -currWidth + 'px'; 
		indicators[counter].style.background = '#000';
		counter++;
	};

	indBox.addEventListener('click', indicatorClick);


	function indicatorClick(event) {
	    if (event.target.className == "indicator") {
		    for (var i = 0; i < indicators.length; i++) {
		    	indicators[i].style.background = '#1abc9c';
		    };

		    event.target.style.background = '#000';
		    var width = li[indicators.indexOf(event.target)].scrollWidth;
		      
		    currWidth = width * indicators.indexOf(event.target);
		    ul.style.left = -currWidth + 'px';
	    };
	 };


})();