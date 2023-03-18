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
});