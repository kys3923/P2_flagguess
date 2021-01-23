let questionArray = ['flag0', 'flag1', 'flag2', 'flag3', 'flag4', 'flag5', 'flag6'];
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

// calling random item
// const q1 = demoQuestion(questionArray);
// const q2 = demoQuestion(questionArray, q1);
// const q3 = demoQuestion(questionArray, q1, q2);
// const q4 = demoQuestion(questionArray, q1, q2, q3);

// console.log(q1)
// console.log(q2)
// console.log(q3)
// console.log(q4)

// put questions into an array