# Veröffentlichung & Versionskontrolle (Kanon)

STATUS: KANONISCH (Export-Fassung 1.0 — verbindlich für Ziel-Umgebungen, die dieses Paket übernehmen)
VERSION: 1.0 (Erstausgabe)
ZWECK: Verbindliche Disziplin für den beweisbaren Bestand: Schreib-Zuständigkeit, Unveränderlichkeit Veröffentlichtes, Lösch-Verbot, Minimal-Patching.
KAPSELUNGS-GRENZE: keine Plattform-, Domain-, Projekt- oder Personennamen; Konnektivität nur als Schnittstelle (Adapter_Skelett.md)
KONNEKTIVITÄT:
BENÖTIGT: beweisbarer (versionierter) Bestand mit Lese-/Schreibzugriff
FEHLT Bestands-Zugang: kein Schreibzugriff — Abbruch + Meldung; keine Alternativwege.

## Regeln (Volltext)

- **Schreibzugriff nur mit Kennung:** Jede Änderung am versionierten Bestand erhält eine Änderungs-Kennung; Schreibzugriff nur über die zuständige Bau-Rolle (Grundregeln_Kanon.md, Regel 3). Die Schreib-Kette selbst (Bestandsbeweis, Diff-Verifikation) ist kanonisch in Gate_Kanon.md.
- **Frisch vom autoritativen Speicher:** Inhaltsabrufe für Änderungen erfolgen direkt vom autoritativen Bestand, nie aus Zwischenspeichern — Caches können streuen (sichtbare Artefakte bei Übernahmen).
- **Unveränderlichkeit Veröffentlichtes:** Einmal veröffentlichte Artefakte werden nicht verändert; Ausnahmen nur für inhaltlich Notwendiges, mit sichtbarem Änderungshinweis im Artefakt selbst (still Schweigen verboten).
- **Lösch-Verbot:** Bestand wird nie gelöscht; Überholtes wird archiviert (Deprecation mit Nachweis statt Entfernung).
- **Minimal-Patching:** Index-/Übersichts-Strukturen werden minimal gepatcht (nur der neue Eintrag), nie neu gebaut; Entferntes wandert ins Archiv.
- **FAIL-MODE:** Schreib-Zugriffsverweigerung = Abbruch + Meldung; keine Alternativwege.

## Beweis-Artefakt

Änderungs-Kennung je Schreibzugriff plus Archiv-Verweis bei jedem Abbau — in der Bestands-Historie nachprüfbar.

*Verfahrens-Datei des Export-Pakets, Zug 5 — Namensform <Name>_Kanon.md, Gesetzes-Charakter; Struktur: Zweck · Schrittfolge · Beweis-Artefakt. Änderungen nur über den Freigabe-Weg; Versions-Historie append-only. Ablage: kanon-export/Konzept-2_20261002/.*
