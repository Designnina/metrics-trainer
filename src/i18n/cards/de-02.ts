import type { CardOverride } from '../cardOverrides';

export const de02: Record<string, CardOverride> = {
  "an-11": {
    frontQuestion: "Woran prüfen Sie, ob Ihre Analytics-Events sauber ausgelöst werden?",
    frontScenario: "Nach einem Release zeigt Ihr Dashboard plötzlich unmögliche Conversion-Werte. Sie vermuten, dass das Tracking defekt ist.",
    backInfo: "Analytics QA (Analyse-Qualitätssicherung) — Sie prüfen Auslöser, Identitäten, Properties, Typen, Duplikate und das Verhalten in Test- und Live-Umgebung. Machen Sie das immer, bevor Sie neue Daten für Entscheidungen nutzen. Testen Sie Tracking genauso sorgfältig wie Produktcode.",
  },
  "an-12": {
    frontQuestion: "Warum wird eine einzige Person als zwei verschiedene Nutzer gezählt?",
    frontScenario: "Jemand stöbert erst anonym und registriert sich später. Im Funnel taucht die Person danach zweimal auf.",
    backInfo: "Identity Resolution (Identitätszusammenführung) — Sie verknüpfen anonyme, eingeloggte und geräteübergreifende Kennungen zu einer Person, wo das sinnvoll ist. Klären Sie die Logik vorab, denn falsche Zusammenführung verzerrt Funnel und Retention und führt zu falschen Entscheidungen.",
  },
  "an-13": {
    frontQuestion: "Welchem Kanal rechnen Sie eine Conversion zu?",
    frontScenario: "Eine Käuferin sieht Ihre Anzeige, liest einen Artikel und kauft später über die Suche. Ihr Team streitet, welcher Kanal den Erfolg gebracht hat.",
    backInfo: "Attribution (Attribution) — Regeln oder Modelle, die den Beitrag von Touchpoints zur Conversion verteilen. Das ist immer nur eine Schätzung mit Tracking-Lücken und Modellannahmen, keine objektive Wahrheit. Wählen Sie das Modell bewusst und vergleichen Sie nichts Unvergleichbares.",
  },
  "an-14": {
    frontQuestion: "Womit legen Sie fest, was Ihre Dashboards wirklich messen sollen?",
    frontScenario: "Jedes Team nennt jeden Klick „Engagement“. Das Dashboard sieht lebendig aus, hilft aber niemandem weiter.",
    backInfo: "Measurement Framework (Messkonzept) — Sie halten Produktziele, Fragen, Kennzahlen, Events und genaue Definitionen in einem Dokument fest. Klären Sie zuerst, welche Entscheidungen Sie treffen wollen, und bauen Sie erst dann Dashboards. So sammeln Sie keine Daten um der Daten willen.",
  },
  "an-15": {
    frontQuestion: "Welche Kennzahl warnt Sie früh, bevor das Endergebnis feststeht?",
    frontScenario: "Sie wollen nicht 90 Tage auf die Retention warten, um zu wissen, ob Ihre Änderung wirkt. Sie brauchen ein frühes Signal.",
    backInfo: "Leading Indicator (Frühindikator) — eine Kennzahl, die sich vor dem gewünschten Ergebnis bewegt und Ihnen schnell Rückmeldung gibt. Nutzen Sie sie nur bei belegter Verbindung zum Ergebnis: Was sich schnell bewegt, sagt noch lange nichts über die Zukunft aus.",
  },
  "an-16": {
    frontQuestion: "Welche Kennzahl bestätigt das Ergebnis erst, wenn alles vorbei ist?",
    frontScenario: "Der Quartalsumsatz zeigt Ihnen, ob Ihre Arbeit an Akquise und Aktivierung wirklich gefruchtet hat. Zurückdrehen lässt sich nichts mehr.",
    backInfo: "Lagging Indicator (Spätindikator) — eine Kennzahl, die das Ergebnis erst abbildet, nachdem das Verhalten stattgefunden hat. Sie eignet sich großartig zur Erfolgskontrolle, ist aber zu langsam für tägliche Produktentscheidungen. Kombinieren Sie sie mit frühen Signalen.",
  },
  "ex-01": {
    frontQuestion: "Wie formulieren Sie vor dem Test eine überprüfbare Vorhersage?",
    frontScenario: "Sie glauben, dass ein einfacheres Onboarding mehr erste Projekte bringt. Doch noch ist das nur ein Bauchgefühl, keine Hypothese.",
    backInfo: "Hypothesis (Hypothese) — eine widerlegbare Vorhersage über Änderung, Zielgruppe und erwartetes Ergebnis. Eine gute Hypothese lässt sich per Test entkräften: Darin steht klar, was Sie ändern, für wen und welche Verschiebung Sie erwarten. Ohne sie lässt sich jedes Ergebnis als Sieg verkaufen.",
  },
  "ex-02": {
    frontQuestion: "Wie vergleichen Sie zwei Varianten einer Seite fair miteinander?",
    frontScenario: "Die Hälfte Ihrer Nutzer sieht die aktuelle Preisseite, die andere Hälfte ein neues Design. Sie wollen wissen, welche Variante wirklich besser ist.",
    backInfo: "A/B Test (A/B-Test) — ein randomisiertes Experiment, das Kontrolle und veränderte Variante anhand vorab festgelegter Ergebnisse vergleicht. Die Zufallszuteilung hilft, den ursächlichen Effekt von Störfaktoren zu trennen. Ändern Sie unterwegs nichts und warten Sie die nötige Stichprobengröße ab.",
  },
  "ex-03": {
    frontQuestion: "Von welcher Grundannahme geht die Statistik im Experiment aus?",
    frontScenario: "Bevor Sie den Relaunch zum Sieger erklären, gehen Sie davon aus, dass es keinen echten Unterschied zwischen den Varianten gibt. Und suchen nach Gegenbeweisen.",
    backInfo: "Null Hypothesis (Nullhypothese) — die statistische Annahme, meist dass kein Effekt und kein Unterschied besteht. Die Daten werden gegen sie geprüft. Wenn Sie sie nicht verwerfen können, heißt das noch nicht, dass die Varianten gleich sind — vielleicht waren die Daten einfach zu klein.",
  },
  "ex-04": {
    frontQuestion: "Was bedeutet der p-Wert im Experimentbericht wirklich?",
    frontScenario: "Das Dashboard zeigt 0,03 und Ihr Team feiert schon den Sieg. Sie wollen verstehen, was diese Zahl aussagt — und was nicht.",
    backInfo: "p-value (p-Wert) — die Wahrscheinlichkeit, unter Annahme des Nullmodells Daten zu sehen, die so extrem oder noch extremer sind wie die beobachteten. Das ist nicht die Wahrscheinlichkeit, dass Ihre Hypothese stimmt. Ein kleiner Wert stellt das Nullmodell nur infrage und sagt nichts über die Größe des Effekts.",
  },
  "ex-05": {
    frontQuestion: "Wie zeigen Sie neben dem Effekt auch die Unsicherheit der Schätzung?",
    frontScenario: "Die Conversion steigt um 1,2 Punkte, doch die Stichprobe ist klein. Sie wollen ehrlich zeigen, wie wackelig diese Zahl ist.",
    backInfo: "Confidence Interval (Konfidenzintervall) — ein Bereich plausibler Werte für den Effekt, gebaut mit einer Methode, die bei Wiederholung mit der genannten Rate den wahren Wert enthält. Er zeigt Unsicherheit deutlich besser als eine einzelne Zahl. Achten Sie auf die Breite und darauf, ob der Bereich die Null einschließt.",
  },
  "ex-06": {
    frontQuestion: "Mit welcher Wahrscheinlichkeit erkennt Ihr Test einen echten Effekt?",
    frontScenario: "Ihr Team befürchtet, dass das Experiment zu klein ist, um die Conversion-Steigerung zu bemerken, auf die es wirklich ankommt.",
    backInfo: "Statistical Power (statistische Power) — die Wahrscheinlichkeit, die Nullhypothese zu verwerfen, wenn ein bestimmter echter Effekt existiert. Sie hängt von Stichprobengröße, Streuung, Signifikanzniveau und Effektgröße ab. Planen Sie die Größe vorab, statt blind zu testen.",
  },
  "ex-07": {
    frontQuestion: "Wie bestimmen Sie vorab, wie viele Beobachtungen Ihr Experiment braucht?",
    frontScenario: "Sie wollen die Testdauer vor dem Start festlegen, statt zu stoppen, sobald die Kurve gut aussieht.",
    backInfo: "Sample Size Calculation (Stichprobenberechnung) — Sie schätzen den nötigen Umfang aus Basiswert, Zieleffekt, Streuung sowie Annahmen zu Alpha und Power. Machen Sie das möglichst immer, bevor Sie Ergebnisse lesen. So schützen Sie sich vor voreiligen Stopps.",
  },
  "ex-08": {
    frontQuestion: "Welcher kleinste Effekt ist für Ihre Entscheidung überhaupt relevant?",
    frontScenario: "Ein Plus von 0,05 Prozent wäre bei riesiger Reichweite messbar, bringt Ihrem Geschäft aber praktisch nichts.",
    backInfo: "MDE — Minimum Detectable Effect (minimal nachweisbarer Effekt) — der kleinste Effekt, den Ihr Experiment verlässlich finden soll. Leiten Sie ihn aus der Entscheidung ab, nicht aus statistischer Bequemlichkeit. Alles darunter ändert Ihr Handeln nicht.",
  },
  "ex-09": {
    frontQuestion: "Welcher Fehler liegt vor, wenn Sie einen Effekt sehen, den es gar nicht gibt?",
    frontScenario: "Ihr Team rollt eine Variante wegen reinem Rauschen aus und kann die Verbesserung später nie reproduzieren.",
    backInfo: "Type I Error — False Positive (Fehler 1. Art, falsch-positiv) — Sie verwerfen eine wahre Nullhypothese. Das Signifikanzniveau steuert die langfristige Falsch-positiv-Rate unter Modell und Testverfahren. Wählen Sie es bewusst und prüfen Sie Ergebnisse kritisch.",
  },
  "ex-10": {
    frontQuestion: "Welcher Fehler liegt vor, wenn Sie einen echten Effekt übersehen?",
    frontScenario: "Die Variante hilft wirklich, doch die Stichprobe war zu klein und der Test endet mit „kein Ergebnis“.",
    backInfo: "Type II Error — False Negative (Fehler 2. Art, falsch-negativ) — Sie verwerfen die Nullhypothese nicht, obwohl ein relevanter Effekt existiert. Mehr statistische Power senkt für die festgelegte Effektgröße die Wahrscheinlichkeit dieses Fehlers.",
  },
  "ex-11": {
    frontQuestion: "Mit welcher Kennzahl schützen Sie sich vor Schäden beim Optimieren?",
    frontScenario: "Ihre Checkout-Variante steigert die Käufe, treibt aber gleichzeitig die Rücksendungen massiv nach oben.",
    backInfo: "Guardrail Metric (Schutzkennzahl) — Sie überwachen damit Fehler, Ladezeit, Stornos oder Supportlast parallel zum Hauptziel. Sie setzt Leitplanken, statt das Erfolgsziel zu ersetzen. Definieren Sie vorab, welche Verschlechterung Sie niemals akzeptieren.",
  },
  "ex-12": {
    frontQuestion: "Welche einzelne Kennzahl entscheidet über Erfolg oder Scheitern Ihres Experiments?",
    frontScenario: "Ihr Onboarding-Test misst dutzende Werte, doch eine Größe muss festlegen, ob die Hypothese bestanden ist.",
    backInfo: "Primary Metric (primäre Kennzahl) — die eine Entscheidungskennzahl, die Sie vor der Auswertung festlegen. So verhindern Sie, dass Sie sich nachträglich das schönste Ergebnis herauspicken. Alles andere dient nur zur Einordnung.",
  },
  "ex-13": {
    frontQuestion: "Woran erkennen Sie, dass die Aufteilung im Experiment defekt ist?",
    frontScenario: "Ihr 50/50-Test bekommt plötzlich 63 Prozent Nutzer in Variante A und nur 37 Prozent in Variante B.",
    backInfo: "Sample Ratio Mismatch — SRM (Stichprobenverhältnis-Fehler) — eine statistisch auffällige Abweichung zwischen geplanter und tatsächlicher Aufteilung. Dahinter stecken oft Fehler in Zuteilung, Logging oder Teilnahmebedingungen. Klären Sie die Ursache, bevor Sie Ergebnissen vertrauen.",
  },
  "ex-14": {
    frontQuestion: "Warum wirkt ein neues Feature anfangs stärker, als es wirklich ist?",
    frontScenario: "Ihre neue Navigation wird in Woche eins neugierig erkundet, danach pendelt sich das Verhalten wieder ein.",
    backInfo: "Novelty Effect (Neuheitseffekt) — eine vorübergehende Verhaltensänderung, weil etwas neu ist, nicht weil es dauerhaft wertvoll ist. Beobachten Sie länger oder messen Sie erneut nach, wenn Sie den bleibenden Effekt wissen wollen.",
  },
  "ex-15": {
    frontQuestion: "Warum verzerrt die Auswahl der Teilnehmenden Ihr Ergebnis?",
    frontScenario: "Nur hochengagierte Kunden beantworten Ihre freiwillige Umfrage. Die Zufriedenheit wirkt dadurch viel größer, als sie in der Breite ist.",
    backInfo: "Selection Bias (Auswahlverzerrung) — eine systematische Verzerrung durch nicht zufällige Teilnahme oder Auswahl. Größere Stichproben heilen sie nicht automatisch. Achten Sie auf sauberes Sampling und interpretieren Sie vorsichtig.",
  },
  "ex-16": {
    frontQuestion: "Wie dürfen Sie wiederholt auf Experimentdaten schauen, ohne Fehler zu riskieren?",
    frontScenario: "Ihr Team will Tests früh stoppen, sobald die Beweislage reicht, ohne durch tägliches Draufschauen falsche Sieger zu produzieren.",
    backInfo: "Sequential Testing (sequenzielles Testen) — statistische Verfahren mit Regeln für wiederholte Zwischenauswertungen und Stopps. Wenden Sie keinen starren Test für festen Horizont täglich an und stoppen Sie nicht bei jedem Ausschlag. Halten Sie sich an die vorher festgelegte Regel.",
  },
  "uxm-01": {
    frontQuestion: "Welche Kennzahl zeigt, wie viele Teilnehmende eine Aufgabe schaffen?",
    frontScenario: "Im Usability-Test ändern acht von zehn Personen ohne Hilfe ihre Rechnungsadresse. Sie brauchen dafür eine saubere Quote.",
    backInfo: "Task Success Rate (Aufgabenerfolgsquote) — der Anteil der Versuche, die Ihre vorab definierten Erfolgskriterien erfüllen. Legen Sie vorher fest, was als voller, teilweiser oder gescheiterter Erfolg zählt. Sonst vergleichen Sie später Äpfel mit Birnen.",
  },
  "uxm-02": {
    frontQuestion: "Welche Kennzahl misst, wie lange Nutzer für eine Aufgabe brauchen?",
    frontScenario: "Beide Checkout-Entwürfe funktionieren, doch einer kostet die Nutzer deutlich mehr Zeit.",
    backInfo: "Time on Task (Aufgabendauer) — die Zeit bis zum Abschluss einer definierten Aufgabe. Deuten Sie sie immer zusammen mit Erfolg und Schwierigkeit: Schneller ist nicht automatisch besser, wenn Sorgfalt gefragt ist.",
  },
  "uxm-03": {
    frontQuestion: "Welche Kennzahl zeigt, wie oft Nutzer bei einer Aufgabe Fehler machen?",
    frontScenario: "Ihre Teilnehmenden tippen das Datum immer wieder im falschen Format ein und laufen in Validierungsfehler.",
    backInfo: "Error Rate (Fehlerrate) — Häufigkeit oder Anteil definierter Nutzerfehler während einer Aufgabe. Klassifizieren Sie Fehler einheitlich und trennen Sie behebbare Patzer von echtem Scheitern, wo das hilft.",
  },
  "uxm-04": {
    frontQuestion: "Welche Kennzahl beschreibt, wie mühsam der Weg zum Ziel ist?",
    frontScenario: "Zwei Abläufe haben ähnliche Abschlussquoten, doch einer verlangt deutlich mehr Schritte und Klicks.",
    backInfo: "Interaction Cost (Interaktionsaufwand) — der Aufwand für ein Ziel, etwa über Schritte, Entscheidungen, Aufmerksamkeit und Eingaben. Weniger Klicks allein ist nicht immer besser. Entscheidend ist, ob der Weg klar und angemessen bleibt.",
  },
  "uxm-05": {
    frontQuestion: "Mit welchem kurzen Fragebogen messen Sie die gefühlte Usability als Benchmark?",
    frontScenario: "Sie wollen die wahrgenommene Bedienbarkeit vor und nach dem Redesign mit einem leichten Standard vergleichen.",
    backInfo: "SUS — System Usability Scale (System-Usability-Skala) — ein standardisierter Fragebogen mit zehn Aussagen, umgerechnet auf 0 bis 100 Punkte. Das ist kein Prozentwert. Deuten Sie ihn am besten gegen passende Vergleichsdaten.",
  },
  "uxm-06": {
    frontQuestion: "Mit welcher einen Frage messen Sie direkt nach einer Aufgabe die gefühlte Schwierigkeit?",
    frontScenario: "Nach jeder Usability-Aufgabe brauchen Ihre Forscher eine schnelle Einschätzung, wie einfach sich die Aufgabe angefühlt hat.",
    backInfo: "SEQ — Single Ease Question (Einzelfrage zur Einfachheit) — eine einzelne Bewertung der Aufgabenschwierigkeit, meist auf sieben Stufen. Sie ergänzt Verhaltensmaße wie Erfolg und Zeit sehr gut. Stellen Sie sie immer unmittelbar nach der Aufgabe.",
  },
  "uxm-07": {
    frontQuestion: "Mit welchem Zwei-Fragen-Bogen messen Sie Nützlichkeit und Bedienbarkeit?",
    frontScenario: "In Ihrer laufenden Umfrage ist kaum Platz, doch Sie brauchen trotzdem ein kurzes Standardmaß für Usability.",
    backInfo: "UMUX-Lite — ein kompakter Standardfragebogen mit zwei Aussagen zu Nützlichkeit und Bedienbarkeit. Er eignet sich besonders, wenn der Platz im Fragebogen knapp ist. Für tiefe Diagnosen reicht er allein nicht.",
  },
  "uxm-08": {
    frontQuestion: "Mit welcher Kennzahl fragen Sie direkt nach der Zufriedenheit?",
    frontScenario: "Nach einem Supportgespräch bewerten Nutzer, wie zufrieden sie mit der Lösung waren.",
    backInfo: "CSAT — Customer Satisfaction Score (Kundenzufriedenheitswert) — eine direkte Zufriedenheitsbewertung für ein klar benanntes Erlebnis. Halten Sie Skala und Berechnung fest, denn Firmen fassen CSAT sehr unterschiedlich zusammen.",
  },
  "uxm-09": {
    frontQuestion: "Welche Kennzahl misst Loyalität über die Weiterempfehlungsfrage?",
    frontScenario: "Ihre Geschäftsführung wünscht sich ein beziehungsweites Loyalitätssignal auf Basis der klassischen Empfehlungsfrage.",
    backInfo: "NPS — Net Promoter Score (Netto-Empfehlungswert) — Anteil der Promotoren minus Anteil der Detraktoren, also ein Wert von −100 bis +100. Er ersetzt weder Verhaltenskennzahlen noch erklärende Forschung. Nutzen Sie ihn als Stimmungsbild, nicht als Diagnose.",
  },
  "uxm-10": {
    frontQuestion: "Mit welcher Kennzahl messen Sie den gefühlten Aufwand aus Kundensicht?",
    frontScenario: "Eine Kundin ändert erfolgreich ihre Kontodaten, empfindet den Weg dorthin aber als zermürbend.",
    backInfo: "CES — Customer Effort Score (Kundenaufwandswert) — die wahrgenommene Mühe für eine Aufgabe oder einen Servicekontakt. Wortlaut und Skala variieren stark, also dokumentieren Sie Ihre Variante, wenn Sie Werte vergleichen wollen.",
  },
  "uxm-11": {
    frontQuestion: "Woran sehen Sie, ob Nutzer beim ersten Klick richtig navigieren?",
    frontScenario: "Sie wollen früh wissen, ob Menschen verstehen, wo „Team verwalten“ in Ihrer Navigation liegen sollte.",
    backInfo: "First-Click Success (Erstklick-Erfolg) — der Anteil, dessen erster Klick auf einem Pfad liegt, der zum richtigen Ziel führen kann. Der erste Klick verrät viel über Verständlichkeit und Wegweiser-Qualität Ihrer Navigation.",
  },
  "uxm-12": {
    frontQuestion: "Wie bewerten Sie Erfolg und Mühe einer Aufgabe gemeinsam?",
    frontScenario: "Beide Entwürfe haben dieselbe Erfolgsquote, doch einer sorgt für deutlich mehr Zögern und Wiederholungen.",
    backInfo: "Task Efficiency (Aufgabeneffizienz) — Sie setzen den Erfolg ins Verhältnis zu Zeit, Schritten oder Aufwand. Legen Sie die Berechnung pro Studie fest. Deuten Sie Effizienz immer zusammen mit Effektivität und Zufriedenheit.",
  },
  "uxm-13": {
    frontQuestion: "Welche Kennzahl misst, wie schnell die Seite auf Ihre Eingaben reagiert?",
    frontScenario: "Ihre Web-App lädt flott, fühlt sich nach Klicks und Tastatureingaben aber träge an.",
    backInfo: "INP — Interaction to Next Paint (Interaktionsreaktion) — ein Core Web Vital für Reaktionsgeschwindigkeit, gemessen als Latenz von Interaktionen über die Lebensdauer der Seite. 2026 ist INP das aktuelle Maß dafür; FID ist nicht mehr das gültige Core Web Vital.",
  },
  "uxm-14": {
    frontQuestion: "Welche drei Kennzahlen bilden Googles aktuelle Core Web Vitals?",
    frontScenario: "Design und Entwicklung prüfen die echte Web-Performance und brauchen das gültige Trio, keine veraltete Checkliste.",
    backInfo: "Core Web Vitals — LCP misst das Laden des größten Inhaltselements, INP (Interaktionsreaktion) die Reaktionsgeschwindigkeit und CLS die visuelle Stabilität. Gängige Zielwerte für ein gutes Erlebnis sind LCP ≤ 2,5 s, INP ≤ 200 ms und CLS ≤ 0,1 im 75. Perzentil.",
  },
  "ur-01": {
    frontQuestion: "Mit welcher Methode beobachten Sie echte Nutzer bei realistischen Aufgaben?",
    frontScenario: "Sie müssen sehen, wo Menschen beim Buchen eines Termins im Prototyp scheitern.",
    backInfo: "Usability Testing (Usability-Test) — Sie lassen Teilnehmende repräsentative Aufgaben lösen und beobachten Verhalten und Ergebnisse. Das geht moderiert oder unmoderiert. Formulieren Sie klare Aufgabenziele, statt die Lösung vorzugeben.",
  },
  "ur-02": {
    frontQuestion: "In welchem Testformat begleitet Sie ein Moderator live durch die Aufgaben?",
    frontScenario: "Ein komplexer Firmen-Workflow stockt immer wieder, und Sie müssen nachfragen, wenn Teilnehmende zögern oder tricksen.",
    backInfo: "Moderated Usability Testing (moderierter Usability-Test) — eine moderierende Person begleitet die Sitzung live. Das ermöglicht Nachfragen und komplexe Aufgaben, bringt aber Moderationseffekte mit sich und kostet mehr Zeit pro Person.",
  },
  "ur-03": {
    frontQuestion: "In welchem Testformat arbeiten Teilnehmende ganz ohne Moderator?",
    frontScenario: "Sie brauchen richtungsweisende Hinweise von vielen verteilten Teilnehmenden in mehreren Ländern.",
    backInfo: "Unmoderated Usability Testing (unmoderierter Usability-Test) — Teilnehmende lösen vorab definierte Aufgaben ohne live Begleitung. Das skaliert leichter, doch spontanes Nachhaken ist kaum möglich. Formulieren Sie Aufgaben besonders eindeutig.",
  },
  "ur-04": {
    frontQuestion: "Mit welcher Methode verstehen Sie Erfahrungen und Bedürfnisse im Gespräch?",
    frontScenario: "Vor dem Entwurf wollen Sie lernen, wie Buchhalter heute Rechnungen abgleichen und wo es wirklich schmerzt.",
    backInfo: "User Interview (Nutzerinterview) — ein qualitatives Gespräch über Erleben, Motive, Bedürfnisse und Kontext. Fragen Sie nach konkretem Verhalten aus der Vergangenheit mit Beispielen, statt sich auf Wunschvorstellungen zu verlassen.",
  },
  "ur-05": {
    frontQuestion: "Mit welcher Methode erforschen Sie echte Arbeit direkt vor Ort?",
    frontScenario: "Sie müssen verstehen, wie Lagerkräfte Scanner in einer lauten Halle wirklich nutzen, während sie unterwegs sind.",
    backInfo: "Contextual Inquiry (kontextuelle Befragung) — Feldforschung aus Beobachtung plus Nachfragen im echten Kontext. Sie zeigt Umgebungsgrenzen, stille Tricks und Gewohnheiten, die reine Interviews nie ans Licht bringen.",
  },
  "ur-06": {
    frontQuestion: "Mit welcher Methode halten Teilnehmende ihr Erleben über Tage oder Wochen fest?",
    frontScenario: "Ihre Schlaf-App muss wechselnde Routinen verstehen, die sich in einem einstündigen Interview nie zeigen.",
    backInfo: "Diary Study (Tagebuchstudie) — eine längsschnittliche Selbstauskunft, bei der Teilnehmende ihr Erleben über Zeit dokumentieren. Gut für seltenes, emotionales oder kontextabhängiges Verhalten, doch Aufwand und Berichtsqualität müssen Sie aktiv steuern.",
  },
  "ur-07": {
    frontQuestion: "Welcher Forschungsansatz beobachtet Verhalten in der echten Umgebung?",
    frontScenario: "Auf der Baustelle nutzen Menschen Ihr Produkt ganz anders, als sie es im Bürointerview beschreiben.",
    backInfo: "Field Study (Feldstudie) — Forschung im realen Umfeld der Teilnehmenden, um Verhalten, Umgebung und Grenzen zu verstehen. Sie kann Beobachtung, Interviews und kontextuelle Befragung verbinden.",
  },
  "ur-08": {
    frontQuestion: "Mit welcher Methode befragen Sie viele Menschen standardisiert?",
    frontScenario: "Sie wollen abschätzen, wie verbreitet mehrere gemeldete Probleme in Ihrer großen Kundschaft wirklich sind.",
    backInfo: "Survey (Umfrage) — ein strukturierter Fragebogen für Breite und Quantifizierung von Selbstauskünften. Formulieren Sie neutral, wählen Sie passende Skalen und achten Sie auf Stichprobe und Deutung.",
  },
  "ur-09": {
    frontQuestion: "Mit welcher Methode lassen Sie Nutzer Inhalte selbst gruppieren?",
    frontScenario: "Ihre Doku hat hunderte Themen und Sie suchen Belege dafür, wie Nutzer sie gedanklich ordnen.",
    backInfo: "Card Sorting (Kartensortierung) — Teilnehmende ordnen Inhalte in Kategorien und zeigen so ihre Denkmodelle und Benennungen. Das hilft Ihrer Informationsarchitektur, ersetzt aber keinen Leistungstest der finalen Navigation.",
  },
  "ur-10": {
    frontQuestion: "Bei welcher Kartensortierung dürfen Teilnehmende eigene Kategorien erfinden?",
    frontScenario: "Sie vertrauen Ihrer aktuellen Taxonomie kaum und wollen die natürlichen Gruppierungen Ihrer Nutzer entdecken.",
    backInfo: "Open Card Sort (offene Kartensortierung) — Teilnehmende gruppieren Karten und vergeben eigene Oberbegriffe. Ideal, um Denkmodelle zu verstehen, nicht um eine fertige Struktur zu prüfen.",
  },
  "ur-11": {
    frontQuestion: "Bei welcher Kartensortierung sortieren Nutzer in vorgegebene Kategorien?",
    frontScenario: "Sie haben neue Navigationsbegriffe entworfen und wollen sehen, wo Nutzer jeden Inhalt erwarten.",
    backInfo: "Closed Card Sort (geschlossene Kartensortierung) — Teilnehmende ordnen Karten in fest vorgegebene Kategorien. Gut, um ein bestehendes Ordnungssystem zu prüfen, doch mögliche Strukturen bleiben dadurch begrenzt.",
  },
  "ur-12": {
    frontQuestion: "Mit welcher Methode testen Sie die reine Struktur ganz ohne Design?",
    frontScenario: "Sie wollen die neue Website-Struktur prüfen, bevor Sie auch nur einen Screen bauen.",
    backInfo: "Tree Testing (Strukturtest) — Teilnehmende suchen Inhalte in einer reduzierten Baumstruktur. Das misst Auffindbarkeit und Benennung Ihrer Informationsarchitektur, unabhängig von der visuellen Gestaltung.",
  },
  "ur-13": {
    frontQuestion: "Mit welcher Studie prüfen Sie eine Produktidee vor dem eigentlichen Design?",
    frontScenario: "Sie haben drei Serviceideen und wollen wissen, welche Probleme und Versprechen ankommen, bevor Sie in UI investieren.",
    backInfo: "Concept Testing (Konzepttest) — Sie prüfen Verständnis, Relevanz, Anziehungskraft und Bedenken zu einem frühen Konzept. Das testet die Idee, beweist aber keinen künftigen Markterfolg.",
  },
  "ur-14": {
    frontQuestion: "Mit welcher Studie testen Sie Abläufe am Prototyp vor der Entwicklung?",
    frontScenario: "Die Technik hat noch nichts gebaut, doch Sie müssen sehen, ob Nutzer den geplanten Ablauf verstehen.",
    backInfo: "Prototype Testing (Prototypentest) — Sie evaluieren mit einem Prototyp in passender Detailtiefe, um gezielte Fragen zu beantworten. Verhalten und Grenzen des Prototyps müssen zur Forschungsfrage passen, sonst führen Ergebnisse in die Irre.",
  },
};
