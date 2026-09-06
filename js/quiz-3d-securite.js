// Questions et explications validées pour les 3D SEGPA.
const questions = [
  {
    "question": "Que signifie ce pictogramme ?",
    "answers": [
      "Le produit peut exploser.",
      "Le produit est dangereux pour l’environnement.",
      "Le produit peut irriter la peau."
    ],
    "correct": 0,
    "explanation": "Le produit peut exploser dans certaines conditions. Il faut le tenir loin du feu et des étincelles.",
    "category": "Reconnaissance des pictogrammes",
    "image": "../../images/qcm-3d/pictogramme-01.png",
    "imageAlt": "Losange rouge contenant un objet qui éclate."
  },
  {
    "question": "Que signifie ce pictogramme ?",
    "answers": [
      "Le produit est sous pression.",
      "Le produit peut prendre feu.",
      "Le produit présente un risque d’infection."
    ],
    "correct": 1,
    "explanation": "Le produit est inflammable : il peut prendre feu. Une étincelle peut déclencher un incendie.",
    "category": "Reconnaissance des pictogrammes",
    "image": "../../images/qcm-3d/pictogramme-02.png",
    "imageAlt": "Losange rouge contenant une flamme."
  },
  {
    "question": "Que signifie ce pictogramme ?",
    "answers": [
      "Le produit peut exploser.",
      "Le produit est sous pression.",
      "Le produit peut attaquer la peau et les matériaux."
    ],
    "correct": 2,
    "explanation": "Un produit corrosif peut ronger les matériaux et la peau. Il faut éviter tout contact avec le corps.",
    "category": "Reconnaissance des pictogrammes",
    "image": "../../images/qcm-3d/pictogramme-03.png",
    "imageAlt": "Losange rouge contenant deux tubes versant un liquide sur une main et une surface."
  },
  {
    "question": "Que signifie ce pictogramme ?",
    "answers": [
      "Le produit est toxique.",
      "Le produit est inflammable.",
      "Le produit est sous pression."
    ],
    "correct": 0,
    "explanation": "Le produit peut rendre malade si on le respire, si on l’avale ou s’il touche la peau.",
    "category": "Reconnaissance des pictogrammes",
    "image": "../../images/qcm-3d/pictogramme-04.png",
    "imageAlt": "Losange rouge contenant une tête de mort et deux os croisés."
  },
  {
    "question": "Que signifie ce pictogramme ?",
    "answers": [
      "Le produit peut exploser.",
      "Le produit est dangereux pour l’environnement.",
      "Le produit peut provoquer une infection."
    ],
    "correct": 1,
    "explanation": "Ce produit peut polluer et mettre en danger les êtres vivants dans l’environnement.",
    "category": "Reconnaissance des pictogrammes",
    "image": "../../images/qcm-3d/pictogramme-05.png",
    "imageAlt": "Losange rouge contenant un arbre sans feuilles et un poisson sur le dos."
  },
  {
    "question": "Que signifie ce pictogramme ?",
    "answers": [
      "Le produit est sous pression.",
      "Le produit peut prendre feu.",
      "Il y a un risque d’infection."
    ],
    "correct": 2,
    "explanation": "Du sang, de la salive ou des cultures de bactéries peuvent contenir des microbes qui provoquent une infection.",
    "category": "Reconnaissance des pictogrammes",
    "image": "../../images/qcm-3d/pictogramme-06.png",
    "imageAlt": "Symbole noir composé de trois formes courbes autour d’un cercle central."
  },
  {
    "question": "Un produit nocif touche la peau. Quel effet peut-il avoir ?",
    "answers": [
      "Il peut irriter la peau.",
      "Il protège la peau.",
      "Il nettoie la peau sans risque."
    ],
    "correct": 0,
    "explanation": "Un produit nocif peut irriter la peau ou provoquer des allergies. Il faut éviter de le toucher.",
    "category": "Compréhension du danger"
  },
  {
    "question": "Un produit toxique peut-il être dangereux quand on le respire ?",
    "answers": [
      "Non, il est dangereux seulement si on l’avale.",
      "Oui, le respirer peut être dangereux.",
      "Non, il est dangereux seulement si on le touche."
    ],
    "correct": 1,
    "explanation": "Le produit peut entrer dans le corps quand on le respire et rendre malade. Il n’est pas nécessaire de l’avaler pour être en danger.",
    "category": "Compréhension du danger"
  },
  {
    "question": "Un produit peut perturber le fonctionnement du corps. Quel danger est décrit ?",
    "answers": [
      "Un danger pour l’environnement.",
      "Un danger d’incendie.",
      "Un danger pour la santé."
    ],
    "correct": 2,
    "explanation": "Certains produits peuvent empêcher le corps de fonctionner correctement. Ils peuvent donc avoir des effets graves sur la santé.",
    "category": "Compréhension du danger"
  },
  {
    "question": "Dans le tableau, quel danger est associé à une bouteille de gaz ?",
    "answers": [
      "Le gaz est sous pression.",
      "Le gaz contient des bactéries.",
      "Le gaz attaque les matériaux."
    ],
    "correct": 0,
    "explanation": "Le gaz est comprimé dans la bouteille : on dit qu’il est « sous pression ».",
    "category": "Compréhension du danger"
  },
  {
    "question": "Pourquoi certaines cultures de bactéries présentent-elles un risque biologique ?",
    "answers": [
      "Elles peuvent produire des étincelles.",
      "Elles peuvent provoquer une infection.",
      "Elles contiennent du gaz sous pression."
    ],
    "correct": 1,
    "explanation": "Certaines bactéries peuvent infecter le corps et rendre malade. Le danger vient ici d’êtres vivants microscopiques.",
    "category": "Compréhension du danger"
  },
  {
    "question": "Près de pétards, quelle consigne faut-il respecter ?",
    "answers": [
      "Éviter seulement le contact avec la peau.",
      "Aérer suffit pour éviter le danger.",
      "Éviter le feu et les étincelles."
    ],
    "correct": 2,
    "explanation": "Le feu ou une étincelle peut déclencher l’explosion d’un pétard. Les éloigner permet d’éviter ce déclenchement.",
    "category": "Comportement à adopter"
  },
  {
    "question": "Un poste à souder produit des étincelles. Peut-on l’utiliser près de l’essence ?",
    "answers": [
      "Non, il faut l’éloigner de l’essence.",
      "Oui, si on porte des gants.",
      "Oui, si on porte des lunettes."
    ],
    "correct": 0,
    "explanation": "L’essence peut prendre feu à cause des étincelles. Les gants et les lunettes n’empêchent pas un incendie de démarrer.",
    "category": "Comportement à adopter"
  },
  {
    "question": "Que faire d’un reste de produit polluant pour traiter le bois ?",
    "answers": [
      "Le verser dans les toilettes.",
      "L’apporter dans une déchetterie.",
      "Le verser dans une rivière."
    ],
    "correct": 1,
    "explanation": "Ce produit peut polluer l’environnement. L’apporter en déchetterie permet de le faire prendre en charge sans le rejeter dans l’eau.",
    "category": "Comportement à adopter"
  },
  {
    "question": "Une zone vient d’être traitée avec un produit corrosif. Que faut-il faire ?",
    "answers": [
      "Autoriser le passage si les personnes marchent vite.",
      "Autoriser le passage si les personnes retiennent leur respiration.",
      "Empêcher l’accès à cette zone."
    ],
    "correct": 2,
    "explanation": "Le produit corrosif peut attaquer la peau. Interdire l’accès évite que des personnes entrent en contact avec lui.",
    "category": "Comportement à adopter"
  },
  {
    "question": "Quelle consigne faut-il respecter avec les pesticides dangereux cités dans le tableau ?",
    "answers": [
      "Éviter tout contact avec le produit.",
      "Toucher le produit pour le reconnaître.",
      "Sentir le produit de près pour le reconnaître."
    ],
    "correct": 0,
    "explanation": "Ces produits peuvent nuire à la santé. Les toucher ou les respirer peut exposer le corps au danger.",
    "category": "Comportement à adopter"
  },
  {
    "question": "Quels équipements sont indiqués pour se protéger d’un produit corrosif ?",
    "answers": [
      "Un masque seul.",
      "Des gants et des lunettes de protection.",
      "Des lunettes de protection seules."
    ],
    "correct": 1,
    "explanation": "Un produit corrosif peut ronger la peau et abîmer les yeux. Les gants protègent les mains et les lunettes protègent les yeux des projections.",
    "category": "Moyens de protection"
  },
  {
    "question": "Quels équipements sont indiqués pour les aérosols nocifs du tableau ?",
    "answers": [
      "Des gants seulement.",
      "Des lunettes seulement.",
      "Un masque, des gants et des lunettes."
    ],
    "correct": 2,
    "explanation": "Ces produits peuvent irriter la peau, les yeux et les voies respiratoires. Les gants, les lunettes et le masque protègent ces différentes parties du corps.",
    "category": "Moyens de protection"
  },
  {
    "question": "En plus des équipements, que faut-il faire dans un local où l’on utilise ces aérosols nocifs ?",
    "answers": [
      "Bien aérer le local.",
      "Fermer toutes les ouvertures.",
      "Empêcher l’air de circuler."
    ],
    "correct": 0,
    "explanation": "Aérer renouvelle l’air et aide à évacuer les produits nocifs présents dans l’air. Cela limite ce que l’on risque de respirer.",
    "category": "Moyens de protection"
  },
  {
    "question": "Face à un risque biologique, quel geste faut-il faire avant de manger ?",
    "answers": [
      "Essuyer ses mains sur ses vêtements.",
      "Se laver les mains.",
      "Rincer seulement ses gants."
    ],
    "correct": 1,
    "explanation": "Les mains peuvent transporter des microbes. Les laver avant de manger limite le risque de les porter à la bouche et de provoquer une infection.",
    "category": "Moyens de protection"
  }
];

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

function showQuestion() {
  answered = false;
  feedbackEl.classList.remove("show");
  feedbackEl.innerHTML = "";
  nextBtn.style.display = "none";

  const q = questions[currentQuestion];
  progressEl.textContent = `Question ${currentQuestion + 1} sur ${questions.length} — Score : ${score}`;
  questionEl.textContent = q.question;
  categoryEl.textContent = q.category;
  imageEl.hidden = !q.image;
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

  const q = questions[currentQuestion];
  const buttons = [...document.querySelectorAll(".answer-btn")];

  buttons.forEach((button, i) => {
    button.disabled = true;
    if (i === q.correct) button.classList.add("correct");
  });

  if (index === q.correct) {
    score++;
    feedbackEl.innerHTML = `<strong>Bonne réponse !</strong><br>${q.explanation}`;
  } else {
    selectedButton.classList.add("wrong");
    feedbackEl.innerHTML = `<strong>Réponse incorrecte.</strong><br>Bonne réponse : ${q.answers[q.correct]}<br>${q.explanation}`;
  }

  feedbackEl.classList.add("show");
  nextBtn.textContent = currentQuestion === questions.length - 1 ? "Voir mon résultat" : "Question suivante";
  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  if (!answered) return;
  currentQuestion++;
  if (currentQuestion < questions.length) showQuestion();
  else showResult();
});

function showResult() {
  const percentage = Math.round((score / questions.length) * 100);
  quizEl.innerHTML = `
    <div class="result">
      <span class="section-kicker">Résultat</span>
      <h2 id="result-title" tabindex="-1">QCM terminé</h2>
      <div class="result-score">${score} / ${questions.length}</div>
      <p>Tu as obtenu <strong>${percentage} %</strong> de bonnes réponses.</p>
      <p>${getMessage(percentage)}</p>
      <button class="btn btn-secondary" onclick="location.reload()">Recommencer le QCM</button>
    </div>`;
  document.getElementById("result-title").focus();
}

function getMessage(percentage) {
  if (percentage === 100) return "Excellent ! Tu connais les dangers et les gestes de protection.";
  if (percentage >= 80) return "Très bon résultat ! Tes connaissances sont solides.";
  if (percentage >= 60) return "Bon travail. Quelques notions méritent encore une petite révision.";
  if (percentage >= 40) return "Plusieurs notions sont encore à revoir. Relis le cours puis recommence le QCM.";
  return "Revois les pictogrammes et les gestes de protection, puis essaie à nouveau.";
}

showQuestion();
