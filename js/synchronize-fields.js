'use strict';

window.synchronizeFields = (function () {
  var index;
  return function (field1Name, field1ValueMassive, field2ValueMassive, callback) {
    function changeField2Name() {
      index = field1Name.selectedIndex;
      callback(field2ValueMassive[index]);
    }
    field1Name.addEventListener('change', changeField2Name);
  };
})();
