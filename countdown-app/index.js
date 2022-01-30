let months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
]

let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday"
]

let giveaway = document.querySelector('.giveaway');
let futureDate = new Date(2022, 3, 24, 10, 30, 0);
let deadline = document.querySelectorAll('.deadline-format h4');
const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const day = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
let hr = futureDate.getHours();
let mintue = futureDate.getMinutes();
giveaway.innerText = `Giveaway Ends On ${day}, ${date} ${month} ${year}, ${hr}:${mintue}am`;

function getRemainingTime() {
  let todayDate = new Date();
  let futureDateTime = futureDate.getTime();
  let todayDateTime = todayDate.getTime();
  let diffrencetime = futureDateTime - todayDateTime;
  const oneday = 24 * 60 * 60 * 1000;
  const onehr = 60 * 60 * 1000;
  const onemin = 60 * 1000;
  let calcDay = diffrencetime / oneday;
  calcDay = Math.floor(calcDay);
  let calhour = (diffrencetime % oneday) / onehr;
  calhour = Math.floor(calhour);
  let calmintue = (diffrencetime % onehr) / onemin;
  calmintue = Math.floor(calmintue);
  let calsec = (diffrencetime % onemin) / 1000;
  calsec = Math.floor(calsec);
  const val = [calcDay, calhour, calmintue, calsec];

  deadline.forEach((eledeadline, index) => {
    eledeadline.innerHTML = val[index]
  })
}

getRemainingTime();

let countdown = setInterval(getRemainingTime , 1000);

