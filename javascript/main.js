document.addEventListener('DOMContentLoaded', function () {
  var timeFlashSale = 15;
  // slides
  var circles = document.querySelectorAll('.fa-circle');
  var slides = document.querySelectorAll('.slide');
  for (circle of circles) {
    circle.addEventListener('click', function () {
      autoSlideStart.stop();
      autoSlideStart.continue();
      let currentCircle = document.querySelector('.circle.fas');
      let currentSlide = document.querySelector('.slide.active');
      currentSlide.classList.remove('active');
      currentCircle.classList.remove('fas');
      this.classList.add('fas');
      var listCircles = Object.values(circles);
      var indexCircles = listCircles.indexOf(this);
      slides[indexCircles].classList.add('active');
    });
  }

  function autoSlide() {
    this.start = setInterval(toNextSlide, 2000);
    this.stop = function () {
      clearInterval(this.start);
    }
    this.continue = function () {
      this.start = setInterval(toNextSlide, 2000);
    }
  }

  var autoSlideStart = new autoSlide();
  autoSlide.start;

  function toNextSlide() {
    let currenSlide = document.querySelector('.slide.active');
    let currenCircle = document.querySelector('.circle.fas');
    currenSlide.classList.remove('active');
    currenCircle.classList.remove('fas');
    if (currenSlide.nextElementSibling != null) {
      currenSlide.nextElementSibling.classList.add('active');
      currenCircle.nextElementSibling.classList.add('fas');
    } else {
      slides[0].classList.add('active');
      circles[0].classList.add('fas');
    }
  }
  // countdown timer
  function startTimer(duration, getMinutes, getSeconds) {
    var timer = duration,
      minutes, seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      getMinutes.textContent = minutes;
      getSeconds.textContent = seconds;

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }

  window.onload = function () {
    var Minutes = 60 * timeFlashSale,
      getMin = document.querySelector('#min');
    getSec = document.querySelector('#sec');
    startTimer(Minutes, getMin, getSec);
  };

  //progress bar
  const progress = document.querySelectorAll('.progress-done');
  for (x of progress) {
    x.style.width = x.getAttribute('data-done') + '%';
    x.style.opacity = 1;
  }
}, false);