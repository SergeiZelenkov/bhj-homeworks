const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
const clickerSpeed = document.getElementById("clicker__speed");
let cookeSize = false;

cookie.onclick = function () {
  clickerCounter.textContent++;

  if (cookeSize) {
    cookie.style.width = "210px";
  } else {
    cookie.style.width = "200px";
  }
  cookeSize = !cookeSize;
};
