const questions = [
  {
    question: "Quel état de la matière possède une forme propre et un volume propre ?",
    answers: ["L'état solide", "L'état liquide", "L'état gazeux", "Aucun des trois"],
    correct: 0,
    explanation: "Un solide conserve sa forme et son volume."
  },
  {
    question: "Comment appelle-t-on le passage de l'état liquide à l'état gazeux ?",
    answers: ["La solidification", "La liquéfaction", "La vaporisation", "La fusion"],
    correct: 2,
    explanation: "Le passage d'un liquide à un gaz s'appelle la vaporisation."
  },
  {
    question: "Un liquide possède-t-il une forme propre ?",
    answers: ["Oui, toujours", "Non, il prend la forme du récipient", "Seulement lorsqu'il est froid", "Seulement lorsqu'il est chaud"],
    correct: 1,
    explanation: "Un liquide conserve son volume mais prend la forme du récipient qui le contient."
  },
  {
    question: "Comment appelle-t-on le passage de l'état solide à l'état liquide ?",
    answers: ["La fusion", "La condensation", "La vaporisation", "La solidification"],
    correct: 0,
    explanation: "Le passage du solide au liquide s'appelle la fusion."
  },
  {
    question: "Parmi ces propositions, laquelle correspond à un gaz ?",
    answers: ["Il possède une forme propre", "Il possède toujours le même volume", "Il occupe tout l'espace disponible", "Il ne peut pas être comprimé"],
    correct: 2,
    explanation: "Un gaz n'a ni forme propre ni volume propre : il occupe tout l'espace disponible."
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const progressEl = document.getElementById("progress");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const quizEl = document.getElementById("quiz");

function showQuestion() {
  answered = false;
  feedbackEl.classList.remove("show");
  feedbackEl.innerHTML = "";
  nextBtn.style.display = "none";

  const q = questions[currentQuestion];
  progressEl.textContent = `Question ${currentQuestion + 1} sur ${questions.length}`;
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = answer;
    button.addEventListener("click", () => selectAnswer(index, button));
    answersEl.appendChild(button);
  });
}

function selectAnswer(index, selectedButton) {
  if (answered) return;
  answered = true;

  const q = questions[currentQuestion];
  const buttons = [...document.querySelectorAll(".answer-btn")];

  buttons.forEach((button, i) => {
    button.disabled = true;
    if (i === q.correct) {
      button.classList.add("correct");
    }
  });

  if (index === q.correct) {
    score++;
    feedbackEl.innerHTML = `<strong>Bonne réponse !</strong><br>${q.explanation}`;
  } else {
    selectedButton.classList.add("wrong");
    feedbackEl.innerHTML = `<strong>Réponse incorrecte.</strong><br>${q.explanation}`;
  }

  feedbackEl.classList.add("show");
  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  const percentage = Math.round((score / questions.length) * 100);

  quizEl.innerHTML = `
    <div class="result">
      <span class="section-kicker">Résultat</span>
      <h2>QCM terminé</h2>
      <div class="result-score">${score} / ${questions.length}</div>
      <p>Tu as obtenu <strong>${percentage} %</strong> de bonnes réponses.</p>
      <p>${getMessage(percentage)}</p>
      <button class="btn btn-secondary" onclick="location.reload()">Recommencer</button>
    </div>
  `;
}

function getMessage(percentage) {
  if (percentage === 100) return "Excellent, tout est maîtrisé !";
  if (percentage >= 80) return "Très bon résultat !";
  if (percentage >= 60) return "Bon travail, quelques notions sont encore à revoir.";
  return "Relis le cours puis essaie à nouveau.";
}

showQuestion();
