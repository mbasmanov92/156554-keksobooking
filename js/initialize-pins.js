'use strict';
var activePin = document.querySelector('.pin.pin--active');
var dialog = document.querySelector('.dialog');
var dialogClose = document.querySelector('.dialog__close');
var tokyoPinMap = document.querySelector('.tokyo__pin-map');
var dialogClickClose;
var clickPinMouse;
var ENTER = 13;
var ESC = 27;
var clickPinKeyboard;
var target;
window.initializePins = function () {
  clickPinMouse = function (event) {
    target = event.target;
    while (target !== tokyoPinMap) {
      if (target.classList.contains('pin')) {
        activePin.classList.remove('pin--active');
        activePin.setAttribute('aria-pressed', false);
        target.classList.add('pin--active');
        target.setAttribute('aria-pressed', true);
        dialog.style.display = 'block';
        activePin = target;
        break;
      }
      target = target.parentNode;
    }
  };
  tokyoPinMap.addEventListener('click', clickPinMouse);

  clickPinKeyboard = function (event) {
    target = event.target;
    if (event.keyCode === ENTER) {
      while (target !== tokyoPinMap) {
        if (target.classList.contains('pin')) {
          activePin.classList.remove('pin--active');
          activePin.setAttribute('aria-pressed', false);
          target.classList.add('pin--active');
          target.setAttribute('aria-pressed', true);
          dialog.style.display = 'block';
          activePin = target;
          break;
        }
        target = target.parentNode;
      }
    }
    if (event.keyCode === ESC) {
      dialog.style.display = 'none';
      activePin.classList.remove('pin--active');
      activePin.setAttribute('aria-pressed', false);
    }
  };
  tokyoPinMap.addEventListener('keydown', clickPinKeyboard);

  dialogClickClose = function () {
    dialog.style.display = 'none';
    activePin.classList.remove('pin--active');
    activePin.setAttribute('aria-pressed', false);
  };
  dialogClose.addEventListener('click', dialogClickClose);
};
