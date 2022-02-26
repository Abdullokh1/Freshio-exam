let elopenBtn = document.getElementById('rightBtn');

let elopenBtnsecond = document.getElementById('rightBtn-2');

let elopenBtnthird = document.getElementById('rightBtn-3');

let elhidebody = document.getElementById('hideBody');

let elclosebtn = document.getElementById('closeBtn');

let elclosebtnsecond = document.getElementById('closeBtn-2');

let elclosebtnthird = document.getElementById('closeBtn-3');


let elhidebodysecond = document.getElementById('hideBody-2');

let elhidebodythird = document.getElementById('hideBody-3');



elopenBtn.addEventListener('click', function(){
  elhidebody.classList.add('display');
})

elclosebtn.addEventListener('click', function(){
  elhidebody.classList.remove('display');
})

elopenBtnsecond.addEventListener('click', function(){
  elhidebodysecond.classList.add('display');
})

elopenBtnthird.addEventListener('click', function(){
  elhidebodythird.classList.add('display');
})

elclosebtnsecond.addEventListener('click', function(){
  elhidebodysecond.classList.remove('display');
})

elclosebtnthird.addEventListener('click', function(){
  elhidebodythird.classList.remove('display');
})

elclosebtnsecond.addEventListener('click', function(){
  elhidebodysecond.classList.remove('display');
})