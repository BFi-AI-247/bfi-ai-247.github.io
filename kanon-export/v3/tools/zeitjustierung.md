# Skillbook: Zeitjustierung zeitgesteuerter Läufe bei Sommer-/Winterzeit-Wechsel (generisch)

**Status:** Skillbook generisch (anbietbar) · **Quelle:** dst-justierung.md (Konzept 27.09.2026) · **Autor-Instanz:** Kanon_Sync (Destillation, RUN-ID SKILL-V3-2809, Welle 2) · **Trenn-Stempel:** Kapsel-Inhalt (konkrete Cron-Tabelle, Umstellungstage, Slot-/Pickup-Namen, Task-IDs, Workflow-Datei-Verweise) separat abgelegt im Kapsel-Teil; dieser Teil ist werkzeug- und projektneutral.

## Das Problem (Klasse DST-Drift)

Soll-Zeiten für zeitgesteuerte Läufe werden in **lokaler Zeit** gedacht (Formel: Laufzeit ≥ Zielzeit + Puffer), die Cron-Definitionen stehen aber **UTC-konstant** in der Workflow-Datei. Bei Sommerzeit (lokale Zeit = UTC+2) und Winterzeit (UTC+1) laufen alle UTC-konstanten Crons nach der Umstellung **1 Stunde zu früh** lokaler Zeit — die Formel wird projektweit verletzt (Lauf vor oder am Ziel statt danach). Das ist kein Einzelfehler, sondern eine systematische, vorhersagbare Drift an jedem Umstellungstag.

## Optionen-Prüfung (Auftrags-Pflichtmenge, mit Begründung)

- **(a) Kompromiss-Zeiten, in beiden Zeitzonen formelkonform:** Cron so setzen, dass die Winterzeit die Formel hält. Folge: Im Sommer läuft jeder Lauf eine Stunde später als nötig. Verworfen — verschlechtert den Regelbetrieb die halbe Jahreszeit und kollidiert mit nachgelagerten Stufen.
- **(b) Zweimalige Jahrsumstellung als fester Kalendereintrag:** Crons werden 2×/Jahr auf das jeweilige UTC-Äquivalent justiert — die Formel gilt ganzjährig exakt. Verfahren rein mechanisch, mit Verifikations- und Gate-Kette. **EMPFOHLEN** — geringstes Risiko, additives/reversibles Verfahren, kein Eingriff in die Workflow-Logik.
- **(c) Workflow-interne Zeitzonen-Logik:** Cron läuft häufig, ein Skript-Gate prüft die lokale Zeit. Verworfen — fügt einem bewährten Werkzeug neue Logik hinzu, erhöht die Lauffrequenz massiv, und die DST-Edge-Cases (Umstellungsstunde selbst) wandern ins Skript: neue Fehlerklasse statt Beseitigung.

## Justier-Verfahren (je Umstellungstag)

1. **Basis frisch holen:** Workflow-Datei frisch über die Bestands-API abrufen (Blob-SHA) und die eigene Prüfsummen-Berechnung gegen den Blob-SHA verifizieren — **nie einen Web-Abruf als Änderungs-Basis** (Streu-Vorfall-Klasse).
2. **Abgleich vor Replace:** Stimmen die vorgefundenen Cron-Zeilen mit der erwarteten Ist-Spalte der Tabelle (Sommer vor Winterjustierung, Winter vor Sommerjustierung) überein? Bei ABWEICHUNG: **nicht blind justieren** — Fundmeldung, Abbruch.
3. **Anker-Replace:** Exakte Cron-Zeilen einzeln ersetzen, Kommentar aktualisieren (Justierung + Lauf-Datum).
4. **Commit** mit Nicht-Veröffentlichen-Kennzeichnung und Verfahrens-Verweis; Gate-4-Verifikation (Diff enthält nur die Cron-Zeilen + Kommentar); Beweis live.
5. **Protokoll + Quittung.**
6. **Rollback:** Revert des Justier-Commits.

## Achtungs-Muster aus der Praxis

- **Zufalls-Werte prüfen, nicht blind ersetzen:** Eine Laufzeit kann durch den Wechsel zufällig bereits den Zielwert treffen (Sommer- und Winter-UTC-Wert identisch) — dann bleibt die Zeile OHNE Änderung korrekt. Jede Zeile einzeln gegen die Tabelle prüfen.
- **Auslöser terminieren, nicht alleingesteuert:** Justier-Termine vor dem ersten formelwidrigen Lauf legen (nach der Umstellungsstunde, vor dem ersten Morgen-Lauf); die Justier-Instanz wird per einmaligem Termin angestoßen mit Verweis auf die Konzept-Datei. Kein vorzeitiger automatischer Deploy aus dem Konzept heraus.
- **Fallback ohne Schaden:** Verpasst ein Termin, läuft lediglich ein zu früher Lauf (Formel-Verstoß, heilbar durch manuellen Justierlauf) — kein Bestandsschaden, kein Datenverlust.
- **Rückstellung symmetrisch planen:** Der Winter-Termin braucht einen Sommer-Termin als Gegenstück; beide zusammen sind die vollständige Mechanik.
