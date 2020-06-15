// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock


//Time Variables
const startBtn = document.querySelector("#startBtn");
let timeDisplay = document.querySelector("#timer");
const startingTime = 1.25;
let time = startingTime * 60;

const gameOver = document.getElementById('gameOver');


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
const yourScore = document.getElementById('yourScore');
const finalScore = document.getElementById('finalScore');

//score counter
const highscore = document.getElementById('highScores');
const saveName = document.getElementById('save');
const highScoreList = document.getElementById('emptyDiv');
let score = 0
let input = document.getElementById('input')
const clear = document.getElementById('clearHighScores')
let interval;


//Start button event listener and timer call function *******************************

let start = startBtn.addEventListener('click', function() {
    console.log("clicked");
    interval = setInterval(timer, 1000);
    home.classList.add("hide");
    questionsQ.classList.remove('hide');
    yourScore.classList.remove('hide')
    shuffledQuestions = options.sort(() => Math.random() - .5);
    currentQuestionIndex = 0
    setNextQuestion()
});

//Timer count down function *********************************************************
function timer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 1 ? '0' + seconds : seconds;

    if (seconds < 10) {
        seconds = seconds < 1 ? '0' + seconds : '0' + seconds
    }

    timeDisplay.innerHTML =
        'Time remaining ' +
        `${minutes}: ${seconds}`;

    time--;

    if (startingTime && time < 0) {
        clearInterval(time);
        timeDisplay.innerHTML = "TIME'S UP !!!"
        questionsQ.classList.add('hide');
        gameOver.classList.remove('hide');
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
    correcto.classList.add('hide');
    wrong.classList.add('hide');
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
            console.log(answers.correct)
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
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove('hide');
    } else {
        finBtn.classList.remove('hide');
    }
    if (answer = correct) {
        score++;
        yourScore.innerText = "Your score " + (score * 10);
        finalScore.innerText = (score * 10)
    }
    if (answer = correct) {
        correcto.classList.remove('hide')
    } else { wrong.classList.remove('hide') }
    if (answer = correct) {
        time = time
    } else { time -= 10 }
}

//this function is to set the div once game is finished
finBtn.addEventListener('click', () => {
        questionsQ.classList.add('hide');
        yourScore.classList.add('hide');
        endQuiz.classList.remove('hide');
        saveName.classList.remove('hide');
        clearInterval(interval)

    })
    // these are the different questions and answers
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
}, {
    question: 'What type of function is represented by () => {}?',
    answers: [
        { text: 'pointer functions', correct: false },
        { text: 'arrow functions', correct: true },
        { text: 'equal-lessthan functions', correct: false }
    ]
}];

//savings and removing name and score to local storage. 
let nameScore = JSON.parse(localStorage.getItem('scores'));
if (!nameScore) {
    nameScore = [];
}
saveName.addEventListener('click', function(event) {
    nameScore.push({
        name: input.value,
        score: score
    });
    event.preventDefault();
    localStorage.setItem('scores', JSON.stringify(nameScore));

    endQuiz.classList.add('hide')
    lastPage.classList.remove('hide')

    for (let i = 0; i < nameScore.length; i++) {
        const name = nameScore[i].name;
        const score = nameScore[i].score;

        let li = document.createElement('li');
        li.textContent = name + " " + score + '0';
        li.setAttribute('data-index', [i]);

        highScoreList.appendChild(li);
    }
});

let saved = localStorage.getItem(input);

if (saved) {
    highScoreList.innerHTML = saved;
}

clear.addEventListener('click', function() {
    localStorage.clear();
    highScoreList.innerHTML = ''
});


highscore.addEventListener('click', function() {
    lastPage.classList.remove('hide')
});

let closed = document.getElementById('close');

closed.addEventListener('click', function() {
    lastPage.classList.add('hide')

})