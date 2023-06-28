var startBtn = document.querySelector('#startbtn')
var firstContainer = document.querySelector('#first')
var titleDisp = document.querySelector('#title')
var timerEl = document.querySelector('#timer')
var timer
var timerCount
var questionIndex = 0
var arrayofQuestions = [
    {
        question: 'Which is not a datatype in Javascript?',
        answers: ['Boolean', 'String','Array','Number'],
    },

    {
        question: 'Which HTML element does Javascript go into?',
        answers: ['<JS>', '<Javascript>','<Script>','<Scripting>'],
    },

    {
        question: 'How do you create a function called getPassword?',
        answers: ['function getPassword', 'function = getPassword','function:getPassword','function::getPassword'],
    },

    {
        question: 'What is the proper way to write an if statement?',
        answers: ['if (i==10)', 'if i=10','if i==10','if [i==10]'],
    },

    {
        question: 'What is the correct way to creat an array?',
        answers: ['var mixup =("Ten","Five","Twenty")', 'var mixup =[1:"Ten", 2:"Five", 3:"Twenty"]','var mixup = "Ten", "Five", "Twenty"','var mixup = ["Ten", "Five", "Twenty"]'],
    },
]

function start() {
    firstContainer.innerHTML=''
//create
var h1El = document.createElement('h1')
var buttonContainer = document.createElement('div')
// add
h1El.textContent = arrayofQuestions[questionIndex].question

for (let i = 0; i < arrayofQuestions[questionIndex].answers.length; i++) {
    var button = document.createElement('button')
    button.textContent = arrayofQuestions[questionIndex].answers[i]
    button.addEventListener('click', click)
    buttonContainer.append(button)
    titleDisp.classList.add('hidden')
    button.classList.add('button')
    startBtn.classList.add('hidden')
}

// append
firstContainer.append(h1El,buttonContainer)

}

function click() {
    questionIndex ++
    start()
}

function endgame(){
    firstContainer.innerHTML=''

}

function startTimer() {
timer= setInterval(function(){
    timerCount --;
    timerEl.textConten = timerCount;
    if (timerCount==0){
        endgame();
    }
}, 1000)
}

startBtn.addEventListener('click', start)
startBtn.addEventListener('click', startTimer)