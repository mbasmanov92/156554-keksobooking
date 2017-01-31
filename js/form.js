var tokyoPinMap = document.querySelector('.tokyo__pin-map');
var pin = tokyoPinMap.querySelector('.pin');
var clickPin = function() {
  pin.classList.add('pin--active');
};
pin.addEventListener('click', clickPin);
