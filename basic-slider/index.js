let sliderData = [
  {
    id: 1,
    img: './avatar1.png',
    desig: 'Manager',
    details: 'UX Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa assumenda placeat reprehenderit incidunt ullam sapiente facilis molestias dolores delectus. Quos laudantium animi odio ullam nobis, illum quibusdam nihil sapiente deleniti! '
  },
  {
    id: 2,
    img: './avatar2.png',
    desig: 'UX/UI',
    details: 'UX/UI Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa assumenda placeat reprehenderit incidunt ullam sapiente facilis molestias dolores delectus. Quos laudantium animi odio ullam nobis, illum quibusdam nihil sapiente deleniti! '
  },
  {
    id: 3,
    img: './avatar3.png',
    desig: 'UI developer',
    details: 'UI Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa assumenda placeat reprehenderit incidunt ullam sapiente facilis molestias dolores delectus. Quos laudantium animi odio ullam nobis, illum quibusdam nihil sapiente deleniti! '
  },
  {
    id: 4,
    img: './avatar4.png',
    desig: 'Full stack developer',
    details: 'Full stack Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa assumenda placeat reprehenderit incidunt ullam sapiente facilis molestias dolores delectus. Quos laudantium animi odio ullam nobis, illum quibusdam nihil sapiente deleniti! '
  }
]

let currentIndex = 0;
let carouselContainer = document.querySelector('.carousel-container');
let img = document.querySelector('#image');
let designation = document.querySelector('#designation');
let details = document.querySelector('#details');
let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
let numbering = document.querySelector('#numbering');
let random = document.querySelector("#random");

document.addEventListener('DOMContentLoaded', displayData);
prev.addEventListener('click', displayprevData);
next.addEventListener('click', displaynextData);
random.addEventListener('click', displayrandomData);


function displayData() {
  currentData();
}

function displayprevData() {
  currentIndex --;
  if(currentIndex < 0 ) {
    currentIndex = sliderData.length - 1;
  }
  currentData();
}

function displaynextData() {
  currentIndex ++;
  if(currentIndex >= 4 ) {
    console.log('lastelement');
    currentIndex = 0;
  }
  currentData();
}

function displayrandomData() {
  currentIndex = Math.floor(Math.random() * 4);
  currentData();
}

function currentData() {
  let currentData = sliderData[currentIndex];
  img.src = currentData.img;
  designation.innerText = currentData.desig;
  details.innerText = currentData.details;
  numbering.innerText = currentData.id;
}