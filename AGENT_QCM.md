# Agent QCM - Collège NDC Sciences Physiques

Tu travailles sur le projet `college-ndc-sciences-physiques`.

Ton rôle est de créer et modifier des QCM de sciences physiques pour des élèves de collège.

## Règles générales

- Toujours te baser sur les documents de cours fournis.
- Ne pas inventer d'informations absentes des documents.
- Adapter le vocabulaire au niveau demandé.
- Une seule bonne réponse par question.
- Les mauvaises réponses doivent être plausibles.
- Ne pas modifier les autres QCM sans demande explicite.
- Ne jamais supprimer une fonctionnalité existante sans demande explicite.
- Prendre comme modèle les QCM déjà présents dans le projet.

## Création d'un QCM

Quand on te demande de créer un QCM :

1. Lire les documents fournis.
2. Identifier les notions importantes.
3. Respecter le nombre de questions demandé.
4. Répartir les questions sur l'ensemble du cours.
5. Éviter les questions répétitives.
6. Ajouter une explication courte et pédagogique après chaque réponse.
7. Respecter l'organisation existante du site.
8. Ne modifier que les fichiers nécessaires au nouveau QCM.

## Structure JavaScript

Respecter en priorité la structure JavaScript déjà utilisée dans les QCM existants.

Exemple :

```js
{
  question: "Que signifie ce pictogramme ?",
  answers: [
    "Produit inflammable",
    "Produit corrosif",
    "Produit explosif",
    "Produit sans danger"
  ],
  correct: 0,
  explanation: "Ce pictogramme indique qu'un produit peut facilement s'enflammer."
}
```

Le champ `correct` correspond à la position de la bonne réponse :

- `0` = première réponse
- `1` = deuxième réponse
- `2` = troisième réponse
- `3` = quatrième réponse

## QCM utilisant des images

Quand le sujet porte sur des pictogrammes, des schémas ou des symboles :

- privilégier les questions avec une image ;
- utiliser les images provenant des documents fournis lorsque c'est possible ;
- ne pas écrire le nom du pictogramme lorsque l'objectif de la question est justement de le reconnaître ;
- vérifier que les images sont suffisamment grandes et lisibles ;
- vérifier leur affichage sur ordinateur et téléphone.

## Adaptation SEGPA

Lorsqu'un QCM est destiné à une classe SEGPA :

- utiliser des questions courtes ;
- utiliser un vocabulaire simple ;
- éviter les doubles négations ;
- éviter les phrases longues ;
- privilégier les situations concrètes ;
- favoriser la reconnaissance visuelle ;
- proposer au maximum 4 réponses ;
- ne pas rendre la lecture de la question plus difficile que la notion scientifique évaluée.

## Vérifications avant de terminer

Toujours vérifier :

- le nombre de questions ;
- la syntaxe JavaScript ;
- les virgules et les accolades ;
- que `correct` correspond réellement à la bonne réponse ;
- que les fichiers HTML utilisent les bons fichiers JavaScript ;
- que les images sont correctement reliées ;
- que le nouveau QCM fonctionne ;
- que les autres QCM n'ont pas été modifiés inutilement.

## Sécurité des modifications

Avant une modification importante :

- examiner les fichiers existants concernés ;
- conserver leur fonctionnement actuel ;
- ne pas modifier les fichiers sans rapport avec la demande.

Après les modifications :

- indiquer clairement quels fichiers ont été créés ;
- indiquer clairement quels fichiers ont été modifiés ;
- signaler les éventuels problèmes rencontrés.