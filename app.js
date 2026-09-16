const CHECKS = [
  "Checking incoming settlement",
  "Reviewing designated receiving account",
  "Waiting for credit confirmation",
  "Reconciling the executed agreement",
];

const startedAt = Date.now();
let checkIndex = 0;

function pad(value) {
  return String(value).padStart(2, "0");
}

function formatElapsed(ms) {
  const total = Math.floor(ms / 1000);
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${pad(minutes)}:${pad(seconds)}`;
}

function formatClock(date) {
  return date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

function tick() {
  const elapsed = document.getElementById("elapsed");
  const checkedAt = document.getElementById("checkedAt");
  if (elapsed) elapsed.textContent = formatElapsed(Date.now() - startedAt);
  if (checkedAt) checkedAt.textContent = formatClock(new Date());
}

function cycleStatus() {
  checkIndex = (checkIndex + 1) % CHECKS.length;
  const statusLine = document.getElementById("statusLine");
  if (statusLine) statusLine.textContent = CHECKS[checkIndex];
}

tick();
setInterval(tick, 1000);
setInterval(cycleStatus, 4200);
