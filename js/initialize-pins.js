'use strict';

window.initializePins = (function () {
  var activePin = document.querySelector('.pin.pin--active');
  var dialog = document.querySelector('.dialog');
  var dialogClose = document.querySelector('.dialog__close');
  var pinCallback = null;
  var clickedPin;

  var activatePin = function (setPin) {
    activePin.classList.remove('pin--active');
    activePin.setAttribute('aria-pressed', false);
    setPin.classList.add('pin--active');
    setPin.setAttribute('aria-pressed', true);
    clickedPin = setPin;
    activePin = setPin;
  };

  var dialogClickClose = function () {
    dialog.style.display = 'none';
    activePin.classList.remove('pin--active');
    activePin.setAttribute('aria-pressed', false);
    if (typeof pinCallback === 'function') {
      pinCallback();
      pinCallback = null;
    }
  };
  
  var tokyoPinMap = document.querySelector('.tokyo__pin-map');
  var ENTER = 13;
  var ESC = 27;
  var clickPin = function (event) {
    var target = event.target;
    if (event.keyCode === ENTER || event.type === 'click') {
      while (target !== tokyoPinMap) {
        if (target.classList.contains('pin')) {
          activatePin(target);
          showCard(dialog, dialogClose);
          break;
        }
        target = target.parentNode;
      }
    }
    if (event.keyCode === ENTER) {
      pinCallback = function () {
        clickedPin.focus();
      }
    }
    if (event.keyCode === ESC) {
      dialogClickClose();
    }
  };
  tokyoPinMap.addEventListener('keydown', clickPin);
  tokyoPinMap.addEventListener('click', clickPin);
  dialogClose.addEventListener('click', dialogClickClose);
})();
