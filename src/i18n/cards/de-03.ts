import type { CardOverride } from '../cardOverrides';

export const de03: Record<string, CardOverride> = {
  "ur-15": {
    frontQuestion: "Welche Expertenmethode prüft ein Interface anhand anerkannter Usability-Prinzipien, ganz ohne Teilnehmende?",
    frontScenario: "Ihr Team braucht vor den Nutzertests eine schnelle, strukturierte Sicht auf die Schwachstellen der neuen Screens.",
    backInfo: "Heuristic Evaluation (heuristische Evaluation) — Expertinnen und Experten prüfen das Interface anhand bewährter Heuristiken. Sie finden schnell wahrscheinliche Probleme. Ersetzen Sie damit aber keine Beobachtungen mit echten Nutzerinnen und Nutzern.",
  },
  "ur-16": {
    frontQuestion: "Welche Expertenmethode zeigt Schritt für Schritt, ob Erstnutzer verstehen, was als Nächstes zu tun ist?",
    frontScenario: "Der Einrichtungsablauf richtet sich an Admins, die ihn zum ersten Mal sehen. Sie wollen die Lernbarkeit prüfen.",
    backInfo: "Cognitive Walkthrough (kognitiver Durchgang) — Sie gehen eine Aufgabe Schritt für Schritt durch und fragen: Erkennt die Person das Ziel, sieht sie die Bedienelemente, verbindet sie Aktion und Ziel und versteht sie die Rückmeldung?",
  },
  "ur-17": {
    frontQuestion: "Was legt fest, wer für eine Studie geeignet ist, damit Sie die passenden Personen einladen?",
    frontScenario: "Sie forschen mit Ersthypotheken-Antragstellern, doch plötzlich sitzen lauter Finanzprofis am Tisch, die alles schon kennen.",
    backInfo: "Screener (Screening-Fragebogen) — kurzer Fragebogen zur Auswahl anhand relevanter Merkmale und Verhaltensweisen. Legen Sie die Kriterien aus der Forschungsfrage ab und verraten Sie dabei keine Wunschantworten.",
  },
  "ur-18": {
    frontQuestion: "Was beschreibt den Punkt, ab dem weitere qualitative Gespräche kaum noch neue Erkenntnisse bringen?",
    frontScenario: "Nach vielen Interviews wiederholen sich die Themen, neue Gespräche bestätigen nur noch das Bekannte.",
    backInfo: "Saturation (Sättigung) — Zustand abnehmenden Erkenntnisgewinns, wenn kaum noch neue relevante Themen auftauchen. Nutzen Sie sie als Orientierung für Ihre Fragestellung, nicht als starre Regel für eine Teilnehmerzahl.",
  },
  "pd-01": {
    frontQuestion: "Was beschreibt die Bedürfnisse, Schmerzen und gewünschten Ergebnisse der Kunden, bevor Sie entscheiden, was Sie bauen?",
    frontScenario: "Ihr Team streitet schon über Features, obwohl noch niemand klar gesagt hat, welches Kundenproblem eigentlich zählt.",
    backInfo: "Problem Space (Problemraum) — Bedürfnisse, Probleme, Rahmenbedingungen und angestrebte Ergebnisse der Nutzer. Bleiben Sie bewusst lange genug hier, damit Sie sich nicht zu früh in eine Lösung verlieben.",
  },
  "pd-02": {
    frontQuestion: "Was beschreibt die möglichen Produkte, Features und Abläufe, mit denen sich ein verstandenes Problem lösen ließe?",
    frontScenario: "Sie wissen jetzt, dass Freiberufler mit der Rechnungsnachverfolgung kämpfen. Nun überlegen Sie, wie Sie konkret helfen können.",
    backInfo: "Solution Space (Lösungsraum) — die Menge möglicher Wege, ein Problem oder eine Chance anzugehen. Vergleichen Sie bewusst mehrere Lösungen, statt die erste Idee für gesetzt zu halten.",
  },
  "pd-03": {
    frontQuestion: "Womit sollte Discovery starten, wenn Sie eine messbare Verhaltensänderung brauchen statt eines Feature-Wunschs?",
    frontScenario: "Die Führung sagt „Baut eine KI-Suche“, doch zuerst müssen Sie klären, welche Verbesserung das Feature überhaupt bringen soll.",
    backInfo: "Desired Outcome (angestrebtes Ergebnis) — messbares Resultat, das Sie im Kunden- oder Geschäftsverhalten verändern wollen. Halten Sie fest, welches Verhalten sich ändern soll, statt nur Output in Features zu zählen.",
  },
  "pd-04": {
    frontQuestion: "Was bezeichnet ein ungelöstes Kundenbedürfnis, das Ihnen helfen kann, Ihr angestrebtes Ergebnis zu erreichen?",
    frontScenario: "Interview für Interview erzählen Käufer, dass sie Tarife vor dem Kauf nicht sicher vergleichen können.",
    backInfo: "Opportunity (Chance) — Kundenbedürfnis, Schmerz oder Wunsch, das sich im Hinblick auf Ihr Ergebnis zu erkunden lohnt. Formulieren Sie Chancen ohne Lösung darin: Es ist noch keine Feature-Idee.",
  },
  "pd-05": {
    frontQuestion: "Was muss wahr sein, damit Ihr Plan aufgeht, obwohl Sie es noch nicht bewiesen haben?",
    frontScenario: "Sie gehen davon aus, dass Nutzer einer automatischen Empfehlung so weit vertrauen, dass sie danach handeln.",
    backInfo: "Assumption (Annahme) — unbewiesene Überzeugung hinter einer Produktentscheidung. Machen Sie Annahmen explizit, damit Sie die riskantesten zuerst und möglichst günstig prüfen.",
  },
  "pd-06": {
    frontQuestion: "Welches Produktrisiko fragt, ob Kunden die vorgeschlagene Lösung überhaupt wollen und schätzen?",
    frontScenario: "Technisch ist das Feature machbar, doch niemand weiß, ob Nutzer ihr Verhalten ändern oder dafür zahlen würden.",
    backInfo: "Value Risk (Wert-Risiko) — Risiko, dass die Lösung zu wenig Kundenwert schafft. Prüfen Sie Attraktivität, Relevanz, Verhalten und Zahlungsbereitschaft, bevor Sie große Entwicklung investieren.",
  },
  "pd-07": {
    frontQuestion: "Welches Produktrisiko fragt, ob Nutzer das geplante Erlebnis verstehen und erfolgreich bedienen können?",
    frontScenario: "Kunden wünschen sich das Feature, doch in frühen Prototypen scheitern sie an der richtigen Konfiguration.",
    backInfo: "Usability Risk (Benutzbarkeitsrisiko) — Risiko, dass die Zielgruppe die Lösung nicht effektiv bedienen kann. Reduzieren Sie es mit Prototypen und Usability-Tests, bevor Sie bauen.",
  },
  "pd-08": {
    frontQuestion: "Welches Produktrisiko fragt, ob Sie die Lösung mit Technik, Daten und Ressourcen überhaupt bauen und betreiben können?",
    frontScenario: "Das Konzept braucht Prognosen fast in Echtzeit, doch Ihre Datenpipeline läuft nur einmal am Tag.",
    backInfo: "Feasibility Risk (Machbarkeitsrisiko) — Risiko, dass sich die Lösung mit vorhandenen Fähigkeiten, Zeit und Infrastruktur nicht verlässlich umsetzen lässt. Holen Sie Engineering und Daten früh in die Discovery.",
  },
  "pd-09": {
    frontQuestion: "Welches Produktrisiko fragt, ob die Lösung für Geschäft, Recht, Betrieb und Strategie tragfähig ist?",
    frontScenario: "Nutzer lieben die Idee, doch mit manueller Betreuung wäre jede Transaktion ein Verlustgeschäft.",
    backInfo: "Viability Risk (Tragfähigkeitsrisiko) — Risiko, dass die Lösung für das Unternehmen nicht nachhaltig funktioniert. Prüfen Sie Wirtschaftlichkeit, Recht und Compliance, Betrieb, Strategie und Stakeholder-Bedingungen.",
  },
  "pd-10": {
    frontQuestion: "Was sollten Sie zuerst testen, wenn eine einzige unbewiesene Annahme die ganze Lösung kippen könnte?",
    frontScenario: "Der Marktplatz-Prototyp wirkt ausgereift, doch alles steht und fällt damit, ob Verkäufer in fünf Minuten antworten.",
    backInfo: "Riskiest Assumption (riskanteste Annahme) — die Annahme, deren Scheitern die Idee am stärksten gefährdet, gemessen an Unsicherheit und Bedeutung. Testen Sie sie, bevor Sie Details polieren.",
  },
  "pd-11": {
    frontQuestion: "Welche Technik ordnet Annahmen nach Bedeutung und Beleglage, damit Sie die Prüfreihenfolge festlegen können?",
    frontScenario: "Ihr Produkt-Trio hat zwanzig Annahmen gesammelt und braucht eine vernünftige Reihenfolge für die Validierung.",
    backInfo: "Assumption Mapping (Annahmen-Mapping) — Sie sortieren Annahmen etwa nach Wichtigkeit oder Risiko und nach Stärke der Belege. So erkennen Sie, welcher Test Ihre Entscheidung am meisten voranbringt.",
  },
  "pd-12": {
    frontQuestion: "Welcher kostengünstige Test misst das Interesse an einem Feature, bevor es das Feature überhaupt gibt?",
    frontScenario: "Sie sind unsicher, ob Kunden einen Export brauchen, und wollen Belege, bevor Sie sechs Wochen Entwicklungszeit investieren.",
    backInfo: "Fake Door Test (Fake-Door-Test) — Sie zeigen einen realistischen Einstieg wie Button oder Landingpage und messen Klicks oder Anmeldungen. Bleiben Sie dabei fair und transparent, damit niemand getäuscht oder enttäuscht wird.",
  },
  "pd-13": {
    frontQuestion: "Welcher Validierungsansatz liefert die Leistung erst einmal von Hand an wenige Kunden, um den Wert zu verstehen?",
    frontScenario: "Ein Start-up erstellt fünf Kunden die Wochenberichte persönlich, bevor es in eine Reporting-Engine investiert.",
    backInfo: "Concierge Test (Concierge-Test) — Sie erbringen den Nutzen bewusst manuell und lernen dabei Bedarf, Ablauf und Nutzungs- oder Zahlungsbereitschaft kennen. Der manuelle Charakter ist für die Beteiligten meist sichtbar.",
  },
  "pd-14": {
    frontQuestion: "Welcher Prototyp-Ansatz wirkt für Nutzer automatisiert, während im Hintergrund Menschen die Arbeit übernehmen?",
    frontScenario: "Sie testen einen „KI“-Ablauf zur Kategorisierung, obwohl es noch kein Modell gibt — eine Person sortiert die Anfragen von Hand.",
    backInfo: "Wizard of Oz Prototype (Wizard-of-Oz-Prototyp) — Nutzer erleben scheinbar automatisiertes Verhalten, das heimlich manuell erzeugt wird. So prüfen Sie Interaktion und Wert, bevor Sie teure Automatisierung bauen.",
  },
  "pd-15": {
    frontQuestion: "Welche bereichsübergreifende Gruppe verbindet Produkt, Design und Engineering in der kontinuierlichen Discovery?",
    frontScenario: "Entscheidungen werden besser, wenn Kundenwert, Erlebnis und technische Grenzen gemeinsam erkundet statt nacheinander übergeben werden.",
    backInfo: "Product Trio (Produkt-Trio) — enge Zusammenarbeit von Produktmanager, Designer und Entwickler in der Discovery. Verstehen Sie es als Arbeitsmodell, nicht als starre Org-Vorgabe.",
  },
  "pd-16": {
    frontQuestion: "Was bedeutet es, Kundinnen und Kunden laufend einzubeziehen und Annahmen ständig zu prüfen statt nur phasenweise?",
    frontScenario: "Ihr Team spricht jede Woche mit Kunden und testet Chancen und Lösungen parallel zur Auslieferung.",
    backInfo: "Continuous Discovery (kontinuierliche Discovery) — fortlaufende Discovery, die Produktrisiken durch häufigen Kundenkontakt, Chancen-Formulierung und Annahmentests senkt. Sie ergänzt die Auslieferung, statt eine einmalige Phase davor zu sein.",
  },
  "sp-01": {
    frontQuestion: "Was beschreibt den langfristigen Zukunftszustand, den Ihr Produkt oder Unternehmen mitgestalten will?",
    frontScenario: "Ihr Team braucht eine tragfähige Richtung, die einzelne Features und Quartalspläne überdauert.",
    backInfo: "Product Vision (Produktvision) — erstrebenswerte Beschreibung der Zukunft, auf die das Produkt hinarbeitet. Sie gibt Orientierung, aber keinen detaillierten Umsetzungsplan.",
  },
  "sp-02": {
    frontQuestion: "Was beschreibt, warum Ihre Organisation oder Ihr Produkt heute existiert und wem es dient?",
    frontScenario: "Ihr Team braucht eine knappe Aussage zum Zweck, keine ferne Zukunftsphantasie.",
    backInfo: "Mission (Mission) — Aussage zum heutigen Zweck: warum es Organisation oder Produkt gibt, wem sie dienen und welchen Wert sie schaffen. Sie steht für das Heute, die Vision für das Morgen.",
  },
  "sp-03": {
    frontQuestion: "Welche Auswahl an Richtungsentscheidungen erklärt, wo Ihr Produkt antritt und wie es sich abheben will?",
    frontScenario: "Die Roadmap ist voll mit Wünschen, doch es fehlt jede Logik, welche Märkte und Probleme wirklich wichtiger sind.",
    backInfo: "Product Strategy (Produktstrategie) — stimmige Auswahl, die Vision mit Zielkunden, Problemen, Differenzierung, Fähigkeiten und Zielkonflikten verbindet. Strategie heißt auch, zu attraktiven Optionen bewusst Nein zu sagen.",
  },
  "sp-04": {
    frontQuestion: "Was ist eine bewusste, größere Festlegung auf eine Richtung, deren Erfolg unsicher, aber strategisch wichtig ist?",
    frontScenario: "Das Unternehmen setzt Zusammenarbeit für ein Jahr als zentralen Wachstumshebel statt vieler loser Features.",
    backInfo: "Strategic Bet (strategische Wette) — spürbarer Ressourceneinsatz auf Basis einer strategischen Überzeugung. Halten Sie Annahmen und Lernsignale fest, damit Sie erkennen, ob die Wette aufgeht.",
  },
  "sp-05": {
    frontQuestion: "Welches Artefakt zeigt die geplante Produktrichtung und Reihenfolge, ohne ein festes Feature-Versprechen zu sein?",
    frontScenario: "Stakeholder wollen verstehen, welche Themen Ihr Team als Nächstes verfolgt und warum gerade diese.",
    backInfo: "Product Roadmap (Produkt-Roadmap) — Kommunikationsbild zu Richtung, Prioritäten und erwartetem Verlauf. Passen Sie sie an neue Erkenntnisse an: Sie ist kein fester Liefervertrag.",
  },
  "sp-06": {
    frontQuestion: "Welche Roadmap ordnet Arbeit nach Problemen oder messbaren Ergebnissen statt nach Features mit Datum?",
    frontScenario: "Sie wollen sich auf „weniger Fehlschläge beim Ersteinrichten“ einigen, statt sich ein halbes Jahr zu früh auf eine Lösung festzulegen.",
    backInfo: "Outcome-based Roadmap (ergebnisorientierte Roadmap) — Roadmap rund um Ergebnisse, Kundenprobleme oder strategische Themen. Sie hält die Richtung und lässt offen, welche Lösung sich als beste erweist.",
  },
  "sp-07": {
    frontQuestion: "Welches Zielsystem verbindet ein qualitatives Ziel mit messbaren Schlüsselergebnissen?",
    frontScenario: "Ihr Team will eine ambitionierte Richtung plus Belege, ob es sich wirklich dorthin bewegt hat.",
    backInfo: "OKR — Objectives and Key Results (Objectives and Key Results) — Rahmen aus qualitativem Ziel und wenigen messbaren Ergebnissen. Gute Schlüsselergebnisse beschreiben Resultate, nicht nur erledigte Aufgaben.",
  },
  "sp-08": {
    frontQuestion: "Was ist in einem OKR die qualitative Beschreibung der Veränderung oder Richtung, die Sie erreichen wollen?",
    frontScenario: "„Das Ersteinrichten für neue Teams mühelos machen“ drückt eine Absicht aus, aber noch keine Messung.",
    backInfo: "Objective (Zielsetzung) — qualitatives, richtungsgebendes Ziel im OKR. Es beantwortet, welche sinnvolle Veränderung das Team anstrebt.",
  },
  "sp-09": {
    frontQuestion: "Was ist in einem OKR der messbare Beleg dafür, ob das Ziel erreicht wurde?",
    frontScenario: "Statt einer Liste ausgelieferter Features braucht das Team Zahlen wie höhere Aktivierung und kürzere Einrichtungszeit.",
    backInfo: "Key Result (Schlüsselergebnis) — quantifiziertes Ergebnis, an dem Sie den Fortschritt zum Ziel ablesen. Ein ausgeliefertes Feature allein ist meist nur eine Maßnahme, kein starkes Schlüsselergebnis.",
  },
  "sp-10": {
    frontQuestion: "Welches Priorisierungsmodell bewertet Ideen nach Reichweite, Wirkung, Sicherheit und Aufwand?",
    frontScenario: "Sie müssen Ideen vergleichen, die unterschiedlich viele Nutzer betreffen und unterschiedlich viel Entwicklung kosten.",
    backInfo: "RICE (RICE) — Priorisierungsmodell mit Reach × Impact × Confidence geteilt durch Effort. Es hilft beim strukturierten Vergleich, doch die Werte hängen von Annahmen ab und ersetzen kein strategisches Urteil.",
  },
  "sp-11": {
    frontQuestion: "Welches schlanke Priorisierungsmodell bewertet Ideen nach Wirkung, Sicherheit und Einfachheit?",
    frontScenario: "Als junges Team fehlen Ihnen verlässliche Reichweitenzahlen, deshalb wollen Sie schneller als mit RICE punkten.",
    backInfo: "ICE (ICE) — Priorisierungsmodell aus Impact, Confidence und Ease. Es ist schnell, bleibt aber sehr subjektiv, wenn Sie keine einheitlichen Bewertungsskalen festlegen.",
  },
  "sp-12": {
    frontQuestion: "Welche Priorisierungsmethode teilt Verzögerungskosten durch Auftragsgröße und bevorzugt wertvolle, schnell lieferbare Arbeit?",
    frontScenario: "Im Portfolio müssen Sie Vorhaben staffeln, bei denen Dringlichkeit und Aufwand stark auseinandergehen.",
    backInfo: "WSJF — Weighted Shortest Job First (gewichtete kürzeste Aufgabe zuerst) — Priorisierung aus Cost of Delay geteilt durch Job Size, beliebt in skalierten agilen Kontexten. Auch hier brauchen die Schätzwerte gutes Urteilsvermögen.",
  },
  "sp-13": {
    frontQuestion: "Welche Priorisierungsmethode sortiert Umfang in Muss, Soll, Kann und Wird-diesmal-nicht für einen Zeitraum?",
    frontScenario: "Für den Release wünschen sich Kunden mehr Features, als hineinpassen — Sie brauchen klare Umfangkategorien.",
    backInfo: "MoSCoW (MoSCoW) — Umfangspriorisierung in Must, Should, Could und Won't have für dieses Mal. Begrenzen Sie die Muss-Liste streng, sonst verliert die Einteilung jede Aussagekraft.",
  },
  "sp-14": {
    frontQuestion: "Welches einfache Werkzeug stellt erwartete Wirkung und nötigen Aufwand gegenüber?",
    frontScenario: "Sie wollen schnelle Gewinne erkennen und keine Monate in Ideen mit geringem Nutzen stecken.",
    backInfo: "Impact–Effort Matrix (Impact-Effort-Matrix) — Gegenüberstellung von erwarteter Wirkung und Aufwand in einer 2×2-Darstellung. Gut für Diskussion und Sortierung, doch Sicherheit, Zeitpunkt und Strategiefit müssen Sie bei Bedarf extra einbeziehen.",
  },
  "sp-15": {
    frontQuestion: "Welches Modell ordnet Produktmerkmale danach, wie ihre An- oder Abwesenheit die Zufriedenheit beeinflusst?",
    frontScenario: "Manche Funktionen sind selbstverständliche Basis, andere begeistern gerade, weil niemand sie erwartet hat.",
    backInfo: "Kano Model (Kano-Modell) — Einteilung etwa in Basis-, Leistungs- und Begeisterungsmerkmale anhand der Zufriedenheitsreaktion. Die Zuordnung wandelt sich mit der Zeit, weil Erwartungen steigen.",
  },
  "sp-16": {
    frontQuestion: "Was drückt den wirtschaftlichen Verlust oder entgangenen Wert aus, der durch das Verzögern einer Arbeit entsteht?",
    frontScenario: "Eine verschobene Pflichtänderung und eine verschobene Schönheitskorrektur haben bei gleichem Aufwand völlig andere Folgen.",
    backInfo: "Cost of Delay (Kosten der Verzögerung) — Schätzung des Werts, der verloren geht, solange Arbeit wartet, etwa Umsatz, Risiko, Kundenschaden oder verpasste Zeitfenster. So machen Sie Dringlichkeit explizit.",
  },
  "sp-17": {
    frontQuestion: "Welche Methode priorisiert Chancen, indem sie Kundenwichtigkeit und aktuelle Zufriedenheit verbindet?",
    frontScenario: "Nutzern ist ein Ablauf sehr wichtig, doch mit heutigen Lösungen sind sie deutlich unzufrieden — hier liegt Potenzial.",
    backInfo: "Opportunity Scoring (Opportunity-Scoring) — Sie vergleichen die Wichtigkeit von Ergebnissen oder Bedürfnissen mit der Zufriedenheit mit bestehenden Lösungen. Die genauen Formeln variieren; Ziel ist, wichtige, unterversorgte Ergebnisse zu finden.",
  },
  "sp-18": {
    frontQuestion: "Was gibt in Scrum das langfristige Ziel vor, das dem Produkt und dem Backlog Richtung gibt?",
    frontScenario: "Ein Scrum-Team braucht über mehrere Sprints hinweg einen stimmigen Zustand, auf den es hinarbeitet.",
    backInfo: "Product Goal (Produktziel) — langfristiges Ziel des Scrum-Teams, verankert im Product Backlog. Es schafft Fokus über das einzelne Sprintziel hinaus.",
  },
  "fw-01": {
    frontQuestion: "Welche Sichtweise beschreibt Kundennachfrage über den Fortschritt, den jemand erreichen will, statt über Merkmale oder Feature-Wünsche?",
    frontScenario: "Zwei sehr verschiedene Kunden nutzen dasselbe Tool, weil beide schnell eine komplexe Entscheidung abstimmen müssen.",
    backInfo: "Jobs to Be Done — JTBD (Jobs to Be Done) — Blick auf Produkte durch den Fortschritt, den Kunden in einer Situation suchen. Achten Sie auf Aufgabe, Kontext und angestrebten Fortschritt statt nur auf Personas oder Feature-Wünsche.",
  },
  "fw-02": {
    frontQuestion: "Welches Satzformat drückt Situation, Motivation und Wunsch-Ergebnis als „Wenn …, möchte ich …, damit ich …“ aus?",
    frontScenario: "Sie wollen Kontext und Motivation beschreiben, ohne die Anforderung gleich als featurelastige User-Story zu formulieren.",
    backInfo: "Job Story (Job-Story) — JTBD-Format: Wenn [Situation], möchte ich [Motivation], damit ich [erwartetes Ergebnis]. Es betont Kontext und Fortschritt statt reiner Rollenetiketten.",
  },
  "fw-03": {
    frontQuestion: "Welche JTBD-Idee betrachtet Anziehung und Abstoßung, Gewohnheiten der Gegenwart und Sorgen vor dem Wechsel?",
    frontScenario: "Kunden sagen, sie wollen ein besseres Tool, wechseln aber nicht — Sie müssen Kräfte für und gegen den Wechsel verstehen.",
    backInfo: "Forces of Progress (Kräfte des Fortschritts) — JTBD-Sicht auf Wechselkräfte: Push weg vom Alten, Pull zum Neuen, Trägheit und Gewohnheiten sowie Ängste vor Veränderung. Nützlich, um Annahme und Wechselverhalten zu verstehen.",
  },
  "fw-04": {
    frontQuestion: "Welches Designmodell wechselt zwischen Öffnen und Fokussieren über Entdecken, Definieren, Entwickeln und Liefern?",
    frontScenario: "Ihr Team braucht ein einfaches, geteiltes Bild: Problem breit erkunden, eingrenzen, Lösungen erkunden, wieder eingrenzen.",
    backInfo: "Double Diamond (Doppel-Diamant) — Modell des Design Council mit zwei Öffnen-Fokussieren-Zyklen: Discover, Define, Develop, Deliver. Verstehen Sie es als Denkmodell, nicht als Pflicht zu linearem Vorgehen.",
  },
  "fw-05": {
    frontQuestion: "Welcher nutzerzentrierte Ansatz arbeitet üblicherweise mit Verstehen, Definieren, Ideenfinden, Prototypen und Testen?",
    frontScenario: "Für einen Workshop brauchen Sie eine vertraute Struktur vom Nutzerverständnis bis zum getesteten Konzept.",
    backInfo: "Design Thinking (Design Thinking) — breiter, nutzerzentrierter Problemlösungsansatz, oft als Empathie, Definition, Ideenfindung, Prototyp und Test dargestellt. In der Praxis laufen diese Schritte iterativ, nicht als starrer Wasserfall.",
  },
  "fw-06": {
    frontQuestion: "Welcher Ansatz verbindet Lean-Start-up-Ideen mit gemeinsamer UX-Arbeit, schnellen Annahmen und kleinen Experimenten?",
    frontScenario: "Ihr Produktteam will weniger Übergabe-Dokumente und mehr gemeinsame Hypothesen, Prototypen und Lernerkenntnisse.",
    backInfo: "Lean UX (Lean UX) — kollaborativer Ansatz mit Annahmen, Hypothesen, schnellen Experimenten und Fokus auf Ergebnisse statt schwerer Lieferobjekte. Er wirkt am besten, wenn Design, Produkt und Engineering gemeinsam lernen.",
  },
  "fw-07": {
    frontQuestion: "Welches Wachstumsmodell gliedert den Kundenlebenszyklus in Gewinnung, Aktivierung, Bindung, Empfehlung und Umsatz?",
    frontScenario: "Ein Start-up will einfach erkennen, ob Wachstumsprobleme vor dem ersten Wert, danach oder bei der Monetarisierung liegen.",
    backInfo: "AARRR — Pirate Metrics (Pirate-Metriken) — Lebenszyklus-Modell: Acquisition, Activation, Retention, Referral, Revenue. Nutzen Sie es zur Diagnose, nicht als Vorschrift, jede Stufe gleich stark zu optimieren.",
  },
  "fw-08": {
    frontQuestion: "Welches UX-Messmodell gruppiert Signale in Freude, Engagement, Annahme, Bindung und Aufgabenerfolg?",
    frontScenario: "Sie wollen Nutzererlebnis breiter messen und sich nicht auf einen einzigen Zufriedenheitswert verlassen.",
    backInfo: "HEART Framework (HEART-Framework) — UX-Kennzahlenmodell: Happiness, Engagement, Adoption, Retention, Task Success. Ordnen Sie Ziele den passenden Signalen und Metriken in den relevanten Kategorien zu.",
  },
  "fw-09": {
    frontQuestion: "Welches visuelle Discovery-Modell verbindet Wunsch-Ergebnis mit Kundenchancen, Lösungsideen und Annahmentests?",
    frontScenario: "Interview-Erkenntnisse und Lösungsideen liegen verstreut in Dokumenten — Sie brauchen eine Struktur, die Discovery zusammenhält.",
    backInfo: "Opportunity Solution Tree — OST (Opportunity-Solution-Tree) — Baumdarstellung, die ein Ergebnis mit Chancenraum, Lösungsideen und Tests oder Annahmen verknüpft. So vergleichen Sie Wege, statt vom Ergebnis direkt auf ein Feature zu springen.",
  },
  "fw-10": {
    frontQuestion: "Welches Canvas verbindet Kundenaufgaben, Schmerzen und Gewinne mit Produkten, Schmerzlinderern und Gewinnbringern?",
    frontScenario: "Sie müssen prüfen, ob ein geplantes Wertversprechen wirklich zu dem passt, was Zielkunden erreichen wollen.",
    backInfo: "Value Proposition Canvas (Value-Proposition-Canvas) — verbindet Kundenprofil mit Wertangebot. Gut, um Fit-Hypothesen sichtbar zu machen; Belege von Kunden ersetzen Workshop-Einigkeit trotzdem nicht.",
  },
  "fw-11": {
    frontQuestion: "Welches einseitige Modell zeigt Partner, Aktivitäten, Ressourcen, Wertangebote, Beziehungen, Kanäle, Segmente, Kosten und Erlöse?",
    frontScenario: "Eine Gründerin will die Annahmen hinter einem neuen Geschäftsmodell auf einer Seite sichtbar machen.",
    backInfo: "Business Model Canvas (Business-Model-Canvas) — Neun-Felder-Modell dazu, wie eine Organisation Wert schafft, liefert und sichert. Verstehen Sie es als Hypothesenbild, nicht als Beweis, dass das Modell trägt.",
  },
  "fw-12": {
    frontQuestion: "Welche Karte zeigt die Kundenreise zusammen mit sichtbaren Kontakten, Prozessen im Hintergrund, Personen und Systemen?",
    frontScenario: "Ein Serviceproblem wirkt wie ein UI-Fehler, doch die Ursache liegt in einem internen Freigabeprozess und verspäteter Datensynchronisation.",
    backInfo: "Service Blueprint (Service-Blueprint) — Service-Design-Karte, die Kundenaktionen und Kontaktpunkte mit sichtbaren Mitarbeitenden- und Systemkontakten, Hintergrundprozessen und Stützsystemen verbindet. Ideal für kanalübergreifende Dienste.",
  },
};
