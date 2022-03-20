//clipboardBtn
var clipboard = new ClipboardJS('.btnCopy');
const succesCopy = function(){
  let modal = document.querySelector('.succesCopy')
  const toggleActive = function(){
    modal.classList.toggle('activeModalCopy');
  };
  toggleActive();
  setTimeout(toggleActive, 3000);
};
clipboard.on('success', function(e) {
  succesCopy();
  e.clearSelection();
});

clipboard.on('error', function(e) {
  alert('Ошибка копирования адреса сервера :(');
});

//particles
window.onload = function() {
  var particles = Particles.init({
    selector: '.background',
    color: '#00c3ff',
  });
};
//modals
const closeBtn = document.querySelector('.close-btn');
const modal = document.querySelector('.modal');
const blocks = document.querySelectorAll('.block');
const body = document.querySelector('.body');
blocks.forEach((element) => {
  element.addEventListener('click', () => {
    modal.classList.toggle('active');
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.toggle('active');
})


//filter
let elementsGod = document.querySelectorAll('.god');
const filter = function(category){
  if (category == 'god'){
    blocks.forEach(function(element){
      if (!(element.classList.contains('god'))){
        element.classList.add('hide');
      } else {
        element.classList.add('active');
        element.classList.remove('hide');
      };
    });
  } else if (category == 'death'){
    blocks.forEach(function(element){
      if (!(element.classList.contains('death'))){
        element.classList.add('hide');
      } else {
        element.classList.add('active');
        element.classList.remove('hide');
      };
    });
  } else if (category == 'all'){
    blocks.forEach(function(element){
      element.classList.remove('hide');
      element.classList.add('active');
    });
  } else if (category == 'different'){
    blocks.forEach(function(element){
      if (!(element.classList.contains('different'))){
        element.classList.add('hide');
      } else {
        element.classList.add('active');
        element.classList.remove('hide');
      };
    });
  } else if (category == 'pro'){
    blocks.forEach(function(element){
      if (!(element.classList.contains('pro'))){
        element.classList.add('hide');
      } else {
        element.classList.add('active');
        element.classList.remove('hide');
      };
    });
  }
};
//radio
const radioBtns = document.querySelectorAll('.second__btn');
radioBtns.forEach((element)=>{
    element.addEventListener('click', () => {
      radioBtns.forEach((e)=>{e.classList.remove('focus')});
      element.classList.add('focus');
    });
  });