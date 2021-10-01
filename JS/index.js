// start bar search 
let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let loginBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-container");
let closeLoginForm =document.querySelector("#form-close");
let menuBar =document.querySelector ("#menu-bar");
let navBar = document.querySelector (".navbar");

searchBtn.addEventListener ("click", ()=>{
    menuBar.classList.remove("fa-times");
    navBar.classList.remove("active");
    loginForm.classList.remove("active");
    searchBtn.classList.toggle("fa-times");
    searchBar.classList.toggle("active");
});
menuBar.addEventListener ("click", ()=>{
    searchBtn.classList.remove("fa-times");
    searchBar.classList.remove("active");
    loginForm.classList.remove("active");
    menuBar.classList.toggle("fa-times");
    navBar.classList.toggle("active");
});
loginBtn.addEventListener ("click", ()=>{
    menuBar.classList.remove("fa-times");
    navBar.classList.remove("active");
    searchBtn.classList.remove("fa-times");
    searchBar.classList.remove("active");
    loginForm.classList.add("active");
});
closeLoginForm.addEventListener ("click", ()=>{
    loginForm.classList.remove("active");
});
window.onscroll= function () {
    menuBar.classList.remove("fa-times");
    navBar.classList.remove("active");
    searchBtn.classList.remove("fa-times");
    searchBar.classList.remove("active");
    loginForm.classList.remove("active");
}
// end bar search 
// start home 
let vidBtn =document.querySelectorAll(".vid-btn");
vidBtn.forEach (btn =>{
    btn.addEventListener("click",() => {
        document.querySelector(".controls .active").classList.remove("active");
        btn.classList.add("active");
        let btnSrc =btn.getAttribute("data-btn");
        document.querySelector("#video-slider").src=btnSrc;
    });
});
// end home 
// review section start 
var swiper1 = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay : 7500,
        disableOnInteraction:false,
    },
    centeredSlides:true,
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
// review section end 
// start brand section 
var swiper2 = new Swiper(".brand-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay : 2500,
        disableOnInteraction:false,
    },
    centeredSlides:true,
    breakpoints: {
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });
// end brand section 