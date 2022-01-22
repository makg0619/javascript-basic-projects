let tabItems = document.querySelectorAll('.tab-item a');
let tabContents = document.querySelectorAll('.tab-content');

tabItems.forEach((tabitem)=> {
  tabitem.addEventListener('click', function(){
      let id = tabitem.getAttribute('href').slice(1);
      let elem = document.getElementById(id);
      elem.classList.add('content-visible');
      let activelink = tabitem.classList.add('active');
      tabItems.forEach((activetabitem)=> {
        if(tabitem != activetabitem) {
          activetabitem.classList.remove('active');
        }
      })
      tabContents.forEach((tabContent)=>{
        if(elem != tabContent) {
          tabContent.classList.remove('content-visible');
        }
      })
  })
})

// let accordionLists = document.querySelectorAll('.accordion li');

// accordionLists.forEach((accordionlist)=>{
//   accordionlist.addEventListener('click', function(e){
//     e.currentTarget.classList.toggle('shown');
//     accordionLists.forEach((onlyOneAccordionOpenAtATime)=>{
//       if(accordionlist != onlyOneAccordionOpenAtATime) {
//        onlyOneAccordionOpenAtATime.classList.remove('shown');
//       }
//     })
//   })
// })