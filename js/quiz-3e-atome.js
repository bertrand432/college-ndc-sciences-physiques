// QCM sur l’atome : questions validées par l’enseignant.
const questions = [
  {
    "question": "Quelle description correspond à un atome ?",
    "answers": [
      "Un noyau central autour duquel se déplacent des électrons.",
      "Un noyau central autour duquel se déplacent des protons.",
      "Des électrons dans le noyau et des protons autour.",
      "Un ensemble de neutrons uniquement."
    ],
    "correct": 0,
    "explanation": "Un atome possède un noyau central et des électrons qui se déplacent autour.",
    "category": "Structure de l’atome",
    "periodicTable": false,
    "models": false
  },
  {
    "question": "Quelles particules constituent le noyau ?",
    "answers": [
      "Les protons et les électrons.",
      "Les électrons et les neutrons.",
      "Les protons et les neutrons.",
      "Uniquement les électrons."
    ],
    "correct": 2,
    "explanation": "Les protons et les neutrons sont les particules du noyau. On les appelle les nucléons.",
    "category": "Structure de l’atome",
    "periodicTable": false,
    "models": false
  },
  {
    "question": "Quelle est la charge électrique d’un électron ?",
    "answers": [
      "Positive.",
      "Négative.",
      "Nulle.",
      "Elle dépend de l’élément chimique."
    ],
    "correct": 1,
    "explanation": "Un électron porte toujours une charge électrique négative.",
    "category": "Structure de l’atome",
    "periodicTable": false,
    "models": false
  },
  {
    "question": "Quelle particule porte une charge électrique positive ?",
    "answers": [
      "L’électron.",
      "Le neutron.",
      "Toutes les particules du noyau.",
      "Le proton."
    ],
    "correct": 3,
    "explanation": "Le proton porte une charge positive, tandis que le neutron ne porte pas de charge.",
    "category": "Structure de l’atome",
    "periodicTable": false,
    "models": false
  },
  {
    "question": "Quelle particule ne porte pas de charge électrique ?",
    "answers": [
      "Le neutron.",
      "Le proton.",
      "L’électron.",
      "Aucune des trois."
    ],
    "correct": 0,
    "explanation": "Le neutron est une particule électriquement neutre.",
    "category": "Structure de l’atome",
    "periodicTable": false,
    "models": false
  },
  {
    "question": "Pourquoi un atome est-il électriquement neutre ?",
    "answers": [
      "Il ne contient aucune particule chargée.",
      "Il contient autant de neutrons que d’électrons.",
      "Il contient autant de protons que d’électrons.",
      "Il contient autant de protons que de neutrons."
    ],
    "correct": 2,
    "explanation": "Les charges positives des protons compensent les charges négatives des électrons.",
    "category": "Structure de l’atome",
    "periodicTable": false,
    "models": false
  },
  {
    "question": "Que signifie « l’atome a une structure lacunaire » ?",
    "answers": [
      "Il ne contient pas de noyau.",
      "Il est essentiellement constitué de vide.",
      "Son noyau occupe tout son volume.",
      "Il ne contient pas d’électrons."
    ],
    "correct": 1,
    "explanation": "Le mot « lacunaire » indique que l’atome est essentiellement constitué de vide.",
    "category": "Structure de l’atome",
    "periodicTable": false,
    "models": false
  },
  {
    "question": "Que représente le numéro atomique Z ?",
    "answers": [
      "Le nombre de neutrons.",
      "Le nombre de nucléons.",
      "Le nombre total de particules de l’atome.",
      "Le nombre de protons."
    ],
    "correct": 3,
    "explanation": "Z indique le nombre de protons présents dans le noyau.",
    "category": "Composition et notation du noyau",
    "periodicTable": false,
    "models": false
  },
  {
    "question": "Que représente le nombre de masse A ?",
    "answers": [
      "Le nombre total de protons et de neutrons.",
      "Le nombre d’électrons.",
      "Le nombre de neutrons uniquement.",
      "Le nombre total de protons et d’électrons."
    ],
    "correct": 0,
    "explanation": "A est le nombre de nucléons : protons et neutrons réunis.",
    "category": "Composition et notation du noyau",
    "periodicTable": false,
    "models": false
  },
  {
    "question": "Quelle formule permet de calculer le nombre de neutrons N ?",
    "answers": [
      "N = A + Z.",
      "N = Z − A.",
      "N = A − Z.",
      "N = A × Z."
    ],
    "correct": 2,
    "explanation": "On retire le nombre de protons du nombre total de nucléons.",
    "category": "Composition et notation du noyau",
    "periodicTable": false,
    "models": false
  },
  {
    "question": "Dans la représentation [[31,15,P]] du phosphore, que signifie le nombre 31 ?",
    "answers": [
      "Le noyau contient 31 protons.",
      "Le noyau contient 31 nucléons.",
      "L’atome contient 31 électrons.",
      "Le noyau contient 31 neutrons."
    ],
    "correct": 1,
    "explanation": "Le nombre placé en haut à gauche est A. Il indique le nombre de nucléons.",
    "category": "Composition et notation du noyau",
    "periodicTable": false,
    "models": false
  },
  {
    "question": "Un noyau de soufre, de symbole S, contient 16 protons et 16 neutrons. Quelle est sa représentation symbolique ?",
    "answers": [
      "[[16,32,S]]",
      "[[16,16,S]]",
      "[[32,32,S]]",
      "[[32,16,S]]"
    ],
    "correct": 3,
    "explanation": "Z = 16 et A = 16 + 16 = 32. On place A en haut et Z en bas, à gauche du symbole.",
    "category": "Composition et notation du noyau",
    "periodicTable": false,
    "models": false
  },
  {
    "question": "Un atome de fluor possède 9 protons. Combien possède-t-il d’électrons ?",
    "answers": [
      "9.",
      "19.",
      "10.",
      "0."
    ],
    "correct": 0,
    "explanation": "Un atome est neutre : il possède autant d’électrons que de protons.",
    "category": "Composition et notation du noyau",
    "periodicTable": false,
    "models": false
  },
  {
    "question": "Quelle est la composition de l’atome de lithium [[7,3,Li]] ?",
    "answers": [
      "3 protons, 7 neutrons et 3 électrons.",
      "4 protons, 3 neutrons et 4 électrons.",
      "3 protons, 4 neutrons et 3 électrons.",
      "3 protons, 4 neutrons et 7 électrons."
    ],
    "correct": 2,
    "explanation": "Z = 3 donne 3 protons et 3 électrons. Le nombre de neutrons vaut 7 − 3 = 4.",
    "category": "Composition et notation du noyau",
    "periodicTable": false,
    "models": false
  },
  {
    "question": "Un atome de magnésium possède 12 protons et 24 nucléons. Quelle est sa composition ?",
    "answers": [
      "12 protons, 24 neutrons et 12 électrons.",
      "12 protons, 12 neutrons et 12 électrons.",
      "24 protons, 12 neutrons et 24 électrons.",
      "12 protons, 12 neutrons et 24 électrons."
    ],
    "correct": 1,
    "explanation": "Il possède 24 − 12 = 12 neutrons et autant d’électrons que de protons, soit 12.",
    "category": "Composition et notation du noyau",
    "periodicTable": false,
    "models": false
  },
  {
    "question": "Quelle est la composition de l’atome de chlore [[35,17,Cl]] ?",
    "answers": [
      "17 protons, 35 neutrons et 17 électrons.",
      "18 protons, 17 neutrons et 18 électrons.",
      "17 protons, 18 neutrons et 35 électrons.",
      "17 protons, 18 neutrons et 17 électrons."
    ],
    "correct": 3,
    "explanation": "Le chlore possède ici 17 protons, 35 − 17 = 18 neutrons et 17 électrons.",
    "category": "Composition et notation du noyau",
    "periodicTable": false,
    "models": false
  },
  {
    "question": "Le noyau d’un atome de potassium contient 39 nucléons, dont 20 neutrons. Quelle est la composition de cet atome ?",
    "answers": [
      "19 protons, 20 neutrons et 19 électrons.",
      "20 protons, 19 neutrons et 20 électrons.",
      "39 protons, 20 neutrons et 39 électrons.",
      "19 protons, 20 neutrons et 39 électrons."
    ],
    "correct": 0,
    "explanation": "Le nombre de protons vaut 39 − 20 = 19. L’atome possède donc aussi 19 électrons.",
    "category": "Composition et notation du noyau",
    "periodicTable": false,
    "models": false
  },
  {
    "question": "Un atome de béryllium contient 4 protons et 5 neutrons. Quelles sont les valeurs de A et de Z ?",
    "answers": [
      "A = 5 et Z = 4.",
      "A = 9 et Z = 5.",
      "A = 9 et Z = 4.",
      "A = 4 et Z = 9."
    ],
    "correct": 2,
    "explanation": "A = 4 + 5 = 9 nucléons. Z correspond aux 4 protons.",
    "category": "Composition et notation du noyau",
    "periodicTable": false,
    "models": false
  },
  {
    "question": "Quelle est la composition du noyau de bore [[11,5,B]] ?",
    "answers": [
      "5 protons et 11 neutrons.",
      "5 protons et 6 neutrons.",
      "6 protons et 5 neutrons.",
      "11 protons et 5 neutrons."
    ],
    "correct": 1,
    "explanation": "Z = 5 indique 5 protons. Le noyau possède 11 − 5 = 6 neutrons.",
    "category": "Composition et notation du noyau",
    "periodicTable": false,
    "models": false
  },
  {
    "question": "Un élève affirme : « Dans [[40,18,Ar]], le nombre 40 indique qu’il y a 40 neutrons. » Quelle correction est juste ?",
    "answers": [
      "Il y a 18 neutrons.",
      "Il y a 58 neutrons.",
      "Il y a 40 électrons.",
      "Il y a 22 neutrons."
    ],
    "correct": 3,
    "explanation": "Le nombre 40 représente tous les nucléons. Le nombre de neutrons est donc 40 − 18 = 22.",
    "category": "Composition et notation du noyau",
    "periodicTable": false,
    "models": false
  },
  {
    "question": "Un atome possède 7 protons, 7 neutrons et 7 électrons. Quel est cet élément ?",
    "answers": [
      "Le silicium, Si.",
      "Le fluor, F.",
      "L’azote, N.",
      "Le néon, Ne."
    ],
    "correct": 2,
    "explanation": "Il possède 7 protons, donc Z = 7. Le tableau indique qu’il s’agit de l’azote.",
    "category": "Utiliser le tableau périodique",
    "periodicTable": true,
    "models": false
  },
  {
    "question": "Le noyau d’un atome contient 28 nucléons, dont 14 neutrons. Quel est cet élément ?",
    "answers": [
      "Le silicium, Si.",
      "Le magnésium, Mg.",
      "Le phosphore, P.",
      "L’azote, N."
    ],
    "correct": 0,
    "explanation": "Le noyau contient 28 − 14 = 14 protons. Z = 14 correspond au silicium.",
    "category": "Utiliser le tableau périodique",
    "periodicTable": true,
    "models": false
  },
  {
    "question": "Un atome électriquement neutre possède 10 électrons. Quel est cet élément ?",
    "answers": [
      "Le fluor, F.",
      "Le bore, B.",
      "Le calcium, Ca.",
      "Le néon, Ne."
    ],
    "correct": 3,
    "explanation": "Cet atome possède aussi 10 protons. Le numéro atomique 10 correspond au néon.",
    "category": "Utiliser le tableau périodique",
    "periodicTable": true,
    "models": false
  },
  {
    "question": "Un atome possède 40 nucléons et 20 électrons. Quel est cet élément ?",
    "answers": [
      "Le potassium, K.",
      "Le calcium, Ca.",
      "L’argon, Ar.",
      "Le néon, Ne."
    ],
    "correct": 1,
    "explanation": "Comme l’atome est neutre, il possède 20 protons. Z = 20 correspond au calcium.",
    "category": "Utiliser le tableau périodique",
    "periodicTable": true,
    "models": false
  },
  {
    "question": "Un noyau est représenté par [[31,15,X]]. Quel nom et quel symbole faut-il associer à X ?",
    "answers": [
      "Le soufre, S.",
      "Le silicium, Si.",
      "Le phosphore, P.",
      "Le chlore, Cl."
    ],
    "correct": 2,
    "explanation": "On utilise le nombre du bas : Z = 15. Il correspond au phosphore, de symbole P.",
    "category": "Utiliser le tableau périodique",
    "periodicTable": true,
    "models": false
  },
  {
    "question": "Un atome contient 19 nucléons, dont 10 neutrons. Quel est cet élément et combien possède-t-il d’électrons ?",
    "answers": [
      "Le fluor, avec 9 électrons.",
      "Le néon, avec 10 électrons.",
      "Le potassium, avec 19 électrons.",
      "Le fluor, avec 19 électrons."
    ],
    "correct": 0,
    "explanation": "Il possède 19 − 10 = 9 protons : c’est le fluor. Cet atome neutre possède aussi 9 électrons.",
    "category": "Utiliser le tableau périodique",
    "periodicTable": true,
    "models": false
  },
  {
    "question": "Un atome possède 16 protons et 16 neutrons. Quelle proposition donne son symbole et ses valeurs de A et Z ?",
    "answers": [
      "Si ; A = 32 ; Z = 16.",
      "S ; A = 16 ; Z = 32.",
      "S ; A = 16 ; Z = 16.",
      "S ; A = 32 ; Z = 16."
    ],
    "correct": 3,
    "explanation": "Z = 16 correspond au soufre, S. Son noyau contient 16 + 16 = 32 nucléons.",
    "category": "Utiliser le tableau périodique",
    "periodicTable": true,
    "models": false
  },
  {
    "question": "On compare deux modèles proposés pour un atome de bore : le modèle 1 contient 5 protons et 5 électrons ; le modèle 2 contient 5 protons et 6 électrons. Lequel respecte la neutralité électrique de l’atome ?",
    "answers": [
      "Le modèle 2 uniquement.",
      "Le modèle 1 uniquement.",
      "Les deux modèles.",
      "Aucun des deux modèles."
    ],
    "correct": 1,
    "explanation": "Seul le modèle 1 possède autant de protons que d’électrons : les charges se compensent.",
    "category": "Raisonner sur un modèle",
    "periodicTable": false,
    "models": true
  },
  {
    "question": "Un atome de néon possède 10 protons et 10 neutrons. Un élève affirme qu’il possède 20 électrons. Quelle réponse est correcte ?",
    "answers": [
      "Il a raison : le nombre d’électrons est égal au nombre de nucléons.",
      "L’atome possède 10 électrons, car il possède 10 protons.",
      "L’atome possède 20 électrons, car chaque neutron apporte un électron.",
      "L’atome ne possède aucun électron, car il est neutre."
    ],
    "correct": 1,
    "explanation": "Un atome neutre possède autant d’électrons que de protons. Les neutrons ne sont pas utilisés pour déterminer le nombre d’électrons.",
    "category": "Raisonner sur un modèle",
    "periodicTable": false,
    "models": false
  },
  {
    "question": "Un atome de magnésium possède 12 électrons et son noyau contient 24 nucléons. Quelle est la composition de son noyau ?",
    "answers": [
      "12 protons et 24 neutrons.",
      "24 protons et 12 neutrons.",
      "12 protons et 12 neutrons.",
      "12 électrons et 12 neutrons."
    ],
    "correct": 2,
    "explanation": "L’atome étant neutre, ses 12 électrons indiquent qu’il possède 12 protons. Il contient donc 24 − 12 = 12 neutrons.",
    "category": "Raisonner sur un modèle",
    "periodicTable": false,
    "models": false
  }
];

// Les notations sont rendues avec A au-dessus de Z, à gauche du symbole.
function formatNotation(text) {
  return text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
    .replace(/\[\[(\d+),(\d+),([A-Za-z]+)\]\]/g, (_, a, z, symbol) =>
      `<span class="nuclide" role="img" aria-label="${symbol}, A = ${a}, Z = ${z}"><span class="nuclide-numbers" aria-hidden="true"><span>${a}</span><span>${z}</span></span><span aria-hidden="true">${symbol}</span></span>`);
}

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
  questionEl.innerHTML = formatNotation(q.question);
  categoryEl.textContent = q.category;
  document.getElementById("periodicTable").hidden = !q.periodicTable;
  document.getElementById("atomModels").hidden = !q.models;
  answersEl.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.innerHTML = `${String.fromCharCode(65 + index)}. ${formatNotation(answer)}`;
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
    feedbackEl.innerHTML = `<strong>Réponse incorrecte.</strong><br>Bonne réponse : ${formatNotation(q.answers[q.correct])}<br>${q.explanation}`;
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
  if (percentage === 100) return "Excellent ! Tu connais la structure et la composition des atomes.";
  if (percentage >= 80) return "Très bon résultat ! Tes connaissances sont solides.";
  if (percentage >= 60) return "Bon travail. Quelques notions méritent encore une petite révision.";
  if (percentage >= 40) return "Plusieurs notions sont encore à revoir. Relis le cours puis recommence le QCM.";
  return "Revois la structure des atomes et le calcul de leur composition, puis essaie à nouveau.";
}

showQuestion();
