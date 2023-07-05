const homeResult = document.querySelector("#home-result");
const guestResult = document.querySelector("#guest-result");

const homeAdd1 = document.querySelector("#home-add1");
const homeAdd2 = document.querySelector("#home-add2");
const homeAdd3 = document.querySelector("#home-add3");
const guestAdd1 = document.querySelector("#guest-add1");
const guestAdd2 = document.querySelector("#guest-add2");
const guestAdd3 = document.querySelector("#guest-add3");



let homeScore = 0;
let guestScore = 0;



homeAdd1.addEventListener("click", function() {
    homeScore += 1;
    homeResult.textContent = homeScore;
})

guestAdd1.addEventListener("click", function() {
    guestScore += 1;
    guestResult.textContent = guestScore;
})

homeAdd2.addEventListener("click", function() {
    homeScore += 2;
    homeResult.textContent = homeScore;
})

guestAdd2.addEventListener("click", function() {
    guestScore += 2;
    guestResult.textContent = guestScore;
})

homeAdd3.addEventListener("click", function() {
    homeScore += 3;
    homeResult.textContent = homeScore;
})

guestAdd3.addEventListener("click", function() {
    guestScore += 3;
    guestResult.textContent = guestScore
})




