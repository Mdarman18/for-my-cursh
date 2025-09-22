let question=document.querySelector(".question");
let option1=document.querySelector(".option1");
let option2=document.querySelector(".option2");
let option3=document.querySelector(".option3");
let option4=document.querySelector(".option4");
let prev=document.querySelector(".prev-btn");
let next=document.querySelector(".next-btn");
let submit=document.querySelector(".submit-btn");
let result=document.querySelector(".result");
let correct=""
const url="https://the-trivia-api.com/v2/questions";
async function getQuiz(params) {
    let res=await fetch(url);
    let data=await res.json();
    let q= data[0];
     let answers = [q.correctAnswer, ...q.incorrectAnswers];
    answers.sort(() => Math.random() - 0.5);
    question.innerHTML=q.question.text;
    option1.innerHTML = answers[0];
    option2.innerHTML = answers[1];
    option3.innerHTML = answers[2];
    option4.innerHTML = answers[3];
     correct = q.correctAnswer;
    setTimeout(() => {
    let options = [option1, option2, option3, option4];
    options.forEach(opt => {
        if (opt.innerHTML === correct) {
            opt.style.backgroundColor = "green";  
        }
    });
    result.innerHTML = "⏰ Time's up! ✅ Correct Answer: " + correct;  
}, 30000);
   
}


// event listeners
option1.addEventListener("click", () => checkAnswer(option1));
option2.addEventListener("click", () => checkAnswer(option2));
option3.addEventListener("click", () => checkAnswer(option3));
option4.addEventListener("click", () => checkAnswer(option4));
getQuiz();
 function checkAnswer(option) {
    if (option.innerHTML === correct) {
        option.style.backgroundColor = "green";
        result.innerHTML ="🏆🎉 Correct Answer: " + correct; 
    }   else {
        option.style.backgroundColor = "red";   
        result.innerHTML = "🏆🎉 Correct Answer: " + correct; 
          result.innerHTML =`😔 Sorry You Clicked Wrong Option,${correct} is correct Option`;
    }
   let options = document.querySelectorAll("#option");
        options.forEach(opt => {
            if (opt.innerHTML === correct) {
                opt.style.backgroundColor = "green"; 
                // result.innerHTML = `😔 Sorry You Clicked Wrong Option,${correct} is correct Option`;
            }
        });
    }