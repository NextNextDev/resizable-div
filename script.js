const resizable = document.getElementById('resizable');
const resizers = document.querySelectorAll('.resizer');
let originalWidth = 0;
let originalHeight = 0;
let originalX = 0;
let originalY = 0;
let originalMouseX = 0;
let originalMouseY = 0;

resizers.forEach(resizer => {
  resizer.addEventListener('mousedown', initResize);
});

function initResize(e) {
  e.preventDefault();
  originalWidth = parseFloat(getComputedStyle(resizable, null).getPropertyValue('width').replace('px', ''));
  originalHeight = parseFloat(getComputedStyle(resizable, null).getPropertyValue('height').replace('px', ''));
  originalX = resizable.getBoundingClientRect().left;
  originalY = resizable.getBoundingClientRect().top;
  originalMouseX = e.pageX;
  originalMouseY = e.pageY;
  window.addEventListener('mousemove', resize);
  window.addEventListener('mouseup', stopResize);
}

function resize(e) {
  if (e.target.classList.contains('se')) {
    resizable.style.width = originalWidth + (e.pageX - originalMouseX) + 'px';
    resizable.style.height = originalHeight + (e.pageY - originalMouseY) + 'px';
  } else if (e.target.classList.contains('sw')) {
    resizable.style.width = originalWidth - (e.pageX - originalMouseX) + 'px';
    resizable.style.height = originalHeight + (e.pageY - originalMouseY) + 'px';
    resizable.style.left = originalX + (e.pageX - originalMouseX) + 'px';
  } else if (e.target.classList.contains('ne')) {
    resizable.style.width = originalWidth + (e.pageX - originalMouseX) + 'px';
    resizable.style.height = originalHeight - (e.pageY - originalMouseY) + 'px';
    resizable.style.top = originalY + (e.pageY - originalMouseY) + 'px';
  } else if (e.target.classList.contains('nw')) {
    resizable.style.width = originalWidth - (e.pageX - originalMouseX) + 'px';
    resizable.style.height = originalHeight - (e.pageY - originalMouseY) + 'px';
    resizable.style.top = originalY + (e.pageY - originalMouseY) + 'px';
    resizable.style.left = originalX + (e.pageX - originalMouseX) + 'px';
  } else if (e.target.classList.contains('e')) {
    resizable.style.width = originalWidth + (e.pageX - originalMouseX) + 'px';
  } else if (e.target.classList.contains('s')) {
    resizable.style.height = originalHeight + (e.pageY - originalMouseY) + 'px';
  } else if (e.target.classList.contains('w')) {
    resizable.style.width = originalWidth - (e.pageX - originalMouseX) + 'px';
    resizable.style.left = originalX + (e.pageX - originalMouseX) + 'px';
  } else if (e.target.classList.contains('n')) {
    resizable.style.height = originalHeight - (e.pageY - originalMouseY) + 'px';
    resizable.style.top = originalY + (e.pageY - originalMouseY) + 'px';
  }
}

function stopResize() {
  window.removeEventListener('mousemove', resize);
  window.removeEventListener('mouseup', stopResize);
}
