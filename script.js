$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [
      "Cybersecurity enthusiast",
      "Developer",
      "BioInformatics enthusiast",
      "Coder",
      "Problem solver",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Cybersecurity enthusiast",
      "Developer",
      "BioInformatics enthusiast",
      "Coder",
      "Problem solver",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

let circularProgressArr = document.querySelectorAll(".circular-progress"),
  progressValueArr = document.querySelectorAll(".progress-value");
fractionProb = [22800 / 778, 42600 / 1612, 11400 / 682];

for (let i = 0; i < 3; i++) {
  let circularProgress = circularProgressArr[i];
  let progressValue = progressValueArr[i];

  let progressStartValue = 0;
  let progressEndValue = fractionProb[i];
  console.log(progressEndValue);
  speed = 100;

  let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${
      progressStartValue * 3.6
    }deg, #ededed 0deg)`;

    if (progressStartValue >= progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
}
// let progressStartValue = 0,
//   progressEndValue = 76800 / 3072,
//   speed = 100;

// let progress = setInterval(() => {
//   progressStartValue++;

//   progressValue.textContent = `${progressStartValue}%`;
//   circularProgress.style.background = `conic-gradient(#7d2ae8 ${
//     progressStartValue * 3.6
//   }deg, #ededed 0deg)`;

//   if (progressStartValue == progressEndValue) {
//     clearInterval(progress);
//   }
// }, speed);
