'use strict';

window.initializePins = (function () {
  var activePin = document.querySelector('.pin.pin--active');
  var dialog = document.querySelector('.dialog');
  var dialogClose = document.querySelector('.dialog__close');
  var pinCallback = null;
  var clickedPin;
  var body = document.body;
  


  function activatePin(setPin) {
    activePin.classList.remove('pin--active');
    activePin.setAttribute('aria-pressed', false);
    setPin.classList.add('pin--active');
    setPin.setAttribute('aria-pressed', true);
    clickedPin = setPin;
    activePin = setPin;
  }

  function onDialogClose() {
    dialog.classList.remove('dialog--active');
    activePin.classList.remove('pin--active');
    activePin.setAttribute('aria-pressed', false);
    if (typeof pinCallback === 'function') {
      pinCallback();
      pinCallback = null;
    }
  }

  var tokyoPinMap = document.querySelector('.tokyo__pin-map');
  var ENTER = 13;
  var ESC = 27;
  function onPinClick(event) {
    var target = event.target;
    if (event.keyCode === ENTER || event.type === 'click') {
      while (target !== tokyoPinMap) {
        if (target.classList.contains('pin')) {
          activatePin(target);
          window.showCard(dialog);
          break;
        }
        target = target.parentNode;
      }
    }
    if (event.keyCode === ENTER) {
      pinCallback = function () {
        clickedPin.focus();
      };
    }
  }
  tokyoPinMap.addEventListener('keydown', onPinClick);
  tokyoPinMap.addEventListener('click', onPinClick);
  dialogClose.addEventListener('click', onDialogClose);

  function onDialogEscClose(event) {
    if (event.keyCode === ESC && dialog.classList.contains('dialog--active')) {
      onDialogClose();
    }
  }
  body.addEventListener('keydown', onDialogEscClose);
})();
