const minutesInput = document.getElementById('minutes');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const timerContainer = document.getElementById('timer');
const timeDisplay = document.getElementById('time');
const alarmSound = document.getElementById('alarm');

let countdown;
let timeLeft;

function startTimer() {
  const minutes = parseInt(minutesInput.value, 10);
  timeLeft = minutes * 60;
  updateTimerDisplay(timeLeft);
  countdown = setInterval(updateTimer, 1000);
  showTimer();
}

function updateTimer() {
  timeLeft--;
  updateTimerDisplay(timeLeft);
  if (timeLeft === 0) {
    clearInterval(countdown);
    playAlarm();
  }
}

function stopTimer() {
  clearInterval(countdown);
  hideTimer();
}

function updateTimerDisplay(time) {
  const minutes = Math.floor(time / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  timeDisplay.innerText = `${minutes}:${seconds}`;
}

function playAlarm() {
  alarmSound.play();
}

function showTimer() {
  timerContainer.style.display = 'block';
}

function hideTimer() {
  timerContainer.style.display = 'none';
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
