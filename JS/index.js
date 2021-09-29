// start bar search 
let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
searchBtn.addEventListener ("click", ()=>{
    searchBtn.classList.toggle("fa-times");
    searchBar.classList.toggle("active");
});
window.onscroll= function () {
    searchBtn.classList.remove("fa-times");
    searchBar.classList.remove("active");
}
// end bar search 