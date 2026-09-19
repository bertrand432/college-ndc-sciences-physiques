from pathlib import Path
import json, shutil
import pypdfium2 as pdfium

root=Path('..').resolve()
stage=Path('output/site-4c')
for folder in ['js','css','qcm/4e','images/qcm-4c']:
    (stage/folder).mkdir(parents=True,exist_ok=True)
pdf=pdfium.PdfDocument(str(root/'documents/4eme/cours1.pdf'))
# Extract the illustrated areas only; page coordinates follow the supplied PDF.
regions={
 'montage-a':(3,(.17,.235,.73,.927)),
 'schema-a':(4,(.24,.23,.76,.815)),
 'montage-b':(6,(.028,.239,.98,.908)),
 'schema-b':(7,(.264,.234,.737,.865)),
 'objet':(3,(.327,.386,.478,.655)),
 'symbole-1':(4,(.30,.55,.42,.70))
}
regions['symbole-1']=(4,(.30,.55,.42,.70))
regions['symbole-2']=(4,(.46,.295,.535,.51))
for name,(page,box) in regions.items():
    p=pdf[page]; w,h=p.get_size(); x1,y1,x2,y2=box
    im=p.render(scale=2.5,crop=(x1*w,(1-y2)*h,(1-x2)*w,y1*h)).to_pil()
    im.save(stage/f'images/qcm-4c/{name}.png')

rows=[
('Quel objet est montré ?',['Une lampe.','Une pile.','Un fil électrique.'],1,'C’est la pile du montage. Elle possède deux bornes, repérées + et −.','objet'),
('Combien de lampes vois-tu ?',['Une lampe.','Trois lampes.','Deux lampes.'],2,'Le montage comporte deux lampes, appelées L1 et L2.','montage-a'),
('Quel fil relie directement les deux lampes ?',['Le fil vert.','Le fil rouge.','Le fil jaune.'],0,'Le fil vert relie la lampe L1 à la lampe L2.','montage-a'),
('Que représente ce symbole ?',['Une pile.','Une lampe.','Un fil électrique.'],1,'Le cercle avec une croix représente une lampe.','symbole-1'),
('Que représente ce symbole ?',['Un fil électrique.','Une lampe.','Une pile.'],2,'Les deux traits de longueurs différentes représentent la pile.','symbole-2'),
('Quel signe repère la borne positive de la pile ?',['Le signe +.','Le signe −.','La lettre L.'],0,'Le signe + indique la borne positive de la pile.','objet'),
('Quel montage est représenté ?',['Un montage en dérivation.','Un montage en série.'],1,'Les deux lampes sont placées l’une à la suite de l’autre dans une seule boucle.','schema-a'),
('Combien de boucles vois-tu sur ce schéma ?',['Une boucle.','Deux boucles.','Trois boucles.'],0,'On peut suivre une seule boucle qui passe par la pile et les deux lampes.','schema-a'),
('Comment brillent les lampes dans le montage en série du cours ?',['Elles sont éteintes.','Elles brillent fortement.','Elles brillent faiblement.'],2,'Le cours indique un faible éclat des lampes pour ce montage en série.','montage-a'),
('Dans ce montage, on dévisse L1. Que devient L2 ?',['Elle reste allumée.','Elle s’éteint.','Elle brille plus fort.'],1,'Dans un circuit en série, dévisser une lampe éteint aussi l’autre.','montage-a'),
('Quel schéma correspond à ce montage ?',['Le schéma A.','Le schéma B.'],1,'Le montage et le schéma B montrent les deux lampes dans une seule boucle.','match-a'),
('Quel montage est représenté ici ?',['Un montage en série.','Un montage en dérivation.'],1,'Les deux lampes sont placées sur des branches différentes.','schema-b'),
('Sur ce schéma, où sont placées les lampes ?',['Sur deux branches différentes.','L’une à la suite de l’autre sur la même branche.','Toutes les deux à l’intérieur de la pile.'],0,'Chaque lampe est placée sur sa propre branche.','schema-b'),
('Comment brillent les lampes dans le montage en dérivation du cours ?',['Elles sont éteintes.','Elles brillent faiblement.','Elles brillent fortement.'],2,'Le cours indique un fort éclat des lampes pour ce montage en dérivation.','montage-b'),
('On dévisse la lampe du haut. Que devient celle du bas ?',['Elle s’éteint.','Elle reste allumée.','Elle brille moins fort.'],1,'Dans ce montage en dérivation, l’autre lampe reste allumée.','montage-b'),
('Quel schéma correspond à cette photographie ?',['Le schéma A.','Le schéma B.'],0,'Le schéma A montre deux lampes sur des branches différentes, comme sur la photographie.','match-b'),
('On dévisse une lampe. L’autre s’éteint aussi. Quel montage du cours reconnais-tu ?',['Le montage en dérivation.','Le montage en série.'],1,'Dans le montage en série, dévisser une lampe éteint les deux lampes.',None),
('Tu veux qu’une lampe reste allumée quand tu dévisses l’autre. Quel montage choisis-tu ?',['Le montage A.','Le montage B.'],1,'Le montage B est en dérivation. Une lampe peut rester allumée quand on dévisse l’autre.','pair'),
('Dans lequel des deux montages du cours les lampes brillent-elles le plus fortement ?',['Dans le montage A.','Dans le montage B.','Elles ont le même éclat dans les deux montages.'],1,'Dans les exemples du cours, les lampes brillent plus fortement en dérivation.','photos'),
('Quelle phrase décrit correctement les deux schémas ?',['A est en série et B est en dérivation.','A est en dérivation et B est en série.','Les deux montages sont en série.'],0,'Dans A, les lampes se suivent dans une boucle. Dans B, elles sont sur deux branches différentes.','pair')]
alts={'objet':'Objet du montage avec deux bornes + et −.','symbole-1':'Cercle contenant une croix.','symbole-2':'Deux traits de longueurs différentes avec le signe +.','montage-a':'Montage du cours : L2 à gauche, L1 à droite, fils jaune, vert et rouge.','montage-b':'Montage du cours avec une lampe en haut et une lampe en bas.','schema-a':'Schéma du cours : deux cercles avec une croix sur le côté inférieur du tracé.','schema-b':'Schéma du cours : deux cercles avec une croix sur deux traits horizontaux distincts.'}
def pic(key,label=''):
    return {'src':'../../images/qcm-4c/'+key+'.png','alt':alts[key],'label':label}
questions=[]
for i,(q,a,c,e,img) in enumerate(rows):
    images=[]
    if img in alts: images=[pic(img)]
    elif img in ['match-a','match-b']: images=[pic('montage-a' if img=='match-a' else 'montage-b','Montage à observer'),pic('schema-b','Schéma A'),pic('schema-a','Schéma B')]
    elif img=='pair': images=[pic('schema-a','Montage A'),pic('schema-b','Montage B')]
    elif img=='photos': images=[pic('montage-a','Montage A'),pic('montage-b','Montage B')]
    questions.append(dict(question=q,answers=a,correct=c,explanation=e,category='Observer et reconnaître' if i<6 else 'Les circuits électriques',images=images))
engine=(root/'js/quiz-3d-securite.js').read_text(encoding='utf-8').split('// Each round')[1]
engine='// Each round'+engine
engine=engine.replace('const imageEl = document.getElementById("pictogramme");','const imageEl = document.getElementById("illustrations");')
start=engine.index('  imageEl.hidden = !q.image;')
end=engine.index('  answersEl.innerHTML',start)
engine=engine[:start]+'''  imageEl.replaceChildren();
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
'''+engine[end:]
engine=engine.replace('Tu connais les dangers et les gestes de protection.','Tu reconnais les circuits et le comportement des lampes.').replace('Revois les pictogrammes et les gestes de protection','Revois les montages du cours')
(stage/'js/quiz-4c-circuits.js').write_text('// Questions validées pour les 4C SEGPA. Source : documents/4eme/cours1.pdf.\nconst questions = '+json.dumps(questions,ensure_ascii=False,indent=2)+';\n\n'+engine,encoding='utf-8')
html=(root/'qcm/3e/securite-3d.html').read_text(encoding='utf-8')
html=html.replace('3D SEGPA','4C SEGPA').replace('Dangers et protections','Circuits électriques').replace('quiz-3d-securite','quiz-4c-circuits').replace('QCM de 3e','QCM de 4e')
html=html.replace('20 questions pour les 3D SEGPA : pictogrammes de danger, risques et moyens de protection.','20 questions illustrées sur les circuits électriques pour les 4C SEGPA.')
html=html.replace('20 questions pour les 4C SEGPA : pictogrammes de danger, risques et moyens de protection.','20 questions illustrées sur les circuits électriques pour les 4C SEGPA.')
html=html.replace('20 questions pour reconnaître les pictogrammes et apprendre à se protéger.','Rappels de 5e : 20 questions sur les circuits en série et en dérivation.')
html=html.replace('Choisis une seule réponse, puis lis l’explication.','Observe l’image et lis la question. Choisis une seule réponse, puis lis l’explication.')
html=html.replace('<img id="pictogramme" class="quiz-pictogramme" alt="" hidden>','<div id="illustrations" class="quiz-illustrations" hidden></div>')
(stage/'qcm/4e/circuits-4c.html').write_text(html,encoding='utf-8')
css=(root/'css/quiz-3d-securite.css').read_text(encoding='utf-8')
css=css[css.index('.question-title'):]+'''\n.quiz-illustrations { display:grid; gap:18px; margin:0 0 24px; }
.quiz-illustrations[hidden] { display:none; }
.quiz-illustrations figure { margin:0; padding:12px; border:1px solid var(--border); border-radius:12px; text-align:center; }
.quiz-illustrations figcaption { font-weight:700; margin-bottom:10px; }
.quiz-illustrations img { display:block; max-width:100%; width:auto; max-height:360px; height:auto; margin:auto; object-fit:contain; }
@media (min-width:650px) {
  .quiz-illustrations:has(figure:nth-child(2)) { grid-template-columns:1fr 1fr; }
  .quiz-illustrations:has(figure:nth-child(3)) figure:first-child { grid-column:1 / -1; }
}
'''
(stage/'css/quiz-4c-circuits.css').write_text(css,encoding='utf-8')
index=(root/'qcm/4e/index.html').read_text(encoding='utf-8')
card='''
      <a class="chapter-card" href="circuits-4c.html">
        <span class="section-kicker">4C SEGPA · Disponible</span>
        <h3>Circuits électriques</h3>
        <p>20 questions illustrées : circuits en série et en dérivation, avec correction et remédiation.</p>
        <span class="card-link">Commencer →</span>
      </a>'''
index=index.replace('<div class="chapter-grid">','<div class="chapter-grid">'+card,1)
(stage/'qcm/4e/index.html').write_text(index,encoding='utf-8')
shutil.copyfile(root/'css/style.css',stage/'css/style.css')
print('20 questions et illustrations préparées dans',stage)

