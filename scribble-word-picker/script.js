const questions = [
  {
    correct: "JAVASCRIPT",
    options: ["JAVASCRIPT", "JAVASCRPIT", "JAVASCRIPTT", "JVASCRIPT"]
  },
  {
    correct: "GITHUB",
    options: ["GITHUB", "GITHBU", "GITUBH", "GITHHUB"]
  },
  {
    correct: "RESUME",
    options: ["RESUME", "REUSME", "RESUMEE", "RUSUME"]
  },
  {
    correct: "INTERVIEW",
    options: ["INTERVIEW", "INTERVEIW", "INTREVIEW", "INTERVIEEW"]
  },
  {
    correct: "PYTHON",
    options: ["PYTHON", "PYHTON", "PYTHNO", "PYYTHON"]
  }
];

let currentIndex = 0;
let score = 0;
let answered = false;

function loadQuestion() {
  answered = false;
  document.getElementById("message").innerText = "";

  const optionBox = document.getElementById("options");
  optionBox.innerHTML = "";

  const currentQuestion = questions[currentIndex];

  
   const shuffledOptions = [...currentQuestion.options];
   shuffledOptions.sort(() => Math.random() - 0.5);
   shuffledOptions.forEach(option =>  {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.className = "option-btn";
    btn.onclick = function () {
      checkAnswer(btn, option);
    };
    optionBox.appendChild(btn);
  });
}

function checkAnswer(button, selectedWord) {
  if (answered) return;

  answered = true;

  if (selectedWord === questions[currentIndex].correct) {
    button.classList.add("correct");
    document.getElementById("message").innerText = "Correct! ✅";
    score++;
  } else {
    button.classList.add("wrong");
    document.getElementById("message").innerText = "Wrong! ❌";
  }

  document.getElementById("score").innerText = score;
}

function nextQuestion() {
  currentIndex++;

  if (currentIndex >= questions.length) {
    currentIndex = 0;
  }

  loadQuestion();
}

loadQuestion();