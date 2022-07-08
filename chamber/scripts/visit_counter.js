// querySelectors (today) and (visits)
const currentDate = document.querySelector(".today");
<<<<<<< Updated upstream
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));
=======
const totalVisits = document.querySelector(".visits");

// number of visits 
//block scoped var(let)
//number from local storage get the stored value in localStorage
let numVisits = Number(localStorage.getItem("visits-ls"));
>>>>>>> Stashed changes

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
<<<<<<< Updated upstream
	visitsDisplay.textContent = `This is your first visit!`;
=======
	visitsDisplay.textContent = "Welcome, thank you for visiting The City of Dracko's page";
>>>>>>> Stashed changes
}

// increment the number of visits.

// how should this be improved?
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// show todays date.
currentDate.textContent = Date.now();