let questionArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];


// shuffle the array to ask questions
function randomFlag(questionArray) {
    let m = questionArray.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = questionArray[m];
        questionArray[m] = questionArray[i];
        questionArray[i] = t;
    }
    return questionArray;
}
console.log(randomFlag(questionArray), "this is shuffled array");

// pick random item from randomized array
function pickedCountry() {
    let correctAnswer = Math.floor(Math.random() * questionArray.length)
    let i = correctAnswer;
    console.log(questionArray[i], "this is picked one of shuffled array");
    let  newQuestionArray = [];

}

pickedCountry();

let score = 100;

function questionStart() {
    // if demo, after round 1 , display score (not storing any data)
        // display Question 1 / 1
            // if the display question 1 /1 goes away
        // start timer() <-every second, loses score of 10 value
        // if get a wrong answer
            // loose score of 10,
            // display hint()
        // correct answer, 
            // timer() stops, 
            // display score, 
            // gameover()
        // if with timer() of 10 sec, 
            // display score
            // gameover()
        // give buttons to sign up / back to home
    
    // if 10q, after round 10, display score
        // display Question 1 / 10
            // if the display Question 1 / 10 goes away
        // start timer()
        // if get a wrong answer
            // loose score of 10
            // display hint()
        // correct answer
            // stop timer()
            // display score,
            // record current score,
            // move to next question until round 10
        // if timer() after 10 sec,
            // stop timer()
                // every second, lose score value of 10
            // display score
            // record current score
            // move to next question until round 10
        // if round 10, and timer reached 0
            // stop timer
            // display score
            // record current score
            // give buttons to redirect to personal score, back to home, rankings
    // if endurance, if get any wrong answer entered, display score
        // display current streaks of question
            // display goes away
            // start timer
        // if correct answer
            // stop timer
            // display score
            // record current score and streak
            // move to next question
        // if wrong answer
            // stop timer
            // show correct answer
            // display score and streak
            // give buttons to redirect to personal score, back to home, rankings
        // if timer() reached 0
            // stop timer
            // show correct answer
            // display score and streak
            // give buttons to redirect to personal score, back to home, rankings
}