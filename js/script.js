// const daysEl = document.getElementById('days');
// const hoursEl = document.getElementById('hours');
// const minsEl = document.getElementById('mins');
// const secondsEl = document.getElementById('seconds');

// const newYears = '1 January 2024';

// function countdown() {
//     const newYearsDate = new Date(newYears);
//     const currentDate = new Date();

//     const totalSeconds = (newYearsDate -currentDate) / 1000;

//     const days = Math.floor(totalSeconds / 3600 / 24);
//     const hours = Math.floor(totalSeconds / 3600) % 24;
//     const mins = Math.floor(totalSeconds / 60) % 60;
//     const seconds = Math.floor(totalSeconds) % 60;


//     daysEl.innerHTML = days;
//     hoursEl.innerHTML = formatTime(hours);
//     minsEl.innerHTML = formatTime(mins);
//     secondsEl.innerHTML = formatTime(seconds);

    
    
// }

// function formatTime(time) {
//     return time < 10 ? `0${time}` : time;
// }




// // initial call

// countdown();

// setInterval(countdown, 1000);




const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');
const newYear = '1 Jan, 2025';

function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) %60;
    const seconds = Math.floor(totalSeconds) %60;


    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
    
}

function formatTime(time) {
    return time < 10 ? `0${time}` :time;
}

countdown();

setInterval(countdown, 1000);

const quizData = [
    {
        question: "Who is the most decent person in the world?",
        a: "Pranab Barua",
        b: "Messi",
        c: "Suharto",
        d: "Mohan",
        correct: "a",
    }, 
    {
        question: "Who is Pranab Barua's favourite actrees?",
        a: "Deepika",
        b: "Opu Bishwas",
        c: "Tanjin Tisha",
        d: "Kabila's Rokeya",
        correct: "d",
    }, 
    {
        question: "Who is Pranab Barua's favourite footballer?",
        a: "Ronaldo",
        b: "Messi",
        c: "Neymar",
        d: "Mbappe",
        correct: "a",
    }, 
    {
        question: "Who is Pranab Barua's favourite cricketer?",
        a: "Virat Kholi",
        b: "Sangakara",
        c: "Ms Dhoni",
        d: "Taylor",
        correct: "b",
    }, 
    {
        question: "What is the most used programming language?",
        a: "Javascript",
        b: "Python",
        c: "C++",
        d: "Java",
        correct: "a",
    }, 
    {
        question: "Who is the president of United States of America?",
        a: "Putin",
        b: "Biden",
        c: "Modhi",
        d: "Hasina",
        correct: "b",
    }, 
    {
        question: "what does HTML stand for?",
        a: "Hyper text markup language",
        b: "Cascading style sheet",
        c: "Jason object nariation",
        d: "Aplication programe interface",
        correct: "a",
    }, 
    {
        question: "what year was javascript lanched?",
        a: "2011",
        b: "2000",
        c: "2005",
        d: "none of the above",
        correct: "d",
    },
    {
        question: "What year was we graduated?",
        a: "2001",
        b: "2015",
        c: "2017",
        d: "2019",
        correct: "d",
    }
]

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const myBtn = document.getElementById("myBtn");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    deSelected()
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


   
}

function getSelected() {
    

    let answer = undefined;

    answerEls.forEach((answerEl) =>{
        if(answerEl.checked) {
            answer = answerEl.id
        }
       
    });
    return answer;
}

function deSelected() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
       
    });
}

myBtn.addEventListener('click', () => {
    // check to see the answer
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>Congratulation You answered correct ${score}/${quizData.length}</h2> <button onclick="location.reload()">Reload</button>`
        }
    }
      
});
