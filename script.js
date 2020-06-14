// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

//Time Variables
const startBtn = document.querySelector("#startBtn");
let timeDisplay = document.querySelector("#timer");
const startingTime = 1.5;
let time = startingTime * 60;

//Page element variables
const home = document.getElementById('pg1');
const endQuiz = document.getElementById('endQuiz');
const lastPage = document.getElementById('lastPage');

// Questions and Buttons variables
const questionsQ = document.getElementById('question-container');
let shuffledQuestions, currentQuestionIndex
const questionEl = document.getElementById('question');
const buttonsEl = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next-btn');
const correcto = document.getElementById('correct');
const wrong = document.getElementById('wrong');
const finBtn = document.getElementById('finish-btn');

//score counter
const highscore = document.getElementById('highScores')
let score = 0



//Start button event listener and timer call function *******************************
let start = startBtn.addEventListener('click', function() {
    console.log("clicked");
    setInterval(timer, 1000);
    home.classList.add("hide");
    questionsQ.classList.remove('hide');
    shuffledQuestions = options.sort(() => Math.random() - .5);
    currentQuestionIndex = 0
    setNextQuestion()
});

//Timer count down function *********************************************************
function timer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 1 ? '0' + seconds : seconds;

    timeDisplay.innerHTML =
        'Time remaining ' +
        `${minutes}: ${seconds}`;

    time--;

    if (startingTime && time < 0) {
        clearInterval(time);
        timeDisplay.innerHTML = "TIME'S UP !!!"
    }
}

// Questions and selection functions **************************************************

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


//This function adds text to the question and buttons for each question.
function showQuestion(question) {
    questionEl.innerHTML = question.question;
    question.answers.forEach(answers => {
        const button = document.createElement('button');
        button.innerText = answers.text
        button.classList.add('btn');
        if (answers.correct) {
            button.dataset.correct = answers.correct;
        }
        button.addEventListener('click', selectAnswer);
        buttonsEl.appendChild(button)
    });
}

//This removes unneeded buttons from the card when asking for an answer. Only the amount of buttons that have an answer will show
function resetState() {
    nextBtn.classList.add('hide');
    while (buttonsEl.firstChild) {
        buttonsEl.removeChild(buttonsEl.firstChild)
    }
}

//This function is creating a boolean data set for correct answers only
function selectAnswer(e) {
    const selectedBtn = e.target
    const correct = selectedBtn.dataset.correct
    setStatusClass(document.body, correcto)
    Array.from(buttonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove('hide')
    } else {
        finBtn.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        correcto.classList.remove('hide')
    } else { wrong.classList.remove('hide') }
}

function clearStatusClass() {
    correcto.classList.add('hide');
    wrong.classList.add('hide');
}

finBtn.addEventListener('click', () => {
    questionsQ.classList.add('hide');
    endQuiz.classList.remove('hide')
})






const options = [{
    question: "Arrays in javascript can be used to store _______.",
    answers: [
        { text: 'numbers & strings', correct: false },
        { text: 'other arrays', correct: false },
        { text: 'booleans', correct: false },
        { text: 'all of the above', correct: true }
    ]
}, {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
        { text: 'JavaScript', correct: false },
        { text: 'for loops', correct: false },
        { text: 'console.log', correct: true },
        { text: 'terminal/bash', correct: false }
    ]
}, {
    question: 'The condition inside an if/else statement, is enclosed within ________.',
    answers: [
        { text: 'quotes', correct: false },
        { text: 'curly brackets', correct: true },
        { text: 'parentheses', correct: false },
        { text: 'square brackets', correct: false }
    ]
}, {
    question: 'Commonly used data types DO NOT include:',
    answers: [
        { text: 'strings', correct: false },
        { text: 'booleans', correct: false },
        { text: 'alerts', correct: true },
        { text: 'numbers', correct: false }
    ]
}, {
    question: 'String values must be enclosed within _________ when being assigned to variables.',
    answers: [
        { text: 'curly brackets', correct: false },
        { text: 'commas', correct: false },
        { text: 'quotes', correct: true },
        { text: 'parentheses', correct: false }
    ]
}];



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