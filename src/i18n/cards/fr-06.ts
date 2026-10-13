import type { CardOverride } from '../cardOverrides';

export const fr06: Record<string, CardOverride> = {
  "biz-01": {
    frontQuestion: "Quel document court permet d’aligner tout le monde sur le problème, les objectifs, le public et les contraintes avant de commencer ?",
    frontScenario: "Un client vous demande de « refondre le tableau de bord », mais vous devez encore comprendre pourquoi, pour qui et dans quelles limites travailler.",
    backInfo: "Project Brief (note de cadrage) : cadrage partagé qui résume le contexte, le problème, les objectifs, le public, les contraintes et les informations utiles. Appuyez-vous dessus pour trancher au quotidien, et notez honnêtement ce que vous ne savez pas encore au lieu de faire semblant que tout est déjà clair.",
  },
  "biz-02": {
    frontQuestion: "Qu’est-ce qui définit ce qui fait partie de votre mission et ce qui n’en fait pas partie ?",
    frontScenario: "Un site prévu avec cinq modèles dérive doucement vers une application complète, avec un système de design et une migration de contenus.",
    backInfo: "Scope (périmètre) : frontière explicite de la mission, des responsabilités et des résultats attendus. Précisez aussi les exclusions et les hypothèses de départ, car sans elles les débordements deviennent presque inévitables.",
  },
  "biz-03": {
    frontQuestion: "Qu’est-ce qu’un résultat concret que vous vous engagez à fournir à votre client ?",
    frontScenario: "Votre mission comprend un rapport de recherche, un prototype et une spécification du système de design à livrer à date fixe.",
    backInfo: "Deliverable (livrable) : production tangible et convenue de votre travail. Ne le confondez pas avec le résultat d’affaires qu’il doit servir : un rapport à lui seul ne fait encore progresser aucune mesure.",
  },
  "biz-04": {
    frontQuestion: "Quel document présente votre approche, votre valeur ajoutée, le périmètre, les délais et vos conditions avant de remporter une mission ?",
    frontScenario: "Vous répondez au besoin d’un prospect avec un plan sur mesure et un prix clair pour le convaincre de vous confier le projet.",
    backInfo: "Proposal (proposition commerciale) : document argumenté qui montre votre compréhension du problème et propose une approche, un périmètre et des conditions. Il arrive avant le contrat ou accompagne le SOW selon le montage de la mission.",
  },
  "biz-05": {
    frontQuestion: "Quel document contractuel précise le périmètre, les livrables, les responsabilités, les délais, les hypothèses et les conditions d’acceptation ?",
    frontScenario: "Les deux parties ont besoin d’une annexe au contrat qui rende les limites de la mission limpides dans le travail de tous les jours.",
    backInfo: "SOW — Statement of Work (énoncé des travaux) : accord détaillé qui décrit ce qui sera fait et comment la mission sera pilotée. Son rôle juridique exact dépend du contrat et du pays ; faites-le relire par un juriste.",
  },
  "biz-06": {
    frontQuestion: "Quel modèle de prix facture un montant unique pour un périmètre défini plutôt que chaque heure travaillée ?",
    frontScenario: "Un client vous achète un ensemble de recherche et de design bien délimité pour 12 000 €.",
    backInfo: "Fixed Fee (prix fixe, forfait) : prix convenu pour un périmètre ou un résultat défini. Vous assumez davantage le risque d’efficacité, alors soignez les hypothèses, le contrôle des changements et la clarté du périmètre.",
  },
  "biz-07": {
    frontQuestion: "Quel modèle commercial facture le temps réellement passé, et parfois les matériaux ou les frais ?",
    frontScenario: "Le travail est exploratoire et vous savez déjà que les besoins vont bouger chaque semaine.",
    backInfo: "Time & Materials — T&M (temps et matériaux, régie) : facturation au temps réel passé selon des taux convenus, plus les matériaux et frais si le contrat les prévoit. Ce modèle offre de la souplesse, mais exige un suivi transparent et une vraie gestion du budget.",
  },
  "biz-08": {
    frontQuestion: "Quel montage vous réserve une disponibilité ou une capacité régulière contre un paiement périodique ?",
    frontScenario: "Une jeune pousse veut un designer disponible chaque mois pour son produit plutôt que des projets isolés.",
    backInfo: "Retainer (contrat de disponibilité) : accord périodique qui sécurise des services, une capacité ou une disponibilité dans la durée. Précisez ce qui est inclus, le report des heures non utilisées et vos délais de réponse.",
  },
  "biz-09": {
    frontQuestion: "Quel mécanisme formel traite les demandes qui sortent du périmètre convenu et modifient le coût, les délais ou les livrables ?",
    frontScenario: "En plein projet, le client vous demande d’ajouter une seconde plateforme et vingt écrans supplémentaires.",
    backInfo: "Change Request (demande de changement) : demande documentée qui modifie le périmètre, les exigences, le coût ou le calendrier convenus. Un processus de changement clair préserve à la fois la souplesse du client et vos limites de production.",
  },
  "biz-10": {
    frontQuestion: "Quel outil recense les personnes concernées, leur influence et leurs intérêts pour organiser votre relation avec elles ?",
    frontScenario: "Une refonte patine parce que vous n’avez parlé qu’aux utilisateurs en oubliant le juridique, le support et le parrain du projet.",
    backInfo: "Stakeholder Map (cartographie des parties prenantes) : vue structurée des personnes et groupes concernés par le projet ou influents sur lui. Servez-vous-en pour planifier qui impliquer, comment communiquer et comment les décisions circulent.",
  },
  "biz-11": {
    frontQuestion: "Qui a le pouvoir de trancher et de valider la décision finale quand les avis divergent ?",
    frontScenario: "Cinq parties prenantes donnent leur avis, mais personne ne sait qui décide vraiment si le design part en production.",
    backInfo: "Decision Maker (décideur) : personne ou rôle investi de l’autorité pour la décision concernée. Clarifiez les droits de décision en amont, sinon vous vous enlisez dans une recherche de consensus sans fin et des retours contradictoires.",
  },
  "biz-12": {
    frontQuestion: "Qu’est-ce qu’une étape clé qui permet de suivre l’avancement et de déclencher une validation ou un paiement ?",
    frontScenario: "Un premier paiement est dû après la fin de la recherche, puis un second après la validation du prototype.",
    backInfo: "Milestone (jalon) : point de repère significatif lié à l’avancement, à une livraison, à une revue ou à des conditions commerciales. Un jalon n’est pas une simple tâche ni une date isolée : reliez-le toujours à un contenu vérifiable.",
  },
  "biz-13": {
    frontQuestion: "Que décrit la notion qui définit qui possède ou peut utiliser les designs, le code et les contenus créés pendant une mission ?",
    frontScenario: "Un indépendant termine un système de marque, mais le contrat ne dit pas clairement si le client en reçoit la propriété ou un simple droit d’usage.",
    backInfo: "Intellectual Property Rights — IP Rights (droits de propriété intellectuelle) : droits juridiques qui encadrent la propriété, la licence et les usages autorisés des créations. Cession et licence sont deux choses différentes ; formulez-les explicitement et en tenant compte du droit applicable.",
  },
  "biz-14": {
    frontQuestion: "Quel accord limite la divulgation ou l’usage des informations confidentielles échangées dans une relation d’affaires ?",
    frontScenario: "Une jeune pousse partage ses plans produit confidentiels et ses données clients pendant l’évaluation d’un prestataire.",
    backInfo: "NDA — Non-Disclosure Agreement (accord de confidentialité) : contrat qui définit les informations confidentielles et les obligations autour de leur usage et de leur divulgation. Il ne remplace ni des mesures de sécurité solides, ni des clauses de confidentialité complètes, ni un vrai contrat de prestation.",
  },
  "tech-01": {
    frontQuestion: "Qu’est-ce que la partie d’un produit qui affiche l’interface et gère les interactions côté utilisateur ?",
    frontScenario: "Une fenêtre de dialogue s’affiche mal dans le navigateur alors que les données renvoyées par le serveur sont correctes.",
    backInfo: "Frontend (interface, partie visible) : couche applicative tournée vers l’utilisateur, chargée d’afficher l’interface et de gérer les interactions côté client. Sa frontière exacte varie entre le web, le mobile et le rendu côté serveur.",
  },
  "tech-02": {
    frontQuestion: "Qu’est-ce que la partie d’un produit qui gère la logique métier, les données et les services côté serveur ?",
    frontScenario: "L’interface envoie une demande de création de commande, et c’est la logique serveur qui vérifie les stocks puis enregistre la transaction.",
    backInfo: "Backend (côté serveur) : systèmes et services qui appliquent la logique métier, l’accès aux données et les intégrations. Un backend peut tenir en un seul service ou en de nombreux services répartis.",
  },
  "tech-03": {
    frontQuestion: "Qu’est-ce que l’interface définie qui permet à un logiciel de demander des données ou des actions à un autre ?",
    frontScenario: "Votre application mobile a besoin d’un moyen documenté pour récupérer les données de compte auprès de votre service.",
    backInfo: "API — Application Programming Interface (interface de programmation) : contrat d’échange entre logiciels. L’API définit les opérations disponibles, les entrées, les sorties et les comportements pour que les systèmes dialoguent sans connaître leurs rouages internes.",
  },
  "tech-04": {
    frontQuestion: "Quel style d’API web organise les données en ressources et utilise les méthodes HTTP comme GET, POST, PATCH et DELETE ?",
    frontScenario: "Un produit expose des adresses comme « /users/123 » et « /orders/456 » sur le web.",
    backInfo: "REST — Representational State Transfer (transfert d’état représentatif) : style d’architecture courant pour les API web orientées ressources. En pratique, les API dites « REST » varient beaucoup ; ne considérez pas ce label comme la garantie d’une mise en œuvre unique.",
  },
  "tech-05": {
    frontQuestion: "Quel langage de requêtes permet au client de demander exactement les champs dont il a besoin grâce à un schéma typé ?",
    frontScenario: "Votre tableau de bord a besoin de combinaisons différentes de données clients imbriquées selon les écrans, sans multiplier les réponses figées.",
    backInfo: "GraphQL (langage de requêtes pour API) : langage et moteur de requêtes fondés sur un schéma typé. Le client précise les champs voulus, souvent via un seul point d’accès. Prévoyez avec soin les autorisations, les performances et la conception du schéma.",
  },
  "tech-06": {
    frontQuestion: "Qu’est-ce que l’adresse ou l’opération précise d’une API qu’il faut appeler pour une ressource donnée ?",
    frontScenario: "L’équipe technique vous demande quelle adresse appeler pour envoyer un ticket d’assistance.",
    backInfo: "Endpoint (point d’accès) : emplacement ou opération d’une API par lequel un client accède à une ressource ou à une fonction. Dans certains styles d’API, parlez plutôt d’« opération » que de simple adresse web.",
  },
  "tech-07": {
    frontQuestion: "Que décrit le couple formé par les données envoyées à un service et le résultat qu’il renvoie ?",
    frontScenario: "L’application envoie une commande et reçoit en retour soit la commande créée, soit une erreur expliquée.",
    backInfo: "Request / Response (requête / réponse) : la requête demande à un service d’agir ou de renvoyer quelque chose ; la réponse communique le résultat, le statut et les données. Ce va-et-vient est au cœur des échanges HTTP et des API.",
  },
  "tech-08": {
    frontQuestion: "Qu’est-ce que le code à trois chiffres qui résume le résultat d’une requête web, comme un succès ou une erreur ?",
    frontScenario: "L’API renvoie « 404 » quand un objet n’existe pas et « 500 » quand le serveur tombe en panne.",
    backInfo: "HTTP Status Code (code d’état HTTP) : code normalisé qui indique la famille du résultat, par exemple 2xx pour un succès, 4xx pour un problème côté demande et 5xx pour une erreur serveur. Choisissez un code qui reflète vraiment ce qui s’est passé.",
  },
  "tech-09": {
    frontQuestion: "Quel mécanisme prévient automatiquement un autre système quand un événement se produit, sans l’obliger à vérifier en boucle ?",
    frontScenario: "Votre prestataire de paiement prévient aussitôt votre serveur dès qu’un règlement réussit.",
    backInfo: "Webhook (notification automatique) : appel HTTP envoyé d’un système vers un autre à l’occasion d’un événement. Côté réception, prévoyez la vérification de l’émetteur, les nouvelles tentatives, les doublons et les arrivées dans le désordre.",
  },
  "tech-10": {
    frontQuestion: "Qu’est-ce que le système durable qui stocke et organise les données d’une application ?",
    frontScenario: "Les comptes, les projets et les droits doivent rester disponibles même après que l’utilisateur a fermé l’application.",
    backInfo: "Database (base de données) : système de stockage et d’interrogation durable des données, structurées ou semi-structurées. Votre choix implique des arbitrages sur la cohérence, les requêtes, l’échelle et l’exploitation.",
  },
  "tech-11": {
    frontQuestion: "Quel stockage temporaire garde les données souvent utilisées à portée de main pour éviter de tout recalculer ?",
    frontScenario: "Un tableau de bord redemande sans cesse la même donnée coûteuse et rame, alors qu’elle ne change que toutes les quelques minutes.",
    backInfo: "Cache (mémoire cache) : copie temporaire de données ou de calculs qui accélère l’affichage et soulage les serveurs. Définissez des règles d’invalidation et de fraîcheur, car un contenu en cache peut vite devenir périmé.",
  },
  "tech-12": {
    frontQuestion: "Quel réseau réparti sert les contenus depuis des serveurs proches des utilisateurs pour accélérer leur livraison ?",
    frontScenario: "Vos utilisateurs en Australie téléchargent les mêmes images depuis un serveur situé uniquement en Europe, avec un délai inutile.",
    backInfo: "CDN — Content Delivery Network (réseau de diffusion de contenu) : réseau de serveurs répartis qui sert les contenus au plus près des utilisateurs. Il améliore couramment la rapidité, la résilience et l’usage de la bande passante pour les éléments mis en cache et la diffusion web.",
  },
  "tech-13": {
    frontQuestion: "Qu’est-ce que le délai entre le lancement d’une action et la réception de la réponse ?",
    frontScenario: "Un assistant finit par donner une bonne réponse, mais vous attendez huit secondes après avoir appuyé sur « Envoyer ».",
    backInfo: "Latency (latence, délai) : temps d’attente dans une interaction avec le système. Les utilisateurs perçoivent plusieurs latences ; suivez séparément le réseau, le serveur, le modèle et le délai complet si vous voulez vraiment agir dessus.",
  },
  "tech-14": {
    frontQuestion: "Quel processus de sécurité vérifie que vous êtes bien la personne ou le système que vous prétendez être ?",
    frontScenario: "Vous vous connectez avec une clé d’accès, un mot de passe ou un autre moyen d’identification.",
    backInfo: "Authentication — AuthN (authentification) : vérification de l’identité. Elle répond à « Qui êtes-vous ? » et ne doit pas être confondue avec l’autorisation, qui décide de ce que cette identité a le droit de faire.",
  },
  "tech-15": {
    frontQuestion: "Quel processus de sécurité décide de ce qu’une identité vérifiée a le droit de voir ou de modifier ?",
    frontScenario: "Deux collaborateurs peuvent se connecter, mais seul l’administrateur peut changer les paramètres de facturation.",
    backInfo: "Authorization — AuthZ (autorisation) : règles qui fixent les actions et ressources permises pour une identité. Elle répond à « Qu’avez-vous le droit de faire ? » et doit être contrôlée côté serveur, jamais en masquant simplement des boutons dans l’interface.",
  },
  "tech-16": {
    frontQuestion: "Que décrit l’architecture qui sépare l’application que vous utilisez du service qui traite vos demandes ?",
    frontScenario: "Votre navigateur demande des données produit à un service distant, puis affiche la réponse reçue.",
    backInfo: "Client–Server Model (modèle client-serveur) : architecture où des clients demandent des services ou des ressources à des serveurs. Les systèmes modernes ajoutent des couches locales et réparties, mais ce vocabulaire reste très utile pour vous repérer.",
  },
  "ai-01": {
    frontQuestion: "Qu’est-ce qu’un modèle entraîné sur d’immenses quantités de textes pour comprendre et produire du langage ?",
    frontScenario: "Votre produit résume des documents, répond à des questions et produit des textes structurés à partir de consignes.",
    backInfo: "LLM — Large Language Model (grand modèle de langage) : grand modèle entraîné capable de comprendre et de générer du langage. Dans un produit réel, utilisez-le comme un composant parmi d’autres, avec des outils, de la recherche documentaire, des règles et des évaluations.",
  },
  "ai-02": {
    frontQuestion: "Qu’est-ce que la petite unité de texte sur laquelle se mesurent les limites et les coûts d’usage d’un modèle ?",
    frontScenario: "Un long document consomme bien plus de capacité du modèle que son simple nombre de caractères visibles ne le laisse penser.",
    backInfo: "Token (jeton, unité de texte) : unité produite par le découpage du modèle et utilisée pour représenter ses entrées et sorties. Un jeton n’est pas un mot ; le découpage varie selon le modèle et la langue.",
  },
  "ai-03": {
    frontQuestion: "Qu’est-ce que la limite qui définit tout ce qu’un modèle peut prendre en compte d’un coup, historique et réponse compris ?",
    frontScenario: "Un assistant d’assistance oublie le début d’une très longue conversation parce que vous lui donnez trop de matière à la fois.",
    backInfo: "Context Window (fenêtre de contexte) : capacité maximale en jetons dont dispose un modèle pour une demande ou un échange, selon ses règles. Une grande fenêtre ne garantit pas qu’il accorde la même attention à chaque détail fourni.",
  },
  "ai-04": {
    frontQuestion: "Qu’est-ce que la consigne et le contexte que vous donnez à un modèle pour cadrer sa tâche et sa réponse ?",
    frontScenario: "Votre produit fournit un rôle, des contraintes, la demande de l’utilisateur et des exemples avant de demander au modèle de rédiger un résultat.",
    backInfo: "Prompt (consigne, instruction) : texte d’entrée et contexte utilisés pour guider le comportement du modèle. En production, la consigne n’est qu’une couche parmi d’autres ; les outils, la recherche, les schémas, les droits et les évaluations comptent tout autant.",
  },
  "ai-05": {
    frontQuestion: "Quel mécanisme représente un contenu par des nombres pour comparer les sens plutôt que les mots exacts ?",
    frontScenario: "Votre recherche doit retrouver l’article « résilier mon abonnement » quand l’utilisateur tape « annuler mon forfait ».",
    backInfo: "Embedding (représentation vectorielle, plongement) : représentation numérique apprise d’un contenu, utilisée pour la similarité de sens, le regroupement et la recherche. Ces vecteurs sont couramment indexés dans un stockage adapté pour retrouver vite les passages proches.",
  },
  "ai-06": {
    frontQuestion: "Quelle architecture va chercher des informations externes pertinentes pour les fournir au modèle au moment de répondre ?",
    frontScenario: "Votre assistant doit répondre à partir de la documentation actuelle de l’entreprise sans réentraîner le modèle à chaque changement de règle.",
    backInfo: "RAG — Retrieval-Augmented Generation (recherche avec génération) : étape de recherche qui retrouve des contenus externes pertinents et les ajoute au contexte avant la génération. Cela améliore la fraîcheur et l’ancrage, mais surveillez la qualité de la recherche et évaluez les réponses citées.",
  },
  "ai-07": {
    frontQuestion: "Quelle pratique relie les réponses du modèle à des sources, des outils ou des preuves vérifiables ?",
    frontScenario: "Un assistant juridique doit répondre uniquement à partir du corpus validé par le client et montrer ses références.",
    backInfo: "Grounding (ancrage factuel) : fait de contraindre ou d’appuyer la génération avec un contexte fiable ou des preuves externes. L’ancrage réduit les affirmations gratuites, mais ne garantit pas à lui seul l’exactitude des faits.",
  },
  "ai-08": {
    frontQuestion: "Comment appelle-t-on une réponse qui présente comme vraie une information inventée ou sans fondement ?",
    frontScenario: "Un assistant invente une clause de règlement qui n’existe dans aucun document fourni.",
    backInfo: "Hallucination (hallucination) : contenu généré sans fondement, inventé ou contraire à la source de référence. Prévoyez l’ancrage, les outils, le traitement de l’incertitude et des évaluations pour gérer ce risque dans votre produit.",
  },
  "ai-09": {
    frontQuestion: "Quelle capacité permet à un modèle d’appeler des fonctions ou des outils définis au lieu de se contenter de rédiger du texte ?",
    frontScenario: "Votre assistant vérifie un stock, crée un événement dans l’agenda et récupère des données de compte via des fonctions autorisées.",
    backInfo: "Tool Use / Function Calling (appel d’outils, appel de fonctions) : capacité du modèle à choisir des outils structurés et à fournir leurs paramètres pour une exécution externe. Ces outils décuplent les usages, mais exigez des droits précis, des contrôles, une gestion d’erreurs et un contrôle clair de l’utilisateur.",
  },
  "ai-10": {
    frontQuestion: "Qu’est-ce qu’un système d’IA capable d’enchaîner réflexions, outils et actions pour atteindre un objectif ?",
    frontScenario: "Un assistant de voyage cherche des options, les compare, vérifie vos contraintes et réalise les actions autorisées en plusieurs étapes.",
    backInfo: "Agent (agent) : système d’IA capable de piloter un objectif par des cycles de raisonnement et des appels d’outils. Définissez ses autorisations, ses conditions d’arrêt, son suivi et le contrôle humain pour le garder sous contrôle.",
  },
  "ai-11": {
    frontQuestion: "Quel mode de travail permet à un système d’IA de planifier, d’agir, d’observer puis d’ajuster ses étapes suivantes ?",
    frontScenario: "Le système rate une recherche de données avec un outil, réessaie avec un autre, puis adapte sa suite selon le résultat obtenu.",
    backInfo: "Agentic Workflow (flux de travail agentique) : organisation en plusieurs étapes où les décisions du modèle influencent les actions et outils suivants. « Agentique » ne veut pas dire autonomie illimitée ; fixez explicitement les limites et les validations.",
  },
  "ai-12": {
    frontQuestion: "Quel protocole ouvert standardise la connexion des applications d’IA aux outils et ressources externes ?",
    frontScenario: "Un même outil de recherche interne devrait servir à plusieurs applications d’IA compatibles sans intégration sur mesure pour chacune.",
    backInfo: "MCP — Model Context Protocol (protocole de contexte pour modèles) : protocole ouvert qui relie les applications d’IA aux outils, ressources et contextes associés. C’est un standard d’interopérabilité majeur ; sécurisez sa mise en œuvre avec des autorisations et des frontières de confiance claires.",
  },
  "ai-13": {
    frontQuestion: "Quelle méthode contraint les réponses du modèle à un schéma lisible par vos logiciels au lieu d’espérer qu’un texte libre s’analyse bien ?",
    frontScenario: "Votre traitement a absolument besoin de champs garantis comme le nom, le niveau de risque et l’action recommandée.",
    backInfo: "Structured Outputs (sorties structurées) : sorties du modèle contraintes par une structure imposée, souvent un schéma JSON. Cela fiabilise la forme et les types, mais ne garantit pas la justesse des valeurs sur le fond.",
  },
  "ai-14": {
    frontQuestion: "Qu’est-ce que les tests systématiques qui mesurent si un système d’IA se comporte bien sur des tâches et des cas d’échec définis ?",
    frontScenario: "Vous changez de modèle et de consigne et vous voulez prouver que la qualité progresse sans créer de nouveaux comportements risqués.",
    backInfo: "Evals — Evaluations (évaluations) : jeux de données, critères et méthodes de notation répétés pour juger le comportement du système. Constituez une suite solide avec des cas représentatifs, des cas limites et vos modes d’échec les plus importants.",
  },
  "ai-15": {
    frontQuestion: "Quel mode d’organisation garde une personne responsable de la validation aux étapes sensibles au lieu de tout automatiser ?",
    frontScenario: "L’IA prépare des remboursements clients, mais un agent doit valider les montants élevés avant que l’argent ne bouge.",
    backInfo: "Human in the Loop — HITL (humain dans la boucle) : conception où des humains relisent, approuvent, corrigent ou reprennent la main à des points définis. Utilisez-la selon le risque et la responsabilité, pas comme une promesse vague qu’« un humain est quelque part dans le circuit ».",
  },
  "ai-16": {
    frontQuestion: "Quelle attaque cherche à manipuler un système d’IA en glissant des instructions malveillantes dans les contenus qu’il lit ?",
    frontScenario: "Une page web lue par votre agent contient un texte caché qui ordonne au modèle d’ignorer les règles et de révéler des secrets.",
    backInfo: "Prompt Injection (injection d’instructions) : instructions hostiles qui tentent de détourner le comportement prévu via des contenus visibles par le modèle. Considérez tout contenu externe comme une donnée non fiable et appliquez la sécurité hors du modèle, pas seulement par des consignes.",
  },
  "ai-17": {
    frontQuestion: "Qu’est-ce que l’ensemble des garde-fous qui encadrent les comportements indésirables ou interdits d’une IA ?",
    frontScenario: "Un assistant de santé a besoin de contrôles de règles, d’outils restreints, de modération et d’escalade autour des réponses du modèle.",
    backInfo: "AI Guardrails (garde-fous pour l’IA) : contrôles en couches comme les droits, les validations, les filtres de règles, les limites d’outils et de débits, la surveillance et l’escalade humaine. Pensez-les comme une défense globale du système, pas comme une simple consigne « sois prudent ».",
  },
  "ai-18": {
    frontQuestion: "Quelle capacité permet à une IA de travailler avec plusieurs types de données comme le texte, l’image, l’audio ou la vidéo ?",
    frontScenario: "Un assistant d’assistance lit votre capture d’écran, écoute votre message vocal et vous répond par écrit.",
    backInfo: "Multimodal AI (IA multimodale) : IA capable de traiter ou de produire plusieurs modalités. Prévoyez dans votre produit les délais, l’accessibilité, la confidentialité et les erreurs propres à chaque modalité.",
  },
  "ai-19": {
    frontQuestion: "Quelle méthode réentraîne un modèle déjà existant sur des exemples ciblés plutôt que de changer la seule consigne ?",
    frontScenario: "Votre entreprise a besoin d’un style de réponse spécialisé que de simples consignes ne produisent pas de façon fiable.",
    backInfo: "Fine-tuning (réglage fin, ajustement) : entraînement complémentaire qui adapte un modèle pré-entraîné avec des données choisies. Cela convient à certains usages, mais ce n’est pas la solution par défaut pour injecter des connaissances factuelles qui changent souvent.",
  },
  "ai-20": {
    frontQuestion: "Comment appelle-t-on l’utilisation d’un modèle déjà entraîné pour produire une réponse à partir d’une nouvelle demande ?",
    frontScenario: "Le modèle est déjà entraîné ; chaque demande de vos utilisateurs consomme désormais du calcul pour générer une réponse.",
    backInfo: "Inference (inférence) : exécution d’un modèle entraîné sur une nouvelle entrée. Vos équipes produit l’optimisent couramment pour la qualité, la rapidité, le débit et le coût plutôt que de réduire tout le produit au seul « modèle ».",
  },
};
