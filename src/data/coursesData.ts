export interface CourseContent {
  id: string;
  title: string;
  category: string;
  type: "Fiche" | "Cours" | "Guide" | "Astuce";
  duration: string;
  content: {
    introduction?: string;
    sections: {
      title: string;
      content: string;
      examples?: string[];
      tips?: string[];
    }[];
    keyPoints?: string[];
  };
}

export const coursesData: CourseContent[] = [
  // RAISONNEMENT LOGIQUE
  {
    id: "logic-suites",
    title: "Les Suites Logiques",
    category: "Raisonnement Logique",
    type: "Fiche",
    duration: "10 min",
    content: {
      introduction: "Les suites logiques sont l'un des types d'exercices les plus fréquents en raisonnement logique. Maîtriser les patterns courants vous fera gagner un temps précieux.",
      sections: [
        {
          title: "Types de suites numériques",
          content: "Il existe plusieurs catégories de suites à reconnaître rapidement :",
          examples: [
            "**Suites arithmétiques** : différence constante (2, 5, 8, 11... +3)",
            "**Suites géométriques** : rapport constant (3, 6, 12, 24... ×2)",
            "**Suites de carrés** : 1, 4, 9, 16, 25... (n²)",
            "**Suite de Fibonacci** : chaque terme = somme des 2 précédents (1, 1, 2, 3, 5, 8...)",
            "**Suites alternées** : changement de règle 1 terme sur 2",
          ],
        },
        {
          title: "Méthodologie d'approche",
          content: "Suivez ces étapes pour identifier le pattern rapidement :",
          tips: [
            "1. Calculez les différences entre termes consécutifs",
            "2. Si les différences ne sont pas constantes, calculez les différences de différences",
            "3. Cherchez un rapport multiplicatif constant",
            "4. Testez les opérations classiques : carrés, cubes, factorielles",
            "5. Vérifiez si la suite alterne entre deux règles",
          ],
        },
        {
          title: "Pièges courants",
          content: "Attention à ces erreurs fréquentes :",
          examples: [
            "Ne pas confondre suite arithmétique et géométrique",
            "Oublier de vérifier si la suite alterne",
            "Se précipiter sur la première règle trouvée sans vérifier tous les termes",
            "Négliger les suites avec opérations combinées (+3 puis ×2 en alternance)",
          ],
        },
      ],
      keyPoints: [
        "Toujours calculer les différences entre termes",
        "Tester les opérations classiques : +, -, ×, ÷, n², n³",
        "Vérifier que la règle fonctionne pour TOUS les termes",
        "En cas de doute, éliminer les réponses impossibles",
      ],
    },
  },
  {
    id: "logic-syllogismes",
    title: "Les Syllogismes et Déductions",
    category: "Raisonnement Logique",
    type: "Fiche",
    duration: "12 min",
    content: {
      introduction: "Les syllogismes testent votre capacité à tirer des conclusions logiques à partir de prémisses. C'est un exercice de rigueur pure.",
      sections: [
        {
          title: "Structure d'un syllogisme",
          content: "Un syllogisme classique comprend deux prémisses et une conclusion :",
          examples: [
            "**Prémisse 1** : Tous les A sont B",
            "**Prémisse 2** : Tous les B sont C",
            "**Conclusion valide** : Tous les A sont C",
            "**Conclusion invalide** : Tous les C sont A (erreur logique !)",
          ],
        },
        {
          title: "Quantificateurs à maîtriser",
          content: "Comprendre la différence entre ces termes est crucial :",
          tips: [
            "**Tous** : 100% de l'ensemble (universel affirmatif)",
            "**Aucun** : 0% de l'ensemble (universel négatif)",
            "**Certains** : au moins 1, mais pas forcément tous (particulier)",
            "**Quelques** : similaire à 'certains' (au moins 1)",
          ],
        },
        {
          title: "Erreurs logiques fréquentes",
          content: "Pièges classiques à éviter absolument :",
          examples: [
            "**Inversion illicite** : Si A→B, on ne peut pas conclure B→A",
            "**Généralisation abusive** : 'Certains A sont B' ne permet pas de conclure 'Tous les A sont B'",
            "**Confusion nécessaire/suffisant** : 'Il faut A pour B' ≠ 'A suffit pour B'",
            "**Négation incorrecte** : 'Pas tous' ≠ 'Aucun'",
          ],
        },
        {
          title: "Méthode de résolution",
          content: "Approche systématique pour ne pas se tromper :",
          tips: [
            "1. Identifier clairement les prémisses et la question",
            "2. Dessiner des diagrammes de Venn si nécessaire",
            "3. Chercher les cas où la conclusion pourrait être fausse",
            "4. Éliminer les réponses manifestement incorrectes",
            "5. Vérifier que la conclusion découle NÉCESSAIREMENT des prémisses",
          ],
        },
      ],
      keyPoints: [
        "Une conclusion n'est valide que si elle est TOUJOURS vraie",
        "Attention à l'ordre des quantificateurs (tous vs certains)",
        "En cas de doute, cherchez un contre-exemple",
        "Les diagrammes de Venn sont vos meilleurs amis",
      ],
    },
  },

  // CALCUL
  {
    id: "calcul-mental",
    title: "Techniques de Calcul Mental Rapide",
    category: "Calcul",
    type: "Cours",
    duration: "15 min",
    content: {
      introduction: "Le calcul mental rapide est essentiel pour gagner du temps au TAGE MAGE. Voici les techniques les plus efficaces.",
      sections: [
        {
          title: "Multiplication rapide",
          content: "Astuces pour multiplier rapidement :",
          examples: [
            "**Par 5** : Multiplier par 10 puis diviser par 2",
            "**Par 9** : Multiplier par 10 puis soustraire le nombre (27×9 = 270-27 = 243)",
            "**Par 11** : Pour les nombres à 2 chiffres : 34×11 = 3(3+4)4 = 374",
            "**Nombres proches** : 23×27 = (25-2)(25+2) = 625-4 = 621",
          ],
        },
        {
          title: "Pourcentages éclair",
          content: "Calculez les pourcentages instantanément :",
          tips: [
            "**10%** : Diviser par 10 (décaler la virgule)",
            "**5%** : Moitié de 10%",
            "**15%** : 10% + 5%",
            "**20%** : Double de 10%",
            "**25%** : Diviser par 4",
            "**75%** : 3×25% ou 100%-25%",
          ],
        },
        {
          title: "Carrés et racines carrées",
          content: "Mémoriser les carrés courants et techniques de calcul :",
          examples: [
            "**Carrés de 1 à 20** : à connaître par cœur",
            "**Astuce (n)²** : Si vous connaissez (n-1)², alors n² = (n-1)² + (n-1) + n",
            "**Exemple** : 16² = 15² + 15 + 16 = 225 + 31 = 256",
            "**Racines approchées** : √2 ≈ 1.41, √3 ≈ 1.73, √5 ≈ 2.24",
          ],
        },
        {
          title: "Simplification de fractions",
          content: "Gagnez du temps en simplifiant intelligemment :",
          tips: [
            "Repérer les facteurs communs évidents (2, 3, 5)",
            "Utiliser la décomposition en facteurs premiers pour les nombres complexes",
            "Simplifier avant de multiplier ou diviser",
            "Convertir en décimaux si c'est plus simple",
          ],
        },
      ],
      keyPoints: [
        "Pratiquez ces techniques régulièrement jusqu'à l'automatisme",
        "Connaissez par cœur les carrés de 1 à 20",
        "Toujours chercher à simplifier avant de calculer",
        "Utilisez l'approximation pour éliminer des réponses",
      ],
    },
  },
  {
    id: "calcul-equations",
    title: "Résolution d'Équations",
    category: "Calcul",
    type: "Fiche",
    duration: "12 min",
    content: {
      introduction: "Les équations sont omniprésentes au TAGE MAGE. Maîtriser les méthodes de résolution vous fait gagner des points facilement.",
      sections: [
        {
          title: "Équations du premier degré",
          content: "Méthode systématique de résolution :",
          tips: [
            "1. Isoler les termes en x d'un côté",
            "2. Isoler les constantes de l'autre côté",
            "3. Simplifier l'équation",
            "4. Diviser pour obtenir x",
          ],
          examples: ["3x + 7 = 22 → 3x = 15 → x = 5"],
        },
        {
          title: "Équations du second degré",
          content: "Deux méthodes principales :",
          examples: [
            "**Factorisation** : x² - 5x + 6 = 0 → (x-2)(x-3) = 0 → x=2 ou x=3",
            "**Discriminant Δ** : Δ = b²-4ac",
            "Si Δ > 0 : deux solutions x = (-b ± √Δ) / 2a",
            "Si Δ = 0 : une solution x = -b / 2a",
            "Si Δ < 0 : aucune solution réelle",
          ],
        },
        {
          title: "Systèmes d'équations",
          content: "Techniques de résolution :",
          tips: [
            "**Substitution** : Exprimer une variable en fonction de l'autre",
            "**Combinaison** : Additionner ou soustraire les équations",
            "**Élimination** : Multiplier pour éliminer une variable",
          ],
        },
      ],
      keyPoints: [
        "Toujours vérifier votre solution en la réinjectant",
        "Identifiez le type d'équation avant de commencer",
        "Pour les systèmes, choisissez la méthode la plus rapide",
        "N'oubliez pas les solutions négatives",
      ],
    },
  },

  // CONDITIONS MINIMALES
  {
    id: "conditions-methode",
    title: "Méthodologie Conditions Minimales",
    category: "Conditions Minimales",
    type: "Guide",
    duration: "10 min",
    content: {
      introduction: "Les Conditions Minimales testent votre capacité à déterminer si l'information fournie est suffisante pour répondre à une question. C'est un exercice de logique pure.",
      sections: [
        {
          title: "Les 5 types de réponses",
          content: "Chaque question a exactement 5 réponses possibles :",
          examples: [
            "**A** : L'énoncé seul suffit",
            "**B** : La condition (1) seule suffit",
            "**C** : La condition (2) seule suffit",
            "**D** : Les deux conditions ensemble suffisent (mais aucune seule)",
            "**E** : Les informations sont insuffisantes même avec les deux conditions",
          ],
        },
        {
          title: "Méthode de résolution en 4 étapes",
          content: "Approche systématique pour ne jamais se tromper :",
          tips: [
            "**1. Analysez l'énoncé seul** : Peut-on répondre déjà ? → Réponse A",
            "**2. Testez la condition (1) seule** : Suffit-elle ? → Réponse B",
            "**3. Testez la condition (2) seule** : Suffit-elle ? → Réponse C",
            "**4. Combinez les deux conditions** : Ensemble suffisent-elles ? → D ou E",
          ],
        },
        {
          title: "Pièges classiques",
          content: "Erreurs fréquentes à éviter :",
          examples: [
            "Ne pas tester l'énoncé seul d'abord",
            "Oublier de tester chaque condition SÉPARÉMENT",
            "Se précipiter et combiner les conditions trop vite",
            "Confondre 'nécessaire' et 'suffisant'",
            "Ne pas considérer tous les cas possibles",
          ],
        },
        {
          title: "Astuce : la méthode d'élimination",
          content: "Éliminez progressivement les réponses impossibles :",
          tips: [
            "Si l'énoncé suffit → A (éliminez B, C, D, E)",
            "Si (1) suffit mais pas l'énoncé → B",
            "Si (2) suffit mais pas l'énoncé → C",
            "Si les deux sont nécessaires → D",
            "Si même ensemble elles ne suffisent pas → E",
          ],
        },
      ],
      keyPoints: [
        "TOUJOURS suivre les 4 étapes dans l'ordre",
        "Ne jamais sauter l'analyse de l'énoncé seul",
        "Tester chaque condition INDÉPENDAMMENT",
        "Vérifier que l'information est SUFFISANTE, pas juste utile",
      ],
    },
  },

  // EXPRESSION
  {
    id: "expression-accord",
    title: "Règles d'Accord du Participe Passé",
    category: "Expression",
    type: "Fiche",
    duration: "15 min",
    content: {
      introduction: "Le participe passé est l'une des principales difficultés de l'orthographe française. Maîtriser ses règles d'accord est essentiel.",
      sections: [
        {
          title: "Avec l'auxiliaire ÊTRE",
          content: "Règle simple : le participe s'accorde avec le sujet",
          examples: [
            "Elle est **venue** (sujet féminin singulier)",
            "Ils sont **partis** (sujet masculin pluriel)",
            "Les filles sont **arrivées** (sujet féminin pluriel)",
          ],
        },
        {
          title: "Avec l'auxiliaire AVOIR",
          content: "Le participe s'accorde avec le COD s'il est placé AVANT",
          examples: [
            "J'ai **mangé** une pomme (COD après → pas d'accord)",
            "La pomme que j'ai **mangée** (COD 'que' avant → accord)",
            "Les livres qu'il a **lus** (COD 'qu' avant → accord)",
          ],
          tips: [
            "Pour trouver le COD : poser la question 'quoi ?' ou 'qui ?'",
            "Attention au 'en' : COD → pas d'accord (Des pommes, j'en ai mangé)",
          ],
        },
        {
          title: "Verbes pronominaux",
          content: "Deux cas à distinguer :",
          examples: [
            "**Essentiellement pronominaux** → accord avec le sujet (Elle s'est **évanouie**)",
            "**Occasionnellement pronominaux** → chercher le COD (Elle s'est **lavée** vs Elle s'est **lavé** les mains)",
          ],
        },
        {
          title: "Cas particuliers",
          content: "Situations spéciales à connaître :",
          examples: [
            "**Verbes impersonnels** : invariable (Il a neigé, Les efforts qu'il a fallu)",
            "**Fait/laissé + infinitif** : invariable (Elle s'est fait/laissé convaincre)",
            "**COD = infinitif** : invariable (La chanson que j'ai entendu chanter)",
          ],
        },
      ],
      keyPoints: [
        "ÊTRE → accord avec le sujet (toujours)",
        "AVOIR → accord avec COD si placé avant",
        "Pronominaux → vérifier si essentiellement ou occasionnellement pronominal",
        "En cas de doute, chercher le COD et sa position",
      ],
    },
  },
  {
    id: "expression-homophones",
    title: "Homophones Grammaticaux",
    category: "Expression",
    type: "Fiche",
    duration: "10 min",
    content: {
      introduction: "Les homophones sont des mots qui se prononcent pareil mais s'écrivent différemment. Très testés au TAGE MAGE.",
      sections: [
        {
          title: "a / à",
          content: "Distinguer le verbe de la préposition :",
          examples: [
            "**a** = verbe avoir (on peut dire 'avait') → Il **a** faim",
            "**à** = préposition → Il va **à** Paris",
          ],
        },
        {
          title: "ou / où",
          content: "Conjonction vs pronom/adverbe :",
          examples: [
            "**ou** = conjonction (ou bien) → Thé **ou** café ?",
            "**où** = lieu/temps → **Où** vas-tu ? Le jour **où** je suis né",
          ],
        },
        {
          title: "et / est / es",
          content: "Conjonction vs verbe être :",
          examples: [
            "**et** = conjonction (on peut dire 'et puis') → Toi **et** moi",
            "**est** = verbe être 3e personne → Il **est** grand",
            "**es** = verbe être 2e personne → Tu **es** grand",
          ],
        },
        {
          title: "son / sont",
          content: "Déterminant possessif vs verbe être :",
          examples: [
            "**son** = déterminant (on peut dire 'mon/ton') → **Son** livre",
            "**sont** = verbe être (on peut dire 'étaient') → Ils **sont** là",
          ],
        },
        {
          title: "ce / se",
          content: "Déterminant vs pronom réfléchi :",
          examples: [
            "**ce** = déterminant démonstratif → **Ce** livre",
            "**se** = pronom réfléchi (avec verbe pronominal) → Il **se** lave",
          ],
        },
        {
          title: "leur / leurs",
          content: "Pronom vs déterminant possessif :",
          examples: [
            "**leur** = pronom (invariable) → Je **leur** parle",
            "**leur/leurs** = déterminant (s'accorde) → **Leur** maison, **leurs** enfants",
          ],
        },
      ],
      keyPoints: [
        "Toujours identifier la nature du mot (verbe, préposition, etc.)",
        "Utiliser les substitutions pour vérifier",
        "Attention au contexte de la phrase",
        "Réviser régulièrement ces paires",
      ],
    },
  },

  // COMPRÉHENSION
  {
    id: "comprehension-methode",
    title: "Méthode de Lecture Efficace",
    category: "Compréhension de Textes",
    type: "Guide",
    duration: "12 min",
    content: {
      introduction: "La compréhension de textes nécessite une méthode de lecture structurée pour répondre rapidement et correctement.",
      sections: [
        {
          title: "Les 4 types de questions",
          content: "Identifier le type de question pour adapter votre approche :",
          examples: [
            "**Idée principale** : De quoi parle le texte globalement ?",
            "**Détail spécifique** : Information précise mentionnée",
            "**Inférence** : Qu'est-ce qu'on peut déduire ?",
            "**Ton/intention** : Quelle est l'attitude de l'auteur ?",
          ],
        },
        {
          title: "Méthode de lecture en 3 phases",
          content: "Approche structurée pour maximiser la compréhension :",
          tips: [
            "**1. Lecture des questions** (30 sec) : Savoir quoi chercher",
            "**2. Lecture du texte** (2-3 min) : Lecture active avec annotation mentale",
            "**3. Réponse aux questions** (1-2 min) : Vérifier dans le texte",
          ],
        },
        {
          title: "Techniques de lecture rapide",
          content: "Comment lire efficacement sans perdre l'information :",
          examples: [
            "Repérer la structure : intro, développement, conclusion",
            "Identifier les mots de liaison (donc, mais, car, cependant...)",
            "Souligner mentalement les idées clés",
            "Noter les exemples qui illustrent les concepts",
          ],
        },
        {
          title: "Pièges à éviter",
          content: "Erreurs fréquentes en compréhension :",
          tips: [
            "Ne pas se fier uniquement à sa mémoire, revérifier dans le texte",
            "Éviter les réponses basées sur vos connaissances personnelles",
            "Attention aux pièges de formulation (presque identique mais différent)",
            "Ne pas confondre 'ce qui est dit' et 'ce qu'on peut déduire'",
          ],
        },
      ],
      keyPoints: [
        "Toujours lire les questions AVANT le texte",
        "Chercher les réponses dans le texte, pas dans vos connaissances",
        "Identifier la structure du texte dès le début",
        "Gérer votre temps : 3-4 min maximum par texte",
      ],
    },
  },

  // RÉSOLUTION DE PROBLÈMES
  {
    id: "problemes-vitesse",
    title: "Problèmes de Vitesse et Distance",
    category: "Résolution de Problèmes",
    type: "Cours",
    duration: "15 min",
    content: {
      introduction: "Les problèmes de vitesse-distance-temps sont très fréquents. Maîtriser la formule de base et ses variations est essentiel.",
      sections: [
        {
          title: "La formule fondamentale",
          content: "Relation entre distance, vitesse et temps :",
          examples: [
            "**Distance = Vitesse × Temps**",
            "**Vitesse = Distance ÷ Temps**",
            "**Temps = Distance ÷ Vitesse**",
            "Unités : km/h, m/s, etc. (toujours vérifier la cohérence)",
          ],
        },
        {
          title: "Problèmes de rattrapage",
          content: "Quand deux mobiles se déplacent l'un vers l'autre ou se poursuivent :",
          examples: [
            "**Même direction** : Vitesse relative = V₁ - V₂",
            "**Directions opposées** : Vitesse d'approche = V₁ + V₂",
            "**Exemple** : A roule à 80 km/h, B à 60 km/h, écart initial 40 km → Temps de rattrapage = 40/(80-60) = 2h",
          ],
        },
        {
          title: "Vitesse moyenne",
          content: "Attention, ce n'est PAS la moyenne des vitesses !",
          examples: [
            "**Formule** : Vitesse moyenne = Distance totale ÷ Temps total",
            "**Piège** : 60 km à 30 km/h puis 60 km à 60 km/h ≠ vitesse moyenne de 45 km/h",
            "**Correct** : Temps = 2h + 1h = 3h, Distance = 120 km → V moy = 40 km/h",
          ],
        },
        {
          title: "Conversions d'unités",
          content: "Convertir rapidement entre unités :",
          tips: [
            "**km/h → m/s** : diviser par 3.6 (ou ×5/18)",
            "**m/s → km/h** : multiplier par 3.6 (ou ×18/5)",
            "**Exemple** : 72 km/h = 72÷3.6 = 20 m/s",
          ],
        },
      ],
      keyPoints: [
        "Toujours identifier D, V et T dans l'énoncé",
        "Vérifier la cohérence des unités",
        "Pour la vitesse moyenne, calculer temps total et distance totale",
        "Dessiner un schéma si le problème est complexe",
      ],
    },
  },
  {
    id: "problemes-pourcentages",
    title: "Problèmes de Pourcentages",
    category: "Résolution de Problèmes",
    type: "Cours",
    duration: "12 min",
    content: {
      introduction: "Les pourcentages sont omniprésents dans les problèmes du TAGE MAGE. Voici toutes les techniques à maîtriser.",
      sections: [
        {
          title: "Calculs de base",
          content: "Les trois types de calculs de pourcentages :",
          examples: [
            "**Calculer x% de N** : (x/100) × N = 0.x × N",
            "**Quel % représente A de B ?** : (A/B) × 100",
            "**Trouver le total sachant x%** : Si x% = A, alors 100% = A × (100/x)",
          ],
        },
        {
          title: "Augmentations et réductions",
          content: "Attention à bien identifier la base de calcul :",
          examples: [
            "**Augmentation de x%** : Valeur × (1 + x/100)",
            "**Réduction de x%** : Valeur × (1 - x/100)",
            "**Exemple** : 200€ + 20% = 200 × 1.20 = 240€",
            "**Réduction puis augmentation** : 100 × 0.8 × 1.2 = 96 (pas 100 !)",
          ],
        },
        {
          title: "Variations successives",
          content: "Pourcentages appliqués les uns après les autres :",
          tips: [
            "Ne JAMAIS additionner les pourcentages",
            "Multiplier les coefficients : +20% puis +10% = ×1.20 × 1.10 = ×1.32 = +32%",
            "Pour trouver le pourcentage inverse : si +20% = ×1.2, alors /1.2 = -16.67%",
          ],
        },
        {
          title: "Évolutions en pourcentage",
          content: "Calculer une variation :",
          examples: [
            "**Formule** : ((Nouvelle valeur - Ancienne valeur) / Ancienne valeur) × 100",
            "**Exemple** : De 80 à 100 → ((100-80)/80) × 100 = 25% d'augmentation",
            "**Attention** : De 100 à 80 → ((80-100)/100) × 100 = -20% (pas -25% !)",
          ],
        },
      ],
      keyPoints: [
        "Toujours identifier la base de calcul (100% = quoi ?)",
        "Pour variations successives, multiplier les coefficients",
        "Augmenter de x% puis réduire de x% ne redonne PAS la valeur initiale",
        "Bien distinguer 'x% de plus' et 'x% en plus'",
      ],
    },
  },

  // GUIDES MÉTHODOLOGIQUES
  {
    id: "strategie-globale",
    title: "Stratégie Globale TAGE MAGE",
    category: "Méthodologie",
    type: "Guide",
    duration: "15 min",
    content: {
      introduction: "Le TAGE MAGE n'est pas qu'une question de connaissances, c'est aussi (surtout !) une question de stratégie. Voici comment maximiser votre score.",
      sections: [
        {
          title: "Structure du test",
          content: "Comprendre l'épreuve pour mieux l'aborder :",
          examples: [
            "**6 sous-tests** de 15 questions chacun (90 questions total)",
            "**2 heures** au total (20 minutes par sous-test)",
            "**QCM** : 1 bonne réponse parmi 5 propositions",
            "**Barème** : +4 bonne réponse, -1 mauvaise réponse, 0 pas de réponse",
          ],
        },
        {
          title: "Gestion du temps optimale",
          content: "Comment répartir vos 120 minutes :",
          tips: [
            "**20 min par sous-test** : ne dépassez jamais cette limite",
            "**80 secondes par question** en moyenne",
            "**Répondez d'abord aux questions faciles**, revenez aux difficiles après",
            "**Gardez 2-3 min** en fin de sous-test pour vérifier",
          ],
        },
        {
          title: "Stratégie de réponse",
          content: "Quand répondre, quand passer :",
          examples: [
            "**Sûr à 90%+** : Répondez immédiatement",
            "**Hésitation entre 2** : Éliminez puis choisissez",
            "**Aucune idée** : Ne répondez PAS (0 vaut mieux que -1)",
            "**Calcul long** : Marquez la question, revenez après si temps",
          ],
        },
        {
          title: "Ordre de traitement des sous-tests",
          content: "Commencez par vos points forts :",
          tips: [
            "Identifiez vos 2-3 sous-tests favoris à l'entraînement",
            "Commencez par ceux-ci pour prendre confiance",
            "Visez 80-90% de bonnes réponses sur vos points forts",
            "Sur vos points faibles, soyez sélectif (50-60% suffit)",
          ],
        },
        {
          title: "Le jour J",
          content: "Préparation et état d'esprit :",
          examples: [
            "**Veille** : Révisions légères, pas de marathon (repos !)",
            "**Matin** : Petit-déjeuner complet, arrivez 20 min en avance",
            "**Pendant** : Restez concentré, ne paniquez pas sur un sous-test raté",
            "**Mental** : Chaque question est indépendante, tournez la page",
          ],
        },
      ],
      keyPoints: [
        "Le temps est votre pire ennemi : entraînez-vous chronométré",
        "Ne répondez que si vous êtes relativement sûr",
        "Un bon score = peu d'erreurs, pas nécessairement toutes les réponses",
        "Restez flexible : adaptez votre stratégie selon votre avancement",
      ],
    },
  },
  {
    id: "gestion-temps",
    title: "Gestion du Temps Avancée",
    category: "Méthodologie",
    type: "Guide",
    duration: "10 min",
    content: {
      introduction: "Optimiser sa gestion du temps est LA clé pour un bon score au TAGE MAGE. Voici une méthode éprouvée.",
      sections: [
        {
          title: "Chronométrage par sous-test",
          content: "Stratégie de découpage du temps :",
          tips: [
            "**Minutes 0-15** : Questions 1-12 (les plus accessibles)",
            "**Minutes 15-18** : Questions 13-15 (plus difficiles, soyez sélectif)",
            "**Minutes 18-20** : Retour sur questions marquées + vérification",
          ],
        },
        {
          title: "La méthode des 3 passes",
          content: "Technique éprouvée pour maximiser le score :",
          examples: [
            "**Passe 1** : Questions faciles/moyennes (12 min pour 10-12 questions)",
            "**Passe 2** : Questions difficiles mais faisables (5 min pour 2-3 questions)",
            "**Passe 3** : Révision et questions marquées (3 min)",
          ],
        },
        {
          title: "Signaux d'alarme",
          content: "Quand abandonner une question :",
          examples: [
            "Vous lisez l'énoncé 3 fois sans comprendre → Passez",
            "Le calcul prend plus de 2 minutes → Marquez et revenez",
            "Vous hésitez entre 3+ réponses → Ne répondez pas",
            "Il reste moins de 5 min et 3+ questions → Soyez sélectif",
          ],
        },
        {
          title: "Entraînement spécifique",
          content: "Comment s'entraîner à gérer le temps :",
          tips: [
            "Faites tous vos exercices chronométrés (pas de pratique 'hors temps')",
            "Simulez la fatigue : 2h complètes régulièrement",
            "Analysez votre temps par question à chaque entraînement",
            "Identifiez vos types de questions 'chronophages'",
          ],
        },
      ],
      keyPoints: [
        "20 minutes par sous-test = règle absolue",
        "Mieux vaut 12 réponses sûres que 15 réponses hasardeuses",
        "Toujours garder 2-3 minutes de vérification",
        "S'entraîner chronométré est NON NÉGOCIABLE",
      ],
    },
  },
  {
    id: "gestion-stress",
    title: "Gestion du Stress",
    category: "Méthodologie",
    type: "Guide",
    duration: "12 min",
    content: {
      introduction: "Le stress peut faire perdre 20-30 points au TAGE MAGE. Apprenez à le gérer pour performer à votre meilleur niveau.",
      sections: [
        {
          title: "Avant le test",
          content: "Préparation mentale dans les jours précédents :",
          tips: [
            "**J-7 à J-2** : Entraînement régulier, confiance progressive",
            "**J-1** : Pas de marathon, révisions légères, activité relaxante",
            "**Soir J-1** : Préparez tout (matériel, trajet), couchez-vous tôt",
            "**Matin J** : Réveil calme, petit-déjeuner complet, musique apaisante",
          ],
        },
        {
          title: "Pendant le test",
          content: "Techniques pour rester calme et concentré :",
          examples: [
            "**Respiration 4-7-8** : Inspirez 4s, retenez 7s, expirez 8s",
            "**Reset mental** : Entre chaque sous-test, fermez les yeux 20 secondes",
            "**Ancrage** : Concentrez-vous sur vos pieds au sol (présence)",
            "**Affirmations** : 'Je suis préparé', 'Une question à la fois'",
          ],
        },
        {
          title: "Gérer un sous-test raté",
          content: "Comment rebondir après une mauvaise séquence :",
          tips: [
            "Acceptez : un sous-test ne fait pas tout (seulement 1/6 du score)",
            "Tournez la page : concentrez-vous sur le suivant",
            "Respirez : 3 grandes respirations avant de commencer le suivant",
            "Perspective : vous avez encore 5 sous-tests pour briller",
          ],
        },
        {
          title: "Signaux physiques du stress",
          content: "Reconnaître et agir :",
          examples: [
            "**Mains moites** : Essuyez, respirez profondément",
            "**Cœur qui s'accélère** : Respiration lente et profonde",
            "**Esprit qui s'emballe** : Recentrez-vous sur la question actuelle",
            "**Tension musculaire** : Relâchez épaules et mâchoires",
          ],
        },
        {
          title: "Mental de champion",
          content: "État d'esprit pour performer :",
          tips: [
            "Vous êtes préparé : vous avez fait le travail",
            "Une question = un nouveau départ",
            "L'objectif n'est pas 100%, c'est votre meilleur score",
            "Le test mesure votre raisonnement, pas votre valeur",
          ],
        },
      ],
      keyPoints: [
        "La préparation mentale commence plusieurs jours avant",
        "Respirez profondément dès les premiers signes de stress",
        "Un mauvais sous-test ne gâche pas tout le test",
        "Restez dans le moment présent : une question à la fois",
      ],
    },
  },

  // NOUVEAUX COURS - RAISONNEMENT LOGIQUE
  {
    id: "logic-analogies",
    title: "Les Analogies Verbales",
    category: "Raisonnement Logique",
    type: "Fiche",
    duration: "8 min",
    content: {
      introduction: "Les analogies verbales testent votre capacité à identifier des relations logiques entre les mots.",
      sections: [
        {
          title: "Types de relations courantes",
          content: "Relations à reconnaître rapidement :",
          examples: [
            "**Synonymie** : content/joyeux, rapide/véloce",
            "**Antonymie** : chaud/froid, grand/petit",
            "**Partie/Tout** : roue/voiture, page/livre",
            "**Cause/Effet** : feu/chaleur, pluie/humidité",
            "**Fonction** : couteau/couper, stylo/écrire",
            "**Genre/Espèce** : fruit/pomme, animal/chien",
          ],
        },
        {
          title: "Méthodologie de résolution",
          content: "Approche systématique :",
          tips: [
            "1. Identifier la relation entre les 2 premiers mots",
            "2. Formuler cette relation en une phrase claire",
            "3. Appliquer cette même relation aux options",
            "4. Éliminer les réponses qui ne correspondent pas",
          ],
        },
        {
          title: "Pièges à éviter",
          content: "Erreurs fréquentes :",
          examples: [
            "Ne pas confondre relation proche et relation identique",
            "Attention aux faux amis (mots qui semblent liés mais ne le sont pas)",
            "Ne pas se fier uniquement au domaine sémantique",
          ],
        },
      ],
      keyPoints: [
        "Formulez toujours la relation en une phrase",
        "La relation doit être exactement la même",
        "Éliminez d'abord les réponses impossibles",
      ],
    },
  },
  {
    id: "logic-matrices",
    title: "Matrices et Tableaux Logiques",
    category: "Raisonnement Logique",
    type: "Cours",
    duration: "14 min",
    content: {
      introduction: "Les matrices logiques nécessitent de repérer des patterns en 2 dimensions (lignes et colonnes).",
      sections: [
        {
          title: "Règles horizontales",
          content: "Patterns qui se répètent sur les lignes :",
          examples: [
            "**Progression** : Chaque élément de la ligne suit une suite logique",
            "**Rotation** : Les éléments tournent d'une certaine manière",
            "**Combinaison** : L3 = L1 + L2 ou L1 - L2",
          ],
        },
        {
          title: "Règles verticales",
          content: "Patterns qui se répètent sur les colonnes :",
          tips: [
            "Vérifiez si la règle des lignes s'applique aussi aux colonnes",
            "Parfois, lignes et colonnes ont des règles différentes",
            "La case manquante peut être déterminée par ligne OU colonne",
          ],
        },
        {
          title: "Règles diagonales",
          content: "Patterns plus complexes :",
          examples: [
            "Diagonale principale (haut-gauche à bas-droite)",
            "Diagonale secondaire",
            "Symétrie centrale ou axiale",
          ],
        },
      ],
      keyPoints: [
        "Testez d'abord les règles horizontales",
        "Vérifiez ensuite les règles verticales",
        "Si bloqué, cherchez des symétries",
        "Utilisez l'élimination pour les cas complexes",
      ],
    },
  },
  {
    id: "logic-ensembles",
    title: "Raisonnement sur les Ensembles",
    category: "Raisonnement Logique",
    type: "Fiche",
    duration: "10 min",
    content: {
      introduction: "Les problèmes d'ensembles testent votre compréhension des relations d'inclusion, intersection et complémentarité.",
      sections: [
        {
          title: "Opérations sur les ensembles",
          content: "Opérations fondamentales à maîtriser :",
          examples: [
            "**Union (A ∪ B)** : Tous les éléments de A ou B",
            "**Intersection (A ∩ B)** : Éléments communs à A et B",
            "**Complémentaire (Ā)** : Éléments qui ne sont pas dans A",
            "**Différence (A - B)** : Éléments de A qui ne sont pas dans B",
          ],
        },
        {
          title: "Diagrammes de Venn",
          content: "Représentation visuelle indispensable :",
          tips: [
            "Dessinez toujours un diagramme pour visualiser",
            "Identifiez les zones : A seul, B seul, A∩B, hors des deux",
            "Utilisez les nombres donnés pour remplir chaque zone",
          ],
        },
        {
          title: "Problèmes de dénombrement",
          content: "Formules essentielles :",
          examples: [
            "**|A ∪ B| = |A| + |B| - |A ∩ B|**",
            "Si les ensembles sont disjoints : |A ∪ B| = |A| + |B|",
            "Complément : |Ā| = Total - |A|",
          ],
        },
      ],
      keyPoints: [
        "Toujours dessiner un diagramme de Venn",
        "Attention à ne pas compter deux fois les intersections",
        "Vérifiez que votre résultat est cohérent avec le total",
      ],
    },
  },
  {
    id: "logic-combinatoire",
    title: "Introduction à la Combinatoire",
    category: "Raisonnement Logique",
    type: "Cours",
    duration: "16 min",
    content: {
      introduction: "La combinatoire permet de compter le nombre de façons d'organiser ou de choisir des éléments.",
      sections: [
        {
          title: "Principe multiplicatif",
          content: "Base de tous les dénombrements :",
          examples: [
            "Si action 1 : n possibilités et action 2 : m possibilités",
            "Alors total = n × m possibilités",
            "**Exemple** : 4 chemises et 3 pantalons = 4 × 3 = 12 tenues",
          ],
        },
        {
          title: "Arrangements et Permutations",
          content: "Ordre compte :",
          examples: [
            "**Permutations de n éléments** : n! = n × (n-1) × ... × 1",
            "**Arrangements de k parmi n** : A(n,k) = n!/(n-k)!",
            "**Exemple** : Podium de 3 sur 10 coureurs = 10×9×8 = 720",
          ],
        },
        {
          title: "Combinaisons",
          content: "Ordre ne compte pas :",
          examples: [
            "**Formule** : C(n,k) = n! / (k! × (n-k)!)",
            "**Exemple** : Choisir 3 élèves parmi 10 = C(10,3) = 120",
            "**Propriété** : C(n,k) = C(n, n-k)",
          ],
        },
        {
          title: "Quand utiliser quoi ?",
          content: "Différencier les situations :",
          tips: [
            "**Ordre important + tous différents** → Arrangements",
            "**Ordre important + répétitions possibles** → Principe multiplicatif",
            "**Ordre pas important** → Combinaisons",
            "**Question clé** : Est-ce que ABC ≠ BAC ? Si oui, ordre compte",
          ],
        },
      ],
      keyPoints: [
        "Identifiez si l'ordre compte ou non",
        "Vérifiez si les répétitions sont possibles",
        "Connaître par cœur : n!, C(n,2) = n(n-1)/2",
        "En cas de doute, listez quelques cas pour identifier le pattern",
      ],
    },
  },

  // NOUVEAUX COURS - CALCUL
  {
    id: "calcul-fractions",
    title: "Maîtrise des Fractions",
    category: "Calcul",
    type: "Cours",
    duration: "13 min",
    content: {
      introduction: "Les fractions sont omniprésentes dans les calculs TAGE MAGE. Maîtriser les opérations vous fera gagner un temps précieux.",
      sections: [
        {
          title: "Addition et soustraction",
          content: "Mettre au même dénominateur :",
          examples: [
            "**Même dénominateur** : 2/5 + 1/5 = 3/5",
            "**Dénominateurs différents** : 1/3 + 1/4 = 4/12 + 3/12 = 7/12",
            "**Astuce** : Pour a/b ± c/d = (ad ± bc) / bd",
          ],
        },
        {
          title: "Multiplication et division",
          content: "Opérations directes :",
          examples: [
            "**Multiplication** : (a/b) × (c/d) = (a×c) / (b×d)",
            "**Division** : (a/b) ÷ (c/d) = (a/b) × (d/c)",
            "**Simplifiez avant** de calculer pour éviter les grands nombres",
          ],
        },
        {
          title: "Comparaison de fractions",
          content: "Techniques rapides :",
          tips: [
            "**Même dénominateur** : Comparez les numérateurs",
            "**Même numérateur** : La plus petite est celle avec le plus grand dénominateur",
            "**Produits en croix** : a/b < c/d si ad < bc",
            "**Conversion décimale** : Si calcul mental facile",
          ],
        },
        {
          title: "Fractions de fractions",
          content: "Simplification de fractions complexes :",
          examples: [
            "(2/3) / (4/5) = (2/3) × (5/4) = 10/12 = 5/6",
            "Multipliez haut et bas par le même nombre pour simplifier",
          ],
        },
      ],
      keyPoints: [
        "Toujours simplifier avant de calculer",
        "Connaître les équivalents décimaux courants (1/2, 1/3, 1/4, 1/5)",
        "Pour diviser, multipliez par l'inverse",
        "Vérifiez la cohérence du résultat",
      ],
    },
  },
  {
    id: "calcul-puissances",
    title: "Puissances et Racines",
    category: "Calcul",
    type: "Fiche",
    duration: "11 min",
    content: {
      introduction: "Les puissances et racines apparaissent régulièrement. Connaître les propriétés permet de simplifier rapidement.",
      sections: [
        {
          title: "Propriétés des puissances",
          content: "Règles de calcul fondamentales :",
          examples: [
            "**a^m × a^n = a^(m+n)**",
            "**a^m ÷ a^n = a^(m-n)**",
            "**(a^m)^n = a^(m×n)**",
            "**a^0 = 1** (pour a ≠ 0)",
            "**a^(-n) = 1/a^n**",
          ],
        },
        {
          title: "Puissances de 2",
          content: "À connaître par cœur :",
          examples: [
            "2^1 = 2, 2^2 = 4, 2^3 = 8, 2^4 = 16, 2^5 = 32",
            "2^6 = 64, 2^7 = 128, 2^8 = 256, 2^9 = 512, 2^10 = 1024",
          ],
        },
        {
          title: "Racines carrées",
          content: "Propriétés et simplification :",
          examples: [
            "**√(a×b) = √a × √b**",
            "**√(a/b) = √a / √b**",
            "**√(a²) = |a|** (valeur absolue)",
            "**Simplification** : √48 = √(16×3) = 4√3",
          ],
        },
        {
          title: "Racines à connaître",
          content: "Valeurs courantes :",
          tips: [
            "√1=1, √4=2, √9=3, √16=4, √25=5, √36=6",
            "√49=7, √64=8, √81=9, √100=10, √121=11, √144=12",
            "√2 ≈ 1.41, √3 ≈ 1.73, √5 ≈ 2.24",
          ],
        },
      ],
      keyPoints: [
        "Connaître les puissances de 2 jusqu'à 2^10",
        "Simplifier les racines en factorisant",
        "Attention : √(a+b) ≠ √a + √b",
        "Utiliser les propriétés pour simplifier avant de calculer",
      ],
    },
  },
  {
    id: "calcul-proportionnalite",
    title: "Proportionnalité et Échelles",
    category: "Calcul",
    type: "Fiche",
    duration: "9 min",
    content: {
      introduction: "La proportionnalité est un concept clé qui revient dans de nombreux problèmes.",
      sections: [
        {
          title: "Propriété fondamentale",
          content: "Égalité des rapports :",
          examples: [
            "Si a/b = c/d, alors ad = bc (produits en croix)",
            "**Exemple** : Si 3 kg coûtent 12€, 5 kg coûtent : 5×12/3 = 20€",
          ],
        },
        {
          title: "Tableaux de proportionnalité",
          content: "Méthode du coefficient de proportionnalité :",
          tips: [
            "Identifier le coefficient : y = k × x",
            "Une fois k trouvé, tous les autres rapports sont y/x = k",
            "Méthode alternative : produit en croix",
          ],
        },
        {
          title: "Échelles et plans",
          content: "Applications pratiques :",
          examples: [
            "**Échelle 1/n** : 1 cm sur le plan = n cm en réalité",
            "**Distance réelle** = Distance plan × n",
            "**Distance plan** = Distance réelle / n",
          ],
        },
        {
          title: "Vitesse comme proportionnalité",
          content: "Lien avec distance et temps :",
          examples: [
            "Distance proportionnelle au temps (vitesse constante)",
            "Si double temps → double distance",
            "Si moitié vitesse → double temps pour même distance",
          ],
        },
      ],
      keyPoints: [
        "Vérifiez toujours la proportionnalité avant d'appliquer les formules",
        "Produits en croix = méthode universelle",
        "Attention aux situations non proportionnelles",
        "Identifiez le coefficient multiplicateur",
      ],
    },
  },
  {
    id: "calcul-geometrie",
    title: "Formules Géométriques Essentielles",
    category: "Calcul",
    type: "Cours",
    duration: "14 min",
    content: {
      introduction: "Les problèmes de géométrie nécessitent de connaître les formules d'aires, périmètres et volumes.",
      sections: [
        {
          title: "Périmètres",
          content: "Formules des figures planes :",
          examples: [
            "**Carré** : P = 4c (c = côté)",
            "**Rectangle** : P = 2(L + l)",
            "**Cercle** : P = 2πr = πd (périmètre = circonférence)",
            "**Triangle** : P = a + b + c",
          ],
        },
        {
          title: "Aires",
          content: "Surfaces des figures courantes :",
          examples: [
            "**Carré** : A = c²",
            "**Rectangle** : A = L × l",
            "**Triangle** : A = (base × hauteur) / 2",
            "**Cercle** : A = πr²",
            "**Trapèze** : A = ((grande base + petite base) × hauteur) / 2",
          ],
        },
        {
          title: "Volumes",
          content: "Solides usuels :",
          examples: [
            "**Cube** : V = c³",
            "**Pavé** : V = L × l × h",
            "**Cylindre** : V = πr²h",
            "**Sphère** : V = (4/3)πr³",
            "**Cône** : V = (1/3)πr²h",
          ],
        },
        {
          title: "Théorème de Pythagore",
          content: "Triangle rectangle :",
          examples: [
            "**a² + b² = c²** (c = hypoténuse)",
            "Vérifiez si c'est un triangle rectangle célèbre : 3-4-5, 5-12-13",
          ],
        },
      ],
      keyPoints: [
        "Connaître π ≈ 3.14 ou 22/7",
        "Distinguer périmètre (1D), aire (2D) et volume (3D)",
        "Vérifier la cohérence des unités",
        "Dessiner un schéma pour visualiser",
      ],
    },
  },

  // NOUVEAUX COURS - EXPRESSION
  {
    id: "expression-conjugaison",
    title: "Temps et Modes Verbaux",
    category: "Expression",
    type: "Fiche",
    duration: "12 min",
    content: {
      introduction: "La conjugaison française comporte de nombreux pièges. Voici les erreurs les plus fréquentes au TAGE MAGE.",
      sections: [
        {
          title: "Concordance des temps",
          content: "Accord entre proposition principale et subordonnée :",
          examples: [
            "**Principale au présent** → Subordonnée : présent, futur, passé composé",
            "**Principale au passé** → Subordonnée : imparfait, plus-que-parfait",
            "Je pense qu'il **viendra** ✓ / Je pensais qu'il **viendrait** ✓",
          ],
        },
        {
          title: "Subjonctif ou indicatif ?",
          content: "Modes après certaines expressions :",
          examples: [
            "**Subjonctif** : Il faut que, bien que, pour que, avant que, jusqu'à ce que",
            "**Indicatif** : Il est probable que, après que, pendant que",
            "**Piège** : 'après que' + indicatif (même si subjonctif courant à l'oral)",
          ],
        },
        {
          title: "Futur ou conditionnel ?",
          content: "Différencier les deux modes :",
          tips: [
            "**Futur** : Fait certain, prévision (Je **viendrai** demain)",
            "**Conditionnel** : Hypothèse, politesse (Je **viendrais** si je pouvais)",
            "Dans 'si' + imparfait → conditionnel (Si j'avais, je ferais)",
          ],
        },
        {
          title: "Verbes irréguliers courants",
          content: "Formes à connaître :",
          examples: [
            "**Faire** : je fais, tu fais, il fait, nous faisons",
            "**Voir** : je vois, nous voyons (pas 'voyons')",
            "**Prendre** : je prends, tu prends, il prend, nous prenons",
          ],
        },
      ],
      keyPoints: [
        "Vérifiez la concordance des temps",
        "Après 'que', déterminez si subjonctif ou indicatif",
        "Distinguez futur (certitude) et conditionnel (hypothèse)",
        "Connaissez les irréguliers fréquents",
      ],
    },
  },
  {
    id: "expression-vocabulaire",
    title: "Vocabulaire et Nuances",
    category: "Expression",
    type: "Fiche",
    duration: "10 min",
    content: {
      introduction: "Le choix du mot juste est crucial. Apprenez à distinguer les termes proches.",
      sections: [
        {
          title: "Paronymes fréquents",
          content: "Mots qui se ressemblent mais ont des sens différents :",
          examples: [
            "**Éminent / Imminent** : remarquable / qui va se produire",
            "**Allocation / Allocution** : aide financière / discours",
            "**Effraction / Infraction** : entrée par force / violation d'une règle",
            "**Prolongation / Prolongement** : extension dans le temps / dans l'espace",
          ],
        },
        {
          title: "Confusions courantes",
          content: "Paires de mots souvent mélangés :",
          examples: [
            "**Davantage / D'avantage** : plus / un avantage supplémentaire",
            "**Plutôt / Plus tôt** : de préférence / avant dans le temps",
            "**Quoique / Quoi que** : bien que / quelle que soit la chose",
          ],
        },
        {
          title: "Registres de langue",
          content: "Adapter le vocabulaire au contexte :",
          tips: [
            "**Soutenu** : s'enquérir, quérir, se départir",
            "**Courant** : demander, chercher, abandonner",
            "**Familier** : causer, bosser, se magner",
          ],
        },
      ],
      keyPoints: [
        "Connaître les paronymes fréquents",
        "Attention au contexte pour le bon mot",
        "Privilégier le registre courant ou soutenu",
        "En cas de doute, éliminer les options extrêmes",
      ],
    },
  },
  {
    id: "expression-syntaxe",
    title: "Constructions Syntaxiques",
    category: "Expression",
    type: "Cours",
    duration: "13 min",
    content: {
      introduction: "La syntaxe française impose des règles strictes de construction de phrases.",
      sections: [
        {
          title: "Prépositions après les verbes",
          content: "Chaque verbe a sa préposition :",
          examples: [
            "**à** : s'intéresser à, participer à, tenir à",
            "**de** : se souvenir de, se méfier de, avoir besoin de",
            "**aucune** : attendre (pas 'attendre après')",
          ],
        },
        {
          title: "Compléments du verbe",
          content: "COD, COI et compléments circonstanciels :",
          tips: [
            "**COD** : verbe + quoi/qui ? (Je vois **la maison**)",
            "**COI** : verbe + à qui/à quoi ? (Je parle **à Marie**)",
            "**CC** : où, quand, comment, pourquoi",
          ],
        },
        {
          title: "Propositions relatives",
          content: "Qui, que, dont, où :",
          examples: [
            "**Qui** : sujet de la relative (L'homme **qui** parle)",
            "**Que** : COD de la relative (Le livre **que** je lis)",
            "**Dont** : complément du nom (La maison **dont** le toit)",
            "**Où** : complément de lieu/temps (Le jour **où** je suis né)",
          ],
        },
      ],
      keyPoints: [
        "Chaque verbe a sa préposition spécifique",
        "Identifier la fonction du pronom relatif",
        "Vérifier la construction attendue après le verbe",
        "Attention aux anglicismes syntaxiques",
      ],
    },
  },
  {
    id: "expression-ponctuation",
    title: "Règles de Ponctuation",
    category: "Expression",
    type: "Fiche",
    duration: "8 min",
    content: {
      introduction: "La ponctuation structure le texte et change parfois complètement le sens.",
      sections: [
        {
          title: "Virgules et sens",
          content: "Placement crucial :",
          examples: [
            "**Restrictif** : Les enfants qui jouent sont heureux (seulement ceux qui jouent)",
            "**Descriptif** : Les enfants, qui jouent, sont heureux (tous les enfants jouent)",
          ],
        },
        {
          title: "Deux-points",
          content: "Introduit une explication, énumération, citation :",
          tips: [
            "Après les deux-points, pas de majuscule (sauf citation)",
            "Un seul deux-points par phrase",
          ],
        },
        {
          title: "Point-virgule",
          content: "Entre deux propositions liées :",
          examples: [
            "Plus fort que la virgule, plus faible que le point",
            "Utilisé pour séparer des éléments d'énumération complexes",
          ],
        },
      ],
      keyPoints: [
        "Virgule change le sens selon sa position",
        "Pas de majuscule après deux-points (sauf exception)",
        "Point-virgule = lien logique entre propositions",
      ],
    },
  },

  // NOUVEAUX COURS - CONDITIONS MINIMALES
  {
    id: "conditions-algebre",
    title: "Conditions Minimales en Algèbre",
    category: "Conditions Minimales",
    type: "Fiche",
    duration: "11 min",
    content: {
      introduction: "Les questions algébriques en Conditions Minimales nécessitent de compter les équations et inconnues.",
      sections: [
        {
          title: "Règle de base",
          content: "Inconnues et équations :",
          tips: [
            "**n inconnues nécessitent n équations indépendantes**",
            "2 inconnues (x, y) → besoin de 2 équations",
            "1 inconnue → 1 équation suffit",
          ],
        },
        {
          title: "Équations indépendantes",
          content: "Attention aux équations redondantes :",
          examples: [
            "x + y = 5 et 2x + 2y = 10 → **même équation** (redondante)",
            "x + y = 5 et x - y = 1 → **indépendantes** ✓",
          ],
        },
        {
          title: "Stratégie de résolution",
          content: "Méthode pas à pas :",
          tips: [
            "1. Compter les inconnues dans la question",
            "2. Vérifier si l'énoncé donne des équations",
            "3. Chaque condition = potentiellement 1 équation",
            "4. Vérifier l'indépendance des équations",
          ],
        },
      ],
      keyPoints: [
        "Compter inconnues ET équations indépendantes",
        "Vérifier que les équations sont vraiment différentes",
        "Parfois une condition donne 2 équations (système)",
      ],
    },
  },
  {
    id: "conditions-geometrie",
    title: "Conditions Minimales en Géométrie",
    category: "Conditions Minimales",
    type: "Fiche",
    duration: "10 min",
    content: {
      introduction: "Les problèmes géométriques nécessitent de vérifier si on a assez d'informations pour calculer.",
      sections: [
        {
          title: "Triangles",
          content: "Informations suffisantes :",
          examples: [
            "**3 côtés** → tout calculable",
            "**2 côtés + angle entre eux** → tout calculable",
            "**1 côté + 2 angles** → tout calculable (somme = 180°)",
            "**2 côtés sans angle** → INSUFFISANT",
          ],
        },
        {
          title: "Cercles",
          content: "Rayon ou diamètre suffit :",
          tips: [
            "Connaître r → calculer périmètre et aire",
            "Connaître périmètre → calculer r et aire",
            "Connaître aire → calculer r et périmètre",
          ],
        },
        {
          title: "Volumes",
          content: "Besoin de toutes les dimensions :",
          examples: [
            "**Cube** : 1 arête suffit",
            "**Pavé** : besoin de L, l, h (3 dimensions)",
            "**Cylindre** : besoin de r et h",
          ],
        },
      ],
      keyPoints: [
        "Identifiez la formule nécessaire",
        "Comptez les inconnues dans la formule",
        "Vérifiez si les conditions donnent ces valeurs",
      ],
    },
  },
  {
    id: "conditions-logique",
    title: "Pièges Logiques en Conditions Minimales",
    category: "Conditions Minimales",
    type: "Guide",
    duration: "12 min",
    content: {
      introduction: "Les Conditions Minimales contiennent des pièges récurrents qu'il faut savoir identifier.",
      sections: [
        {
          title: "Information inutile",
          content: "Données qui ne servent à rien :",
          examples: [
            "Énoncé donne une info superflue pour induire en erreur",
            "Condition donne une info qui ne répond pas à la question",
            "Ne pas confondre 'utile' et 'suffisant'",
          ],
        },
        {
          title: "Information cachée",
          content: "Données implicites dans l'énoncé :",
          tips: [
            "'Jean a 3 ans de plus que Marie' → 1 équation (J = M + 3)",
            "'Triangle isocèle' → 2 côtés égaux (info géométrique)",
            "'Nombre pair' → divisible par 2",
          ],
        },
        {
          title: "Conditions contradictoires",
          content: "Parfois les deux conditions ensemble sont impossibles :",
          examples: [
            "Si (1) et (2) se contredisent → Réponse E",
            "Rare mais possible : bien vérifier la compatibilité",
          ],
        },
      ],
      keyPoints: [
        "Extraire TOUTES les infos de l'énoncé",
        "Ne pas négliger les données implicites",
        "Vérifier la compatibilité des conditions",
        "Information utile ≠ information suffisante",
      ],
    },
  },

  // NOUVEAUX COURS - COMPRÉHENSION
  {
    id: "comprehension-arguments",
    title: "Identifier les Arguments",
    category: "Compréhension de Textes",
    type: "Fiche",
    duration: "11 min",
    content: {
      introduction: "Savoir identifier la structure argumentative d'un texte est essentiel pour bien comprendre.",
      sections: [
        {
          title: "Structure d'un argument",
          content: "Composantes à repérer :",
          examples: [
            "**Thèse** : Position défendue par l'auteur",
            "**Arguments** : Raisons qui soutiennent la thèse",
            "**Exemples** : Illustrations concrètes",
            "**Contre-arguments** : Objections possibles et réfutations",
          ],
        },
        {
          title: "Mots de liaison argumentatifs",
          content: "Repères linguistiques :",
          tips: [
            "**Addition** : de plus, en outre, également",
            "**Opposition** : cependant, néanmoins, toutefois, or",
            "**Cause** : car, parce que, en effet, puisque",
            "**Conséquence** : donc, ainsi, par conséquent, c'est pourquoi",
          ],
        },
        {
          title: "Types d'arguments",
          content: "Reconnaître la nature :",
          examples: [
            "**Argument d'autorité** : Citation d'expert",
            "**Argument logique** : Raisonnement déductif",
            "**Argument par l'exemple** : Cas concret",
            "**Argument par analogie** : Comparaison avec situation similaire",
          ],
        },
      ],
      keyPoints: [
        "Identifier la thèse principale du texte",
        "Repérer les mots de liaison pour suivre le raisonnement",
        "Distinguer arguments principaux et secondaires",
        "Attention aux contre-arguments réfutés",
      ],
    },
  },
  {
    id: "comprehension-implicite",
    title: "Comprendre l'Implicite",
    category: "Compréhension de Textes",
    type: "Cours",
    duration: "13 min",
    content: {
      introduction: "L'implicite est ce qui est suggéré sans être dit explicitement. C'est très testé au TAGE MAGE.",
      sections: [
        {
          title: "Présupposés",
          content: "Ce qui est admis comme vrai dans l'énoncé :",
          examples: [
            "'Jean a arrêté de fumer' → **présuppose** qu'il fumait avant",
            "'Le nouveau directeur est compétent' → **présuppose** changement de directeur",
          ],
        },
        {
          title: "Sous-entendus",
          content: "Ce que l'auteur suggère sans le dire :",
          examples: [
            "'Il fait beau aujourd'hui' (après 10 jours de pluie) → sous-entend que c'était rare",
            "Contexte est crucial pour comprendre le sous-entendu",
          ],
        },
        {
          title: "Ton et connotation",
          content: "Attitude de l'auteur :",
          tips: [
            "**Ironie** : Dit le contraire de ce qu'il pense",
            "**Critique** : Termes négatifs, jugements",
            "**Enthousiasme** : Superlatifs, admiratifs",
            "**Neutralité** : Objectif, descriptif",
          ],
        },
        {
          title: "Déduire vs supposer",
          content: "Différence cruciale :",
          examples: [
            "**Déduction valide** : Conséquence logique du texte",
            "**Supposition** : Interprétation personnelle (à éviter !)",
            "Se demander : 'Est-ce NÉCESSAIREMENT vrai d'après le texte ?'",
          ],
        },
      ],
      keyPoints: [
        "Présupposé = admis comme vrai dans la phrase",
        "Sous-entendu = suggéré par le contexte",
        "Attention au ton pour comprendre l'intention",
        "Ne pas confondre déduction et supposition",
      ],
    },
  },
  {
    id: "comprehension-vocabulaire",
    title: "Vocabulaire en Contexte",
    category: "Compréhension de Textes",
    type: "Fiche",
    duration: "9 min",
    content: {
      introduction: "Les questions de vocabulaire testent votre capacité à comprendre un mot selon son contexte.",
      sections: [
        {
          title: "Sens contextuel",
          content: "Le contexte détermine le sens :",
          examples: [
            "'Table' : meuble OU tableau de données (selon contexte)",
            "'Régler' : ajuster OU payer OU résoudre",
            "Toujours relire la phrase pour vérifier le sens",
          ],
        },
        {
          title: "Polysémie",
          content: "Mots à plusieurs sens :",
          tips: [
            "Identifier le sens utilisé dans le texte",
            "Éliminer les sens hors contexte",
            "Vérifier la cohérence avec le reste du texte",
          ],
        },
        {
          title: "Synonymes en contexte",
          content: "Remplacer sans changer le sens :",
          examples: [
            "Le synonyme doit fonctionner dans LA phrase du texte",
            "Pas forcément le synonyme général mais contextuel",
          ],
        },
      ],
      keyPoints: [
        "Contexte prime sur le sens général",
        "Relire la phrase avec le mot de remplacement",
        "Vérifier que le sens global reste cohérent",
      ],
    },
  },

  // NOUVEAUX COURS - RÉSOLUTION DE PROBLÈMES
  {
    id: "problemes-melanges",
    title: "Problèmes de Mélanges",
    category: "Résolution de Problèmes",
    type: "Cours",
    duration: "14 min",
    content: {
      introduction: "Les problèmes de mélanges (concentrations, alliages, prix moyens) utilisent la règle de la moyenne pondérée.",
      sections: [
        {
          title: "Principe de base",
          content: "Conservation de la quantité totale :",
          examples: [
            "**Quantité finale = Somme des quantités initiales**",
            "**Concentration finale × Quantité finale = Somme (Concentration × Quantité) de chaque composant**",
          ],
        },
        {
          title: "Mélanges de solutions",
          content: "Concentration et volume :",
          examples: [
            "10L à 20% + 5L à 50% = 15L à ?",
            "Quantité pure : 10×0.2 + 5×0.5 = 2 + 2.5 = 4.5L",
            "Concentration : 4.5/15 = 30%",
          ],
        },
        {
          title: "Alliages métalliques",
          content: "Même principe :",
          tips: [
            "Calculer la masse totale de chaque métal",
            "Diviser par la masse totale de l'alliage",
            "Obtenir le pourcentage de chaque composant",
          ],
        },
        {
          title: "Prix moyens",
          content: "Moyenne pondérée :",
          examples: [
            "3 kg à 5€/kg + 2 kg à 8€/kg",
            "Prix total : 3×5 + 2×8 = 31€",
            "Prix moyen : 31€ / 5kg = 6.20€/kg",
          ],
        },
      ],
      keyPoints: [
        "Toujours calculer les quantités totales",
        "Utiliser la moyenne pondérée (pas la moyenne simple)",
        "Vérifier la cohérence : résultat entre les valeurs initiales",
        "Tableau pour organiser les données",
      ],
    },
  },
  {
    id: "problemes-age",
    title: "Problèmes d'Âges",
    category: "Résolution de Problèmes",
    type: "Fiche",
    duration: "10 min",
    content: {
      introduction: "Les problèmes d'âges se résolvent en posant des équations avec le temps comme variable.",
      sections: [
        {
          title: "Principe fondamental",
          content: "Tout le monde vieillit au même rythme :",
          tips: [
            "Dans n années, chacun aura son âge actuel + n",
            "Il y a n années, chacun avait son âge actuel - n",
            "L'écart d'âge entre deux personnes reste CONSTANT",
          ],
        },
        {
          title: "Méthode de résolution",
          content: "Approche systématique :",
          examples: [
            "1. Poser les variables (âge actuel de chaque personne)",
            "2. Traduire les relations en équations",
            "3. Résoudre le système",
            "4. Vérifier avec les conditions de l'énoncé",
          ],
        },
        {
          title: "Exemples types",
          content: "Situations classiques :",
          examples: [
            "'Dans n ans, A aura le double de B'",
            "'Il y a n ans, A avait l'âge de B aujourd'hui'",
            "'L'écart d'âge est de x ans'",
          ],
        },
      ],
      keyPoints: [
        "L'écart d'âge ne change jamais",
        "Dans/il y a n ans : ajouter/soustraire n à tous les âges",
        "Vérifiez votre solution avec toutes les conditions",
      ],
    },
  },
  {
    id: "problemes-travail",
    title: "Problèmes de Travail Collectif",
    category: "Résolution de Problèmes",
    type: "Cours",
    duration: "13 min",
    content: {
      introduction: "Les problèmes de travail en équipe utilisent la notion de taux de travail (travail par unité de temps).",
      sections: [
        {
          title: "Taux de travail",
          content: "Concept fondamental :",
          examples: [
            "Si A fait le travail en 6h → taux = 1/6 du travail par heure",
            "Si B fait le travail en 4h → taux = 1/4 du travail par heure",
            "Ensemble : taux combiné = 1/6 + 1/4 = 5/12 par heure",
          ],
        },
        {
          title: "Formule générale",
          content: "Travail = Taux × Temps :",
          tips: [
            "Si taux combiné = 1/T, alors temps nécessaire = T",
            "Exemple : taux = 5/12 → temps = 12/5 = 2.4h",
          ],
        },
        {
          title: "Travail séquentiel",
          content: "Quand les personnes travaillent l'une après l'autre :",
          examples: [
            "A travaille 2h (taux 1/6) : fait 2×(1/6) = 1/3 du travail",
            "Reste 2/3 à faire",
            "B seul avec taux 1/4 : temps = (2/3)/(1/4) = 8/3h",
          ],
        },
      ],
      keyPoints: [
        "Taux de travail = 1 / (temps pour faire seul)",
        "Taux se additionnent quand travail simultané",
        "Travail total = 1 (l'unité complète)",
        "Vérifier que Taux × Temps = Travail",
      ],
    },
  },
  {
    id: "problemes-optimisation",
    title: "Problèmes d'Optimisation",
    category: "Résolution de Problèmes",
    type: "Cours",
    duration: "15 min",
    content: {
      introduction: "Les problèmes d'optimisation cherchent à maximiser ou minimiser une quantité sous contraintes.",
      sections: [
        {
          title: "Types d'optimisation",
          content: "Objectifs courants :",
          examples: [
            "**Minimiser un coût** sous contraintes de production",
            "**Maximiser un profit** avec ressources limitées",
            "**Minimiser un temps** avec contraintes de vitesse",
            "**Maximiser une aire** avec périmètre fixe",
          ],
        },
        {
          title: "Méthode algébrique",
          content: "Approche par équations :",
          tips: [
            "1. Définir la variable (ce qu'on cherche à optimiser)",
            "2. Exprimer la quantité à optimiser en fonction de cette variable",
            "3. Identifier les contraintes (inégalités)",
            "4. Tester les valeurs limites et caractéristiques",
          ],
        },
        {
          title: "Cas géométriques",
          content: "Optimisation de formes :",
          examples: [
            "À périmètre fixé, le carré a l'aire maximale (parmi rectangles)",
            "À aire fixée, le cercle a le périmètre minimal",
            "Pour un volume donné, la sphère a la surface minimale",
          ],
        },
        {
          title: "Stratégie pratique",
          content: "Au TAGE MAGE :",
          tips: [
            "Souvent, les valeurs extrêmes sont optimales",
            "Tester les cas limites en premier",
            "Vérifier que la solution respecte toutes les contraintes",
            "Utiliser l'intuition géométrique quand possible",
          ],
        },
      ],
      keyPoints: [
        "Identifier clairement ce qu'on cherche à optimiser",
        "Lister toutes les contraintes",
        "Tester les valeurs aux bornes",
        "Vérifier la faisabilité de la solution",
      ],
    },
  },

  // NOUVEAUX COURS - MÉTHODOLOGIE
  {
    id: "erreurs-eviter",
    title: "Les 10 Erreurs à Éviter",
    category: "Méthodologie",
    type: "Guide",
    duration: "14 min",
    content: {
      introduction: "Apprenez à éviter les erreurs les plus coûteuses au TAGE MAGE.",
      sections: [
        {
          title: "Erreurs de gestion du temps",
          content: "Pièges temporels :",
          examples: [
            "**1. Passer trop de temps sur une question** → Fixez-vous 2 min max",
            "**2. Ne pas chronométrer** → Entraînement sans chrono = inutile",
            "**3. Oublier de vérifier** → Gardez toujours 2-3 min",
          ],
        },
        {
          title: "Erreurs stratégiques",
          content: "Mauvaises décisions :",
          examples: [
            "**4. Répondre au hasard** → Pénalité de -1, mieux vaut passer",
            "**5. Traiter les questions dans l'ordre** → Commencez par les faciles",
            "**6. Viser 100%** → Impossible et contre-productif",
          ],
        },
        {
          title: "Erreurs de calcul",
          content: "Pièges techniques :",
          tips: [
            "**7. Ne pas simplifier avant** → Calculs plus longs et erreurs",
            "**8. Négliger les unités** → Vérifiez la cohérence",
            "**9. Erreurs de signes** → Relisez attentivement",
          ],
        },
        {
          title: "Erreur psychologique",
          content: "Mental :",
          examples: [
            "**10. Paniquer sur un sous-test raté** → Un sous-test = 1/6 seulement",
          ],
        },
      ],
      keyPoints: [
        "Le temps est votre pire ennemi",
        "Soyez stratégique, pas perfectionniste",
        "Vérifiez toujours vos calculs rapidement",
        "Gardez votre calme quoi qu'il arrive",
      ],
    },
  },
  {
    id: "revision-efficace",
    title: "Plan de Révision Efficace",
    category: "Méthodologie",
    type: "Guide",
    duration: "16 min",
    content: {
      introduction: "Un bon plan de révision structure votre préparation pour maximiser vos progrès.",
      sections: [
        {
          title: "Phase 1 : Diagnostic (Semaine 1-2)",
          content: "Identifier vos points forts et faibles :",
          tips: [
            "Faire 2-3 tests blancs complets",
            "Analyser vos scores par sous-test",
            "Identifier vos 3 sous-tests les plus faibles",
            "Noter les types d'erreurs récurrentes",
          ],
        },
        {
          title: "Phase 2 : Apprentissage (Semaines 3-6)",
          content: "Acquérir méthodes et connaissances :",
          examples: [
            "Étudier les cours et fiches par sous-test",
            "Faire des exercices ciblés (non chronométrés d'abord)",
            "Comprendre chaque erreur en profondeur",
            "Focus sur vos 3 sous-tests faibles",
          ],
        },
        {
          title: "Phase 3 : Entraînement (Semaines 7-10)",
          content: "Automatiser et gagner en vitesse :",
          tips: [
            "Exercices chronométrés systématiquement",
            "1 test blanc par semaine",
            "Simuler les conditions réelles",
            "Réduire progressivement le temps par question",
          ],
        },
        {
          title: "Phase 4 : Consolidation (Semaines 11-12)",
          content: "Peaufiner et renforcer la confiance :",
          examples: [
            "2 tests blancs par semaine",
            "Révisions légères des fiches",
            "Focus sur la régularité, pas les nouveautés",
            "Dernière semaine : repos relatif",
          ],
        },
        {
          title: "Rythme hebdomadaire idéal",
          content: "Organisation type :",
          tips: [
            "**Lundi-Mercredi** : Exercices ciblés (1h30/jour)",
            "**Jeudi** : Repos ou révision légère",
            "**Vendredi-Samedi** : Exercices + cours (2h/jour)",
            "**Dimanche** : Test blanc complet (2h) + analyse (1h)",
          ],
        },
      ],
      keyPoints: [
        "Diagnostic avant tout pour cibler les efforts",
        "Progression : comprendre → s'entraîner → automatiser",
        "Tests blancs réguliers indispensables",
        "Dernière semaine : confiance, pas bourrage",
      ],
    },
  },

  // COURS SUPPLÉMENTAIRES - CALCUL & ARITHMÉTIQUE
  {
    id: "calcul-divisibilite",
    title: "Critères de Divisibilité",
    category: "Calcul",
    type: "Fiche",
    duration: "9 min",
    content: {
      introduction: "Les critères de divisibilité permettent de vérifier rapidement si un nombre est divisible par un autre sans faire la division.",
      sections: [
        {
          title: "Critères essentiels",
          content: "À connaître par cœur :",
          examples: [
            "**Par 2** : Le nombre se termine par 0, 2, 4, 6 ou 8",
            "**Par 3** : La somme des chiffres est divisible par 3 (ex: 126 → 1+2+6=9, divisible par 3)",
            "**Par 4** : Les deux derniers chiffres forment un nombre divisible par 4",
            "**Par 5** : Le nombre se termine par 0 ou 5",
            "**Par 9** : La somme des chiffres est divisible par 9",
            "**Par 10** : Le nombre se termine par 0",
          ],
        },
        {
          title: "Critères avancés",
          content: "Pour gagner du temps :",
          examples: [
            "**Par 6** : Divisible par 2 ET par 3",
            "**Par 8** : Les trois derniers chiffres forment un nombre divisible par 8",
            "**Par 11** : Différence alternée des chiffres divisible par 11 (ex: 1342 → 1-3+4-2=0)",
            "**Par 12** : Divisible par 3 ET par 4",
          ],
        },
        {
          title: "Applications pratiques",
          content: "Utilisation au TAGE MAGE :",
          tips: [
            "Simplifier rapidement des fractions",
            "Identifier des multiples communs",
            "Résoudre des problèmes de dénombrement",
            "Éliminer des réponses impossibles",
          ],
        },
      ],
      keyPoints: [
        "Connaître par cœur les critères de 2, 3, 5, 9",
        "Pour 6 et 12, combiner plusieurs critères",
        "La somme des chiffres est cruciale pour 3 et 9",
        "Utiliser pour simplifier avant de calculer",
      ],
    },
  },
  {
    id: "calcul-pgcd-ppcm",
    title: "PGCD et PPCM",
    category: "Calcul",
    type: "Cours",
    duration: "12 min",
    content: {
      introduction: "Le PGCD et le PPCM sont essentiels pour résoudre des problèmes de divisibilité et de fractions.",
      sections: [
        {
          title: "Définitions",
          content: "Concepts fondamentaux :",
          examples: [
            "**PGCD** : Plus Grand Commun Diviseur - plus grand nombre qui divise les deux",
            "**PPCM** : Plus Petit Commun Multiple - plus petit multiple commun aux deux",
            "**Exemple** : PGCD(12,18)=6  PPCM(12,18)=36",
          ],
        },
        {
          title: "Méthode de calcul - Décomposition",
          content: "Décomposer en facteurs premiers :",
          tips: [
            "Décomposer chaque nombre en produit de facteurs premiers",
            "**PGCD** : Produit des facteurs communs avec plus petites puissances",
            "**PPCM** : Produit de tous les facteurs avec plus grandes puissances",
            "**Exemple** : 12=2²×3, 18=2×3² → PGCD=2×3=6, PPCM=2²×3²=36",
          ],
        },
        {
          title: "Algorithme d'Euclide (PGCD)",
          content: "Méthode rapide pour grands nombres :",
          examples: [
            "Diviser le plus grand par le plus petit",
            "Remplacer le plus grand par le reste",
            "Continuer jusqu'à reste = 0",
            "Le dernier diviseur est le PGCD",
          ],
        },
        {
          title: "Relations utiles",
          content: "Propriétés à connaître :",
          tips: [
            "**a × b = PGCD(a,b) × PPCM(a,b)**",
            "Si PGCD(a,b)=1, on dit que a et b sont premiers entre eux",
            "PPCM utile pour additionner des fractions (dénominateur commun)",
          ],
        },
      ],
      keyPoints: [
        "PGCD pour simplifier des fractions",
        "PPCM pour mettre au même dénominateur",
        "Décomposition en facteurs premiers = méthode universelle",
        "Relation : a×b = PGCD×PPCM",
      ],
    },
  },
  {
    id: "calcul-nombres-premiers",
    title: "Nombres Premiers",
    category: "Calcul",
    type: "Fiche",
    duration: "10 min",
    content: {
      introduction: "Les nombres premiers sont les briques élémentaires de l'arithmétique.",
      sections: [
        {
          title: "Définition",
          content: "Qu'est-ce qu'un nombre premier ?",
          examples: [
            "Nombre entier > 1 divisible uniquement par 1 et lui-même",
            "2 est le seul nombre premier pair",
            "1 n'est PAS un nombre premier",
          ],
        },
        {
          title: "Premiers à connaître",
          content: "Les 25 premiers nombres premiers :",
          examples: [
            "2, 3, 5, 7, 11, 13, 17, 19, 23, 29",
            "31, 37, 41, 43, 47, 53, 59, 61, 67, 71",
            "73, 79, 83, 89, 97",
          ],
        },
        {
          title: "Test de primalité",
          content: "Comment vérifier si n est premier ?",
          tips: [
            "Tester la divisibilité par tous les nombres premiers jusqu'à √n",
            "Si aucun ne divise n, alors n est premier",
            "**Exemple** : 97 → tester jusqu'à √97 ≈ 10 → tester 2,3,5,7",
          ],
        },
        {
          title: "Applications",
          content: "Utilité pratique :",
          examples: [
            "Décomposition en facteurs premiers",
            "Simplification de fractions",
            "Résolution de problèmes de cryptographie",
          ],
        },
      ],
      keyPoints: [
        "Connaître les premiers jusqu'à 100 au minimum",
        "2 est le seul nombre premier pair",
        "Pour tester, diviser par premiers jusqu'à √n",
        "Tout nombre se décompose en produit de premiers",
      ],
    },
  },
  {
    id: "calcul-notation-scientifique",
    title: "Notation Scientifique",
    category: "Calcul",
    type: "Fiche",
    duration: "8 min",
    content: {
      introduction: "La notation scientifique permet de manipuler facilement les très grands et très petits nombres.",
      sections: [
        {
          title: "Format",
          content: "a × 10^n où 1 ≤ a < 10",
          examples: [
            "**3 500 000** = 3.5 × 10⁶",
            "**0.000 045** = 4.5 × 10⁻⁵",
            "**789** = 7.89 × 10²",
          ],
        },
        {
          title: "Opérations",
          content: "Calculs en notation scientifique :",
          tips: [
            "**Multiplication** : Multiplier les a, additionner les exposants",
            "(2×10³) × (3×10⁴) = 6×10⁷",
            "**Division** : Diviser les a, soustraire les exposants",
            "(8×10⁶) ÷ (2×10²) = 4×10⁴",
          ],
        },
        {
          title: "Comparaison",
          content: "Ordonner des nombres :",
          examples: [
            "D'abord comparer les exposants",
            "Si égaux, comparer les coefficients",
            "3×10⁵ > 9×10⁴ (5 > 4)",
          ],
        },
      ],
      keyPoints: [
        "Format : a × 10^n avec 1 ≤ a < 10",
        "Multiplication/division : gérer exposants séparément",
        "Pratique pour très grands ou très petits nombres",
        "Comparer d'abord les puissances de 10",
      ],
    },
  },
  {
    id: "calcul-valeur-absolue",
    title: "Valeur Absolue",
    category: "Calcul",
    type: "Fiche",
    duration: "9 min",
    content: {
      introduction: "La valeur absolue mesure la distance à zéro, toujours positive.",
      sections: [
        {
          title: "Définition",
          content: "Distance à l'origine :",
          examples: [
            "**|x| = x** si x ≥ 0",
            "**|x| = -x** si x < 0",
            "**Exemples** : |5|=5, |-5|=5, |0|=0",
          ],
        },
        {
          title: "Propriétés",
          content: "Règles de calcul :",
          tips: [
            "**|a × b| = |a| × |b|**",
            "**|a/b| = |a| / |b|** (b≠0)",
            "**|a + b| ≤ |a| + |b|** (inégalité triangulaire)",
            "**|a - b|** représente la distance entre a et b",
          ],
        },
        {
          title: "Équations avec valeur absolue",
          content: "Résolution :",
          examples: [
            "**|x| = a** (a>0) → x = a ou x = -a",
            "**|x - 3| = 5** → x-3=5 ou x-3=-5 → x=8 ou x=-2",
            "**|x| = -2** → Pas de solution (valeur absolue toujours ≥ 0)",
          ],
        },
      ],
      keyPoints: [
        "Valeur absolue toujours positive ou nulle",
        "|x| représente la distance de x à 0",
        "|a-b| représente la distance entre a et b",
        "Résoudre en considérant les deux cas (+ et -)",
      ],
    },
  },

  // GÉOMÉTRIE APPROFONDIE
  {
    id: "geometrie-triangles-special",
    title: "Triangles Particuliers",
    category: "Calcul",
    type: "Cours",
    duration: "14 min",
    content: {
      introduction: "Certains triangles ont des propriétés spéciales qui facilitent grandement les calculs.",
      sections: [
        {
          title: "Triangle équilatéral",
          content: "Tous les côtés égaux, tous les angles = 60° :",
          examples: [
            "**Périmètre** : P = 3c",
            "**Hauteur** : h = (c√3)/2",
            "**Aire** : A = (c²√3)/4",
            "Les trois hauteurs se coupent au centre",
          ],
        },
        {
          title: "Triangle isocèle",
          content: "Deux côtés égaux :",
          tips: [
            "Les angles à la base sont égaux",
            "La hauteur issue du sommet coupe la base en son milieu",
            "Axe de symétrie passant par le sommet",
          ],
        },
        {
          title: "Triangle rectangle",
          content: "Un angle droit (90°) :",
          examples: [
            "**Pythagore** : a² + b² = c² (c = hypoténuse)",
            "**Aire** : A = (a×b)/2 (produit des deux côtés de l'angle droit)",
            "**Triangles célèbres** : 3-4-5, 5-12-13, 8-15-17",
          ],
        },
        {
          title: "Triangle rectangle 30-60-90",
          content: "Rapports de côtés à connaître :",
          examples: [
            "Côtés dans le rapport 1 : √3 : 2",
            "Face à 30° : côté le plus court",
            "Face à 60° : côté moyen",
            "Face à 90° (hypoténuse) : côté le plus long",
          ],
        },
        {
          title: "Triangle rectangle 45-45-90",
          content: "Triangle rectangle isocèle :",
          tips: [
            "Côtés dans le rapport 1 : 1 : √2",
            "Deux côtés égaux (les cathètes)",
            "Hypoténuse = côté × √2",
          ],
        },
      ],
      keyPoints: [
        "Équilatéral : tout égal (côtés et angles 60°)",
        "Rectangle : Pythagore indispensable",
        "Connaître les triangles 3-4-5 et 30-60-90",
        "Isocèle : deux côtés et deux angles égaux",
      ],
    },
  },
  {
    id: "geometrie-cercle-approfondi",
    title: "Le Cercle - Propriétés Avancées",
    category: "Calcul",
    type: "Cours",
    duration: "13 min",
    content: {
      introduction: "Le cercle possède des propriétés géométriques riches très utiles au TAGE MAGE.",
      sections: [
        {
          title: "Formules de base",
          content: "À maîtriser absolument :",
          examples: [
            "**Circonférence** : C = 2πr = πd",
            "**Aire** : A = πr²",
            "**Relation** : r = d/2 (rayon = diamètre/2)",
            "**π ≈ 3.14** ou **22/7** pour les calculs",
          ],
        },
        {
          title: "Arcs et secteurs",
          content: "Portions de cercle :",
          tips: [
            "**Longueur d'arc** : L = (angle/360°) × 2πr",
            "**Aire d'un secteur** : A = (angle/360°) × πr²",
            "**Exemple** : Secteur de 90° = 1/4 du cercle",
          ],
        },
        {
          title: "Corde et distance au centre",
          content: "Relations importantes :",
          examples: [
            "Le rayon perpendiculaire à une corde la coupe en son milieu",
            "Deux cordes égales sont à égale distance du centre",
            "Diamètre = plus grande corde possible",
          ],
        },
        {
          title: "Angles inscrits",
          content: "Angle au centre vs angle inscrit :",
          tips: [
            "Angle inscrit = moitié de l'angle au centre (même arc)",
            "Angle inscrit dans un demi-cercle = 90°",
            "Utile pour résoudre des problèmes de géométrie complexes",
          ],
        },
      ],
      keyPoints: [
        "C = 2πr et A = πr² à connaître parfaitement",
        "Pour arc ou secteur, multiplier par (angle/360°)",
        "Angle inscrit = moitié angle au centre",
        "Rayon ⊥ corde → coupe la corde en 2",
      ],
    },
  },
  {
    id: "geometrie-angles",
    title: "Propriétés des Angles",
    category: "Calcul",
    type: "Fiche",
    duration: "11 min",
    content: {
      introduction: "Maîtriser les relations entre angles est essentiel en géométrie.",
      sections: [
        {
          title: "Types d'angles",
          content: "Classification :",
          examples: [
            "**Aigu** : 0° < angle < 90°",
            "**Droit** : angle = 90°",
            "**Obtus** : 90° < angle < 180°",
            "**Plat** : angle = 180°",
            "**Réflexe** : 180° < angle < 360°",
          ],
        },
        {
          title: "Angles complémentaires et supplémentaires",
          content: "Relations entre angles :",
          tips: [
            "**Complémentaires** : Somme = 90°",
            "**Supplémentaires** : Somme = 180°",
            "**Exemple** : 30° et 60° sont complémentaires",
            "**Exemple** : 110° et 70° sont supplémentaires",
          ],
        },
        {
          title: "Angles et droites parallèles",
          content: "Quand deux parallèles sont coupées par une sécante :",
          examples: [
            "**Angles correspondants** : égaux",
            "**Angles alternes-internes** : égaux",
            "**Angles alternes-externes** : égaux",
            "**Angles internes du même côté** : supplémentaires (somme = 180°)",
          ],
        },
        {
          title: "Somme des angles",
          content: "Dans les polygones :",
          tips: [
            "**Triangle** : 180°",
            "**Quadrilatère** : 360°",
            "**Polygone à n côtés** : (n-2) × 180°",
          ],
        },
      ],
      keyPoints: [
        "Complémentaires : somme 90°, Supplémentaires : somme 180°",
        "Angles d'un triangle : toujours 180°",
        "Parallèles coupées : angles correspondants égaux",
        "Polygone n côtés : (n-2)×180°",
      ],
    },
  },
  {
    id: "geometrie-quadrilateres",
    title: "Les Quadrilatères",
    category: "Calcul",
    type: "Cours",
    duration: "12 min",
    content: {
      introduction: "Les quadrilatères (polygones à 4 côtés) ont chacun des propriétés spécifiques.",
      sections: [
        {
          title: "Le carré",
          content: "Tous les côtés égaux, tous les angles droits :",
          examples: [
            "**Périmètre** : P = 4c",
            "**Aire** : A = c²",
            "**Diagonales** : égales, perpendiculaires, se coupent au milieu",
            "**Longueur diagonale** : d = c√2",
          ],
        },
        {
          title: "Le rectangle",
          content: "Angles droits, côtés opposés égaux :",
          examples: [
            "**Périmètre** : P = 2(L + l)",
            "**Aire** : A = L × l",
            "**Diagonales** : égales, se coupent au milieu",
            "**Longueur diagonale** : d = √(L² + l²) (Pythagore)",
          ],
        },
        {
          title: "Le losange",
          content: "Tous les côtés égaux :",
          tips: [
            "**Périmètre** : P = 4c",
            "**Aire** : A = (d₁ × d₂)/2 (produit des diagonales / 2)",
            "**Diagonales** : perpendiculaires, se coupent au milieu",
            "Côtés opposés parallèles",
          ],
        },
        {
          title: "Le parallélogramme",
          content: "Côtés opposés parallèles et égaux :",
          examples: [
            "**Périmètre** : P = 2(a + b)",
            "**Aire** : A = base × hauteur",
            "**Diagonales** : se coupent au milieu (mais pas forcément égales)",
            "Angles opposés égaux",
          ],
        },
        {
          title: "Le trapèze",
          content: "Un seul couple de côtés parallèles :",
          tips: [
            "**Aire** : A = ((B + b) × h) / 2",
            "B = grande base, b = petite base, h = hauteur",
            "**Trapèze isocèle** : côtés non parallèles égaux",
          ],
        },
      ],
      keyPoints: [
        "Carré : tout égal (4 côtés, 4 angles droits)",
        "Rectangle : 4 angles droits, aire = L×l",
        "Losange : 4 côtés égaux, aire = (d₁×d₂)/2",
        "Trapèze : aire = ((B+b)×h)/2",
      ],
    },
  },
  {
    id: "geometrie-volumes-avances",
    title: "Volumes et Surfaces - Formules Avancées",
    category: "Calcul",
    type: "Cours",
    duration: "15 min",
    content: {
      introduction: "Calculs de volumes et surfaces pour solides usuels et complexes.",
      sections: [
        {
          title: "Prisme droit",
          content: "Base quelconque × hauteur :",
          examples: [
            "**Volume** : V = Aire_base × hauteur",
            "**Surface latérale** : Périmètre_base × hauteur",
            "**Surface totale** : Surface_latérale + 2×Aire_base",
          ],
        },
        {
          title: "Cylindre",
          content: "Prisme à base circulaire :",
          tips: [
            "**Volume** : V = πr²h",
            "**Surface latérale** : S = 2πrh",
            "**Surface totale** : S = 2πrh + 2πr² = 2πr(h+r)",
          ],
        },
        {
          title: "Pyramide",
          content: "Sommet et base quelconque :",
          examples: [
            "**Volume** : V = (Aire_base × hauteur) / 3",
            "Toujours diviser par 3 pour une pyramide",
            "**Exemple** : Pyramide à base carrée de côté c et hauteur h : V = (c²h)/3",
          ],
        },
        {
          title: "Cône",
          content: "Pyramide à base circulaire :",
          tips: [
            "**Volume** : V = (πr²h) / 3",
            "**Surface latérale** : S = πr × a (a = apothème)",
            "**Apothème** : a = √(r² + h²) (Pythagore)",
          ],
        },
        {
          title: "Sphère",
          content: "Boule parfaite :",
          examples: [
            "**Volume** : V = (4/3)πr³",
            "**Surface** : S = 4πr²",
            "**Demi-sphère** : V = (2/3)πr³, S = 3πr² (avec base)",
          ],
        },
      ],
      keyPoints: [
        "Prisme/Cylindre : Aire_base × hauteur",
        "Pyramide/Cône : (Aire_base × hauteur) / 3",
        "Sphère : V = (4/3)πr³, S = 4πr²",
        "Toujours vérifier les unités (m³ pour volume)",
      ],
    },
  },
  {
    id: "geometrie-thales",
    title: "Théorème de Thalès",
    category: "Calcul",
    type: "Cours",
    duration: "11 min",
    content: {
      introduction: "Le théorème de Thalès permet de calculer des longueurs dans des triangles avec droites parallèles.",
      sections: [
        {
          title: "Énoncé du théorème",
          content: "Configuration de Thalès :",
          examples: [
            "Si (BC) // (DE) dans le triangle ADE",
            "Alors **AB/AD = AC/AE = BC/DE**",
            "Les rapports de longueurs correspondantes sont égaux",
          ],
        },
        {
          title: "Applications pratiques",
          content: "Calculer une longueur inconnue :",
          tips: [
            "1. Identifier les droites parallèles",
            "2. Repérer les triangles emboîtés",
            "3. Écrire l'égalité des rapports",
            "4. Résoudre avec un produit en croix",
          ],
        },
        {
          title: "Réciproque de Thalès",
          content: "Démontrer que deux droites sont parallèles :",
          examples: [
            "Si AB/AD = AC/AE et B, C, D, E alignés dans le bon sens",
            "Alors (BC) // (DE)",
            "Utile pour prouver le parallélisme",
          ],
        },
        {
          title: "Erreurs à éviter",
          content: "Pièges courants :",
          tips: [
            "Vérifier que les droites sont bien parallèles",
            "Respecter l'ordre des points dans les rapports",
            "Ne pas confondre avec Pythagore (angles droits)",
            "Bien identifier le sommet commun des triangles",
          ],
        },
      ],
      keyPoints: [
        "Thalès : parallèles → rapports égaux",
        "Réciproque : rapports égaux → parallèles",
        "Produits en croix pour trouver l'inconnue",
        "Vérifier l'alignement et l'ordre des points",
      ],
    },
  },

  // PROBABILITÉS ET STATISTIQUES
  {
    id: "stats-moyenne-mediane",
    title: "Moyenne, Médiane et Mode",
    category: "Calcul",
    type: "Cours",
    duration: "13 min",
    content: {
      introduction: "Les indicateurs de tendance centrale résument une série de données.",
      sections: [
        {
          title: "La moyenne",
          content: "Somme divisée par le nombre de valeurs :",
          examples: [
            "**Formule** : Moyenne = (somme des valeurs) / (nombre de valeurs)",
            "**Exemple** : 5, 7, 9, 12 → Moyenne = (5+7+9+12)/4 = 33/4 = 8.25",
            "Sensible aux valeurs extrêmes",
          ],
        },
        {
          title: "La médiane",
          content: "Valeur centrale quand les données sont ordonnées :",
          tips: [
            "Ordonner les valeurs croissantes",
            "**Si nombre impair** : Médiane = valeur centrale",
            "**Si nombre pair** : Médiane = moyenne des 2 valeurs centrales",
            "**Exemple** : 3, 5, 7, 9, 12 → Médiane = 7",
            "**Exemple** : 3, 5, 7, 9 → Médiane = (5+7)/2 = 6",
          ],
        },
        {
          title: "Le mode",
          content: "Valeur la plus fréquente :",
          examples: [
            "Valeur qui apparaît le plus souvent",
            "**Exemple** : 2, 3, 3, 5, 7, 7, 7, 9 → Mode = 7",
            "Peut avoir plusieurs modes (distribution multimodale)",
          ],
        },
        {
          title: "Comparaison",
          content: "Quand utiliser chaque indicateur :",
          tips: [
            "**Moyenne** : Distribution symétrique, sans valeurs extrêmes",
            "**Médiane** : Présence de valeurs extrêmes, distribution asymétrique",
            "**Mode** : Données qualitatives, identifier la valeur la plus courante",
          ],
        },
      ],
      keyPoints: [
        "Moyenne = somme/nombre (sensible aux extrêmes)",
        "Médiane = valeur centrale (robuste)",
        "Mode = valeur la plus fréquente",
        "Choisir l'indicateur adapté à la situation",
      ],
    },
  },
  {
    id: "stats-etendue-ecart",
    title: "Étendue et Écart-type",
    category: "Calcul",
    type: "Fiche",
    duration: "10 min",
    content: {
      introduction: "Les indicateurs de dispersion mesurent la variabilité des données.",
      sections: [
        {
          title: "L'étendue",
          content: "Différence entre max et min :",
          examples: [
            "**Formule** : Étendue = Max - Min",
            "**Exemple** : 2, 5, 8, 12, 15 → Étendue = 15 - 2 = 13",
            "Simple mais très sensible aux valeurs extrêmes",
          ],
        },
        {
          title: "L'écart-type",
          content: "Mesure de dispersion autour de la moyenne :",
          tips: [
            "Plus l'écart-type est grand, plus les données sont dispersées",
            "Écart-type faible → données concentrées autour de la moyenne",
            "**Interprétation** : environ 68% des données dans [moyenne-σ, moyenne+σ]",
          ],
        },
        {
          title: "Comparaison de séries",
          content: "Utiliser dispersion et tendance centrale :",
          examples: [
            "Deux séries avec même moyenne peuvent avoir dispersions différentes",
            "**Série A** : 5, 5, 5, 5 (écart-type = 0)",
            "**Série B** : 1, 3, 7, 9 (même moyenne = 5, mais dispersée)",
          ],
        },
      ],
      keyPoints: [
        "Étendue = Max - Min (simple mais limité)",
        "Écart-type mesure la dispersion autour de la moyenne",
        "Grande dispersion → données hétérogènes",
        "Faible dispersion → données homogènes",
      ],
    },
  },
  {
    id: "proba-introduction",
    title: "Introduction aux Probabilités",
    category: "Calcul",
    type: "Cours",
    duration: "14 min",
    content: {
      introduction: "Les probabilités mesurent la chance qu'un événement se produise.",
      sections: [
        {
          title: "Définition",
          content: "Probabilité entre 0 et 1 :",
          examples: [
            "**P(événement) = Nombre de cas favorables / Nombre de cas possibles**",
            "**0 ≤ P ≤ 1** (ou 0% à 100%)",
            "P = 0 → événement impossible",
            "P = 1 → événement certain",
          ],
        },
        {
          title: "Événements complémentaires",
          content: "Événement contraire :",
          tips: [
            "**P(A̅) = 1 - P(A)**",
            "Si P(réussir) = 0.7, alors P(échouer) = 1 - 0.7 = 0.3",
            "Utile quand calculer le contraire est plus simple",
          ],
        },
        {
          title: "Probabilité d'une union",
          content: "P(A ou B) :",
          examples: [
            "**Si A et B incompatibles** : P(A∪B) = P(A) + P(B)",
            "**Si A et B compatibles** : P(A∪B) = P(A) + P(B) - P(A∩B)",
            "Attention à ne pas compter deux fois l'intersection",
          ],
        },
        {
          title: "Probabilité d'une intersection",
          content: "P(A et B) :",
          tips: [
            "**Si A et B indépendants** : P(A∩B) = P(A) × P(B)",
            "**Exemple** : Lancer 2 dés, P(6 et 6) = 1/6 × 1/6 = 1/36",
            "Si dépendants, utiliser probabilités conditionnelles",
          ],
        },
      ],
      keyPoints: [
        "P = favorables/possibles (entre 0 et 1)",
        "P(contraire) = 1 - P(événement)",
        "Addition : attention à l'intersection (éviter double compte)",
        "Indépendants : P(A et B) = P(A) × P(B)",
      ],
    },
  },

  // LOGIQUE AVANCÉE
  {
    id: "logique-tableaux-verite",
    title: "Tableaux de Vérité",
    category: "Raisonnement Logique",
    type: "Cours",
    duration: "12 min",
    content: {
      introduction: "Les tableaux de vérité permettent d'analyser systématiquement des propositions logiques.",
      sections: [
        {
          title: "Connecteurs logiques",
          content: "Opérateurs de base :",
          examples: [
            "**NON (¬)** : Négation - inverse la valeur",
            "**ET (∧)** : Vrai si les deux sont vrais",
            "**OU (∨)** : Vrai si au moins un est vrai",
            "**IMPLIQUE (→)** : Faux uniquement si prémisse vraie et conclusion fausse",
          ],
        },
        {
          title: "Construction d'un tableau",
          content: "Méthode systématique :",
          tips: [
            "Lister toutes les combinaisons possibles de valeurs (V/F)",
            "Pour n propositions : 2^n lignes",
            "Calculer colonne par colonne les résultats",
            "Identifier les tautologies (toujours vrai) et contradictions (toujours faux)",
          ],
        },
        {
          title: "Lois de De Morgan",
          content: "Transformations utiles :",
          examples: [
            "**¬(A ∧ B) = ¬A ∨ ¬B**",
            "**¬(A ∨ B) = ¬A ∧ ¬B**",
            "Utile pour simplifier des expressions logiques",
          ],
        },
      ],
      keyPoints: [
        "ET : vrai uniquement si les deux vrais",
        "OU : vrai si au moins un vrai",
        "IMPLIQUE : faux seulement si V→F",
        "Lois de De Morgan pour simplifier",
      ],
    },
  },
  {
    id: "logique-quantificateurs",
    title: "Quantificateurs et Négations",
    category: "Raisonnement Logique",
    type: "Fiche",
    duration: "10 min",
    content: {
      introduction: "Les quantificateurs (∀, ∃) permettent d'exprimer des énoncés sur des ensembles.",
      sections: [
        {
          title: "Quantificateur universel (∀)",
          content: "Pour tout, quel que soit :",
          examples: [
            "**∀x, P(x)** : Pour tout x, P(x) est vrai",
            "**Exemple** : ∀x ∈ ℕ, x² ≥ 0 (tout carré est positif)",
            "Vrai uniquement si P vrai pour TOUS les x",
          ],
        },
        {
          title: "Quantificateur existentiel (∃)",
          content: "Il existe au moins un :",
          tips: [
            "**∃x, P(x)** : Il existe au moins un x tel que P(x) est vrai",
            "**Exemple** : ∃x ∈ ℕ, x² = 16 (vrai pour x=4)",
            "Vrai si P vrai pour AU MOINS un x",
          ],
        },
        {
          title: "Négation des quantificateurs",
          content: "Règles importantes :",
          examples: [
            "**¬(∀x, P(x)) = ∃x, ¬P(x)**",
            "'Pas tous' = 'Il existe au moins un qui ne vérifie pas'",
            "**¬(∃x, P(x)) = ∀x, ¬P(x)**",
            "'Aucun n'existe' = 'Tous ne vérifient pas'",
          ],
        },
      ],
      keyPoints: [
        "∀ (pour tout) : doit être vrai pour TOUS",
        "∃ (il existe) : doit être vrai pour AU MOINS UN",
        "Négation de ∀ donne ∃ et vice versa",
        "Important pour les syllogismes",
      ],
    },
  },

  // EXPRESSION AVANCÉE
  {
    id: "expression-figures-style",
    title: "Figures de Style",
    category: "Expression",
    type: "Fiche",
    duration: "11 min",
    content: {
      introduction: "Les figures de style enrichissent l'expression et sont testées en compréhension.",
      sections: [
        {
          title: "Figures d'analogie",
          content: "Comparaisons et métaphores :",
          examples: [
            "**Comparaison** : Comparer avec 'comme', 'tel que' (Il est fort comme un lion)",
            "**Métaphore** : Comparaison implicite sans outil (Cet homme est un lion)",
            "**Personnification** : Attribuer qualités humaines à non-humain (Le vent hurle)",
          ],
        },
        {
          title: "Figures d'amplification",
          content: "Exagération ou atténuation :",
          tips: [
            "**Hyperbole** : Exagération (Je meurs de faim)",
            "**Litote** : Dire moins pour suggérer plus (Ce n'est pas mal = c'est bien)",
            "**Euphémisme** : Atténuer une réalité désagréable (Il nous a quittés = il est mort)",
          ],
        },
        {
          title: "Figures d'opposition",
          content: "Contrastes et paradoxes :",
          examples: [
            "**Antithèse** : Opposition de deux idées (Petit par la taille, grand par le cœur)",
            "**Oxymore** : Alliance de mots contradictoires (Une douce violence)",
            "**Antiphrase** : Ironie, dire le contraire (C'est du joli ! = c'est mal)",
          ],
        },
      ],
      keyPoints: [
        "Métaphore = comparaison implicite (sans 'comme')",
        "Hyperbole = exagération volontaire",
        "Litote = dire moins pour suggérer plus",
        "Identifier la figure aide à comprendre l'intention",
      ],
    },
  },
  {
    id: "expression-registres",
    title: "Registres Littéraires",
    category: "Expression",
    type: "Fiche",
    duration: "9 min",
    content: {
      introduction: "Le registre d'un texte révèle l'intention de l'auteur et les émotions transmises.",
      sections: [
        {
          title: "Registres principaux",
          content: "Tonalités courantes :",
          examples: [
            "**Lyrique** : Expression des sentiments personnels, émotions",
            "**Tragique** : Fatalité, destin implacable, souffrance",
            "**Comique** : Faire rire par situations drôles ou absurdes",
            "**Ironique** : Dire le contraire de ce qu'on pense, moquerie",
            "**Polémique** : Critique violente, ton combatif",
            "**Didactique** : Volonté d'enseigner, expliquer",
          ],
        },
        {
          title: "Identifier le registre",
          content: "Indices textuels :",
          tips: [
            "**Lexique** : Champs lexicaux dominants",
            "**Ponctuation** : Exclamations, questions rhétoriques",
            "**Figures de style** : Hyperboles, métaphores",
            "**Syntaxe** : Phrases courtes (tension) ou longues (description)",
          ],
        },
      ],
      keyPoints: [
        "Registre = tonalité émotionnelle du texte",
        "Révèle l'intention de l'auteur",
        "S'appuie sur lexique, ponctuation, figures",
        "Plusieurs registres peuvent coexister",
      ],
    },
  },

  // MÉTHODOLOGIE SUPPLÉMENTAIRE
  {
    id: "methodologie-analyser-erreurs",
    title: "Analyse des Erreurs",
    category: "Méthodologie",
    type: "Guide",
    duration: "13 min",
    content: {
      introduction: "Analyser ses erreurs est la clé pour progresser rapidement et éviter de les reproduire.",
      sections: [
        {
          title: "Types d'erreurs",
          content: "Classification pour mieux cibler :",
          examples: [
            "**Erreur de compréhension** : Mal lu ou mal compris l'énoncé",
            "**Erreur de méthode** : Mauvaise approche du problème",
            "**Erreur de calcul** : Faute d'inattention, calcul mental raté",
            "**Erreur de temps** : Pas eu le temps de finir ou vérifier",
            "**Erreur de connaissance** : Formule oubliée, règle inconnue",
          ],
        },
        {
          title: "Carnet d'erreurs",
          content: "Tenir un journal systématique :",
          tips: [
            "Noter TOUTES les erreurs (même 'bêtes')",
            "Pour chaque erreur : Type, Raison, Comment l'éviter",
            "Relire avant chaque entraînement",
            "Identifier les patterns récurrents",
          ],
        },
        {
          title: "Plan d'action correctif",
          content: "Transformer erreur en progrès :",
          examples: [
            "**Si erreur de méthode** → Réviser le cours correspondant",
            "**Si erreur de calcul récurrente** → Ralentir, vérifier systématiquement",
            "**Si erreur de temps** → Revoir stratégie de gestion du temps",
            "**Si erreur de connaissance** → Fiche de révision ciblée",
          ],
        },
        {
          title: "Révision espacée",
          content: "Consolider les acquis :",
          tips: [
            "Refaire les questions ratées après 1 jour, puis 3 jours, puis 1 semaine",
            "Si erreur persiste, réviser en profondeur le concept",
            "Varier les exercices sur le même thème",
          ],
        },
      ],
      keyPoints: [
        "Chaque erreur = opportunité d'apprendre",
        "Tenir un carnet d'erreurs systématique",
        "Identifier les patterns pour cibler les révisions",
        "Révision espacée pour ancrer durablement",
      ],
    },
  },
  {
    id: "methodologie-simulation",
    title: "Tests Blancs et Simulation",
    category: "Méthodologie",
    type: "Guide",
    duration: "12 min",
    content: {
      introduction: "Les tests blancs sont indispensables pour se préparer aux conditions réelles du TAGE MAGE.",
      sections: [
        {
          title: "Fréquence recommandée",
          content: "Planning optimal :",
          tips: [
            "**Semaines 1-4** : 1 test blanc toutes les 2 semaines",
            "**Semaines 5-8** : 1 test blanc par semaine",
            "**Semaines 9-11** : 2 tests blancs par semaine",
            "**Dernière semaine** : 1 test blanc max (J-5 ou J-6)",
          ],
        },
        {
          title: "Conditions de simulation",
          content: "Reproduire l'épreuve réelle :",
          examples: [
            "Lieu calme, sans distraction",
            "2 heures complètes, chronomètre visible",
            "Matériel autorisé uniquement (stylos, brouillon)",
            "Pas de pause entre sous-tests",
            "Respecter rigoureusement le temps par sous-test (20 min)",
          ],
        },
        {
          title: "Analyse post-test",
          content: "Exploiter au maximum chaque test blanc :",
          tips: [
            "**Immédiatement après** : Noter ressenti par sous-test",
            "**Correction détaillée** : Analyser TOUTES les questions (bonnes et mauvaises)",
            "**Identification patterns** : Quels types d'erreurs ? Quels sous-tests faibles ?",
            "**Plan d'action** : Révisions ciblées sur les points faibles",
          ],
        },
        {
          title: "Interpréter les scores",
          content: "Courbe de progression :",
          examples: [
            "Suivre l'évolution globale (pas se focaliser sur 1 test)",
            "Variations normales : ±20 points d'un test à l'autre",
            "Objectif : tendance générale à la hausse",
            "Si stagnation > 3 tests : revoir stratégie de révision",
          ],
        },
      ],
      keyPoints: [
        "Tests blancs réguliers = NON NÉGOCIABLE",
        "Conditions réelles : 2h, chronométré, sans pause",
        "Analyse détaillée après chaque test",
        "Suivre la tendance, pas les variations ponctuelles",
      ],
    },
  },
  {
    id: "calcul-tables-multiplication",
    title: "Tables de Multiplication 1-20",
    category: "Calcul",
    type: "Cours",
    duration: "20 min",
    content: {
      introduction: "La maîtrise parfaite des tables de multiplication jusqu'à 20 est cruciale pour le calcul mental rapide au TAGE MAGE. Ce cours vous aidera à les mémoriser et à les utiliser efficacement.",
      sections: [
        {
          title: "Tables de 1 à 10 (Fondamentales)",
          content: "Ces tables doivent être connues par cœur instantanément :",
          examples: [
            "**Table de 2** : 2, 4, 6, 8, 10, 12, 14, 16, 18, 20",
            "**Table de 3** : 3, 6, 9, 12, 15, 18, 21, 24, 27, 30",
            "**Table de 4** : 4, 8, 12, 16, 20, 24, 28, 32, 36, 40",
            "**Table de 5** : 5, 10, 15, 20, 25, 30, 35, 40, 45, 50",
            "**Table de 6** : 6, 12, 18, 24, 30, 36, 42, 48, 54, 60",
            "**Table de 7** : 7, 14, 21, 28, 35, 42, 49, 56, 63, 70",
            "**Table de 8** : 8, 16, 24, 32, 40, 48, 56, 64, 72, 80",
            "**Table de 9** : 9, 18, 27, 36, 45, 54, 63, 72, 81, 90",
            "**Table de 10** : 10, 20, 30, 40, 50, 60, 70, 80, 90, 100",
          ],
        },
        {
          title: "Tables de 11 à 15 (Intermédiaires)",
          content: "Ces tables sont très utiles pour gagner du temps :",
          examples: [
            "**Table de 11** : 11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132, 143, 154, 165, 176, 187, 198, 209, 220",
            "**Table de 12** : 12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144, 156, 168, 180, 192, 204, 216, 228, 240",
            "**Table de 13** : 13, 26, 39, 52, 65, 78, 91, 104, 117, 130, 143, 156, 169, 182, 195, 208, 221, 234, 247, 260",
            "**Table de 14** : 14, 28, 42, 56, 70, 84, 98, 112, 126, 140, 154, 168, 182, 196, 210, 224, 238, 252, 266, 280",
            "**Table de 15** : 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300",
          ],
        },
        {
          title: "Tables de 16 à 20 (Avancées)",
          content: "Moins courantes mais très utiles pour les calculs complexes :",
          examples: [
            "**Table de 16** : 16, 32, 48, 64, 80, 96, 112, 128, 144, 160, 176, 192, 208, 224, 240, 256, 272, 288, 304, 320",
            "**Table de 17** : 17, 34, 51, 68, 85, 102, 119, 136, 153, 170, 187, 204, 221, 238, 255, 272, 289, 306, 323, 340",
            "**Table de 18** : 18, 36, 54, 72, 90, 108, 126, 144, 162, 180, 198, 216, 234, 252, 270, 288, 306, 324, 342, 360",
            "**Table de 19** : 19, 38, 57, 76, 95, 114, 133, 152, 171, 190, 209, 228, 247, 266, 285, 304, 323, 342, 361, 380",
            "**Table de 20** : 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400",
          ],
        },
        {
          title: "Astuces de mémorisation",
          content: "Techniques pour faciliter l'apprentissage :",
          tips: [
            "**Table de 9** : La somme des chiffres donne toujours 9 (18→1+8=9, 27→2+7=9)",
            "**Table de 11** : Jusqu'à 99, on double le chiffre (11×3=33, 11×7=77)",
            "**Table de 5** : Tous les résultats se terminent par 0 ou 5",
            "**Table de 12** : 12×n = 10×n + 2×n (décomposer)",
            "**Table de 15** : 15×n = 10×n + 5×n (simplifier)",
            "**Commutativité** : 7×8 = 8×7, utilisez celle que vous connaissez mieux",
          ],
        },
        {
          title: "Stratégies de calcul rapide",
          content: "Optimiser vos calculs en conditions d'examen :",
          examples: [
            "**Pour 16×n** : Doubler 4 fois (16=2×2×2×2)",
            "**Pour 18×n** : Calculer 20×n puis soustraire 2×n",
            "**Pour 19×n** : Calculer 20×n puis soustraire n",
            "**Pour 17×n** : Calculer 10×n + 7×n",
            "**Décomposition** : 14×15 = 14×10 + 14×5 = 140+70 = 210",
          ],
        },
        {
          title: "Produits remarquables utiles",
          content: "Résultats à connaître par cœur :",
          examples: [
            "11² = 121 | 12² = 144 | 13² = 169 | 14² = 196 | 15² = 225",
            "16² = 256 | 17² = 289 | 18² = 324 | 19² = 361 | 20² = 400",
            "25² = 625 | 30² = 900 | 40² = 1600 | 50² = 2500",
          ],
        },
        {
          title: "Programme d'entraînement",
          content: "Plan de révision efficace :",
          tips: [
            "**Jour 1-3** : Tables 1-10 (révision intensive 15 min/jour)",
            "**Jour 4-7** : Tables 11-15 (10 nouvelles tables par jour)",
            "**Jour 8-10** : Tables 16-20 (consolider avec exercices)",
            "**Jour 11-14** : Révision globale + test chronométré",
            "**Ensuite** : 5 minutes par jour pour maintenir",
          ],
        },
        {
          title: "Erreurs fréquentes à éviter",
          content: "Pièges classiques :",
          examples: [
            "**7×8=56** souvent confondu avec 54",
            "**6×7=42** souvent confondu avec 48",
            "**12×12=144** souvent confondu avec 124",
            "**13×13=169** souvent confondu avec 139",
            "**15×16=240** souvent calculé comme 230",
          ],
        },
      ],
      keyPoints: [
        "Tables 1-10 : maîtrise instantanée obligatoire",
        "Tables 11-15 : apprendre progressivement avec astuces",
        "Tables 16-20 : utiliser la décomposition si nécessaire",
        "Pratiquer 5-10 minutes par jour minimum",
        "Utiliser le test de multiplication pour s'évaluer régulièrement",
      ],
    },
  },
];

export const getCoursesByCategory = (category: string) => {
  return coursesData.filter((course) => course.category === category);
};

export const getCourseById = (id: string) => {
  return coursesData.find((course) => course.id === id);
};
