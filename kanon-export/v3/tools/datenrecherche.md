# Skillbook: Datenrecherche mit Quellen-Qualifizierung (generisch)

**Status:** Skillbook generisch (anbietbar) · **Quelle:** quellenliste.md (seit 22.09.2026, Redaktion) + quellen-qs-Knowledge-Einträge (26.–28.09.2026) · **Autor-Instanz:** Kanon_Sync (Destillation, RUN-ID SKILL-V3-2809, Welle 2) · **Trenn-Stempel:** Kapsel-Inhalt (QS-Organisation mit Projektbezug: Job-Keys, Digest-Pfade, Rollen-Zuordnung, Routing-Ziele, projektspezifische Filter) separat abgelegt im Kapsel-Teil; die konkreten Quellen sind laut Betreiber-Entscheidung 28.09. KEINE Kapsel und offen Bestandteil dieses Teils.

## Qualifikations-Kategorien

- **Good:** Problemlos nutzbar; sauber verlinkbar (öffentliche URL oder News-ID); in der Regel offizielle RSS/Atom-Feeds. Bevorzugt einsetzen.
- **Grey:** Inhaltlich ggf. seriös, aber nicht sauber verlinkbar (Bot-Blocking, kein Feed, 403) oder nur über Zweitberichte nutzbar (Agenturen). Keine Primärquelle; Nutzung nur als „laut [Quelle]" über eine Good-Quelle, die darüber berichtet.
- **Black:** Keine Berichterstattung im journalistischen Sinne (Propaganda, Desinformation, staatlich gesteuert). Nicht verwenden — auch nicht via Zweitbericht als Referenz-Primärquelle; Ausnahme: Wird über das Portal selbst berichtet, ist es das Thema, nicht die Quelle.
- **All:** Alles andere; Nutzung erlaubt unter den allgemeinen Redaktionsregeln. Aufnahme einer Quelle heißt nie Ausschluss aller anderen.

## Diversitätsregel (Quellgruppen)

- Quellgruppe = Verlag/Rundfunkuniversum (z. B. alle Sender eines öffentlich-rechtlichen Netzwerks; alle Titel eines Verlags).
- Max. 3 Beiträge je Quellgruppe pro Ausgabe; mind. 4 verschiedene Quellgruppen pro Ausgabe.
- Bei dünner Nachrichtenlage darf darunter gefallen werden — mit kurzer Begründung.

## Erreichbarkeitsregel (Ausfall-Verhalten)

1. **Überspringen statt raten:** Bei nicht erreichbarem Feed Quelle für diesen Lauf auslassen; KEINE URL-Varianten generieren oder durchprobieren — geratene Feeds kosten Zeit und liefern Fehltreffer.
2. **Ein Wiederholungsversuch** je Quelle (kurz warten oder anderen Abrufweg nutzen); danach endgültig überspringen.
3. **Dokumentieren:** Quelle, Fehlercode, Uhrzeit im Laufprotokoll.
4. **Ersetzen, nicht ausharren:** Fehlt der Ertrag einer Quelle, wird die Rubrik über andere Good-Quellen derselben Quellgruppe gedeckt — nie die Ausgabe wegen einer toten Quelle ausdünnen.
5. **Keine Dritt-Umwege:** Keine Cached-Kopien, keine News-Aggregatoren als Ersatz — die Kategorie-Logik bleibt unangetastet.
6. **Dreifach-Fehler → Pflegealarm:** Scheitert dieselbe Quelle an 3 aufeinanderfolgenden Läufen, Hinweis an die pflegende Fachrolle (URL korrigieren, auf „nicht verifiziert" zurückstufen oder auf Grey abstufen).

## Feedfähigkeits-Prüfung & URL-Findung (aktive Pflicht)

Die Prüf-Instanz prüft aktiv die Feedfähigkeit jeder Quelle und findet ggf. eine URL — sie wartet nicht auf Hinterlegung:

1. **Autodiscovery zuerst:** Startseite/Pressebereich nach `<link rel="alternate" type="application/rss+xml|atom+xml">` durchsuchen (normkonformes Auslesen, kein Raten).
2. **Offizielle RSS-/Service-Seiten:** Dokumentierte RSS-Übersichten nutzen und konkrete Feed-URL entnehmen.
3. **Verifikationspflicht:** Jede gefundene URL wird geprüft (HTTP 200 + Feed-Signatur + Item-Extraktion), bevor sie als Feed-URL eingetragen wird. Nicht verifizierbar → nicht eintragen, Befund melden.
4. **Ergebnis-Kategorien je Quelle:** (a) feedfähig + URL verifiziert → Auto-Eintrag; (b) feedfähig, URL nicht automatisch extrahierbar (JS-Übersichten, Bot-Schutz) → offen + Übergabe an Fachrolle; (c) nicht feedfähig, nur HTML → Feld „Weg: HTML" mit definierter Scraping-URL, Quelle bleibt regulär prüfbar; (d) nicht erreichbar → blockiert + 3er-Regel.
5. **Grenze:** URL-Findung nur über Wege 1–2 — Dritt-Aggregatoren sind KEIN Findungsweg; Suchmaschinen-Recherche bleibt Fachrollen-Vorbehalt.
6. **Browser-Kennung:** Automatisierte Abrufe laufen mit Browser-User-Agent; Server-Blockaden anhand der Bot-Kennung sind sonst Massen-Fehlalarme (technisch ≠ journalistisch — keine automatische Abstufung wegen 403).

## Technische Prüfkriterien je Quelle (täglich)

1. **Erreichbarkeit:** HTTP-Status plus Feed-Signatur (200 mit HTML-Seite ist ein Fehler). 1 Wiederholungsversuch, dann blockiert.
2. **Parsebarkeit:** Feed-Struktur lesbar, Items extrahierbar.
3. **Aktualität:** Tagesmedien ≤ 7 Tage Schwelle; Fach-/Nischen-/institutionelle Quellen ohne X-Wert — Schweigen nur protokolliert („still seit X").
4. **URL-Stabilität:** Redirects folgen (301/308 ok); Umzugs-Autokorrektur nur mit Signatur-Nachweis.
5. **Filter-Intaktheit:** Liefert ein gefilterter Feed noch Treffer? Fachliche Bewertung durch die Fachrolle.
6. **Doppelstruktur:** Nur Agentur-Kopien/Verdünnung? Befund an die Fachrolle — keine Auto-Aktion.

## Ausfall-Verhalten (Prüfung ist Zusatz, kein Single Point of Failure)

- **Prüf-Ausfall blockiert nichts:** Fällt die Prüfung aus, läuft der Abruf mit dem letzten bekannten Zustand; die versäumte Prüfung wird protokolliert und nach der 3er-Regel gemeldet.
- **Ausfall EINER Quelle** darf nie einen Gesamt-Digest leeren und nie Nachbarn mitreißen (Rubrik-Deckung über Alternativen derselben Quellgruppe).
- **Gesamt-Ausfall des Abrufs:** Verbraucher laufen mit Vortags-Daten weiter, mit sichtbarem Vermerk — nie still weiterschreiben, als wäre alles frisch.

## Vorbehalts-Mechanik

Kategorie-Wechsel (Good→Grey usw.) gilt im Regelbetrieb nur UNTER VORBEHALT (`vorläufig: true` + Befund + Zeitstempel); Verbraucher arbeiten mit der ALTEN Einstellung bis Bestätigung durch die Fachrolle. Jeder Vorbehalt altert: 3 aufeinanderfolgende Läufe ohne Änderung → formulierter Übergabe-Auftrag an die Fachrolle (kein stiller Log-Eintrag).

## Enzyklopädie als Werkzeug, nie Quelle

Zulässig für: Thema-Einstieg, Hintergrund/Einordnung (auch lokal: Orts-/Regions-Artikel), Quellen-Findung über den Quellenapparat am Artikelende, Tages-Impulse. Verboten: als zitierende Quelle; ungeprüfte Übernahme von Tages-Einträgen (laufende Ereignisse sind anfällig). Jeder daraus gewonnene Fakt wird eigenständig über die verlinkte Primärquelle oder eine Good-Quelle verifiziert.

## Vorqualifikation durch Agenten

Findet ein Agent eine relevante neue Quelle, trägt er sie unter „Vorqualifiziert — zur Prüfung" ein: Name, URL, Fundweg, Kurzprofil, Qualifikations-Vorschlag mit Begründung. Verbindliche Qualifikation nur durch die Fachrolle; neue Quellen erst nach verbindlicher Aufnahme regulär nutzen.

## Beispiel-Katalog qualifizierter Quellen (offen, Betreiber-Entscheid)

**Good (Primärquellen, Auszug):** öffentlich-rechtliche Nachrichtensender (DE/AT/CH: Tagesschau/ARD, ZDF, Deutschlandfunk, ORF, SRF, 20 Minuten) · ZEIT, SZ (Teil-Paywall), taz, Correctiv, Netzpolitik, Spiegel (Feed beim Einsatz extrahieren) · internationales: BBC, Guardian, Al Jazeera, Deutsche Welle, NPR (403 bei Auto-Abruf), Le Monde, El País, RTVE, Euronews, Sky News · Fachpresse: heise, Golem, Ars Technica, The Verge, TechCrunch, Wired, New Scientist, ScienceDaily, phys.org, wissenschaft.de, GEO · Finanzen: CNBC, Investopedia, Quartz, moneycab, finanzen.at · institutionelle Absender-Quellen: ESA, NASA, WHO, UN News, UNHCR, IAEA/UNICEF/WFP/OHCHR, Eurostat, Statistisches Bundesamt, EU-Organe, Nobelpreis-Organisation, Wissenschafts-Bündel-Feeds (idw), Max-Planck/Fraunhofer/Helmholtz, Universitäten (HTML-Presse), Corporate Newsrooms (SAP, Lufthansa, Deutsche Bahn, VW — stets als Absender-Mitteilung mit Sorgfalts-Vermerk: keine Produktwerbung, Krisen/Rückrufe nur mit Zweitbestätigung) · Special: The Independent, Tages-Anzeiger (metered Paywall wie SZ behandeln).

**Grey (nur via Good-Zweitbericht):** AFP, Reuters, AP, dpa (Agentur-Blocking/kein Feed) · NYT, Washington Post, Financial Times, Handelsblatt, Bloomberg, NZZ, The Times, The Telegraph (harte Paywalls).

**Black (nicht verwenden):** Regenbogenpresse ohne journalistische Sorgfalt · desinformationsnahe Portale ohne Quellentransparenz · staatlich gesteuerte Desinformations-Sender · meinungsgetriebene „Einblick"-Formate.
