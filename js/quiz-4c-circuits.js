// Questions validées pour les 4C SEGPA. Source : documents/4eme/cours1.pdf.
const questions = [
  {
    "question": "Quel objet est montré ?",
    "answers": [
      "Une lampe.",
      "Une pile.",
      "Un fil électrique."
    ],
    "correct": 1,
    "explanation": "C’est la pile du montage. Elle possède deux bornes, repérées + et −.",
    "category": "Observer et reconnaître",
    "images": [
      {
        "src": "../../images/qcm-4c/objet.png",
        "alt": "Objet du montage avec deux bornes + et −.",
        "label": ""
      }
    ]
  },
  {
    "question": "Combien de lampes vois-tu ?",
    "answers": [
      "Une lampe.",
      "Trois lampes.",
      "Deux lampes."
    ],
    "correct": 2,
    "explanation": "Le montage comporte deux lampes, appelées L1 et L2.",
    "category": "Observer et reconnaître",
    "images": [
      {
        "src": "../../images/qcm-4c/montage-a.png",
        "alt": "Montage du cours : L2 à gauche, L1 à droite, fils jaune, vert et rouge.",
        "label": ""
      }
    ]
  },
  {
    "question": "Quel fil relie directement les deux lampes ?",
    "answers": [
      "Le fil vert.",
      "Le fil rouge.",
      "Le fil jaune."
    ],
    "correct": 0,
    "explanation": "Le fil vert relie la lampe L1 à la lampe L2.",
    "category": "Observer et reconnaître",
    "images": [
      {
        "src": "../../images/qcm-4c/montage-a.png",
        "alt": "Montage du cours : L2 à gauche, L1 à droite, fils jaune, vert et rouge.",
        "label": ""
      }
    ]
  },
  {
    "question": "Que représente ce symbole ?",
    "answers": [
      "Une pile.",
      "Une lampe.",
      "Un fil électrique."
    ],
    "correct": 1,
    "explanation": "Le cercle avec une croix représente une lampe.",
    "category": "Observer et reconnaître",
    "images": [
      {
        "src": "../../images/qcm-4c/symbole-1.png",
        "alt": "Cercle contenant une croix.",
        "label": ""
      }
    ]
  },
  {
    "question": "Que représente ce symbole ?",
    "answers": [
      "Un fil électrique.",
      "Une lampe.",
      "Une pile."
    ],
    "correct": 2,
    "explanation": "Les deux traits de longueurs différentes représentent la pile.",
    "category": "Observer et reconnaître",
    "images": [
      {
        "src": "../../images/qcm-4c/symbole-2.png",
        "alt": "Deux traits de longueurs différentes avec le signe +.",
        "label": ""
      }
    ]
  },
  {
    "question": "Quel signe repère la borne positive de la pile ?",
    "answers": [
      "Le signe +.",
      "Le signe −.",
      "La lettre L."
    ],
    "correct": 0,
    "explanation": "Le signe + indique la borne positive de la pile.",
    "category": "Observer et reconnaître",
    "images": [
      {
        "src": "../../images/qcm-4c/objet.png",
        "alt": "Objet du montage avec deux bornes + et −.",
        "label": ""
      }
    ]
  },
  {
    "question": "Quel montage est représenté ?",
    "answers": [
      "Un montage en dérivation.",
      "Un montage en série."
    ],
    "correct": 1,
    "explanation": "Les deux lampes sont placées l’une à la suite de l’autre dans une seule boucle.",
    "category": "Les circuits électriques",
    "images": [
      {
        "src": "../../images/qcm-4c/schema-a.png",
        "alt": "Schéma du cours : deux cercles avec une croix sur le côté inférieur du tracé.",
        "label": ""
      }
    ]
  },
  {
    "question": "Combien de boucles vois-tu sur ce schéma ?",
    "answers": [
      "Une boucle.",
      "Deux boucles.",
      "Trois boucles."
    ],
    "correct": 0,
    "explanation": "On peut suivre une seule boucle qui passe par la pile et les deux lampes.",
    "category": "Les circuits électriques",
    "images": [
      {
        "src": "../../images/qcm-4c/schema-a.png",
        "alt": "Schéma du cours : deux cercles avec une croix sur le côté inférieur du tracé.",
        "label": ""
      }
    ]
  },
  {
    "question": "Comment brillent les lampes dans le montage en série du cours ?",
    "answers": [
      "Elles sont éteintes.",
      "Elles brillent fortement.",
      "Elles brillent faiblement."
    ],
    "correct": 2,
    "explanation": "Le cours indique un faible éclat des lampes pour ce montage en série.",
    "category": "Les circuits électriques",
    "images": [
      {
        "src": "../../images/qcm-4c/montage-a.png",
        "alt": "Montage du cours : L2 à gauche, L1 à droite, fils jaune, vert et rouge.",
        "label": ""
      }
    ]
  },
  {
    "question": "Dans ce montage, on dévisse L1. Que devient L2 ?",
    "answers": [
      "Elle reste allumée.",
      "Elle s’éteint.",
      "Elle brille plus fort."
    ],
    "correct": 1,
    "explanation": "Dans un circuit en série, dévisser une lampe éteint aussi l’autre.",
    "category": "Les circuits électriques",
    "images": [
      {
        "src": "../../images/qcm-4c/montage-a.png",
        "alt": "Montage du cours : L2 à gauche, L1 à droite, fils jaune, vert et rouge.",
        "label": ""
      }
    ]
  },
  {
    "question": "Quel schéma correspond à ce montage ?",
    "answers": [
      "Le schéma A.",
      "Le schéma B."
    ],
    "correct": 1,
    "explanation": "Le montage et le schéma B montrent les deux lampes dans une seule boucle.",
    "category": "Les circuits électriques",
    "images": [
      {
        "src": "../../images/qcm-4c/montage-a.png",
        "alt": "Montage du cours : L2 à gauche, L1 à droite, fils jaune, vert et rouge.",
        "label": "Montage à observer"
      },
      {
        "src": "../../images/qcm-4c/schema-b.png",
        "alt": "Schéma du cours : deux cercles avec une croix sur deux traits horizontaux distincts.",
        "label": "Schéma A"
      },
      {
        "src": "../../images/qcm-4c/schema-a.png",
        "alt": "Schéma du cours : deux cercles avec une croix sur le côté inférieur du tracé.",
        "label": "Schéma B"
      }
    ]
  },
  {
    "question": "Quel montage est représenté ici ?",
    "answers": [
      "Un montage en série.",
      "Un montage en dérivation."
    ],
    "correct": 1,
    "explanation": "Les deux lampes sont placées sur des branches différentes.",
    "category": "Les circuits électriques",
    "images": [
      {
        "src": "../../images/qcm-4c/schema-b.png",
        "alt": "Schéma du cours : deux cercles avec une croix sur deux traits horizontaux distincts.",
        "label": ""
      }
    ]
  },
  {
    "question": "Sur ce schéma, où sont placées les lampes ?",
    "answers": [
      "Sur deux branches différentes.",
      "L’une à la suite de l’autre sur la même branche.",
      "Toutes les deux à l’intérieur de la pile."
    ],
    "correct": 0,
    "explanation": "Chaque lampe est placée sur sa propre branche.",
    "category": "Les circuits électriques",
    "images": [
      {
        "src": "../../images/qcm-4c/schema-b.png",
        "alt": "Schéma du cours : deux cercles avec une croix sur deux traits horizontaux distincts.",
        "label": ""
      }
    ]
  },
  {
    "question": "Comment brillent les lampes dans le montage en dérivation du cours ?",
    "answers": [
      "Elles sont éteintes.",
      "Elles brillent faiblement.",
      "Elles brillent fortement."
    ],
    "correct": 2,
    "explanation": "Le cours indique un fort éclat des lampes pour ce montage en dérivation.",
    "category": "Les circuits électriques",
    "images": [
      {
        "src": "../../images/qcm-4c/montage-b.png",
        "alt": "Montage du cours avec une lampe en haut et une lampe en bas.",
        "label": ""
      }
    ]
  },
  {
    "question": "On dévisse la lampe du haut. Que devient celle du bas ?",
    "answers": [
      "Elle s’éteint.",
      "Elle reste allumée.",
      "Elle brille moins fort."
    ],
    "correct": 1,
    "explanation": "Dans ce montage en dérivation, l’autre lampe reste allumée.",
    "category": "Les circuits électriques",
    "images": [
      {
        "src": "../../images/qcm-4c/montage-b.png",
        "alt": "Montage du cours avec une lampe en haut et une lampe en bas.",
        "label": ""
      }
    ]
  },
  {
    "question": "Quel schéma correspond à cette photographie ?",
    "answers": [
      "Le schéma A.",
      "Le schéma B."
    ],
    "correct": 0,
    "explanation": "Le schéma A montre deux lampes sur des branches différentes, comme sur la photographie.",
    "category": "Les circuits électriques",
    "images": [
      {
        "src": "../../images/qcm-4c/montage-b.png",
        "alt": "Montage du cours avec une lampe en haut et une lampe en bas.",
        "label": "Montage à observer"
      },
      {
        "src": "../../images/qcm-4c/schema-b.png",
        "alt": "Schéma du cours : deux cercles avec une croix sur deux traits horizontaux distincts.",
        "label": "Schéma A"
      },
      {
        "src": "../../images/qcm-4c/schema-a.png",
        "alt": "Schéma du cours : deux cercles avec une croix sur le côté inférieur du tracé.",
        "label": "Schéma B"
      }
    ]
  },
  {
    "question": "On dévisse une lampe. L’autre s’éteint aussi. Quel montage du cours reconnais-tu ?",
    "answers": [
      "Le montage en dérivation.",
      "Le montage en série."
    ],
    "correct": 1,
    "explanation": "Dans le montage en série, dévisser une lampe éteint les deux lampes.",
    "category": "Les circuits électriques",
    "images": []
  },
  {
    "question": "Tu veux qu’une lampe reste allumée quand tu dévisses l’autre. Quel montage choisis-tu ?",
    "answers": [
      "Le montage A.",
      "Le montage B."
    ],
    "correct": 1,
    "explanation": "Le montage B est en dérivation. Une lampe peut rester allumée quand on dévisse l’autre.",
    "category": "Les circuits électriques",
    "images": [
      {
        "src": "../../images/qcm-4c/schema-a.png",
        "alt": "Schéma du cours : deux cercles avec une croix sur le côté inférieur du tracé.",
        "label": "Montage A"
      },
      {
        "src": "../../images/qcm-4c/schema-b.png",
        "alt": "Schéma du cours : deux cercles avec une croix sur deux traits horizontaux distincts.",
        "label": "Montage B"
      }
    ]
  },
  {
    "question": "Dans lequel des deux montages du cours les lampes brillent-elles le plus fortement ?",
    "answers": [
      "Dans le montage A.",
      "Dans le montage B.",
      "Elles ont le même éclat dans les deux montages."
    ],
    "correct": 1,
    "explanation": "Dans les exemples du cours, les lampes brillent plus fortement en dérivation.",
    "category": "Les circuits électriques",
    "images": [
      {
        "src": "../../images/qcm-4c/montage-a.png",
        "alt": "Montage du cours : L2 à gauche, L1 à droite, fils jaune, vert et rouge.",
        "label": "Montage A"
      },
      {
        "src": "../../images/qcm-4c/montage-b.png",
        "alt": "Montage du cours avec une lampe en haut et une lampe en bas.",
        "label": "Montage B"
      }
    ]
  },
  {
    "question": "Quelle phrase décrit correctement les deux schémas ?",
    "answers": [
      "A est en série et B est en dérivation.",
      "A est en dérivation et B est en série.",
      "Les deux montages sont en série."
    ],
    "correct": 0,
    "explanation": "Dans A, les lampes se suivent dans une boucle. Dans B, elles sont sur deux branches différentes.",
    "category": "Les circuits électriques",
    "images": [
      {
        "src": "../../images/qcm-4c/schema-a.png",
        "alt": "Schéma du cours : deux cercles avec une croix sur le côté inférieur du tracé.",
        "label": "Montage A"
      },
      {
        "src": "../../images/qcm-4c/schema-b.png",
        "alt": "Schéma du cours : deux cercles avec une croix sur deux traits horizontaux distincts.",
        "label": "Montage B"
      }
    ]
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
const imageEl = document.getElementById("illustrations");
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
  imageEl.replaceChildren();
  imageEl.hidden = !q.images.length;
  q.images.forEach((picture) => {
    const figure = document.createElement("figure");
    if (picture.label) {
      const caption = document.createElement("figcaption");
      caption.textContent = picture.label;
      figure.appendChild(caption);
    }
    const image = document.createElement("img");
    image.src = picture.src;
    image.alt = picture.alt;
    figure.appendChild(image);
    imageEl.appendChild(figure);
  });
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
  if (percentage === 100) return "Excellent ! Tu reconnais les circuits et le comportement des lampes.";
  if (percentage >= 80) return "Très bon résultat ! Tes connaissances sont solides.";
  if (percentage >= 60) return "Bon travail. Quelques notions méritent encore une petite révision.";
  if (percentage >= 40) return "Plusieurs notions sont encore à revoir. Relis le cours puis recommence le QCM.";
  return "Revois les montages du cours, puis essaie à nouveau.";
}

showQuestion();
