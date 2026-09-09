// Questions validées ; schémas extraits de systeme_informatique2.pdf.
const questions = [
  {
    "question": "Dans ce cours, quel autre mot désigne l’ordinateur utilisé par l’élève ?",
    "answers": [
      "Un modem.",
      "Un terminal.",
      "Un logiciel."
    ],
    "correct": 1,
    "explanation": "Les mots « ordinateur », « machine » et « terminal » désignent ici l’appareil sur lequel l’élève travaille.",
    "category": "Le réseau du collège"
  },
  {
    "question": "Qu’est-ce qu’un réseau informatique ?",
    "answers": [
      "Un ensemble d’ordinateurs reliés entre eux.",
      "Une liste de logiciels installés sur un ordinateur.",
      "Un ensemble d’ordinateurs sans aucune liaison."
    ],
    "correct": 0,
    "explanation": "Dans un réseau, les ordinateurs sont reliés pour pouvoir communiquer et échanger des informations.",
    "category": "Le réseau du collège"
  },
  {
    "question": "Au début du travail sur l’ordinateur, à quel réseau se connecte-t-on ?",
    "answers": [
      "Au réseau de la maison.",
      "Au réseau d’un autre établissement.",
      "Au réseau du collège."
    ],
    "correct": 2,
    "explanation": "La connexion au réseau du collège permet d’utiliser son compte utilisateur dans l’établissement.",
    "category": "Le réseau du collège"
  },
  {
    "question": "Quelles informations faut-il saisir pour se connecter à son compte ?",
    "answers": [
      "Le nom de l’ordinateur et celui de l’imprimante.",
      "Un nom d’utilisateur et un mot de passe.",
      "Le nom du navigateur et celui du collège."
    ],
    "correct": 1,
    "explanation": "Le nom d’utilisateur permet de reconnaître le compte. Le mot de passe permet d’en contrôler l’accès.",
    "category": "Le réseau du collège"
  },
  {
    "question": "Quel équipement gère les comptes utilisateurs des élèves ?",
    "answers": [
      "Le serveur du collège.",
      "L’imprimante.",
      "Le modem."
    ],
    "correct": 0,
    "explanation": "Le serveur gère les comptes des élèves. Chaque élève possède son propre compte sur le réseau du collège.",
    "category": "Le réseau du collège"
  },
  {
    "question": "Où se trouve l’espace de stockage prévu pour chaque élève ?",
    "answers": [
      "Dans le switch.",
      "Dans l’imprimante.",
      "Sur le serveur du collège."
    ],
    "correct": 2,
    "explanation": "Chaque élève dispose d’un espace sur le serveur pour y conserver ses fichiers.",
    "category": "Le réseau du collège"
  },
  {
    "question": "Quel nom désigne le réseau mondial ?",
    "answers": [
      "Le serveur.",
      "Internet.",
      "Le réseau du collège."
    ],
    "correct": 1,
    "explanation": "Internet est un réseau mondial. Le réseau du collège représente seulement le réseau de l’établissement.",
    "category": "Le réseau du collège"
  },
  {
    "question": "Quel est l’équipement repéré par un point d’interrogation ?",
    "answers": [
      "Le switch.",
      "Le serveur.",
      "Le modem."
    ],
    "correct": 0,
    "explanation": "Le switch est au centre des liaisons du réseau : les machines, le serveur et l’imprimante y sont reliés.",
    "category": "Lire le schéma",
    "image": "../../images/qcm-6e-informatique/reseau-question-08.png",
    "imageAlt": "Schéma du réseau du collège. Les traits représentent les liaisons entre les équipements. Une étiquette est remplacée par un point d’interrogation."
  },
  {
    "question": "Sur ce schéma, quel chemin suit l’information de la machine 1 vers l’imprimante ?",
    "answers": [
      "Machine 1 → modem → imprimante.",
      "Machine 1 → serveur → imprimante.",
      "Machine 1 → switch → imprimante."
    ],
    "correct": 2,
    "explanation": "La machine 1 et l’imprimante sont toutes les deux reliées au switch. L’information passe donc par lui.",
    "category": "Lire le schéma",
    "image": "../../images/qcm-6e-informatique/reseau.png",
    "imageAlt": "Schéma du réseau du collège. Les traits représentent les liaisons entre les équipements."
  },
  {
    "question": "Sur ce schéma, quel chemin relie la machine 5 au serveur ?",
    "answers": [
      "Machine 5 → imprimante → serveur.",
      "Machine 5 → switch → serveur.",
      "Machine 5 → modem → serveur."
    ],
    "correct": 1,
    "explanation": "La machine 5 est reliée au switch, qui est lui-même relié au serveur.",
    "category": "Lire le schéma",
    "image": "../../images/qcm-6e-informatique/reseau.png",
    "imageAlt": "Schéma du réseau du collège. Les traits représentent les liaisons entre les équipements."
  },
  {
    "question": "Sur ce schéma, quel chemin suit l’information de la machine 2 vers Internet ?",
    "answers": [
      "Machine 2 → switch → modem → Internet.",
      "Machine 2 → modem → switch → Internet.",
      "Machine 2 → switch → imprimante → Internet."
    ],
    "correct": 0,
    "explanation": "Pour rejoindre Internet, la liaison part de la machine 2, passe par le switch, puis par le modem.",
    "category": "Lire le schéma",
    "image": "../../images/qcm-6e-informatique/reseau.png",
    "imageAlt": "Schéma du réseau du collège. Les traits représentent les liaisons entre les équipements."
  },
  {
    "question": "Quel équipement manque entre le switch et Internet ?",
    "answers": [
      "L’imprimante.",
      "La machine 3.",
      "Le modem."
    ],
    "correct": 2,
    "explanation": "Le modem relie ici le réseau du collège au réseau mondial Internet.",
    "category": "Lire le schéma",
    "image": "../../images/qcm-6e-informatique/reseau-question-12.png",
    "imageAlt": "Schéma du réseau du collège. Les traits représentent les liaisons entre les équipements. Une étiquette est remplacée par un point d’interrogation."
  },
  {
    "question": "Quel autre mot peut-on utiliser pour désigner un logiciel ?",
    "answers": [
      "Un câble.",
      "Un programme.",
      "Un terminal."
    ],
    "correct": 1,
    "explanation": "Un logiciel est un programme qui permet à l’ordinateur d’effectuer une activité, comme écrire ou jouer.",
    "category": "Les logiciels et leurs usages"
  },
  {
    "question": "Tu veux rédiger un texte sur l’ordinateur. Quel type de logiciel choisis-tu ?",
    "answers": [
      "Un éditeur de textes.",
      "Un navigateur.",
      "Un jeu."
    ],
    "correct": 0,
    "explanation": "Un éditeur de textes permet d’écrire avec l’ordinateur, comme avec une machine à écrire.",
    "category": "Les logiciels et leurs usages"
  },
  {
    "question": "Quel groupe contient uniquement des éditeurs de textes ?",
    "answers": [
      "Edge, Firefox et Chrome.",
      "Minecraft et Fortnite.",
      "Word, LibreOffice Writer et OpenOffice Writer."
    ],
    "correct": 2,
    "explanation": "Word, LibreOffice Writer et OpenOffice Writer servent à rédiger des textes. Ils appartiennent à la même famille de logiciels.",
    "category": "Les logiciels et leurs usages"
  },
  {
    "question": "À quoi sert un navigateur ?",
    "answers": [
      "À gérer les comptes des élèves sur le serveur.",
      "À accéder à Internet.",
      "À relier les machines au switch."
    ],
    "correct": 1,
    "explanation": "Un navigateur est le logiciel que l’on utilise pour consulter des pages sur Internet.",
    "category": "Les logiciels et leurs usages"
  },
  {
    "question": "Quel logiciel peux-tu choisir pour consulter une page sur Internet ?",
    "answers": [
      "Firefox.",
      "Word.",
      "Minecraft."
    ],
    "correct": 0,
    "explanation": "Firefox est un navigateur : il permet de consulter des pages sur Internet.",
    "category": "Les logiciels et leurs usages"
  },
  {
    "question": "Quelle proposition classe correctement ces logiciels ?",
    "answers": [
      "Edge est un jeu ; Safari et Opera sont des éditeurs de textes.",
      "Edge est un éditeur de textes ; Safari et Opera sont des jeux.",
      "Edge, Safari et Opera sont des navigateurs."
    ],
    "correct": 2,
    "explanation": "Ces trois logiciels ont le même usage : accéder à Internet. Ce sont des navigateurs, comme Firefox et Chrome.",
    "category": "Les logiciels et leurs usages"
  },
  {
    "question": "À quelle famille de logiciels appartiennent Minecraft et Fortnite ?",
    "answers": [
      "Aux navigateurs.",
      "Aux jeux.",
      "Aux éditeurs de textes."
    ],
    "correct": 1,
    "explanation": "Minecraft et Fortnite sont des programmes conçus pour jouer sur l’ordinateur.",
    "category": "Les logiciels et leurs usages"
  },
  {
    "question": "Tu dois écrire un texte, puis consulter une page sur Internet. Quels logiciels peux-tu utiliser dans cet ordre ?",
    "answers": [
      "LibreOffice Writer, puis Chrome.",
      "Chrome, puis LibreOffice Writer.",
      "Minecraft, puis Fortnite."
    ],
    "correct": 0,
    "explanation": "LibreOffice Writer sert à rédiger le texte. Chrome est un navigateur qui permet ensuite de consulter la page sur Internet.",
    "category": "Les logiciels et leurs usages"
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
const imageEl = document.getElementById("schema");
const figureEl = document.getElementById("schema-figure");
const zoomLink = document.getElementById("schema-link");
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
  figureEl.hidden = !q.image;
  imageEl.hidden = !q.image;
  if (q.image) {
    imageEl.src = q.image;
    zoomLink.href = q.image;
    imageEl.alt = q.imageAlt;
  } else {
    imageEl.removeAttribute("src");
    zoomLink.removeAttribute("href");
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
  if (percentage === 100) return "Excellent ! Tu connais le réseau du collège et les logiciels.";
  if (percentage >= 80) return "Très bon résultat ! Tes connaissances sont solides.";
  if (percentage >= 60) return "Bon travail. Quelques notions méritent encore une petite révision.";
  if (percentage >= 40) return "Plusieurs notions sont encore à revoir. Relis le cours puis recommence le QCM.";
  return "Revois le réseau du collège et les logiciels, puis essaie à nouveau.";
}

showQuestion();
