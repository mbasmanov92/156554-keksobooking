'use strict';

window.showCard = (function () {
  return function (dialog) {
    dialog.classList.add('dialog--active');
  };
})();
