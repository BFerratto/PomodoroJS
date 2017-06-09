var pomodoro;
window.onload = function(){
  pomodoro.init();
};
var pomodoro ={
  started: false,
  minutes:0,
  seconds:0,
  interval: null,
  minutesDOM:null,
  secpondsDOM:null,

  init: function(){
    var event = this;
    this.minutesDOM = document.querySelector('#minutes');
    this.secondsDOM = document.querySelector('#seconds');
    this.interval = setInterval(function(){
      event.intervalCallback.apply(event);
    }, 1000);
    document.querySelector('#start').onclick = function () {
      event.startWork.apply(event);
    };
    }
  }
