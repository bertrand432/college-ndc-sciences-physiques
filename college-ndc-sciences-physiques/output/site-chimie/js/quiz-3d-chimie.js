// Questions validées à partir de cours1_2026.pdf.
const questions = [
  {
    "question": "Quel gaz permet au carbone de brûler ?",
    "answers": [
      "Le dioxyde de carbone.",
      "Le dioxygène.",
      "La vapeur d’eau."
    ],
    "correct": 1,
    "explanation": "Le dioxygène permet la combustion du carbone.",
    "category": "Combustions et transformations chimiques"
  },
  {
    "question": "Quel gaz se forme quand le carbone brûle ?",
    "answers": [
      "Le dioxyde de carbone.",
      "Le dioxygène.",
      "La vapeur d’eau."
    ],
    "correct": 0,
    "explanation": "La combustion transforme le carbone en dioxyde de carbone.",
    "category": "Combustions et transformations chimiques"
  },
  {
    "question": "Quel liquide permet de détecter le dioxyde de carbone ?",
    "answers": [
      "L’eau du robinet.",
      "L’eau salée.",
      "L’eau de chaux."
    ],
    "correct": 2,
    "explanation": "Dans le cours, on utilise l’eau de chaux pour détecter ce gaz.",
    "category": "Combustions et transformations chimiques"
  },
  {
    "question": "Que se passe-t-il quand l’eau de chaux rencontre du dioxyde de carbone ?",
    "answers": [
      "Elle se trouble.",
      "Elle devient un gaz.",
      "Elle devient un solide dur."
    ],
    "correct": 0,
    "explanation": "L’eau de chaux devient trouble en présence de dioxyde de carbone.",
    "category": "Combustions et transformations chimiques"
  },
  {
    "question": "Lors d’une transformation chimique, que deviennent les réactifs ?",
    "answers": [
      "Ils restent tous identiques.",
      "Ils se transforment en nouvelles substances.",
      "Ils deviennent toujours de l’eau."
    ],
    "correct": 1,
    "explanation": "De nouvelles substances apparaissent : ce sont les produits.",
    "category": "Combustions et transformations chimiques"
  },
  {
    "question": "Comment appelle-t-on les substances qui se transforment pendant la réaction ?",
    "answers": [
      "Les produits.",
      "Les états.",
      "Les réactifs."
    ],
    "correct": 2,
    "explanation": "Les réactifs sont les substances qui participent à la réaction et se transforment.",
    "category": "Combustions et transformations chimiques"
  },
  {
    "question": "Comment appelle-t-on les nouvelles substances formées ?",
    "answers": [
      "Les produits.",
      "Les réactifs.",
      "Les combustions."
    ],
    "correct": 0,
    "explanation": "Les produits sont les nouvelles substances obtenues après la réaction.",
    "category": "Combustions et transformations chimiques"
  },
  {
    "question": "Quel exemple de transformation chimique est donné dans le cours ?",
    "answers": [
      "Observer une dune de sable.",
      "Faire brûler du carbone.",
      "Représenter une particule."
    ],
    "correct": 1,
    "explanation": "Quand le carbone brûle, une nouvelle substance se forme : le dioxyde de carbone.",
    "category": "Combustions et transformations chimiques"
  },
  {
    "question": "Dans un bilan de réaction, que place-t-on avant la flèche ?",
    "answers": [
      "Les noms des produits.",
      "Les noms des états de la matière.",
      "Les noms des réactifs."
    ],
    "correct": 2,
    "explanation": "On écrit les réactifs avant la flèche et les produits après.",
    "category": "Combustions et transformations chimiques",
    "image": "../../images/qcm-3d-chimie/bilan-a-completer.png",
    "imageAlt": "Bilan : une zone à compléter avant la flèche, puis les noms des produits."
  },
  {
    "question": "Quel bilan correspond à la combustion du carbone ?",
    "answers": [
      "Carbone + dioxyde de carbone → dioxygène.",
      "Carbone + dioxygène → dioxyde de carbone.",
      "Dioxygène + eau de chaux → carbone."
    ],
    "correct": 1,
    "explanation": "Le carbone réagit avec le dioxygène pour former du dioxyde de carbone.",
    "category": "Combustions et transformations chimiques"
  },
  {
    "question": "Dans l’exemple du cours, de quoi une dune est-elle formée ?",
    "answers": [
      "De grains de sable.",
      "De morceaux de papier.",
      "De gouttes d’eau."
    ],
    "correct": 0,
    "explanation": "La dune est composée de nombreux grains de sable.",
    "category": "Le modèle particulaire"
  },
  {
    "question": "Que permet de comprendre l’exemple de la dune ?",
    "answers": [
      "Toute la matière est du sable.",
      "Toute la matière est liquide.",
      "La matière est formée de particules."
    ],
    "correct": 2,
    "explanation": "Comme la dune est faite de grains, la matière est faite de particules.",
    "category": "Le modèle particulaire"
  },
  {
    "question": "Quels noms donne-t-on aux particules dans le cours ?",
    "answers": [
      "Solides ou liquides.",
      "Atomes ou molécules.",
      "Dunes ou rochers."
    ],
    "correct": 1,
    "explanation": "Le cours appelle ces particules des atomes ou des molécules.",
    "category": "Le modèle particulaire"
  },
  {
    "question": "Quels sont les trois états de la matière cités dans le cours ?",
    "answers": [
      "Solide, liquide et gazeux.",
      "Solide, liquide et compressible.",
      "Solide, gazeux et horizontal."
    ],
    "correct": 0,
    "explanation": "La matière peut être à l’état solide, liquide ou gazeux.",
    "category": "Les états de la matière"
  },
  {
    "question": "Quel état de la matière possède une forme propre ?",
    "answers": [
      "L’état gazeux.",
      "L’état liquide.",
      "L’état solide."
    ],
    "correct": 2,
    "explanation": "Un solide possède sa propre forme.",
    "category": "Les états de la matière"
  },
  {
    "question": "Quel état occupe tout le volume du récipient qui le contient ?",
    "answers": [
      "L’état liquide.",
      "L’état gazeux.",
      "L’état solide."
    ],
    "correct": 1,
    "explanation": "Un gaz occupe tout le volume disponible dans le récipient.",
    "category": "Les états de la matière",
    "image": "../../images/qcm-3d-chimie/volume.png",
    "imageAlt": "Tableau du cours : occuper tout le volume du récipient. Solide : non ; liquide : non ; gaz : oui."
  },
  {
    "question": "Au repos, comment est la surface libre d’un liquide ?",
    "answers": [
      "Plane et horizontale.",
      "Toujours inclinée.",
      "Toujours bombée."
    ],
    "correct": 0,
    "explanation": "Quand le liquide est au repos, sa surface libre est plate et horizontale.",
    "category": "Les états de la matière"
  },
  {
    "question": "D’après le tableau, que fait un liquide dans un récipient ?",
    "answers": [
      "Il garde toujours sa propre forme.",
      "Il remplit toujours tout le volume du récipient.",
      "Il prend la forme du récipient."
    ],
    "correct": 2,
    "explanation": "Un liquide n’a pas de forme propre : il prend la forme du récipient qui le contient.",
    "category": "Les états de la matière",
    "image": "../../images/qcm-3d-chimie/forme-liquide.png",
    "imageAlt": "Tableau du cours : prendre la forme du récipient. Solide : non ; liquide : oui ; gaz : non."
  },
  {
    "question": "Quel état est indiqué comme « impalpable » dans le tableau ?",
    "answers": [
      "L’état solide.",
      "L’état gazeux.",
      "L’état liquide."
    ],
    "correct": 1,
    "explanation": "Le tableau indique « oui » pour les gaz : on ne peut pas les saisir dans la main.",
    "category": "Les états de la matière",
    "image": "../../images/qcm-3d-chimie/impalpable.png",
    "imageAlt": "Tableau du cours : impalpable. Solide : non ; liquide : non ; gaz : oui."
  },
  {
    "question": "Quel état de la matière est compressible ?",
    "answers": [
      "L’état gazeux.",
      "L’état solide.",
      "L’état liquide."
    ],
    "correct": 0,
    "explanation": "Un gaz est compressible : on peut réduire le volume qu’il occupe.",
    "category": "Les états de la matière"
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
const imageEl = document.getElementById("pictogramme");
const categoryEl = document.getElementById("category");
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
  categoryEl.textContent = q.category;
  imageEl.hidden = !q.image;
  document.getElementById("courseVisual").hidden = !q.image;
  if (q.image) {
    imageEl.src = q.image;
    imageEl.alt = q.imageAlt;
  } else {
    imageEl.removeAttribute("src");
    imageEl.alt = "";
  }
  answersEl.innerHTML = "";

  q.answers.forEach((answer, index) => {
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
    feedbackEl.innerHTML = `<strong>Réponse incorrecte.</strong><br>Bonne réponse : ${q.answers[q.correct]}<br>${q.explanation}`;
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
  if (percentage === 100) return "Excellent ! Tu connais les transformations chimiques et la matière.";
  if (percentage >= 80) return "Très bon résultat ! Tes connaissances sont solides.";
  if (percentage >= 60) return "Bon travail. Quelques notions méritent encore une petite révision.";
  if (percentage >= 40) return "Plusieurs notions sont encore à revoir. Relis le cours puis recommence le QCM.";
  return "Revois les transformations chimiques et les états de la matière, puis essaie à nouveau.";
}

showQuestion();
