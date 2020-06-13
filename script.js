// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

//Variables
const startBtn = document.querySelector("#startBtn");
let timeDisplay = document.querySelector("#timer")
const startingTime = 1.5;
let time = startingTime * 60;
const home = document.getElementById('pg1');
const q1 = document.getElementById('q1 ');
const q2 = document.getElementById('q2 ');
const q3 = document.getElementById('q3 ');
const q4 = document.getElementById('q4 ');
const q5 = document.getElementById('q5 ');
const endQuiz = document.getElementById('endQuiz ');
const lastPage = document.getElementById('lastPage ');




//Start button event listener and timer call function *******************************
let start = startBtn.addEventListener('click', function() {
    console.log("clicked");
    setInterval(timer, 1000);
    home.classList.add("hide");
    q1.classList.remove('hide');
});

//Timer count down function *********************************************************
function timer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 1 ? '0' + seconds : seconds;

    timeDisplay.innerHTML =
        `${minutes}: ${seconds}`;

    time--;

    if (startingTime && time < 0) {
        clearInterval(time);
        timeDisplay.innerHTML = "TIME'S UP !!!"
    }
}

//********************************************************************************

function setNextQuestion() {

}



//take to new page showing first questions
//2. generate question in header
//create buttons under header with answers
//add event listener to buttons
//function, if correct, play on
//if click !===correct answer, subtract time from clock
//alert correct or incorrect
//move onto next question
//3. repeat above 3 times for total of 4 questions
//4. If questions answered correctly, add counter to keep score
//let answer = 0 answer ++
//5. Timer vs questions to stop the game. 
//if timer === 0 alert game over - need to find a way to 
//else if questions answered alert game over/you win - maybe attach this to last question ?
//6. At end of game imput name for high score
//record score of player
//save their name
//have it saved for future games
// click function for high scores in top right corner - event listener for when clicked display high scores