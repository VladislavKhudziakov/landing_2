;(function() {

	var pacContBoxArr = document.getElementsByClassName('pacContBox');

	for (var i = 0; i < pacContBoxArr.length; i++) {
		pacContBoxArr[i].addEventListener('mouseover', over);
		pacContBoxArr[i].addEventListener('mouseout', out);
	}

	function over() {
		this.style.background = "#1abc9c";
		for (var i = 0; i < this.children.length; i++) {

			if (this.children[i].tagName == 'UL') {
				for (var j = 0; j < this.children[i].children.length; j++) {
					this.children[i].children[j].style.color = '#fff';
				}
			}

			if (this.children[i].tagName == 'DIV') {
				this.children[i].style.borderColor = '#fff';
				this.children[i].firstElementChild.style.borderColor = '#fff';
				this.children[i].firstElementChild.style.background = 'none';
				this.children[i].firstElementChild.firstElementChild.style.color = '#fff';
			}

			if (this.children[i].tagName == 'FORM') {
				this.children[i].firstElementChild.style.background = '#fff';
				this.children[i].firstElementChild.style.color = '#1abc9c';
			}

			this.children[i].style.color = '#fff';
		}
	}

	function out() {
		this.style.background = "#fff";
		for (var i = 0; i < this.children.length; i++) {

			if (this.children[i].tagName == 'H4') {
				this.children[i].style.color = '#4c4c4c';
			}

			if (this.children[i].tagName == 'P') {
				this.children[i].style.color = '#9a9c9f';
			}

			if (this.children[i].tagName == 'DIV') {
				this.children[i].style.borderColor = '#e1e1e1';
				this.children[i].firstElementChild.style.borderColor = '#e1e1e1';
				this.children[i].firstElementChild.style.background = '#fbfbfb';
				this.children[i].firstElementChild.firstElementChild.style.color = '#4c4c4c';
			}

			if (this.children[i].tagName == 'UL') {
				for (var j = 0; j < this.children[i].children.length; j++) {
					this.children[i].children[j].style.color = '#4c4c4c';
				}
			}

			if (this.children[i].tagName == 'FORM') {
				this.children[i].firstElementChild.style.background = '#1abc9c';
				this.children[i].firstElementChild.style.color = '#fff';
			}
		}
	}

})();