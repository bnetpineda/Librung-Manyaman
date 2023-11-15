var numberOfDivs = 16;

// Get the container element
var container = document.getElementById("flexContainer");

// Loop to create and append the div elements
for (var i = 0; i < numberOfDivs; i++) {
  var div = document.createElement("div");
  div.className = "flex-box";
  container.appendChild(div);
}
// Function to produce a random letter with repetition
function randomWithRepetition() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVW";
  const randomIndex = Math.floor(Math.random() * letters.length);
  return letters.charAt(randomIndex);
}

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Get all the flex-box elements
const flexBoxes = document.querySelectorAll(".flex-box");

// Random with repetition
flexBoxes.forEach((box) => {
  box.textContent = randomWithRepetition();
});

// Assign shuffled letters to the flex boxes
flexBoxes.forEach((box, index) => {
  box.textContent = lettersArray[index];
});
