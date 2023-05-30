var cursor = document.querySelector('.cursor');

function moveCursor(e) {
  cursor.classList.add('is-moving');
  cursor.style.top = e.pageY + 'px';
  cursor.style.left = e.pageX + 'px';

  clearTimeout(timer2);

  var timer2 = setTimeout(function() {
    cursor.classList.remove('is-moving');
  }, 300);
}

window.addEventListener('mousemove', moveCursor);