let isTimer = true;
let time = 300;
let interval;
let running = false;

document.getElementById("timerTab").addEventListener("click", function () {
  isTimer = true;
  reset();
  this.classList.add("active");
  document.getElementById("stopwatchTab").classList.remove("active");
  document.getElementById("timerButtons").classList.remove("hidden");
});

document.getElementById("stopwatchTab").addEventListener("click", function () {
  isTimer = false;
  reset();
  this.classList.add("active");
  document.getElementById("timerTab").classList.remove("active");
  document.getElementById("timerButtons").classList.add("hidden");
});

function updateDisplay() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  document.getElementById("timeDisplay").innerText = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function toggleTimer() {
  if (running) {
    clearInterval(interval);
    running = false;
  } else {
    interval = setInterval(() => {
      if (isTimer && time > 0) {
        time--;
      } else if (!isTimer) {
        time++;
      }
      updateDisplay();
    }, 1000);
    running = true;
  }
}

function addTime(seconds) {
  time += seconds;
  updateDisplay();
}

function reset() {
  clearInterval(interval);
  running = false;
  time = isTimer ? 300 : 0;
  updateDisplay();
}

updateDisplay();
