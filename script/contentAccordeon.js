;(function() {

  var wrap = document.getElementById('messagesAccodeon');
  var titles = document.getElementsByClassName('accordeonTitle');
  var article = document.getElementsByClassName('accordeonArticle');
  article.indexOf = Array.prototype.indexOf;
  var prevInd;
  var tst = false;


  for (var i = 0; i < article.length; i++) {
    titles[i].addEventListener('click', function() {

        if (prevInd !== undefined) {
          article[prevInd].style.height = '0px';
        }

        if (prevInd == article.indexOf(this.nextElementSibling)) {
          if (!tst) {
            tst = true;
            this.nextElementSibling.style.height = '0px';
          } else {
            tst = false;
            this.nextElementSibling.style.height = this.nextElementSibling.scrollHeight + 'px';
          }
        } else {
          tst = false;
          this.nextElementSibling.style.height = this.nextElementSibling.scrollHeight + 'px';
          prevInd = article.indexOf(this.nextElementSibling);
        }

  });
  }

})();
