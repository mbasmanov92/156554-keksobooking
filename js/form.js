'use strict';

var synchronizeFields;

var title = document.querySelector('#title');
title.setAttribute('required', true);
title.setAttribute('minlength', 30);
title.setAttribute('maxlength', 1000);

var price = document.querySelector('#price');
price.setAttribute('required', true);
price.setAttribute('min', 1000);
price.setAttribute('max', 1000000);

var address = document.querySelector('#address');
address.setAttribute('required', true);

var time = document.querySelector('#time');
var timeout = document.querySelector('#timeout');
var timeValueMassive = ['После 12', 'После 13', 'После 14'];
var timeoutValueMassive = ['Выезд до 12', 'Выезд до 13', 'Выезд до 14'];
var syncValuesTime = function (newValue) {
  timeout.value = newValue;
};
function syncValuesTimeout(newValue) {
  time.value = newValue;
}
synchronizeFields(time, timeValueMassive, timeoutValueMassive, syncValuesTime);
synchronizeFields(timeout, timeoutValueMassive, timeValueMassive, syncValuesTimeout);

var type = document.querySelector('#type');
var typeValueMassive = ['Квартира', 'Лачуга', 'Дворец'];
var priceValueMassive = ['5000', '0', '10000'];
var syncValuesPriceMin = function (newValue) {
  price.min = newValue;
};
function syncValuesPricePlaceholder(newValue) {
  price.placeholder = newValue;
}
synchronizeFields(type, typeValueMassive, priceValueMassive, syncValuesPriceMin);
synchronizeFields(type, typeValueMassive, priceValueMassive, syncValuesPricePlaceholder);

var roomNumber = document.querySelector('#room_number');
var capacity = document.querySelector('#capacity');
var roomNumberValueMassive = ['1 комната', '2 комнаты', '100 комнат'];
var capacityValueMassive = ['не для гостей', 'для 3 гостей', 'для 3 гостей'];
function syncValuesRoomNumber(newValue) {
  capacity.value = newValue;
}
synchronizeFields(roomNumber, roomNumberValueMassive, capacityValueMassive, syncValuesRoomNumber);
