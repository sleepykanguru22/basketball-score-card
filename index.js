// make buttons work
//home & guest both have a set of buttons
//+1, +2, +3
//follow design

let homeScore = 0;
let guestScore = 0;

let homeEl = document.getElementById("home");

let guestEl = document.getElementById("guest");

const plusOne = (team) => {
  if (team === "home") {
    homeScore += 1;
    homeEl.textContent = homeScore;
  }
  if (team === "guest") {
    guestScore += 1;
    guestEl.textContent = guestScore;
  }
};

const plusTwo = (team) => {
  if (team === "home") {
    homeScore += 2;
    homeEl.textContent = homeScore;
  }
  if (team === "guest") {
    guestScore += 2;
    guestEl.textContent = guestScore;
  }
};

const plusThree = (team) => {
  if (team === "home") {
    homeScore += 3;
    homeEl.textContent = homeScore;
  }
  if (team === "guest") {
    guestScore += 3;
    guestEl.textContent = guestScore;
  }
};

const reset = () => {
  homeEl.textContent = 0;
  guestEl.textContent = 0;
};
