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
    // make new question array
    let  newQuestionArray = [];

    // take correctAnswer push to new questionArray
    newQuestionArray.push(questionArray[i]);
    console.log(newQuestionArray, "correctAnswer added to new array");

    // take randomQuestions push to new questionArray
    console.log(questionArray[0], questionArray[1], questionArray[2]);
    console.log(newQuestionArray, "first check");
    if (questionArray[0] !== questionArray[i]) {
        newQuestionArray.push(questionArray[0])
    };
    if (questionArray[1] !== questionArray[i]) {
        newQuestionArray.push(questionArray[1])
    };
    if (questionArray[2] !== questionArray[i]) {
        newQuestionArray.push(questionArray[2])
    };
    if (questionArray[3] !== questionArray[i]) {
        newQuestionArray.push(questionArray[3])
    };
    if (questionArray[4] !== questionArray[i]) {
        newQuestionArray.push(questionArray[4])
    };
    if (newQuestionArray.length = 6) {
        newQuestionArray.pop()
    };

    console.log(newQuestionArray, "double make sure");

    // shuffle new questionArray
    function randomFlag2(newQuestionArray) {
        let m = newQuestionArray.length, t, i;
        while (0 !== m) {
            i = Math.floor(Math.random() * m);
            console.log(i, "random integer?????")
            m -= 1;
            t = newQuestionArray[m];
            newQuestionArray[m] = newQuestionArray[i];
            newQuestionArray[i] = t;
        }
        return newQuestionArray;
    }
    randomFlag2(newQuestionArray);
    console.log(newQuestionArray, "triple make sure")
    console.log(questionArray[i], "is it correct answer?")

    // list new questionArray

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