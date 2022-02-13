var question = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('.choice-text'));


let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []


var time = 120
function startGame() {
    setInterval(startTimer, 1000)
    getNewQuestion();
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
        answer: "the future",
    },
    {
        question: "What can you break, even if you never pick it up or touch it?",
        choice1: "a heart",
        choice2: "a promise",
        choice3: "the will to live",
        choice4: "all of the above",
        answer: "all of the above",
    },
    {
        question: "What month of the year has 28 days?",
        choice1: "all of them",
        choice2: "february",
        choice3: "june",
        choice4: "april",
        answer: "all of them",
    },
    {
        question: "I’m light as a feather, yet the strongest person can’t hold me for five minutes. What am I?",
        choice1: "expectations",
        choice2: "angry cats",
        choice3: "your breath",
        choice4: "all of the above",
        answer: "your breath",
    }
];
//displaying questions//
function getNewQuestion(){
    var currentQuestion = questions[questionCounter];

    question.textContent = currentQuestion.question;

    document.getElementById('choice1').textContent = currentQuestion.choice1
    document.getElementById('option1').setAttribute('data-value', currentQuestion.choice1)
    document.getElementById('choice2').textContent = currentQuestion.choice2
    document.getElementById('option2').setAttribute('data-value', currentQuestion.choice2)
    document.getElementById('choice3').textContent = currentQuestion.choice3
    document.getElementById('option3').setAttribute('data-value', currentQuestion.choice3)
    document.getElementById('choice4').textContent = currentQuestion.choice4  
    document.getElementById('option4').setAttribute('data-value', currentQuestion.choice4)
}



function buttonClick(){
     if(this.getAttribute('data-value') === questions[questionCounter].answer){
        console.log('right')
     } else{
        console.log('wrong');
     }

     questionCounter++;

     if(questionCounter === questions.length){
         alert('game over')
     }
     else{
         getNewQuestion()
     }
}
//Score//
// element.addEventListener("click", function(){ alert("Hello World!"); });

document.getElementById('option1').addEventListener('click', buttonClick)
document.getElementById('option2').addEventListener('click', buttonClick)
document.getElementById('option3').addEventListener('click', buttonClick)
document.getElementById('option4').addEventListener('click', buttonClick)


startGame()
