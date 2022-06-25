function createProgressbar(id, duration, callback) {
  var progressbar = document.getElementById(id);
  progressbar.className = "progressbar";
  var progressbarinner = document.createElement("div");
  progressbarinner.className = "inner";
  progressbarinner.style.animationDuration = duration;
  if (typeof callback === "function") {
    progressbarinner.addEventListener("animationend", callback);
  }
  progressbar.appendChild(progressbarinner);
  progressbarinner.style.animationPlayState = "running";
}
addEventListener("load", function () {
  createProgressbar("progressbar2", "15s");
});

function storyPosition() {
  let story = document.querySelectorAll(".story-post");
  let storyBtn = document.querySelector(".story-button");
  let storyBtn2 = document.querySelector(".story-button2");
  let storyActive = document.querySelectorAll(".profile");
  let storyActive2 = document.querySelectorAll(".interact");
  let storyActive3 = document.querySelectorAll(".profile-pic");
  let width = 0;
  let j = 2;

  // Avança para o próximo story

  // Converter a função anonima para uma função normal e chamar ela usando click event e um set time out de 15s

  storyBtn.addEventListener("click", () => {
    if (j < story.length - 2) {
      width += story[0].clientWidth + 40;
      j++;
      let k = j - 1;

      Array.from(story).forEach((card) => {
        card.style.transform = `translate(-${width}px, 0)`;
      });

      story[k].classList.remove("active");
      story[j].classList.add("active");

      if (story[j].classList.contains("active")) {
        storyActive[j].style.display = "flex";
        storyActive2[j].style.display = "flex";
        storyActive3[j].style.opacity = "0";
        storyActive[k].style.display = "none";
        storyActive2[k].style.display = "none";
        storyActive3[k].style.opacity = "1";
      }
    }
    storyBtn2.style.backgroundColor = "#fff";
  });

  // Volta para o Story anterior

  storyBtn2.addEventListener("click", () => {
    if (j > 2) {
      j = j - 1;
      let l = j + 1;
      width = width - (story[1].clientWidth + 40);
      Array.from(story).forEach((card) => {
        card.style.transform = `translate(-${width}px, 0)`;
      });
      story[l].classList.remove("active");
      story[j].classList.add("active");

      if (story[j].classList.contains("active")) {
        storyActive[j].style.display = "flex";
        storyActive2[j].style.display = "flex";
        storyActive3[j].style.opacity = "0";
        storyActive[l].style.display = "none";
        storyActive2[l].style.display = "none";
        storyActive3[l].style.opacity = "1";
      }
    }
  });
}
