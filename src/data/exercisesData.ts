export interface Exercise {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: "Facile" | "Moyen" | "Difficile";
}

export interface SubtestData {
  id: string;
  title: string;
  description: string;
  exercises: Exercise[];
}

export const subtestsData: SubtestData[] = [
  {
    id: "logic",
    title: "Raisonnement Logique",
    description: "Exercices de logique, suites et raisonnement déductif",
    exercises: [
      {
        id: 1,
        question: "Quelle est la valeur suivante dans cette suite logique : 2, 6, 12, 20, 30, ?",
        options: ["38", "40", "42", "44", "46"],
        correctAnswer: 2,
        explanation: "La suite suit le pattern : n×(n+1). Pour n=6 : 6×7 = 42. (2=1×2, 6=2×3, 12=3×4, 20=4×5, 30=5×6)",
        difficulty: "Moyen",
      },
      {
        id: 2,
        question: "Si tous les A sont B, et que certains B sont C, peut-on conclure que certains A sont C ?",
        options: [
          "Oui, certainement",
          "Non, certainement pas",
          "Impossible à déterminer",
          "Seulement si tous les B sont C",
          "Seulement si aucun B n'est C",
        ],
        correctAnswer: 2,
        explanation: "On ne peut pas conclure car les A pourraient être uniquement dans la partie des B qui ne sont pas C. L'information est insuffisante.",
        difficulty: "Moyen",
      },
      {
        id: 3,
        question: "Dans une suite : 1, 1, 2, 3, 5, 8, 13, ... Quel est le nombre suivant ?",
        options: ["18", "19", "20", "21", "22"],
        correctAnswer: 3,
        explanation: "C'est la suite de Fibonacci où chaque nombre est la somme des deux précédents : 8 + 13 = 21",
        difficulty: "Facile",
      },
    ],
  },
  {
    id: "calculation",
    title: "Calcul",
    description: "Calcul mental, opérations et problèmes numériques",
    exercises: [
      {
        id: 1,
        question: "Calculez : 15% de 240 = ?",
        options: ["32", "34", "36", "38", "40"],
        correctAnswer: 2,
        explanation: "15% de 240 = (15/100) × 240 = 0.15 × 240 = 36",
        difficulty: "Facile",
      },
      {
        id: 2,
        question: "Si x² = 144, quelles sont les valeurs possibles de x ?",
        options: ["12 uniquement", "-12 uniquement", "12 et -12", "72", "Aucune solution"],
        correctAnswer: 2,
        explanation: "x² = 144 signifie que x peut être 12 ou -12, car 12² = 144 et (-12)² = 144",
        difficulty: "Facile",
      },
      {
        id: 3,
        question: "Un article coûte 80€ après une réduction de 20%. Quel était son prix initial ?",
        options: ["96€", "100€", "104€", "108€", "110€"],
        correctAnswer: 1,
        explanation: "Si 80€ représente 80% du prix initial (100% - 20%), alors prix initial = 80 ÷ 0.8 = 100€",
        difficulty: "Moyen",
      },
    ],
  },
  {
    id: "conditions",
    title: "Conditions Minimales",
    description: "Analyse de suffisance d'informations",
    exercises: [
      {
        id: 1,
        question: "Pierre a plus d'argent que Jean. Jean a plus d'argent que Marc. Peut-on déterminer qui a le plus d'argent entre Pierre et Marc ?\n\n(1) Marc a 50€\n(2) Pierre a 100€",
        options: [
          "L'énoncé seul suffit",
          "La condition (1) seule suffit",
          "La condition (2) seule suffit",
          "Les deux conditions ensemble suffisent",
          "Les informations sont insuffisantes",
        ],
        correctAnswer: 0,
        explanation: "L'énoncé seul suffit : Pierre > Jean > Marc, donc Pierre a plus d'argent que Marc. Les montants exacts ne sont pas nécessaires.",
        difficulty: "Moyen",
      },
      {
        id: 2,
        question: "Quel est l'âge de Marie ?\n\n(1) Marie a 5 ans de plus que son frère\n(2) Son frère a 20 ans",
        options: [
          "L'énoncé seul suffit",
          "La condition (1) seule suffit",
          "La condition (2) seule suffit",
          "Les deux conditions ensemble suffisent",
          "Les informations sont insuffisantes",
        ],
        correctAnswer: 3,
        explanation: "Il faut combiner les deux informations : si le frère a 20 ans (condition 2) et Marie a 5 ans de plus (condition 1), alors Marie a 25 ans.",
        difficulty: "Facile",
      },
    ],
  },
  {
    id: "expression",
    title: "Expression",
    description: "Grammaire, orthographe et syntaxe française",
    exercises: [
      {
        id: 1,
        question: "Quelle phrase est correctement orthographiée ?",
        options: [
          "Quelque soit votre choix, je le respecterai",
          "Quel que soit votre choix, je le respecterai",
          "Quelques soit votre choix, je le respecterai",
          "Quel qu'est votre choix, je le respecterai",
          "Quelqu'est votre choix, je le respecterai",
        ],
        correctAnswer: 1,
        explanation: "'Quel que soit' s'écrit en trois mots. 'Quel' s'accorde avec le nom qui suit ('choix' est masculin singulier).",
        difficulty: "Moyen",
      },
      {
        id: 2,
        question: "Complétez : Les résultats que nous avons ___ sont satisfaisants.",
        options: ["obtenu", "obtenus", "obtenue", "obtenues", "obtenir"],
        correctAnswer: 1,
        explanation: "Le participe passé 'obtenu' s'accorde avec le COD 'que' (mis pour 'résultats', masculin pluriel) placé avant l'auxiliaire avoir : obtenus.",
        difficulty: "Moyen",
      },
      {
        id: 3,
        question: "Quelle est la bonne conjugaison : Il faut que vous ___ à l'heure.",
        options: ["êtes", "soyez", "soyiez", "serez", "être"],
        correctAnswer: 1,
        explanation: "Après 'il faut que', on utilise le subjonctif présent : 'que vous soyez'.",
        difficulty: "Facile",
      },
    ],
  },
  {
    id: "comprehension",
    title: "Compréhension de Textes",
    description: "Analyse et compréhension de documents écrits",
    exercises: [
      {
        id: 1,
        question: "Texte : 'L'intelligence artificielle transforme progressivement tous les secteurs de l'économie. Si certains y voient une menace pour l'emploi, d'autres considèrent qu'elle créera de nouvelles opportunités.'\n\nQuelle est l'idée principale ?",
        options: [
          "L'IA menace tous les emplois",
          "L'IA crée uniquement des opportunités",
          "L'IA transforme l'économie avec des avis divergents",
          "L'IA ne change rien à l'économie",
          "L'IA est dangereuse",
        ],
        correctAnswer: 2,
        explanation: "Le texte présente deux points de vue opposés (menace vs opportunités) sur la transformation de l'économie par l'IA.",
        difficulty: "Facile",
      },
      {
        id: 2,
        question: "Texte : 'Les études montrent que 70% des start-ups échouent dans les 5 premières années. Cependant, les entrepreneurs qui ont échoué une première fois ont 20% de chances supplémentaires de réussir leur seconde tentative.'\n\nQue peut-on déduire ?",
        options: [
          "L'échec est définitif",
          "L'expérience de l'échec peut être bénéfique",
          "Toutes les start-ups échouent",
          "Il ne faut jamais créer de start-up",
          "Le succès est garanti la deuxième fois",
        ],
        correctAnswer: 1,
        explanation: "Le texte indique que l'expérience d'un échec augmente les chances de succès (20% supplémentaires), donc l'échec peut être formateur.",
        difficulty: "Moyen",
      },
    ],
  },
  {
    id: "problems",
    title: "Résolution de Problèmes",
    description: "Problèmes mathématiques et logiques complexes",
    exercises: [
      {
        id: 1,
        question: "Un train part de Paris à 10h et roule à 120 km/h. Un autre train part de Lyon (400 km de Paris) à 10h30 vers Paris à 100 km/h. À quelle heure se croiseront-ils ?",
        options: ["11h30", "11h42", "11h48", "12h00", "12h12"],
        correctAnswer: 2,
        explanation: "À 10h30, le 1er train a parcouru 60 km. Distance restante : 340 km. Vitesse d'approche : 220 km/h. Temps : 340/220 = 1h32 + 10h30 = 11h48",
        difficulty: "Difficile",
      },
      {
        id: 2,
        question: "Dans un groupe de 30 personnes, 18 parlent anglais, 15 parlent espagnol, et 5 ne parlent aucune de ces langues. Combien parlent les deux langues ?",
        options: ["5", "6", "7", "8", "9"],
        correctAnswer: 3,
        explanation: "Total qui parle au moins une langue : 30 - 5 = 25. Avec inclusion-exclusion : 18 + 15 - x = 25, donc x = 8",
        difficulty: "Moyen",
      },
      {
        id: 3,
        question: "Un robinet A remplit un bassin en 4h, un robinet B en 6h. Combien de temps faut-il pour remplir le bassin avec les deux robinets ouverts ?",
        options: ["2h", "2h24", "2h30", "3h", "5h"],
        correctAnswer: 1,
        explanation: "Débit de A : 1/4 par heure, débit de B : 1/6 par heure. Ensemble : 1/4 + 1/6 = 5/12 par heure. Temps : 12/5 = 2.4h = 2h24",
        difficulty: "Moyen",
      },
    ],
  },
];
