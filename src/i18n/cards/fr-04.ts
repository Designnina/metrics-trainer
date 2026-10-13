import type { CardOverride } from '../cardOverrides';

export const fr04: Record<string, CardOverride> = {
  "fw-13": {
    frontQuestion: "Quel outil retrace les étapes, les actions, les pensées et les émotions d’un client vers un objectif complet ?",
    frontScenario: "Vous voulez comprendre comment vos clients choisissent, achètent, prennent en main votre produit puis contactent l’assistance, pas seulement un écran isolé.",
    backInfo: "Customer Journey Map (carte de parcours client) : visualisation de l’expérience d’un client précis, dans le temps, vers un objectif défini. Appuyez-vous sur des preuves terrain et cadrez bien l’acteur et la situation avant de la dessiner.",
  },
  "fw-14": {
    frontQuestion: "Quelle carte dépasse votre seul produit pour décrire toute l’expérience d’une personne autour d’un but ?",
    frontScenario: "Vous étudiez un déménagement avec ses agents, ses banques, ses fournisseurs d’énergie et ses démarches officielles, bien au-delà de votre application.",
    backInfo: "Experience Map (carte d’expérience) : représentation d’une expérience humaine large, qui traverse souvent plusieurs produits et organisations. Elle reste moins centrée sur votre produit qu’une carte de parcours client ; servez-vous-en pour situer votre rôle dans l’ensemble.",
  },
  "fw-15": {
    frontQuestion: "Quelle technique organise le travail selon le parcours des utilisateurs pour découper des versions vraiment utiles ?",
    frontScenario: "Vous devez garder la vue d’ensemble du flux de travail tout en choisissant la plus petite première version cohérente à livrer.",
    backInfo: "User Story Mapping (carte des récits utilisateurs) : technique de Jeff Patton qui range les activités horizontalement selon le parcours et découpe les versions verticalement par valeur. Utilisez-la pour préserver une valeur de bout en bout au lieu de prioriser des éléments de carnet isolés.",
  },
  "fw-16": {
    frontQuestion: "Quelle carte découpe un besoin fondamental en étapes universelles pour révéler des pistes d’innovation ?",
    frontScenario: "Vous voulez repérer des besoins non satisfaits sur tout le besoin de vos clients plutôt que de tourner autour de vos fonctions actuelles.",
    backInfo: "Job Map (carte de tâche à accomplir) : vue structurée des étapes que vos clients traversent pour accomplir une tâche — définir, localiser, préparer, confirmer, exécuter, suivre — indépendamment de toute solution. Parcourez chaque étape pour y débusquer des besoins non couverts.",
  },
  "ia-01": {
    frontQuestion: "Qu’est-ce qui organise l’information pour que vous sachiez où vous êtes et retrouviez ce qu’il vous faut ?",
    frontScenario: "Votre plateforme compte des centaines de pages, d’outils et de réglages, mais vos utilisateurs ne devinent jamais où se trouve quoi que ce soit.",
    backInfo: "Information Architecture (architecture de l’information) : pratique qui structure, organise, nomme et relie l’information pour soutenir la compréhension et la recherche. C’est bien plus que dessiner un plan de site ; travaillez l’étiquetage, la navigation et la recherche ensemble.",
  },
  "ia-02": {
    frontQuestion: "Qu’est-ce qui définit des catégories et des relations stables pour classer vos contenus de façon cohérente ?",
    frontScenario: "Votre place de marché appelle le même produit « audio » ici, « casques » là et « son personnel » ailleurs, et personne ne s’y retrouve.",
    backInfo: "Taxonomy (taxonomie) : système de classement et de nommage qui range vos contenus ou objets dans des catégories cohérentes. Alignez-la sur les représentations de vos utilisateurs autant que sur vos contraintes internes.",
  },
  "ia-03": {
    frontQuestion: "Qu’est-ce qui exprime les niveaux d’importance et les relations parent-enfant dans vos contenus ?",
    frontScenario: "Vos réglages de compte empilent des rubriques, des sous-rubriques et des contrôles isolés sans ordre lisible.",
    backInfo: "Hierarchy (hiérarchie) : structure ordonnée qui exprime les niveaux, les regroupements et les priorités. Clarifiez-la pour réduire l’effort mental de vos utilisateurs et les aider à deviner où va chaque information.",
  },
  "ia-04": {
    frontQuestion: "Quel schéma décrit la structure prévue et les relations entre les pages de votre produit ?",
    frontScenario: "Avant de refondre votre portail d’aide, vous avez besoin d’une vue d’ensemble partagée de son organisation.",
    backInfo: "Sitemap (plan de site) : représentation des pages ou écrans et de leurs relations hiérarchiques. Il documente la structure, mais ne prouve pas que vos utilisateurs retrouveront chaque élément ; validez toujours par des tests.",
  },
  "ia-05": {
    frontQuestion: "Qu’est-ce qui aide à passer d’un endroit à l’autre dans la structure de votre produit sans se perdre ?",
    frontScenario: "Vos utilisateurs comprennent chaque page, mais ils s’égarent sans cesse entre leurs projets, leurs réglages et la facturation.",
    backInfo: "Navigation (navigation) : ensemble des menus, liens et contrôles qui permettent de circuler entre les lieux et les contenus. Offrez des choix clairs, des repères d’orientation et des trajets prévisibles.",
  },
  "ia-06": {
    frontQuestion: "Qu’est-ce qui consiste à nommer vos rubriques et vos commandes pour que chacun devine leur contenu ?",
    frontScenario: "Vos équipes parlent d’« orchestration des espaces » alors que vos clients cherchent simplement les « réglages d’équipe ».",
    backInfo: "Labeling (étiquetage) : choix de noms pour vos catégories, menus et actions avec des mots que vos utilisateurs comprennent et distinguent. Préférez des libellés précis et cohérents, puis testez-les en contexte.",
  },
  "ia-07": {
    frontQuestion: "Qu’est-ce qui décrit l’idée qu’une personne se fait du fonctionnement de votre système ?",
    frontScenario: "Vos clients s’attendent à retrouver leurs fichiers supprimés dans une corbeille familière, alors que votre technique fonctionne tout autrement.",
    backInfo: "Mental Model (modèle mental) : représentation interne qu’une personne utilise pour prévoir comment quelque chose fonctionne. Alignez votre interface sur les attentes pertinentes de vos utilisateurs pour la rendre plus facile à apprendre.",
  },
  "ia-08": {
    frontQuestion: "Qu’est-ce qui aide à deviner ce que vous trouverez après avoir suivi un lien ou une rubrique ?",
    frontScenario: "Votre rubrique « Ressources » ne dit pas si elle mène à des modèles, à l’aide sur la facturation ou à la documentation.",
    backInfo: "Information Scent (indice informationnel) : signaux qui aident vos utilisateurs à juger si un chemin mène à leur but. Renforcez-les avec des libellés précis et des indices de contexte.",
  },
  "ia-09": {
    frontQuestion: "Qu’est-ce qui fait que vos utilisateurs trouvent facilement une information quand ils en ont besoin ?",
    frontScenario: "La fonction existe et marche très bien, mais vos clients appellent l’assistance parce qu’ils ne parviennent pas à la localiser.",
    backInfo: "Findability (repérabilité) : degré auquel une information ou une fonction peut être découverte et localisée. Elle dépend de votre architecture, de votre navigation, de votre recherche, de vos libellés et de vos indices ; auditez l’ensemble.",
  },
  "ia-10": {
    frontQuestion: "Qu’est-ce qui définit vos types de contenus, leurs champs et leurs liens indépendamment de tout écran ?",
    frontScenario: "Votre système de gestion doit gérer articles, auteurs, produits et questions fréquentes réutilisables sur le web comme sur mobile.",
    backInfo: "Content Model (modèle de contenu) : définition des types de contenus, de leurs attributs et de leurs relations. Séparez la structure sémantique du contenu de sa présentation sur un écran donné.",
  },
  "ia-11": {
    frontQuestion: "Comment appelle-t-on les petits textes d’interface comme les boutons, les aides de champ ou les messages d’erreur ?",
    frontScenario: "Vous hésitez entre « Enregistrer », « Appliquer les modifications » et « Mettre à jour le profil » sur votre bouton.",
    backInfo: "Microcopy (microtexte) : petits contenus d’interface qui guident les actions, expliquent les états et réduisent l’incertitude. Rédigez-les de façon précise, concise et adaptée au contexte.",
  },
  "ia-12": {
    frontQuestion: "Qu’est-ce qui donne à votre produit une personnalité stable dans toutes ses communications ?",
    frontScenario: "Vous voulez que votre marque sonne claire, posée et légèrement enjouée dans l’accueil, l’aide comme le marketing.",
    backInfo: "Voice (voix) : caractère stable de la façon dont votre produit ou votre marque s’exprime. Votre voix reste relativement constante d’un contexte à l’autre ; c’est le ton qui s’adapte à la situation.",
  },
  "ia-13": {
    frontQuestion: "Qu’est-ce qui module votre voix de marque selon la situation de votre utilisateur ?",
    frontScenario: "Votre produit peut être enjoué après une réussite, mais il doit rester calme et direct quand un paiement échoue.",
    backInfo: "Tone (ton) : expression de votre voix adaptée au contexte. Ajustez-le à l’émotion, au risque et à la tâche de vos utilisateurs sans changer de personnalité de marque.",
  },
  "ia-14": {
    frontQuestion: "Quelle façon d’écrire privilégie des mots familiers et une structure directe plutôt que le jargon ?",
    frontScenario: "Votre parcours de consentement est important juridiquement, mais il se lit aujourd’hui comme une note interne.",
    backInfo: "Plain Language (langage clair) : écriture qui permet à votre public de trouver, comprendre et utiliser l’information facilement. Ce n’est pas un langage infantile : simplifiez sans sacrifier l’exactitude.",
  },
  "ix-01": {
    frontQuestion: "Qu’est-ce qui suggère les actions possibles avec un objet ou une interface ?",
    frontScenario: "Un bouton en relief donne envie d’appuyer dessus avant même que vous lisiez son libellé.",
    backInfo: "Affordance (potentialité d’action) : possibilités d’action offertes par un objet ou un environnement pour un utilisateur donné. Distinguez la potentialité réelle de l’indice visuel qui la signale.",
  },
  "ix-02": {
    frontQuestion: "Quel indice visible signale où et comment agir dans une interface ?",
    frontScenario: "Un texte bleu souligné indique qu’il est cliquable, alors que l’action sous-jacente n’est qu’une simple navigation.",
    backInfo: "Signifier (signifiant) : signal perceptible qui indique une potentialité d’action, son endroit ou sa manière. Libellés, icônes, formes, emplacements et styles peuvent tous jouer ce rôle ; rendez-les explicites.",
  },
  "ix-03": {
    frontQuestion: "Qu’est-ce qui indique à vos utilisateurs que leur action a bien été prise en compte ?",
    frontScenario: "Après avoir appuyé sur « Enregistrer », votre écran change d’état et confirme la réussite au lieu de laisser planer le doute.",
    backInfo: "Feedback (retour système) : réponse du système à une action, qui communique son état ou son résultat. Rendez-le rapide, perceptible et proportionné à l’action.",
  },
  "ix-04": {
    frontQuestion: "Qu’est-ce qui fait correspondre naturellement une commande à l’effet qu’elle produit ?",
    frontScenario: "Vous glissez une carte vers la gauche et le monde affiché bouge dans une direction facile à comprendre.",
    backInfo: "Mapping (correspondance) : relation entre vos commandes ou actions et leurs effets. Une correspondance naturelle, spatiale ou conceptuelle, réduit l’effort d’apprentissage.",
  },
  "ix-05": {
    frontQuestion: "Quel mécanisme limite les actions possibles pour éviter les états invalides ou risqués ?",
    frontScenario: "Votre bouton « Envoyer » reste indisponible tant que toutes les informations obligatoires ne sont pas valides.",
    backInfo: "Constraint (contrainte) : restriction qui resserre les actions ou états disponibles. Les contraintes préviennent les erreurs, mais expliquez toujours pourquoi la progression est bloquée au lieu de masquer la cause.",
  },
  "ix-06": {
    frontQuestion: "Quel principe demande que vos utilisateurs comprennent toujours ce que le système est en train de faire ?",
    frontScenario: "Votre envoi de fichier dure vingt secondes sans indicateur, alors vos utilisateurs cliquent sans cesse sur le bouton d’envoi.",
    backInfo: "Visibility of System Status (visibilité de l’état du système) : tenez vos utilisateurs informés de l’état courant par un retour adapté et rapide. Progression, enregistrement, synchronisation et erreurs ne doivent jamais rester invisibles quand elles comptent.",
  },
  "ix-07": {
    frontQuestion: "Quel principe allège l’apprentissage en faisant fonctionner pareil ce qui se ressemble ?",
    frontScenario: "Votre bouton « Enregistrer » est toujours au même endroit et vos actions destructrices suivent le même schéma de confirmation partout.",
    backInfo: "Consistency (cohérence) : réutilisation des modèles, du langage et des comportements pour que les acquis se transfèrent dans tout le produit. Restez cohérent pour aider la compréhension, sans conserver éternellement un mauvais modèle.",
  },
  "ix-08": {
    frontQuestion: "Quel principe préfère montrer des options reconnaissables plutôt que d’exiger un effort de mémoire ?",
    frontScenario: "Votre paiement affiche les adresses enregistrées au lieu de demander à vos clients de les retaper de mémoire.",
    backInfo: "Recognition over Recall (reconnaissance plutôt que mémorisation) : réduisez la charge mentale en rendant visibles ou retrouvables les actions, les objets et les informations utiles. Ne demandez un effort de mémoire que quand c’est vraiment inévitable.",
  },
  "ix-09": {
    frontQuestion: "Quelle loi prédit qu’une cible se clique plus vite quand elle est grande et proche ?",
    frontScenario: "Votre action principale sur mobile est minuscule et placée loin de la portée naturelle du pouce.",
    backInfo: "Fitts’s Law (loi de Fitts) : le temps de pointage dépend de la distance et de la taille de la cible. Prévoyez des cibles assez grandes et accessibles, en tenant compte du contexte et de l’accessibilité motrice.",
  },
  "ix-10": {
    frontQuestion: "Quelle loi prédit que décider prend plus de temps quand les choix sont nombreux et complexes ?",
    frontScenario: "Votre menu passe de six options claires à quarante choix équivalents, et vos utilisateurs mettent bien plus longtemps à se décider.",
    backInfo: "Hick’s Law (loi de Hick) : le temps de décision augmente généralement avec le nombre et la complexité des options. Il ne s’agit pas de toujours tout réduire : regroupez, proposez des valeurs par défaut et dévoilez progressivement.",
  },
  "ix-11": {
    frontQuestion: "Quel principe rappelle que vos utilisateurs passent l’essentiel de leur temps sur d’autres produits ?",
    frontScenario: "Votre icône de fermeture maison se comporte autrement que la convention connue de toutes les applications de bureau.",
    backInfo: "Jakob’s Law (loi de Jakob) : vos utilisateurs forgent leurs attentes sur d’autres produits, donc les conventions familières réduisent l’apprentissage. Ne rompez une convention que si le bénéfice dépasse clairement le coût d’apprentissage.",
  },
  "ix-12": {
    frontQuestion: "Quel modèle révèle la complexité peu à peu pour ne montrer d’abord que l’essentiel ?",
    frontScenario: "Votre écran d’analyse avancée affiche d’abord les filtres principaux, tandis que les réglages pointus restent disponibles sur demande.",
    backInfo: "Progressive Disclosure (divulgation progressive) : montrez d’abord les informations et actions essentielles, puis révélez la complexité avancée au besoin. Vous réduisez la charge initiale sans retirer durablement la puissance.",
  },
  "ix-13": {
    frontQuestion: "Quel principe cherche à empêcher les erreurs prévisibles plutôt qu’à les réparer après coup ?",
    frontScenario: "Votre produit refuse une date de fin antérieure à la date de début au lieu de l’accepter pour échouer plus tard.",
    backInfo: "Error Prevention (prévention des erreurs) : réduisez les risques d’erreur par des contraintes, des valeurs par défaut sensées, des aperçus et des choix clairs. Quand une erreur est prévisible, mieux vaut l’empêcher que la réparer.",
  },
  "ix-14": {
    frontQuestion: "Quel principe permet à vos utilisateurs de réparer facilement leurs erreurs ?",
    frontScenario: "L’un de vos utilisateurs supprime un tableau par mégarde et a besoin d’un moyen sûr d’annuler aussitôt.",
    backInfo: "Forgiving Design (conception indulgente) : prévoyez la récupération après les erreurs humaines ordinaires grâce à la réversibilité, à l’annulation, à l’enregistrement automatique, à la corbeille ou à des parcours de restauration clairs.",
  },
  "ix-15": {
    frontQuestion: "Qu’est-ce qui permet d’agir directement sur des objets visibles comme les glisser ou les redimensionner ?",
    frontScenario: "Votre canevas de création permet de saisir un objet et de le redimensionner plutôt que de passer par un formulaire de commandes.",
    backInfo: "Direct Manipulation (manipulation directe) : interaction avec des objets visibles par des actions immédiates accompagnées d’un retour. Très intuitive, elle demande parfois une solution équivalente sans glisser-déposer pour rester accessible.",
  },
  "ix-16": {
    frontQuestion: "Qu’est-ce qui fait que la même action produit des effets différents selon un état persistant ?",
    frontScenario: "Chez vous, la même touche saisit du texte dans un état mais déclenche des raccourcis dans un autre.",
    backInfo: "Mode (mode) : état du système qui change l’interprétation des actions. Les modes cachés ou mal signalés provoquent des erreurs ; affichez le mode actif et prévoyez une sortie facile.",
  },
  "ix-17": {
    frontQuestion: "Qu’est-ce qui décrit l’état courant d’un composant, comme chargé, sélectionné, désactivé ou en erreur ?",
    frontScenario: "Votre bouton peut être au repos, survolé, focalisé, pressé, en chargement, désactivé ou en réussite.",
    backInfo: "State (état) : condition courante qui détermine la présentation et le comportement. Concevez explicitement chaque état pour éviter les cas oubliés et les retours incohérents.",
  },
  "ix-18": {
    frontQuestion: "Quel écran s’affiche quand il n’y a encore aucun contenu et doit guider la suite ?",
    frontScenario: "Votre nouveau projet ne contient aucune tâche, et un panneau blanc vide laisserait vos utilisateurs sans repère.",
    backInfo: "Empty State (état vide) : conception intentionnelle de l’absence de contenu. Expliquez à quoi sert la zone, pourquoi elle est vide et proposez l’action suivante adaptée quand il y en a une.",
  },
  "ui-01": {
    frontQuestion: "Quel principe utilise taille, graisse, placement, couleur et espacement pour dire quoi regarder en premier ?",
    frontScenario: "Votre tableau de bord contient toutes les bonnes informations, mais chaque élément se bat à égalité pour attirer l’attention.",
    backInfo: "Visual Hierarchy (hiérarchie visuelle) : ordonnancement visuel de l’importance qui guide l’attention et le balayage. Faites-la refléter les priorités de la tâche, pas seulement l’élément le plus décoratif.",
  },
  "ui-02": {
    frontQuestion: "Quel principe crée des différences visibles pour distinguer éléments, priorités et états ?",
    frontScenario: "Vos actions principales et secondaires se ressemblent tellement que vos utilisateurs hésitent avant de cliquer.",
    backInfo: "Contrast (contraste) : différence de propriétés visuelles comme la taille, la graisse, la luminance, la forme ou l’espacement. Il soutient la hiérarchie et la différenciation ; le contraste des couleurs répond en plus à des exigences d’accessibilité.",
  },
  "ui-03": {
    frontQuestion: "Quel principe gestaltiste dit que les éléments proches sont perçus comme allant ensemble ?",
    frontScenario: "Chez vous, les libellés sont plus proches des mauvais champs que de ceux qu’ils décrivent.",
    backInfo: "Proximity (proximité) : la proximité spatiale suggère le regroupement. Espacez volontairement vos éléments pour former des groupes clairs et séparer ce qui n’a pas de lien.",
  },
  "ui-04": {
    frontQuestion: "Quel principe ordonne le visuel en alignant les éléments sur des bords ou des axes communs ?",
    frontScenario: "Vos cartes utilisent des bords gauches et des lignes de base légèrement différents, et la mise en page semble instable.",
    backInfo: "Alignment (alignement) : positionnement cohérent le long de lignes visuelles partagées. Un bon alignement crée des relations et réduit le bruit visuel, même sans grille apparente.",
  },
  "ui-05": {
    frontQuestion: "Quel principe crée de la cohérence en réutilisant volontairement les mêmes motifs visuels ?",
    frontScenario: "Chacune de vos rubriques de réglages invente son propre style de titre et ses propres séparateurs.",
    backInfo: "Repetition (répétition) : réutilisation des décisions visuelles pour créer rythme, cohérence et facilité d’apprentissage. Rendez-la systématique plutôt que le fruit de duplications accidentelles.",
  },
  "ui-06": {
    frontQuestion: "Comment appelle-t-on l’espace volontairement vide qui sépare les groupes et aère le contenu ?",
    frontScenario: "Votre page de tarifs devient bien plus lisible une fois que ses sections et ses libellés respirent grâce à des espacements plus nets.",
    backInfo: "Whitespace (espace blanc) : espace vide ou négatif qui établit les regroupements, la hiérarchie et la lisibilité. C’est un espace de mise en page fonctionnel, pas du vide « gaspillé ».",
  },
  "ui-07": {
    frontQuestion: "Quel système structure vos mises en page avec colonnes, rangées et gouttières ?",
    frontScenario: "Vos différentes pages doivent aligner leurs contenus alors que leurs modules varient.",
    backInfo: "Grid (grille) : cadre de mise en page pour un alignement cohérent et une structure proportionnée. Elle guide la composition sans obliger chaque élément à occuper des modules identiques.",
  },
  "ui-08": {
    frontQuestion: "Quel système remplace vos espacements arbitraires par des paliers limités et réutilisables ?",
    frontScenario: "Votre produit mélange des espacements de 13, 17, 19 et 23 px, presque identiques à l’œil mais impossibles à maintenir.",
    backInfo: "Spacing Scale (échelle d’espacement) : jeu défini de valeurs d’espacement utilisé partout dans vos mises en page et composants. Elle améliore le rythme et la maintenance, tout en laissant place à des exceptions documentées.",
  },
  "ui-09": {
    frontQuestion: "Quel principe typographique distingue titres, corps, libellés et textes secondaires selon leur importance ?",
    frontScenario: "Votre longue page de réglages utilise la même taille et la même graisse pour toutes ses lignes.",
    backInfo: "Typographic Hierarchy (hiérarchie typographique) : usage systématique de la taille, de la graisse, de l’espacement et du style pour communiquer les niveaux d’information. Appuyez-la sur le balayage et la structure sémantique.",
  },
  "ui-10": {
    frontQuestion: "Quel jeu prédéfini de tailles de police assure des paliers typographiques cohérents dans tout le produit ?",
    frontScenario: "Vos designers créent sans cesse des tailles de titres et de libellés presque identiques.",
    backInfo: "Type Scale (échelle typographique) : jeu maîtrisé de tailles de texte pour vos différents rôles. Le rapport peut être modulaire ou sur mesure : mettez-le au service de l’interface plutôt que d’une règle mathématique.",
  },
  "ui-11": {
    frontQuestion: "Quelle propriété typographique règle la distance verticale entre les lignes de texte ?",
    frontScenario: "Votre texte courant semble étouffé alors que la taille de police reste lisible.",
    backInfo: "Line Height — Leading (interlignage) : espacement vertical entre les lignes de texte. Choisissez-le selon la police, la taille, la longueur des lignes et le contexte pour améliorer la lisibilité.",
  },
  "ui-12": {
    frontQuestion: "Qu’est-ce qui limite la largeur d’une colonne de texte pour ne pas fatiguer la lecture ?",
    frontScenario: "Sur votre page d’article pour ordinateur, les paragraphes s’étirent sur presque toute la largeur d’un écran de 1600 px.",
    backInfo: "Line Length (longueur de ligne) : largeur d’une ligne de texte, souvent exprimée en nombre de caractères. Visez une plage confortable selon votre typographie et votre contexte, sans faire d’un seul nombre une loi absolue.",
  },
  "ui-13": {
    frontQuestion: "Quelle approche adapte vos mises en page aux différentes tailles d’écran plutôt qu’à un seul format fixe ?",
    frontScenario: "Votre produit doit rester utilisable sur téléphones, tablettes et grands écrans d’ordinateur.",
    backInfo: "Responsive Design (design adaptatif) : interfaces qui s’ajustent à l’espace et aux conditions grâce à des mises en page flexibles, des requêtes de média ou de conteneur et des composants adaptatifs. C’est bien plus que rapetisser un écran d’ordinateur.",
  },
  "ui-14": {
    frontQuestion: "Qu’est-ce qui désigne la largeur ou la condition où votre mise en page change volontairement de structure ?",
    frontScenario: "Vos réglages sur deux colonnes passent sur une seule colonne quand il n’y a plus assez de place pour les deux.",
    backInfo: "Breakpoint (point de rupture) : seuil où vos styles ou règles de mise en page changent. Choisissez-le selon les besoins du contenu et des composants plutôt que selon les seuls modèles d’appareils nommés.",
  },
};
