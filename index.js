intervalId = null;
var initialTime = null;
var pausedTime = 0;
var isOnBreakTime = false;

function workTimer() {
  var time = 0
  if (isOnBreakTime) {
    time = document.getElementById("break-length").innerHTML;
  } else {
    time = document.getElementById("Work-length").innerHTML;
  }
  time = time * 60
  if (pausedTime > 0){
    time = time - pausedTime
  }
  initialTime = new Date().getTime();
  if (intervalId) {
    window.clearInterval(intervalId)
    intervalId = null
  }
  intervalId = window.setInterval(countdown, 1000, time);
  displayMin = document.getElementById("minutes").innerHTML;
  displaySec = document.getElementById("seconds").innerHTML;
}
function pauseTimer() {
  window.clearInterval(intervalId);
  intervalId = null
  var newTime = new Date().getTime();
  pausedTime += Math.floor((newTime - initialTime)/1000);
}
function stopTimer() {
  window.clearInterval(intervalId);
  intervalId = null
  pausedTime = 0;
  var actualLength = document.getElementById("Work-length").innerHTML;
  document.getElementById("minutes").innerHTML = actualLength;
  document.getElementById("seconds").innerHTML = "00";
}
function countdown (totalTime) {
  var currentTime = new Date().getTime();
  var ellapsedTime = currentTime - initialTime;
  ellapsedTime = Math.floor(ellapsedTime / 1000);
  var totalSec = totalTime;
  var remainingSec = totalSec - ellapsedTime;
  if (remainingSec < 0){
    window.clearInterval(intervalId);
    intervalId = null
    remainingSec = 0;
    pausedTime = 0;
    isOnBreakTime = !isOnBreakTime
    workTimer();
  }

  var displayMin = Math.floor(remainingSec / 60);
  var displaySec = remainingSec % 60;
  if (displaySec < 10) {
    displaySec = '0' + displaySec
  }
  document.getElementById("minutes").innerHTML = displayMin;
  document.getElementById("seconds").innerHTML = displaySec;
  console.log(displaySec);
  console.log(displayMin);
}

function decreaseWork() {
  var totalTime = document.getElementById("Work-length").innerHTML;
  var decreased = Math.max(totalTime - 1, 1);
  document.getElementById("Work-length").innerHTML = decreased;
  document.getElementById("minutes").innerHTML = decreased;
}
function increaseWork() {
  var totalTime = document.getElementById("Work-length").innerHTML;
  var increase = Math.min(~~totalTime + 1, 30);
  document.getElementById("Work-length").innerHTML = increase;
  document.getElementById("minutes").innerHTML = increase;
}
function decreaseBreak() {
  var totalTime = document.getElementById("break-length").innerHTML;
  var decreased = Math.max(totalTime - 1, 1);
  document.getElementById("break-length").innerHTML = decreased;
  document.getElementById("minutes").innerHTML = decreased;
}
function increaseBreak() {
  var totalTime = document.getElementById("break-length").innerHTML;
  var increase = Math.min(~~totalTime + 1, 15);
  document.getElementById("break-length").innerHTML = increase;
  document.getElementById("minutes").innerHTML = increase;
}
