// querySelectors (today) and (visits)
const currentDate = document.querySelector(".today");
// console.log(currentDate)
const visitsDisplay = document.querySelector(".visits");
// console.log(visitsDisplay)
// // get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

let lastVisit = Number(window.localStorage.getItem("last-visit-time"))

// // determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// // increment the number of visits.

// // how should this be improved?
numVisits++;
// // store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// // show todays date.
currentDate.textContent = Number(Date.now());

localStorage.setItem("last-visit-time", Date.now());

var timeLapse = Date.now() - lastVisit;



// // timeLapse.textContent = timeLapseDisplay;

// const timeLapseDisplay = document.querySelector(".previous_visit");

console.log("time since last visit " + (timeLapse) +" in millisconds")



