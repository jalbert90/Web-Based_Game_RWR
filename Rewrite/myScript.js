var compareNum = null;
var score = 0;
var numbers = [];

// Create variables to reference each element in the HTML file
var scoreElmt = document.getElementById("score");
var genBtn = document.getElementById("generate");
var choice1Btn = document.getElementById("choice1");
var choice2Btn = document.getElementById("choice2");
var choice3Btn = document.getElementById("choice3");
var resetBtn = document.getElementById("reset");

// Set the initial score to 0
scoreElmt.innerHTML = score;

// Function to generate four random numbers
function generate() {
    // Generate three random numbers for the user to choose from
    numbers = [
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1
    ];

    // Generate the fourth random number to compare to
    compareNum = Math.floor(Math.random() * 10) + 1

    // Update the buttons' text to display the newly generated random numbers
    choice1Btn.innerHTML = numbers[0];
    choice2Btn.innerHTML = numbers[1];
    choice3Btn.innerHTML = numbers[2];
}

function compare(compNum, selectedNum) {
    // Return 1 if the users number is greater than the comparison number, otherwise return 0
    return selectedNum > compNum;
}

function choice1BtnPress() {
    // Increment the score, update the button, generate four new random numbers
    score += compare(compareNum, numbers[0]);
    scoreElmt.innerHTML = score;
    generate();
}

function choice2BtnPress() {
    // Increment the score, update the button, generate four new random numbers
    score += compare(compareNum, numbers[1]);
    scoreElmt.innerHTML = score;
    generate();
}

function choice3BtnPress() {
    // Increment the score, update the button, generate four new random numbers
    score += compare(compareNum, numbers[2]);
    scoreElmt.innerHTML = score;
    generate();
}

function resetBtnPress() {
    // Set the score back to 0, update the button, generate four new random numbers
    score = 0;
    scoreElmt.innerHTML = score;
    generate();
}

// Generate four initial random numbers to start the game
generate();

// Event listeners for each button listening for button presses
genBtn.addEventListener("click", generate);
choice1Btn.addEventListener("click", choice1BtnPress);
choice2Btn.addEventListener("click", choice2BtnPress);
choice3Btn.addEventListener("click", choice3BtnPress);
resetBtn.addEventListener("click", resetBtnPress);