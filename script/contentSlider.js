;(function() {
  var sliderList = document.getElementById('sliderList');
  var listItem = sliderList.children;

  var indBox = document.getElementById('indicators');
  var indicators = indBox.children;
  indBox.children.indexOf = Array.prototype.indexOf;

  var prevInd;

  var options = {
    interval: 3000,
    width: 746,
    height: 500,
    count: 1,
  }

  var counter = 0;
  var currHeight = 0;
  var padding;

  for (var i = 0; i < listItem.length; i++) {
    if (listItem[i].scrollHeight < options.height) {
      padding = (options.height - listItem[i].scrollHeight) / 2;
      listItem[i].style.paddingTop = padding + 'px';
      listItem[i].style.paddingBottom = padding + 'px';
    };

    if (listItem[i].scrollWidth < options.width) {
      padding = (options.width - listItem[i].scrollWidth) / 2;
      listItem[i].style.paddingleft = padding + 'px';
      listItem[i].style.paddingRight = padding + 'px';
    };

    if (listItem[i].scrollHeight > options.height) {
      listItem[i].style.height = options.height;
    };

    if (listItem[i].scrollWidth > options.width) {
      listItem[i].style.height = options.height;
    };
  }

  indicators[counter].style.background = '#000';

  setInterval(function () {
    for (var i = 0; i < indicators.length; i++) {
      indicators[i].style.background = '#1abc9c';
    }

    if (counter >= 2) {
      counter = 0;
      sliderList.style.marginTop = '0px';
      indicators[counter].style.background = '#000';
      currHeight = 0;
    } else {
      currHeight -= options.height * options.count;
      sliderList.style.marginTop = currHeight + 'px';
      indicators[counter + 1].style.background = '#000';
      counter++;
  };
}, options.interval);

  indBox.addEventListener('click', indicatorClick);

  
  function indicatorClick(event) {
    if (event.target.className == "ind") {
      for (var i = 0; i < indicators.length; i++) {
      indicators[i].style.background = '#1abc9c';
      };

      event.target.style.background = '#000';
      sliderList.style.marginTop = -(options.height * indBox.children.indexOf(event.target))  + 'px';
    };
  }

})();
