const timeContainer = document.getElementById("timeContainer");

let date = new Date();
timeContainer.innerHTML = date.toLocaleTimeString("en-In");

const handSecond = document.getElementById("handSecond");
const handMinute = document.getElementById("handMinute");
const handHour = document.getElementById("handHour");

const setHands = () => {
  timeContainer.innerHTML = date.toLocaleTimeString("en-In");
  let sec = (360 / 60) * date.getSeconds();
  let min = (360 / 60) * (date.getMinutes() + date.getSeconds() / 60);
  let hour = (360 / 12) * (date.getHours() + date.getMinutes() / 60);
  console.log(hour, date.getHours());
  handHour.style.transform = `rotate(${hour % 360}deg)`;
  handMinute.style.transform = `rotate(${min % 360}deg)`;
  handSecond.style.transform = `rotate(${sec % 360}deg)`;
};

setHands();

setInterval(() => {
  date = new Date();
  setHands();
}, 1000);
