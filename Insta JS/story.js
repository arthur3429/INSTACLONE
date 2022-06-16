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
