// Set the target date for the countdown (replace with your desired date)
const targetDate = new Date('2024-12-12T23:55:41');

function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;
  const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById('five').innerText = months.toString().padStart(2, '0');
  document.getElementById('one').innerText = days.toString().padStart(2, '0');
  document.getElementById('two').innerText = hours.toString().padStart(2, '0');
  document.getElementById('three').innerText = minutes.toString().padStart(2, '0');
  document.getElementById('four').innerText = seconds.toString().padStart(2, '0');
}
setInterval(updateCountdown, 1000);
updateCountdown();