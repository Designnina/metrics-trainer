import type { CardOverride } from '../cardOverrides';

export const de06: Record<string, CardOverride> = {
  "biz-01": {
    frontQuestion: "Welches kurze Dokument schafft Klarheit über Aufgabe, Ziele, Zielgruppe und Rahmen, bevor die Arbeit beginnt?",
    frontScenario: "Ein Kunde sagt nur „Machen Sie das Dashboard neu“. Sie müssen erst verstehen, warum, für wen und unter welchen Bedingungen.",
    backInfo: "Project Brief (Projektbrief) — gemeinsames Papier zu Kontext, Problem, Zielen, Zielgruppe, Einschränkungen und Hintergrund. Nutzen Sie es für Entscheidungen, tun Sie aber nicht so, als wäre alles geklärt: Halten Sie offene Punkte ehrlich fest.",
  },
  "biz-02": {
    frontQuestion: "Was legt fest, welche Arbeiten zu einem Auftrag gehören — und welche nicht?",
    frontScenario: "Aus fünf Webseiten-Templates werden schleichend eine App, ein Designsystem und eine Datenmigration.",
    backInfo: "Scope (Leistungsumfang) — klare Grenze von Arbeiten, Zuständigkeiten und Ergebnissen. Klare Ausschlüsse und Annahmen sind genauso wichtig wie die Liste der Inhalte, sonst wächst der Auftrag unkontrolliert.",
  },
  "biz-03": {
    frontQuestion: "Was ist ein konkretes Arbeitsergebnis, das Sie als Team oder Auftragnehmer liefern?",
    frontScenario: "Zum Auftrag gehören ein Forschungsbericht, ein Prototyp und eine Designsystem-Dokumentation mit festem Termin.",
    backInfo: "Deliverable (Liefergegenstand) — greifbares, vereinbartes Ergebnis der Arbeit. Verwechseln Sie es nicht mit dem Geschäftsziel dahinter: Ein Bericht allein bringt noch kein Wachstum.",
  },
  "biz-04": {
    frontQuestion: "Welches Dokument erklärt Ansatz, Nutzen, Umfang, Zeitplan und Konditionen, bevor der Kunde den Auftrag vergibt?",
    frontScenario: "Eine Beraterin antwortet einem Interessenten mit einem maßgeschneiderten Plan und einem Preis.",
    backInfo: "Proposal (Angebot) — überzeugendes Dokument, das Ihr Problemverständnis, den empfohlenen Weg, Umfang und Konditionen zeigt. Es steht je nach Auftrag vor oder neben dem Vertrag und dem SOW.",
  },
  "biz-05": {
    frontQuestion: "Welches formale Dokument regelt Umfang, Ergebnisse, Zuständigkeiten, Zeitplan, Annahmen und Abnahme?",
    frontScenario: "Beide Seiten brauchen eine Vertragsanlage, die die Spielregeln so klar macht, dass man täglich danach arbeiten kann.",
    backInfo: "SOW — Statement of Work (Leistungsbeschreibung) — detaillierte Vereinbarung darüber, was geleistet und wie die Arbeit gesteuert wird. Die genaue rechtliche Rolle hängt von Vertragsstruktur und Land ab.",
  },
  "biz-06": {
    frontQuestion: "Bei welchem Preismodell vereinbaren Sie einen Festbetrag für einen klaren Umfang statt jede Stunde abzurechnen?",
    frontScenario: "Ein Kunde kauft ein klar abgegrenztes Forschungs- und Designpaket für 12.000 Euro.",
    backInfo: "Fixed Fee (Festpreis) — vereinbarter Preis für einen definierten Umfang oder ein Ergebnis. Das Effizienzrisiko liegt beim Anbieter, deshalb zählen saubere Annahmen, Änderungssteuerung und ein klarer Umfang.",
  },
  "biz-07": {
    frontQuestion: "Bei welchem Modell zahlt der Kunde die tatsächlich geleistete Zeit und gegebenenfalls Material und Spesen?",
    frontScenario: "Die Arbeit ist explorativ, die Anforderungen ändern sich jede Woche.",
    backInfo: "Time & Materials — T&M (Zeit und Material) — Abrechnung nach tatsächlichen Stunden und vereinbarten Sätzen, plus erstattungsfähiges Material, wo vereinbart. Das gibt Flexibilität, verlangt aber transparente Zeiterfassung und Budgetkontrolle.",
  },
  "biz-08": {
    frontQuestion: "Welche Vereinbarung sichert Ihnen laufend Zugang oder Kapazität gegen eine wiederkehrende Gebühr?",
    frontScenario: "Ein Start-up möchte jeden Monat eine Designerin für Produktarbeit einplanen statt einzelne Projekte zu vergeben.",
    backInfo: "Retainer (Betreuungsvertrag) — laufende Vereinbarung, die definierte Leistungen, Kapazität oder Verfügbarkeit sichert. Halten Sie fest, was enthalten ist, ob Stunden verfallen und welche Reaktionszeiten gelten.",
  },
  "biz-09": {
    frontQuestion: "Welcher formale Weg regelt Wünsche außerhalb des vereinbarten Umfangs mit Folgen für Kosten, Zeit und Ergebnisse?",
    frontScenario: "Mitten im Projekt wünscht der Kunde eine zweite Plattform und zwanzig zusätzliche Screens.",
    backInfo: "Change Request (Änderungsantrag) — dokumentierte Bitte, vereinbarten Umfang, Anforderungen, Kosten oder Termine zu ändern. Ein klarer Änderungsprozess schützt Flexibilität und Liefergrenzen zugleich.",
  },
  "biz-10": {
    frontQuestion: "Welches Hilfsmittel zeigt wichtige Personen mit Einfluss und Interessen, damit Sie die Zusammenarbeit planen können?",
    frontScenario: "Ein Redesign stockt, weil das Team nur mit Nutzern sprach und Recht, Support und Sponsor vergaß.",
    backInfo: "Stakeholder Map (Stakeholderkarte) — strukturierte Übersicht der Personen und Gruppen, die ein Projekt betreffen oder beeinflussen. So planen Sie Beteiligung, Kommunikation und Entscheidungswege.",
  },
  "biz-11": {
    frontQuestion: "Wer hat das letzte Wort, wenn sich Beteiligte nicht einig sind?",
    frontScenario: "Fünf Stakeholder geben Feedback, doch niemand weiß, wessen Entscheidung über den Release bestimmt.",
    backInfo: "Decision Maker (Entscheiderin oder Entscheider) — Person oder Rolle mit der Befugnis für die jeweilige Entscheidung. Klären Sie Entscheidungsrechte früh, sonst versanden Sie in endlosen Abstimmungen und widersprüchlichem Feedback.",
  },
  "biz-12": {
    frontQuestion: "Was ist ein wichtiger Kontrollpunkt, an dem Fortschritt sichtbar wird oder Prüfung und Zahlung fällig sind?",
    frontScenario: "Eine Zahlung ist nach Abschluss der Recherche fällig, die nächste nach Freigabe des Prototyps.",
    backInfo: "Milestone (Meilenstein) — bedeutender Projektpunkt für Fortschritt, Lieferung, Prüfung oder Vertragskonditionen. Ein Meilenstein ist für sich allein weder eine Aufgabe noch ein exaktes Kalenderdatum.",
  },
  "biz-13": {
    frontQuestion: "Was regelt, wem Design, Code, Texte und andere Arbeitsergebnisse gehören und wie sie genutzt werden dürfen?",
    frontScenario: "Eine Freelancerin liefert ein Markensystem, doch im Vertrag steht nicht, ob der Kunde Eigentum oder nur Nutzungsrechte erhält.",
    backInfo: "Intellectual Property Rights — IP Rights (Rechte am geistigen Eigentum) — rechtliche Regeln zu Eigentum, Lizenzierung und erlaubter Nutzung erstellter Werke. Übertragung und Lizenz sind verschieden; formulieren Sie das eindeutig und passend zum jeweiligen Recht.",
  },
  "biz-14": {
    frontQuestion: "Welche Vereinbarung verbietet, vertrauliche Informationen weiterzugeben oder anders zu nutzen?",
    frontScenario: "Ein Start-up teilt unveröffentlichte Produktpläne und Kundendaten während der Anbieterauswahl.",
    backInfo: "NDA — Non-Disclosure Agreement (Geheimhaltungsvereinbarung) — Vertrag, der vertrauliche Informationen und Pflichten zu Nutzung und Weitergabe festlegt. Ein NDA ersetzt weder Datensicherheit noch Datenschutzregeln oder einen vollen Dienstleistungsvertrag.",
  },
  "tech-01": {
    frontQuestion: "Welcher Teil eines Produkts zeigt die sichtbare Oberfläche auf der Nutzerseite?",
    frontScenario: "Ein Dialog sieht im Browser kaputt aus, obwohl die Serverdaten korrekt sind.",
    backInfo: "Frontend (Benutzeroberfläche, Präsentationsschicht) — sichtbare Anwendungsebene, die Oberfläche darstellt und Interaktionen auf dem Gerät verarbeitet. Die genaue Grenze hängt von Web, App und Server-Rendering ab.",
  },
  "tech-02": {
    frontQuestion: "Welcher Teil eines Produkts übernimmt Geschäftslogik, Datenzugriff und Dienste im Hintergrund?",
    frontScenario: "Die Oberfläche sendet eine Bestellung, die Serverlogik prüft den Bestand und speichert den Vorgang.",
    backInfo: "Backend (Serverseite) — serverseitige Systeme und Dienste für Geschäftslogik, Datenzugriff und Integrationen. Ein Backend kann aus einem Dienst oder vielen verteilten Diensten bestehen.",
  },
  "tech-03": {
    frontQuestion: "Was ist eine definierte Schnittstelle, über die ein System Daten oder Aktionen von einem anderen anfordert?",
    frontScenario: "Eine mobile App braucht einen dokumentierten Weg, um Kontodaten vom Firmenserver zu holen.",
    backInfo: "API — Application Programming Interface (Programmierschnittstelle) — Vertrag für die Zusammenarbeit von Software: verfügbare Operationen, Eingaben, Ausgaben und Verhalten. So kommunizieren Systeme, ohne ihre innere Umsetzung zu kennen.",
  },
  "tech-04": {
    frontQuestion: "Welcher verbreitete Web-Stil beschreibt Ressourcen und nutzt HTTP-Methoden wie GET, POST, PATCH und DELETE?",
    frontScenario: "Ein Produkt stellt Endpunkte wie „/users/123“ und „/orders/456“ über HTTP bereit.",
    backInfo: "REST — Representational State Transfer (ressourcenorientierter Architekturstil) — Stil für ressourcenorientierte Web-APIs. Echte „REST-APIs“ sind sehr unterschiedlich umgesetzt; das Etikett garantiert keine einheitliche Bauweise.",
  },
  "tech-05": {
    frontQuestion: "Welche Abfragesprache lässt Clients genau die benötigten Felder über ein typsicheres Schema anfordern, oft über einen einzigen Endpunkt?",
    frontScenario: "Ein Dashboard braucht je Screen verschiedene verschachtelte Kundendaten, ohne viele starre REST-Antworten zu bauen.",
    backInfo: "GraphQL (Abfragesprache für APIs) — Sprache und Laufzeitumgebung für APIs auf Basis eines typsicheren Schemas. Clients bestimmen die Felder selbst; diese Freiheit verlangt saubere Zugriffsrechte, Leistung und Schemadisziplin.",
  },
  "tech-06": {
    frontQuestion: "Was ist eine konkrete API-Adresse oder -Operation für eine bestimmte Ressource oder Funktion?",
    frontScenario: "Die Entwicklung fragt, welche Adresse der Client aufrufen soll, um ein Supportticket anzulegen.",
    backInfo: "Endpoint (Endpunkt) — adressierbare Stelle oder Operation einer API für eine Fähigkeit oder Ressource. In manchen API-Stilen passt der Begriff „Operation“ besser als nur an URLs zu denken.",
  },
  "tech-07": {
    frontQuestion: "Wie heißt das Paar aus Daten an einen Dienst und dem Ergebnis, das er zurückgibt?",
    frontScenario: "Die App sendet Bestelldaten und erhält entweder die angelegte Bestellung oder eine Fehlermeldung.",
    backInfo: "Request / Response (Anfrage / Antwort) — eine Anfrage bittet einen Dienst um etwas, die Antwort meldet Ergebnis, Status und Daten. Dieses Muster prägt fast alle HTTP- und API-Aufrufe.",
  },
  "tech-08": {
    frontQuestion: "Welche dreistellige Zahl zeigt das grobe Ergebnis einer Webanfrage: Erfolg, Clientfehler oder Serverfehler?",
    frontScenario: "Die API meldet „404“, wenn ein Objekt fehlt, und „500“, wenn der Server unerwartet scheitert.",
    backInfo: "HTTP Status Code (HTTP-Statuscode) — Standardcode für den Ausgang: 2xx Erfolg, 4xx Problem auf Anfrageseite, 5xx Serverfehler. Wählen Sie den Code so, dass er die tatsächliche Lage trifft.",
  },
  "tech-09": {
    frontQuestion: "Welcher Mechanismus schickt bei einem Ereignis automatisch eine HTTP-Mitteilung an ein anderes System, statt ständig abzufragen?",
    frontScenario: "Ein Zahlungsanbieter meldet Ihrem Backend sofort, dass eine Zahlung erfolgreich war.",
    backInfo: "Webhook (ereignisgesteuerter HTTP-Rückruf) — automatischer Aufruf von einem System ans andere. Planen Sie Prüfung, Wiederholungen, doppelte Zustellung und Reihenfolge ein: Meldungen können doppelt oder ungeordnet ankommen.",
  },
  "tech-10": {
    frontQuestion: "Welches System speichert Anwendungsdaten dauerhaft, ordnet sie und macht sie abrufbar?",
    frontScenario: "Konten, Projekte und Rechte müssen erhalten bleiben, auch wenn Nutzer die App schließen.",
    backInfo: "Database (Datenbank) — System zur dauerhaften Ablage und Abfrage strukturierter oder halbstrukturierter Daten. Bei der Wahl wägen Sie Konsistenz, Abfragemöglichkeiten, Skalierung und Betrieb ab.",
  },
  "tech-11": {
    frontQuestion: "Welcher Zwischenspeicher hält häufig genutzte Daten griffbereit und spart wiederholte Arbeit oder Netzaufrufe?",
    frontScenario: "Ein Dashboard fragt ständig dieselben teuren Daten ab und wirkt träge, obwohl sie sich nur alle paar Minuten ändern.",
    backInfo: "Cache (Zwischenspeicher) — temporäre Kopie von Daten oder Berechnungen für Tempo und Entlastung. Regeln zu Gültigkeit und Löschung sind Pflicht, denn gespeicherte Daten können veralten.",
  },
  "tech-12": {
    frontQuestion: "Welches verteilte Netz liefert Inhalte von nahen Standorten aus, um Ladezeit und Serverlast zu senken?",
    frontScenario: "Nutzer in Australien laden dieselben Bilder von einem Server nur in Europa und warten unnötig lange.",
    backInfo: "CDN — Content Delivery Network (Verteilnetz für Inhalte) — verteiltes Netz, das Inhalte aus der Nähe ausliefert. Ein CDN verbessert meist Ladezeit, Ausfallsicherheit und Bandbreitennutzung bei speicherbaren Inhalten.",
  },
  "tech-13": {
    frontQuestion: "Wie heißt die Verzögerung zwischen einer Aktion oder Anfrage und der spürbaren Antwort?",
    frontScenario: "Ein KI-Assistent liefert gute Antworten, doch nach dem Senden vergehen acht Sekunden.",
    backInfo: "Latency (Latenz, Verzögerung) — Zeitversatz in einer Systeminteraktion. Nutzer spüren Netz, Server, Modell und Gesamtstrecke anders, messen Sie diese Anteile daher getrennt.",
  },
  "tech-14": {
    frontQuestion: "Welcher Sicherheitsprozess prüft, ob Nutzer oder System wirklich sind, wer sie vorgeben zu sein?",
    frontScenario: "Eine Person meldet sich per Passkey, Passwort oder anderem Nachweis an.",
    backInfo: "Authentication — AuthN (Authentifizierung) — Identitätsprüfung. Sie beantwortet „Wer sind Sie?“ und ist etwas anderes als Autorisierung, die über Rechte entscheidet.",
  },
  "tech-15": {
    frontQuestion: "Welcher Sicherheitsprozess bestimmt, worauf eine geprüfte Identität zugreifen oder was sie ändern darf?",
    frontScenario: "Zwei Mitarbeitende können sich anmelden, doch nur Admins dürfen Abrechnungseinstellungen ändern.",
    backInfo: "Authorization — AuthZ (Autorisierung) — Regeln, welche Aktionen und Ressourcen einer Identität erlaubt sind. Sie beantwortet „Was dürfen Sie?“ Setzen Sie Rechte an vertrauenswürdiger Stelle auf dem Server durch, nicht nur per verstecktem Button.",
  },
  "tech-16": {
    frontQuestion: "Welche Architektur trennt anfragende Anwendung und Dienst, der Anfragen verarbeitet und Ressourcen liefert?",
    frontScenario: "Ein Browser fragt Produktdaten bei einem entfernten Dienst an und stellt die Antwort dar.",
    backInfo: "Client–Server Model (Client-Server-Modell) — Architektur, in der Clients Dienste und Ressourcen bei Servern anfragen. Moderne Systeme ergänzen Edge-, lokale und verteilte Ebenen, doch die Grundbegriffe bleiben nützlich.",
  },
  "ai-01": {
    frontQuestion: "Welcher Modelltyp lernt aus großen Sprachmengen und erzeugt oder formt Texte um, oft auch andere Formate?",
    frontScenario: "Ein Produkt fasst Dokumente zusammen, beantwortet Fragen und erstellt strukturierte Texte nach Anweisung.",
    backInfo: "LLM — Large Language Model (großes Sprachmodell) — großes trainiertes Modell für Sprachverstehen und Texterzeugung. In heutigen Produkten ist es nur ein Baustein neben Werkzeugen, Suche, Regeln und Qualitätsprüfung.",
  },
  "ai-02": {
    frontQuestion: "Was ist die kleine Text- oder Eingabeeinheit, in der Limits und Nutzungskosten gemessen werden?",
    frontScenario: "Ein langes Dokument verbraucht weit mehr Modellkapazität, als die Zeichenzahl vermuten lässt.",
    backInfo: "Token (Texteinheit des Modells) — Einheit, die der Tokenizer aus Ein- und Ausgabe bildet. Ein Token ist nicht dasselbe wie ein Wort; die Zerlegung hängt von Modell und Sprache ab.",
  },
  "ai-03": {
    frontQuestion: "Welches Limit beschreibt, wie viel Eingabe, Verlauf und Ausgabe ein Modell in einem Durchgang berücksichtigen kann?",
    frontScenario: "Ein Supportassistent vergisst den Anfang eines sehr langen Gesprächs, weil zu viel Material mitgeschleppt wird.",
    backInfo: "Context Window (Kontextfenster) — maximale Tokenmenge für Anfrage und Kontext nach den Regeln des Modells. Ein großes Fenster heißt nicht, dass jedes Detail gleich stark beachtet wird.",
  },
  "ai-04": {
    frontQuestion: "Was ist die Anweisung mit Kontext, die einem generativen Modell Aufgabe und gewünschte Antwort vorgibt?",
    frontScenario: "Ein Produkt übergibt Rolle, Regeln, Nutzeranfrage und Beispiele, bevor es einen Entwurf anfordert.",
    backInfo: "Prompt (Eingabeaufforderung) — Anweisung und Kontext zur Steuerung des Modells. In Produktivsystemen ist Prompting nur eine Schicht; Werkzeuge, Suche, Schemas, Rechte und Tests sind oft genauso wichtig.",
  },
  "ai-05": {
    frontQuestion: "Welche numerische Darstellung lässt Inhalte nach Bedeutung statt nach exakten Wörtern vergleichen?",
    frontScenario: "Die Suche soll „Mitgliedschaft kündigen“ finden, wenn der Artikel von „Abo beenden“ spricht.",
    backInfo: "Embedding (Vektordarstellung) — gelernte Zahlenvektoren für Inhalte, genutzt für Ähnlichkeitssuche, Gruppierung und Auswahl. Solche Vektoren liegen meist in einem Speicher mit Vektorsuche.",
  },
  "ai-06": {
    frontQuestion: "Welche Architektur holt passende externe Informationen und gibt sie dem Modell zum Antwortzeitpunkt dazu?",
    frontScenario: "Ein Assistent soll aus aktuellen Firmendokumenten antworten, ohne das Basismodell bei jeder Regeländerung neu zu trainieren.",
    backInfo: "RAG — Retrieval-Augmented Generation (Suche mit Generierung) — ein Suchschritt findet passende externe Inhalte und legt sie in den Modellkontext. Das verbessert Aktualität und Belegbarkeit, doch Suchqualität und Prüfung von Zitaten bleiben wichtig.",
  },
  "ai-07": {
    frontQuestion: "Welche Praxis bindet Modellausgaben an prüfbare Quellen, Werkzeuge oder Belege statt an reines Modellwissen?",
    frontScenario: "Ein Rechtsassistent muss aus dem freigegebenen Regelwerk des Kunden antworten und Belege zeigen.",
    backInfo: "Grounding (Erdung an Quellen) — Generierung auf verlässlichen Kontext oder externe Belege stützen. Das senkt unbelegte Behauptungen, garantiert aber keine sachliche Richtigkeit.",
  },
  "ai-08": {
    frontQuestion: "Wie heißt eine Modellausgabe, die unbelegte oder falsche Inhalte als gültig darstellt?",
    frontScenario: "Ein Assistent erfindet eine Regelklausel, die in keinem beigelegten Dokument steht.",
    backInfo: "Hallucination (Halluzination) — erzeugter Inhalt ohne Beleg, erfunden oder im Widerspruch zur Quelle. Fangen Sie das Risiko im Produktdesign ab: mit Quellenbindung, Werkzeugen, Umgang mit Unsicherheit und Tests.",
  },
  "ai-09": {
    frontQuestion: "Welche Fähigkeit lässt ein Modell definierte externe Funktionen oder Werkzeuge wählen und aufrufen statt nur Text zu schreiben?",
    frontScenario: "Ein Assistent prüft Bestände, legt Kalendereinträge an und holt Kontodaten über freigegebene Funktionen.",
    backInfo: "Tool Use / Function Calling (Werkzeugnutzung, Funktionsaufruf) — Fähigkeit des Modells, passende Werkzeuge zu wählen und Argumente für die Ausführung zu liefern. Das erweitert die Macht, verlangt aber Rechte, Prüfung, Fehlerbehandlung und klare Nutzerkontrolle.",
  },
  "ai-10": {
    frontQuestion: "Welches KI-System verfolgt ein Nutzerziel über Schritte, Werkzeuge und Zwischenaktionen statt einer einzigen festen Antwort?",
    frontScenario: "Ein Reiseassistent sucht Optionen, vergleicht sie, prüft Bedingungen und führt freigegebene Aktionen in mehreren Schritten aus.",
    backInfo: "Agent (Agent) — KI-System, das ein Ziel über wiederholtes Nachdenken, Entscheiden und Werkzeuggebrauch verfolgt. Legen Sie Rechte, Stoppbedingungen, Beobachtbarkeit und menschliche Kontrolle fest.",
  },
  "ai-11": {
    frontQuestion: "Welcher Ablauf lässt ein KI-System planen, handeln, Ergebnisse beobachten und schrittweise weitermachen statt einer starren Kette zu folgen?",
    frontScenario: "Das System scheitert mit einem Datenabruf, versucht ein anderes Werkzeug und passt den nächsten Schritt an.",
    backInfo: "Agentic Workflow (agentischer Arbeitsablauf) — mehrstufiger Ablauf, in dem Modellentscheidungen bestimmen, welche Aktionen und Werkzeuge folgen. „Agentisch“ heißt nicht grenzenlos selbstständig; Grenzen und Freigaben gehören dazu.",
  },
  "ai-12": {
    frontQuestion: "Welcher offene Standard verbindet KI-Anwendungen einheitlich mit externen Werkzeugen, Ressourcen und Kontextsystemen?",
    frontScenario: "Dasselbe Firmenwissen mit Suche soll mit mehreren kompatiblen KI-Clients funktionieren, ohne Sonderanbindung pro Client.",
    backInfo: "MCP — Model Context Protocol (Modellkontextprotokoll) — offenes Protokoll zur Verbindung von KI-Anwendungen mit Werkzeugen, Ressourcen und Kontext. 2026 ist MCP ein wichtiger Standard für Kompatibilität; Sicherheit, Zugriffsrechte und Vertrauensgrenzen bleiben trotzdem nötig.",
  },
  "ai-13": {
    frontQuestion: "Welche Ausgabemethode zwingt Modellantworten in ein definiertes maschinenlesbares Schema statt auf gut Glück zu parsen?",
    frontScenario: "Ein Ablauf braucht garantierte Felder wie „name“, „risk_level“ und „recommended_action“ für die Weiterverarbeitung.",
    backInfo: "Structured Outputs (strukturierte Ausgaben) — Modellausgabe, begrenzt auf eine feste Struktur, meist JSON Schema. Das sichert Form und Typen ab, aber nicht die inhaltliche Wahrheit der Werte.",
  },
  "ai-14": {
    frontQuestion: "Welche systematischen Tests messen, ob ein KI-System definierte Aufgaben und Problemfälle gut genug löst?",
    frontScenario: "Ein Team wechselt Modell und Prompt und braucht Belege, dass die Qualität stieg, ohne mehr riskantes Verhalten.",
    backInfo: "Evals — Evaluations (Bewertungen) — wiederholbare Datensätze, Kriterien und Bewertungsmethoden für Modellverhalten. Gute Tests enthalten typische Erfolge, Randfälle und wichtige Fehlerszenarien.",
  },
  "ai-15": {
    frontQuestion: "Welcher Ablauf hält einen Menschen an kritischen Stellen für Prüfung, Freigabe oder Eingriff verantwortlich statt vollautonom zu laufen?",
    frontScenario: "Die KI entwirft Kundenerstattungen, doch teure Fälle muss erst eine Supportkraft freigeben, bevor Geld fließt.",
    backInfo: "Human in the Loop — HITL (Mensch im Regelkreis) — Systementwurf, bei dem Menschen an festen Punkten prüfen, freigeben, korrigieren oder übernehmen. Setzen Sie ihn nach Risiko und Verantwortung ein, nicht als vage Behauptung, dass „irgendwo ein Mensch dabei ist“.",
  },
  "ai-16": {
    frontQuestion: "Welcher Angriff versucht, ein KI-System über manipulierte Anweisungen in Eingaben oder fremden Daten zu lenken?",
    frontScenario: "Eine abgerufene Webseite enthält versteckten Text, der das Modell zum Ignorieren von Regeln und zum Verrat von Geheimnissen auffordert.",
    backInfo: "Prompt Injection (Eingabemanipulation) — feindliche Anweisungen, die über sichtbare Inhalte das Verhalten umlenken wollen. Behandeln Sie fremde Inhalte als nicht vertrauenswürdige Daten und sichern Sie das System außerhalb des Modells ab, nicht nur per Prompt.",
  },
  "ai-17": {
    frontQuestion: "Wie heißt der Oberbegriff für Kontrollen, die unsicheres oder unerwünschtes KI-Verhalten vor, während oder nach der Ausführung begrenzen?",
    frontScenario: "Ein Gesundheitsassistent braucht Regelprüfungen, begrenzte Werkzeuge, Moderation und Eskalation bei Modellantworten.",
    backInfo: "AI Guardrails (KI-Leitplanken) — gestaffelte Kontrollen wie Rechte, Prüfung, Regelfilter, Werkzeuggrenzen, Limits, Beobachtung und Übergabe an Menschen. Leitplanken wirken auf Systemebene, nicht als einzelner „Sei sicher“-Prompt.",
  },
  "ai-18": {
    frontQuestion: "Welche Fähigkeit lässt ein Modell oder KI-System mehr als eine Datenart verarbeiten, etwa Text, Bild, Ton oder Video?",
    frontScenario: "Ein Supportassistent liest einen Screenshot, hört eine Sprachnachricht und antwortet in Text.",
    backInfo: "Multimodal AI (multimodale KI) — KI, die mehrere Modalitäten verarbeiten oder erzeugen kann. Planen Sie je Datenart Latenz, Barrierefreiheit, Datenschutz und eigene Fehlermuster ein.",
  },
  "ai-19": {
    frontQuestion: "Welche Anpassung trainiert ein vortrainiertes Modell mit kuratierten Beispielen weiter statt nur den Prompt zur Laufzeit zu ändern?",
    frontScenario: "Ein Unternehmen braucht immer wieder einen besonderen Antwortstil, den Prompting allein nicht verlässlich liefert.",
    backInfo: "Fine-tuning (Feinabstimmung) — zusätzliches Training eines vortrainierten Modells mit ausgewählten Daten. Es hilft bei passenden Aufgaben, ist aber kein Standardweg für häufig wechselnde Fakten.",
  },
  "ai-20": {
    frontQuestion: "Wie heißt der Laufzeitprozess, bei dem ein trainiertes Modell aus neuer Eingabe eine Vorhersage oder Antwort erzeugt?",
    frontScenario: "Das Modell ist trainiert; jede Nutzeranfrage verbraucht nun Rechenleistung für die Antwort.",
    backInfo: "Inference (Inferenzausführung) — Ausführung eines trainierten Modells auf neuer Eingabe. Produktteams optimieren sie meist nach Qualität, Latenz, Durchsatz und Kosten, statt „das Modell“ mit dem ganzen Produkt gleichzusetzen.",
  },
};
