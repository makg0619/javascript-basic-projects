let dateId = document.getElementById('date');

dateId.innerText = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function(){
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if(containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }

});

const nav = document.getElementById('nav');
let scrolltoTopBtn = document.querySelector('.top-link');
const navHeight = nav.getBoundingClientRect().height;

window.addEventListener('scroll', function(){ 
 const scrollHeight = window.pageYOffset;
 if(scrollHeight > navHeight) {
   nav.classList.add('fixed-nav');
 } else {
  nav.classList.remove('fixed-nav');
 }

 if(scrollHeight > 500) {
  scrolltoTopBtn.classList.add('show-link');
 }else {
  scrolltoTopBtn.classList.remove('show-link');
 }
});

let scrollLinks = document.querySelectorAll('.scroll-link');
window.addEventListener('scroll', function(e){
})
scrollLinks.forEach((scrollLink)=>{
  scrollLink.addEventListener('click', function(e){
    e.preventDefault();
    const linkshref = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(linkshref);
    let pos = element.offsetTop - navHeight;
    let fixedNav = nav.classList.contains('fixed-nav');
    
    if(!fixedNav) {
     pos = pos - navHeight;
    }

    window.scrollTo({
      left: 0,
      top: pos,
    });
    
    linksContainer.style.height = 0;
  })
})