;(function() {
	var boxArr = document.getElementsByClassName('portfAccBox');
	var boxTop = document.getElementsByClassName('portfAccBoxTop');
	var boxBottom = document.getElementsByClassName('portfAccBoxBottom');

	var options = {
		width: '25%',
		height: 200,
		scrollHeight: 71,
		backgounds: [
			['#fdbd4f', '#e0eaf3'],
			['#b8c496', '#d2c2b3'],
			['#65bcd0', '#e5e4e2'],
			['#d7f0ed', '#ffc301']
		]
	};

	for (var i = 0; i < boxArr.length; i++) {
		boxArr[i].style.width = options.width;
	}

	for (var i = 0; i < boxTop.length; i++) {
		boxTop[i].style.width = '100%';
		boxTop[i].lastElementChild.style.width = '100%';
		boxTop[i].lastElementChild.style.background = options.backgounds[i][0];
		boxTop[i].lastElementChild.style.height = options.height + 'px';
		boxTop[i].lastElementChild.firstElementChild.style.height = '26px';
		boxTop[i].firstElementChild.style.width = '100%';
		boxTop[i].firstElementChild.style.height = 0 + 'px';
		boxTop[i].firstElementChild.style.background = '#252830';
		boxTop[i].addEventListener('mouseover', overTop);
		boxTop[i].addEventListener('mouseout', outTop);
	}

	for (var i = 0; i < boxBottom.length; i++) {
		boxBottom[i].style.width = '100%';
		boxBottom[i].firstElementChild.style.width = '100%';
		boxBottom[i].firstElementChild.style.background = options.backgounds[i][1];
		boxBottom[i].firstElementChild.style.height = options.height + 'px';
		boxBottom[i].firstElementChild.firstElementChild.style.height = '26px';
		boxBottom[i].lastElementChild.style.width = '100%';
		boxBottom[i].lastElementChild.style.height = 0 + 'px';
		boxBottom[i].lastElementChild.style.background = '#252830';
		boxBottom[i].addEventListener('mouseover', overBottom);
		boxBottom[i].addEventListener('mouseout', outBottom);
	}

//overTop func
	function overTop(event) {
		var article = this.firstElementChild;
		var sibImg = this.nextElementSibling.firstElementChild;
		var infoBox = article.nextElementSibling.firstElementChild;

		article.style.height = options.scrollHeight + 'px';
		sibImg.style.height = (options.height - options.scrollHeight) + 'px';
		infoBox.style.display = 'block';
	}

//outTop func
	function outTop(event) {
		var article = this.firstElementChild;
		var sibImg = this.nextElementSibling.firstElementChild;
		var infoBox = article.nextElementSibling.firstElementChild;

		infoBox.style.display = 'none';
		article.style.height = 0 + 'px';
		sibImg.style.height = options.height + 'px';
	}

	//overBottom func
	function overBottom(event) {
		var article = this.lastElementChild;
		var sibImg = this.previousElementSibling.lastElementChild;
		var infoBox = article.previousElementSibling.firstElementChild;
		article.style.height = options.scrollHeight + 'px';

		sibImg.style.height = (options.height - options.scrollHeight) + 'px';
		infoBox.style.display = 'block';
	}

	//outBottom func
	function outBottom(event) {
		var article = this.lastElementChild;
		var sibImg = this.previousElementSibling.lastElementChild;
		var infoBox = article.previousElementSibling.firstElementChild;

		infoBox.style.display = 'none';
		article.style.height = 0 + 'px';
		sibImg.style.height = options.height + 'px';
	}
	
})();
