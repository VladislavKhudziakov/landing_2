;(function() {
	//get lists
	var list = document.getElementsByClassName('slider_list');
	//copy array methods
	list.forEach = Array.prototype.forEach;
	list.map = Array.prototype.map;

	//get sliders navigation
	var nav = document.getElementsByClassName('slider__navigation');
	//copy array methods
	nav.map = Array.prototype.map;
	list.map( function(element) {
		element.counter = 0;
		element.children.map = Array.prototype.map;
	});

	nav.map( function(element) {
		//copy array methods
		element.children.map = Array.prototype.map;
		element.children.indexOf = Array.prototype.indexOf;
		element.children.map( (element) => element.addEventListener('click', bullitClick) );
	});

	//add resize funcs to window
	window.addEventListener('resize', resizeFunc);
	window.addEventListener('load', resizeFunc);


	function resizeFunc() {
		//get window size
		var currWidth = document.body.clientWidth;
		//make slider elements width = window size
		list.map( function(element) {
		element.children.map( (element) =>  element.style.width = currWidth + 'px');
	});
	}
	
	
	var timerId = setInterval(moveSlide, 3000);


	//main function
	function moveSlide() {
		//iteration of counters
		list.map( function(element) {
			element.counter++;
		//zeroing counter
			if (element.counter > element.children.length - 1) {
				element.counter = 0;
			}

			//move slide
			var scroll = element.children[element.counter].scrollWidth;
			var margin = scroll * element.counter;
			element.style.marginLeft = -margin + 'px';
			var nav = element.parentElement.nextElementSibling;
			var bullits = nav.children;
			bullits.map( (element) => element.classList.remove('active') );
			bullits[element.counter].classList.add('active');
		});
	}


	//bullit click func
	function bullitClick() {
		//get bullits
		var bullits = this.parentElement.children;
		//remove active bullits styles
		bullits.map( (element) => element.classList.remove('active') );

		//add active bullit style
		this.classList.add('active');

		//move slide
		var currInd = bullits.indexOf(this);
		var list = this.parentElement.previousElementSibling.firstElementChild;
		var scroll = list.children[currInd].scrollWidth;
		var margin = scroll * currInd;
		list.style.marginLeft = -margin + 'px';
	}

})();