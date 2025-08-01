let startTime;
let interval;
let elapsedTime = 0;
let running = false;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

function updateTime() {
  const now = Date.now();
  elapsedTime = now - startTime;

  const ms = Math.floor((elapsedTime % 1000) / 10);
  const secs = Math.floor((elapsedTime / 1000) % 60);
  const mins = Math.floor((elapsedTime / (1000 * 60)) % 60);

  display.textContent = 
    `${pad(mins)}:${pad(secs)}:${pad(ms)}`;
}

function pad(num) {
  return num.toString().padStart(2, '0');
}

function start() {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    interval = setInterval(updateTime, 100);
    running = true;
  }
}

function pause() {
  if (running) {
    clearInterval(interval);
    running = false;
  }
}

function reset() {
  clearInterval(interval);
  elapsedTime = 0;
  display.textContent = "00:00:00";
  laps.innerHTML = "";
  running = false;
}

function lap() {
  if (running) {
    const li = document.createElement('li');
    li.textContent = display.textContent;
    laps.appendChild(li);
  }
}
