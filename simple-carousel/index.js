let slides = document.querySelectorAll('.slide');
let prevBtn = document.querySelector('.prevBtn');
let nextBtn = document.querySelector('.nextBtn');

slides.forEach((slide, index)=> {
  slide.style.left = `${index * 100}%`;
})

let counter = 0;

prevBtn.addEventListener('click', function(){
  counter--;
  carousel();
});

nextBtn.addEventListener('click', function(){
  counter++;
  carousel();
});

function carousel() {

  if(counter < 0) {
    counter = slides.length - 1;
  }

  if(counter === slides.length) {
    counter = 0;
  }

  slides.forEach((slide) => {
    slide.style.transform = `translate(-${counter * 100}%)`;
  })
}
