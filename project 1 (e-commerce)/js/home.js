let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});


let hr = document.querySelector('.hr');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');

let h = 20;
let m = 00;
let s = 00;

let firstTime = true;

setInterval(()=>{
  hr.innerHTML = h;
  min.innerHTML = m;
  sec.innerHTML = s;
  
  h-= (m == 0) ? 1 : 0;
  if(firstTime){
    m-= (m == 0) ? -60 : 0;
    firstTime = false;
  }else{
    m-= (m == 0) ? -59 : 0;
  }
  m-= (s == 0) ? 1 : 0;
  s-= (s == 0) ? -59 : 1;
},1000);

let swiper2 = new Swiper(".swiper2",{
  grabCursor: true,
  spaceBetween: 15,
  loop: true,
  breakpoints: {
    768.5:{
      slidesPerView: 2,
    },
    991.25:{
      slidesPerView: 3,
    },
    1200:{
      slidesPerView: 4,
    }
  },
});
