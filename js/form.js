'use strict';

var pins = document.querySelectorAll('.pin');
var activePin = document.querySelector('.pin.pin--active');
var dialog = document.querySelector('.dialog');
var dialogClose = document.querySelector('.dialog__close');
var dialogClickClose;
var title;
var price;
var address;
Array.prototype.forEach.call(pins, function (pin) {
  pin.addEventListener('click', function () {
    if (activePin) {
      activePin.classList.remove('pin--active');
    }
    pin.classList.add('pin--active');
    dialog.style.display = "block";
    activePin = pin;
  });
});

dialogClickClose = function () {
  dialog.style.display = "none";
  activePin.classList.remove('pin--active');
}
dialogClose.addEventListener ('click', dialogClickClose);

title = document.querySelector('#title');
title.setAttribute('required', true);
title.setAttribute('minlength', 30);
title.setAttribute('maxlength', 1000);

price = document.querySelector('#price');
price.setAttribute('required', true);
price.setAttribute('min', 1000);
price.setAttribute('max', 1000000);

address = document.querySelector('#address');
address.setAttribute('required', true);

var time = document.querySelector('#time');
var timeout = document.querySelector('#timeout');
var optionsTime = time.getElementsByTagName('option');
var optionsTimeout = timeout.getElementsByTagName('option');
var value;
var selectedTime = function() {
  Array.prototype.forEach.call(optionsTime, function (option) {
    if (option.hasAttribute('selected')) {
      value = option.getAttribute('value');
 console.log(value);
      return;
    };
  });
  Array.prototype.forEach.call(optionsTimeout, function (option) {
    if (option.hasAttribute('selected')) {
      option.removeAttribute('value');
      return;
    } else {
    if (option.getAttribute('value') === value) {
      option.setAttribute('selected');
      return;
    };
    };
  });
};
time.addEventListener('click', selectedTime);

