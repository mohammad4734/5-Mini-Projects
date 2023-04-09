const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const containerEl=document.querySelector(".quiz-container");
const questionEl=document.getElementById("question");
const UL=document.querySelector("ul");
const answerEls=document.querySelectorAll(".answer");
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const button=document.querySelector("button");

var currentindex=0;
var correct=[];
var score=0;


function loadQuiz ()
{
    deleteselectAnswers();

    questionEl.innerHTML=quizData[currentindex].question;
    a_text.innerText=quizData[currentindex].a;
    b_text.innerText=quizData[currentindex].b;
    c_text.innerText=quizData[currentindex].c;
    d_text.innerText=quizData[currentindex].d;
}

function deleteselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

loadQuiz();

//********************************/

button.onclick=function (){submit()};

function submit(){
    answerEls.forEach(answerEl=>{
        if(answerEl.checked)
        {
            correct.push(answerEl.id);
            currentindex+=1;
                
            if(currentindex<=quizData.length-1)
                loadQuiz();
            else
            {
                validation();

                button.innerHTML="Reload";
                button.style.height="60%";
                UL.style.display="none";
                questionEl.innerHTML=`You answered ${score}/4 questions correctly`;
                questionEl.style.width="100%";
                questionEl.style.lineHeight="1.5";
                containerEl.style.height="100px";

                button.onclick=function (){reload()};
            }
            
        }
    })
}

function validation() 
{
    for (let index = 0; index < quizData.length; index++) {
        if(quizData[index].correct==correct[index])
            score++;
    }
}

function reload(){
    currentindex=0;
    score=0;
    correct=[];
    button.innerHTML="Submit";
    button.style.height="15%";
    UL.style.display="block";
    questionEl.style.width="70%";
    questionEl.style.lineHeight="2";
    containerEl.style.height="600px";
    
    loadQuiz();
    button.onclick=function (){
        submit();
    };
}




