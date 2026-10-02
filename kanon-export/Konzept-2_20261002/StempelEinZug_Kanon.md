# Stempel-Ein-Zug-Verfahren (Kanon)

STATUS: KANONISCH (Export-Fassung 1.0 — verbindlich für Ziel-Umgebungen, die dieses Paket übernehmen)
VERSION: 1.0 (Erstausgabe)
ZWECK: Verbindliches Schreib-Verfahren für Protokoll- und Regel-Dateien: Lektüre, Messung, Änderung, Schreiben und Rücklese in EINEM Zug.
KAPSELUNGS-GRENZE: keine Plattform-, Domain-, Projekt- oder Personennamen; Konnektivität nur als Schnittstelle (Adapter_Skelett.md)
KONNEKTIVITÄT:
BENÖTIGT: Zeitquelle · dauerhafte Wissens-Ablage · byte-ehrliches Schreibwerkzeug (validiert) · Edit-Werkzeug (für Kopf-Zeilen)
FEHLT Zeitquelle: Ersatzformat „Kontextangabe, nicht gemessen" (BeweisStempel_Kanon.md) — keine Schein-Messung.
FEHLT byte-ehrliches Schreibwerkzeug: Schreiben ruht — kein Schreiben über ungeprüfte Wege; Meldung über den Kanal.
FEHLT Edit-Werkzeug ohne In-Zug-Rücklese: Zwei-Zug-Block (siehe Schrittfolge) — Edit NIE ohne Rücklese.

## Schrittfolge (EIN Zug)

1. **Lektüre:** Zieldatei frisch vom autoritativen Speicher laden — nie aus Zwischenspeichern (Caches streuen sichtbar).
2. **Messung ALS ERSTER Schritt** (nach der Lektüre): Stempel-Zeit = Messwert — nie Schreib-Abschlusszeit, nie Erwartungswert. Kein Stempel wird vor dem Messaufruf geschrieben (vorweggenommene Stempel sind Erwartungswerte im Messkleid).
3. **Änderung vorbereiten:** Einfügungen nur mit vollständigem, vorab gezähltem Alt-Anker — idempotent und replay-sicher (der gezählte Anker fängt geratene Anker ab). Einfügungen nur ergänzen (append-only), Bestandszeilen nicht still umschreiben.
4. **Schreiben:** über das validierte, byte-ehrliche Schreibwerkzeug (keine ungeprüften Umleitungen — Zeichen können durch ungeeignete Wege doppelt kodiert werden).
5. **Rücklese IM SELBEN ZUG** inkl. byte-genauem Zeichen-Check auf der geschriebenen Datei (mitgemeldet, kein separater Schritt): Erwartung 0 doppelkodierte Zeichen. Eine Schnell-Zählung im Schreib-Zug ist nur Frühindikator; autoritativ ist der byte-genaue Check auf der Datei.

## Grenzen und Ergänzungen

- **Kopf-Zeilen-Edits über getrennte Edit-Werkzeuge:** Zwei-Zug-Block — Edit IMMER mit Rücklese im selben Zug, nie ohne.
- **Fachliche Edits** unterliegen derselben Rücklese-Pflicht (Verdeckungs-Fälle werden regelmäßig erst in der Rücklese sichtbar).
- **Zwei-Feld-Konvention** je Protokoll-Zeile: Mess-Stempel (Werkzeug-Zeit) getrennt von Ereignis-Zeit (gekennzeichnete Kontextangabe) — keine Schein-Präzision.
- **Chat-Signatur:** frisch gemessen am Handlungs-Ende; nicht messbar → als Kontextangabe kennzeichnen, nie Erinnerungswert.

## Beweis-Artefakt

Rücklese-Ergebnis (0 Zeichen-Funde, Bestandszeilen unangetastet) plus der gemessene Stempel in der Datei — beides im selben Zug entstanden.

*Verfahrens-Datei des Export-Pakets, Zug 3 — Namensform <Name>_Kanon.md, Gesetzes-Charakter; Struktur: Zweck · Schrittfolge · Beweis-Artefakt. Änderungen nur über den Freigabe-Weg (Entwurf → Review → Betreiber-Freigabe → Verankerung); Versions-Historie append-only. Ablage: kanon-export/Konzept-2_20261002/.*
