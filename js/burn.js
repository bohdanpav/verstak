const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'), 
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot')
      var btnOpen = document.getElementById('btn-open');
var modal = document.getElementById('wrapper-modal');

var overlay = document.getElementById('overlay');
var btnClose = document.getElementById('btn-close');

let index = 0;
const activeSlide = n =>{
   for(slide of slides) {
    slide.classList.remove('active');
   }
   slides[n].classList.add('active');
}

const activeDot = n =>{
   for(dot of dots) {
    dot.classList.remove('active');
   }
   dots[n].classList.add('active');
}

const prepareCurrentSlide = ind =>{
    activeSlide(index);
    activeDot(index);
}

const nextSlide = ()=>{
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
   } 
 }

setInterval(nextSlide, 3500);


const prevSlide = ()=>{
    if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
   } 
}

dots.forEach((item, indexDot)=>{
    item.addEventListener('click', ()=>{
        index = indexDot;
        prepareCurrentSlide(index);
    })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
btnOpen.addEventListener('click',function(){
    modal.classList.add('active');
});

function closeModal(){
    modal.classList.remove('active');
}

overlay.addEventListener('click',closeModal);
btnClose.addEventListener('click',closeModal);

var openmenu = document.getElementById('openmenu');
var menumodal = document.getElementById('menumodal');

var overmodal = document.getElementById('overmodal');
var menuclose = document.getElementById('menuclose');

openmenu.addEventListener('click',function(){
    menumodal.classList.add('active');
});

function closemodal(){
    menumodal.classList.remove('active');
}

overmodal.addEventListener('click',closemodal);
menuclose.addEventListener('click',closemodal);

