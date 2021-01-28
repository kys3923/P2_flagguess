
document.onreadystatechange = function() { 
    if (document.readyState !== 'complete') {
        document.querySelector('body').style.visibility = 'hidden';
        document.querySelector('#loader').style.visibility = 'visible';
    } else {
        document.querySelector('#loader').style.display = 'none';
        document.querySelector('body').style.visibility = 'visible';
    }
};
const myStorage = window.sessionStorage;

// setting up modal intro // game demo
let modal = document.getElementById('myModal');
let span = document.querySelector('.close');
let scoreTotalRound = document.querySelector('#scoreTotalRound').innerText;
let thisRound = document.querySelector('#thisRound').innerText;

// setting up timer and score
let gameRound = 0;
let time = 11;
let score = 100;
let totalScore = 0;

window.onload = function() {
    modal.style.display = 'block';
    modalAfter.style.display = 'none';

    if (gameRound == 0) {
        gameRound += 1;
    } else {
        let storageRound = myStorage.getItem('roundNum');
        let storageScore = myStorage.getItem('scoreTotal');
        gameRound = storageRound;
        totalScore = storageScore;
    }

    document.querySelector('#thisRound').innerText = gameRound;
    document.querySelector('#scoreTotalRound').innerText = totalScore + 'pts';
    document.querySelector('#scoreThisRound').innerText = score + 'pts';
}

span.addEventListener('click', function() {
    modal.style.display = 'none';
    timerTrigger();
});


console.log(time, "this is time");
console.log(score, "this is score");

let timer;

function timerTrigger() {
    timer = setInterval(minusTime, 1000);
};

function clearTimer() {
    clearInterval(timer);
};

function minusTime() {
    if (time > 0) {
        time--;
        document.querySelector('#timeLeft').innerHTML = time;
    } else if (time == 0) {
        clearTimer();
        totalScore = totalScore + score;
        review();
    };
};

let wrongAnswerInput = document.querySelectorAll('#wronganswer');
let correctAnswerInput = document.querySelector('#correctanswer');
// let totalScore = document.querySelector('#resultScore').innerText;


function scoreCal(e) {
    e.preventDefault();
        score -= 10;
        document.querySelector('#scoreThisRound').innerText = score;
}

for (var i = 0 ; i < wrongAnswerInput.length; i++) {
    wrongAnswerInput[i].addEventListener('click', scoreCal); 
}

correctAnswerInput.addEventListener('click', next => {
    next.preventDefault();
    clearTimer();
    totalScore = totalScore + score;
    review();
})

let modalAfter = document.getElementById('modalAfterGame');
let resultScore = document.querySelector('#resultScore').innerText;
console.log(resultScore, "result score????")

let nextButton = document.querySelector('#modalNext');
let finButton = document.querySelector('#modalFin');

function review() {
    console.log(totalScore, "review triggered, showing total score")
    document.querySelector('#resultScore').value = totalScore;
    document.querySelector('#currentRound').value = gameRound;
    document.querySelector('#resultTotalScore').value = totalScore;
    document.querySelector('#streakNum').value = gameRound;
    modalAfter.style.display = 'block'
    if (gameRound < 10) {
        nextButton.style.display = 'block';
        finButton.style.display = 'none';
    } else if (gameRound == 10) {
        nextButton.style.display = 'none';
        finButton.style.display = 'block';
    }
};

// q10, click Next Round


let round = 0;

nextButton.addEventListener('click', next => {
    round++;
    myStorage.setItem('roundNum', round);
    myStorage.setItem('scoreTotal', totalScore);

    console.log("next button clicked")
    console.log(totalScore, " total score at next button")
    console.log(gameRound, "round at next button")
});


// span.addEventListener('click', function() {
//     modal.style.display = 'none';
//     timerTrigger();
// }); //todo 

