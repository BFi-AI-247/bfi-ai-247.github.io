# Skillbook: Deployment-Gates & Verfahrens-Runbook (generisch)

**Status:** Skillbook generisch (anbietbar) · **Quelle:** r-2-runbook (Skill-Bestand, Regelstand 28.09.2026, jede Zeile aus echten Vorfällen) · **Autor-Instanz:** Kanon_Sync (Destillation, RUN-ID SKILL-V3-2809, Welle 3) · **Trenn-Stempel:** Kapsel-Inhalt (konkrete Workflow-Dateien, Cron-Zeiten, Job-IDs, Domänen, Deploy-Pfade, Projekt-Rollen) separat abgelegt im Kapsel-Teil; dieser Teil ist werkzeug- und projektneutral.

## Grundsatz

Jede Zeile ist aus echten Vorfällen abgeleitet. Erster Live-Lauf eines geänderten Automatismus ist Produktion, kein Test — deshalb prüfen Maschinen-Gates, bevor etwas committet wird. Jeder neue postmortale Fehler wird als neues Gate verfestigt (Vorfall→Gate); nach 3 Fixes am selben Werkstück erst Gesamtanalyse (Ursachen statt Symptome), dann weiter. Neuer Deployment-Typ: vorab 5-Min-Risikoliste (3–5 bekannte Fehlerklassen der Plattform + Gegenmaßnahme).

## Maschinen-Gates (vor JEDEM Commit, in dieser Reihenfolge)

1. **GATE Inhaltskanal:** Dateiinhalte für Commits NIE über Web-Abruf (rohe Web-URLs, Proxy-Dienste) — der Web-Proxy streut bei langen Dateien Zeilenumbrüche mitten in Zeilen. Erlaubt: Commit-Kette + hunk-verifiziertes Patch-Anwenden, oder Blob-API mit eigener Prüfsummen-Rechnung gegen den vom Speicher gemeldeten Blob-SHA.
2. **GATE Struktur:** Automatismus-Dateien als Ganzes prüfen — konfigurierbar/parsebar, Schritt-Folge vollständig (alle erwarteten Schritt-Namen), Skript-Blöcke intakt (Heredoc-Zähler balanciert), keine Zeilen, die mitten im Wort beginnen (Muster: Zeile beginnt mit 1 Leerzeichen + Großbuchstaben = Proxy-Streuungs-Signatur).
3. **GATE Logik:** Kritische Logik simulieren (Datenfluss, Konditionen, externe Ein-/Ausgabe): Normalfall + ein Fehlerfall.
4. **GATE Diff:** Nach dem Commit den eigenen Commit per Patch-Abfrage laden und prüfen — „fertig" erst nach bestandener Diff-Verifikation. Gilt auch für Reparatur-Commits.

## Erste-Hilfe-Blatt — die 5 häufigsten Fehlerbilder mit Prüfwegen

Kalte Instanz: Hier zuerst schauen, wenn etwas „kaputt aussieht" — bevor Hypothesen gebaut werden.

1. **Proxy-Streuung vs. echter Datenverlust:** Web-Abruf zeigt seltsame Zeilenumbrüche oder „alte" Inhalte. Prüfweg: Blob-API + eigene Prüfsummen-Rechnung gegen den Remote-Blob-SHA — der SHA entscheidet, nie der Eindruck. (Belegte Fälle: ein Umbruch war real im Speicher, ein anderer existierte nach dreifacher Verifikation NICHT; Intervall-Umbrüche um die 2000-Zeichen-Marke sind Proxy-Artefakte.) Gleiche Logik für „zeigt alten Stand": erst Zweitweg (Blob-API, alternativer Spiegel mit Cache-Buster), dann handeln.
2. **Replay vs. Realität:** Sandboxes mit Aufzeichnungs-/Wiederholungs-Charakter können Erzeugungen vorausexekutieren oder doppelt ankommen lassen. Prüfweg: Vor jeder Neu-Anlage Existenz-Check (Liste gegen ID/Name); nach jedem Update Inhalt gegen erwartete Teilstrings verifizieren.
3. **Rate-Limit der Plattform-API:** Ausweichen: Spiegel-Dienste für LESENDE Analyse + Rekonstruktion gegen den Remote-Blob-SHA. Für COMMITS gilt das nie (Gate 1).
4. **JSON-Lesen schlägt bei API-Antworten fehl** („Bad control character"): Proxy streut Kontrollzeichen. Prüfweg: String-Regex-Extraktion statt JSON-Parser; Kontrollzeichen strippen.
5. **Encoding-Streuung in Textdateien:** Ein Umlaut kann als Einzelbyte inmitten von Mehrbyte-Kodierung stehen — exaktes String-Matching schlägt fehl, obwohl der Text „richtig aussieht". Prüfweg: Vor Tabellen-Edits Bytes prüfen, notfalls zeilenbasiert ersetzen.

## Automatisierungs-Verwaltungs-Quirks (Task-/Scheduler-Systeme)

- **Paginierung:** `list` liefert auf Seite 1 ein LEERES Array — Einträge stehen auf Seite 0. Wer das nicht weiß, macht denselben Fehler zweimal (erster Aufruf und Wiederholung).
- **Bestätigungs-Prompts bei Änderungen:** Jede Änderung löst einen Freigabe-Prompt aus — normal abwarten, NIEMALS durch Zerlegung in Teilschritte umgehen. Ein Verweis ist Verbindlichkeit, keine Störung. Freigabe-Begründungsfeld hat Zeichen-Limit — Validierung schlägt sonst hart zu.
- **Replay-Doppel-Anlage:** Nach jedem Create die Liste gegenlesen (byte-identische Duplikate Sekunden nach dem Original sind belegt).
- **update ersetzt lange Textfelder GANZ:** „nur geänderte Felder übergeben" gilt für Felder, aber das Langtext-Feld ersetzt den kompletten Text — Anker-Technik: exakten alten Teilstring laden, prüfen dass er genau einmal vorkommt, ersetzen, danach gegen Teilstrings verifizieren.

## Publish-Workflow-Muster (Social-Kanal über Pages-Hosting)

Architektur-Muster mit belegten Fallstricken (Details je Projekt im Kapsel):

- **Trigger-Dreiheit:** Push auf Post-Pfade UND Zeitplan UND manueller Start (Nachholen mit Dateiparameter).
- **Anti-Duplikat:** State-Datei (bereits veröffentlichte Dateien), Refresh vom Hauptzweig VOR der Erkennung (Race bei Parallel-Läufen); State-Commit mit Rebase, Push-Fehler nicht fatal.
- **Concurrency-Gruppe** je Workflow; Zeitlimit auf Job-Ebene gegen eingefrorene Gruppen.
- **Deploy-Verifikation:** NIEMALS über eigene Domänen-Auflösung vom Runner (DNS löst sie nicht auf) — primär über die Hosting-Build-API (Bauliste), HTTP nur Zweitmeinung mit Fallback auf die Plattform-Standard-Adresse.
- **„superseded" gilt als deployed:** Der eigene Commit kann durch schnellere Folge-Commits überholt werden — Build-LISTE prüfen, nicht nur eigenen Eintrag. Auch Status „abgebrochen" (durch schnellere Folge-Pushes) kann Deploy bedeuten.
- **Fehlender eigener Build-Eintrag:** Bei sehr schnellen Folge-Pushes springt das Hosting direkt auf den Folge-Commit — ist der neueste GEBAUTE Commit ein Nachfahre des eigenen, gilt der Deploy als bestätigt (Vorfahren-Prüfung im vollen Tiefe-Checkout).
- **Selbst-Triggerungs-Schutz:** Korrektur- und Meta-Commits tragen ein Kennzeichnungs-Präfix in der Commit-Message, damit der Post-Trigger nicht auf die eigene Korrektur anspringt.
- **Diff-Basis bei Multi-Commit-Pushes:** Vorgänger-Referenz des Ereignisses nutzen, mit Vorgänger-Commit-Fallback.
- **Konfiguration statt Skript-Sprache:** Mehrzeilige Blöcke in Workflow-Definitionen besser mit einem strukturierten Parser als mit eingebetteten Skripten (belegter Startup-Fehler).

## Veröffentlichungs-Regeln (Ausgaben-Publish)

- Neue Ausgabe: fortlaufende Nummer = höchste bestehende + 1; Meta-Zeile mit exakter tatsächlicher Ausführungszeit (nicht Planzeit).
- Übersicht minimal erweitern (nie neu bauen), Inhalt frisch via Blob-API (Cache-Falle), Schreiben nur mit SHA; bei Schreibverweigerung: abbrechen und melden.
- Veröffentlichte Ausgaben sind unveränderlich; Änderungen nur mit sichtbarem Änderungshinweis.
- Job-Start kann erheblich nach Planzeit verzögert sein — kein Fehler.

## Protokoll-Disziplin

- Aufträge kommen als vollständige Nachricht über den Betreiber — Wissensablage ist nie Transportweg.
- Jede empfangene Übergabe: Quittierung + Einzeiler im Übergaben-Log.
- Wichtige Änderungen: Eintrag im Änderungsprotokoll (oben einsortieren, festes Format).
- **Dialog-Entscheidungen des Betreibers existieren NUR, wenn die Dialog führende Rolle sie in die Wissensablage trägt** — der Dialogmodus hat keinen anderen Protokoll-Weg. Eintrag immer mit: Datum, Entscheidung (möglichst Zitat), Kontext, betroffene Regel/Datei. Gegenseitigkeits-Regel: jede Rolle protokolliert nur ihre eigenen Dialoge.
