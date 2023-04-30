const timerContainer = document.querySelector(".timer");
const startButton = document.querySelector(".start-button");
const pauseButton = document.querySelector(".pause-button");
const resetButton = document.querySelector(".reset-button");
const breakContainer = document.querySelector(".break-container");

let timeLeft = 1500; // 25 minutes in seconds
let isTimerRunning = false;
let timerInterval;
let timebreak=300

function startTimer() {
  isTimerRunning = true;
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      isTimerRunning = false;
      breakContainer.style.display = "block";
    }
  }, 1000);
}

function breakTimer(){
  isTimerRunning = true;
  timerInterval = setInterval(() => {
    timebreak--;
    updateTimerDisplay();

    if (timebreak === 0) {
      clearInterval(timerInterval);
      isTimerRunning = false;
      breakContainer.style.display = "block";
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
  timeLeft = 1500;
  updateTimerDisplay();
  breakContainer.style.display = "none";
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  const displaySeconds = seconds < 10 ? "0" + seconds : seconds;
  timerContainer.textContent = `${displayMinutes}:${displaySeconds}`;
}

startButton.addEventListener("click", () => {
  if (!isTimerRunning) {
    startTimer();
  }
});

pauseButton.addEventListener("click", () => {
  if (isTimerRunning) {
    pauseTimer();
  }
});

resetButton.addEventListener("click", () => {
  resetTimer();
});
