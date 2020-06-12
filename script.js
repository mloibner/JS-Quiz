//GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score


//1.Generate start button. 
    //add event listener to click
    //when clicked, start a timer
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