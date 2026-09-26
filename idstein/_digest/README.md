# _digest — Idsteiner Hexenpost (arbeitsinterner Digest)

NOINDEX, nicht öffentlich verlinkt. Nächtlicher Pre-Scrape des Idstein-Digest-Tasks.

## Formatregeln (Regelstand 2026-09-26)
- Tagesdatei: `<JJJJ-MM-TT>.md`, geschrieben nur vom Idstein-Scrape-Task (create_or_update_file + SHA).
- Themen-Schema je Eintrag: Titel, Rubrik, Kurzfassung, Quellen (URL + Medium), Erhebungs-Zeitstempel, idstein-relevant (hoch/mittel/niedrig), Status.
- **Status-Zeile IMMER plain: `- Status: fresh` bzw. `- Status: deprecated` — NIE Bold** (P.113-Konvention, 26.09.).
- Deprecated-Abgleich gegen eigene Vortags-Datei (frisch→deprecated patchen); Kuratierer liest nur fresh.
- KEIN Zugriff auf WZG-/Borkum-/RADAR-/FINE-Digests; diese Dateien werden von keinem anderen Projekt gelesen.
- Fehlerfall Vortags-Abgleich nicht möglich: vermerken, Lauf läuft normal weiter.
