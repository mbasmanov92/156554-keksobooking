'use strict';

window.showCard = (function () {
  return function (dialog, dialogClose) {
    dialog.classList.add('dialog--active');
    dialogClose.focus();
  }
})();
