import type { CardOverride } from '../cardOverrides';

export const fr02: Record<string, CardOverride> = {
  "an-11": {
    frontQuestion: "Quel processus vous permet de vérifier que vos événements de suivi se déclenchent correctement ?",
    frontScenario: "Après une mise en ligne, vos tableaux affichent une conversion impossible. Vous soupçonnez un problème dans la mesure.",
    backInfo: "Analytics QA (contrôle qualité analytique) : vérification des déclencheurs, des identités, des propriétés, des types, des doublons et du comportement par environnement. Testez votre mesure avec autant de rigueur que votre code, avant de prendre la moindre décision sur des données récentes.",
  },
  "an-12": {
    frontQuestion: "Quel processus évite de compter la même personne comme deux utilisateurs différents ?",
    frontScenario: "Une visiteuse navigue sans compte, puis s’inscrit : elle apparaît deux fois dans votre entonnoir. Vous ne savez plus combien vous avez de vrais utilisateurs.",
    backInfo: "Identity Resolution (résolution d’identité) : rattachement des identifiants anonymes, connectés et multi-appareils à un même profil quand c’est pertinent. Sans une bonne logique de rattachement, vos entonnoirs et votre rétention sont faussés.",
  },
  "an-13": {
    frontQuestion: "Quelle analyse décide quel canal mérite le crédit d’une conversion ?",
    frontScenario: "Une cliente voit une publicité, lit un article, puis revient via la recherche et achète. Vous débattez du canal qui a vraiment convaincu.",
    backInfo: "Attribution (attribution) : règles ou modèles qui répartissent le mérite d’une conversion entre les points de contact. Restez lucide : c’est toujours une estimation, limitée par le suivi et les hypothèses du modèle, jamais une vérité absolue.",
  },
  "an-14": {
    frontQuestion: "Sur quoi vous appuyer pour définir vos événements clés avant de construire vos tableaux de bord ?",
    frontScenario: "Chaque équipe appelle « engagement » n’importe quel clic : votre tableau semble animé mais ne vous aide pas à décider.",
    backInfo: "Measurement Framework (cadre de mesure) : document qui relie objectifs produit, questions, métriques, événements et définitions précises. Il vous oblige à mesurer vos décisions et vos résultats plutôt qu’à accumuler des données sans cap.",
  },
  "an-15": {
    frontQuestion: "Quel type de métrique vous signale à l’avance qu’un résultat va s’améliorer ?",
    frontScenario: "Vous ne voulez pas attendre 90 jours de rétention pour savoir si votre changement a fonctionné. Il vous faut un signal précoce.",
    backInfo: "Leading Indicator (indicateur avancé) : métrique qui bouge avant le résultat visé et vous donne un retour rapide. Ne la choisissez que si vous avez la preuve qu’elle prédit vraiment ce résultat, pas seulement parce qu’elle bouge vite.",
  },
  "an-16": {
    frontQuestion: "Quel type de métrique confirme un résultat une fois qu’il s’est déjà produit ?",
    frontScenario: "Le chiffre d’affaires du trimestre valide après coup vos efforts d’acquisition et d’activation. Il est trop tard pour corriger le tir.",
    backInfo: "Lagging Indicator (indicateur retardé) : métrique qui reflète le résultat une fois le comportement accompli. Parfaite pour valider vos outcomes, mais souvent trop lente pour guider vos décisions produit au quotidien.",
  },
  "ex-01": {
    frontQuestion: "Quelle formulation prédit la relation entre un changement et un résultat avant de tester ?",
    frontScenario: "Vous pensez que simplifier l’onboarding augmentera la création du premier projet. Pour l’instant, ce n’est qu’une intuition.",
    backInfo: "Hypothesis (hypothèse) : prédiction réfutable qui relie un changement, une population cible et un résultat attendu. Une bonne hypothèse peut être contredite par un test ; sans elle, n’importe quel résultat ressemblera à une victoire.",
  },
  "ex-02": {
    frontQuestion: "Quelle expérience compare une version actuelle à une variante avec des groupes tirés au sort ?",
    frontScenario: "La moitié de vos utilisateurs voit la page tarifaire actuelle, l’autre moitié en découvre une nouvelle version.",
    backInfo: "A/B Test (test A/B) : expérience contrôlée et randomisée qui compare des variantes sur des résultats définis à l’avance. Le tirage au sort vous aide à isoler l’effet causal des autres facteurs qui brouillent l’analyse.",
  },
  "ex-03": {
    frontQuestion: "Quelle hypothèse de départ votre expérience cherche-t-elle à contredire ?",
    frontScenario: "Avant de déclarer votre refonte gagnante, vous partez du principe qu’il n’existe aucune vraie différence entre les variantes.",
    backInfo: "Null Hypothesis (hypothèse nulle) : hypothèse statistique qui postule en général l’absence d’effet ou de différence. Ne pas la rejeter ne prouve pas que vos variantes sont identiques ; peut-être manquez-vous simplement de données.",
  },
  "ex-04": {
    frontQuestion: "Quelle statistique mesure la compatibilité de vos données avec l’hypothèse nulle ?",
    frontScenario: "Votre tableau affiche 0,03 et votre équipe veut savoir ce que ce chiffre signifie vraiment.",
    backInfo: "p-value (valeur p) : probabilité, si le modèle nul était vrai, d’observer des données aussi extrêmes ou plus extrêmes que celles obtenues. Ce n’est pas la probabilité que votre hypothèse soit vraie.",
  },
  "ex-05": {
    frontQuestion: "Quel intervalle exprime la plage des valeurs plausibles pour un effet estimé ?",
    frontScenario: "Votre conversion progresse de 1,2 point, mais vous voulez montrer honnêtement l’incertitude autour de cette estimation.",
    backInfo: "Confidence Interval (intervalle de confiance) : plage construite par une méthode qui contiendrait la vraie valeur au taux annoncé si vous répétiez l’échantillonnage. Elle raconte l’incertitude bien mieux qu’une estimation ponctuelle isolée.",
  },
  "ex-06": {
    frontQuestion: "Quelle est la probabilité que votre test détecte un effet réel s’il existe vraiment ?",
    frontScenario: "Vous craignez que votre expérience soit trop petite pour remarquer l’amélioration qui compte vraiment pour vous.",
    backInfo: "Statistical Power (puissance statistique) : probabilité de rejeter l’hypothèse nulle quand un effet réel de la taille visée existe. Elle dépend de la taille d’échantillon, de la variabilité, du seuil de significativité et de la taille d’effet.",
  },
  "ex-07": {
    frontQuestion: "Quel calcul détermine combien d’observations votre expérience exige ?",
    frontScenario: "Vous voulez planifier la durée de votre test avant de le lancer, plutôt que l’arrêter dès que la courbe verdit.",
    backInfo: "Sample Size Calculation (calcul de la taille d’échantillon) : estimation des observations nécessaires selon la base, l’effet visé, la variabilité, l’alpha et la puissance. Faites ce calcul avant de regarder les résultats, chaque fois que c’est possible.",
  },
  "ex-08": {
    frontQuestion: "Quel est le plus petit effet qui mérite d’être détecté parce qu’il changerait votre décision ?",
    frontScenario: "Un gain de 0,05 % serait détectable à grande échelle mais n’aurait aucun intérêt commercial pour vous.",
    backInfo: "MDE — Minimum Detectable Effect (effet minimum détectable) : plus petit effet que votre expérience est conçue pour détecter de façon fiable. Calibrez-le sur ce qui compte pour votre décision, pas sur ce qui arrange vos statistiques.",
  },
  "ex-09": {
    frontQuestion: "Quelle erreur commettez-vous quand vous concluez à un effet qui n’existe pas ?",
    frontScenario: "Votre équipe lance une variante à cause d’un bruit aléatoire, puis n’arrive jamais à reproduire l’amélioration.",
    backInfo: "Type I Error — False Positive (erreur de type I, faux positif) : rejeter une hypothèse nulle pourtant vraie. Le seuil de significativité contrôle sa fréquence à long terme, sous votre modèle et votre procédure de test.",
  },
  "ex-10": {
    frontQuestion: "Quelle erreur commettez-vous quand un effet réel existe mais que votre test le manque ?",
    frontScenario: "Votre variante aide vraiment, mais l’échantillon était trop petit et l’expérience est classée non concluante.",
    backInfo: "Type II Error — False Negative (erreur de type II, faux négatif) : ne pas rejeter l’hypothèse nulle alors qu’un effet pertinent existe. Une puissance statistique plus élevée réduit ce risque pour la taille d’effet visée.",
  },
  "ex-11": {
    frontQuestion: "Quelle métrique vous protège contre les dégâts pendant que vous optimisez votre objectif principal ?",
    frontScenario: "Votre variante de paiement augmente les achats mais fait aussi exploser les demandes de remboursement.",
    backInfo: "Guardrail Metric (métrique garde-fou) : indicateur surveillé pour éviter un préjudice inacceptable hors de l’objectif principal, comme les erreurs, la lenteur ou les annulations. Elle fixe vos limites, pas votre cible de succès.",
  },
  "ex-12": {
    frontQuestion: "Quel est le résultat unique sur lequel votre expérience doit trancher ?",
    frontScenario: "Votre test d’onboarding suit des dizaines de métriques, mais un seul résultat doit dire si l’hypothèse a gagné.",
    backInfo: "Primary Metric (métrique primaire) : indicateur principal de décision, fixé avant l’analyse. Le définir à l’avance vous empêche de piocher après coup le chiffre le plus flatteur parmi tous les résultats.",
  },
  "ex-13": {
    frontQuestion: "Quel diagnostic vérifie si le trafic s’est mal réparti entre vos variantes ?",
    frontScenario: "Votre test prévu à 50/50 reçoit 63 % des utilisateurs en variante A et 37 % en variante B.",
    backInfo: "Sample Ratio Mismatch — SRM (rupture du ratio d’échantillon) : écart statistiquement suspect entre la répartition attendue et observée. Il signale souvent un bug d’assignation, de journalisation ou d’éligibilité : enquêtez avant de croire vos résultats.",
  },
  "ex-14": {
    frontQuestion: "Quel effet rend une nouveauté artificiellement forte ou faible simplement parce qu’elle est nouvelle ?",
    frontScenario: "Vos utilisateurs explorent frénétiquement la nouvelle navigation la première semaine, puis retrouvent leurs habitudes.",
    backInfo: "Novelty Effect (effet de nouveauté) : changement temporaire de comportement provoqué par la nouveauté elle-même, pas par une valeur durable. Pour juger l’effet lasting, observez plus longtemps ou prévoyez une mesure de suivi.",
  },
  "ex-15": {
    frontQuestion: "Quel biais apparaît quand les personnes observées diffèrent à cause de leur entrée dans l’échantillon ?",
    frontScenario: "Seuls vos clients les plus engagés répondent à votre enquête volontaire : la satisfaction semble bien meilleure qu’elle ne l’est vraiment.",
    backInfo: "Selection Bias (biais de sélection) : distorsion systématique due à une inclusion, une exclusion ou une participation non aléatoire. Soignez votre recrutement et votre interprétation ; un échantillon plus gros ne l’efface pas à lui seul.",
  },
  "ex-16": {
    frontQuestion: "Quelle approche vous permet de consulter vos données en cours de test sans gonfler les faux positifs ?",
    frontScenario: "Vous voulez arrêter vos tests tôt quand la preuve suffit, sans prendre de risque à force de contrôles quotidiens improvisés.",
    backInfo: "Sequential Testing (tests séquentiels) : méthodes statistiques conçues pour des analyses intermédiaires répétées avec des règles d’arrêt. N’appliquez pas un test à horizon fixe encore et encore en vous arrêtant au premier dépassement de seuil.",
  },
  "uxm-01": {
    frontQuestion: "Quelle métrique d’utilisabilité indique combien de participants réussissent une tâche définie ?",
    frontScenario: "En test d’utilisabilité, huit personnes sur dix parviennent à changer leur adresse de facturation sans aide.",
    backInfo: "Task Success Rate (taux de réussite de tâche) : pourcentage de tentatives qui remplissent vos critères de succès prédéfinis. Si vous acceptez le succès partiel, définissez avec constance ce qui compte comme réussite totale, partielle ou échec.",
  },
  "uxm-02": {
    frontQuestion: "Quelle métrique mesure le temps que vos utilisateurs mettent pour accomplir une tâche ?",
    frontScenario: "Deux parcours de paiement aboutissent aussi bien, mais l’un demande beaucoup plus de temps.",
    backInfo: "Time on Task (temps par tâche) : temps nécessaire pour accomplir une tâche définie. Interprétez-le avec la réussite et la complexité ; aller plus vite n’est pas toujours mieux quand une relecture attentive compte.",
  },
  "uxm-03": {
    frontQuestion: "Quelle métrique capture la fréquence des erreurs pendant une tâche ?",
    frontScenario: "Vos participants saisissent sans cesse les dates au mauvais format et déclenchent des erreurs de validation.",
    backInfo: "Error Rate (taux d’erreur) : fréquence ou proportion d’erreurs définies pendant une tâche. Classez-les toujours de la même façon et distinguez les maladresses rattrapables de l’échec complet quand c’est utile.",
  },
  "uxm-04": {
    frontQuestion: "Quelle métrique compte les étapes ou les actions nécessaires pour atteindre un objectif ?",
    frontScenario: "Deux parcours affichent la même réussite, mais l’un exige bien plus d’interactions.",
    backInfo: "Interaction Cost (coût d’interaction) : effort requis pour atteindre un but, à travers les étapes, les décisions, l’attention et la saisie plutôt qu’une formule unique. Moins de clics à eux seuls ne valent pas toujours mieux.",
  },
  "uxm-05": {
    frontQuestion: "Quel questionnaire standard en 10 questions donne un score global d’utilisabilité perçue ?",
    frontScenario: "Vous voulez une référence légère d’utilisabilité perçue avant et après une refonte.",
    backInfo: "SUS — System Usability Scale (échelle d’utilisabilité système) : questionnaire standardisé en 10 items, converti en score de 0 à 100. Ce score n’est pas un pourcentage : interprétez-le face à des données comparatives adaptées.",
  },
  "uxm-06": {
    frontQuestion: "Quelle question unique mesure la facilité ressentie juste après une tâche ?",
    frontScenario: "Après chaque tâche d’utilisabilité, vous avez besoin d’une mesure éclair de la difficulté perçue.",
    backInfo: "SEQ — Single Ease Question (question unique de facilité) : note de facilité après la tâche, souvent sur une échelle en 7 points. Elle complète vos mesures comportementales comme la réussite et le temps, sans les remplacer.",
  },
  "uxm-07": {
    frontQuestion: "Quel questionnaire compact en deux questions mesure l’utilité et la facilité d’usage ?",
    frontScenario: "Votre enquête suivie n’a plus que deux places libres, mais vous voulez garder une mesure standardisée.",
    backInfo: "UMUX-Lite : questionnaire standardisé en deux items sur l’utilité perçue et la facilité d’usage. Précieux quand la place manque dans votre sondage, il ne suffit plus quand vous devez diagnostiquer finement un problème.",
  },
  "uxm-08": {
    frontQuestion: "Quelle métrique demande à vos clients à quel point ils sont satisfaits d’une expérience ?",
    frontScenario: "Après un échange avec le support, vous demandez à chacun d’évaluer sa satisfaction sur la résolution.",
    backInfo: "CSAT — Customer Satisfaction Score (score de satisfaction client) : note directe de satisfaction liée à une expérience précise. Précisez toujours votre échelle et votre calcul, car chaque organisation l’agrège à sa façon.",
  },
  "uxm-09": {
    frontQuestion: "Quelle métrique demande si l’on recommanderait le produit, puis soustrait les détracteurs aux promoteurs ?",
    frontScenario: "Votre direction veut un signal de fidélité fondé sur la classique question de recommandation.",
    backInfo: "NPS — Net Promoter Score (score net de recommandation) : pourcentage de promoteurs moins pourcentage de détracteurs, de −100 à +100. Ne remplace ni vos métriques comportementales ni votre recherche diagnostique.",
  },
  "uxm-10": {
    frontQuestion: "Quelle métrique demande quel effort le client a ressenti pour accomplir quelque chose ?",
    frontScenario: "Une cliente met à jour son compte avec succès mais raconte que la démarche l’a épuisée.",
    backInfo: "CES — Customer Effort Score (score d’effort client) : effort perçu pour une tâche ou une interaction de service. Le libellé exact et l’échelle varient : documentez votre version quand vous comparez des résultats.",
  },
  "uxm-11": {
    frontQuestion: "Quelle métrique dit si vos utilisateurs cliquent au bon endroit dès le premier clic ?",
    frontScenario: "Vous voulez un signal précoce pour savoir si chacun comprend où vit l’option « Gérer l’équipe » dans la navigation.",
    backInfo: "First-Click Success (réussite au premier clic) : part des participants dont le premier clic emprunte un chemin pouvant mener à la bonne destination. Très révélateur de la clarté de vos libellés et de votre navigation.",
  },
  "uxm-12": {
    frontQuestion: "Quelle mesure combine la réussite d’une tâche avec sa fluidité d’exécution ?",
    frontScenario: "Deux maquettes affichent la même réussite, mais l’une provoque bien plus d’hésitations et de reprises.",
    backInfo: "Task Efficiency (efficacité de tâche) : performance réussie rapportée au temps, aux actions ou à l’effort. Définissez votre calcul pour chaque étude et lisez-le avec l’efficacité au sens du résultat et la satisfaction.",
  },
  "uxm-13": {
    frontQuestion: "Quelle métrique au percentile mesure la réactivité de l’interface après chaque interaction ?",
    frontScenario: "Votre application web charge vite mais semble poussive après chaque clic ou frappe au clavier.",
    backInfo: "INP — Interaction to Next Paint (interaction jusqu’au prochain affichage) : Core Web Vital de réactivité, fondée sur la latence des interactions pendant le cycle de vie de la page. C’est la norme actuelle ; FID n’est plus la référence.",
  },
  "uxm-14": {
    frontQuestion: "Quelles sont les trois métriques qui forment les signaux web essentiels actuels de Google ?",
    frontScenario: "Avec votre binôme design et développement, vous passez en revue la performance réelle et cherchez le trio actuel, pas une vieille liste.",
    backInfo: "Core Web Vitals (signaux web essentiels) : LCP pour le chargement du plus grand élément, INP pour la réactivité et CLS pour la stabilité visuelle. Repères couramment cités : LCP ≤ 2,5 s, INP ≤ 200 ms et CLS ≤ 0,1 au 75e percentile.",
  },
  "ur-01": {
    frontQuestion: "Quelle méthode observe des utilisateurs représentatifs sur des tâches réalistes pour trouver les problèmes ?",
    frontScenario: "Vous devez voir où les gens échouent quand ils réservent un rendez-vous dans votre prototype.",
    backInfo: "Usability Testing (test d’utilisabilité) : recherche évaluative où des participants tentent des tâches représentatives pendant que vous observez comportements et résultats. Prévoyez des objectifs clairs, sans orienter les consignes.",
  },
  "ur-02": {
    frontQuestion: "Quel format d’étude inclut un chercheur qui guide en direct et relance ?",
    frontScenario: "Un flux d’entreprise complexe exige de creuser dès qu’un participant hésite ou bricole un contournement inattendu.",
    backInfo: "Moderated Usability Testing (test d’utilisabilité modéré) : un animateur interagit avec le participant pendant la session. Idéal pour sonder et traiter les tâches complexes, mais avec un effet animateur et plus de temps par participant.",
  },
  "ur-03": {
    frontQuestion: "Quel format d’étude laisse les participants avancer seuls sans animateur en direct ?",
    frontScenario: "Il vous faut des indices directionnels auprès de nombreux participants à distance, répartis dans plusieurs pays.",
    backInfo: "Unmoderated Usability Testing (test d’utilisabilité non modéré) : les participants accomplissent des tâches prédéfinies sans modérateur en direct. Cela passe bien à l’échelle, mais vous ne pouvez pas creuser un comportement surprenant sur le moment.",
  },
  "ur-04": {
    frontQuestion: "Quelle méthode s’appuie sur un entretien guidé pour comprendre expériences et besoins ?",
    frontScenario: "Avant de dessiner un flux, vous voulez apprendre comment les comptables rapprochent aujourd’hui leurs factures et où ils peinent.",
    backInfo: "User Interview (entretien utilisateur) : conversation qualitative sur les expériences, les motivations, les besoins et le contexte. Interrogez des comportements passés réels avec des exemples concrets, pas seulement des préférences hypothétiques.",
  },
  "ur-05": {
    frontQuestion: "Quelle méthode étudie les gens dans leur cadre réel pendant qu’ils travaillent ?",
    frontScenario: "Vous devez comprendre comment les magasiniers utilisent vraiment leurs scanners dans un entrepôt bruyant et en mouvement.",
    backInfo: "Contextual Inquiry (enquête contextuelle) : recherche de terrain qui mêle observation et questions en contexte. Elle révèle les contraintes du lieu et les astuces tacites que les seuls entretiens ne montrent pas.",
  },
  "ur-06": {
    frontQuestion: "Quelle méthode demande de consigner ses expériences pendant plusieurs jours ou semaines ?",
    frontScenario: "Votre application de sommeil suit des routines changeantes, impossibles à capter en un seul entretien d’une heure.",
    backInfo: "Diary Study (étude journal) : auto-rapports longitudinaux où les participants documentent leurs expériences dans le temps. Précieuse pour les comportements intermittents ou liés au contexte, elle exige de ménager l’effort et la qualité des récits.",
  },
  "ur-07": {
    frontQuestion: "Quelle approche large observe les comportements en milieu réel plutôt qu’en laboratoire ?",
    frontScenario: "Votre produit s’utilise très différemment sur un chantier et dans les récits recueillis au bureau.",
    backInfo: "Field Study (étude de terrain) : recherche menée dans le contexte réel du participant pour comprendre comportements, environnement et contraintes. Elle peut mêler observation, entretiens et enquête contextuelle.",
  },
  "ur-08": {
    frontQuestion: "Quelle méthode recueille des réponses structurées auprès de nombreuses personnes pour quantifier ?",
    frontScenario: "Vous voulez estimer à quel point plusieurs problèmes signalés sont répandus dans toute votre base clients.",
    backInfo: "Survey (enquête par questionnaire) : questionnaire structuré idéal pour la portée et la quantification des déclarations. Il exige un libellé neutre, des échelles adaptées, une vigilance sur l’échantillon et une interprétation prudente.",
  },
  "ur-09": {
    frontQuestion: "Quelle méthode d’architecture demande de regrouper les contenus selon votre propre logique ?",
    frontScenario: "Votre site d’aide compte des centaines de sujets et vous cherchez des preuves sur la façon dont chacun les regroupe mentalement.",
    backInfo: "Card Sorting (tri de cartes) : les participants organisent les contenus en catégories pour révéler modèles mentaux et attentes de libellés. Cela éclaire votre architecture, sans valider à lui seul la performance finale de la navigation.",
  },
  "ur-10": {
    frontQuestion: "Quel format de tri laisse chacun créer et nommer ses propres catégories ?",
    frontScenario: "Vous ne croyez plus à votre taxonomie actuelle et voulez découvrir les regroupements naturels de vos utilisateurs.",
    backInfo: "Open Card Sort (tri de cartes ouvert) : les participants regroupent les items et créent leurs libellés. Mieux adapté à la compréhension générative des modèles mentaux qu’au test d’une taxonomie figée.",
  },
  "ur-11": {
    frontQuestion: "Quel format de tri demande de ranger les contenus dans des catégories déjà fixées ?",
    frontScenario: "Vous avez proposé des libellés de navigation et voulez voir où chacun s’attend à trouver chaque contenu.",
    backInfo: "Closed Card Sort (tri de cartes fermé) : les participants placent les items dans des catégories prédéfinies. Utile pour évaluer votre schéma existant, même s’il contraint les structures possibles.",
  },
  "ur-12": {
    frontQuestion: "Quelle méthode teste si chacun retrouve une destination dans une hiérarchie sans visuel ?",
    frontScenario: "Vous voulez valider votre nouvelle structure de site avant même de construire les écrans.",
    backInfo: "Tree Testing (test d’arborescence) : les participants naviguent dans une hiérarchie simplifiée en texte pour retrouver des contenus imposés. Cela teste la trouvabilité indépendamment du design visuel des pages.",
  },
  "ur-13": {
    frontQuestion: "Quelle étude vérifie si une idée a du sens avant tout design détaillé ?",
    frontScenario: "Vous avez trois concepts de service et voulez savoir lesquels résonnent, avant d’investir dans l’interface.",
    backInfo: "Concept Testing (test de concept) : évalue la compréhension, la pertinence, l’attrait et les doutes autour d’un concept précoce. Cela teste l’idée, sans prouver le futur succès commercial.",
  },
  "ur-14": {
    frontQuestion: "Quelle étude utilise une maquette interactive pour tester un parcours avant de tout développer ?",
    frontScenario: "Vos développeurs n’ont pas encore construit la fonction, mais vous devez voir si chacun comprend le parcours proposé.",
    backInfo: "Prototype Testing (test sur prototype) : évaluation sur une représentation interactive de fidélité adaptée pour répondre à des questions précises. Comportement et limites du prototype doivent coller à votre objectif, sinon vos conclusions tromperont.",
  },
};
