# Kanon-Delta-Log-Verfahren (Kanon)

STATUS: KANONISCH (Export-Fassung 1.0 — verbindlich für Ziel-Umgebungen, die dieses Paket übernehmen)
VERSION: 1.0 (Erstausgabe)
ZWECK: Verbindliches Verfahren für eine Stelle, die sagt, was sich am verbindlichen Bestand seit dem letzten Lesen geändert hat — Auf- Stand in wenigen Zeilen ohne volle Datei-Vergleiche.
KAPSELUNGS-GRENZE: keine Plattform-, Domain-, Projekt- oder Personennamen; Konnektivität nur als Schnittstelle (Adapter_Skelett.md)
KONNEKTIVITÄT:
BENÖTIGT: dauerhafte Wissens-Ablage (Delta-Log-Datei, append-only)
FEHLT Ablage: Delta-Pflege nicht möglich → Fundmeldung; Änderungen dann über Kanal-Nachrichten mit Kennzeichnung „ohne Delta-Eintrag".

## Schrittfolge (Leseregeln, verbindlich)

1. **Vor jedem Auftrag komplett lesen** (die Datei bleibt kurz — Cap, s. Schritt 5). Vollautomatische Läufe ohne sitzende Instanz sind ausgenommen: Sie laden je Lauf komplett frisch und fangen Bestands-Drift über eine Regelstands-Stempel-Prüfung mit Warnhinweis ab.
2. **Anwenden, was nach dem eigenen letzten Arbeitsbeginn liegt:** Jeder Eintrag trägt Datum/Uhrzeit; alles Neueuere wird in die Arbeit dieses Auftrags eingearbeitet. Bei Unklarheit: betroffene Datei nachlesen — der Eintrag verweist immer darauf.
3. **Eine Wahrheit genau einmal:** Der Log fasst in 1–2 Sätzen zusammen und verweist auf die kanonische Datei — er ersetzt sie nie; bei Widerspruch gewinnt die Datei.
4. **Schreiber:** Nur die Verankerungs-Rolle (und die Review-Rolle bei review-verankerten Regeln) trägt ein; Rollen senden Änderungs-Meldungen über den Betreiber-Kanal an die Verankerung. Append-only mit laufender Nummer, neueste oben.
5. **Cap:** Am Schwellwert destilliert die Verankerungs-Rolle die älteren Einträge in einen Kompaktstand (nur Liste der Dateien mit Datum der letzten Änderung) — Details bleiben in der Beweiskette (EbbTide_Kanon.md).

## Beweis-Artefakt

Der Log selbst: nummerierte Einträge mit Datum/Uhrzeit (gemessen), je mit Verweis auf die kanonische Datei.

*Verfahrens-Datei des Export-Pakets, Zug 5 — Namensform <Name>_Kanon.md, Gesetzes-Charakter; Struktur: Zweck · Schrittfolge · Beweis-Artefakt. Änderungen nur über den Freigabe-Weg; Versions-Historie append-only. Ablage: kanon-export/Konzept-2_20261002/.*
