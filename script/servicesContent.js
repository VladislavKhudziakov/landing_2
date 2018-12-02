;(function() {
	var line = document.getElementsByClassName('servContBoxLine');
	var childrenArr = [];

	for (var i = 0; i < line.length; i++) {
		for (var j = 0; j < line[i].children.length; j++) {
			childrenArr.push(line[i].children[j]);
		}
	}

	for (var i = 0; i < childrenArr.length; i++) {
		childrenArr[i].addEventListener('mouseover', over(i));
		childrenArr[i].addEventListener('mouseout', out(i));
	}

	function over(value) {
		var i = value;
		return function() {
			var selfChild = childrenArr[i].children;
			for (var j = 0; j < selfChild.length; j++) {
				if (j == 0) {
					selfChild[j].style.textAlign = 'left';
					selfChild[j].style.fontWeight = 'bold';
				};

				if (j == 1) {
					selfChild[j].style.visibility = 'hidden';
				};

				if (j == 2) {
					selfChild[j].style.visibility = 'visible';
				};
			};
		}; 
	}

		function out(value) {
		var i = value;
		return function() {
			var selfChild = childrenArr[i].children;
			for (var j = 0; j < selfChild.length; j++) {
				if (j == 0) {
					selfChild[j].style.textAlign = 'center';
					selfChild[j].style.fontWeight = 'lighter';
				};

				if (j == 1) {
					selfChild[j].style.visibility = 'visible';
				};

				if (j == 2) {
					selfChild[j].style.visibility = 'hidden';
				};
			};
		}; 
	}

	console.log(childrenArr);

	// body...
})()