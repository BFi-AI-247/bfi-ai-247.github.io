# Skillbook: Design-Verfahren für Live-Web-Bestände (generisch)

**Status:** Skillbook generisch (anbietbar) · **Quelle:** r-3-design-runbook (Skill-Bestand, jede Regel aus echten Vorfällen) · **Autor-Instanz:** Kanon_Sync (Destillation, RUN-ID SKILL-V3-2809, Welle 3) · **Trenn-Stempel:** Kapsel-Inhalt (konkrete Farb-Historien, Commits, Ableger-Designs, Vorlagen-Pfade, Farb-Werte, Projekt-Rollen) separat abgelegt im Kapsel-Teil; dieser Teil ist werkzeug- und projektneutral.

## Maschinen-Gates (vor JEDEM Design-Commit)

1. **GATE Bestand:** Vor jedem Neubau (Grafik, Banner, Navigations-Element): Bestands-SVGs/CSS suchen (Wortmarken, Icons, Header, bestehende Templates) und übernehmen, bevor etwas neu gebaut wird. Eigenbau statt Bestandsnutzung ist der klassische Fehltritt.
2. **GATE Inhaltskanal:** Inhalte NIE über Web-Abruf — Proxy streut Zeilenumbrüche. Blob-API oder Commit-Ketten-Rekonstruktion mit hunk-exaktem Patch-Anwenden. Cache-Falle: immer frisches Blob-SHA vor jedem Schreiben (vom Hauptzweig).
3. **GATE Umbruch-Scan:** Vor dem Commit prüfen: keine Zeilenumbrüche mitten in Tags/hrefs/URLs, keine In-Word-Brüche (Zeile endet auf Buchstabe, nächste beginnt mit Buchstabe).
4. **GATE Nicht-Veröffentlichen-Präfix:** Jeder Design-Commit trägt das Kennzeichnungs-Präfix als ERSTES in der Message (verhindert Selbst-Triggerung des Social-Publish-Guards — die Pfad-Logik greift sonst; Testdateien in Pfad-Nähe sind die klassische Falle).
5. **GATE Diff:** Nach JEDEM Commit Patch-Abfrage laden und verifizieren: nur Zielzeilen im Diff, keine Streu-Änderungen, bestehende Einträge unberührt. Der Diff ist auch Beweis-Instanz bei widersprüchlichen Annahmen — bei Widerspruch gewinnt der Blob.

## Design-Verfahren

- **Prototyp-zuerst (Standard-Zyklus):** (1) Anforderung klären, echte Wahlmöglichkeiten im Dialog mit dem Betreiber einholen; (2) Prototyp als Testdatei committen (Test-/Kandidat-Suffix, Nicht-Veröffentlichen-Präfix, von Suchmaschinen ferngehalten, Titel-Kennzeichnung, nicht verlinkt); (3) Betreiber-Sichtung → Freigabe; (4) Live-Überführung als eigener Commit, byte-verifiziert; (5) Testdatei bleibt bis expliziter Lösch-Auftrag. Der Prototyp ist der Beweis, das Live-Commit die Folgerung.
- **Blob-Lesetechnik für Dateien ohne direkte Content-Rückgabe:** Commit-Liste (Pfad-Filter, seitenweise bis leer), älteste zuerst, je Commit mit vollem Patch, Patch-Parser (Hunk: Leerzeichen = Kontext / + = neu / − = alt; Hunk-Ende bei Zeile ohne Präfix; Marker-Zeilen ignorieren; bei neu angelegten Dateien nur die +-Zeilen nehmen), Hunks von hinten nach vorn anwenden (alte Indizes bleiben stabil), exakte Match-Prüfung vor jedem Einfügen (mismatch = abbrechen, nie angleichen). Zwei Fallen: (a) leeren Patch-Kontext nicht als Header fressen lassen; (b) In-Word-Brüche können im Blob ECHT sein — bewiesene Fixes nur mit Blob-Abgleich, zweifelhafte mit Umbruch-Scan bewerten.
- **Übersetzungs-Disziplin Feedback→Werte:** Verbales Betreiber-Feedback nie wörtlich als Text übernehmen, sondern in konkrete Werte übersetzen (Farbangaben, Zeilen-/Satz-Budgets). Ergebnis mit konkreten Werten rückmelden, damit der Betreiber korrigieren kann.
- **Derivat-Trennung:** Parallele Ableger-Ausgaben nutzen komplett getrennte Designs — nie Regeln von einem Ableger in einen anderen kopieren; Analogien heißen „im Stil von", nicht „Kopie von". Haupt-Dateien nur auf ausdrücklichen Auftrag.
- **Vorlagen-Hebel:** Fehlt eine Struktur in ALLEN künftigen Ausgaben, die Vorlage patchen — NICHT die automatisierten Jobs; Jobs folgen den Vorlagen. Effekt über alle Ausgaben, ein Commit.

## Erste-Hilfe-Blatt: Typische Fehlerbilder

1. **„CSS greift nicht"** — Prüfweg: (a) Pfad stimmt? (Relativeben vs. Stammverzeichnis, Unterordner; falsch verlinkte Datei ist belegt); (b) Selektor-Problem? (Klasse im Zusatz-CSS erst NACH dem Haupt-CSS einbinden); (c) Trigger-Falle? (Testdatei in Pfad-Nähe ohne Präfix → Publish-Guard läuft an).
2. **„Proxy-Streuung vs. echter Defekt"** — Vor jeder „Reparatur": Blob-Abgleich über mindestens 2 Wege (Commit-Kette, Code-Suche-Fragment, Patch-Analyse). Reproduzierbar in 2 Wegen = echt; in keinem = Replay-Artefakt (Fix trotzdem idempotent mitnehmen, Fund melden).
3. **„Präfix-Trigger-Falle"** — Liegt die Zieldatei unter dem Publish-Pfad oder in dessen Nähe? Ist das Präfix tatsächlich das ERSTE in der Message?
4. **„Zwischenstand auf Live"** — Kandidat versehentlich live? Sofort revert-artig korrigieren, im Chat melden, Vorfall ins Lern-Log.
5. **„Job ignoriert meine Design-Vorgabe"** — Prüfen: Steht die Vorgabe in der Wissensablage, die der Job beim Lauf liest? Eine Vorgabe ist erst wirksam, wenn sie im vom Job geladenen Bestand steht — auf Freigabe wartende Entwürge wirken nicht.

## Versionierung & Farb-Verwaltung

- **Ären-/Versions-Logik:** Stil-Wechsel als neue CSS-Datei, alte bleibt (Regressionsschutz). Regelmäßiger Redesign-Lauf erzeugt Kandidaten, nie Direkt-Live.
- **Format-CSS als Aufsatz:** Lokale Zusatz-Stylesheets NACH dem Haupt-CSS einbinden, Haupt-CSS unangetastet; neue Klassen im Zusatz ergänzen, nie inline im veröffentlichten Post.
- **Farb-Verwaltung:** Farben haben Geschichten — Herkunft im CSS-Kommentar dokumentieren (Bild-Analyse → Revisionen → Leser-Feedback). Pflicht-Farben, die auch im Job-Prompt stehen, bei Änderung IMMER an beiden Stellen synchron halten und die Job-Rolle informieren.
- **Familienlook:** Wiederkehrende Elemente (z. B. Kenn-Banner) als Familienstandard in allen Ablegern — im Stil von, nie als Kopie deklariert.

## Archivierung

- **Veröffentlichte Ausgaben nie ändern.** Ausnahme NUR mit (a) ausdrücklicher Betreiber-Freigabe und (b) sichtbarem Änderungshinweis in der Datei (oben Einzeiler mit Sprungmarke, unten Erläuterungsabsatz mit Datum). Ausnahme für reine Zähler-/Tracking-Snippets ohne visuelle Änderung ist belegt — im Zweifel fragen.
- **Archiv-Seite:** nur erweitern, neue Ausgabe oben einsortieren. Übersicht: minimal erweitern (nie neu bauen), Verdrängte ins Archiv.
- **Ohne Rückfrage erlaubt:** Typos, Artefakt-Fixes (mit Blob-Beweis), CSS-Klassen-Ergänzungen, Nachtragzeilen-Formulierungen, Uhrzeit in Meta-Zeilen, Testdatei-Benennung. **Niemals ohne Rückfrage:** Live-Commits ohne Prototyp-Freigabe, Nachrüstung veröffentlichter Ausgaben, Job-Prompts, Löschung von Dateien.

## Entscheidungs-Praktiken

- **Design-Optionen-Wahl:** (1) Familienkonsistenz vor Neuheit; (2) Beweisbarkeit vor Eleganz; (3) je weniger Commit-Fläche, desto besser; (4) Vorlagen-Hebel vor Job-Prompt-Hebel. Echte Wahlmöglichkeiten des Betreibers → Dialog, nie selbst entscheiden.
- **Innere Checkliste vor jedem Live-Commit:** (1) Freigabe liegt vor (Chat-Beleg)? (2) frisches Blob-SHA geholt? (3) Präfix als Erstes? (4) Umbruch-Scan grün? (5) Diff verifiziert (nur Zielzeilen)? (6) Quittung im Übergaben-Log? (7) Vorgabe für künftige Ausgaben auch im geladenen Bestand verankert?
- **Quittierungspflicht:** Jede Übergabe: Chat-Quittierung + Einzeiler im Übergaben-Log; Rückmeldungen als dokumentiertes Artefakt, nie nur Chat.
- **Betriebs-Priorität:** Laufende Veröffentlichungs-Deployments und Daten-Verifikation gehen vor Design-Dokumentation — Design-Kandidaten warten.
