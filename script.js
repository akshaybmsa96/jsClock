const timeContainer = document.getElementById("timeContainer");

let date = new Date();
timeContainer.innerHTML = date.toLocaleTimeString("en-In");

const handSecond = document.getElementById("handSecond");
const handMinute = document.getElementById("handMinute");
const handHour = document.getElementById("handHour");

const setHands = () => {
  timeContainer.innerHTML = date.toLocaleTimeString("en-In");
  let sec = (360 / 60) * date.getSeconds();
  let min = (360 / 60) * date.getMinutes();
  let hour = (360 / 12) * date.getHours();
  console.log(hour, date.getHours());
  handHour.style.transform = `rotate(${hour}deg)`;
  handMinute.style.transform = `rotate(${min}deg)`;
  handSecond.style.transform = `rotate(${sec}deg)`;
};

setHands();

setInterval(() => {
  date = new Date();

  setHands();
}, 1000);
