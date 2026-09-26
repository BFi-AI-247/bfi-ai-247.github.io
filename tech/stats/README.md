# tech/stats/ — Stats-Sync P.184 (Datenbasis agents.html)

Standard-Sync statt Daily-Job (Betreiber-Entscheidung via PM_R1.1, 27.09. 01:07 Uhr):
Jeder committende Job schreibt bei jedem Lauf seine eigene kleine Datei hier —
höhere Frequenz, kein 14. Workflow, kein Rebuild (agents.html lädt per JS live).

## Struktur (R2.2-Entscheidung, P.156-Prinzip)

- EINE JSON-Datei je Job: `tech/stats/<key>.json` — der Job ist der EINZIGE
  Schreiber seiner Datei (Fehl-Isolation, merge-frei, wie tech/laeuft/).
- Felder: runs_total, runs_beweisbar_seit, beweis, instanzen (Kurat-Jobs,
  RK-Logik P.161), instanzen_seit, laufzeit_gesamt_min, laufzeit_erfasst_seit,
  last_run, updated.
- Je Lauf: runs_total +1, laufzeit_gesamt_min += Laufzeit (min),
  last_run = Laufzeitpunkt, updated = jetzt. Kurat-Jobs: instanzen = N der
  eigenen Instanz-Kennung (logs/erfahrung/inventar.md).

## Init-Stand (ehrliche Stichtags-Init, Regel 7 — 27.09.2026)

- runs_total rückwirkend BEWIESEN aus Ausgaben-/Digest-Dateien (je Datei ein
  Lauf; Beweis je Job im "beweis"-Feld). 
- laufzeit_gesamt_min: ab 27.09. erfasst — Vorlauf nicht rekonstruierbar,
  ehrlich ab 0 (keine Schätzung).
- instanzen (Kurat): ab 27.09. (RK-Inventar-Start), davor keine Kennungen.
- Tag-Zähler: berechnet agents.html aus dem Datum (16.09.2026 = Tag 1) —
  kein Schreiber nötig.
- Pausierte Alt-Digest-Jobs (radar-digest, wzg-digest, borkum-digest): KEINE
  Initialisierung; bei Reaktivierung Init-Datei mit Beweisstand anlegen.

## Leitplanken

- LP-02: Sync ist fail-offen — Fehler blockieren Ausgabe/Publish NIE.
- LP-01/LP-09: Aggregierte öffentliche Statistik ≠ Kontext-Drift — kein
  Prozess liest diese Dateien als Regel-Input. Einziger Konsument:
  agents.html (JavaScript, rein lesend).
- Git-Historie = Beweiskette: [no-post]-Commits, kein Squashing.
- Stats-Dateien triggern keinen Posts-Workflow (≠ posts/**).
- Reversibel: Verzeichnis + agents.html löschen genügt.
