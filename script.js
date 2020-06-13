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
const questions = document.getElementById('question-container');
const endQuiz = document.getElementById('endQuiz ');
const lastPage = document.getElementById('lastPage ');




//Start button event listener and timer call function *******************************
let start = startBtn.addEventListener('click', function() {
    console.log("clicked");
    setInterval(timer, 1000);
    home.classList.add("hide");
    questions.classList.remove('hide');
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


// <
// div class = "question1 section hide"
// id = "q1 " >
//     <
//     div class = "card "
// style = "width: 30rem; " >
//     <
//     div class = "card-body " >
//     <
//     h5 class = "card-title " > Question 1: < /h5> <
//     p class = "card-text " > Arrays in javascript can be used to store _______. < /p> <
//     a class = "btn btn-primary " > 1. Numbers & Strings < /a> <
//     a class = "btn btn-primary " > 2. Other Arrays < /a> <
//     a class = "btn btn-primary " > 3. Booleans < /a> <
//     a class = "btn btn-primary " > 4. All of the above < /a>
//     <!-- Correct answer 4. -->
//     <
//     /div> <
//     /div>

// <
// /div>

// <!-- This div is for the for the second question -->
// <
// div class = "question2 section hide"
// id = "q2 " >
//     <
//     div class = "card "
// style = "width: 30rem; " >
//     <
//     div class = "card-body " >
//     <
//     h5 class = "card-title " > Question 2: < /h5> <
//     p class = "card-text " > A very useful tool used during development and debugging
// for printing content to the debugger is: < /p> <
//     a class = "btn btn-primary " > 1. JavaScript < /a> <
//     a class = "btn btn-primary " > 2. For Loops < /a> <
//     a class = "btn btn-primary " > 3. Console.log < /a> <
//     a class = "btn btn-primary " > 4. Terminal / Bash < /a>
//     <!-- Correct answer is 3. -->
//     <
//     /div> <
//     /div> <
//     /div>

// <!-- This div is for the for the third question -->
// <
// div class = "question3 section hide"
// id = "q3 " >
//     <
//     div class = "card "
// style = "width: 30rem; " >
//     <
//     div class = "card-body " >
//     <
//     h5 class = "card-title " > Question 3: < /h5> <
//     p class = "card-text " > String values must be enclosed within _________ when being assigned to variables. < /p> <
//     a class = "btn btn-primary " > 1. Curly Brackets < /a> <
//     a class = "btn btn-primary " > 2. Commas < /a> <
//     a class = "btn btn-primary " > 3. Quotes < /a> <
//     a class = "btn btn-primary " > 4. Perentheses < /a>
//     <!-- Correct answer is 2. -->
//     <
//     /div> <
//     /div> <
//     /div>

// <!-- This div is for the for the fourth question -->
// <
// div class = "question4 section hide"
// id = "q4 " >
//     <
//     div class = "card "
// style = "width: 30rem; " >
//     <
//     div class = "card-body " >
//     <
//     h5 class = "card-title " > Question 4: < /h5> <
//     p class = "card-text " > The condition inside an
// if /
// else statement, is enclosed within ________. < /p> <
//     a class = "btn btn-primary " > 1. Quotes < /a> <
//     a class = "btn btn-primary " > 2. Curly Brackets < /a> <
//     a class = "btn btn-primary " > 3. Parentheses < /a> <
//     a class = "btn btn-primary " > 4. Square Brackets < /a>
//     <!--Correct answer is 2.-->
//     <
//     /div> <
//     /div> <
//     /div>

// <!-- This div is for the for the final question -->
// <
// div class = "question5 section hide"
// id = "q5 " >
//     <
//     div class = "card "
// style = "width: 30rem; " >
//     <
//     div class = "card-body " >
//     <
//     h5 class = "card-title " > Question 5: < /h5> <
//     p class = "card-text " > Commonly used data types DO NOT include: < /p> <
//     a class = "btn btn-primary " > 1. Strings < /a> <
//     a class = "btn btn-primary " > 2. Booleans < /a> <
//     a class = "btn btn-primary " > 3. Alerts < /a> <
//     a class = "btn btn-primary " > 4. Numbers < /a>
//     <!-- Correct answer is 3. -->
//     <
//     /div> <
//     /div> <
//     /div>



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