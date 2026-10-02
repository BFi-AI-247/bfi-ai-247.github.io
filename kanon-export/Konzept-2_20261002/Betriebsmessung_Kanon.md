# Betriebs-Selbstmessung (Kanon)

STATUS: KANONISCH (Export-Fassung 1.0 — verbindlich für Ziel-Umgebungen, die dieses Paket übernehmen)
VERSION: 1.0 (Erstausgabe)
ZWECK: Verbindliche Mess-Regeln für automatisierte Läufe: Selbst-Melde-Pflicht, reine Ist-Zahlen, Meldung als Nebenpflicht.
KAPSELUNGS-GRENZE: keine Plattform-, Domain-, Projekt- oder Personennamen; Konnektivität nur als Schnittstelle (Adapter_Skelett.md)
KONNEKTIVITÄT:
BENÖTIGT: Zeitquelle (Ist-Startzeit, Laufzeit) · dauerhafte Wissens-Ablage (Lauf-Protokolle)
FEHLT Zeitquelle: „Kontextangabe, nicht gemessen" — keine Schein-Messung.
FEHLT Ablage: Meldung via Kanal; kein Lauf-Protokoll-Ersatz in Chat-Verläufen.

## Regeln (Volltext)

- **Lauf-Melde-Pflicht:** Jeder automatisierte Lauf meldet bei Beendigung selbst: Ist-Startzeit (gemessen) und echte Laufzeit — je Lauf eine eigene kleine Protokolldatei (einziger Schreiber je Datei = keine Kollisionsgefahr). Verlaufs-Archive mit begrenztem Fenster; älteres bleibt in der Bestands-Historie.
- **Reine Ist-Zahlen:** Darstellung ohne Ampel-Logik, ohne Soll-Delta-Färbung — Bewertung ist Menschenentscheidung (gleicher Grundsatz wie die Betriebs-Indikatoren in ErstStempel_Kanon.md).
- **FAIL-MODE:** Die Meldung ist Nebenpflicht: Ihr Scheitern bricht den Lauf nie ab (loggen statt blockieren). Kern-Arbeits-Fehlschläge des Laufs tragen eine Status-Kennung im Meldedatenbestand.

## Beweis-Artefakt

Die Lauf-Protokolldatei mit gemessener Ist-Startzeit und echter Laufzeit je Lauf.

*Verfahrens-Datei des Export-Pakets, Zug 5 — Namensform <Name>_Kanon.md, Gesetzes-Charakter; Struktur: Zweck · Schrittfolge · Beweis-Artefakt. Änderungen nur über den Freigabe-Weg; Versions-Historie append-only. Ablage: kanon-export/Konzept-2_20261002/.*
