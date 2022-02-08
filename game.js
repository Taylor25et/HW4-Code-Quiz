var question = document.querySelector('#questions');
var choices = Array.from(document.querySelectorAll('.choice-text'));

var time = 120
function startGame(){
    setInterval(startTimer, 1000)
    
}
//timer//
function startTimer(){
    //display//
    let progressBarEl = document.getElementById('progressBar')
    progressBarEl.textContent = time--
}


let questions = [
    {
        question: "What is always in front of you but can’t be seen?",
        choice1: "oblivion",
        choice2: "the future",
        choice3: "sam from accounting",
        choice4: "42",
        answer: 2,
    },
    {
        question: "What can you break, even if you never pick it up or touch it?",
        choice1: "a heart",
        choice2: "a promise",
        choice3: "the will to live",
        choice4: "all of the above",
        answer: 4,
    },
    {
        question: "What month of the year has 28 days?",
        choice1: "all of them",
        choice2: "february",
        choice3: "june",
        choice4: "april",
        answer: 1,
    },
    {
        question: "I’m light as a feather, yet the strongest person can’t hold me for five minutes. What am I?",
        choice1: "expectations",
        choice2: "angry cats",
        choice3: "your breath",
        choice4: "all of the above",
        answer: 3,
    }
];


startGame()
