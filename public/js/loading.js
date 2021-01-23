document.onreadystatechange = function() { 
    if (document.readyState !== 'complete') {
        document.querySelector('body').style.visibility = 'hidden';
        document.querySelector('#loader').style.visibility = 'visible';
    } else {
        document.querySelector('#loader').style.display = 'none';
        document.querySelector('body').style.visibility = 'visible';
    }
};

let questionArray = [];
// randomize the array to ask questions
function demoQuestion(questionArray) {
    let m = questionArray.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = questionArray[m];
        questionArray[m] = questionArray[i];
        questionArray[i] = t;
    }
    return questionArray;
}
