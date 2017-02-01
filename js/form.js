var tokyoPinMap = document.querySelector('.tokyo__pin-map');
var dialog = document.querySelector('.dialog');
var dialogClose = document.querySelector('.dialog__close');
var clickPin;
var target;
var dialogClickOpen;
var dialogClickClose;

dialogClickOpen = function(event) {
  target = event.target;
  while (target != this) {
    if (target.className === 'pin') {
      highlight(target);
      return;
    }
    target = target.parentNode;
  }
}

function highlight(node) {
  if (clickPin) {
    clickPin.classList.remove('pin--active');
  }
  clickPin = node;
  clickPin.classList.add('pin--active');
  dialog.style.display = "block";
}

tokyoPinMap.addEventListener ('click', dialogClickOpen);

dialogClickClose = function() {
  dialog.style.display = "none";
  var clickActive = tokyoPinMap.querySelector('.pin--active');
  clickActive.classList.remove('pin--active');
}

dialogClose.addEventListener ('click', dialogClickClose);
