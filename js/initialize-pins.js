'use strict';

window.initializePins = (function () {
  var activePin = document.querySelector('.pin.pin--active');
  var dialog = document.querySelector('.dialog');
  var target;
  var setFocus;

  var activatePin = function () {
    activePin.classList.remove('pin--active');
    activePin.setAttribute('aria-pressed', false);
    target.classList.add('pin--active');
    target.setAttribute('aria-pressed', true);
    activePin = target;
  };

  var dialogClickClose = function (setFocus) {
    dialog.style.display = 'none';
    activePin.classList.remove('pin--active');
    activePin.setAttribute('aria-pressed', false);
    if (typeof setFocus === 'function') {
      setFocus();
    }
  };

  var dialogClose = document.querySelector('.dialog__close');
  var tokyoPinMap = document.querySelector('.tokyo__pin-map');
  var ENTER = 13;
  var ESC = 27;
  return function () {
    var clickPin = function (event) {
      target = event.target;
      if (event.keyCode === ENTER || event.type === 'click') {
        while (target !== tokyoPinMap) {
          if (target.classList.contains('pin')) {
            activatePin();
            showCard(dialog);
            break;
          }
          target = target.parentNode;
        }
      }
      if (event.keyCode === ESC) {
        dialogClickClose(function() {
          activePin.focus();
        });
      }
    };
    tokyoPinMap.addEventListener('keydown', clickPin);
    tokyoPinMap.addEventListener('click', clickPin);
    dialogClose.addEventListener('click', dialogClickClose);
  };
})();
