
document.onreadystatechange = function() { 
    if (document.readyState !== 'complete') {
        document.querySelector('body').style.visibility = 'hidden';
        document.querySelector('#loader').style.visibility = 'visible';
    } else {
        document.querySelector('#loader').style.display = 'none';
        document.querySelector('body').style.visibility = 'visible';
    }
};

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
    gameRound += 1;
    document.querySelector('#thisRound').innerText = gameRound + '/ 10';
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
        score = document.querySelector('#scoreThisRound').innerText;
        totalScore = totalScore + document.querySelector('#scoreThisRound').innerText;
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
    clearInterval(timer)
    totalScore = totalScore + document.querySelector('#scoreThisRound').innerText;
    review();
})

let modalAfter = document.getElementById('modalAfterGame');
let resultScore = document.querySelector('#resultScore').innerText;
console.log(resultScore, "result score????")

function review() {
    console.log(totalScore, "review triggered, showing total score")
    document.querySelector('#resultScore').value = totalScore;
    document.querySelector('#currentRound').value = thisRound;
    document.querySelector('#resultTotalScore').value =
    modalAfter.style.display = 'block'
};




