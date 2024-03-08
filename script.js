let shimmer = true;

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
      "Software Developer",
      "Cybersecurity enthusiast",
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

const d = new Date();
const year = d.getFullYear();
document.querySelector(".year").textContent = year;
const f = async () => {
  try {
    const resp = await fetch(
      "https://leet-code-api-opal.vercel.app/userInfo/dan_stark123"
    );

    let data = await resp.json();
    data = data.data;
    console.log(JSON.stringify(data), "probs");
    const solvedArray = data.matchedUser.submitStatsGlobal.acSubmissionNum;
    const probsSolved = [
      solvedArray[1].count,
      solvedArray[2].count,
      solvedArray[3].count,
    ];
    const totalArray = data.allQuestionsCount;
    // const probsSolved = [d["easySolved"], d["mediumSolved"], d["hardSolved"]];
    const total = [
      totalArray[1].count,
      totalArray[2].count,
      totalArray[3].count,
    ];
    const totalSolved = solvedArray[0].count;

    console.log(probsSolved, totalSolved);
    return [probsSolved, total, totalSolved];
  } catch (err) {
    console.log("error");
  }
};

console.log("meme");
function myFunction() {
  console.log("pling");
  var element = document.body;
  element.classList.toggle("dark-mode");
}
const problemFunction = async () => {
  const problemInfo = await f();
  const element = `<div  class='cont-leet' onMouseOver="this.style.backgroundColor='rgb(219, 25, 25)'" onMouseOut="this.style.backgroundColor='#211f1f'" class="card" class="max-width" style="background-color: #211f1f ;border-radius: 5px; padding: 30px;">
              
  <div style="background-color: white; width: 60px; height: 60px; border-radius: 80%; display: flex; justify-content: center; align-items: center;">
      <img style="width: 50px; height: 50px;" src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" class="card-img-top" alt="...">
  </div>


  <div class="card-body p-0 pt-2">
    <h5 style ="text-align: center" card-title">LeetCode</h5>
    <p class="card-text">Marking the top coder on various online platforms , especially Leetcode.</p>
    <p class="card-text">Solved <span class="prob-count"> </span> problems</p>
    <div class="progress-bars-container" style="display: flex; justify-content: space-between;">
      <div class="circular-progress" style="margin-right: 10px;">
          <span class="progress-value">0</span>
     
      </div>
   
      <div class="circular-progress" style="margin-right: 10px;">
          <span class="progress-value">0</span>
      </div>
      
      <div class="circular-progress">
          <span class="progress-value">0</span>

     
      </div>
   
  </div>
  <div style="display: flex; justify-content: space-between; margin-top: 10px;">
      <div>Easy - <span class="easy"></span></div>
      <div>Medium - <span class="medium"></span></div>
      <div>Hard - <span class="hard"></span></div>
  </div>
  <div style="display: flex; flex-direction:row; justify-content: center">

      <div style="margin-top:10px">
          <a  href= "https://leetcode.com/dan_stark123/" class="btn btn-danger">LeetCode Profile</a>
      </div>
  </div>
  
 
  </div>
</div>
</div>
</div>   
`;
  document.getElementsByClassName("cont-leet")[0].innerHTML = element;
  const totalSolved = problemInfo[2];
  console.log(problemInfo);
  document.querySelector(".prob-count").textContent = totalSolved;
  document.querySelector(".easy").textContent = problemInfo[0][0];
  document.querySelector(".medium").textContent = problemInfo[0][1];
  document.querySelector(".hard").textContent = problemInfo[0][2];

  let circularProgressArr = document.querySelectorAll(".circular-progress"),
    progressValueArr = document.querySelectorAll(".progress-value");
  fractionProb = [
    (problemInfo[0][0] * 100) / problemInfo[1][0],
    (problemInfo[0][1] * 100) / problemInfo[1][1],
    (problemInfo[0][2] * 100) / problemInfo[1][2],
  ];

  for (let i = 0; i < 3; i++) {
    let circularProgress = circularProgressArr[i];
    let progressValue = progressValueArr[i];

    let progressStartValue = 0;
    let progressEndValue = fractionProb[i];
    console.log(progressEndValue);
    speed = 190;

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
};

problemFunction();
