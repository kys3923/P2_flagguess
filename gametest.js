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
}

pickedCountry();