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
];

export const getCoursesByCategory = (category: string) => {
  return coursesData.filter((course) => course.category === category);
};

export const getCourseById = (id: string) => {
  return coursesData.find((course) => course.id === id);
};
