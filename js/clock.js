const clock = document.querySelector("h2#clock");
const countDownDate = new Date("Dec 25, 2022 00:00:00");
const now = new Date();
const timeLeft = countDownDate - now;
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0"); 
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  // 2 digits in each field for 2 in padStart
  // When I set 1 in the 2nd arg of padStart for seconds -> starts with 10 
  // instead of 00.
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
// setInterval: the function executes periodically 
// after a given time as an argument has passed.
// 1000 ms = 1s in the argument.