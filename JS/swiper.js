const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });

// ---------------------------------------------------------------
    
    const prevBtn = document.querySelector('.img1');
    const nextBtn = document.querySelector('.img2');
    const images = document.querySelectorAll('.sec2 .pic img');
    const position = document.querySelector('.sec2 .position');
    
    
    var currentIndex = 0;
    let maxIndex = images.length - 1;
    
    // images[currentIndex].classList.add('active');

    
showPosition();

function showPosition() {
  position.textContent = `Image ${currentIndex + 1} of ${images.length}`;
}
    
    // function prevImage() {
    //     var currentImage = document.querySelector(".pic img.active");
    //     currentImage.classList.remove("active");
    //     currentIndex = (currentIndex - 1 + images.length) % images.length;
    //     document.querySelectorAll(".pic img")[currentIndex].classList.add("active");
    // }
    function prevImage() {
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex - 1 < 0) ? maxIndex : currentIndex - 1;
      images[currentIndex].classList.add('active');
      showPosition();
    }
    
    // function nextImage() {
    //     var currentImage = document.querySelector(".pic img.active");
    //     currentImage.classList.remove("active");
    //     currentIndex = (currentIndex + 1) % images.length;
    //     document.querySelectorAll(".pic img")[currentIndex].classList.add("active");
    // }
    function nextImage() {
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1 > maxIndex) ? 0 : currentIndex + 1;
      images[currentIndex].classList.add('active');
      showPosition();
    }

    images[currentIndex].classList.add('active');
    
    
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);
    

    

    // ------------------------------------------------------------------------------