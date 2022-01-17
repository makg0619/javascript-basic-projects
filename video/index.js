let switchbtn = document.querySelector('.switch-btn');
let video = document.querySelector('.video-container');
let preloader = document.querySelector('.preloader');
console.log(switchbtn);

switchbtn.addEventListener('click', function(e){
  if(!switchbtn.classList.contains('slide')){
    e.currentTarget.classList.add('slide');
    video.pause();
  } else {
    e.currentTarget.classList.remove('slide');
    video.play();
  }
});

window.addEventListener('load', function(){
  preloader.classList.add('hide-preloader');
})