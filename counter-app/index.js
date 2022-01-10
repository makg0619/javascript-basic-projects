let displayCount = document.getElementById('displayCount');
let allBtns = document.querySelectorAll('.btn');

let count = 0;

allBtns.forEach((allbtn) => {
  allbtn.addEventListener('click', function(e){
    let classes = e.currentTarget.classList;
    if(classes.contains('decrese-btn')) {
      // console.log('You got decrese btn');
      count--;
      displayCount.innerText = count;
      displayCount.style.color = "#007bff";
    }
    else if (classes.contains('reset-btn')){
      count = 0;
      displayCount.innerText = count;
      displayCount.style.color = '#6c757d';
    }
    else {
      count++;
      displayCount.innerText = count;
      displayCount.style.color = '#28a745';
    }
  });
})

