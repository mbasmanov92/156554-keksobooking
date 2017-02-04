'use strict';
var pins = document.querySelectorAll('.pin');
var activePin = document.querySelector('.pin.pin--active');
var dialog = document.querySelector('.dialog');
var dialogClose = document.querySelector('.dialog__close');
var dialogClickClose;
var title;
var price;
var address;
var time;
var timeout;
var changeTimeout;
var changeTime;
var type;
var changeType;
var typeValue;
var roomNumber;
var capacity;
var changeRoomNumber;
var roomNumberValue;
Array.prototype.forEach.call(pins, function (pin) {
  pin.addEventListener('click', function () {
    if (activePin) {
      activePin.classList.remove('pin--active');
    }
    pin.classList.add('pin--active');
    dialog.style.display = 'block';
    activePin = pin;
  });
});

dialogClickClose = function () {
  dialog.style.display = 'none';
  activePin.classList.remove('pin--active');
};
dialogClose.addEventListener('click', dialogClickClose);

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

time = document.querySelector('#time');
timeout = document.querySelector('#timeout');
changeTimeout = function () {
  timeout.selectedIndex = time.selectedIndex;
};
changeTime = function () {
  time.selectedIndex = timeout.selectedIndex;
};
time.addEventListener('change', changeTimeout);
timeout.addEventListener('change', changeTime);

type = document.querySelector('#type');
changeType = function () {
  typeValue = type.value;
  switch (typeValue) {
    case 'Квартира':
      price.setAttribute('min', 5000);
      price.setAttribute('placeholder', 5000);
      break;
    case 'Лачуга':
      price.setAttribute('min', 0);
      price.setAttribute('placeholder', 0);
      break;
    case 'Дворец':
      price.setAttribute('min', 10000);
      price.setAttribute('placeholder', 10000);
      break;
  }
};
type.addEventListener('change', changeType);

roomNumber = document.querySelector('#room_number');
capacity = document.querySelector('#capacity');

changeRoomNumber = function () {
  roomNumberValue = roomNumber.value;
  switch (roomNumberValue) {
    case '1 комната':
      capacity.options[1].selected = true;
      break;
    case '2 комнаты':
      capacity.options[0].selected = true;
      break;
    case '100 комнат':
      capacity.options[0].selected = true;
      break;
  }
};
roomNumber.addEventListener('change', changeRoomNumber);
