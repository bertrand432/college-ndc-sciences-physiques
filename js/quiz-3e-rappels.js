const questions = [
  {
    "question": "Qu'est-ce qu'un corps pur ?",
    "answers": [
      "Une substance constituée d'un seul constituant",
      "Une substance constituée de plusieurs constituants",
      "Un mélange contenant obligatoirement de l'eau",
      "Un mélange dans lequel on distingue plusieurs constituants"
    ],
    "correct": 0,
    "explanation": "Un corps pur est une substance formée d'un seul constituant."
  },
  {
    "question": "Quand dit-on qu'un mélange est homogène ?",
    "answers": [
      "Quand il contient uniquement des liquides",
      "Quand on ne distingue pas ses constituants à l'œil nu",
      "Quand il contient toujours de l'eau",
      "Quand on distingue au moins deux constituants à l'œil nu"
    ],
    "correct": 1,
    "explanation": "Un mélange est homogène lorsque ses constituants ne sont pas distinguables à l'œil nu."
  },
  {
    "question": "Un mélange dans lequel on distingue au moins deux constituants à l'œil nu est :",
    "answers": [
      "un corps pur",
      "un mélange homogène",
      "un mélange hétérogène",
      "une espèce chimique"
    ],
    "correct": 2,
    "explanation": "Un mélange est hétérogène lorsqu'on distingue au moins deux constituants à l'œil nu."
  },
  {
    "question": "Deux liquides qui forment un mélange homogène sont dits :",
    "answers": [
      "solubles",
      "miscibles",
      "non miscibles",
      "anhydres"
    ],
    "correct": 1,
    "explanation": "Deux liquides sont miscibles lorsqu'ils forment un mélange homogène."
  },
  {
    "question": "Au cours d'une dissolution, comment appelle-t-on la substance qui est dissoute ?",
    "answers": [
      "Le solvant",
      "Le soluté",
      "La solution",
      "Le précipité"
    ],
    "correct": 1,
    "explanation": "La substance dissoute est appelée le soluté ; elle est dissoute dans un solvant."
  },
  {
    "question": "Quelle relation traduit la conservation de la masse lors d'une dissolution ?",
    "answers": [
      "Masse de la solution = masse du soluté + masse du solvant",
      "Masse de la solution = masse du soluté − masse du solvant",
      "Masse du soluté = masse de la solution + masse du solvant",
      "Masse du solvant = masse de la solution + masse du soluté"
    ],
    "correct": 0,
    "explanation": "Lors d'une dissolution, la masse de la solution est égale à la somme des masses du soluté et du solvant."
  },
  {
    "question": "Quels sont les trois états de la matière présentés dans le cours ?",
    "answers": [
      "Solide, liquide et gazeux",
      "Solide, aqueux et gazeux",
      "Liquide, vapeur et plasma",
      "Solide, miscible et liquide"
    ],
    "correct": 0,
    "explanation": "Le cours distingue trois états : solide, liquide et gazeux."
  },
  {
    "question": "Comment le cours décrit-il l'état gazeux à l'échelle microscopique ?",
    "answers": [
      "Compact et ordonné",
      "Compact et désordonné",
      "Dispersé et désordonné",
      "Dispersé et ordonné"
    ],
    "correct": 2,
    "explanation": "Dans le cours, l'état gazeux est dispersé et désordonné."
  },
  {
    "question": "Comment appelle-t-on le passage de l'état solide à l'état liquide ?",
    "answers": [
      "La solidification",
      "La liquéfaction",
      "La fusion",
      "La vaporisation"
    ],
    "correct": 2,
    "explanation": "Le passage de l'état solide à l'état liquide est la fusion."
  },
  {
    "question": "Comment appelle-t-on le passage de l'état gazeux à l'état liquide ?",
    "answers": [
      "La fusion",
      "La vaporisation",
      "La solidification",
      "La liquéfaction"
    ],
    "correct": 3,
    "explanation": "Le passage de l'état gazeux à l'état liquide est la liquéfaction."
  },
  {
    "question": "Lors d'une transformation physique, que deviennent les espèces chimiques présentes ?",
    "answers": [
      "Elles disparaissent totalement",
      "Elles sont simplement réorganisées",
      "Elles se transforment toujours en nouveaux atomes",
      "Leur masse devient nulle"
    ],
    "correct": 1,
    "explanation": "Lors d'une transformation physique, les espèces chimiques sont simplement réorganisées."
  },
  {
    "question": "Quelle est la formule de la masse volumique ρ ?",
    "answers": [
      "ρ = V / m",
      "ρ = m × V",
      "ρ = m / V",
      "ρ = m + V"
    ],
    "correct": 2,
    "explanation": "La masse volumique est le quotient de la masse m par le volume V : ρ = m / V."
  },
  {
    "question": "Quelle est la masse volumique de l'eau à 20 °C donnée dans le cours ?",
    "answers": [
      "0,1 g/cm³",
      "1 g/cm³",
      "10 g/cm³",
      "100 g/cm³"
    ],
    "correct": 1,
    "explanation": "Le cours donne ρeau = 1 g/cm³ = 1 kg/dm³ à 20 °C."
  },
  {
    "question": "À quelle température l'eau pure fond-elle, d'après le cours ?",
    "answers": [
      "0 °C",
      "20 °C",
      "50 °C",
      "100 °C"
    ],
    "correct": 0,
    "explanation": "La température de fusion de l'eau indiquée dans le cours est de 0 °C."
  },
  {
    "question": "À quelle température l'eau pure bout-elle, d'après le cours ?",
    "answers": [
      "0 °C",
      "20 °C",
      "50 °C",
      "100 °C"
    ],
    "correct": 3,
    "explanation": "La température d'ébullition de l'eau indiquée dans le cours est de 100 °C."
  },
  {
    "question": "Quel test permet de mettre en évidence la présence d'eau ?",
    "answers": [
      "L'eau de chaux qui se trouble",
      "Une bûchette incandescente qui se ravive",
      "Le sulfate de cuivre anhydre blanc qui devient bleu",
      "Une détonation avec une allumette enflammée"
    ],
    "correct": 2,
    "explanation": "Le sulfate de cuivre anhydre blanc devient bleu au contact de l'eau."
  },
  {
    "question": "Quel résultat indique la présence de dioxyde de carbone ?",
    "answers": [
      "L'eau de chaux se trouble",
      "Le sulfate de cuivre devient blanc",
      "Une bûchette incandescente se ravive",
      "Une allumette provoque une fusion"
    ],
    "correct": 0,
    "explanation": "En présence de dioxyde de carbone, l'eau de chaux limpide se trouble."
  },
  {
    "question": "Quel test permet de mettre en évidence la présence de dioxygène ?",
    "answers": [
      "Une bûchette incandescente dont la combustion est ravivée",
      "De l'eau de chaux qui devient bleue",
      "Du sulfate de cuivre qui se trouble",
      "Une détonation au contact d'une allumette enflammée"
    ],
    "correct": 0,
    "explanation": "La combustion d'une bûchette incandescente est ravivée en présence de dioxygène."
  },
  {
    "question": "Quel phénomène met en évidence la présence de dihydrogène ?",
    "answers": [
      "L'eau de chaux reste limpide",
      "Une détonation au voisinage d'une allumette enflammée",
      "Une bûchette incandescente s'éteint",
      "Le sulfate de cuivre anhydre devient bleu"
    ],
    "correct": 1,
    "explanation": "Une détonation se fait entendre lorsqu'on approche une allumette enflammée en présence de dihydrogène."
  },
  {
    "question": "De quoi une molécule est-elle constituée ?",
    "answers": [
      "D'un assemblage d'atomes",
      "Uniquement d'électrons",
      "Uniquement de liquides",
      "D'un assemblage de corps purs uniquement"
    ],
    "correct": 0,
    "explanation": "Une molécule est un assemblage d'atomes."
  },
  {
    "question": "Quelle est la formule chimique de l'eau présentée dans le cours ?",
    "answers": [
      "O₂",
      "CO₂",
      "H₂O",
      "CH₄"
    ],
    "correct": 2,
    "explanation": "La molécule d'eau est représentée par la formule H₂O."
  },
  {
    "question": "Dans une réaction chimique, où écrit-on les réactifs ?",
    "answers": [
      "À gauche de la flèche",
      "À droite de la flèche",
      "Au-dessus de la flèche uniquement",
      "Ils ne sont pas écrits"
    ],
    "correct": 0,
    "explanation": "Les réactifs sont écrits à gauche de la flèche et les produits à droite."
  },
  {
    "question": "Que dit la loi de conservation de la masse lors d'une transformation chimique ?",
    "answers": [
      "La masse des produits est toujours supérieure à celle des réactifs",
      "La masse des réactifs est égale à la masse des produits formés",
      "La masse des réactifs disparaît",
      "La masse dépend uniquement du nombre de produits"
    ],
    "correct": 1,
    "explanation": "Lors d'une transformation chimique, la masse des réactifs est égale à la masse des produits formés."
  },
  {
    "question": "Pourquoi ajuste-t-on une équation de réaction avec des nombres entiers ?",
    "answers": [
      "Pour respecter la conservation des atomes",
      "Pour changer la nature des réactifs",
      "Pour supprimer les produits inutiles",
      "Pour modifier la masse volumique des espèces"
    ],
    "correct": 0,
    "explanation": "Une équation est ajustée afin de respecter la conservation des atomes."
  },
  {
    "question": "Quelle équation correspond à la combustion du carbone présentée dans le cours ?",
    "answers": [
      "C + O₂ → CO₂",
      "C + CO₂ → O₂",
      "CH₄ + O₂ → CO₂",
      "H₂ + O₂ → H₂O"
    ],
    "correct": 0,
    "explanation": "Le cours présente la combustion du carbone : C + O₂ → CO₂."
  },
  {
    "question": "Quelle équation ajustée correspond à la combustion du méthane présentée dans le cours ?",
    "answers": [
      "CH₄ + O₂ → CO₂ + H₂O",
      "CH₄ + 2 O₂ → CO₂ + 2 H₂O",
      "2 CH₄ + O₂ → 2 CO₂ + H₂O",
      "CH₄ + CO₂ → 2 H₂O"
    ],
    "correct": 1,
    "explanation": "L'équation ajustée donnée dans le cours est : CH₄ + 2 O₂ → CO₂ + 2 H₂O."
  }
];

// Each round contains only the questions still to practise.
let activeQuestions = questions.slice();
let missedQuestions = [];
let remediationRound = 0;
let initialScore = null;
let currentQuestion = 0;
let score = 0;
let answered = false;

const progressEl = document.getElementById("progress");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const quizEl = document.getElementById("quiz");
// Keep the quiz DOM and its listeners intact when showing the result.
const resultEl = document.createElement("section");
resultEl.className = "quiz-card";
resultEl.hidden = true;
quizEl.after(resultEl);

function showQuestion() {
  answered = false;
  feedbackEl.classList.remove("show");
  feedbackEl.innerHTML = "";
  nextBtn.style.display = "none";

  const q = activeQuestions[currentQuestion];
  progressEl.textContent = `${remediationRound ? "Remédiation — " : ""}Question ${currentQuestion + 1} sur ${activeQuestions.length} — Score : ${score}`;
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

  const q = activeQuestions[currentQuestion];
  const buttons = [...document.querySelectorAll(".answer-btn")];

  buttons.forEach((button, i) => {
    button.disabled = true;
    if (i === q.correct) button.classList.add("correct");
  });

  if (index === q.correct) {
    score++;
    feedbackEl.innerHTML = `<strong>Bonne réponse !</strong><br>${q.explanation}`;
  } else {
    missedQuestions.push(q);
    selectedButton.classList.add("wrong");
    feedbackEl.innerHTML = `<strong>Réponse incorrecte.</strong><br>${q.explanation}`;
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
  if (percentage === 100) return "Excellent ! Tous les rappels sont maîtrisés.";
  if (percentage >= 80) return "Très bon résultat ! Tes connaissances sont solides.";
  if (percentage >= 60) return "Bon travail. Quelques notions méritent encore une petite révision.";
  if (percentage >= 40) return "Plusieurs notions sont encore à revoir. Relis le cours puis recommence le QCM.";
  return "Il faut reprendre les rappels du cours avant de retenter le QCM.";
}

showQuestion();
