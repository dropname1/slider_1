let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let slider = document.querySelector('.slider_show_area'),
posit = 0;

next.addEventListener('click',function () {
  posit = posit + 500;
  if (posit >= 1500) {
    posit = 0;
  }
  slider.classList.add('animation')
  slider.style.left = - posit + 'px'
  setTimeout(()=> {
   slider.classList.remove("animation");
  },500)
  console.log(posit);
})
prev.addEventListener('click',function () {
  posit = posit - 500;
   if (posit <= -1) {
     posit = 1000;
   }
  console.log(posit)
  slider.style.left = -posit + 'px'
 
})