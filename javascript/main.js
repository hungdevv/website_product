document.addEventListener(
  "DOMContentLoaded",
  function () {
    var timeFlashSale = 15;
    // slides
    var circles = document.querySelectorAll(".fa-circle");
    var slides = document.querySelectorAll(".slide");
    for (circle of circles) {
      circle.addEventListener("click", function () {
        autoSlideStart.stop();
        autoSlideStart.continue();
        let currentCircle = document.querySelector(".circle.fas");
        let currentSlide = document.querySelector(".slide.active");
        currentSlide.classList.remove("active");
        currentCircle.classList.remove("fas");
        this.classList.add("fas");
        var listCircles = Object.values(circles);
        var indexCircles = listCircles.indexOf(this);
        slides[indexCircles].classList.add("active");
      });
    }

    function autoSlide() {
      this.start = setInterval(toNextSlide, 2000);
      this.stop = function () {
        clearInterval(this.start);
      };
      this.continue = function () {
        this.start = setInterval(toNextSlide, 2000);
      };
    }

    var autoSlideStart = new autoSlide();
    autoSlide.start;

    function toNextSlide() {
      let currenSlide = document.querySelector(".slide.active");
      let currenCircle = document.querySelector(".circle.fas");
      currenSlide.classList.remove("active");
      currenCircle.classList.remove("fas");
      if (currenSlide.nextElementSibling != null) {
        currenSlide.nextElementSibling.classList.add("active");
        currenCircle.nextElementSibling.classList.add("fas");
      } else {
        slides[0].classList.add("active");
        circles[0].classList.add("fas");
      }
    }
    // countdown timer
    function startTimer(duration, getMinutes, getSeconds) {
      var timer = duration,
        minutes,
        seconds;
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
        getMin = document.querySelector("#min");
      getSec = document.querySelector("#sec");
      startTimer(Minutes, getMin, getSec);
    };

    //progress bar
    const progress = document.querySelectorAll(".progress-done");
    for (x of progress) {
      x.style.width = x.getAttribute("data-done") + "%";
      x.style.opacity = 1;
    }

    //social-nav
    var socialNav = document.querySelector("#social-nav");
    window.addEventListener("scroll", scrollFunction);
    function scrollFunction() {
      if (window.pageYOffset > 300) {
        // Show backToTopButton
        if (!socialNav.classList.contains("btnEntrance")) {
          socialNav.classList.remove("btnExit");
          socialNav.classList.add("btnEntrance");
          socialNav.style.display = "block";
        }
      } else {
        // Hide backToTopButton
        if (socialNav.classList.contains("btnEntrance")) {
          socialNav.classList.remove("btnEntrance");
          socialNav.classList.add("btnExit");
          setTimeout(function () {
            socialNav.style.display = "none";
          }, 250);
        }
      }
    }

    var backToTopButton = document.querySelector("#back-to-top-btn");

    window.addEventListener("scroll", scrollFunctionn);

    function scrollFunctionn() {
      if (window.pageYOffset > 300) {
        // Show backToTopButton
        if (!backToTopButton.classList.contains("btnEntrancee")) {
          backToTopButton.classList.remove("btnExitt");
          backToTopButton.classList.add("btnEntrancee");
          backToTopButton.style.display = "block";
        }
      } else {
        // Hide backToTopButton
        if (backToTopButton.classList.contains("btnEntrancee")) {
          backToTopButton.classList.remove("btnEntrancee");
          backToTopButton.classList.add("btnExitt");
          setTimeout(function () {
            backToTopButton.style.display = "none";
          }, 250);
        }
      }
    }

    backToTopButton.addEventListener("click", smoothScrollBackToTop);

    // function backToTop() {
    //   window.scrollTo(0, 0);
    // }

    function smoothScrollBackToTop() {
      const targetPosition = 0;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 750;
      let start = null;

      window.requestAnimationFrame(step);

      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(
          0,
          easeInOutCubic(progress, startPosition, distance, duration)
        );
        if (progress < duration) window.requestAnimationFrame(step);
      }
    }

    function easeInOutCubic(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    }
  },
  false
);
