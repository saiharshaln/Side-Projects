const quizData = [
  {
    question: "What is the name of the main character in the game God of War?",
    a: "Kratos",
    b: "Hollow",
    c: "Barbie",
    d: "Drake",
    correct: "a",
  },
  {
    question:
      "Who created this project by himself and not with the help of Youtube?",
    a: "21 Savage",
    b: "PewDiePie",
    c: "SHN",
    d: "Messi",
    correct: "c",
  },
  {
    question: "What is the best programming language?",
    a: "C++",
    b: "JavaScript",
    c: "C#",
    d: "HTML (LOL)",
    correct: "d",
  },
  {
    question:
      "Which of the games mentioned below are mostly played by old woman?",
    a: "PUBG",
    b: "Candy Crush Saga",
    c: "Dead By Daylight",
    d: "Fortnite",
    correct: "b",
  },
  {
    question: "Can you please hire me? :)",
    a: "Nah",
    b: "No Chance",
    c: "Nope",
    d: "All of the above ",
    correct: "d",
  },
];
const questionE1 = document.getElementById("question");
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let liveQuiz = 0;
let score = 0;
//let answer = undefined;
loadQuizQuestion();

function loadQuizQuestion() {
  unselectAnswers(); // Unselect answers for the future questions
  const liveQuizData = quizData[liveQuiz];
  questionE1.innerText = liveQuizData.question;

  a_text.innerText = liveQuizData.a;
  b_text.innerText = liveQuizData.b;
  c_text.innerText = liveQuizData.c;
  d_text.innerText = liveQuizData.d;
}

function getSelectedAnswer() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

// Function to unselect anserws for the future questions
function unselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitButton.addEventListener("click", () => {
  const answer = getSelectedAnswer();
  if (answer) {
    if (answer === quizData[liveQuiz].correct) {
      score++;
    }

    liveQuiz++;

    if (liveQuiz < quizData.length) {
      loadQuizQuestion();
    } else {
      quiz.innerHTML = `<h2>Your Score is ${score} out of ${quizData.length}.</h2><button onclick="location.reload()">Play Again</button>`;

      //alert("You have completed the quiz");
    }
    // loadQuizQuestion();
  }
});
