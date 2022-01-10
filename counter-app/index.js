let displayCount = document.getElementById('displayCount');
let heading = document.querySelector('.font-weight-bold');
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
      heading.style.color = "#007bff";
      document.body.style.backgroundColor = "rgba(0,123,255, 0.10)";

    }
    else if (classes.contains('reset-btn')){
      count = 0;
      displayCount.innerText = count;
      displayCount.style.color = '#6c757d';
      heading.style.color = "#6c757d";
      document.body.style.backgroundColor = "rgba(108,117,125, 0.10)";

    }
    else {
      count++;
      displayCount.innerText = count;
      displayCount.style.color = '#28a745';
      heading.style.color = '#28a745';
      document.body.style.backgroundColor = "rgba(40,167,69, 0.10)";

    }
  });
})

