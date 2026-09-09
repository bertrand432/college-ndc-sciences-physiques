// 30 questions validées à partir de Rappels_5EME.pdf ; Jacques pèse 50 kg.
const questions = [
  {
    "question": "Que permet de détecter le sulfate de cuivre anhydre ?",
    "answers": [
      "La présence de sel.",
      "La présence d’eau.",
      "La présence de dioxyde de carbone."
    ],
    "correct": 1,
    "explanation": "Le sulfate de cuivre anhydre permet de savoir si une substance contient de l’eau.",
    "category": "L’eau et les tests"
  },
  {
    "question": "Que devient le sulfate de cuivre anhydre blanc au contact de l’eau ?",
    "answers": [
      "Il devient bleu.",
      "Il devient rouge.",
      "Il reste blanc."
    ],
    "correct": 0,
    "explanation": "En présence d’eau, le sulfate de cuivre anhydre change de couleur : il passe du blanc au bleu.",
    "category": "L’eau et les tests"
  },
  {
    "question": "Deux bouteilles contiennent de l’eau et du cyclohexane. Quel test permet de les distinguer ?",
    "answers": [
      "Comparer uniquement leur couleur.",
      "Vérifier si les deux liquides coulent.",
      "Déposer une goutte de chaque liquide sur du sulfate de cuivre anhydre."
    ],
    "correct": 2,
    "explanation": "L’eau fait bleuir le sulfate de cuivre anhydre. Le cyclohexane sans eau ne provoque pas ce changement de couleur.",
    "category": "L’eau et les tests"
  },
  {
    "question": "L’eau représente 70 % de la masse de Jacques, qui pèse 50 kg. Quelle masse d’eau son corps contient-il ?",
    "answers": [
      "15 kg.",
      "35 kg.",
      "70 kg."
    ],
    "correct": 1,
    "explanation": "On calcule 70 % de 50 kg : 50 × 70 ÷ 100 = 35 kg d’eau.",
    "category": "L’eau et les tests"
  },
  {
    "question": "Un rectangle de 10 cases identiques représente la masse de Jacques. Combien de cases faut-il colorier pour représenter les 70 % d’eau ?",
    "answers": [
      "7 cases.",
      "3 cases.",
      "10 cases."
    ],
    "correct": 0,
    "explanation": "70 % correspond à 70 sur 100, donc à 7 sur 10. Il faut colorier 7 cases.",
    "category": "L’eau et les tests",
    "image": "../../images/qcm-4e-rappels/dix-cases.svg",
    "imageAlt": "Un rectangle partagé en dix cases identiques, toutes blanches."
  },
  {
    "question": "Une eau de mer limpide contient du sel dissous. Comment décrit-on ce mélange ?",
    "answers": [
      "C’est un mélange hétérogène.",
      "C’est un corps pur.",
      "C’est un mélange homogène."
    ],
    "correct": 2,
    "explanation": "Le sel est présent, mais on ne le distingue pas à l’œil nu dans l’eau. Le mélange est homogène.",
    "category": "Mélanges et séparation"
  },
  {
    "question": "Un jus d’orange contient des morceaux de pulpe visibles. Comment décrit-on ce mélange ?",
    "answers": [
      "C’est un corps pur.",
      "C’est un mélange hétérogène.",
      "C’est un mélange homogène."
    ],
    "correct": 1,
    "explanation": "On distingue la pulpe et le liquide à l’œil nu. Le mélange est donc hétérogène.",
    "category": "Mélanges et séparation"
  },
  {
    "question": "Quelle est la différence entre un corps pur et un mélange ?",
    "answers": [
      "Un corps pur contient une seule espèce chimique ; un mélange en contient plusieurs.",
      "Un corps pur est toujours transparent ; un mélange est toujours coloré.",
      "Un corps pur est toujours solide ; un mélange est toujours liquide."
    ],
    "correct": 0,
    "explanation": "La différence dépend de la composition. La couleur et l’état physique ne permettent pas, à eux seuls, de reconnaître un corps pur.",
    "category": "Mélanges et séparation"
  },
  {
    "question": "On laisse reposer de l’eau boueuse. La boue se dépose au fond. Quelle technique utilise-t-on ?",
    "answers": [
      "La distillation.",
      "La filtration.",
      "La décantation."
    ],
    "correct": 2,
    "explanation": "Pendant la décantation, les particules en suspension se déposent au fond. On peut ensuite récupérer le liquide situé au-dessus.",
    "category": "Mélanges et séparation"
  },
  {
    "question": "On verse de l’eau contenant des particules solides dans un filtre qui les retient. Quelle technique utilise-t-on ?",
    "answers": [
      "La décantation.",
      "La filtration.",
      "La dissolution."
    ],
    "correct": 1,
    "explanation": "Le filtre laisse passer le liquide et retient les particules solides suffisamment grosses.",
    "category": "Mélanges et séparation"
  },
  {
    "question": "Quelle technique permet de récupérer de l’eau liquide quasiment pure à partir d’eau salée ?",
    "answers": [
      "La distillation.",
      "La décantation.",
      "La filtration avec un filtre en papier."
    ],
    "correct": 0,
    "explanation": "On vaporise l’eau, puis on refroidit la vapeur pour récupérer de l’eau liquide. Le sel reste dans le récipient de départ.",
    "category": "Mélanges et séparation"
  },
  {
    "question": "Après évaporation complète d’une eau minérale, des traces blanches restent dans le récipient. Que montrent-elles ?",
    "answers": [
      "L’eau s’est transformée en une nouvelle substance blanche.",
      "L’eau minérale était un corps pur.",
      "L’eau contenait des sels minéraux dissous."
    ],
    "correct": 2,
    "explanation": "L’eau s’évapore, mais les sels minéraux restent dans le récipient. L’eau minérale est donc un mélange.",
    "category": "Mélanges et séparation"
  },
  {
    "question": "D’où proviennent les sels minéraux présents dans la transpiration ou les larmes ?",
    "answers": [
      "Ils sont fabriqués par l’évaporation de l’eau.",
      "Ils proviennent notamment des aliments et des boissons.",
      "Ils apparaissent quand les liquides touchent l’air."
    ],
    "correct": 1,
    "explanation": "Les aliments et les boissons apportent des sels minéraux à l’organisme. Une partie se retrouve dans les liquides du corps.",
    "category": "Mélanges et séparation"
  },
  {
    "question": "Dans un récipient fermé, un glaçon de 50 g fond entièrement. Quelle est la masse de l’eau obtenue ?",
    "answers": [
      "50 g.",
      "Moins de 50 g.",
      "Plus de 50 g."
    ],
    "correct": 0,
    "explanation": "La masse se conserve lors d’un changement d’état. La glace devient liquide, mais la quantité de matière reste la même.",
    "category": "États physiques, solutions et gaz"
  },
  {
    "question": "Lors d’un changement d’état, que peut-on dire du volume d’une substance ?",
    "answers": [
      "Il reste toujours identique.",
      "Il diminue toujours.",
      "Il peut changer."
    ],
    "correct": 2,
    "explanation": "Le volume ne se conserve pas forcément lors d’un changement d’état. Par exemple, l’eau occupe davantage de place lorsqu’elle gèle.",
    "category": "États physiques, solutions et gaz"
  },
  {
    "question": "Dans les conditions de l’exercice, on peut dissoudre au maximum 320 g de sel dans 1 L d’eau. Que se passe-t-il si l’on ajoute davantage de sel ?",
    "answers": [
      "Tout le sel se dissout, quelle que soit la quantité ajoutée.",
      "Une partie du sel reste non dissoute.",
      "Le sel supplémentaire se transforme en eau."
    ],
    "correct": 1,
    "explanation": "Quand la quantité maximale est atteinte, la solution est saturée. Le sel ajouté en plus ne peut plus se dissoudre dans ces conditions.",
    "category": "États physiques, solutions et gaz"
  },
  {
    "question": "Quel résultat met en évidence la présence de dioxyde de carbone, aussi appelé gaz carbonique ?",
    "answers": [
      "L’eau de chaux se trouble.",
      "Le sulfate de cuivre anhydre devient bleu.",
      "Le sel se dissout dans l’eau."
    ],
    "correct": 0,
    "explanation": "Le dioxyde de carbone réagit avec l’eau de chaux et la rend trouble.",
    "category": "États physiques, solutions et gaz"
  },
  {
    "question": "À la pression atmosphérique normale, quelle observation attend-on lorsqu’on fait bouillir de l’eau pure ?",
    "answers": [
      "Sa température reste à 0 °C.",
      "Sa température augmente continuellement pendant toute l’ébullition.",
      "Sa température reste proche de 100 °C pendant l’ébullition."
    ],
    "correct": 2,
    "explanation": "À cette pression, l’eau pure bout à environ 100 °C. Pendant l’ébullition, l’énergie reçue sert à transformer l’eau liquide en vapeur.",
    "category": "États physiques, solutions et gaz"
  },
  {
    "question": "Deux lampes sont montées en série. Que se passe-t-il si l’on dévisse une lampe ?",
    "answers": [
      "L’autre lampe reste allumée.",
      "Les deux lampes s’éteignent.",
      "L’autre lampe brille davantage."
    ],
    "correct": 1,
    "explanation": "Dévisser une lampe ouvre l’unique boucle du circuit. Le courant ne circule plus dans aucune des deux lampes.",
    "category": "Les circuits électriques",
    "image": "../../images/qcm-4e-rappels/serie.svg",
    "imageAlt": "Un générateur G et deux lampes L1 et L2 reliés dans une seule boucle fermée."
  },
  {
    "question": "Dans un circuit en série, un fil relie directement les deux bornes d’une lampe. Que se passe-t-il pour cette lampe ?",
    "answers": [
      "Elle s’éteint.",
      "Elle brille davantage.",
      "Son fonctionnement ne change pas."
    ],
    "correct": 0,
    "explanation": "La lampe est court-circuitée. Le courant passe par le fil qui la contourne, et elle ne s’allume plus.",
    "category": "Les circuits électriques",
    "image": "../../images/qcm-4e-rappels/serie-fil.svg",
    "imageAlt": "Un générateur et deux lampes en série. Un fil rouge supplémentaire relie directement les deux bornes de L1."
  },
  {
    "question": "Deux lampes sont montées en dérivation. Que se passe-t-il si l’on dévisse une lampe ?",
    "answers": [
      "Les deux lampes s’éteignent.",
      "Le générateur est automatiquement court-circuité.",
      "L’autre lampe reste allumée."
    ],
    "correct": 2,
    "explanation": "Chaque lampe appartient à une branche différente. La branche de l’autre lampe reste fermée : le courant peut encore y circuler.",
    "category": "Les circuits électriques",
    "image": "../../images/qcm-4e-rappels/derivation.svg",
    "imageAlt": "Un générateur G et deux branches contenant chacune une lampe, L1 ou L2."
  },
  {
    "question": "Pourquoi est-il dangereux de court-circuiter une lampe directement branchée en dérivation aux bornes du générateur ?",
    "answers": [
      "Cela transforme le montage en circuit en série.",
      "Cela relie directement les bornes du générateur par un fil.",
      "Cela coupe forcément le courant dans tous les fils."
    ],
    "correct": 1,
    "explanation": "Le fil court-circuite aussi le générateur. Un courant très important peut alors circuler et provoquer un échauffement.",
    "category": "Les circuits électriques",
    "image": "../../images/qcm-4e-rappels/derivation-fil.svg",
    "imageAlt": "Deux lampes en dérivation aux bornes du générateur. Un fil rouge supplémentaire relie directement les bornes de L1."
  },
  {
    "question": "Parmi ces objets, lequel est une source primaire de lumière ?",
    "answers": [
      "Le Soleil.",
      "La Lune.",
      "Une feuille blanche éclairée."
    ],
    "correct": 0,
    "explanation": "Une source primaire produit la lumière qu’elle émet. Le Soleil produit sa propre lumière.",
    "category": "Lumière et astronomie"
  },
  {
    "question": "Pourquoi peut-on voir la Lune lorsqu’elle est éclairée par le Soleil ?",
    "answers": [
      "Elle produit sa propre lumière comme le Soleil.",
      "Elle transforme la lumière en électricité.",
      "Elle renvoie une partie de la lumière qu’elle reçoit."
    ],
    "correct": 2,
    "explanation": "La Lune est un objet diffusant : elle renvoie dans plusieurs directions une partie de la lumière du Soleil.",
    "category": "Lumière et astronomie"
  },
  {
    "question": "Comment la lumière se propage-t-elle dans un milieu transparent et homogène ?",
    "answers": [
      "En suivant toujours une courbe.",
      "En ligne droite.",
      "En tournant autour des objets."
    ],
    "correct": 1,
    "explanation": "Dans ces conditions, la propagation de la lumière est rectiligne. On représente son trajet par une ligne droite.",
    "category": "Lumière et astronomie"
  },
  {
    "question": "Quel mouvement la Terre effectue-t-elle autour du Soleil ?",
    "answers": [
      "Un mouvement de révolution.",
      "Un changement d’état.",
      "Une rotation autour de la Lune."
    ],
    "correct": 0,
    "explanation": "La Terre parcourt une orbite autour du Soleil. Ce mouvement s’appelle une révolution.",
    "category": "Lumière et astronomie"
  },
  {
    "question": "Autour de quel astre la Lune effectue-t-elle sa révolution en tant que satellite ?",
    "answers": [
      "Autour de Mars.",
      "Autour de Vénus.",
      "Autour de la Terre."
    ],
    "correct": 2,
    "explanation": "La Lune est le satellite naturel de la Terre. Elle se déplace autour de notre planète.",
    "category": "Lumière et astronomie"
  },
  {
    "question": "Quel mouvement explique l’alternance du jour et de la nuit sur Terre ?",
    "answers": [
      "La révolution de la Lune autour de la Terre.",
      "La rotation de la Terre sur elle-même.",
      "La révolution de la Terre autour du Soleil."
    ],
    "correct": 1,
    "explanation": "En tournant sur elle-même, la Terre présente successivement ses différentes régions au Soleil. Une région éclairée est dans le jour ; une région dans l’ombre est dans la nuit.",
    "category": "Lumière et astronomie"
  },
  {
    "question": "Dans une démarche expérimentale, qu’est-ce qu’une hypothèse ?",
    "answers": [
      "Une réponse possible que l’on doit tester.",
      "Une conclusion déjà prouvée.",
      "La liste du matériel utilisé."
    ],
    "correct": 0,
    "explanation": "Une hypothèse est une proposition pour répondre à une question. L’expérience permet de vérifier si les résultats sont compatibles avec cette proposition.",
    "category": "La démarche expérimentale"
  },
  {
    "question": "Après avoir réalisé une expérience et noté les résultats, que faut-il faire ?",
    "answers": [
      "Modifier les résultats pour qu’ils correspondent à l’hypothèse.",
      "Considérer que l’hypothèse est forcément correcte.",
      "Analyser les résultats et formuler une conclusion."
    ],
    "correct": 2,
    "explanation": "La conclusion s’appuie sur les résultats observés. Elle permet de répondre à la question de départ et de dire si l’hypothèse est soutenue ou non.",
    "category": "La démarche expérimentale"
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
  if (percentage === 100) return "Excellent ! Tu maîtrises ces rappels de physique-chimie.";
  if (percentage >= 80) return "Très bon résultat ! Tes connaissances sont solides.";
  if (percentage >= 60) return "Bon travail. Quelques notions méritent encore une petite révision.";
  if (percentage >= 40) return "Plusieurs notions sont encore à revoir. Relis le cours puis recommence le QCM.";
  return "Revois les rappels de physique-chimie, puis essaie à nouveau.";
}

showQuestion();
