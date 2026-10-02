# Erst-Stempel und Eigenzeit (Kanon)

STATUS: KANONISCH (Export-Fassung 1.0 — verbindlich für Ziel-Umgebungen, die dieses Paket übernehmen)
VERSION: 1.0 (Erstausgabe)
ZWECK: Verbindliche Werkzeug-Regel: Messung als erster Handgriff des Auftrags; Erst-Stempel im Antwortkopf; Eigenzeit als Betriebs-Größe aus vorhandenen Daten.
KAPSELUNGS-GRENZE: keine Plattform-, Domain-, Projekt- oder Personennamen; Konnektivität nur als Schnittstelle (Adapter_Skelett.md)
KONNEKTIVITÄT:
BENÖTIGT: Zeitquelle (technischer Zugang zur aktuellen Uhrzeit)
FEHLT Zeitquelle: Ersatzformat „Kontextangabe, nicht gemessen" — keine Schein-Messung, keine Ersatz-Wege (BeweisStempel_Kanon.md).

## Schrittfolge

1. **Messung ALS ERSTER Handgriff** des Auftrags (nicht erst beim Schreiben): Stempel-Zeit = Messwert, nie Erwartungs- oder Schreib-Abschlusszeit. Beweisklasse: ein vorweggenommener Erst-Stempel ist ein Erwartungswert und wird nach dem Messaufruf sofort nachgezogen.
2. **Erst-Stempel in den Antwortkopf:** Jede Antwort beginnt mit dem frisch gemessenen Erst-Stempel (Datum/Uhrzeit, gemessen, mit Zeitzone).
3. **Signatur-Stempel am Handlungs-Ende:** frisch gemessen — niemals der Erst-Stempel erneut verwendet.
4. **Eigenzeit bilden:** Erst-Stempel + Signatur-Stempel = EIGENZEIT je Antwort. Sie ist die unverfälschte Leistungs-Größe: Antwort-Stempel-Differenzen sind mit Liegezeiten zwischen den Parteien konfundiert — die Eigenzeit nicht.

## Betriebs-Indikatoren (Führung ohne neue Dateien)

Aus vorhandenen Stempeln, Protokollen und Lauf-Daten ableitbar: Eigenzeit je Antwort · Werkzeug-Züge je Antwort · Lese-Volumen der Pflicht-Lektüre (wächst der Kanon schneller als die Lektüre, steigt es — die Messgröße misst damit ihren eigenen Erfolg) · Nacharbeit-Rate (Korrekturen/Abbrüche je Antworten-Fenster) · Systemlast des Bestands · Laufzeiten wiederkehrender Prozesse.

## Grenzen

- Komplexität der Aufträge dokumentieren (optional S/M/L-Klassen je Auftrag).
- Anfangs wenige Datenpunkte — Trendaussage erst ab Wochen.
- Einzelwerte sind Auftrags-, nicht Systemaussage (gleitender Mittelwert).
- Bewertung bleibt Menschenentscheidung; die Indikatoren führen reine Ist-Zahlen ohne Ampel-Logik.

## Beweis-Artefakt

Erst-Stempel und End-Stempel je Antwort (beide gemessen) plus die abgeleitete Eigenzeit — nachprüfbar im Aktivitätsprotokoll (BeweisStempel_Kanon.md).

*Verfahrens-Datei des Export-Pakets, Zug 3 — Namensform <Name>_Kanon.md, Gesetzes-Charakter; Struktur: Zweck · Schrittfolge · Beweis-Artefakt. Änderungen nur über den Freigabe-Weg (Entwurf → Review → Betreiber-Freigabe → Verankerung); Versions-Historie append-only. Ablage: kanon-export/Konzept-2_20261002/.*
