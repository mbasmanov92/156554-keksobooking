'use strict';

var title;
var price;
var address;
var time;
var timeout;
var type;
var roomNumber;
var capacity;
var initializePins;
var timeValueMassive;
var timeoutValueMassive;
var typeValueMassive;
var priceValueMassive;
var roomNumberValueMassive;
var capacityValueMassive;
var synchronizeFields;

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
timeValueMassive = ['После 12', 'После 13', 'После 14'];
timeoutValueMassive = ['Выезд до 12', 'Выезд до 13', 'Выезд до 14'];
synchronizeFields(time, timeout, timeValueMassive, timeoutValueMassive, 'value');
synchronizeFields(timeout, time, timeoutValueMassive, timeValueMassive, 'value');

type = document.querySelector('#type');
typeValueMassive = ['Квартира', 'Лачуга', 'Дворец'];
priceValueMassive = ['5000', '0', '10000'];
synchronizeFields(type, price, typeValueMassive, priceValueMassive, 'min');
synchronizeFields(type, price, typeValueMassive, priceValueMassive, 'placeholder');

roomNumber = document.querySelector('#room_number');
capacity = document.querySelector('#capacity');
roomNumberValueMassive = ['1 комната', '2 комнаты', '100 комнат'];
capacityValueMassive = ['не для гостей', 'для 3 гостей', 'для 3 гостей'];
synchronizeFields(roomNumber, capacity, roomNumberValueMassive, capacityValueMassive, 'value');

initializePins();
