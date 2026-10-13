import type { CardOverride } from '../cardOverrides';

export const fr01: Record<string, CardOverride> = {
  "pm-01": {
    frontQuestion: "Quelle métrique montre la part des nouveaux utilisateurs qui atteignent le premier moment de valeur ?",
    frontScenario: "Votre app de gestion de projet attire des milliers d’inscrits, mais vous voulez savoir combien créent et partagent vraiment leur premier projet.",
    backInfo: "Activation Rate (taux d’activation) : part des nouveaux utilisateurs qui accomplissent l’événement d’activation défini. Choisissez un événement qui reflète une vraie valeur, pas la simple création de compte, et cherchez ce qui bloque les autres.",
  },
  "pm-02": {
    frontQuestion: "Quelle métrique montre la part d’une cohorte qui revient et utilise encore le produit après une période donnée ?",
    frontScenario: "Votre app de sport veut savoir combien de personnes inscrites ce mois-ci s’entraînent encore 30 jours plus tard.",
    backInfo: "Retention Rate (taux de rétention) : mesure la continuité d’usage d’une cohorte dans le temps. Précisez toujours la fenêtre temporelle et ce que vous comptez comme un retour.",
  },
  "pm-03": {
    frontQuestion: "Que décrit la part des clients ou des utilisateurs qui cessent d’utiliser le produit ou de payer pendant une période ?",
    frontScenario: "Votre produit SaaS attire des clients chaque mois, mais sa base stagne car beaucoup de comptes se ferment.",
    backInfo: "Churn Rate (taux d’attrition) : mesure les pertes sur une période, en utilisateurs ou en revenus. Précisez toujours lequel vous mesurez, car les conclusions diffèrent.",
  },
  "pm-04": {
    frontQuestion: "Quelle métrique montre le nombre d’utilisateurs uniques actifs pendant une journée typique ?",
    frontScenario: "Votre messagerie veut voir chaque jour combien de personnes distinctes utilisent vraiment le service.",
    backInfo: "DAU — Daily Active Users (utilisateurs actifs quotidiens) : nombre d’utilisateurs uniques qui accomplissent l’action active définie en un jour. Liez le caractère « actif » à un comportement porteur de sens, pas à un simple chargement de page.",
  },
  "pm-05": {
    frontQuestion: "Quelle métrique montre le nombre d’utilisateurs uniques actifs pendant une semaine ?",
    frontScenario: "Votre outil collaboratif sert plusieurs fois par semaine, rarement chaque jour, donc le chiffre quotidien paraît artificiellement bas.",
    backInfo: "WAU — Weekly Active Users (utilisateurs actifs hebdomadaires) : nombre d’utilisateurs uniques qui remplissent la définition d’activité pendant une semaine. Idéal pour les produits au rythme d’usage hebdomadaire.",
  },
  "pm-06": {
    frontQuestion: "Quelle métrique montre le nombre d’utilisateurs uniques actifs pendant un mois ?",
    frontScenario: "Votre outil financier aide beaucoup d’utilisateurs sans qu’ils l’ouvrent chaque jour. Vous avez besoin d’une mesure plus large.",
    backInfo: "MAU — Monthly Active Users (utilisateurs actifs mensuels) : nombre d’utilisateurs uniques qui remplissent la définition d’activité pendant un mois. Utile pour mesurer la portée, mais cela en dit peu sur la profondeur d’usage.",
  },
  "pm-07": {
    frontQuestion: "Quel indicateur estime à quelle fréquence les utilisateurs mensuels reviennent un jour typique ?",
    frontScenario: "Deux applis comptent 100 000 utilisateurs mensuels, mais l’une s’ouvre presque chaque jour et l’autre une seule fois par mois.",
    backInfo: "DAU/MAU Stickiness (taux d’adhérence) : part des utilisateurs mensuels actifs un jour typique. Ne comparez que des produits dont le rythme naturel d’usage est proche.",
  },
  "pm-08": {
    frontQuestion: "Quelle métrique montre la part des utilisateurs concernés qui ont essayé une fonctionnalité précise ?",
    frontScenario: "Vous lancez des commentaires collaboratifs et voulez savoir si vos utilisateurs actifs les découvrent et les utilisent.",
    backInfo: "Feature Adoption Rate (taux d’adoption d’une fonctionnalité) : part des utilisateurs éligibles ou actifs qui utilisent une fonctionnalité sur une période définie. Définissez toujours clairement le dénominateur.",
  },
  "pm-09": {
    frontQuestion: "Quel concept décrit combien d’utilisateurs distincts emploient une fonctionnalité, plutôt que leur fréquence d’usage ?",
    frontScenario: "Votre tableau de bord touche 70 % des clients, mais la plupart ne l’ouvrent qu’une fois. Vous voulez séparer la portée de la fréquence.",
    backInfo: "Breadth of Adoption (ampleur d’adoption) : décrit la part de la base concernée qui utilise une fonctionnalité. Elle complète la profondeur et la fréquence ; une large ampleur ne signifie pas forcément un usage intense.",
  },
  "pm-10": {
    frontQuestion: "Quel concept décrit l’intensité d’usage d’une fonctionnalité une fois qu’elle est adoptée ?",
    frontScenario: "Seul un petit groupe utilise votre éditeur avancé, mais ces personnes y créent des dizaines d’éléments chaque semaine.",
    backInfo: "Depth of Engagement (profondeur d’engagement) : mesure la quantité ou la richesse d’usage chez les utilisateurs engagés, comme les actions ou les éléments créés. Reliez-la à la valeur, pas aux simples clics.",
  },
  "pm-11": {
    frontQuestion: "Quelle métrique montre à quelle fréquence un utilisateur actif accomplit une action porteuse de sens ?",
    frontScenario: "Votre calendrier touche beaucoup de monde, mais vous devez savoir s’ils s’en servent une fois ou de façon répétée.",
    backInfo: "Usage Frequency (fréquence d’usage) : mesure la répétition d’usage d’un produit ou d’une fonctionnalité par utilisateur sur un intervalle défini. Lisez-la avec l’adoption, car un essai unique diffère d’une habitude installée.",
  },
  "pm-12": {
    frontQuestion: "Quelle métrique montre combien de temps un nouvel utilisateur met pour atteindre le moment d’activation ?",
    frontScenario: "Les utilisateurs finissent par aimer votre outil de flux de travail, mais certains ont besoin de trois visites avant de créer leur première automatisation utile.",
    backInfo: "Time to Activate (délai d’activation) : temps écoulé entre l’inscription et l’événement d’activation défini. Visez un délai court seulement si l’événement reflète une vraie valeur, pas une étape vide de sens.",
  },
  "pm-13": {
    frontQuestion: "Quel concept mesure la vitesse à laquelle un client ressent une vraie valeur, au-delà de la simple fin d’intégration ?",
    frontScenario: "Votre client entreprise termine l’installation le premier jour, mais n’obtient son premier résultat commercial que deux semaines plus tard.",
    backInfo: "Time to Value — TTV (délai de valeur) : temps nécessaire pour qu’un utilisateur ou un client retire une valeur tangible du produit. Il peut dépasser l’intégration et compte beaucoup dans les produits complexes ou B2B ; cherchez à le raccourcir.",
  },
  "pm-14": {
    frontQuestion: "Quelle métrique montre la part des utilisateurs qui accomplissent une action visée comme un achat ou une inscription ?",
    frontScenario: "Votre boutique en ligne veut savoir quel pourcentage des visiteurs du panier passe vraiment commande.",
    backInfo: "Conversion Rate (taux de conversion) : part d’une population éligible qui accomplit l’action visée. Précisez toujours l’étape du parcours et le dénominateur retenu.",
  },
  "pm-15": {
    frontQuestion: "Quelle métrique montre la part des utilisateurs qui terminent un parcours après l’avoir commencé ?",
    frontScenario: "Beaucoup d’utilisateurs entament votre vérification d’identité, mais vous voulez savoir combien atteignent l’écran final de confirmation.",
    backInfo: "Completion Rate (taux d’achèvement) : pourcentage de personnes qui vont au bout d’un parcours commencé. Utile pour l’intégration, les formulaires et les tâches en plusieurs étapes ; examinez chaque étape.",
  },
  "pm-16": {
    frontQuestion: "Quelle métrique montre la part des personnes qui quittent un parcours avant l’étape suivante ?",
    frontScenario: "Votre panier perd beaucoup d’utilisateurs entre les informations de livraison et le paiement.",
    backInfo: "Drop-off Rate (taux d’abandon en parcours) : part des utilisateurs qui ne progressent pas d’une étape à l’autre. Analysez-le étape par étape pour localiser les frictions, plutôt que comme un chiffre global.",
  },
  "pm-17": {
    frontQuestion: "Quelle métrique montre la part des utilisateurs qui reviennent à une fonctionnalité après l’avoir essayée ?",
    frontScenario: "Vous savez que beaucoup de personnes testent vos résumés IA une fois, et vous voulez savoir si elles y reviennent.",
    backInfo: "Feature Retention (rétention d’une fonctionnalité) : mesure la poursuite d’usage d’une fonctionnalité précise après le premier essai. Elle distingue l’effet de nouveauté d’une valeur durable ; creusez les motifs des retours.",
  },
  "pm-18": {
    frontQuestion: "Quelle analyse regroupe les utilisateurs selon un point de départ commun pour comparer leurs comportements dans le temps ?",
    frontScenario: "Vous voulez comparer la rétention des inscrits de janvier et de février après une refonte de l’intégration.",
    backInfo: "Cohort Analysis (analyse par cohortes) : regroupe les utilisateurs selon un attribut ou un événement partagé puis compare leurs comportements. Elle évite de mélanger des utilisateurs aux parcours très différents.",
  },
  "pm-19": {
    frontQuestion: "Quelle courbe montre comment la part d’une cohorte qui revient évolue au fil du temps ?",
    frontScenario: "Votre app sociale perd vite des utilisateurs au début, puis un noyau fidèle continue de l’utiliser pendant des mois.",
    backInfo: "Retention Curve (courbe de rétention) : vue temporelle des utilisateurs conservés dans une cohorte. Sa forme révèle la perte initiale puis une éventuelle stabilisation ; choisissez l’intervalle selon le rythme naturel du produit.",
  },
  "pm-20": {
    frontQuestion: "Quelle métrique cible les clients inactifs redevenus actifs ?",
    frontScenario: "Votre service de streaming lance une campagne de reconquête et veut suivre les dormeurs qui reviennent.",
    backInfo: "Reactivation Rate (taux de réactivation) : mesure la part ou le nombre d’utilisateurs inactifs qui reprennent une activité porteuse de sens. Définissez d’abord le seuil d’inactivité et l’événement de réactivation.",
  },
  "pm-21": {
    frontQuestion: "Quel concept répartit les utilisateurs actifs entre nouveaux, actuels et anciens revenus ?",
    frontScenario: "Votre total mensuel stagne, mais vous devez savoir s’il repose sur des fidèles ou sur un remplacement constant des partants.",
    backInfo: "User Lifecycle Segmentation (segmentation par cycle de vie) : répartit l’activité entre utilisateurs nouveaux, actuels, dormants et réactivés. Elle explique la composition cachée derrière un total unique ; pilotez chaque segment.",
  },
  "pm-22": {
    frontQuestion: "Quelle métrique incarne le comportement récurrent qui capture le mieux la valeur centrale de votre produit ?",
    frontScenario: "Votre place de marché suit les pages vues ou les annonces, mais vous cherchez un repère centré sur la valeur pour aligner vos décisions.",
    backInfo: "North Star Metric (métrique étoile du Nord) : mesure durable de la valeur livrée au client, liée aux résultats de l’entreprise. Appuyez-la sur des métriques d’entrée et des garde-fous, sans la traiter comme le seul chiffre qui compte.",
  },
  "gr-01": {
    frontQuestion: "Quelle métrique montre le coût moyen pour acquérir un client payant ?",
    frontScenario: "Votre jeune pousse investit dans la publicité, le contenu et les ventes, et veut savoir ce que chaque nouveau client coûte vraiment.",
    backInfo: "CAC — Customer Acquisition Cost (coût d’acquisition client) : coût moyen d’acquisition par nouveau client. Précisez les coûts et la période inclus, puis suivez son évolution par canal.",
  },
  "gr-02": {
    frontQuestion: "Quelle métrique estime la valeur économique qu’un client apporte pendant toute la relation ?",
    frontScenario: "Votre activité par abonnement peut investir davantage pour attirer des clients qui restent et paient plusieurs années.",
    backInfo: "Customer Lifetime Value — LTV/CLV (valeur vie client) : valeur estimée générée par un client sur la durée de la relation, souvent en revenus ou en marge brute. La méthode varie selon le modèle ; explicitez-la au lieu d’appliquer une formule universelle.",
  },
  "gr-03": {
    frontQuestion: "Quel ratio aide à juger si l’économie d’acquisition reste viable ?",
    frontScenario: "Le marketing peut doubler les inscriptions, mais la direction veut savoir si la valeur générée justifie le coût d’acquisition.",
    backInfo: "LTV:CAC Ratio (ratio valeur vie sur coût d’acquisition) : compare la valeur vie estimée au coût d’acquisition. Lisez-le comme un signal directionnel, pas comme un seuil universel ; le stade de croissance, les marges et le délai de retour comptent.",
  },
  "gr-04": {
    frontQuestion: "Quelle métrique montre combien de temps la marge d’un client met à rembourser son coût d’acquisition ?",
    frontScenario: "Votre entreprise SaaS B2B investit lourdement dans les ventes et veut savoir combien de mois passent avant qu’un compte rembourse cet investissement.",
    backInfo: "CAC Payback Period (délai de récupération du coût d’acquisition) : temps nécessaire pour rembourser le coût d’acquisition grâce à la marge récurrente du client. Un délai court réduit la pression financière, mais les seuils acceptables varient selon l’activité.",
  },
  "gr-05": {
    frontQuestion: "Quelle métrique montre le revenu d’abonnement prévisible ramené à un mois ?",
    frontScenario: "Votre entreprise SaaS facture ses clients à des dates différentes et veut une vision homogène de ses revenus récurrents.",
    backInfo: "MRR — Monthly Recurring Revenue (revenu mensuel récurrent) : revenu d’abonnement récurrent normalisé au mois. Excluez les prestations ponctuelles et tout revenu non récurrent quand vous l’utilisez.",
  },
  "gr-06": {
    frontQuestion: "Quelle métrique exprime le revenu d’abonnement récurrent sur une base annuelle ?",
    frontScenario: "Votre direction veut une vision simple du rythme annuel tiré des abonnements récurrents.",
    backInfo: "ARR — Annual Recurring Revenue (revenu annuel récurrent) : revenu récurrent annualisé, souvent dérivé des contrats ou du revenu mensuel récurrent. Ne le confondez pas avec le chiffre d’affaires annuel total quand des revenus ponctuels existent.",
  },
  "gr-07": {
    frontQuestion: "Quelle métrique montre le revenu moyen généré par utilisateur sur une période ?",
    frontScenario: "Votre app grand public veut comparer sa monétisation entre des pays aux offres très différentes.",
    backInfo: "ARPU — Average Revenue per User (revenu moyen par utilisateur) : revenu moyen par utilisateur sur une période définie. Précisez si vous comptez les utilisateurs actifs, payants ou totaux.",
  },
  "gr-08": {
    frontQuestion: "Quelle métrique convient mieux que le revenu par utilisateur quand la facturation se fait au niveau de l’entreprise cliente ?",
    frontScenario: "Votre plateforme B2B compte des milliers de places, mais ne contracte qu’avec 200 entreprises clientes.",
    backInfo: "ARPA — Average Revenue per Account (revenu moyen par compte) : revenu moyen par compte client sur une période. Souvent plus pertinent que le revenu par utilisateur dans les produits vendus au niveau du compte ou de l’espace de travail.",
  },
  "gr-09": {
    frontQuestion: "Quelle métrique montre la valeur moyenne d’une commande en ligne ?",
    frontScenario: "Votre boutique garde un nombre de commandes stable, mais vous voulez savoir si les clients dépensent plus à chaque achat.",
    backInfo: "AOV — Average Order Value (panier moyen) : revenu moyen par commande terminée. Utile pour piloter l’assortiment, les offres groupées et le paiement ; testez des seuils et des lots.",
  },
  "gr-10": {
    frontQuestion: "Quelle métrique montre le revenu récurrent conservé après résiliations, baisses d’offre et extensions chez les clients existants ?",
    frontScenario: "Votre entreprise SaaS perd des comptes, mais les montées en gamme des autres suffisent à faire croître le revenu existant.",
    backInfo: "NRR — Net Revenue Retention (rétention nette du revenu) : mesure le revenu récurrent conservé sur une cohorte de clients existants, avec extensions, contractions et attrition. Suivez-le par segment pour repérer vos moteurs de croissance.",
  },
  "gr-11": {
    frontQuestion: "Quelle métrique de rétention ignore les extensions pour révéler les seules pertes de revenu récurrent ?",
    frontScenario: "Vos ventes additionnelles masquent un vrai problème de résiliations et de baisses d’offre.",
    backInfo: "GRR — Gross Revenue Retention (rétention brute du revenu) : mesure le revenu récurrent conservé avant toute extension. Elle rend visibles l’attrition et les contractions ; lisez-la avec la rétention nette pour un tableau complet.",
  },
  "gr-12": {
    frontQuestion: "Quelle métrique montre le revenu récurrent supplémentaire apporté par les montées en gamme chez les clients existants ?",
    frontScenario: "Vous lancez des options payantes et voulez séparer cette croissance de l’acquisition de nouveaux clients.",
    backInfo: "Expansion Revenue (revenu d’expansion) : revenu additionnel tiré des clients existants via montées en gamme, places ajoutées ou usage accru. C’est un moteur clé de la rétention nette ; suivez quelles offres le portent.",
  },
  "gr-13": {
    frontQuestion: "Quelle métrique montre la part du revenu qui reste après le coût direct du produit ou du service ?",
    frontScenario: "Deux produits génèrent le même revenu, mais l’un supporte des coûts d’infrastructure et de service bien plus lourds.",
    backInfo: "Gross Margin (marge brute) : revenu restant après le coût des biens ou services vendus. Utile pour juger l’efficacité économique avant les charges d’exploitation ; comparez-la par offre.",
  },
  "gr-14": {
    frontQuestion: "Quelle métrique estime ce qu’il reste d’une vente après les coûts variables liés à cette vente ?",
    frontScenario: "Votre place de marché doit savoir si chaque transaction supplémentaire couvre assez les coûts fixes d’exploitation.",
    backInfo: "Contribution Margin (marge sur coûts variables) : revenu moins coûts variables attribuables à ce revenu. Utile pour l’économie à l’unité et le seuil de rentabilité ; harmonisez sa définition dans l’entreprise.",
  },
  "gr-15": {
    frontQuestion: "Quelle métrique montre combien une campagne publicitaire rapporte pour chaque euro investi ?",
    frontScenario: "Votre équipe croissance compare la recherche payante et les réseaux sociaux avec une mesure d’efficacité fondée sur le revenu.",
    backInfo: "ROAS — Return on Ad Spend (retour sur dépenses publicitaires) : revenu attribué à la publicité divisé par la dépense. Il ignore beaucoup de coûts et dépend fortement de la qualité d’attribution ; croisez-le avec la marge.",
  },
  "gr-16": {
    frontQuestion: "Quelle métrique montre le pourcentage d’affichages publicitaires qui déclenchent un clic ?",
    frontScenario: "Votre campagne touche des millions de personnes, mais vous voulez savoir si le visuel donne vraiment envie de visiter le site.",
    backInfo: "CTR — Click-Through Rate (taux de clics) : part des impressions qui produisent un clic. Un taux élevé ne garantit ni un trafic de qualité ni une conversion en aval ; jugez-le avec la suite du parcours.",
  },
  "gr-17": {
    frontQuestion: "Quelle métrique mesure la valeur échangée sur une place de marché avant la commission de la plateforme ?",
    frontScenario: "Votre place de marché touche une commission, mais doit d’abord connaître la valeur totale des transactions entre acheteurs et vendeurs.",
    backInfo: "GMV — Gross Merchandise Value (volume brut de marchandises) : valeur totale des transactions facilitées sur une période, avant frais ou remboursements selon votre définition. Ce n’est pas le revenu propre de la plateforme.",
  },
  "gr-18": {
    frontQuestion: "Quelle métrique montre la part de la valeur des transactions que la plateforme conserve comme revenu ?",
    frontScenario: "Votre place de marché traite 10 millions d’euros de ventes, mais ne gagne que la commission et les frais de service.",
    backInfo: "Take Rate (taux de commission) : pourcentage de la valeur des transactions capté par la plateforme comme revenu. Précisez les frais et la valeur retenus, car les définitions varient.",
  },
  "an-01": {
    frontQuestion: "Que désigne l’unité de base pour une action porteuse de sens accomplie par un utilisateur ?",
    frontScenario: "Vous voulez enregistrer des actions comme « projet créé », « panier démarré » ou « invitation envoyée ».",
    backInfo: "Event (événement) : occurrence nommée qui représente un comportement de l’utilisateur ou du système. Nommez des actions porteuses de sens avec une convention stable, puis documentez-les.",
  },
  "an-02": {
    frontQuestion: "Que désignent les données qui précisent le contexte d’un événement ?",
    frontScenario: "« Achat terminé » vous aide déjà, mais vous avez aussi besoin du prix, de l’offre, de l’appareil et du moyen de paiement.",
    backInfo: "Event Property (propriété d’événement) : attribut joint à un événement pour filtrer, regrouper et analyser. Documentez les noms, les types et les valeurs autorisées de vos propriétés.",
  },
  "an-03": {
    frontQuestion: "Que désignent les données qui décrivent une personne ou un compte plutôt qu’une action isolée ?",
    frontScenario: "Vous voulez comparer les comportements selon le type d’offre, la région et le rôle du client.",
    backInfo: "User Property (propriété d’utilisateur) : attribut durable ou évolutif lié à un utilisateur, un compte ou un profil, pas à un seul événement. Évitez d’y stocker des données sensibles sans besoin réel ni règles claires.",
  },
  "an-04": {
    frontQuestion: "Quel document définit les événements à mesurer et leurs règles de nommage ?",
    frontScenario: "Designers, chefs de produit et développeurs créent chacun des noms légèrement différents pour les mêmes comportements.",
    backInfo: "Tracking Plan (plan de suivi) : référentiel partagé qui décrit événements, propriétés, nommage, déclencheurs, responsables et validation. Il évite qu’une instrumentation incohérente ne fausse vos analyses.",
  },
  "an-05": {
    frontQuestion: "Quel processus ajoute concrètement les événements de mesure dans le produit ou le pipeline de données ?",
    frontScenario: "Vous avez décidé quoi mesurer, mais l’équipe technique doit encore rendre ces comportements observables.",
    backInfo: "Instrumentation (instrumentation) : mise en œuvre de la collecte de données dans le produit et ses systèmes. Testez-la comme toute autre fonctionnalité du produit.",
  },
  "an-06": {
    frontQuestion: "Quelle analyse montre comment les utilisateurs avancent dans une suite d’étapes définie et où ils sortent ?",
    frontScenario: "Beaucoup d’utilisateurs ajoutent un article au panier, mais bien moins terminent le paiement.",
    backInfo: "Funnel Analysis (analyse en entonnoir) : mesure la progression et la conversion à travers des étapes ordonnées. Idéale pour les parcours connus ; tous les trajets réels ne sont pourtant pas linéaires.",
  },
  "an-07": {
    frontQuestion: "Quelle analyse révèle les parcours réellement suivis, sans imposer un entonnoir prédéfini ?",
    frontScenario: "Vous ignorez ce que font les utilisateurs entre l’inscription et la première valeur, et voulez voir leurs chemins réels.",
    backInfo: "Path Analysis (analyse des parcours) : explore les séquences d’événements observées avant ou après des actions choisies. Utile pour découvrir détours, boucles et impasses ; laissez-vous surprendre.",
  },
  "an-08": {
    frontQuestion: "Quelle analyse répartit les utilisateurs en groupes pour comparer les comportements ?",
    frontScenario: "Vous voulez comparer l’activation sur mobile et sur ordinateur, puis entre utilisateurs gratuits et payants.",
    backInfo: "Segmentation (segmentation) : découpe les métriques ou les comportements en groupes porteurs de sens. Les segments révèlent des écarts que les moyennes cachent ; comparez-les systématiquement.",
  },
  "an-09": {
    frontQuestion: "Que désigne un groupe d’utilisateurs enregistré, défini par des attributs ou des comportements partagés ?",
    frontScenario: "Vous analysez souvent les utilisateurs qui ont invité un collègue dès leur premier jour.",
    backInfo: "Behavioral Cohort (cohorte comportementale) : groupe réutilisable défini par un comportement ou des traits partagés. Comparez ses cohortes sur la rétention, la conversion et d’autres résultats.",
  },
  "an-10": {
    frontQuestion: "Que désigne le regroupement de l’activité en visites ou en périodes d’interaction continue ?",
    frontScenario: "Vous voulez comprendre ce que les utilisateurs font pendant une visite typique, pas seulement sur un mois entier.",
    backInfo: "Session (session) : regroupement de l’activité d’un utilisateur sur une période définie ou jusqu’à un seuil d’inactivité. Les définitions varient selon les outils et conviennent moins aux produits toujours actifs ou multi-appareils.",
  },
};
