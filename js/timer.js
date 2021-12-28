let date = new Date('May 26 2022 12:00:00');

function counts(){
  let now = new Date();
  gap = date - now;
  let d = Math.floor(gap / 1000 / 60 / 60 / 24);
  let h = Math.floor(gap / 1000 / 60 / 60) % 24;
  let m = Math.floor(gap / 1000 / 60) % 60;
  let s = Math.floor(gap / 1000 ) % 60;
  document.querySelector('.d').innerHTML = d + '<br> Дней';
  document.querySelector('.h').innerHTML = h + '<br> Часов';
  document.querySelector('.m').innerHTML = m + '<br> Минут';
  document.querySelector('.s').innerHTML = s + '<br> Секунд';
}
setInterval(counts, 100);
