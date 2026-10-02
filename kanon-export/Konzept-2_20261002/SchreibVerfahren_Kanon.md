# Byte-ehrliches Schreiben (Kanon)

STATUS: KANONISCH (Export-Fassung 1.0 — verbindlich für Ziel-Umgebungen, die dieses Paket übernehmen)
VERSION: 1.0 (Erstausgabe)
ZWECK: Verbindliches Werkzeug-Prinzip: Schreib- und Lese-Wege in dauerhaften Ablagen müssen byte-ehrlich sein — Kodierungs-Fallen, Rücklese, autoritativer Zeichen-Check.
KAPSELUNGS-GRENZE: keine Plattform-, Domain-, Projekt- oder Personennamen; Konnektivität nur als Schnittstelle (Adapter_Skelett.md)
KONNEKTIVITÄT:
BENÖTIGT: byte-ehrliches, validiertes Schreibwerkzeug · dauerhafte Wissens-Ablage
FEHLT validiertes Schreibwerkzeug: kein Schreiben über ungeprüfte Wege — Schreiben ruht, Meldung über den Kanal.

## Regeln (Volltext)

- **Kodierungs-Falle:** Ungeeignete Schreib-Wege (ungeprüfte Umleitungen) können Nicht-ASCII-Zeichen doppelt kodieren (Latin-1→UTF-8-Layer). Verbindlich: Schreiben in dauerhafte Ablagen NUR über das validierte, byte-ehrliche Schreibwerkzeug. Sicher: validierte Schreib-Aufrufe, Kopieren/Verschieben aus geprüften Zwischen-Ablagen.
- **Ausgabe ist nicht Datei:** Pipes und Umleitungen in Ausgabe-Richtung sind render-verdächtig — angezeigte Ausgabe und Datei-Bytes können abweichen. Byte-wahre Lektüre nur über dokumentierte, geprüfte Wege.
- **Rücklese-Validierung nach jedem Schreiben Pflicht** (im selben Zug — Volltext des Zug-Verfahrens: StempelEinZug_Kanon.md).
- **Autoritativer Zeichen-Check (Definition):** byte-genau auf der Datei prüfen, dass keine doppelkodierten Zeichen vorliegen (Erwartung: 0). Eine Schnell-Zählung im Schreib-Zug ist nur FRÜHINDIKATOR; autoritativ ist der byte-genaue Check — Beweisklasse: eine Schnell-Zählung meldete Scheintreffer, der byte-genaue Check ergab 0.
- **FAIL-MODE:** Kein validiertes Werkzeug = kein Schreiben; niemals „irgendwie schreiben und später prüfen".

## Beweis-Artefakt

Rücklese-Ergebnis je Schreiben (0 Zeichen-Funde, byte-genau geprüft) — im selben Zug mit dem Schreiben entstanden.

*Verfahrens-Datei des Export-Pakets, Zug 5 — Namensform <Name>_Kanon.md, Gesetzes-Charakter; Struktur: Zweck · Schrittfolge · Beweis-Artefakt. Änderungen nur über den Freigabe-Weg; Versions-Historie append-only. Ablage: kanon-export/Konzept-2_20261002/.*
