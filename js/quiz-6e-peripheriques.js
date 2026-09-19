const diagramImage = "../../images/qcm-6e-peripheriques/ordinateur-sans-noms.png";
const diagramAlt = "Schéma d'un ordinateur et de ses périphériques, avec des étiquettes vides.";

const questions = [
  {
    question: "Sur le schéma, quel élément affiche les images et les textes ?",
    answers: ["La souris", "Le moniteur ou écran", "L'enceinte", "Le scanner"],
    correct: 1,
    explanation: "L'écran sert à afficher ce que fait l'ordinateur.",
    category: "Reconnaître les périphériques"
  },
  {
    question: "Comment s'appelle le grand boîtier situé à droite de l'écran ?",
    answers: ["L'unité centrale", "Le modem", "Le lecteur DVD", "L'imprimante"],
    correct: 0,
    explanation: "L'unité centrale est le boîtier principal de l'ordinateur.",
    category: "Reconnaître les périphériques"
  },
  {
    question: "Quel élément permet de saisir des lettres et des chiffres ?",
    answers: ["La souris", "Le scanner", "Le clavier", "L'écran"],
    correct: 2,
    explanation: "Le clavier permet d'écrire et de saisir des informations.",
    category: "Reconnaître les périphériques"
  },
  {
    question: "Quel élément permet de déplacer le pointeur sur l'écran ?",
    answers: ["La souris", "L'enceinte", "Le modem", "Le lecteur de cartes mémoires"],
    correct: 0,
    explanation: "La souris permet de déplacer le pointeur et de choisir des éléments à l'écran.",
    category: "Reconnaître les périphériques"
  },
  {
    question: "Quels éléments servent à produire du son ?",
    answers: ["Les enceintes", "Les ports USB", "Le scanner", "Le clavier"],
    correct: 0,
    explanation: "Les enceintes permettent d'écouter les sons produits par l'ordinateur.",
    category: "Reconnaître les périphériques"
  },
  {
    question: "Quel élément permet de lire un DVD ?",
    answers: ["Le lecteur de cartes mémoires", "Le lecteur DVD", "Le modem", "L'écran"],
    correct: 1,
    explanation: "Le lecteur DVD sert à lire un disque DVD.",
    category: "Reconnaître les périphériques"
  },
  {
    question: "Quel élément est utilisé pour imprimer sur du papier ?",
    answers: ["Le scanner", "Le modem", "L'imprimante", "La souris"],
    correct: 2,
    explanation: "L'imprimante permet de produire une feuille avec du texte ou une image.",
    category: "Reconnaître les périphériques"
  },
  {
    question: "Quel élément permet de numériser une feuille ou une image ?",
    answers: ["Le scanner", "L'écran", "Le clavier", "L'enceinte"],
    correct: 0,
    explanation: "Le scanner permet de récupérer une feuille ou une image dans l'ordinateur.",
    category: "Reconnaître les périphériques"
  },
  {
    question: "Quelles prises permettent de brancher un casque ou des haut-parleurs ?",
    answers: ["Les prises jacks audio", "Les ports USB", "Le lecteur DVD", "Le scanner"],
    correct: 0,
    explanation: "Les prises jacks audio servent à brancher du matériel pour le son.",
    category: "Reconnaître les périphériques"
  },
  {
    question: "Quel type de prise est montré sous les prises jacks audio ?",
    answers: ["Une prise DVD", "Un port USB", "Une prise écran", "Une prise clavier uniquement"],
    correct: 1,
    explanation: "Les ports USB servent à brancher différents appareils à l'ordinateur.",
    category: "Reconnaître les périphériques"
  },
  {
    question: "Quel élément permet de lire une carte mémoire ?",
    answers: ["Le lecteur de cartes mémoires", "Le moniteur", "L'unité centrale", "L'imprimante"],
    correct: 0,
    explanation: "Le lecteur de cartes mémoires permet de lire les informations enregistrées sur une carte.",
    category: "Reconnaître les périphériques"
  },
  {
    question: "Quel élément est placé sous l'écran dans le schéma ?",
    answers: ["Le clavier", "Le modem", "Le lecteur DVD", "Le scanner"],
    correct: 0,
    explanation: "Le clavier est placé devant l'écran pour permettre de saisir du texte.",
    category: "Lire le schéma"
  },
  {
    question: "Quel élément est placé à côté du clavier ?",
    answers: ["La souris", "L'imprimante", "Le modem", "Le lecteur de cartes mémoires"],
    correct: 0,
    explanation: "La souris est généralement placée à côté du clavier pour contrôler le pointeur.",
    category: "Lire le schéma"
  },
  {
    question: "Quel élément possède un tiroir ou une fente pour un disque ?",
    answers: ["Le lecteur DVD", "Le scanner", "L'enceinte", "Le modem"],
    correct: 0,
    explanation: "Le lecteur DVD possède un emplacement pour insérer un disque.",
    category: "Lire le schéma"
  },
  {
    question: "Quel élément est représenté par une petite boîte située près de l'écran ?",
    answers: ["Le modem", "Le scanner", "L'imprimante", "Le lecteur DVD"],
    correct: 0,
    explanation: "Le modem est un appareil qui permet la connexion avec un réseau.",
    category: "Lire le schéma"
  },
  {
    question: "Quel élément du schéma possède deux prises rondes pour le son ?",
    answers: ["Les prises jacks audio", "Les ports USB", "Le lecteur DVD", "Le lecteur de cartes mémoires"],
    correct: 0,
    explanation: "Les prises jacks audio sont utilisées pour brancher du matériel sonore.",
    category: "Lire le schéma"
  },
  {
    question: "Lequel de ces éléments permet de saisir des informations ?",
    answers: ["Le clavier", "L'imprimante", "L'enceinte", "L'écran"],
    correct: 0,
    explanation: "Le clavier permet d'entrer des lettres, des chiffres et des commandes.",
    category: "Comprendre le rôle des éléments"
  },
  {
    question: "Lequel de ces éléments permet de faire sortir une information sur une feuille ?",
    answers: ["La souris", "L'imprimante", "Le modem", "Le lecteur DVD"],
    correct: 1,
    explanation: "L'imprimante fait sortir une information de l'ordinateur sous forme imprimée.",
    category: "Comprendre le rôle des éléments"
  },
  {
    question: "Quel élément est le plus adapté pour écouter le son d'un ordinateur ?",
    answers: ["Le scanner", "Le clavier", "L'enceinte", "Le lecteur de cartes mémoires"],
    correct: 2,
    explanation: "L'enceinte transforme les informations sonores de l'ordinateur en sons audibles.",
    category: "Comprendre le rôle des éléments"
  },
  {
    question: "Lequel de ces éléments est séparé de l'unité centrale sur le schéma ?",
    answers: ["Le lecteur DVD", "Les ports USB", "Le lecteur de cartes mémoires", "Le scanner"],
    correct: 3,
    explanation: "Sur le schéma, le scanner est un appareil séparé, placé à côté de l'ordinateur.",
    category: "Comprendre le rôle des éléments"
  }
];

questions.forEach((question) => {
  question.image = diagramImage;
  question.imageAlt = diagramAlt;
});

let activeQuestions = questions.slice();
let missedQuestions = [];
let remediationRound = 0;
let initialScore = null;
let currentQuestion = 0;
let score = 0;
let answered = false;

const progressEl = document.getElementById("progress");
const questionEl = document.getElementById("question");
const imageEl = document.getElementById("schema");
const figureEl = document.getElementById("schema-figure");
const zoomLink = document.getElementById("schema-link");
const categoryEl = document.getElementById("category");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const quizEl = document.getElementById("quiz");
const resultEl = document.createElement("section");
resultEl.className = "quiz-card";
resultEl.hidden = true;
quizEl.after(resultEl);

function showQuestion() {
  answered = false;
  feedbackEl.classList.remove("show");
  feedbackEl.innerHTML = "";
  nextBtn.style.display = "none";

  const question = activeQuestions[currentQuestion];
  progressEl.textContent = `${remediationRound ? "Remédiation — " : ""}Question ${currentQuestion + 1} sur ${activeQuestions.length} — Score : ${score}`;
  questionEl.textContent = question.question;
  categoryEl.textContent = question.category;
  figureEl.hidden = false;
  imageEl.hidden = false;
  imageEl.src = question.image;
  zoomLink.href = question.image;
  imageEl.alt = question.imageAlt;
  answersEl.innerHTML = "";

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = `${String.fromCharCode(65 + index)}. ${answer}`;
    button.addEventListener("click", () => selectAnswer(index, button));
    answersEl.appendChild(button);
  });
  if (currentQuestion > 0) questionEl.focus();
}

function selectAnswer(index, selectedButton) {
  if (answered) return;
  answered = true;

  const question = activeQuestions[currentQuestion];
  const buttons = [...document.querySelectorAll(".answer-btn")];

  buttons.forEach((button, buttonIndex) => {
    button.disabled = true;
    if (buttonIndex === question.correct) button.classList.add("correct");
  });

  if (index === question.correct) {
    score++;
    feedbackEl.innerHTML = `<strong>Bonne réponse !</strong><br>${question.explanation}`;
  } else {
    missedQuestions.push(question);
    selectedButton.classList.add("wrong");
    feedbackEl.innerHTML = `<strong>Réponse incorrecte.</strong><br>Bonne réponse : ${question.answers[question.correct]}<br>${question.explanation}`;
  }

  feedbackEl.classList.add("show");
  nextBtn.textContent = currentQuestion === activeQuestions.length - 1 ? "Voir mon résultat" : "Question suivante";
  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  if (!answered) return;
  currentQuestion++;
  if (currentQuestion < activeQuestions.length) showQuestion();
  else showResult();
});

function showResult() {
  answered = false;
  if (remediationRound === 0) initialScore = score;
  const percentage = Math.round((score / activeQuestions.length) * 100);
  const remaining = missedQuestions.length;
  quizEl.hidden = true;
  resultEl.hidden = false;
  resultEl.innerHTML = `
    <div class="result">
      <span class="section-kicker">${remediationRound ? "Remédiation" : "Résultat"}</span>
      <h2 id="result-title" tabindex="-1">${remediationRound ? "Remédiation terminée" : "QCM terminé"}</h2>
      <div class="result-score">${score} / ${activeQuestions.length}</div>
      <p>Tu as obtenu <strong>${percentage} %</strong> de bonnes réponses${remediationRound ? " pendant cette remédiation" : ""}.</p>
      ${remediationRound ? `<p>Ton score au QCM initial : <strong>${initialScore} / ${questions.length}</strong>.</p>` : `<p>${getMessage(percentage)}</p>`}
      <p>${remaining
        ? `${remaining} question${remaining > 1 ? "s restent" : " reste"} à revoir. La remédiation reprend uniquement tes réponses incorrectes.`
        : "Bravo ! Tu as répondu correctement à toutes les questions de ce parcours."}</p>
      <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:12px;">
        ${remaining ? '<button class="btn btn-secondary" id="remediationBtn">Remédiation</button>' : ""}
        <button class="btn btn-secondary" id="restartBtn">Recommencer le QCM complet</button>
      </div>
    </div>`;
  if (remaining) document.getElementById("remediationBtn").addEventListener("click", startRemediation);
  document.getElementById("restartBtn").addEventListener("click", () => location.reload());
  document.getElementById("result-title").focus();
}

function startRemediation() {
  if (!missedQuestions.length || resultEl.hidden) return;
  activeQuestions = missedQuestions.slice();
  missedQuestions = [];
  remediationRound++;
  currentQuestion = 0;
  score = 0;
  answered = false;
  resultEl.hidden = true;
  resultEl.innerHTML = "";
  quizEl.hidden = false;
  showQuestion();
  questionEl.setAttribute("tabindex", "-1");
  questionEl.focus();
}

function getMessage(percentage) {
  if (percentage === 100) return "Excellent ! Tu connais les principaux éléments de l'ordinateur.";
  if (percentage >= 80) return "Très bon résultat ! Tes connaissances sont solides.";
  if (percentage >= 60) return "Bon travail. Quelques notions méritent encore une petite révision.";
  if (percentage >= 40) return "Plusieurs notions sont encore à revoir. Relis le cours puis recommence le QCM.";
  return "Revois les périphériques de l'ordinateur, puis essaie à nouveau.";
}

showQuestion();
