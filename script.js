const dayCard = document.getElementById("day");
const hourCard = document.getElementById("hour");
const minuteCard = document.getElementById("minute");
const secondCard = document.getElementById("second");

const oneDay = 24 * 60 * 60;
const oneHour = 60 * 60;
const oneMin = 60;

// start the countdown at 14 days as per the requirement
let day = 14;
let t = oneDay * 14;


function countDown() {
  // seconds in each unit:
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let mins = Math.floor((t % oneHour) / oneMin);
  let secs = Math.floor(t % oneMin);

  const values = [days, hours, mins, secs];
  const cards = [dayCard, hourCard, minuteCard, secondCard];

  if (t !== 0) {
    t--;
  } else {
    clearInterval(intervalID);
  }

  cards.forEach((card, ind) => {
    const current = card.querySelector(".current");
    const next = card.querySelector(".next");
    let number = current.querySelector(".number");

    // check if the values are different with that on the card
    if (values[ind] !== parseInt(number.textContent)) {
      number.textContent = "";
      current.style.background = "none";

      next.querySelectorAll(".number").forEach((num) => {
        if (values[ind] / 10 >= 1) {
          num.textContent = values[ind];
        } else {
          num.textContent = "0" + values[ind];
        }
      });
      card.classList.add("flip");

       setTimeout(() => {
         card.classList.remove("flip");
         current.querySelectorAll(".number").forEach((num) => {
           if (values[ind] / 10 >= 1) {
             num.textContent = values[ind];
           } else {
             num.textContent = "0" + values[ind];
           }
         });
       }, 900);
    }
  });

}

let intervalID = setInterval(countDown, 1000);
countDown();
