import type { CardOverride } from '../cardOverrides';

export const de04: Record<string, CardOverride> = {
  "fw-13": {
    frontQuestion: "Welches Artefakt zeigt Schritte, Gedanken und Gefühle einer Kundin auf dem Weg zu einem Ziel?",
    frontScenario: "Sie wollen verstehen, wie Menschen ein Produkt auswählen, kaufen, einrichten und bei Problemen Hilfe holen — nicht nur einen einzelnen Screen.",
    backInfo: "Customer Journey Map (Kundenreise-Karte) — visualisiert Stufen, Handlungen, Gedanken, Gefühle und Kontaktpunkte einer klar umrissenen Person in einem Szenario. Arbeiten Sie mit Belegen aus der Forschung und grenzen Sie Akteur und Ziel scharf ab.",
  },
  "fw-14": {
    frontQuestion: "Welche Karte beschreibt ein ganzes Lebensereignis über alle Kanäle hinweg statt nur ein einzelnes Produkt?",
    frontScenario: "Sie untersuchen das Thema „Umzug“ mit Maklern, Banken, Versorgern und Ämtern — nicht nur die eigene App.",
    backInfo: "Experience Map (Erlebniskarte) — stellt die übergreifende Erfahrung rund um ein Ziel oder einen Lebensbereich dar, oft über Produkte und Organisationen hinweg. Nutzen Sie sie für Orientierung im Gesamtkontext, bevor Sie einzelne Reisen im Detail ausarbeiten.",
  },
  "fw-15": {
    frontQuestion: "Welche Planungsmethode ordnet Nutzeraktivitäten entlang der Reise und schneidet Releases nach Wert?",
    frontScenario: "Sie sehen den kompletten Ablauf vor sich und suchen das kleinste sinnvolle erste Release, das wirklich Nutzen stiftet.",
    backInfo: "User Story Mapping (User-Story-Mapping) — ordnet Aktivitäten und Aufgaben horizontal entlang der Nutzerreise und schneidet vertikal lieferbare Scheiben. So bleibt der Zusammenhang erhalten, statt isolierte Backlog-Punkte zu priorisieren.",
  },
  "fw-16": {
    frontQuestion: "Welche JTBD-Karte zerlegt einen Kernjob in universelle Schritte wie Definieren, Vorbereiten und Überwachen?",
    frontScenario: "Sie wollen überall im Gesamtjob Chancen finden, statt nur rund um die vorhandenen Features zu denken.",
    backInfo: "Job Map (Job-Karte) — gliedert einen Job in lösungsneutrale Prozessschritte, etwa Definieren, Suchen, Vorbereiten, Bestätigen, Ausführen und Überwachen. Prüfen Sie jeden Schritt auf unerfüllte Bedürfnisse und neue Lösungsideen.",
  },
  "ia-01": {
    frontQuestion: "Was ordnet und strukturiert Informationen so, dass Menschen sich zurechtfinden?",
    frontScenario: "Ihre Plattform hat Hunderte Seiten, Tools und Einstellungen, doch niemand ahnt, wo was liegt.",
    backInfo: "Information Architecture — IA (Informationsarchitektur) — Praxis des Strukturierens, Ordnens, Benennens und Verknüpfens von Informationen für Verständnis und Auffindbarkeit. Mehr als nur eine Sitemap: Dazu gehören Struktur, Labels, Navigation und Suche.",
  },
  "ia-02": {
    frontQuestion: "Was sorgt mit festen Kategorien dafür, dass Inhalte überall gleich heißen?",
    frontScenario: "Dasselbe Produkt heißt mal „Audio“, mal „Kopfhörer“ und mal „Sound für unterwegs“.",
    backInfo: "Taxonomy (Taxonomie) — geordnetes Kategoriensystem mit klaren Benennungen und Beziehungen. Richten Sie es an den Denkmodellen der Nutzer und an den betrieblichen Anforderungen aus.",
  },
  "ia-03": {
    frontQuestion: "Was drückt Wichtigkeitsstufen und Eltern-Kind-Beziehungen in Inhalten aus?",
    frontScenario: "Ihre Kontoeinstellungen haben Bereiche, Unterbereiche und einzelne Schalter — doch die Ordnung bleibt unklar.",
    backInfo: "Hierarchy (Hierarchie) — geordnete Struktur mit Ebenen, Gruppierung und Priorität. Eine klare Hierarchie senkt den Denkaufwand und hilft vorherzusagen, wohin eine Information gehört.",
  },
  "ia-04": {
    frontQuestion: "Was zeigt die geplante Struktur und die Beziehungen aller Seiten im Überblick?",
    frontScenario: "Vor dem Umbau des Hilfeportals brauchen Sie ein gemeinsames Bild der Struktur.",
    backInfo: "Sitemap (Seitenstrukturplan) — Darstellung von Seiten oder Screens und ihren hierarchischen Beziehungen. Sie dokumentiert die Struktur, beweist aber nicht, dass Nutzer darin etwas finden.",
  },
  "ia-05": {
    frontQuestion: "Was hilft Nutzern, sich zwischen Bereichen zu bewegen und den Weg zu finden?",
    frontScenario: "Einzelne Seiten sind klar, doch zwischen Projekten, Einstellungen und Abrechnung gehen Nutzer immer wieder verloren.",
    backInfo: "Navigation (Navigation) — Menüs, Links und Steuerelemente für die Bewegung in der Informationsstruktur. Bieten Sie klare Auswahl, Orientierung und vorhersehbare Wege.",
  },
  "ia-06": {
    frontQuestion: "Was sorgt dafür, dass Kategorien und Schaltflächen verständlich heißen?",
    frontScenario: "Intern heißt es „Workspace-Orchestrierung“, Kunden suchen dagegen schlicht nach „Teameinstellungen“.",
    backInfo: "Labeling (Benennung) — wählt Namen für Kategorien, Menüs und Aktionen so, dass Nutzer den Inhalt vorhersehen können. Halten Sie Labels konkret und einheitlich und prüfen Sie sie im echten Kontext.",
  },
  "ia-07": {
    frontQuestion: "Was beschreibt die innere Vorstellung, die sich Nutzer vom System machen?",
    frontScenario: "Kunden erwarten einen Papierkorb für gelöschte Dateien, obwohl die Technik im Hintergrund ganz anders arbeitet.",
    backInfo: "Mental Model (mentales Modell) — innere Vorstellung davon, wie etwas funktioniert. Interfaces lernen sich leichter, wenn Ihr Konzept zu den Erwartungen der Nutzer passt.",
  },
  "ia-08": {
    frontQuestion: "Was hilft Nutzern vorherzusagen, was sie hinter einem Link erwartet?",
    frontScenario: "Der Menüpunkt „Ressourcen“ verrät nicht, ob dahinter Vorlagen, Abrechnungshilfe oder Doku stecken.",
    backInfo: "Information Scent (Informationsduft) — Hinweise, die zeigen, ob ein Weg wahrscheinlich zum Ziel führt. Konkrete Labels und Kontext stärken diesen Duft und verhindern Umwege.",
  },
  "ia-09": {
    frontQuestion: "Was beschreibt, wie leicht sich Inhalte finden lassen, wenn man sie braucht?",
    frontScenario: "Die Funktion läuft einwandfrei, doch der Support bekommt ständig Anfragen, weil niemand sie findet.",
    backInfo: "Findability (Auffindbarkeit) — Maß dafür, wie gut sich Informationen oder Funktionen entdecken lassen. Sie hängt von Struktur, Navigation, Suche, Labels und Informationsduft ab.",
  },
  "ia-10": {
    frontQuestion: "Was definiert Inhaltstypen, Felder und Beziehungen unabhängig vom Layout?",
    frontScenario: "Ihr CMS soll Artikel, Autoren, Produkte und FAQs wiederverwendbar für Web und App liefern.",
    backInfo: "Content Model (Inhaltsmodell) — legt Inhaltstypen, Attribute und Beziehungen fest, getrennt von einer bestimmten Darstellung. Klären Sie damit, was zusammengehört und wiederverwendbar bleibt.",
  },
  "ia-11": {
    frontQuestion: "Wie heißen kurze Hilfstexte wie Button-Labels, Hinweise und Fehlermeldungen?",
    frontScenario: "Sie entscheiden, ob auf dem Knopf „Speichern“, „Änderungen übernehmen“ oder „Profil aktualisieren“ steht.",
    backInfo: "Microcopy (Mikrotexte) — kleine Texte im Interface, die Handlungen führen, Zustände erklären und Unsicherheit nehmen. Schreiben Sie konkret, kurz und passend zur Stelle.",
  },
  "ia-12": {
    frontQuestion: "Was beschreibt die gleichbleibende Persönlichkeit der Produktsprache?",
    frontScenario: "Ihre Marke soll überall klar, ruhig und leicht verspielt klingen, vom Onboarding bis zur Hilfe.",
    backInfo: "Voice (Stimme) — stabiler Charakter der Kommunikation einer Marke oder eines Produkts. Die Stimme bleibt konstant, nur die Tonlage passt sich der Lage an.",
  },
  "ia-13": {
    frontQuestion: "Was passt die gleiche Markenstimme an die Lage der Nutzer an?",
    frontScenario: "Nach einem Erfolg darf das Produkt locker klingen, bei einer fehlgeschlagenen Zahlung eher ruhig und direkt.",
    backInfo: "Tone (Tonlage) — gefühlsmäßige Färbung der stabilen Stimme je nach Kontext. Reagieren Sie auf Emotion, Risiko und Aufgabe, ohne die Persönlichkeit zu wechseln.",
  },
  "ia-14": {
    frontQuestion: "Welche Schreibweise macht auch schwierige Inhalte leicht verständlich?",
    frontScenario: "Ihr Zustimmungstext ist rechtlich wichtig, liest sich aber wie ein internes Behördenschreiben.",
    backInfo: "Plain Language (einfache, klare Sprache) — schreibt mit vertrauten Wörtern, direktem Aufbau und ohne unnötigen Fachjargon. Das ist keine kindliche Sprache, sondern sorgt dafür, dass Menschen Inhalte finden, verstehen und nutzen können.",
  },
  "ix-01": {
    frontQuestion: "Was beschreibt, welche Handlungen ein Objekt überhaupt anbietet?",
    frontScenario: "Ein erhabener Knopf wirkt schon vor dem Lesen drückbar.",
    backInfo: "Affordance (Angebotscharakter) — Handlungsmöglichkeiten, die ein Objekt oder eine Umgebung im Verhältnis zur Person bietet. Unterscheiden Sie die eigentliche Möglichkeit vom sichtbaren Hinweis, der sie ankündigt.",
  },
  "ix-02": {
    frontQuestion: "Was zeigt sichtbar, wo eine Handlung möglich ist?",
    frontScenario: "Blau unterstrichener Text signalisiert Klickbarkeit, auch wenn dahinter nur ein einfacher Wechsel steckt.",
    backInfo: "Signifier (Hinweiszeichen) — wahrnehmbares Zeichen, das eine Handlungsmöglichkeit anzeigt. Labels, Icons, Form, Platzierung und Stil können als solche Zeichen wirken.",
  },
  "ix-03": {
    frontQuestion: "Was meldet Ihnen zurück, was nach Ihrer Aktion passiert ist?",
    frontScenario: "Nach „Speichern“ wechselt der Screen den Zustand und bestätigt den Erfolg, statt Sie im Unklaren zu lassen.",
    backInfo: "Feedback (Rückmeldung) — Reaktion des Systems auf eine Aktion, die Status oder Ergebnis zeigt. Gestalten Sie sie zeitnah, wahrnehmbar und passend zur Bedeutung der Aktion.",
  },
  "ix-04": {
    frontQuestion: "Was sorgt dafür, dass sich eine Steuerung natürlich zur Wirkung anfühlt?",
    frontScenario: "Sie ziehen eine Karte nach links und die Ansicht bewegt sich räumlich nachvollziehbar mit.",
    backInfo: "Mapping (Zuordnung) — Beziehung zwischen Bedienelement und Wirkung. Eine natürliche Zuordnung folgt räumlichen oder gedanklichen Erwartungen und senkt den Lernaufwand.",
  },
  "ix-05": {
    frontQuestion: "Was schränkt Handlungen ein, um ungültige Zustände zu verhindern?",
    frontScenario: "„Absenden“ bleibt inaktiv, bis alle Pflichtangaben korrekt ausgefüllt sind.",
    backInfo: "Constraint (Einschränkung) — Begrenzung möglicher Aktionen oder Zustände. Beugen Sie damit Fehlern vor, erklären Sie aber immer, warum es gerade nicht weitergeht.",
  },
  "ix-06": {
    frontQuestion: "Welches Prinzip verlangt, dass Nutzer immer wissen, was das System gerade tut?",
    frontScenario: "Ein Upload dauert 20 Sekunden ohne Fortschritt, also klicken Sie immer wieder auf Hochladen.",
    backInfo: "Visibility of System Status (Sichtbarkeit des Systemstatus) — halten Sie Nutzer mit passenden, zeitnahen Rückmeldungen über den Zustand auf dem Laufenden. Fortschritt, Speichern, Sync und Fehler dürfen nicht unsichtbar bleiben, wenn sie wichtig sind.",
  },
  "ix-07": {
    frontQuestion: "Welches Prinzip erleichtert Lernen, indem Ähnliches immer ähnlich funktioniert?",
    frontScenario: "„Speichern“ steht auf allen Einstellungsseiten am gleichen Ort, heikle Aktionen fragen stets gleich nach.",
    backInfo: "Consistency (Konsistenz) — wiederverwendet Muster, Sprache und Verhalten, damit Wissen übertragbar bleibt. Bewahren Sie keine schlechten Muster nur aus Gewohnheit, sondern vereinheitlichen Sie das Gute.",
  },
  "ix-08": {
    frontQuestion: "Welches Prinzip zeigt Optionen lieber, statt Erinnerung zu verlangen?",
    frontScenario: "Der Checkout bietet gespeicherte Adressen an, statt Sie alles auswendig eintippen zu lassen.",
    backInfo: "Recognition over Recall (Wiedererkennen statt Erinnern) — senkt die Gedächtnislast, indem Aktionen, Objekte und Infos sichtbar oder abrufbar bleiben. Verlangen Sie nur dort Erinnerung, wo sie wirklich nötig ist.",
  },
  "ix-09": {
    frontQuestion: "Welches Gesetz sagt, dass große und nahe Ziele schneller treffbar sind?",
    frontScenario: "Die wichtigste Aktion auf dem Handy ist winzig und liegt weit weg vom Daumen.",
    backInfo: "Fitts's Law (Fitts-Gesetz) — die Zeit für eine Zielbewegung hängt von Entfernung und Größe ab. Machen Sie wichtige Ziele groß genug und gut erreichbar und denken Sie an motorische Einschränkungen.",
  },
  "ix-10": {
    frontQuestion: "Welches Gesetz sagt, dass mehr Auswahl meist längere Entscheidung braucht?",
    frontScenario: "Ein Menü wächst von sechs klaren Punkten auf vierzig gleichwertige Einträge, alle brauchen deutlich länger.",
    backInfo: "Hick's Law (Hick-Gesetz) — die Entscheidungszeit steigt meist mit Zahl und Komplexität der Optionen. Zeigen Sie nicht stur weniger, sondern gruppieren Sie, setzen Sie Standards und staffeln Sie die Tiefe.",
  },
  "ix-11": {
    frontQuestion: "Welches Prinzip erinnert daran, dass Nutzer Erwartungen von anderen Produkten mitbringen?",
    frontScenario: "Ihr eigenes Schließen-Icon verhält sich anders als in fast allen Desktop-Apps üblich.",
    backInfo: "Jakob's Law (Jakob-Gesetz) — Menschen verbringen viel Zeit mit anderen Produkten und übertragen deren Muster. Nutzen Sie Vertrautes, brechen Sie Konventionen nur bewusst, wenn der Nutzen die Lernkosten überwiegt.",
  },
  "ix-12": {
    frontQuestion: "Was blendet Komplexität schrittweise ein, damit der Einstieg leicht bleibt?",
    frontScenario: "Eine Analyseansicht zeigt zuerst Kernfilter, Fachoptionen öffnen sich erst auf Wunsch.",
    backInfo: "Progressive Disclosure (gestaffelte Offenlegung) — zeigt erst das Nötige für die aktuelle Aufgabe und öffnet Vertiefung bei Bedarf. So sinkt die Einstiegshürde, ohne Profifunktionen zu streichen.",
  },
  "ix-13": {
    frontQuestion: "Welches Prinzip verhindert vorhersehbare Fehler, statt nur danach zu warnen?",
    frontScenario: "Das Produkt lässt kein Enddatum vor dem Startdatum zu, statt erst später zu scheitern.",
    backInfo: "Error Prevention (Fehlervermeidung) — fängt vorhersehbare Fehler durch Einschränkungen, sinnvolle Standards, Vorschau und klare Auswahl ab. Vorbeugen schlägt nachträgliches Reparieren, wo Fehler absehbar sind.",
  },
  "ix-14": {
    frontQuestion: "Welches Prinzip hilft, Fehler leicht rückgängig zu machen?",
    frontScenario: "Sie löschen aus Versehen ein Board und brauchen sofort einen sicheren Weg zurück.",
    backInfo: "Forgiving Design (fehlertolerante Gestaltung) — unterstützt Erholung von normalen Fehlern durch Rückgängig, Wiederherstellen, Autosave, Papierkorb oder klare Wege zurück, wo immer das möglich ist.",
  },
  "ix-15": {
    frontQuestion: "Was lässt Nutzer sichtbare Objekte direkt anfassen und bewegen?",
    frontScenario: "Auf der Designfläche ziehen und skalieren Sie ein Objekt, statt alles über ein Formular zu steuern.",
    backInfo: "Direct Manipulation (direkte Manipulation) — handelt mit sichtbaren Objekten durch unmittelbares Tun mit sofortiger Rückmeldung. Fühlt sich oft natürlich an, braucht aber barrierefreie Alternativen zum Ziehen.",
  },
  "ix-16": {
    frontQuestion: "Was verändert dauerhaft die Wirkung gleicher Aktionen, bis man es umschaltet?",
    frontScenario: "Dieselbe Taste schreibt mal Text und löst mal Tastenkürzel aus, je nach aktivem Zustand.",
    backInfo: "Mode (Modus) — anhaltender Zustand, der gleiche Aktionen anders deutet. Versteckte Modi erzeugen Modusfehler, zeigen Sie den Modus klar an und bieten Sie einen leichten Ausstieg.",
  },
  "ix-17": {
    frontQuestion: "Was beschreibt den aktuellen Zustand einer Komponente oder eines Systems?",
    frontScenario: "Ein Knopf kennt Zustände wie Standard, Fokussiert, Gedrückt, Lädt, Deaktiviert oder Erfolgreich.",
    backInfo: "State (Zustand) — aktuelle Lage, die Darstellung und Verhalten bestimmt, etwa Laden, Ausgewählt, Deaktiviert, Leer oder Fehler. Gestalten Sie alle wichtigen Zustände explizit, damit keine Lücke entsteht.",
  },
  "ix-18": {
    frontQuestion: "Was zeigt ein leerer Bereich, damit Nutzer wissen, wie es weitergeht?",
    frontScenario: "Ein neues Projekt hat noch keine Aufgaben, eine leere weiße Fläche ließe Sie ratlos zurück.",
    backInfo: "Empty State (Leerzustand) — gestaltete Ansicht für fehlende Inhalte. Erklären Sie, wozu der Bereich dient, warum er leer ist und welcher sinnvolle nächste Schritt möglich ist.",
  },
  "ui-01": {
    frontQuestion: "Welches Prinzip lenkt den Blick über Größe, Gewicht und Abstände aufs Wichtigste?",
    frontScenario: "Ihr Dashboard enthält alle Infos, doch alles schreit gleich laut um Aufmerksamkeit.",
    backInfo: "Visual Hierarchy (visuelle Hierarchie) — ordnet Bedeutung über Größe, Schriftschnitt, Platzierung, Farbe und Abstände. Richten Sie sie an der Aufgabenpriorität aus, nicht an der Deko.",
  },
  "ui-02": {
    frontQuestion: "Welches Prinzip macht Unterschiede sichtbar, damit man Wichtiges trennen kann?",
    frontScenario: "Primär- und Sekundäraktionen sehen fast gleich aus, alle zögern vor dem Klick.",
    backInfo: "Contrast (Kontrast) — gezielter Unterschied in Größe, Stärke, Helligkeit, Form oder Abstand. Stützt Hierarchie und Unterscheidbarkeit, bei Farbe gelten zusätzlich Anforderungen an Barrierefreiheit.",
  },
  "ui-03": {
    frontQuestion: "Welches Gestaltprinzip gruppiert, was nah beieinander steht?",
    frontScenario: "Beschriftungen kleben näher am falschen Feld als an dem Feld, zu dem sie gehören.",
    backInfo: "Proximity (Nähe) — räumliche Nähe signalisiert Zusammengehörigkeit. Setzen Sie Abstände bewusst, damit Verwandtes Gruppen bildet und Fremdes getrennt bleibt.",
  },
  "ui-04": {
    frontQuestion: "Welches Prinzip schafft Ordnung über gemeinsame Kanten und Linien?",
    frontScenario: "Karten nutzen leicht versetzte linke Kanten und Grundlinien, das Layout wirkt kippelig.",
    backInfo: "Alignment (Ausrichtung) — platziert Elemente entlang gemeinsamer Linien und Achsen. Gute Ausrichtung schafft Beziehungen und Ruhe, ganz ohne sichtbare Rasterlinien.",
  },
  "ui-05": {
    frontQuestion: "Welches Prinzip schafft Zusammenhang durch bewusst wiederholte Muster?",
    frontScenario: "Jeder Einstellungsbereich erfindet eigene Titelstile und Trennlinien.",
    backInfo: "Repetition (Wiederholung) — nutzt Stil, Form und Abstände systematisch wieder. Schafft Rhythmus, Konsistenz und Lernbarkeit, wenn sie geplant statt zufällig entsteht.",
  },
  "ui-06": {
    frontQuestion: "Was gibt Inhalten Luft zum Atmen und trennt Gruppen klar?",
    frontScenario: "Eine dichte Preisseite wird deutlich lesbarer, sobald Abschnitte und Labels mehr Abstand bekommen.",
    backInfo: "Whitespace (Weißraum) — bewusst freier Raum für Gruppierung, Hierarchie und Lesbarkeit. Kein verschenkter Platz, sondern funktionales Gestaltungsmittel.",
  },
  "ui-07": {
    frontQuestion: "Was ordnet Layouts über Spalten, Zeilen und Abstände verlässlich an?",
    frontScenario: "Verschiedene Seiten sollen Inhalte bündig ausrichten, obwohl ihre Module wechseln.",
    backInfo: "Grid (Raster) — Struktursystem aus Spalten, Zeilen und Abständen für konsistente Anordnung. Gibt Halt und Proportionen vor, ohne jedes Element in gleiche Kästchen zu zwingen.",
  },
  "ui-08": {
    frontQuestion: "Was ersetzt beliebige Abstände durch wenige wiederverwendbare Stufen?",
    frontScenario: "Ihr Produkt nutzt 13, 17, 19 und 23 Pixel Lücken, die gleich wirken, aber schwer zu pflegen sind.",
    backInfo: "Spacing Scale (Abstandsskala) — feste Menge wiederverwendbarer Abstandswerte für Layouts und Komponenten. Sorgt für Rhythmus und Pflegeleichtigkeit, dokumentierte Ausnahmen bleiben möglich.",
  },
  "ui-09": {
    frontQuestion: "Was unterscheidet Überschriften, Fließtext und Hinweise nach Bedeutung?",
    frontScenario: "Eine lange Einstellungsseite nutzt für jede Zeile gleiche Größe und Stärke.",
    backInfo: "Typographic Hierarchy (typografische Hierarchie) — staffelt Schriftebenen über Größe, Schnitt, Abstände und Stil. Unterstützt Blickmuster und inhaltliche Struktur beim Überfliegen.",
  },
  "ui-10": {
    frontQuestion: "Was sorgt mit festen Schriftgrößen für ruhige Typografie im Produkt?",
    frontScenario: "Alle entwerfen ständig fast gleiche, aber leicht andere Größen für Titel und Labels.",
    backInfo: "Type Scale (Schriftgrößenskala) — festgelegte Größenstufen für klare Rollen im Interface. Sorgt für Konsistenz, das Verhältnis darf modular oder frei gewählt sein, solange es dem Interface dient.",
  },
  "ui-11": {
    frontQuestion: "Was steuert den vertikalen Abstand zwischen Textzeilen?",
    frontScenario: "Der Fließtext wirkt gequetscht, obwohl die Schriftgröße gut lesbar ist.",
    backInfo: "Line Height — Leading (Zeilenabstand) — vertikaler Abstand zwischen den Zeilen bzw. Grundlinien. Passende Werte verbessern die Lesbarkeit und hängen von Schrift, Größe, Zeilenlänge und Kontext ab.",
  },
  "ui-12": {
    frontQuestion: "Worauf achten Sie, damit lange Texte ohne große Augenbewegung lesbar bleiben?",
    frontScenario: "Auf einem breiten Bildschirm laufen Absätze fast über die volle Breite von 1600 Pixeln.",
    backInfo: "Line Length (Zeilenlänge) — Breite einer Textzeile, oft in Zeichen pro Zeile beschrieben. Angenehme Bereiche hängen von Schrift und Kontext ab, behandeln Sie keine einzelne Zeichenzahl als starres Gesetz.",
  },
  "ui-13": {
    frontQuestion: "Was passt Layouts an verschiedene Bildschirmgrößen an statt einer starren Fläche?",
    frontScenario: "Dasselbe Produkt soll auf Handy, Tablet und großem Monitor gut nutzbar bleiben.",
    backInfo: "Responsive Design (responsives Design) — gestaltet Interfaces anpassungsfähig über flexible Layouts, Media- und Container-Queries sowie Komponentenverhalten. Mehr als nur das Verkleinern des Desktops.",
  },
  "ui-14": {
    frontQuestion: "Was markiert die Stelle, an der ein Layout bewusst sein Verhalten ändert?",
    frontScenario: "Zwei Spalten in den Einstellungen werden einspaltig, sobald der Platz nicht mehr reicht.",
    backInfo: "Breakpoint (Umbruchpunkt) — Breite oder Bedingung, ab der sich Layoutregeln ändern. Leiten Sie ihn aus Inhalt und Komponenten ab, nicht nur aus Gerätenamen.",
  },
};
