intervalId = null;
var initialTime = null;
var pausedTime = 0;

function startTimer (){
  var time = document.getElementById('Work-length').innerHTML;
  initialTime = new Date().getTime();
  intervalId = window.setInterval(countdown,1000,time)
}
function pauseTimer(){
  window.clearInterval(intervalId);
  var newTime = new Date().getTime();
  pausedTime = newTime - initialTime;
}
function stopTimer (){
  window.clearInterval(intervalId);
  var actualLength = document.getElementById('Work-length').innerHTML
  document.getElementById('minutes').innerHTML = actualLength;
  document.getElementById('seconds').innerHTML = "00";
}
function countdown (totalTime){
  var currentTime = new Date().getTime();
  var ellapsedTime = currentTime - initialTime;
  ellapsedTime = Math.floor(ellapsedTime/1000);
  var totalSec = totalTime*60;
  var remainingSec = totalSec - ellapsedTime;
  var displayMin = Math.floor(remainingSec/60);
  var displaySec = remainingSec%60;
  document.getElementById('minutes').innerHTML = displayMin;
  document.getElementById('seconds').innerHTML = displaySec;

  console.log(displaySec)
  console.log(displayMin);
}

function decreaseWork(){
  var totalTime = document.getElementById('Work-length').innerHTML;
  var decreased = Math.max (totalTime-1, 0 );
  document.getElementById('Work-length').innerHTML = decreased;
  document.getElementById('minutes').innerHTML = decreased;
}
function increaseWork(){
  var totalTime = document.getElementById('Work-length').innerHTML;
  var increase = Math.min(~~totalTime+1, 30);
  document.getElementById('Work-length').innerHTML = increase;
  document.getElementById('minutes').innerHTML = increase;
}
function decreaseBreak(){
  var totalTime = document.getElementById('break-length').innerHTML;
  var decreased = Math.max (totalTime-1, 0 );
  document.getElementById('break-length').innerHTML = decreased;
  document.getElementById('minutes').innerHTML = decreased;
}
function increaseBreak(){
  var totalTime = document.getElementById('break-length').innerHTML;
  var increase = Math.min(~~totalTime+1, 15);
  document.getElementById('break-length').innerHTML = increase;
  document.getElementById('minutes').innerHTML = increase;
}
