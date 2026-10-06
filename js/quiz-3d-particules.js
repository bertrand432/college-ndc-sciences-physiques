// Questions validées ; source : modele_particulaire.pdf.
const questions = [
  {
    "question": "Combien de particules sont représentées dans ce récipient ?",
    "answers": [
      "3 particules.",
      "6 particules.",
      "12 particules."
    ],
    "correct": 1,
    "explanation": "Chaque rond représente une particule. On compte donc 6 particules.",
    "visual": "count",
    "category": "Le modèle particulaire"
  },
  {
    "question": "Quel dessin montre les particules les plus rapprochées ?",
    "answers": [
      "Le dessin 1.",
      "Les deux dessins montrent le même espacement.",
      "Le dessin 2."
    ],
    "correct": 2,
    "explanation": "Dans le dessin 2, les particules sont regroupées et très proches.",
    "visual": "spacing",
    "category": "Le modèle particulaire"
  },
  {
    "question": "Un élève veut représenter un solide. Que doit-il améliorer dans son dessin ?",
    "answers": [
      "Ranger les particules régulièrement, en les gardant proches.",
      "Espacer les particules dans tout le récipient.",
      "Supprimer toutes les particules."
    ],
    "correct": 0,
    "explanation": "Pour représenter le solide du cours, les particules doivent être proches et ordonnées.",
    "visual": "liquid",
    "category": "Le modèle particulaire"
  },
  {
    "question": "Quel dessin représente correctement un gaz dans un récipient fermé ?",
    "answers": [
      "Le dessin 1.",
      "Le dessin 2.",
      "Les deux dessins."
    ],
    "correct": 1,
    "explanation": "Les particules d’un gaz sont dispersées dans tout le volume disponible.",
    "visual": "gas-choice",
    "category": "Le modèle particulaire"
  },
  {
    "question": "On comprime un gaz. Quel dessin faut-il réaliser après la compression ?",
    "answers": [
      "Des particules plus petites, avec les mêmes espaces entre elles.",
      "Des particules rangées et collées les unes aux autres.",
      "Des particules de même taille, mais plus rapprochées."
    ],
    "correct": 2,
    "explanation": "On réduit les espaces entre les particules. On ne représente pas la compression en réduisant leur taille.",
    "visual": "compress-choices",
    "category": "Le modèle particulaire"
  },
  {
    "question": "Un gaz dispose maintenant de plus de place. Comment compléter le dessin ?",
    "answers": [
      "Répartir les particules dans tout le nouvel espace.",
      "Garder toutes les particules dans un seul coin.",
      "Aligner les particules au fond."
    ],
    "correct": 0,
    "explanation": "Les particules du gaz se répartissent dans tout le volume disponible.",
    "visual": "expand-empty",
    "category": "Le modèle particulaire"
  },
  {
    "question": "Pourquoi ne peut-on pas comprimer un liquide comme un gaz ?",
    "answers": [
      "Le liquide ne contient aucune particule.",
      "Les particules du liquide sont déjà très proches.",
      "Les particules du liquide sont plus éloignées que celles du gaz."
    ],
    "correct": 1,
    "explanation": "Le liquide est compact : ses particules sont déjà proches les unes des autres.",
    "visual": "liquid-gas",
    "category": "Le modèle particulaire"
  },
  {
    "question": "Léa décrit ce dessin : « Les particules sont proches et rangées. » Quel mot doit-elle corriger ?",
    "answers": [
      "Remplacer « proches » par « éloignées ».",
      "Remplacer « particules » par « récipients ».",
      "Remplacer « rangées » par « désordonnées »."
    ],
    "correct": 2,
    "explanation": "Les particules sont proches, mais elles ne forment pas de rangées régulières.",
    "visual": "liquid",
    "category": "Le modèle particulaire"
  },
  {
    "question": "Quelle différence voit-on entre ces deux modèles ?",
    "answers": [
      "Les particules sont rangées dans le solide, mais pas dans le liquide.",
      "Le liquide ne contient pas de particules.",
      "Les particules du solide sont très éloignées."
    ],
    "correct": 0,
    "explanation": "Les deux états sont compacts. Dans le modèle du solide, les particules sont aussi ordonnées.",
    "visual": "solid-liquid",
    "category": "Le modèle particulaire"
  },
  {
    "question": "Ce dessin contient uniquement des triangles. Peut-il représenter un corps pur ?",
    "answers": [
      "Non, il faut obligatoirement utiliser des ronds.",
      "Oui, car il contient une seule sorte de particules.",
      "Non, car il contient plusieurs particules."
    ],
    "correct": 1,
    "explanation": "Le symbole choisi n’a pas d’importance. Un corps pur contient une seule sorte de particules.",
    "visual": "triangles",
    "category": "Le modèle particulaire"
  },
  {
    "question": "Les ronds représentent l’eau et les triangles le sucre. Combien de sortes de particules voit-on ?",
    "answers": [
      "Une seule sorte.",
      "Dix sortes.",
      "Deux sortes."
    ],
    "correct": 2,
    "explanation": "Il y a deux sortes de particules : celles de l’eau et celles du sucre.",
    "visual": "water-sugar",
    "category": "Le modèle particulaire"
  },
  {
    "question": "Quel ajout permet de transformer ce modèle de corps pur en modèle de mélange ?",
    "answers": [
      "Ajouter des triangles représentant une autre sorte de particules.",
      "Ajouter seulement des ronds identiques.",
      "Agrandir le dessin du récipient."
    ],
    "correct": 0,
    "explanation": "Pour représenter un mélange, il faut plusieurs sortes de particules.",
    "visual": "pure",
    "category": "Le modèle particulaire"
  },
  {
    "question": "Un élève ajoute des particules identiques dans un corps pur. Obtient-il un mélange ?",
    "answers": [
      "Oui, car il y a davantage de particules.",
      "Non, car il y a toujours une seule sorte de particules.",
      "Oui, car les particules sont plus proches."
    ],
    "correct": 1,
    "explanation": "Le nombre de particules augmente, mais elles sont toutes de la même sorte : cela reste un corps pur.",
    "visual": "add-same",
    "category": "Le modèle particulaire"
  },
  {
    "question": "Dans un gaz, comment les particules sont-elles placées ?",
    "answers": [
      "Très proches et bien rangées.",
      "Éloignées et désordonnées.",
      "Très proches et désordonnées."
    ],
    "correct": 1,
    "explanation": "L’état gazeux est dispersé et désordonné : les particules sont espacées et ne sont pas rangées.",
    "visual": "gas",
    "category": "Le modèle particulaire"
  },
  {
    "question": "Quand on comprime un gaz, que deviennent les espaces entre ses particules ?",
    "answers": [
      "Ils deviennent plus grands.",
      "Ils restent forcément identiques.",
      "Ils deviennent plus petits."
    ],
    "correct": 2,
    "explanation": "Les particules se rapprochent lorsque le gaz occupe moins de place.",
    "visual": "compress",
    "category": "Le modèle particulaire"
  },
  {
    "question": "Dans une seringue bouchée, on tire le piston pour laisser plus de place au gaz. Que font ses particules ?",
    "answers": [
      "Elles s’éloignent les unes des autres.",
      "Elles se rangent en lignes serrées.",
      "Elles se regroupent toutes au même endroit."
    ],
    "correct": 0,
    "explanation": "Le gaz occupe l’espace disponible. Ses particules sont alors plus espacées.",
    "visual": "expand",
    "category": "Le modèle particulaire"
  },
  {
    "question": "Que signifie le mot « compact » dans le modèle particulaire ?",
    "answers": [
      "Les particules sont très éloignées.",
      "Les particules sont très proches.",
      "Il n’y a aucune particule."
    ],
    "correct": 1,
    "explanation": "Un état compact contient des particules proches les unes des autres.",
    "visual": "liquid",
    "category": "Le modèle particulaire"
  },
  {
    "question": "Que signifie le mot « ordonné » dans le modèle particulaire ?",
    "answers": [
      "Les particules sont très éloignées.",
      "Les particules sont placées sans ordre.",
      "Les particules sont rangées régulièrement."
    ],
    "correct": 2,
    "explanation": "Dans un état ordonné, les particules sont disposées de façon régulière.",
    "visual": "solid",
    "category": "Le modèle particulaire"
  },
  {
    "question": "Quel état ce schéma représente-t-il ?",
    "answers": [
      "L’état solide.",
      "L’état liquide.",
      "L’état gazeux."
    ],
    "correct": 0,
    "explanation": "Les particules sont proches et rangées : le modèle représente un solide.",
    "visual": "solid",
    "category": "Le modèle particulaire"
  },
  {
    "question": "Quel état ce schéma représente-t-il ?",
    "answers": [
      "L’état gazeux.",
      "L’état liquide.",
      "L’état solide."
    ],
    "correct": 1,
    "explanation": "Les particules sont proches, mais elles ne sont pas rangées régulièrement : c’est le modèle d’un liquide.",
    "visual": "liquid",
    "category": "Le modèle particulaire"
  },
  {
    "question": "Quel état ce schéma représente-t-il ?",
    "answers": [
      "L’état liquide.",
      "L’état solide.",
      "L’état gazeux."
    ],
    "correct": 2,
    "explanation": "Les particules sont éloignées et dispersées dans tout le récipient : c’est le modèle d’un gaz.",
    "visual": "gas",
    "category": "Le modèle particulaire"
  },
  {
    "question": "Quel point commun ont le solide et le liquide ?",
    "answers": [
      "Leurs particules sont proches.",
      "Leurs particules sont très éloignées.",
      "Leurs particules sont toujours rangées en lignes."
    ],
    "correct": 0,
    "explanation": "Le solide et le liquide sont deux états compacts.",
    "visual": "solid-liquid",
    "category": "Le modèle particulaire"
  },
  {
    "question": "Quelle différence voit-on entre un liquide et un gaz ?",
    "answers": [
      "Le gaz ne contient aucune particule.",
      "Les particules sont plus espacées dans le gaz.",
      "Les particules sont plus espacées dans le liquide."
    ],
    "correct": 1,
    "explanation": "Le liquide est compact, tandis que le gaz est dispersé.",
    "visual": "liquid-gas",
    "category": "Le modèle particulaire"
  },
  {
    "question": "L’eau pure est-elle un corps pur ou un mélange ?",
    "answers": [
      "Un mélange d’eau et de sucre.",
      "Un mélange de plusieurs substances.",
      "Un corps pur."
    ],
    "correct": 2,
    "explanation": "L’eau pure contient une seule sorte de particules : celles de l’eau.",
    "visual": "water",
    "category": "Le modèle particulaire"
  },
  {
    "question": "L’eau sucrée est-elle un corps pur ou un mélange ?",
    "answers": [
      "Un mélange.",
      "Un corps pur.",
      "Un récipient vide."
    ],
    "correct": 0,
    "explanation": "L’eau sucrée contient de l’eau et du sucre : c’est un mélange.",
    "visual": "sugar",
    "category": "Le modèle particulaire"
  },
  {
    "question": "Comment représente-t-on un corps pur avec des particules ?",
    "answers": [
      "Avec plusieurs sortes de particules.",
      "Avec une seule sorte de particules.",
      "Avec un récipient sans particules."
    ],
    "correct": 1,
    "explanation": "Dans un corps pur, toutes les particules représentées sont de la même sorte.",
    "visual": "pure",
    "category": "Le modèle particulaire"
  },
  {
    "question": "Quel schéma représente un mélange ?",
    "answers": [
      "Le schéma 1.",
      "Le schéma 2.",
      "Le schéma 3."
    ],
    "correct": 2,
    "explanation": "Le schéma 3 contient deux sortes de particules. Les deux autres n’en contiennent qu’une.",
    "visual": "mixture-choice",
    "category": "Le modèle particulaire"
  },
  {
    "question": "Dans ce modèle d’eau sucrée, que représentent les triangles ?",
    "answers": [
      "Les particules de sucre.",
      "Les particules d’eau.",
      "Les espaces vides."
    ],
    "correct": 0,
    "explanation": "Les ronds représentent l’eau. L’autre sorte de particules représente le sucre.",
    "visual": "sugar-unknown",
    "category": "Le modèle particulaire"
  },
  {
    "question": "Quelle phrase décrit correctement un liquide ?",
    "answers": [
      "Ses particules sont éloignées et rangées.",
      "Ses particules sont proches et désordonnées.",
      "Ses particules sont proches et rangées régulièrement."
    ],
    "correct": 1,
    "explanation": "Un liquide est compact et désordonné.",
    "visual": "liquid",
    "category": "Le modèle particulaire"
  },
  {
    "question": "Ces deux schémas contiennent chacun une seule sorte de particules. Que représentent-ils ?",
    "answers": [
      "Deux mélanges.",
      "Un corps pur et un mélange.",
      "Deux corps purs."
    ],
    "correct": 2,
    "explanation": "Chaque schéma contient une seule sorte de particules. Leur espacement ne suffit pas à en faire un mélange.",
    "visual": "two-pure",
    "category": "Le modèle particulaire"
  }
];

// Schémas vectoriels : les formes et les couleurs distinguent les particules.
const gasPoints = [[48,43],[191,48],[123,79],[65,119],[192,137],[126,164]];
const solidPoints = Array.from({length:18}, (_,i) => [61+(i%6)*23,112+Math.floor(i/6)*23]);
const liquidPoints = [[49,114],[74,109],[99,116],[123,109],[148,116],[173,110], [57,137],[82,131],[106,139],[131,132],[157,139],[182,132], [45,160],[70,154],[95,162],[120,155],[145,162],[170,155]];
const purePoints = Array.from({length:8}, (_,i) => [65+(i%4)*32,113+Math.floor(i/4)*32]);
function mark(x,y,triangle=false,r=10) {
  return triangle ? `<polygon points="${x},${y-r-2} ${x-r-2},${y+r} ${x+r+2},${y+r}" fill="#b45309"/>` : `<circle cx="${x}" cy="${y}" r="${r}" fill="#1d4ed8"/>`;
}
function particleFigure(type,caption='') {
  let points=gasPoints, triangle=false, mix=false, description='Des ronds espacés, répartis dans le récipient.';
  if(type==='solid') { points=solidPoints; description='Des ronds proches, alignés en trois rangées régulières.'; }
  if(type==='liquid') { points=liquidPoints; description='Des ronds proches, disposés sans rangées régulières dans la partie basse.'; }
  if(type==='compact6') { points=[[90,135],[113,135],[136,135],[90,158],[113,158],[136,158]]; description='Six ronds regroupés en bas du récipient.'; }
  if(['pure','triangles','mixture','more','six'].includes(type)) {
    points=type==='more'?Array.from({length:10},(_,i)=>[55+i%5*30,110+Math.floor(i/5)*32]):type==='six'?purePoints.slice(0,6):purePoints;
    triangle=type==='triangles'; mix=type==='mixture';
    description=mix?'Des ronds et des triangles dans le récipient.':triangle?'Huit triangles identiques dans le récipient.':`${points.length} ronds identiques dans le récipient.`;
  }
  return `<figure>${caption?`<figcaption>${caption}</figcaption>`:''}<svg viewBox="0 0 240 200" role="img" aria-label="${description}"><rect x="24" y="18" width="192" height="166" rx="5" fill="#f8fafc" stroke="#475569" stroke-width="3"/>${points.map(([x,y],i)=>mark(x,y,triangle||(mix&&i%3===1))).join('')}</svg></figure>`;
}
function syringe(piston,caption,empty=false) {
  const positions=[[.12,.12],[.8,.2],[.48,.48],[.15,.83],[.85,.85],[.98,.52]];
  return `<figure class="syringe"><figcaption>${caption}</figcaption><svg viewBox="0 0 360 150" role="img" aria-label="Seringue bouchée, piston à ${piston===115?'gauche':'droite'}${empty?', zone à compléter':', six particules représentées'}."><path d="M50 40 H300 L318 65 H340 V85 H318 L300 110 H50 Z" fill="#f8fafc" stroke="#475569" stroke-width="3"/><rect x="${piston}" y="41" width="8" height="68" fill="#475569"/><path d="M${piston} 75 H20 M20 50 V100" stroke="#475569" stroke-width="5"/><rect x="335" y="61" width="14" height="28" rx="3" fill="#b45309"/>${empty?'<text x="230" y="83" text-anchor="middle" font-size="26" fill="#475569">?</text>':positions.map(([x,y])=>mark(piston+22+x*(278-piston-22),50+y*49,false,6)).join('')}</svg></figure>`;
}
function renderVisual(type) {
  const fig=particleFigure;
  let html='',legend='Chaque symbole représente une particule. Schémas simplifiés.';
  const single={count:'gas',liquid:'liquid',gas:'gas',solid:'solid',triangles:'triangles',pure:'pure'};
  if(single[type]) html=fig(single[type]);
  if(type==='spacing') { html=fig('gas','Dessin 1')+fig('compact6','Dessin 2'); legend='Les deux récipients ont la même taille. Un rond représente une particule.'; }
  if(type==='gas-choice') html=fig('compact6','Dessin 1')+fig('gas','Dessin 2');
  if(type==='solid-liquid') html=fig('solid','Solide')+fig('liquid','Liquide');
  if(type==='liquid-gas') html=fig('liquid','Liquide')+fig('gas','Gaz');
  if(type==='water-sugar'||type==='sugar'||type==='sugar-unknown') {
    html=fig('mixture',type==='sugar'?'Eau sucrée':'');
    legend=type==='sugar-unknown'?'● : particule d’eau. Que représente ▲ ?':'● : particule d’eau. ▲ : particule de sucre.';
  }
  if(type==='water') { html=fig('pure','Eau pure'); legend='● : particule d’eau.'; }
  if(type==='add-same') html=fig('six','Avant')+fig('more','Après');
  if(type==='mixture-choice') html=fig('pure','Schéma 1')+fig('triangles','Schéma 2')+fig('mixture','Schéma 3');
  if(type==='two-pure') html=fig('pure','Schéma 1')+fig('gas','Schéma 2');
  if(type==='compress'||type==='compress-choices') {
    html=syringe(115,'Avant')+syringe(205,type==='compress'?'Après : on pousse le piston':'Après : à compléter',type==='compress-choices');
    legend='Seringue bouchée : on pousse le piston. Un rond représente une particule de gaz.';
  }
  if(type==='expand'||type==='expand-empty') {
    html=syringe(205,'Avant')+syringe(115,type==='expand'?'Après : on tire le piston':'Après : à compléter',type==='expand-empty');
    legend='Seringue bouchée : on tire le piston. Un rond représente une particule de gaz.';
  }
  if(type==='mixture-choice'||type==='two-pure'||type==='triangles'||type==='pure'||type==='add-same') legend='Même symbole : même sorte de particules. Symboles différents : sortes différentes.';
  document.getElementById('visuals').innerHTML=html;
  document.getElementById('visualLegend').textContent=legend;
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
  questionEl.textContent = q.question;
  categoryEl.textContent = q.category;
  renderVisual(q.visual);
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
  if (percentage === 100) return "Excellent ! Tu sais utiliser le modèle particulaire de la matière.";
  if (percentage >= 80) return "Très bon résultat ! Tes connaissances sont solides.";
  if (percentage >= 60) return "Bon travail. Quelques notions méritent encore une petite révision.";
  if (percentage >= 40) return "Plusieurs notions sont encore à revoir. Relis le cours puis recommence le QCM.";
  return "Revois les schémas des particules, les corps purs et les mélanges, puis essaie à nouveau.";
}

showQuestion();
