let loginbtn = document.querySelector('.btn-big');
let btnClose = document.querySelector('.btn-close');
let modal = document.querySelector('.modal');

loginbtn.addEventListener('click', function(e){
  e.preventDefault();
  modal.classList.add('opened');
})

btnClose.addEventListener('click', function(e){
  e.preventDefault();
  modal.classList.remove('opened');
})

modal.addEventListener('click', function(e){
  e.currentTarget.classList.remove('opened')
})