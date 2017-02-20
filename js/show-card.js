'use strict';

window.showCard = (function () {
  return function (dialog, dialogClose) {
    dialog.style.display = 'block';
    dialogClose.focus();
  }
})();
