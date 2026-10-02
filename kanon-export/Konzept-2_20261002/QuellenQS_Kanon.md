# Quellen-Qualitätssicherung (Kanon)

STATUS: KANONISCH (Export-Fassung 1.0 — verbindlich für Ziel-Umgebungen, die dieses Paket übernehmen)
VERSION: 1.0 (Erstausgabe)
ZWECK: Verbindliches Prüfverfahren für Bezugsquellen: technische Prüfkriterien je Quelle, Zugangs-Findung ohne Raten, Fehlerzähler und 3er-Meldung.
KAPSELUNGS-GRENZE: keine Plattform-, Domain-, Projekt- oder Personennamen; Konnektivität nur als Schnittstelle (Adapter_Skelett.md)
KONNEKTIVITÄT:
BENÖTIGT: Netz-Instrument (Prüfung je Quelle) · Zeitquelle (Prüf-Stempel) · dauerhafte Wissens-Ablage (Prüf-Protokoll, Verzeichnis-Felder)
FEHLT Netz-Instrument: Prüfung nicht möglich → Quelle als „ungeprüft" kennzeichnen, nie still als aktiv führen.
FEHLT Zeitquelle: „Kontextangabe, nicht gemessen".
FEHLT Ablage: Prüf-Ergebnisse via Kanal melden; keine unaufgezeichneten Prüfungen.

## Schrittfolge (technische Prüfkriterien je Quelle)

1. **Erreichbarkeit:** Status plus Dienst-Signatur (die erwartete Datenstruktur im Inhalt — ein Status „ok" mit einer gewöhnlichen Seite ist ein FEHLER). 1 Wiederholungsversuch, dann Status blockiert; Fehlerzähler mit Meldung ab dem dritten Fehler (3er-Regel).
2. **Parsebarkeit:** Struktur lesbar, Einheiten extrahierbar. Dito Fehlerbehandlung.
3. **Aktualität:** Tagesangebote innerhalb der von der Zielumgebung festgelegten Tagesgrenze; Fach-, Nischen- und institutionelle Angebote ohne harten Wert — Schweigen nur protokollieren („still seit X"), keine Abstufung.
4. **URL-Stabilität:** Weiterleitungen folgen; URL-Varianten raten VERBOTEN. Umzugs-Auto-Eintrag nur mit Signatur-Nachweis.
5. **Filter-Intaktheit** (bei gefilterter Nutzung): Liefert die Quelle noch Treffer für den Filter? → Vermerk im Prüf-Protokoll, fachliche Bewertung durch die Fachrolle.
6. **Doppel-Struktur-Check:** Nur Zweitverwertung/Verdünnung erkennbar? → Befund an die Fachrolle, keine Auto-Aktion.

## Zugangs-Findung (kein Raten — Wege 1 bis 2)

1. **Autodiscovery zuerst:** deklarierte Verweis-Einträge der Quelle normkonform auslesen (kein URL-Raten, sondern Auslesen).
2. **Offizielle Verzeichnis-/Service-Seiten:** konkrete Zugangs-Adresse daraus entnehmen und verifizieren.
3. **Verifikationspflicht vor Eintrag:** Erreichbarkeit + Dienst-Signatur + Einheiten-Extraktion prüfen, bevor etwas als verifizierter Eintrag gilt; gefundene, aber nicht verifizierbare Funde NICHT eintragen, sondern protokollieren. Dritt-Aggregatoren sind KEIN Findungsweg.
4. **Ergebnis-Kategorien je Quelle:** (a) nutzbar + Zugang verifiziert → Eintrag; (b) nutzbar, Zugang nicht extrahierbar → offen + Übergabe an die Fachrolle; (c) nur manuelle Seiten-Lektüre möglich → Feldvermerk mit definierter Lese-Adresse, Quelle bleibt regulär prüfbar; (d) nicht erreichbar → blockiert + 3er-Regel.

## Journalistische Kriterien (Befund, keine Selbstläufigkeit)

Zugangs-/Paywall-Änderungen, Quellgruppen-Intaktheit (Diversitätsmaximum je Gruppe — Konfiguration der Zielumgebung), Verdachtsfälle nur bei konkretem Anlass.

## Beweis-Artefakt

Prüf-Protokoll je Quelle: Status, letzter Check (gemessen), Fehlerzähler, Filter-/Struktur-Vermerke — maschinenlesbar geführt, historisch nachprüfbar.

*Verfahrens-Datei des Export-Pakets, Zug 4 — Namensform <Name>_Kanon.md, Gesetzes-Charakter; Struktur: Zweck · Schrittfolge · Beweis-Artefakt. Änderungen nur über den Freigabe-Weg (Entwurf → Review → Betreiber-Freigabe → Verankerung); Versions-Historie append-only. Ablage: kanon-export/Konzept-2_20261002/.*
