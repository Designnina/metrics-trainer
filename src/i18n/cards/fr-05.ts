import type { CardOverride } from '../cardOverrides';

export const fr05: Record<string, CardOverride> = {
  "ui-15": {
    frontQuestion: "Que vous apprend la densité d’une interface sur la quantité d’informations affichées ?",
    frontScenario: "Votre outil de trading affiche des tableaux très compacts, mais vos nouveaux clients se perdent dès que l’écran est trop chargé. Vous hésitez entre aérer et condenser.",
    backInfo: "UI Density (densité d’interface) : quantité d’informations et de contrôles présentés par zone d’écran. Adaptez-la à la fréquence d’usage, à l’expertise de vos utilisateurs, à l’appareil et au coût de l’erreur ; multiplier les blancs n’est pas toujours la bonne solution.",
  },
  "ui-16": {
    frontQuestion: "Quel système vous permet d’attribuer vos couleurs selon leur fonction plutôt que selon leur valeur brute ?",
    frontScenario: "Vous préparez les thèmes clair et sombre, mais vos composants gardent une valeur bleue écrite en dur comme couleur de texte. Chaque ajustement devient un casse-tête.",
    backInfo: "Semantic Color Roles (rôles coloriels sémantiques) : couleurs nommées et appliquées selon leur usage — fond, texte, accent, succès, avertissement, danger — plutôt que par valeur hexadécimale. Appuyez-vous sur ces rôles pour fiabiliser vos thèmes, votre accessibilité et la cohérence du système.",
  },
  "ds-01": {
    frontQuestion: "Qu’est-ce qui vous permet de construire un produit cohérent à grande échelle sans tout réinventer ?",
    frontScenario: "Cinq équipes reconstruisent chacune leurs boutons et leurs formulaires à leur façon. Votre produit part dans tous les sens et le code se fragmente.",
    backInfo: "Design System (système de design) : ensemble lié de fondations réutilisables, de composants, de modèles, de documentation et de règles de fonctionnement. C’est bien plus qu’une simple bibliothèque d’écrans : la gouvernance, la maintenance et l’adoption en font partie. Investissez-y pour limiter la dispersion.",
  },
  "ds-02": {
    frontQuestion: "Quelle valeur nommée vous permet de réutiliser une décision de design sans la dupliquer dans chaque composant ?",
    frontScenario: "Vous avez écrit le même gris foncé dans des dizaines d’écrans et la moindre retouche vous oblige à tout reprendre. Vous cherchez une source unique.",
    backInfo: "Design Token (jeton de design) : représentation nommée d’une décision de design — couleur, espacement, typographie, durée — indépendante d’un composant. Centralisez vos valeurs pour les partager entre outils et plateformes, et documentez leur type et leur usage.",
  },
  "ds-03": {
    frontQuestion: "Quel type de jeton représente une valeur brute de base, sans encore exprimer son usage dans l’interface ?",
    frontScenario: "Votre système stocke une nuance de bleu que d’autres jetons pourront réutiliser. Vous voulez garder cette matière première bien distincte de ses usages.",
    backInfo: "Primitive / Reference Token (jeton primitif / de référence) : jeton fondamental qui porte une valeur brute réutilisable, comme une nuance de palette ou un pas d’espacement. Ne l’utilisez pas directement dans vos composants quand un rôle sémantique existe ; servez-vous-en comme base.",
  },
  "ds-04": {
    frontQuestion: "Quel type de jeton vous permet de changer de thème sans réécrire vos composants ?",
    frontScenario: "En mode sombre, votre texte principal doit devenir clair tout en gardant le même rôle. Vous ne voulez toucher à aucun composant.",
    backInfo: "Semantic Token (jeton sémantique) : jeton nommé selon son intention ou son usage, comme « texte principal » ou « surface danger », plutôt que selon sa valeur brute. Utilisez-le pour rendre vos thèmes interchangeables et pour parler le même langage entre design et code.",
  },
  "ds-05": {
    frontQuestion: "Quel mécanisme vous évite de dupliquer une valeur brute quand un jeton doit suivre un autre jeton ?",
    frontScenario: "Votre texte principal doit toujours suivre la couleur de premier plan neutre du thème actuel. Vous refusez de copier son code couleur à la main.",
    backInfo: "Token Alias / Reference (alias de jeton / référence) : valeur de jeton qui pointe vers un autre jeton au lieu de dupliquer la valeur brute. Créez ces liens entre couches pour que vos changements de thème se propagent partout de façon cohérente.",
  },
  "ds-06": {
    frontQuestion: "Qu’est-ce qui permet à une même décision de design de s’afficher différemment selon le thème ?",
    frontScenario: "Votre surface par défaut doit être claire en mode clair et foncée en mode sombre, sans que vos composants changent de référence. Vous cherchez le bon réglage.",
    backInfo: "Mode / Theme (mode / thème) : ensemble contextuel de valeurs de jetons ou de règles de style pour un thème visuel. Faites dépendre vos composants de l’intention sémantique plutôt que de valeurs écrites en dur pour chaque thème.",
  },
  "ds-07": {
    frontQuestion: "Qu’est-ce qui vous permet de réutiliser un bloc d’interface complet au lieu de le reconstruire à chaque écran ?",
    frontScenario: "Vos boutons, cases à cocher et fenêtres sont redessinés et recodés à chaque page. Vous perdez un temps fou et la qualité varie.",
    backInfo: "Component (composant) : brique d’interface réutilisable qui combine structure, style et comportement, avec des états définis. Ne créez un composant que pour un usage clair et documenté, pas seulement parce que deux éléments se ressemblent.",
  },
  "ds-08": {
    frontQuestion: "Comment appelez-vous une déclinaison légitime d’un même composant sans en créer un nouveau ?",
    frontScenario: "Votre bouton existe en version principale ou secondaire, petite ou grande, tout en gardant le même comportement de base. Vous voulez structurer cette famille.",
    backInfo: "Variant (variante) : déclinaison définie au sein d’une même famille de composants, comme la taille, la hiérarchie ou l’état. Ne gardez que les différences vraiment prises en charge, pas toutes les combinaisons accidentelles.",
  },
  "ds-09": {
    frontQuestion: "Qu’est-ce qui décrit les propriétés, les états et les comportements réglables d’un composant pour toute l’équipe ?",
    frontScenario: "Designers et développeurs ne sont pas d’accord sur ce que permet votre fenêtre de dialogue : taille, titre, actions, fermeture, états. Vous voulez une référence commune.",
    backInfo: "Component API (API de composant) : contrat qui décrit les réglages possibles et les comportements pris en charge par un composant. Clarifiez cette API pour limiter les adaptations locales et mieux aligner design et code.",
  },
  "ds-10": {
    frontQuestion: "Quelle solution réutilisable vous aide à résoudre un problème récurrent qui dépasse un simple bouton ?",
    frontScenario: "Votre recherche avec filtres, résultats vides et pagination revient dans plusieurs produits. Vous voulez arrêter de la réinventer à chaque fois.",
    backInfo: "UI Pattern (patron d’interface) : solution de composition et d’interaction réutilisable pour un problème récurrent. Plus large et plus contextuelle qu’un composant isolé, elle vous aide à stabiliser les parcours fréquents.",
  },
  "ds-11": {
    frontQuestion: "Quel modèle d’organisation vous permet de garder votre système de design cohérent dans le temps ?",
    frontScenario: "Tout le monde peut modifier votre bibliothèque, mais personne ne gère la qualité, l’accessibilité, les versions ni les changements majeurs. Vous craignez la dérive.",
    backInfo: "Design System Governance (gouvernance du système de design) : rôles, processus de décision et règles de maintenance qui gardent le système cohérent. Clarifiez qui décide et qui entretient, tout en laissant vos équipes contribuer sans ambiguïté.",
  },
  "ds-12": {
    frontQuestion: "Quel processus permet à vos équipes de proposer leurs bonnes idées au système partagé au lieu de garder des copies locales ?",
    frontScenario: "Une équipe a créé un excellent sélecteur de période qui servirait à six autres équipes. Vous voulez l’intégrer proprement au système commun.",
    backInfo: "Contribution Model (modèle de contribution) : circuit défini pour proposer, évaluer, construire, documenter et publier un ajout au système de design. Utilisez-le pour équilibrer qualité centrale et expertise répartie.",
  },
  "ds-13": {
    frontQuestion: "Qu’est-ce qui vous permet d’annoncer clairement les changements compatibles, les ajouts et les ruptures de votre système ?",
    frontScenario: "Renommer une propriété de composant risque de casser des dizaines d’écrans en production. Vous devez prévenir vos utilisateurs à l’avance.",
    backInfo: "Versioning (gestion des versions) : gestion de versions identifiables pour que vos utilisateurs comprennent les changements et leur compatibilité. Inspirez-vous des principes sémantiques pour le code, et communiquez clairement aussi pour vos ressources graphiques.",
  },
  "ds-14": {
    frontQuestion: "Quel statut indique que vous ne devez plus utiliser un composant, un jeton ou une API et qu’il existe un remplacement ?",
    frontScenario: "Un ancien champ de saisie traîne encore dans votre produit alors qu’une version accessible existe. Vous voulez guider la migration sans tout casser.",
    backInfo: "Deprecation (fin de vie annoncée) : marquage d’un élément comme obsolète, en expliquant pourquoi, par quoi le remplacer, comment et quand migrer. Annoncez vos retraits à l’avance au lieu de supprimer en silence.",
  },
  "ds-15": {
    frontQuestion: "Que signifie l’alignement entre votre composant documenté en design et son équivalent codé en production ?",
    frontScenario: "Vos maquettes montrent cinq variantes de bouton alors que le code en gère huit avec d’autres noms. Vous ne savez plus quelle référence fait foi.",
    backInfo: "Design–Code Parity (parité design-code) : alignement entre ressources design et composants codés — même structure, mêmes propriétés, mêmes états. Ne vous contentez pas d’une ressemblance visuelle ; alignez aussi les propriétés et les comportements quand c’est pertinent.",
  },
  "ds-16": {
    frontQuestion: "Quelle approche de test automatisé vous signale les changements visuels involontaires de votre interface ?",
    frontScenario: "Une mise à jour de dépendance a modifié silencieusement l’espacement de tous vos formulaires. Vous l’avez découvert trop tard.",
    backInfo: "Visual Regression Testing (test visuel de non-régression) : comparaison automatisée d’instantanés ou d’images d’écrans pour détecter les changements inattendus de style ou de mise en page. Utilisez-le en complément de vos tests fonctionnels et d’accessibilité, pas à leur place.",
  },
  "a11y-01": {
    frontQuestion: "Quelle approche vous aide à concevoir pour une grande diversité de capacités et de contextes plutôt que pour un utilisateur moyen supposé ?",
    frontScenario: "Vous préparez une vérification d’identité et vous pensez aux limitations permanentes, temporaires et situationnelles. Vous voulez réduire les exclusions dès la conception.",
    backInfo: "Inclusive Design (conception inclusive) : conception avec des personnes et des contextes variés pour réduire l’exclusion et élargir la participation. Les normes d’accessibilité en sont une part essentielle, mais la démarche va plus loin que la simple conformité.",
  },
  "a11y-02": {
    frontQuestion: "Quels sont les quatre grands principes qui structurent les exigences d’accessibilité des WCAG ?",
    frontScenario: "Votre équipe veut comprendre le modèle général de l’accessibilité web plutôt que d’apprendre par cœur des critères isolés. Vous cherchez la vue d’ensemble.",
    backInfo: "POUR — Perceivable, Operable, Understandable, Robust (Perceptible, Utilisable, Compréhensible, Robuste) : les quatre principes des WCAG. Tout contenu ou interface doit être perceptible, utilisable, compréhensible et robuste ; les critères de succès se rattachent à ces principes. Appuyez-vous sur ce cadre pour organiser vos efforts.",
  },
  "a11y-03": {
    frontQuestion: "Que devez-vous privilégier avant d’ajouter de l’ARIA pour que vos contrôles restent compréhensibles par les technologies d’assistance ?",
    frontScenario: "Vous avez fabriqué un bouton cliquable à partir d’une simple case stylée, et vous devez bricoler tout le comportement clavier et lecteur d’écran. Vous cherchez plus simple.",
    backInfo: "Semantic HTML (HTML sémantique) : utilisation des éléments natifs selon leur sens — boutons, titres, listes, contrôles de formulaire. Ces éléments offrent déjà le bon sens et les bons comportements ; servez-vous-en avant de recréer un contrôle générique avec du script.",
  },
  "a11y-04": {
    frontQuestion: "Qu’est-ce qui indique aux technologies d’assistance le nom d’un contrôle ou d’un élément interactif ?",
    frontScenario: "Votre bouton de fermeture avec une simple icône est visible, mais le lecteur d’écran annonce seulement « bouton ». Vos utilisateurs ne savent pas à quoi il sert.",
    backInfo: "Accessible Name (nom accessible) : texte exposé aux technologies d’assistance pour nommer un élément, issu du texte visible, des étiquettes, du texte alternatif ou d’autres sources prévues. Vérifiez que ce nom correspond bien à l’action attendue.",
  },
  "a11y-05": {
    frontQuestion: "Qu’est-ce qui garantit que vous pouvez tout utiliser sans souris, uniquement au clavier ?",
    frontScenario: "Vous naviguez dans vos formulaires et vos fenêtres uniquement au clavier ou avec un contacteur. Certaines actions restent inaccessibles.",
    backInfo: "Keyboard Accessibility (accessibilité au clavier) : possibilité d’atteindre et d’utiliser toutes les fonctions essentielles avec un clavier ou un dispositif compatible, quand c’est pertinent. Évitez les pièges au clavier et reproduisez les comportements attendus pour vos composants personnalisés.",
  },
  "a11y-06": {
    frontQuestion: "Qu’est-ce qui permet aux personnes naviguant au clavier de voir où elles se trouvent ?",
    frontScenario: "Vous naviguez au clavier entre vos boutons, mais votre design a supprimé le contour du navigateur sans proposer de remplacement. Vous êtes perdu.",
    backInfo: "Visible Focus Indicator (indicateur visible de focus) : mise en valeur perceptible qui montre quel élément reçoit le focus clavier. Ne supprimez jamais l’indication de focus sans offrir une alternative bien visible et suffisamment contrastée.",
  },
  "a11y-07": {
    frontQuestion: "Pourquoi l’ordre de navigation au clavier doit-il suivre le sens de votre interface ?",
    frontScenario: "Votre paiement réorganisé visuellement fait sauter la touche de tabulation du paiement vers la livraison, puis vers l’en-tête. Vous perdez le fil du parcours.",
    backInfo: "Logical Focus Order (ordre logique de focus) : séquence de focus qui préserve le sens et l’utilisation de l’interface. Vérifiez que vos réorganisations visuelles ne créent pas une navigation au clavier incohérente.",
  },
  "a11y-08": {
    frontQuestion: "Que mesure le ratio de contraste pour rendre votre texte vraiment lisible sur son fond ?",
    frontScenario: "Votre texte courant gris clair sur fond blanc semble élégant, mais beaucoup de vos lecteurs peinent à le déchiffrer. Vous voulez une mesure objective.",
    backInfo: "Text Contrast Ratio (ratio de contraste du texte) : mesure qui indique si votre texte se distingue assez de son fond. Les WCAG 2.2 AA demandent en général au moins 4,5:1 pour le texte courant et 3:1 pour le grand texte, avec des exceptions définies. Fiez-vous à la luminance relative, pas à votre impression.",
  },
  "a11y-09": {
    frontQuestion: "Quelle exigence de contraste s’applique aux contours de vos composants et à vos éléments graphiques, pas seulement au texte ?",
    frontScenario: "La bordure de votre champ et votre témoin de focus sont si pâles que vos utilisateurs ne voient pas où agir. Vous pensiez que seul le texte comptait.",
    backInfo: "Non-text Contrast (contraste des éléments non textuels) : critère WCAG qui demande un contraste suffisant pour les informations visuelles nécessaires à l’identification des composants et des objets graphiques, en général 3:1 avec les couleurs adjacentes quand le critère s’applique. Contrôlez aussi vos icônes et vos bordures.",
  },
  "a11y-10": {
    frontQuestion: "Quelle taille minimale vos cibles tactiles doivent-elles respecter selon les WCAG 2.2 ?",
    frontScenario: "Vos petits boutons d’icônes sont serrés sur mobile et vos utilisateurs les activent par erreur. Vous cherchez le seuil à respecter.",
    backInfo: "Target Size (Minimum) — WCAG 2.5.8 (taille des cibles – minimum) : critère WCAG 2.2 AA qui demande des cibles d’au moins 24 × 24 pixels CSS ou le respect des espacements et exceptions prévus. Prévoyez des cibles encore plus grandes quand c’est possible pour votre confort d’usage.",
  },
  "a11y-11": {
    frontQuestion: "Que devez-vous proposer quand une fonction repose sur le glisser-déposer pour rester utilisable par tous ?",
    frontScenario: "Votre réorganisation de liste ne fonctionne qu’en cliquer-glisser, et certains de vos utilisateurs ne peuvent pas réaliser ce geste avec précision. Vous cherchez une alternative.",
    backInfo: "Dragging Movements — WCAG 2.5.7 (mouvements de glissement) : critère WCAG 2.2 qui demande une alternative utilisable avec un simple pointeur — boutons ou menus — quand une fonction utilise le glissement, sauf si ce geste est essentiel. Ajoutez cette alternative pour sécuriser vos parcours.",
  },
  "a11y-12": {
    frontQuestion: "Que devez-vous rédiger pour transmettre à une personne aveugle le sens d’une image importante ?",
    frontScenario: "Votre graphique d’évolution des ventes trimestrielles n’a aucune description équivalente. Vos utilisateurs aveugles passent à côté de l’information.",
    backInfo: "Alt Text — Text Alternative (texte alternatif) : équivalent concis qui communique l’objet ou le contenu pertinent d’un contenu non textuel. Décrivez ce qui compte vraiment, et laissez les images purement décoratives ignorées par les technologies d’assistance.",
  },
  "a11y-13": {
    frontQuestion: "Quelle alternative synchronisée rend l’audio de vos vidéos accessible aux personnes sourdes ?",
    frontScenario: "Votre tutoriel produit explique les étapes uniquement à la voix, sans les montrer à l’image. Vos utilisateurs sourds ne peuvent pas suivre.",
    backInfo: "Captions (sous-titres) : texte synchronisé qui restitue les paroles et les sons non verbaux importants de la vidéo. Selon vos contenus et les critères applicables, prévoyez aussi une transcription ou une audiodescription.",
  },
  "a11y-14": {
    frontQuestion: "Quelle préférence de vos utilisateurs devez-vous respecter quand vos animations peuvent gêner ?",
    frontScenario: "Votre parcours d’accueil très animé avec effets de parallaxe donne le tournis à certains de vos utilisateurs. Vous voulez garder des transitions confortables.",
    backInfo: "Reduced Motion (réduction des mouvements) : prise en compte de préférences comme « prefers-reduced-motion » pour supprimer ou atténuer les mouvements non essentiels. Gardez vos changements d’état compréhensibles sans imposer d’animations spectaculaires.",
  },
  "a11y-15": {
    frontQuestion: "Quelle spécification ajoute du sens accessible à vos composants web quand le HTML natif ne suffit pas ?",
    frontScenario: "Votre arborescence personnalisée doit exposer ses rôles, ses états et ses relations aux technologies d’assistance. Le HTML seul n’y suffit pas.",
    backInfo: "ARIA — Accessible Rich Internet Applications (applications Internet riches et accessibles) : spécification du W3C qui définit rôles, états et propriétés pour le sens accessible. Mieux vaut aucune ARIA qu’une mauvaise ARIA ; gardez le HTML natif chaque fois qu’il apporte déjà le bon sens et le bon comportement.",
  },
  "a11y-16": {
    frontQuestion: "Que demandent les WCAG 2.2 pour que votre connexion ne repose pas sur des tests de mémoire ?",
    frontScenario: "Votre connexion oblige à mémoriser un mot de passe puis à recopier un code à usage unique, sans gestionnaire de mots de passe ni copier-coller. Beaucoup d’utilisateurs échouent.",
    backInfo: "Accessible Authentication — WCAG 3.3.8 (authentification accessible) : critère WCAG 2.2 AA qui limite les tests de fonction cognitive lors de l’authentification, sauf si une alternative ou un mécanisme autorisé est proposé. Laissez vos utilisateurs s’appuyer sur gestionnaires et copier-coller au lieu de les bloquer.",
  },
  "a11y-17": {
    frontQuestion: "Que devez-vous éviter de redemander à vos utilisateurs quand ils ont déjà saisi une information dans le même parcours ?",
    frontScenario: "Votre commande en plusieurs étapes fait retaper la même adresse sur deux écrans de suite. Vos clients s’agacent et abandonnent.",
    backInfo: "Redundant Entry — WCAG 3.3.7 (saisie redondante) : critère WCAG 2.2 qui demande de remplir automatiquement ou de proposer en choix toute information déjà saisie dans le même processus, sauf exceptions essentielles ou de sécurité. Épargnez à vos utilisateurs ces ressaisies inutiles.",
  },
  "a11y-18": {
    frontQuestion: "Quel comportement permet à votre contenu de rester utilisable quand vos utilisateurs zooment ou rétrécissent la fenêtre ?",
    frontScenario: "À 400 % de zoom, vos étiquettes se chevauchent et vos lecteurs doivent faire défiler horizontalement chaque ligne. La lecture devient impossible.",
    backInfo: "Reflow (reformattage) : exigence WCAG qui permet de lire et d’utiliser le contenu avec une largeur équivalente étroite, sans perte d’information ni de fonction, sauf pour les contenus qui exigent vraiment une double dimension. Testez vos écrans étroits sans défilement horizontal pour le texte courant.",
  },
  "dl-01": {
    frontQuestion: "En Scrum, qu’est-ce qui rassemble tout le travail à prévoir pour améliorer votre produit ?",
    frontScenario: "Vos apprentissages changent sans cesse ce que vous devrez construire ou corriger ensuite. Vous cherchez la source unique qui reflète ces priorités.",
    backInfo: "Product Backlog (carnet de produit) : liste ordonnée et évolutive de tout ce qui est nécessaire pour améliorer le produit, source unique du travail de l’équipe Scrum. Faites-la évoluer au fil de vos apprentissages.",
  },
  "dl-02": {
    frontQuestion: "En Scrum, quel plan contient votre objectif de sprint, vos éléments choisis et votre plan d’action ?",
    frontScenario: "Pendant votre sprint, vous ajustez votre plan au fur et à mesure de vos découvertes. Vous voulez savoir où vit ce plan vivant.",
    backInfo: "Sprint Backlog (carnet de sprint) : plan par et pour les développeurs, avec l’objectif de sprint, les éléments choisis et le plan de réalisation. Mettez-le à jour tout au long du sprint.",
  },
  "dl-03": {
    frontQuestion: "En Scrum, comment appelez-vous le cycle court qui transforme vos idées en valeur ?",
    frontScenario: "Votre équipe travaille par cycles de deux semaines avec planification, travail quotidien, revue et rétrospective. Vous cherchez le nom de ce cadre.",
    backInfo: "Sprint (sprint) : événement Scrum à durée fixe d’un mois ou moins. Un nouveau sprint démarre juste après le précédent ; vous pouvez clarifier le périmètre tout en protégeant l’objectif.",
  },
  "dl-04": {
    frontQuestion: "Quel objectif unique donne sa cohérence à votre sprint tout en laissant de la souplesse sur le travail exact ?",
    frontScenario: "Plusieurs éléments de votre carnet changent, mais vous avez toujours besoin d’une bonne raison qui explique pourquoi ce sprint compte. Vous la formulez ensemble.",
    backInfo: "Sprint Goal (objectif de sprint) : objectif unique du sprint. Il donne le cap et la souplesse : vous pouvez renégocier le périmètre sans trahir cet objectif.",
  },
  "dl-05": {
    frontQuestion: "Quel engagement qualité partagé vous permet de dire qu’un travail est vraiment terminé ?",
    frontScenario: "Une équipe déclare une fonction « terminée » avant les tests d’accessibilité, une autre exige des contrôles prêts pour la mise en ligne. Vous voulez une règle commune.",
    backInfo: "Definition of Done (définition du terminé) : description formelle de l’état exigé pour que votre incrément soit reconnu comme terminé et réponde aux mesures qualité. Utilisez-la pour rendre votre notion de fini transparente.",
  },
  "dl-06": {
    frontQuestion: "Quelle activité continue vous permet de clarifier et de découper vos éléments de carnet avant le sprint ?",
    frontScenario: "Une grosse demande floue doit être discutée, découpée et précisée avant que vous envisagiez de la prendre en sprint. Vous organisez ce travail en amont.",
    backInfo: "Product Backlog Refinement (affinage du carnet de produit) : activité continue qui consiste à découper et à préciser vos éléments — description, ordre, taille. Ce n’est pas un événement Scrum formel ; faites-en une habitude régulière.",
  },
  "dl-07": {
    frontQuestion: "En Scrum, quel événement vous permet d’examiner le résultat du sprint avec vos parties prenantes et d’ajuster la suite ?",
    frontScenario: "Vous montrez vos résultats concrets et vous discutez de l’évolution du marché avec vos parties prenantes. Vous voulez en tirer les prochaines priorités.",
    backInfo: "Sprint Review (revue de sprint) : séance de travail en fin de sprint pour examiner vos résultats et adapter le carnet selon ce qui a changé. Ne la réduisez pas à une simple démonstration ; faites-en un vrai moment de décision.",
  },
  "dl-08": {
    frontQuestion: "En Scrum, quel événement vous aide à mieux travailler ensemble plutôt qu’à revoir le produit livré ?",
    frontScenario: "Après votre livraison, vous discutez de votre collaboration, de vos processus et de vos outils pour progresser au prochain sprint. Vous cherchez le bon cadre.",
    backInfo: "Sprint Retrospective (rétrospective de sprint) : événement pour examiner votre façon de travailler pendant le sprint et planifier des améliorations de qualité et d’efficacité. Concentrez-vous sur votre collaboration.",
  },
  "dl-09": {
    frontQuestion: "Quel format court vous permet d’exprimer un besoin utilisateur avec sa valeur ?",
    frontScenario: "Votre élément de carnet doit dire qui a besoin de quoi et pourquoi, sans devenir un cahier des charges complet. Vous cherchez une formulation simple.",
    backInfo: "User Story (récit utilisateur) : format court de besoin agile, souvent « En tant que…, je veux…, afin de… », pour déclencher la conversation sur le besoin et la valeur. Le modèle reste optionnel ; il ne remplace ni la compréhension partagée ni les critères d’acceptation.",
  },
  "dl-10": {
    frontQuestion: "Qu’est-ce qui définit comment vous jugerez qu’un élément précis est acceptable ?",
    frontScenario: "Designers et développeurs ne sont pas d’accord sur le cas d’une recherche sans résultat : est-ce un comportement terminé ? Vous voulez trancher avant de coder.",
    backInfo: "Acceptance Criteria (critères d’acceptation) : conditions testables qu’un élément précis doit remplir. Clarifiez-y les comportements attendus et les cas limites ; contrairement à votre définition du terminé, ils sont propres à chaque élément.",
  },
  "dl-11": {
    frontQuestion: "Quelle méthode en flux vous permet de visualiser et de gérer votre travail sans sprint imposé ?",
    frontScenario: "Votre équipe traite un flot continu de demandes aux priorités changeantes et veut fluidifier son débit. Les sprints fixes vous freinent.",
    backInfo: "Kanban (kanban) : méthode pour visualiser et gérer votre flux de travail, limiter l’encours et améliorer le débit. Vous pouvez la combiner avec d’autres pratiques agiles.",
  },
  "dl-12": {
    frontQuestion: "Quelle règle vous aide à finir plus en commençant moins de choses à la fois ?",
    frontScenario: "Dix tâches sont « en cours », les blocages s’accumulent et presque rien n’arrive jusqu’au bout. Vous voulez retrouver de la fluidité.",
    backInfo: "WIP Limit — Work in Progress Limit (limite d’encours) : plafond explicite du nombre d’éléments travaillés en même temps dans un état du flux. Fixez cette limite pour révéler vos goulots, réduire le multitâche et lisser votre débit.",
  },
  "dl-13": {
    frontQuestion: "Quelle métrique de flux mesure le temps écoulé entre le vrai début et la fin d’un travail ?",
    frontScenario: "Votre ticket attend un mois dans le carnet, puis met quatre jours entre le démarrage du développement et sa fin. Vous voulez isoler la phase active.",
    backInfo: "Cycle Time (temps de cycle) : temps écoulé entre le début réel du travail et sa fin, selon votre définition du flux. Concentrez-vous sur ce débit actif, distinct de l’attente totale avant livraison.",
  },
  "dl-14": {
    frontQuestion: "Quelle métrique de flux mesure tout le temps écoulé entre la demande et la livraison, attente comprise ?",
    frontScenario: "La demande d’un client patiente trois semaines avant le développement, puis met quatre jours à être terminée. Vous voulez refléter l’attente vécue.",
    backInfo: "Lead Time (délai de livraison) : temps écoulé entre le point de demande ou d’engagement défini et la livraison. Il inclut files et attentes, et reflète donc mieux l’attente de vos clients que le seul temps de cycle.",
  },
};
