'use strict';

window.synchronizeFields = (function () {
  var changeField2Name;
  var index;
  return function (field1Name, field1ValueMassive, field2ValueMassive, callback) {
    changeField2Name = function () {
      index = field1Name.selectedIndex;
      callback( field2ValueMassive[index]);
    };
    field1Name.addEventListener('change', changeField2Name);
  };
})();
