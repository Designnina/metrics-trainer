import type { CardOverride } from '../cardOverrides';

export const fr03: Record<string, CardOverride> = {
  "ur-15": {
    frontQuestion: "Quelle méthode d’experts permet de contrôler une interface sans faire appel à des participants ?",
    frontScenario: "Vous devez passer vos nouvelles maquettes au crible rapidement, avant d’organiser des tests avec des utilisateurs.",
    backInfo: "Heuristic Evaluation (évaluation heuristique) : des experts examinent l’interface au regard de principes de convivialité reconnus pour repérer les problèmes probables. Utilisez-la pour dégrossir vite, puis confirmez toujours avec de vrais utilisateurs.",
  },
  "ur-16": {
    frontQuestion: "Quelle méthode d’experts permet de vérifier pas à pas si un nouvel utilisateur saura quoi faire ?",
    frontScenario: "Vous préparez un parcours d’installation destiné à des administrateurs qui le découvrent pour la première fois.",
    backInfo: "Cognitive Walkthrough (parcours cognitif) : vous déroulez chaque étape en vous demandant si la personne comprend le but, repère les commandes, relie l’action au but et saisit le retour du système. Idéal pour travailler la prise en main.",
  },
  "ur-17": {
    frontQuestion: "Que faut-il rédiger pour recruter en étude uniquement des profils adaptés à votre question ?",
    frontScenario: "Vous étudiez des primo-accédants à la propriété et vous vous retrouvez face à des experts de la finance qui connaissent tout par cœur.",
    backInfo: "Screener (questionnaire de sélection) : un court questionnaire qui retient ou écarte les candidats selon des critères liés à vos usages. Définissez ces critères à partir de votre question de recherche, sans suggérer les bonnes réponses.",
  },
  "ur-18": {
    frontQuestion: "Que décrit le moment où de nouveaux entretiens n’apportent presque plus d’enseignements inédits ?",
    frontScenario: "Après une série d’entretiens, vous entendez toujours les mêmes thèmes et chaque échange confirme ce que vous savez déjà.",
    backInfo: "Saturation (saturation) : en recherche qualitative, ce palier où les thèmes vraiment nouveaux se raréfient. Servez-vous-en comme repère lié à votre question, jamais comme un quota automatique de participants.",
  },
  "pd-01": {
    frontQuestion: "Que décrit l’espace des besoins et des douleurs à explorer avant de décider quoi construire ?",
    frontScenario: "Votre équipe débat déjà de fonctionnalités alors que personne n’a vraiment nommé le problème des clients.",
    backInfo: "Problem Space (espace problème) : les besoins, les douleurs, les contraintes et les résultats visés par vos utilisateurs. Restez-y assez longtemps pour éviter de vous enfermer trop tôt dans une solution.",
  },
  "pd-02": {
    frontQuestion: "Que décrit l’ensemble des réponses possibles une fois le problème bien compris ?",
    frontScenario: "Vous savez que les indépendants peinent à relancer leurs factures et vous cherchez maintenant comment les aider concrètement.",
    backInfo: "Solution Space (espace solution) : toutes les façons envisageables de traiter un problème ou une opportunité. Comparez plusieurs pistes au lieu de considérer la première idée comme évidente.",
  },
  "pd-03": {
    frontQuestion: "Par quoi faut-il commencer la découverte quand vous visez un changement mesurable plutôt qu’une fonctionnalité ?",
    frontScenario: "Votre direction demande une recherche dopée à l’IA, mais vous devez d’abord préciser quel progrès cette fonction doit produire.",
    backInfo: "Desired Outcome (résultat visé) : le résultat mesurable que vous cherchez à faire évoluer dans les comportements ou l’activité. Formulez-le ainsi et vous resterez centrés sur la valeur, pas sur le volume de livrables.",
  },
  "pd-04": {
    frontQuestion: "Que faut-il repérer quand un besoin non satisfait peut vous aider à atteindre votre résultat ?",
    frontScenario: "Entretien après entretien, vos acheteurs expliquent qu’ils n’arrivent pas à comparer vos offres avant de payer.",
    backInfo: "Opportunity (opportunité) : un besoin, une douleur ou une envie qui mérite d’être explorée au regard de votre résultat. Décrivez-la sans y glisser de solution, ce n’est pas encore une idée de fonctionnalité.",
  },
  "pd-05": {
    frontQuestion: "Que faut-il nommer quand une conviction doit être vraie pour réussir sans être encore prouvée ?",
    frontScenario: "Vous supposez que vos utilisateurs feront confiance à une recommandation automatique au point d’agir.",
    backInfo: "Assumption (hypothèse de travail) : une conviction non vérifiée qui sous-tend une décision produit. Rendez vos hypothèses explicites pour tester les plus risquées vite et à moindre coût.",
  },
  "pd-06": {
    frontQuestion: "Quel risque produit se demande si les clients veulent vraiment la solution proposée ?",
    frontScenario: "La fonction est faisable techniquement, mais rien ne dit que les utilisateurs changeront leurs habitudes ou paieront.",
    backInfo: "Value Risk (risque de valeur) : le risque que la solution n’apporte pas assez de valeur aux clients. Vérifiez l’attrait, la pertinence, les comportements et l’envie de payer avant d’investir lourdement.",
  },
  "pd-07": {
    frontQuestion: "Quel risque produit se demande si les utilisateurs comprendront et utiliseront l’expérience prévue ?",
    frontScenario: "Vos clients réclament la fonction, mais vos premiers prototypes montrent qu’ils ne parviennent pas à la configurer.",
    backInfo: "Usability Risk (risque d’utilisabilité) : le risque que les utilisateurs n’arrivent pas à se servir efficacement de la solution. Réduisez-le avec des prototypes et des tests d’utilisabilité avant de développer.",
  },
  "pd-08": {
    frontQuestion: "Quel risque produit se demande si vous pouvez construire la solution avec vos moyens techniques ?",
    frontScenario: "Votre idée exige des prédictions presque instantanées, alors que vos données ne se mettent à jour qu’une fois par jour.",
    backInfo: "Feasibility Risk (risque de faisabilité) : le risque de ne pas pouvoir livrer la solution de façon fiable avec vos technologies, vos données et vos délais. Associez l’ingénierie et la data dès la découverte.",
  },
  "pd-09": {
    frontQuestion: "Quel risque produit se demande si la solution reste viable pour votre entreprise ?",
    frontScenario: "Les utilisateurs adorent l’idée, mais la traiter à la main rendrait chaque transaction déficitaire.",
    backInfo: "Viability Risk (risque de viabilité) : le risque que la solution ne tienne pas économiquement ni opérationnellement. Examinez les coûts, le droit, la conformité, les opérations et la stratégie avant de foncer.",
  },
  "pd-10": {
    frontQuestion: "Que faut-il tester en premier quand une conviction fragile peut invalider toute l’idée ?",
    frontScenario: "Votre maquette de place de marché est superbe, mais tout repose sur l’acceptation par les vendeurs d’une réponse en cinq minutes.",
    backInfo: "Riskiest Assumption (hypothèse la plus risquée) : la conviction dont l’échec remettrait le plus en cause votre idée, en croisant incertitude et importance. Testez-la avant de polir les détails secondaires.",
  },
  "pd-11": {
    frontQuestion: "Quelle approche permet de trier vos hypothèses pour décider quoi valider en premier ?",
    frontScenario: "Votre trio produit a listé vingt hypothèses et doit choisir un ordre de validation rationnel.",
    backInfo: "Assumption Mapping (cartographie des hypothèses) : vous positionnez chaque hypothèse selon son importance et le niveau de preuve disponible. Vous concentrez ainsi vos efforts sur ce qui peut vraiment changer la décision.",
  },
  "pd-12": {
    frontQuestion: "Quel test peu coûteux permet de mesurer l’intérêt avant même de développer la fonction ?",
    frontScenario: "Vous hésitez à consacrer six semaines à une fonction d’export et vous voulez un signal concret avant d’investir.",
    backInfo: "Fake Door Test (test de la fausse porte) : vous exposez une porte d’entrée réaliste vers une fonction encore inexistante et vous mesurez les clics ou les inscriptions. Restez honnêtes pour ne pas tromper ni frustrer vos utilisateurs.",
  },
  "pd-13": {
    frontQuestion: "Quelle approche permet d’apprendre en rendant le service à la main avant de l’automatiser ?",
    frontScenario: "Vous préparez chaque semaine à la main des rapports pour cinq clients avant d’investir dans un moteur de reporting.",
    backInfo: "Concierge Test (test concierge) : des humains fournissent le service manuellement pour comprendre les besoins, les usages et l’envie de payer. Assumez ce côté artisanal auprès des participants et tirez-en vos enseignements.",
  },
  "pd-14": {
    frontQuestion: "Quelle approche donne l’illusion de l’automatisation alors que des humains opèrent en coulisses ?",
    frontScenario: "Vous voulez tester un tri intelligent avant l’existence du modèle, avec un opérateur qui classe les demandes à la main.",
    backInfo: "Wizard of Oz Prototype (prototype magicien d’Oz) : l’utilisateur vit une expérience apparemment automatisée, produite en réalité à la main. Parfait pour valider l’interaction et la valeur avant de financer une automatisation coûteuse.",
  },
  "pd-15": {
    frontQuestion: "Quelle équipe resserrée réunit les points de vue produit, design et technique pendant la découverte ?",
    frontScenario: "Vos décisions gagnent en qualité quand la valeur client, l’expérience et les contraintes techniques avancent ensemble plutôt qu’en relais.",
    backInfo: "Product Trio (trio produit) : un groupe resserré qui associe chef de produit, designer et ingénieur dans la découverte continue. Voyez-le comme un mode de collaboration, pas comme une règle d’organigramme.",
  },
  "pd-16": {
    frontQuestion: "Quelle pratique permet d’échanger avec les clients et de tester vos hypothèses en continu ?",
    frontScenario: "Votre équipe parle à des clients chaque semaine et ajuste les opportunités et les solutions au fil de l’eau.",
    backInfo: "Continuous Discovery (découverte continue) : un contact client fréquent, un cadrage des opportunités et des tests réguliers pour réduire les risques. Elle accompagne la réalisation au quotidien au lieu d’une phase unique en amont.",
  },
  "sp-01": {
    frontQuestion: "Que décrit l’état futur que votre produit veut aider à faire advenir ?",
    frontScenario: "Votre équipe a besoin d’un cap durable qui survive aux fonctionnalités et aux plans trimestriels.",
    backInfo: "Product Vision (vision produit) : la description inspirante du futur vers lequel tend votre produit. Elle donne une direction et vous aide à arbitrer, sans détailler le plan d’exécution.",
  },
  "sp-02": {
    frontQuestion: "Que décrit la raison d’être de votre organisation et ceux qu’elle sert aujourd’hui ?",
    frontScenario: "Votre équipe cherche une phrase qui exprime sa mission actuelle plutôt qu’une aspiration lointaine.",
    backInfo: "Mission (mission) : l’énoncé de votre raison d’être présente, de vos publics et de la valeur créée. Elle ancre le quotidien, là où la vision projette vers l’avenir.",
  },
  "sp-03": {
    frontQuestion: "Que faut-il formuler pour expliquer où jouer et comment créer une valeur distincte ?",
    frontScenario: "Votre feuille de route regorge de demandes, mais rien n’explique pourquoi certains marchés comptent plus que d’autres.",
    backInfo: "Product Strategy (stratégie produit) : un ensemble cohérent de choix reliant vision, clients ciblés, problèmes, différenciation et arbitrages. Une vraie stratégie suppose aussi de dire non à des options séduisantes.",
  },
  "sp-04": {
    frontQuestion: "Que décrit un engagement fort vers une direction incertaine mais décisive ?",
    frontScenario: "Votre entreprise fait de la collaboration son levier de croissance de l’année au lieu d’empiler des fonctions isolées.",
    backInfo: "Strategic Bet (pari stratégique) : un investissement conséquent fondé sur une conviction quant à la façon de créer un avantage. Explicitez vos hypothèses et les signaux qui vous feront apprendre en route.",
  },
  "sp-05": {
    frontQuestion: "Quel support permet de partager la direction et l’enchaînement prévus sans promettre un contrat ?",
    frontScenario: "Vos parties prenantes veulent comprendre les thèmes poursuivis et leur logique avant d’entrer dans le détail.",
    backInfo: "Product Roadmap (feuille de route produit) : un support de communication qui montre priorités et progression attendue. Faites-la évoluer avec les preuves, ce n’est pas un planning de livraison figé.",
  },
  "sp-06": {
    frontQuestion: "Quelle feuille de route s’organise autour de problèmes à résoudre plutôt que de fonctions datées ?",
    frontScenario: "Vous voulez vous aligner sur la réduction des échecs à la première installation sans figer la solution six mois à l’avance.",
    backInfo: "Outcome-based Roadmap (feuille de route par résultats) : une feuille structurée par résultats, problèmes clients ou thèmes stratégiques. Vous gardez le cap tout en laissant la place à la découverte de la meilleure solution.",
  },
  "sp-07": {
    frontQuestion: "Quel système d’objectifs associe une ambition qualitative à des résultats mesurables ?",
    frontScenario: "Votre équipe veut une direction audacieuse avec des preuves qui montrent si elle progresse vraiment.",
    backInfo: "OKR — Objectives and Key Results (objectifs et résultats clés) : un cadre qui combine un objectif qualitatif et quelques résultats mesurés. Formulez ces résultats comme des effets obtenus, pas comme une liste de tâches.",
  },
  "sp-08": {
    frontQuestion: "Que décrit l’intention qualitative que votre équipe veut atteindre dans un OKR ?",
    frontScenario: "Rendre l’installation évidente pour les nouvelles équipes exprime une envie, mais pas encore sa mesure.",
    backInfo: "Objective (objectif) : le but qualitatif et orienté dans un OKR. Il répond à la question du changement porteur de sens que vous poursuivez.",
  },
  "sp-09": {
    frontQuestion: "Que faut-il mesurer pour savoir si votre objectif est vraiment atteint ?",
    frontScenario: "Votre équipe a besoin de chiffres comme la hausse de l’activation plutôt qu’une liste de fonctions livrées.",
    backInfo: "Key Result (résultat clé) : la preuve chiffrée qui permet de juger la progression vers l’objectif. Livrer une fonction reste une initiative, rarement un résultat clé solide à lui seul.",
  },
  "sp-10": {
    frontQuestion: "Quelle méthode de priorisation croise la portée, l’impact, la confiance et l’effort ?",
    frontScenario: "Vous comparez des idées qui touchent plus ou moins d’utilisateurs et demandent plus ou moins de développement.",
    backInfo: "RICE (portée, impact, confiance et effort) : un modèle qui combine ces quatre dimensions pour comparer les initiatives de façon structurée. Utile pour débattre, à condition d’expliciter vos hypothèses et de garder votre jugement stratégique.",
  },
  "sp-11": {
    frontQuestion: "Quelle méthode de priorisation allie impact, confiance et facilité pour aller vite ?",
    frontScenario: "Votre jeune équipe veut noter ses idées rapidement, sans estimations de portée fiables.",
    backInfo: "ICE (impact, confiance et facilité) : un modèle fondé sur ces trois dimensions. Rapide et léger, il reste subjectif, définissez donc des barèmes communs avant de l’utiliser.",
  },
  "sp-12": {
    frontQuestion: "Quelle méthode ordonne les travaux en rapportant leur coût du retard à leur taille ?",
    frontScenario: "Votre portefeuille mêle des initiatives plus ou moins urgentes et plus ou moins lourdes à livrer.",
    backInfo: "WSJF — Weighted Shortest Job First (travail pondéré le plus court d’abord) : vous divisez le coût du retard par la taille du lot pour livrer vite la valeur. Pratique pour séquencer, en soignant toujours vos estimations d’entrée.",
  },
  "sp-13": {
    frontQuestion: "Quelle méthode classe le périmètre en incontournables, souhaitables, possibles et exclus ?",
    frontScenario: "Votre projet client déborde de demandes pour une version limitée et vous devez clarifier les catégories.",
    backInfo: "MoSCoW (méthode MoSCoW) : vous rangez le contenu en Must, Should, Could et Won’t have pour la période. Limitez strictement les incontournables, sinon le tri perd tout son sens.",
  },
  "sp-14": {
    frontQuestion: "Quel outil simple croise l’impact attendu et l’effort requis pour repérer les gains rapides ?",
    frontScenario: "Votre équipe veut éviter de passer des mois sur des idées à faible valeur.",
    backInfo: "Impact–Effort Matrix (matrice impact-effort) : vous comparez chaque idée selon l’effet espéré et l’effort demandé. Idéal pour trier en discussion, en ajoutant au besoin confiance, timing et alignement stratégique.",
  },
  "sp-15": {
    frontQuestion: "Quel modèle classe les attributs selon leur effet sur la satisfaction des clients ?",
    frontScenario: "Certaines fonctions sont attendues comme évidentes, d’autres séduisent justement parce qu’on ne les espérait pas.",
    backInfo: "Kano Model (modèle de Kano) : vous distinguez les basiques, les performants et les séduisants selon la réaction des clients. Revisitez ce classement, car les attentes évoluent avec le temps.",
  },
  "sp-16": {
    frontQuestion: "Que décrit la valeur perdue quand vous repoussez un travail ?",
    frontScenario: "Retarder une mise en conformité et retarder un détail visuel n’ont pas du tout les mêmes conséquences.",
    backInfo: "Cost of Delay (coût du retard) : l’estimation de ce que l’attente fait perdre, en revenus, en risques ou en impact client. Rendez l’urgence explicite pour mieux ordonnancer vos efforts.",
  },
  "sp-17": {
    frontQuestion: "Quelle méthode priorise en croisant l’importance pour les clients et leur satisfaction actuelle ?",
    frontScenario: "Vos utilisateurs jugent un flux essentiel mais s’en disent très mécontents, ce qui signale un vrai gisement.",
    backInfo: "Opportunity Scoring (score d’opportunité) : vous comparez l’importance des besoins et la satisfaction des solutions actuelles. Visez les besoins importants et mal servis, sans sacraliser une formule unique.",
  },
  "sp-18": {
    frontQuestion: "Quel objectif de long terme donne un cap au produit et oriente le carnet en Scrum ?",
    frontScenario: "Votre équipe Scrum a besoin d’un état futur cohérent pour guider son travail sur plusieurs sprints.",
    backInfo: "Product Goal (but produit) : l’objectif de long terme porté par le carnet de produit en Scrum. Il maintient le cap au-delà d’un seul objectif de sprint.",
  },
  "fw-01": {
    frontQuestion: "Quelle perspective décrit la demande à partir du progrès visé plutôt que des profils ?",
    frontScenario: "Deux clients très différents adoptent le même outil parce qu’ils doivent trancher vite une décision complexe.",
    backInfo: "Jobs to Be Done — JTBD (travaux à accomplir) : vous lisez le besoin à travers le progrès recherché dans une situation donnée. Décrivez le contexte et le progrès attendu avant de parler de personas ou de fonctions.",
  },
  "fw-02": {
    frontQuestion: "Quelle formulation exprime la situation, la motivation et le résultat attendu sans imposer de fonction ?",
    frontScenario: "Votre équipe veut cadrer le contexte et l’envie sans rédiger une exigence déjà centrée sur une fonctionnalité.",
    backInfo: "Job Story (récit de besoin) : un format du type « Quand…, je veux…, afin de… ». Il met en avant le contexte et le progrès visé plutôt que le seul rôle de l’utilisateur.",
  },
  "fw-03": {
    frontQuestion: "Quelle grille décrit ce qui pousse au changement et ce qui le freine quand vos clients hésitent ?",
    frontScenario: "Vos clients disent vouloir un meilleur outil mais ne franchissent pas le pas, entre habitudes et craintes.",
    backInfo: "Forces of Progress (forces du progrès) : vous examinez l’attrait du nouveau, le rejet de l’actuel, les habitudes et les angoisses face au changement. Précieux pour comprendre l’adoption et les bascules.",
  },
  "fw-04": {
    frontQuestion: "Quel cadre alterne ouverture et convergence à travers découvrir, définir, développer et livrer ?",
    frontScenario: "Votre équipe cherche un modèle simple pour explorer large, resserrer, réexplorer puis trancher.",
    backInfo: "Double Diamond (double diamant) : un modèle en deux cycles d’ouverture et de convergence, soit Discover, Define, Develop et Deliver. Utilisez-le comme repère de réflexion, pas comme un tunnel linéaire obligatoire.",
  },
  "fw-05": {
    frontQuestion: "Quelle démarche centrée sur l’humain articule empathie, définition, idéation, prototype et test ?",
    frontScenario: "Vous animez un atelier qui doit mener de la compréhension des utilisateurs à des idées testées.",
    backInfo: "Design Thinking (pensée design) : une démarche de résolution centrée sur l’humain, souvent résumée par empathize, define, ideate, prototype et test. Pratiquez ces temps en boucles itératives, jamais comme une cascade rigide.",
  },
  "fw-06": {
    frontQuestion: "Quelle approche allie hypothèses partagées, prototypes et petits tests plutôt que lourde documentation ?",
    frontScenario: "Votre équipe veut moins de dossiers transmis et plus d’apprentissages communs entre produit, design et technique.",
    backInfo: "Lean UX (UX allégée) : une approche collaborative qui privilégie hypothèses, expérimentation rapide et résultats. Elle donne le meilleur quand produit, design et ingénierie apprennent ensemble.",
  },
  "fw-07": {
    frontQuestion: "Quel cadre organise la croissance en acquisition, activation, rétention, parrainage et revenus ?",
    frontScenario: "Votre jeune pousse cherche où coincent ses inscrits, avant la première valeur, après, ou au moment de payer.",
    backInfo: "AARRR — Pirate Metrics (entonnoir AARRR) : un cadre de lecture en Acquisition, Activation, Retention, Referral et Revenue. Servez-vous-en pour diagnostiquer, sans chercher à tout optimiser à égalité.",
  },
  "fw-08": {
    frontQuestion: "Quel cadre regroupe les mesures d’expérience en bonheur, engagement, adoption, rétention et réussite ?",
    frontScenario: "Votre équipe veut choisir ses mesures d’expérience sans se limiter à un seul score de satisfaction.",
    backInfo: "HEART Framework (cadre HEART) : vous reliez vos buts à des signaux dans Happiness, Engagement, Adoption, Retention et Task Success. Sélectionnez les catégories pertinentes au lieu de tout mesurer.",
  },
  "fw-09": {
    frontQuestion: "Quel schéma relie votre résultat visé aux opportunités, aux solutions et aux tests ?",
    frontScenario: "Vos constats d’entretiens et vos idées sont éparpillés et vous voulez garder une découverte bien alignée.",
    backInfo: "Opportunity Solution Tree — OST (arbre opportunités-solutions) : vous reliez un résultat à un espace d’opportunités, des idées de solutions et des tests d’hypothèses. Vous comparez ainsi plusieurs chemins au lieu de sauter vers une seule fonction.",
  },
  "fw-10": {
    frontQuestion: "Quel canevas relie les missions, douleurs et gains des clients à votre proposition de valeur ?",
    frontScenario: "Votre équipe doit vérifier si sa promesse répond vraiment à ce que ses clients cherchent à accomplir.",
    backInfo: "Value Proposition Canvas (canevas de proposition de valeur) : vous confrontez le profil client aux produits, atténuateurs de douleurs et créateurs de gains. Formulez-y des paris à vérifier auprès des clients, pas un consensus d’atelier.",
  },
  "fw-11": {
    frontQuestion: "Quel canevas d’une page rend visibles les paris derrière votre modèle d’activité ?",
    frontScenario: "Vous lancez une offre et vous voulez mettre à plat partenaires, ressources, clients, coûts et revenus.",
    backInfo: "Business Model Canvas (canevas de modèle économique) : neuf blocs qui décrivent création, distribution et captation de valeur. Utilisez-le comme une carte d’hypothèses à tester, pas comme une preuve de rentabilité.",
  },
  "fw-12": {
    frontQuestion: "Quelle carte montre le parcours client avec les coulisses, les acteurs et les systèmes ?",
    frontScenario: "Un souci ressemble à un défaut d’écran, mais la cause vient d’un circuit de validation interne et d’une synchronisation tardive.",
    backInfo: "Service Blueprint (plan de service) : vous reliez actions clients et points de contact aux interactions visibles, aux processus internes et aux systèmes. Idéal pour vos services qui traversent plusieurs canaux.",
  },
};
