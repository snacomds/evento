import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'


const servicesSwiper = new Swiper('.services-swiper', {
  initialSlide:5,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  
  slidesPerGroup: 1,
  grabCursor: true,
  loop: true,
  pagination: { 
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    disableOnInteraction: 0
},
});


// setInterval(()=>{
//   servicesSwiper.slideNext();
// },10000);


