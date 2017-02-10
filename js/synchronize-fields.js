'use strict';
//Функция принимает на вход пять параметров: 
//в первых двух параметрах передаются DOM-элементы
//синхронизируемых полей. Следующие два параметра представляют
//собой два массива, которые содержат синхронизируемые значения. 
//Например, если при выборе в первом поле значения с value а, 
//во втором должно выбираться значение b (и наоборот), 
//то массивы должны выглядеть как ['a'] и ['b']. 
//Последний параметр содержит строку, с названием свойства второго объекта, 
//которое нужно изменять при изменении 
//первого (например, 'max' или 'value').
time = document.querySelector('#time'); //field1Name
timeout = document.querySelector('#timeout'); //field2Name
var timeValueMassive = ['После 12', 'После 13', 'После 14'];
var timeoutValueMassive = ['Выезд до 12', 'Выезд до 13', 'Выезд до 14'];
var proper = 'selectedIndex';
synchronizeFields(time, timeout, timeValue, timeoutValue, proper);
var synchronizeFields = functon(field1Name, field2Name, field1ValueMassive, field2ValueMassive, proper) {
  //  time = document.querySelector('#time');//field1Name
  //  timeout = document.querySelector('#timeout');//field2Name
  changeTimeout = function () {
    var index = null;
    for (var i = 0; i < field1NameMassive.length; i++) {
      if (field1Name.value === field1NameMassive[i]) {
        index = i;
        return index;
      }
    }
    
    field1Name.selectedIndex = field2Name.selectedIndex;
  };
  changeTime = function () {

    time.selectedIndex = timeout.selectedIndex;
  };
  time.addEventListener('change', changeTimeout);
  timeout.addEventListener('change', changeTime);

//  type = document.querySelector('#type');
//  changeType = function () {
//    typeValue = type.value;
//    switch (typeValue) {
//      case 'Квартира':
//        price.setAttribute('min', 5000);
//        price.setAttribute('placeholder', 5000);
//        break;
//      case 'Лачуга':
//        price.setAttribute('min', 0);
//        price.setAttribute('placeholder', 0);
//        break;
//      case 'Дворец':
//        price.setAttribute('min', 10000);
//        price.setAttribute('placeholder', 10000);
//        break;
//    }
//  };
//  type.addEventListener('change', changeType);
//
//  roomNumber = document.querySelector('#room_number');
//  capacity = document.querySelector('#capacity');
//
//  changeRoomNumber = function () {
//    roomNumberValue = roomNumber.value;
//    switch (roomNumberValue) {
//      case '1 комната':
//        capacity.options[1].selected = true;
//        break;
//      case '2 комнаты':
//        capacity.options[0].selected = true;
//        break;
//      case '100 комнат':
//        capacity.options[0].selected = true;
//        break;
//    }
//  };
//  roomNumber.addEventListener('change', changeRoomNumber);
}
synchronizeFields(time, timeout, timeValue, timeoutValue, proper);