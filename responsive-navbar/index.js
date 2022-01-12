var hamburger = document.querySelector('.hamburger');
var navbar = document.querySelector('.nav-links');
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', function(e){
  e.currentTarget.classList.toggle('toggle');
  navbar.classList.toggle('open');
  links.forEach((link)=>{
    link.classList.toggle('fade');
  })
})