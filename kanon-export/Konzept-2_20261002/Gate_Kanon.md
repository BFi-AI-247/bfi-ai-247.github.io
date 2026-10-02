# Gate-Verfahren — Schreib-Kette (Kanon)

STATUS: KANONISCH (Export-Fassung 1.0 — verbindlich für Ziel-Umgebungen, die dieses Paket übernehmen)
VERSION: 1.0 (Erstausgabe)
ZWECK: Verbindliche Qualitäts-Gates vor JEDEM Schreibzugriff auf den beweisbaren Bestand — aus Fehlern werden Gates, nicht Ermahnungen.
KAPSELUNGS-GRENZE: keine Plattform-, Domain-, Projekt- oder Personennamen; Konnektivität nur als Schnittstelle (Adapter_Skelett.md)
KONNEKTIVITÄT:
BENÖTIGT: beweisbarer (versionierter) Bestand mit Lese-/Schreibzugriff · Such-Instrument optional (Beweisraum-Abfragen)
FEHLT Bestands-Zugang: kein Schreibzugriff — Abbruch + Meldung; keine Alternativwege.
FEHLT Such-Instrument: Bestandsbeweis über volle Lektüre, mit Kennzeichnung des Mehraufwands.
FEHLT nicht bestandene Prüfung: KEIN Schreiben — ein fehlgeschlagener Gate-Lauf schreibt nie „fast richtig".

## Schrittfolge (Gate-Kette vor jedem Schreibzugriff)

1. **Ist-Zustand frisch laden:** Inhaltsabrufe für Änderungen erfolgen direkt vom autoritativen Bestand, nie aus Zwischenspeichern — Caches können streuen (sichtbare Artefakte bei Übernahmen).
2. **Bestandsbeweis vor Ausführung:** Keine Änderung ohne nachprüfbaren Soll-Ist-Abgleich („Nicht vorhanden" ist eine Behauptung, kein Befund — Bestandsbeweis_Kanon.md).
3. **Schreiben mit Kennung:** Jede Änderung erhält eine Änderungs-Kennung; Schreibzugriff nur über die zuständige Bau-Rolle (Grundregeln_Kanon.md, Regel 3).
4. **Diff-Verifikation des eigenen Schreibens** gegen den Ist-Bestand: Der letzte Beweis ist der Abgleich — NICHT die Erfolgsmeldung des Schreib-Werkzeugs. Rücklese-Pflicht im selben Zug (StempelEinZug_Kanon.md).

## Zusatz-Regeln

- **Vorfall → Gate:** Jeder Vorfall erzeugt eine neue maschinelle Prüfung in der Kette. Aus Fehlern werden Gates, nicht Ermahnungen.
- **Fix-Limit:** Nach drei vergeblichen Korrekturversuchen am selben Werkstück: Stopp + Ursachen-Analyse (Gesamtanalyse statt Symptom-Fixes), dann Eskalation über den Kanal.
- **Risikoliste:** Bei neuem Fehltyp wird eine Risikoliste geführt — bekannte Fehlklassen mit Vorbeuge-Prüfung.
- **Veröffentlichungs-Schutz:** Einmal veröffentlichte Artefakte werden nicht verändert; Ausnahmen nur für inhaltlich Notwendiges, mit sichtbarem Änderungshinweis im Artefakt selbst (still Schweigen verboten). Lösch-Verbot: Überholtes wird beweisgesichert archiviert, nie entfernt; Index-Strukturen werden minimal gepatcht (nur der neue Eintrag), nie neu gebaut.

## Beweis-Artefakt

Diff-Verifikations-Ergebnis (Soll-Ist-Abgleich des eigenen Schreibens) plus Änderungs-Kennung — nachprüfbar in der Bestands-Historie.

*Verfahrens-Datei des Export-Pakets, Zug 3 — Namensform <Name>_Kanon.md, Gesetzes-Charakter; Struktur: Zweck · Schrittfolge · Beweis-Artefakt. Änderungen nur über den Freigabe-Weg (Entwurf → Review → Betreiber-Freigabe → Verankerung); Versions-Historie append-only. Ablage: kanon-export/Konzept-2_20261002/.*
