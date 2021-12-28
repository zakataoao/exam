let btn = document.querySelector('.btn');
let gamebtn = document.querySelector('.gamebtn');
let game = document.querySelector('.game');
let stats = document.querySelector('.score');
let score = 0;
function random(max){
  return Math.floor(Math.random() * max);
}
btn.addEventListener('click', function(){
  game.style.transform = 'translateX(0)';
})
gamebtn.addEventListener('mouseover', function(){
  gamebtn.style.top = random(100) + '%';
  gamebtn.style.left = random(100) + '%';
})
gamebtn.addEventListener('click', function(){
  gamebtn.style.top = random(100) + '%';
  gamebtn.style.left = random(100) + '%';
  score++;
  stats.innerHTML = score;
})
