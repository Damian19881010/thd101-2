var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



var my_btn = document.getElementById("btn");
my_btn.addEventListener("click", function(){
  alert("還沒寫完 別亂按!");
});



function openPage(pageName) {
  var i, page;
  page = document.getElementsByClassName("page");
  for (i = 0; i < page.length; i++) {
    page[i].classList.remove("active");
  }
  document.getElementById(pageName).classList.add("active");

  var tablinks;
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  document.querySelector("button[data-page='" + pageName + "']").classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".tablinks").click();
})


