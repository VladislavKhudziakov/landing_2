;(function() {
  var button = document.getElementById('nav__btn');
  var navigation = document.getElementById('navigation');

  button.addEventListener('click', menuBtnClick);

  function menuBtnClick() {
    navigation.classList.toggle('nav__active');
  }
})();
