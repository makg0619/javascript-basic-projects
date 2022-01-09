let colors = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

let bgFlipper = document.getElementById('bg-flipper');
let displayColor = document.getElementById('display-color');


bgFlipper.addEventListener('click', changeBG);

function changeBG() {
  let hexcode = '#';
  for (let index = 0; index <= 5; index++) {
    hexcode = hexcode + colors[getColor()]
  }
  document.body.style.backgroundColor = hexcode;
  displayColor.textContent = hexcode;
}

function getColor() {
  return Math.floor(Math.random() * 14);
}
