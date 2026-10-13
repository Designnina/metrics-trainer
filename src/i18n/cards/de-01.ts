import type { CardOverride } from '../cardOverrides';

export const de01: Record<string, CardOverride> = {
  "pm-01": {
    frontQuestion: "Welche Kennzahl zeigt, wie viele neue Nutzer den ersten echten Wertmoment erreichen?",
    frontScenario: "Eine App für Projektmanagement bekommt Tausende Anmeldungen. Das Team will wissen, wie viele Neulinge wirklich ihr erstes Projekt anlegen und teilen.",
    backInfo: "Activation Rate (Aktivierungsrate) — der Anteil neuer Nutzer, die das festgelegte Aktivierungsereignis schaffen. Legen Sie fest, was als Aktivierung zählt, und messen Sie echten Nutzen, nicht nur die Registrierung.",
  },
  "pm-02": {
    frontQuestion: "Welche Kennzahl zeigt, wie viele Nutzer einer Gruppe nach einer bestimmten Zeit noch dabei sind?",
    frontScenario: "Eine Fitness-App will wissen, wie viele Menschen, die diesen Monat gestartet sind, nach 30 Tagen noch trainieren.",
    backInfo: "Retention Rate (Bindungsrate) — der Anteil einer Kohorte, der den Dienst nach einer Zeitspanne weiter nutzt. Legen Sie immer fest, welches Zeitfenster gilt und was als „zurückgekehrt“ zählt.",
  },
  "pm-03": {
    frontQuestion: "Welche Kennzahl beschreibt, wie viele Kunden oder Nutzer in einem Zeitraum abwandern?",
    frontScenario: "Ein SaaS-Produkt gewinnt stetig neue Kunden, doch die Basis wächst kaum, weil jeden Monat viele Konten kündigen.",
    backInfo: "Churn Rate (Abwanderungsrate) — der Verlust an Nutzern, Kunden oder Umsatz pro Zeitraum. Sagen Sie klar dazu, ob Sie Kunden oder Umsatz meinen, denn beide Werte führen zu anderen Schlüssen.",
  },
  "pm-04": {
    frontQuestion: "Welche Kennzahl zeigt, wie viele einzelne Nutzer an einem typischen Tag aktiv sind?",
    frontScenario: "Ein Messenger-Dienst will täglich sehen, wie viele verschiedene Menschen den Dienst wirklich nutzen.",
    backInfo: "DAU — Daily Active Users (täglich aktive Nutzer) — die Zahl einzelner Nutzer mit der festgelegten aktiven Handlung pro Tag. Definieren Sie „aktiv“ als sinnvolles Verhalten, nicht als beliebigen Seitenaufruf.",
  },
  "pm-05": {
    frontQuestion: "Welche Kennzahl zeigt, wie viele einzelne Nutzer innerhalb einer Woche aktiv sind?",
    frontScenario: "Ein Tool für Zusammenarbeit wird mehrmals pro Woche genutzt, aber selten täglich. Da wirken Tageswerte zu niedrig.",
    backInfo: "WAU — Weekly Active Users (wöchentlich aktive Nutzer) — die Zahl einzelner Nutzer mit der festgelegten aktiven Handlung pro Woche. Passt gut zu Produkten mit wöchentlichem Rhythmus.",
  },
  "pm-06": {
    frontQuestion: "Welche Kennzahl zeigt, wie viele einzelne Nutzer innerhalb eines Monats aktiv waren?",
    frontScenario: "Ein Steuer-Tool öffnet kaum jemand täglich, trotzdem stiftet es großen Nutzen. Das Team braucht ein breiteres Maß für aktive Reichweite.",
    backInfo: "MAU — Monthly Active Users (monatlich aktive Nutzer) — die Zahl einzelner Nutzer mit der festgelegten aktiven Handlung pro Monat. Nützlich für die Reichweite, sagt aber wenig über die Tiefe der Nutzung aus.",
  },
  "pm-07": {
    frontQuestion: "Welcher Quotient zeigt, wie oft Monatsnutzer an einem typischen Tag zurückkehren?",
    frontScenario: "Zwei Apps haben je 100 000 Monatsnutzer, doch die eine wird fast täglich geöffnet, die andere nur einmal im Monat.",
    backInfo: "DAU/MAU Stickiness (Bindungsquotient) — der Anteil der Monatsnutzer, der an einem typischen Tag aktiv ist. Vergleichen Sie nur Produkte mit ähnlichem Nutzungsrhythmus miteinander.",
  },
  "pm-08": {
    frontQuestion: "Welche Kennzahl zeigt, wie viele der relevanten Nutzer eine bestimmte Funktion ausprobiert haben?",
    frontScenario: "Ein Team führt gemeinsame Kommentare ein und will wissen, ob aktive Nutzer sie wirklich entdecken und nutzen.",
    backInfo: "Feature Adoption Rate (Funktionsakzeptanz) — der Anteil der geeigneten Nutzer, die eine Funktion in einem Zeitraum nutzen. Legen Sie den Nenner klar fest: alle Nutzer, nur aktive oder nur berechtigte.",
  },
  "pm-09": {
    frontQuestion: "Was beschreibt, wie viele verschiedene Nutzer eine Funktion nutzen — und nicht, wie oft?",
    frontScenario: "Ein Dashboard öffnen 70 % der Kunden, doch die meisten schauen nur einmal hinein. Das Team will Reichweite von Häufigkeit trennen.",
    backInfo: "Breadth of Adoption (Nutzungsbreite) — wie weit sich eine Funktion in der Zielgruppe verbreitet hat. Große Breite heißt noch keine starke Bindung, betrachten Sie sie daher immer zusammen mit Tiefe und Häufigkeit.",
  },
  "pm-10": {
    frontQuestion: "Was beschreibt, wie intensiv Menschen eine Funktion nutzen, nachdem sie sie angenommen haben?",
    frontScenario: "Einen Profi-Editor nutzt nur eine kleine Gruppe, doch diese erstellt jede Woche Dutzende Inhalte.",
    backInfo: "Depth of Engagement (Nutzungstiefe) — Umfang und Gehalt der Nutzung bei aktiven Nutzern, etwa Aktionen, erstellte Objekte oder wichtige abgeschlossene Schritte. Beziehen Sie die Tiefe auf echten Nutzen, nicht auf reine Klicks.",
  },
  "pm-11": {
    frontQuestion: "Welche Kennzahl zeigt, wie oft ein aktiver Nutzer eine sinnvolle Aktion ausführt?",
    frontScenario: "Eine Kalenderfunktion ist weit verbreitet, doch das Team muss wissen: Nutzen Menschen sie einmal oder immer wieder?",
    backInfo: "Usage Frequency (Nutzungshäufigkeit) — wie oft ein Nutzer Produkt oder Funktion pro Zeitraum verwendet. Betrachten Sie sie zusammen mit der Akzeptanz, denn „einmal probiert“ und „gewohnt genutzt“ sind verschiedene Zustände.",
  },
  "pm-12": {
    frontQuestion: "Welche Kennzahl zeigt, wie lange ein neuer Nutzer bis zum Aktivierungsmoment braucht?",
    frontScenario: "Menschen finden den Wert eines Workflow-Tools erst nach und nach, manche brauchen drei Sitzungen bis zur ersten nützlichen Automatisierung.",
    backInfo: "Time to Activate (Zeit bis zur Aktivierung) — die Dauer von Anmeldung oder Start bis zum festgelegten Aktivierungsereignis. Kürzer ist meist besser, aber nur, wenn das Ereignis echten Wert abbildet.",
  },
  "pm-13": {
    frontQuestion: "Was beschreibt, wie schnell Kunden echten Nutzen spüren — und nicht nur das Onboarding abschließen?",
    frontScenario: "Ein Firmenkunde schließt die Einrichtung am ersten Tag ab, sieht aber erst zwei Wochen später das erste gute Geschäftsergebnis.",
    backInfo: "Time to Value — TTV (Zeit bis zum Nutzen) — die Dauer, bis Nutzer oder Kunden spürbaren Produktwert erleben. Sie kann über Onboarding und Aktivierung hinausgehen und ist gerade bei komplexen Produkten besonders wichtig.",
  },
  "pm-14": {
    frontQuestion: "Welche Kennzahl zeigt, wie viele Nutzer eine Zielaktion wie Kauf oder Upgrade abschließen?",
    frontScenario: "Ein Online-Shop will wissen, welcher Anteil der Besucher an der Kasse wirklich eine Bestellung aufgibt.",
    backInfo: "Conversion Rate (Umwandlungsrate) — der Anteil einer geeigneten Gruppe, der eine festgelegte Zielaktion schafft. Benennen Sie immer die Trichterstufe und den Nenner.",
  },
  "pm-15": {
    frontQuestion: "Welche Kennzahl zeigt, wie viele Nutzer eine begonnene Aufgabe oder Strecke zu Ende führen?",
    frontScenario: "Nutzer starten die Identitätsprüfung, doch das Team will wissen, wie viele auf dem letzten Bestätigungsbildschirm ankommen.",
    backInfo: "Completion Rate (Abschlussquote) — der Anteil der Starter, die den festgelegten Endpunkt erreichen. Nützlich für Onboarding, Formulare, Einrichtung und mehrstufige Aufgaben.",
  },
  "pm-16": {
    frontQuestion: "Welche Kennzahl zeigt, wie viele Menschen eine Strecke vor dem nächsten Schritt abbrechen?",
    frontScenario: "An der Kasse gehen zwischen Lieferdaten und Zahlung besonders viele Nutzer verloren.",
    backInfo: "Drop-off Rate (Abbruchquote) — der Anteil, der von einem Schritt nicht weiterkommt. Untersuchen Sie sie Schritt für Schritt im Trichter, um Reibung zu finden, statt sie als eine einzige Produktzahl zu sehen.",
  },
  "pm-17": {
    frontQuestion: "Welche Kennzahl misst, wie viele Nutzer nach dem ersten Test einer Funktion wiederkommen?",
    frontScenario: "Das Team weiß, dass viele KI-Zusammenfassungen einmal probieren, und will wissen, ob sie die Funktion erneut nutzen.",
    backInfo: "Feature Retention (Funktionsbindung) — die fortgesetzte Nutzung einer bestimmten Funktion nach dem ersten Gebrauch. So trennen Sie Neugier-Tests von dauerhaftem Funktionswert.",
  },
  "pm-18": {
    frontQuestion: "Welche Analyse gruppiert Nutzer nach gemeinsamem Startereignis, um ihr Verhalten über Zeit zu vergleichen?",
    frontScenario: "Das Team will die Bindung der Januar-Anmeldungen mit den Februar-Anmeldungen vergleichen, nachdem das Onboarding überarbeitet wurde.",
    backInfo: "Cohort Analysis (Kohortenanalyse) — Nutzer mit gemeinsamem Merkmal oder Startereignis werden gruppiert und danach verglichen. So vermischen Sie keine Nutzer mit ganz anderem Start oder Erlebnis.",
  },
  "pm-19": {
    frontQuestion: "Welche Kurve zeigt, wie sich der zurückkehrende Anteil einer Kohorte mit der Zeit verändert?",
    frontScenario: "Eine Social-App verliert anfangs viele Nutzer steil, doch danach bleibt eine stabile Gruppe über Monate aktiv.",
    backInfo: "Retention Curve (Bindungskurve) — der Zeitverlauf der zurückgekehrten Nutzer einer Kohorte. Die Form zeigt frühen Verlust und ob sich die Bindung stabilisiert, das Intervall hängt vom natürlichen Nutzungsrhythmus ab.",
  },
  "pm-20": {
    frontQuestion: "Welche Kennzahl erfasst Kunden, die inaktiv waren und dann wieder aktiv wurden?",
    frontScenario: "Eine Streaming-App startet eine Rückholkampagne und will messen, wie viele ruhende Nutzer zurückkehren.",
    backInfo: "Reactivation Rate (Reaktivierungsrate) — Anteil oder Zahl zuvor inaktiver Nutzer, die wieder sinnvoll aktiv werden. Legen Sie vorher fest, ab wann jemand als inaktiv gilt und was als Reaktivierung zählt.",
  },
  "pm-21": {
    frontQuestion: "Welches Lebenszyklus-Konzept trennt aktive Nutzer in neue, bestehende und zurückgekehrte?",
    frontScenario: "Die Monatsnutzerzahl ist stabil, doch das Team muss wissen: Kommt das von treuen Stammnutzern oder vom ständigen Ersetzen verlorener Nutzer?",
    backInfo: "User Lifecycle Segmentation (Nutzerlebenszyklus-Segmentierung) — teilt Aktivität in Zustände wie neu, aktuell, ruhend und reaktiviert. So erklärt sich, woraus sich eine einzige Nutzerzahl zusammensetzt.",
  },
  "pm-22": {
    frontQuestion: "Welche Kennzahl steht für das wiederkehrende Verhalten, das den Kernwert Ihres Produkts am besten fasst?",
    frontScenario: "Ein Marktplatz könnte Seitenaufrufe, Inserate oder erfolgreiche Käufe messen, braucht aber eine wertbezogene Leitgröße für Produktentscheidungen.",
    backInfo: "North Star Metric (Leitkennzahl) — eine dauerhafte Größe für gelieferten Kundennutzen, verknüpft mit tragfähigem Geschäftserfolg. Stützen Sie sie durch Eingangs- und Leitplankenkennzahlen, statt sie als einzige Zahl zu sehen.",
  },
  "gr-01": {
    frontQuestion: "Welche Kennzahl zeigt die mittleren Kosten für einen neu gewonnenen zahlenden Kunden?",
    frontScenario: "Ein Start-up gibt Geld für Werbung, Inhalte und Vertrieb aus und will wissen, was jeder neue Kunde unterm Strich kostet.",
    backInfo: "CAC — Customer Acquisition Cost (Kundengewinnungskosten) — mittlere Kosten pro Neukunde. Legen Sie fest, welche Kosten und welcher Zeitraum einfließen.",
  },
  "gr-02": {
    frontQuestion: "Welche Kennzahl schätzt den wirtschaftlichen Wert eines Kunden über die ganze Beziehung?",
    frontScenario: "Ein Abo-Geschäft darf mehr für Kunden ausgeben, die typischerweise mehrere Jahre bleiben und zahlen.",
    backInfo: "Customer Lifetime Value — LTV/CLV (Kundenwert) — der geschätzte Wert eines Kunden über die Beziehungsdauer, oft auf Basis von Umsatz oder Rohertrag. Die Rechnung hängt vom Geschäftsmodell ab, halten Sie Ihre Methode klar fest.",
  },
  "gr-03": {
    frontQuestion: "Welcher Quotient zeigt, ob die Kosten der Kundengewinnung tragfähig sind?",
    frontScenario: "Marketing kann die Anmeldungen verdoppeln, doch die Leitung muss wissen, ob der gewonnene Kundenwert die Kosten rechtfertigt.",
    backInfo: "LTV:CAC Ratio (Kundenwert-Kosten-Verhältnis) — stellt den geschätzten Kundenwert den Gewinnungskosten gegenüber. Sehen Sie es als Richtungssignal für die Stückökonomie, nicht als feste Norm, denn Phase, Marge und Rückflussdauer zählen mit.",
  },
  "gr-04": {
    frontQuestion: "Welche Kennzahl zeigt, wie lange es dauert, bis die Gewinnungskosten wieder eingespielt sind?",
    frontScenario: "Ein B2B-SaaS-Anbieter investiert viel in Vertrieb und will wissen, nach wie vielen Monaten sich ein neues Konto rechnet.",
    backInfo: "CAC Payback Period (Amortisationsdauer der Gewinnungskosten) — die Zeit, bis der laufende Rohertrag eines Kunden die Gewinnungskosten deckt. Kürzer senkt meist den Finanzierungsdruck, doch was passt, hängt vom Geschäft ab.",
  },
  "gr-05": {
    frontQuestion: "Welche Kennzahl zeigt planbare Abo-Umsätze, normiert auf einen Monat?",
    frontScenario: "Ein SaaS-Geschäft hat Kunden mit verschiedenen Abrechnungstagen und braucht eine einheitliche Sicht auf laufende Umsätze.",
    backInfo: "MRR — Monthly Recurring Revenue (monatlich wiederkehrender Umsatz) — wiederkehrender Abo-Umsatz, auf einen Monat normiert. Lassen Sie einmalige Leistungen und sonstige Einmalerlöse außen vor.",
  },
  "gr-06": {
    frontQuestion: "Welche Kennzahl drückt wiederkehrende Abo-Umsätze auf Jahresbasis aus?",
    frontScenario: "Die Leitung wünscht eine einfache Hochrechnung der laufenden Abos aufs Jahr.",
    backInfo: "ARR — Annual Recurring Revenue (jährlich wiederkehrender Umsatz) — hochgerechneter wiederkehrender Umsatz, oft aus Verträgen oder dem Monatswert abgeleitet. Das ist nicht dasselbe wie der gesamte Jahresumsatz, sobald Einmalerlöse bestehen.",
  },
  "gr-07": {
    frontQuestion: "Welche Kennzahl zeigt den mittleren Umsatz pro Nutzer in einem Zeitraum?",
    frontScenario: "Eine Verbraucher-App mit Abo will die Erlöse je Land vergleichen, weil sich die Tarifmischung unterscheidet.",
    backInfo: "ARPU — Average Revenue per User (Durchschnittsumsatz je Nutzer) — mittlerer Umsatz pro Nutzer im Zeitraum. Sagen Sie dazu, ob Sie aktive, zahlende oder alle Nutzer meinen.",
  },
  "gr-08": {
    frontQuestion: "Welche Kennzahl passt besser als der Nutzerwert, wenn Umsätze auf Firmen- oder Kontoebene abgerechnet werden?",
    frontScenario: "Eine Firmenplattform hat Tausende Plätze, aber Verträge mit 200 Kundenorganisationen.",
    backInfo: "ARPA — Average Revenue per Account (Durchschnittsumsatz je Konto) — mittlerer Umsatz pro Kundenkonto im Zeitraum. Im B2B-Verkauf auf Konto- oder Arbeitsbereichsebene oft aussagekräftiger als der Wert je Nutzer.",
  },
  "gr-09": {
    frontQuestion: "Welche Kennzahl zeigt den mittleren Wert einer Bestellung im Online-Handel?",
    frontScenario: "Die Bestellzahl eines Händlers ist stabil, doch das Team will wissen, ob Kunden pro Kauf mehr ausgeben.",
    backInfo: "AOV — Average Order Value (mittlerer Bestellwert) — mittlerer Umsatz pro abgeschlossener Bestellung. Nützlich für Sortiment, Bündel und die Kassenstrecke.",
  },
  "gr-10": {
    frontQuestion: "Welche Kennzahl zeigt, wie viel laufender Umsatz nach Kündigungen, Abstufungen und Erweiterungen bleibt?",
    frontScenario: "Ein SaaS-Anbieter verliert einige Konten, doch die übrigen Kunden stocken so stark auf, dass der Bestandsertrag trotzdem wächst.",
    backInfo: "NRR — Net Revenue Retention (Netto-Umsatzbindung) — misst den gehaltenen laufenden Umsatz einer Bestandskohorte samt Erweiterung, Schrumpfung und Abwanderung.",
  },
  "gr-11": {
    frontQuestion: "Welche Bindungskennzahl blendet Upgrades aus, damit reine Umsatzverluste sichtbar werden?",
    frontScenario: "Starke Erweiterungserlöse verdecken ein ernstes Problem mit Abstufungen und Kündigungen.",
    backInfo: "GRR — Gross Revenue Retention (Brutto-Umsatzbindung) — misst den gehaltenen laufenden Umsatz vor Erweiterung. Sie zeigt Abwanderung und Schrumpfung, aber kein Upselling, und macht so den eigentlichen Verlust sichtbar.",
  },
  "gr-12": {
    frontQuestion: "Welche Kennzahl zeigt, wie viel Zusatzumsatz durch Upgrades oder Extras bei Bestandskunden entsteht?",
    frontScenario: "Ein SaaS-Produkt führt kostenpflichtige Extras ein und will dieses Wachstum von der Neugewinnung trennen.",
    backInfo: "Expansion Revenue (Erweiterungsumsatz) — Zusatzumsatz von Bestandskunden durch Upgrades, weitere Plätze, Extras oder Mehrnutzung. Er ist ein wichtiger Treiber der Netto-Umsatzbindung.",
  },
  "gr-13": {
    frontQuestion: "Welche Kennzahl zeigt, welcher Umsatzanteil nach direkten Lieferkosten übrig bleibt?",
    frontScenario: "Zwei Produkte haben gleichen Umsatz, doch eines verursacht weit höhere Infrastruktur- und Servicekosten.",
    backInfo: "Gross Margin (Bruttomarge) — der Umsatz nach Abzug der direkten Herstell- oder Lieferkosten. Nützlich für die Wirtschaftlichkeit vor laufenden Betriebskosten.",
  },
  "gr-14": {
    frontQuestion: "Welche Kennzahl schätzt, was nach variablen Kosten eines Verkaufs übrig bleibt?",
    frontScenario: "Ein Marktplatz muss wissen, ob jeder weitere Kauf genug beiträgt, um die festen Betriebskosten zu decken.",
    backInfo: "Contribution Margin (Deckungsbeitrag) — Umsatz minus variable Kosten, die diesem Umsatz zuzurechnen sind. Nützlich für Stückökonomie und Gewinnschwelle, die Abgrenzung hängt vom Geschäft ab.",
  },
  "gr-15": {
    frontQuestion: "Welche Kennzahl zeigt, wie viel Umsatz eine Werbekampagne je eingesetztem Werbegeld bringt?",
    frontScenario: "Ein Wachstumsteam vergleicht bezahlte Suche mit sozialen Netzen und braucht ein umsatzbezogenes Effizienzmaß.",
    backInfo: "ROAS — Return on Ad Spend (Werbeertrag) — zugeordneter Umsatz geteilt durch Werbekosten. Er enthält nicht alle Unternehmenskosten und hängt stark von der Qualität der Zuordnung ab.",
  },
  "gr-16": {
    frontQuestion: "Welche Kennzahl zeigt, welcher Anteil der Werbeeinblendungen zu einem Klick führt?",
    frontScenario: "Eine Kampagne sehen Millionen Menschen, doch das Team will wissen, ob die Gestaltung wirklich Besuche auslöst.",
    backInfo: "CTR — Click-Through Rate (Klickrate) — der Anteil der Einblendungen mit Klick. Eine hohe Rate garantiert weder gute Besucher noch spätere Abschlüsse.",
  },
  "gr-17": {
    frontQuestion: "Welche Kennzahl misst den gehandelten Wert auf einem Marktplatz vor Abzug der Gebühr?",
    frontScenario: "Ein Marktplatz verdient an Provisionen, muss aber zuerst wissen, welchen Gesamtwert Käufer und Verkäufer umsetzen.",
    backInfo: "GMV — Gross Merchandise Value (Handelsvolumen) — der gesamte vermittelte Transaktionswert im Zeitraum, vor Gebühren, Erstattungen oder Abzügen je nach Festlegung. Das ist nicht der eigene Umsatz des Marktplatzes.",
  },
  "gr-18": {
    frontQuestion: "Welche Kennzahl zeigt, welchen Anteil am Transaktionswert die Plattform als Umsatz behält?",
    frontScenario: "Ein Marktplatz wickelt Verkäufe über 10 Mio. € ab, verdient aber nur an Provision und Servicegebühr.",
    backInfo: "Take Rate (Plattformanteil) — der Prozentsatz des Transaktionswerts, den die Plattform als Umsatz einbehält. Legen Sie fest, welche Gebühren und welcher Transaktionswert einfließen.",
  },
  "an-01": {
    frontQuestion: "Was ist die kleinste Analyseeinheit für eine sinnvolle Handlung eines Nutzers?",
    frontScenario: "Das Team will Aktionen wie „Projekt angelegt“, „Kasse gestartet“ und „Einladung gesendet“ erfassen.",
    backInfo: "Event (Ereignis) — ein benannter Vorgang, der Nutzer- oder Systemverhalten abbildet. Gute Ereignisse stehen für sinnvolle Handlungen und folgen einer festen Namensregel.",
  },
  "an-02": {
    frontQuestion: "Welche Analysedaten beschreiben Umstände oder Merkmale eines Ereignisses?",
    frontScenario: "„Kauf abgeschlossen“ hilft schon, doch das Team braucht auch Preis, Tarif, Gerät und Zahlweg dazu.",
    backInfo: "Event Property (Ereignismerkmal) — ein Merkmal an einem Ereignis, das Umfeld für Filter, Gruppen und Auswertung liefert. Pflegen Sie Namen, Typen und zulässige Werte sauber dokumentiert.",
  },
  "an-03": {
    frontQuestion: "Welche Analysedaten beschreiben eine Person oder ein Konto — und nicht eine einzelne Aktion?",
    frontScenario: "Das Team will Verhalten nach Tarif, Region und Kundenrolle aufschlüsseln.",
    backInfo: "User Property (Nutzermerkmal) — ein bleibendes oder wechselndes Merkmal von Nutzer, Konto oder Profil, nicht eines einzelnen Ereignisses. Speichern Sie sensible Daten nur mit gutem Grund und klaren Regeln.",
  },
  "an-04": {
    frontQuestion: "Was legt fest, welche Ereignisse und Merkmale erfasst werden und wie sie heißen?",
    frontScenario: "Design, Produkt und Technik erfinden ständig leicht andere Namen für dasselbe Verhalten.",
    backInfo: "Tracking Plan (Messplan) — die gemeinsame Vorgabe für Ereignisse, Merkmale, Namen, Auslöser, Zuständige und Prüfung. Er verhindert, dass uneinheitliche Messung die Auswertung verzerrt.",
  },
  "an-05": {
    frontQuestion: "Was heißt der Schritt, mit dem Messereignisse wirklich in Code oder Pipeline landen?",
    frontScenario: "Das Team hat geklärt, was es messen will, doch die Technik muss dieses Verhalten erst beobachtbar machen.",
    backInfo: "Instrumentation (Instrumentierung) — die Umsetzung der Datenerfassung im Produkt und in den Systemen dahinter. Gute Instrumentierung testen Sie wie jede andere Produktfunktion.",
  },
  "an-06": {
    frontQuestion: "Welche Analyse zeigt, wie Nutzer eine feste Schrittfolge durchlaufen und wo sie aussteigen?",
    frontScenario: "Viele legen etwas in den Warenkorb, doch weit weniger schließen die Kasse ab.",
    backInfo: "Funnel Analysis (Trichteranalyse) — misst Fortschritt und Abschluss über geordnete Schritte. Sie passt am besten für bekannte Wege, nicht jeder echte Nutzerweg verläuft streng geradlinig.",
  },
  "an-07": {
    frontQuestion: "Welche Analyse deckt echte Wege der Nutzer auf, ohne sie in einen festen Trichter zu pressen?",
    frontScenario: "Das Team weiß nicht, was Menschen zwischen Anmeldung und erstem Nutzen tun, und will reale Verlaufspfade sehen.",
    backInfo: "Path Analysis (Pfadanalyse) — untersucht beobachtete Ereignisfolgen vor oder nach gewählten Aktionen. Nützlich, um unerwartete Routen, Schleifen und Sackgassen zu entdecken.",
  },
  "an-08": {
    frontQuestion: "Welche Analyse teilt Nutzer in Gruppen, um Verhalten nach Merkmalen zu vergleichen?",
    frontScenario: "Das Team will die Aktivierung von Mobil- und Desktop-Nutzern sowie von Gratis- und Zahlkunden vergleichen.",
    backInfo: "Segmentation (Segmentierung) — zerlegt Kennzahlen oder Verhalten in sinnvolle Gruppen. Segmente decken Unterschiede auf, die ein bloßer Durchschnitt verdeckt.",
  },
  "an-09": {
    frontQuestion: "Was heißt eine gespeicherte Nutzergruppe mit gemeinsamen Merkmalen oder Verhalten?",
    frontScenario: "Das Team untersucht immer wieder Nutzer, die am ersten Tag jemanden eingeladen haben.",
    backInfo: "Behavioral Cohort (Verhaltenskohorte) — eine wiederverwendbare Gruppe mit gemeinsamem Verhalten oder Merkmalen. Verhaltenskohorten lassen sich bei Bindung, Abschluss und anderen Ergebnissen vergleichen.",
  },
  "an-10": {
    frontQuestion: "Welche Analysesicht fasst Aktivität zu Besuchen oder Phasen ununterbrochener Nutzung zusammen?",
    frontScenario: "Das Team will verstehen, wie viel Nutzer bei einem typischen Besuch tun, nicht nur über den Monat gesehen.",
    backInfo: "Session (Sitzung) — gruppiert Nutzeraktivität in einem Zeitraum oder bis zu einer Pausenregel. Die Festlegung hängt vom Werkzeug ab und passt weniger zu ständig aktiven oder geräteübergreifenden Produkten.",
  },
};
