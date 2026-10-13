import type { CardOverride } from '../cardOverrides';

export const de05: Record<string, CardOverride> = {
  "ui-15": {
    frontQuestion: "Was ist die UI-Dichte einer Oberfläche?",
    frontScenario: "Sie vergleichen ein kompaktes Handelsterminal mit engen Tabellen und einen einfachen Fragebogen für Neulinge mit viel Luft um jedes Feld.",
    backInfo: "UI Density (UI-Dichte) — wie viele Informationen und Bedienelemente auf einer Fläche stecken. Wählen Sie die Dichte nach Aufgabe: kompakt für erfahrene Profis im Dauereinsatz, großzügig für Einsteiger und seltene Abläufe. Berücksichtigen Sie Erfahrung, Gerät, Nutzungshäufigkeit und Fehlerkosten; mehr Weißraum ist nicht automatisch besser.",
  },
  "ui-16": {
    frontQuestion: "Was sind semantische Farbrollen?",
    frontScenario: "Sie bereiten einen Relaunch mit hellem und dunklem Modus vor. Text und Akzente sollen automatisch umschalten, statt als fest verdrahtetes „Blau-500“ im Code zu stehen.",
    backInfo: "Semantic Color Roles (semantische Farbrollen) — Farben werden nach Funktion vergeben: Hintergrund, Text, Akzent, Erfolg, Warnung und Gefahr, statt nach beliebigem Hex-Wert. Rollen erleichtern Theming, Barrierefreiheit und Konsistenz im Designsystem. Komponenten verweisen auf die Rolle, den konkreten Wert liefert das aktive Theme.",
  },
  "ds-01": {
    frontQuestion: "Was ist ein Designsystem?",
    frontScenario: "Fünf Teams bauen Knöpfe und Formulare jedes Mal anders. Das Produkt zerfällt optisch und technisch — Sie wollen dauerhaft Ordnung schaffen.",
    backInfo: "Design System (Designsystem) — das gemeinsame System aus wiederverwendbaren Grundlagen, Komponenten, Mustern, Dokumentation und Pflegeregeln. Es ist mehr als ein UI-Kit, denn Steuerung, Wartung und Einführung gehören dazu. Nutzen Sie es, um im großen Maßstab einheitlich und schnell zu bauen.",
  },
  "ds-02": {
    frontQuestion: "Was ist ein Design-Token?",
    frontScenario: "Statt den Farbwert „111111“ an Dutzenden Stellen fest zu verdrahten, wollen Sie ihn einmal zentral unter einem klaren Namen pflegen.",
    backInfo: "Design Token (Design-Token) — benannter Wert für eine wiederverwendbare Designentscheidung: Farbe, Abstand, Schrift oder Animationsdauer, unabhängig von einer einzelnen Komponente. Moderne Token enthalten Typ, Wert, Beschreibung und Verweise. So ändern Sie Stile zentral und rollen Themes auf allen Plattformen aus.",
  },
  "ds-03": {
    frontQuestion: "Welcher Token speichert einen Rohwert ohne Verwendungszweck?",
    frontScenario: "In der Palette liegt ein Farbton wie „Blau-600“, auf den andere Token verweisen. Für sich allein sagt er noch nichts über seine Aufgabe aus.",
    backInfo: "Primitive / Reference Token (Primitiv-Token) — Basistoken mit Rohwert, etwa einer Palettenfarbe oder einem Abstandsschritt. Es beschreibt noch keine UI-Funktion. Verwenden Sie Primitive nicht direkt in Komponenten, wenn semantische Rollen bereitstehen. So bleibt das Theming flexibel.",
  },
  "ds-04": {
    frontQuestion: "Was ist ein semantischer Token?",
    frontScenario: "Derselbe „primäre Text“ soll im hellen Modus dunkel und im dunklen Modus hell erscheinen — ohne dass Sie Komponenten anfassen müssen.",
    backInfo: "Semantic Token (semantischer Token) — Token, das nach Zweck benannt ist, etwa „text-primary“ oder „surface-danger“, statt nach Rohwert. Der konkrete Wert kann je Theme wechseln, die Bedeutung bleibt gleich. Setzen Sie semantische Token in Komponenten ein, damit Design und Entwicklung dieselbe Zwecksprache sprechen.",
  },
  "ds-05": {
    frontQuestion: "Was ist ein Token-Alias?",
    frontScenario: "Ihr „primärer Text“ soll immer der aktuellen neutralen Vordergrundfarbe folgen, statt deren Wert von Hand zu kopieren.",
    backInfo: "Token Alias / Reference (Token-Alias) — Mechanismus, bei dem ein Token auf ein anderes Token verweist, statt den Rohwert zu doppeln. So entstehen Beziehungen zwischen den Token-Ebenen, und Änderungen laufen konsistent durch. Nutzen Sie Aliasse, damit sich Themes zuverlässig und einheitlich aktualisieren.",
  },
  "ds-06": {
    frontQuestion: "Was ist ein Modus oder Theme im Designsystem?",
    frontScenario: "Die Fläche „surface-default“ braucht tagsüber einen hellen und nachts einen dunklen Wert, während die Komponenten gleich bleiben.",
    backInfo: "Mode / Theme (Modus, Theme) — zusammengehörige Token-Werte und Stilregeln für einen visuellen Kontext: hell, dunkel oder kontrastreich. Komponenten sollten sich auf die inhaltliche Absicht stützen, nicht auf fest verdrahtete Theme-Werte. So fügen Sie später neue Themes hinzu, ohne Komponenten umzubauen.",
  },
  "ds-07": {
    frontQuestion: "Was ist eine Komponente?",
    frontScenario: "Sie zeichnen Knöpfe, Checkboxen und Dialoge zum dritten Mal je Bildschirm neu — und merken: So geht es nicht weiter.",
    backInfo: "Component (Komponente) — wiederverwendbarer Baustein mit fester Struktur, Zuständen und Verhalten. Eine gute Komponente hat einen klaren Zweck und dokumentierte Regeln. Legen Sie Komponenten an, weil sie ein wiederkehrendes Problem lösen, nicht nur weil Elemente ähnlich aussehen.",
  },
  "ds-08": {
    frontQuestion: "Was ist eine Variante einer Komponente?",
    frontScenario: "Ein Knopf kann primär oder sekundär, klein oder groß sein — und bleibt doch derselbe Knopf mit gleichem Grundverhalten.",
    backInfo: "Variant (Variante) — zulässige Ausprägung innerhalb einer Komponentenfamilie: Größe, Hierarchie oder Zustand, ohne eigene, losgelöste Komponente. Pflegen Sie nur sinnvolle, unterstützte Unterschiede, nicht jede zufällige Optikkombination.",
  },
  "ds-09": {
    frontQuestion: "Was beschreibt die API einer Komponente?",
    frontScenario: "Design und Entwicklung streiten über einen Dialog: Welche Größen, Titel, Aktionen und welches Schließverhalten sind erlaubt?",
    backInfo: "Component API (Komponenten-API) — dokumentierte Eigenschaften, Zustände, Slots und Verhalten, mit denen Teams eine Komponente konfigurieren. Eine klare API verringert Sonderlösungen und richtet Design und Code aufeinander aus. Prüfen Sie erst den Vertrag, bevor Sie eine Ausnahme bauen.",
  },
  "ds-10": {
    frontQuestion: "Was ist ein UI-Pattern?",
    frontScenario: "Die Suche mit Filtern, leerem Ergebnis und Blätterfunktion taucht in mehreren Produkten fast identisch auf.",
    backInfo: "UI Pattern (UI-Muster) — wiederverwendbare Lösung aus mehreren Komponenten und Verhalten für ein wiederkehrendes Nutzerproblem. Pattern sind größer und kontextgebundener als einzelne Steuerelemente. Dokumentieren Sie, wann das Muster passt und wann nicht.",
  },
  "ds-11": {
    frontQuestion: "Was regelt die Governance eines Designsystems?",
    frontScenario: "Jede Person darf die Bibliothek ändern, doch niemand verantwortet Qualität, Barrierefreiheit, Releases oder große Umbauten.",
    backInfo: "Design System Governance (Steuerung des Designsystems) — Rollen, Entscheidungswege und Pflegeregeln, die das System dauerhaft stimmig halten. Gute Governance ermöglicht Beiträge, ohne die Verantwortung zu verwässern. Legen Sie fest, wer entscheidet, prüft und freigibt.",
  },
  "ds-12": {
    frontQuestion: "Welcher Prozess bringt Team-Ideen ins gemeinsame System?",
    frontScenario: "Ein Team baut ein Datumsbereichs-Muster, das sechs weiteren Teams nützen könnte — statt als lokale Kopie zu versanden.",
    backInfo: "Contribution Model (Beitragsmodell) — festgelegter Ablauf, um Ergänzungen vorzuschlagen, zu prüfen, zu bauen, zu dokumentieren und zu veröffentlichen. Es verbindet zentrale Qualität mit verteilter Fachkenntnis. Nutzen Sie es, statt lokale Abspaltungen zu pflegen.",
  },
  "ds-13": {
    frontQuestion: "Wozu dient Versionierung im Designsystem?",
    frontScenario: "Schon das Umbenennen einer Komponenten-Eigenschaft könnte Dutzende Produkt-Umsetzungen lahmlegen.",
    backInfo: "Versioning (Versionierung) — Praxis, verträgliche, erweiternde und große Änderungen über Releases verständlich zu kommunizieren. Klare Release-Notizen zeigen, was verträglich bleibt und was Migration verlangt. So können Teams Updates planen, statt von Umbauten überrascht zu werden.",
  },
  "ds-14": {
    frontQuestion: "Was bedeutet Deprecation bei Komponenten oder Token?",
    frontScenario: "Eine alte Eingabekomponente steckt noch in vielen Produkten, soll aber durch die neue barrierefreie Version ersetzt werden.",
    backInfo: "Deprecation (Abkündigung) — Kennzeichnung einer API, Komponente oder eines Tokens als veraltet, mit Begründung, Ersatz und Migrationspfad. Kündigen Sie rechtzeitig an und begleiten Sie den Umstieg. Stilles Löschen erzeugt vermeidbare Brüche.",
  },
  "ds-15": {
    frontQuestion: "Was heißt Design-Code-Parität?",
    frontScenario: "In Figma zeigt der Knopf fünf Varianten, im Code stecken acht Verhalten mit anderen Namen — niemand weiß mehr, was gilt.",
    backInfo: "Design–Code Parity (Design-Code-Parität) — dokumentierte Designkomponente und produktiver Code bilden dieselbe unterstützte Struktur, Eigenschaften und Zustände ab. Reine Optik reicht nicht; auch Props, Zustände und Verhalten müssen übereinstimmen. Prüfen Sie beide Seiten regelmäßig gegeneinander.",
  },
  "ds-16": {
    frontQuestion: "Was prüft visuelles Regressionstesten?",
    frontScenario: "Nach einem Update der Abhängigkeiten verschieben sich unbemerkt die Abstände in sämtlichen Formularfeldern.",
    backInfo: "Visual Regression Testing (visuelles Regressionstesten) — automatisierter Vergleich gerenderter Oberflächen mit erwarteten Bildern, um unbeabsichtigte Stil- und Layoutänderungen zu finden. Es ergänzt Funktions- und Barrierefreiheitstests, ersetzt sie aber nicht. Pflegen Sie stabile Referenzbilder und prüfen Sie Abweichungen gezielt.",
  },
  "a11y-01": {
    frontQuestion: "Was bedeutet inklusives Design?",
    frontScenario: "Bei der Identitätsprüfung denken Sie von Anfang an mit: an dauerhafte, vorübergehende und situative Einschränkungen — nicht nur an „durchschnittliche“ Nutzer.",
    backInfo: "Inclusive Design (inklusives Design) — Gestaltung für vielfältige Fähigkeiten, Kontexte und Ausschlussrisiken, statt nur für angenommene Durchschnittsnutzer. Barrierefreiheit nach Standards ist ein wichtiger Baustein, doch inklusives Design reicht weiter als reine Pflichterfüllung. Beziehen Sie Betroffene früh ein und prüfen Sie Teilhabe im Alltag.",
  },
  "a11y-02": {
    frontQuestion: "Nach welchen vier Prinzipien ordnet die WCAG ihre Anforderungen?",
    frontScenario: "Ihr Team will das Grundmodell hinter Web-Barrierefreiheit verstehen, statt einzelne Kriterien auswendig zu lernen.",
    backInfo: "POUR — Perceivable, Operable, Understandable, Robust (wahrnehmbar, bedienbar, verständlich, robust) — die vier WCAG-Prinzipien: Inhalte und Oberfläche müssen wahrnehmbar, bedienbar, verständlich und robust sein. Alle Erfolgskriterien hängen unter diesen Prinzipien. Nutzen Sie POUR als Prüfraster für jede neue Funktion.",
  },
  "a11y-03": {
    frontQuestion: "Warum sollten Sie zuerst semantisches HTML nutzen statt ARIA?",
    frontScenario: "Ein Klickfeld wurde aus einem gestylten „div“ gebaut. Nun fehlt Tastatur- und Screenreader-Verhalten, das ein natives Element gratis mitbringt.",
    backInfo: "Semantic HTML (semantisches HTML) — native Elemente ihrer Bedeutung nach einsetzen: Knöpfe, Überschriften, Listen und Formularfelder. Sie liefern tragfähige Semantik und Bedienung für assistive Technik. Greifen Sie erst zu Skripten und Sonderlösungen, wenn native Elemente die Aufgabe wirklich nicht ausdrücken können.",
  },
  "a11y-04": {
    frontQuestion: "Was ist der barrierefreie Name eines Elements?",
    frontScenario: "Ein Schließen-Knopf nur mit Icon ist sichtbar, doch der Screenreader meldet bloß „Knopf“ — ohne Zweck.",
    backInfo: "Accessible Name (barrierefreier Name) — der programmatisch ermittelte Name, den assistive Technik ansagt. Er stammt aus sichtbarem Text, Beschriftung, „alt“, „aria-label“ oder anderen Quellen der Namensberechnung. Achten Sie darauf, dass der Name den Zweck des Steuerelements trifft.",
  },
  "a11y-05": {
    frontQuestion: "Was heißt Tastaturzugänglichkeit?",
    frontScenario: "Eine Person bedient Formulare und Dialoge vollständig mit Tastatur oder Schalter — ganz ohne Maus.",
    backInfo: "Keyboard Accessibility (Tastaturzugänglichkeit) — alle wesentlichen Funktionen lassen sich auch ohne Maus erreichen und bedienen. Vermeiden Sie Tastaturfallen und setzen Sie erwartetes Tastenverhalten für eigene Widgets um. Testen Sie jeden Ablauf einmal nur mit Tastatur.",
  },
  "a11y-06": {
    frontQuestion: "Wozu dient eine sichtbare Fokusanzeige?",
    frontScenario: "Sie springen mit Tab durch Knöpfe, doch der Entwurf hat den Browser-Rahmen entfernt — ohne Ersatz. Niemand sieht, wo der Fokus steht.",
    backInfo: "Visible Focus Indicator (sichtbare Fokusanzeige) — wahrnehmbare Gestaltung, die Tastaturnutzern den aktuellen Fokus zeigt. Entfernen Sie die Fokuskennzeichnung nie, ohne eine ausreichend sichtbare Alternative zu liefern. Prüfen Sie die Anzeige auf allen Hintergründen.",
  },
  "a11y-07": {
    frontQuestion: "Was bedeutet eine logische Fokusreihenfolge?",
    frontScenario: "Die Kasse wurde optisch umsortiert: Mit Tab springen Sie von der Zahlung zurück zum Versand und dann in die Kopfzeile.",
    backInfo: "Logical Focus Order (logische Fokusreihenfolge) — die Tastaturfolge bewahrt Sinn und Bedienbarkeit der Oberfläche. Visuelle Umsortierung per CSS darf keine verwirrende Tab-Folge erzeugen. Bringen Sie Quellreihenfolge, Optik und Fokus in Einklang.",
  },
  "a11y-08": {
    frontQuestion: "Was prüft das Textkontrastverhältnis nach WCAG?",
    frontScenario: "Hellgrauer Fließtext auf Weiß wirkt elegant, doch viele Menschen können ihn kaum lesen.",
    backInfo: "Text Contrast Ratio (Textkontrastverhältnis) — Maß dafür, wie gut sich Text vom Hintergrund abhebt. WCAG 2.2 Stufe AA verlangt meist mindestens 4,5:1 für normalen Text und 3:1 für großen Text, mit definierten Ausnahmen. Der Wert beruht auf relativer Luminanz, nicht auf Gefühl. Messen Sie echte Text-Hintergrund-Paare.",
  },
  "a11y-09": {
    frontQuestion: "Was fordert der Non-text Contrast der WCAG?",
    frontScenario: "Rahmen von Eingabefeldern und Bedienelementen sind so blass, dass niemand erkennt, wo man überhaupt ansetzen kann.",
    backInfo: "Non-text Contrast (Nicht-Text-Kontrast) — WCAG-Kriterium für wichtige Komponentengrenzen und Grafikobjekte, nicht nur für Schrift. Es verlangt meist 3:1 zu Nachbarfarben, wo das Kriterium greift. Prüfen Sie Rahmen, Icons mit Bedeutungsfunktion und Fokusindikatoren.",
  },
  "a11y-10": {
    frontQuestion: "Was verlangt Target Size (Minimum) nach WCAG 2.5.8?",
    frontScenario: "Winzige Icon-Knöpfe kleben auf dem Smartphone dicht an dicht — Vertipper sind vorprogrammiert.",
    backInfo: "Target Size (Minimum) — WCAG 2.5.8 (Zielgröße, Minimum) — Zeigerziele brauchen in Stufe AA mindestens 24 × 24 CSS-Pixel oder zulässige Abstände und Ausnahmen. Größere Ziele bleiben oft die bessere Wahl für Bedienkomfort. Prüfen Sie Dichte, Abstand und echte Fingerbedienung.",
  },
  "a11y-11": {
    frontQuestion: "Was verlangt Dragging Movements nach WCAG 2.5.7?",
    frontScenario: "Einträge lassen sich nur per Ziehen mit gedrückter Maustaste sortieren — für manche Menschen kaum machbar.",
    backInfo: "Dragging Movements — WCAG 2.5.7 (Ziehbewegungen) — wenn eine Funktion Ziehen nutzt, braucht sie zusätzlich eine einfache Zeigeralternative wie Knöpfe oder Menüs, außer Ziehen ist wesentlich oder Sache des Browsers. Bieten Sie etwa Pfeilknöpfe zum Sortieren an.",
  },
  "a11y-12": {
    frontQuestion: "Was gehört in einen Alternativtext für Bilder?",
    frontScenario: "Ein Diagramm zeigt die Quartalsumsätze, doch ohne Beschreibung bleibt es für alle unsichtbar, die es nicht sehen können.",
    backInfo: "Alt Text — Text Alternative (Alternativtext) — kurze Alternative, die Zweck oder relevanten Inhalt eines bedeutungstragenden Bildes vermittelt. Rein dekorative Bilder sollten assistive Technik hingegen überspringen, statt sie mit Belanglosem zu behelligen. Schreiben Sie knapp und auf den Kontext bezogen.",
  },
  "a11y-13": {
    frontQuestion: "Wozu dienen Untertitel bei Videos?",
    frontScenario: "Ein Produkt-Tutorial erklärt entscheidende Schritte nur per Tonspur — wer nichts hört, verliert den Faden.",
    backInfo: "Captions (Untertitel) — synchronisierter Text für Sprache und relevante Geräusche im Video. Je nach Inhalt und Kriterium kommen Transkript oder Audiodeskription hinzu. Planen Sie Untertitel von Anfang an ein, statt sie später mühsam zu ergänzen.",
  },
  "a11y-14": {
    frontQuestion: "Wie berücksichtigen Sie den Wunsch nach reduzierter Bewegung?",
    frontScenario: "Ein Onboarding mit starkem Parallax-Effekt lässt manche Nutzer schwindelig zurück.",
    backInfo: "Reduced Motion (reduzierte Bewegung) — Vorliebe wie „prefers-reduced-motion“ respektieren und nicht nötige Bewegung entfernen oder dämpfen. Wichtige Zustandswechsel müssen auch ohne große Animation verständlich bleiben. Bieten Sie eine ruhige Darstellung als Standardalternative an.",
  },
  "a11y-15": {
    frontQuestion: "Was ist ARIA und wann brauchen Sie es?",
    frontScenario: "Eine eigene Baumansicht muss Rollen, Zustände und Beziehungen programmatisch an assistive Technik melden.",
    backInfo: "ARIA — Accessible Rich Internet Applications (barrierefreie interaktive Anwendungen) — Spezifikation für Rollen, Zustände und Eigenschaften, wenn natives HTML ein eigenes Widget nicht korrekt ausdrückt. Es gilt: Kein ARIA ist besser als falsches ARIA. Nutzen Sie zuerst native Semantik mit eingebautem Verhalten.",
  },
  "a11y-16": {
    frontQuestion: "Was verlangt Accessible Authentication nach WCAG 3.3.8?",
    frontScenario: "Der Login zwingt alle, ein Passwort auswendig zu wissen und einen Einmalcode abzutippen — Passwortmanager und Einfügen sind gesperrt.",
    backInfo: "Accessible Authentication — WCAG 3.3.8 (barrierefreie Anmeldung) — die Anmeldung darf keine Gedächtnis- oder Umschreibetests verlangen, wenn barrierefreie Alternativen möglich sind. Erlauben Sie Hilfen wie Passwortmanager, Kopieren und Einfügen, statt sie unnötig zu blockieren. Prüfen Sie den Ablauf ohne Auswendiglernen.",
  },
  "a11y-17": {
    frontQuestion: "Was verlangt Redundant Entry nach WCAG 3.3.7?",
    frontScenario: "Die Kasse fragt auf zwei Folgebildschirmen erneut nach derselben Adresse, die schon eingegeben wurde.",
    backInfo: "Redundant Entry — WCAG 3.3.7 (doppelte Eingabe) — bereits eingegebene Daten dürfen im selben Vorgang nicht erneut verlangt werden. Füllen Sie sie automatisch aus oder bieten Sie Auswahl an, außer es gibt wesentliche Gründe oder Sicherheitsgründe. So sparen Sie Zeit und vermeiden Fehler.",
  },
  "a11y-18": {
    frontQuestion: "Was bedeutet Reflow für Barrierefreiheit?",
    frontScenario: "Bei 400 % Zoom überlagern sich Beschriftungen, und jede Zeile verlangt waagerechtes Schieben.",
    backInfo: "Reflow (Umbruch) — Inhalte bleiben nutzbar, wenn Nutzer zoomen oder der Darstellungsbereich schmal wird: gewöhnlicher Text kommt ohne zweidimensionales Scrollen aus, außer zweidimensionales Layout ist wirklich nötig. Prüfen Sie schmale Breiten auf Informationsverlust und Bedienbarkeit.",
  },
  "dl-01": {
    frontQuestion: "Was ist das Product Backlog in Scrum?",
    frontScenario: "Neue Erkenntnisse verändern ständig, was Ihr Team als Nächstes bauen oder reparieren sollte — Sie brauchen eine einzige verlässliche Quelle.",
    backInfo: "Product Backlog (Produkt-Backlog) — geordnete, lebendige Liste aller Arbeit, die das Produkt verbessern soll. Es ist die einzige Arbeitsquelle des Scrum-Teams und wächst mit jeder Erkenntnis. Pflegen Sie Ordnung und Klarheit laufend.",
  },
  "dl-02": {
    frontQuestion: "Was enthält das Sprint Backlog?",
    frontScenario: "Während des Sprints lernen die Entwickler dazu und passen ihren Plan an — das Ziel des Sprints bleibt trotzdem fest.",
    backInfo: "Sprint Backlog (Sprint-Backlog) — Plan der Developer: Sprint-Ziel, ausgewählte Product-Backlog-Einträge und umsetzbarer Lieferplan. Es wird während des Sprints fortlaufend aktualisiert. So bleibt die Arbeit transparent und steuerbar.",
  },
  "dl-03": {
    frontQuestion: "Was ist ein Sprint in Scrum?",
    frontScenario: "Ihr Team arbeitet in festen Zweiwochenrhythmen mit Planung, Tagesgeschäft, Review und Retrospektive.",
    backInfo: "Sprint (Sprint) — festes Zeitfenster von höchstens einem Monat, das Ideen in Wert verwandelt und alle anderen Scrum-Termine enthält. Ein neuer Sprint beginnt direkt nach dem vorherigen. Klären Sie den Umfang, ohne das Sprint-Ziel zu gefährden.",
  },
  "dl-04": {
    frontQuestion: "Wozu dient das Sprint-Ziel?",
    frontScenario: "Mehrere Backlog-Einträge wackeln, doch das Team braucht einen tragenden Grund, warum dieser Sprint zählt.",
    backInfo: "Sprint Goal (Sprint-Ziel) — einziges Ziel des Sprints. Es gibt Zusammenhang und Fokus, lässt aber Spielraum bei der genauen Arbeit. Verhandeln Sie den Umfang notfalls neu, ohne das Ziel zu opfern.",
  },
  "dl-05": {
    frontQuestion: "Was legt die Definition of Done fest?",
    frontScenario: "Ein Team nennt eine Funktion „fertig“ vor dem Barrierefreiheitstest, ein anderes erst mit allen Freigabeprüfungen.",
    backInfo: "Definition of Done (Fertigstellungsdefinition) — gemeinsame Qualitätsverpflichtung: Was muss stimmen, damit Arbeit als fertig gilt. Sie schafft Transparenz über den Zustand des Inkrements. Halten Sie die Messlatte releasefähig und für alle gleich.",
  },
  "dl-06": {
    frontQuestion: "Was geschieht beim Product Backlog Refinement?",
    frontScenario: "Eine große vage Anfrage wird besprochen, zerlegt und geklärt, bevor das Team sie überhaupt für einen Sprint in Betracht zieht.",
    backInfo: "Product Backlog Refinement (Produkt-Backlog-Pflege) — laufende Aktivität, um Einträge zu zerlegen und genauer zu fassen: Beschreibung, Reihenfolge und Größe. Es ist kein formales Scrum-Ereignis. Investieren Sie regelmäßig kleine Einheiten, statt vor der Planung alles auf einmal zu klären.",
  },
  "dl-07": {
    frontQuestion: "Was passiert im Sprint Review?",
    frontScenario: "Das Team zeigt erarbeitete Ergebnisse und bespricht mit Stakeholdern veränderte Marktlage und nächste Schritte.",
    backInfo: "Sprint Review (Sprint-Review) — Scrum-Termin gegen Ende des Sprints: Ergebnis prüfen und Product Backlog aus neuer Erkenntnis anpassen. Es ist eine Arbeitssitzung, keine reine Präsentationszeremonie. Laden Sie die richtigen Stakeholder ein und entscheiden Sie gemeinsam, was folgt.",
  },
  "dl-08": {
    frontQuestion: "Wozu dient die Sprint-Retrospektive?",
    frontScenario: "Nach der Lieferung spricht das Team über Zusammenarbeit, Prozesse und Werkzeuge — und wie die nächste Runde besser läuft.",
    backInfo: "Sprint Retrospective (Sprint-Retrospektive) — Ereignis zur Prüfung des Sprint-Verlaufs und zur Planung von Verbesserungen für Qualität und Wirksamkeit. Im Mittelpunkt steht die Arbeitsweise des Teams, nicht das Produktergebnis. Vereinbaren Sie wenige, umsetzbare Verbesserungen.",
  },
  "dl-09": {
    frontQuestion: "Was ist eine User Story?",
    frontScenario: "Ein Backlog-Eintrag soll zeigen, wer was wozu braucht — ohne gleich zur vollständigen Spezifikation zu werden.",
    backInfo: "User Story (User Story) — kurzes agiles Anforderungsformat, meist „Als …, möchte ich …, damit …“. Es soll das Gespräch über Nutzen und Bedarf auslösen. Die Schablone ist Kür, nicht Pflicht; Akzeptanzkriterien und gemeinsames Verständnis ersetzen sie nicht.",
  },
  "dl-10": {
    frontQuestion: "Was beschreiben Akzeptanzkriterien?",
    frontScenario: "Design und Entwicklung streiten, ob ein leeres Suchergebnis schon als fertiges Verhalten zählt.",
    backInfo: "Acceptance Criteria (Akzeptanzkriterien) — prüfbare Bedingungen, die ein einzelner Backlog-Eintrag erfüllen muss. Sie klären erwartetes Verhalten und Randfälle. Anders als die Definition of Done gelten sie nur für diesen Eintrag. Formulieren Sie sie testbar und eindeutig.",
  },
  "dl-11": {
    frontQuestion: "Was ist Kanban?",
    frontScenario: "Ein Support- und Produktteam bewältigt einen stetigen Strom wechselnder Aufgaben und will den Fluss stetig verbessern.",
    backInfo: "Kanban (Kanban) — flussbasierte Methode, die Arbeit sichtbar macht und fortlaufend steuert, statt feste Sprints zu verlangen. Begrenzen Sie parallele Arbeit und verbessern Sie den Durchfluss. Kanban lässt sich gut mit anderen agilen Praktiken verbinden.",
  },
  "dl-12": {
    frontQuestion: "Wozu dient ein WIP-Limit?",
    frontScenario: "Zehn Aufgaben stehen auf „in Arbeit“, Blockaden häufen sich — und fast nichts wird wirklich fertig.",
    backInfo: "WIP Limit — Work in Progress Limit (Begrenzung paralleler Arbeit) — ausdrückliche Obergrenze für gleichzeitig aktive Einträge in einem Workflow-Zustand. Sie legt Engpässe offen, bremst Multitasking und glättet den Fluss. Senken Sie das Limit schrittweise und beseitigen Sie die sichtbar gewordenen Hürden.",
  },
  "dl-13": {
    frontQuestion: "Was misst die Cycle Time?",
    frontScenario: "Ein Eintrag liegt einen Monat im Backlog und braucht dann vom Entwicklungsstart vier Tage bis zur Fertigstellung.",
    backInfo: "Cycle Time (Durchlaufzeit im Fluss) — vergangene Zeit vom tatsächlichen Arbeitsbeginn bis zum Abschluss, nach Workflow-Definition. Sie zeigt den aktiven Lieferfluss und unterscheidet sich von der gesamten Vorlaufzeit. Messen Sie sie stabil, um Engpässe und Schwankungen zu erkennen.",
  },
  "dl-14": {
    frontQuestion: "Was misst die Lead Time?",
    frontScenario: "Ein Kundenwunsch wartet drei Wochen auf Umsetzung und braucht dann vier Tage bis zur Auslieferung.",
    backInfo: "Lead Time (Vorlaufzeit) — Gesamtzeit vom definierten Anfrage- oder Zusagestart bis zur Lieferung, einschließlich Wartezeit vor Arbeitsbeginn. Sie spiegelt die gefühlte Wartezeit der Kundschaft stärker als die reine Cycle Time. Legen Sie Start- und Endpunkt vor dem Messen eindeutig fest.",
  },
};
