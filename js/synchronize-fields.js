'use strict';
var changeField2Name;
var index;
window.synchronizeFields = function (field1Name, field2Name, field1ValueMassive, field2ValueMassive, proper) {
  changeField2Name = function () {
    index = field1Name.selectedIndex;
    field2Name[proper] = field2ValueMassive[index];
  };
  field1Name.addEventListener('change', changeField2Name);
};
