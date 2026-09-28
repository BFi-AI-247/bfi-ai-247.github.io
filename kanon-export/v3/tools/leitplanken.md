# Skillbook: Leitplanken-Modell (generisch)

**Status:** Skillbook generisch (anbietbar) · **Quelle:** agent-zusammenarbeit/leitplanken-katalog.md (KANONISCH, verankert 27.09.2026) · **Autor-Instanz:** Kanon_Sync (Destillation, RUN-ID SKILL-V3-2809, Welle 2) · **Trenn-Stempel:** Kapsel-Inhalt (projektspezifische Anwendungs-Chronik, Hof-/Würdigungs-Verfahren) separat abgelegt im Kapsel-Teil; dieser Teil ist werkzeug- und projektneutral.

## Was ist eine Leitplanke (Abgrenzung)

Eine Leitplanke ist eine **bedingte Verhaltens-Begrenzung für Aufträge**, die Ausführung und Projekt schützt — sie ist KEINE Regel (Regeln gelten immanent; Leitplanken begrenzen Aufträge).

## Katalog (übertragbare Muster)

- **LP-01 — Keine Rückspeisung ins laufende System:** Pilot-/Beobachtungsdaten fließen nicht in laufende Prozesse, Prompts oder Kanons ein, solange der Auftrag keine Freigabe dafür enthält.
- **LP-02 — Fehler beim Zusatzschritt blockiert nie den Hauptablauf:** Ein additiver Schritt (Journal, Messung, Prototyp-Begleitung) darf bei eigenem Versagen den Hauptauftrag nie gefährden: loggen statt blockieren.
- **LP-03 — Additiv / reversibel / entfernbar:** Jeder Pilot-/Zusatz-Eingriff ist additiv, versioniert, jederzeit vollständig entfernbar, ohne Bestand zu verändern.
- **LP-04 — Sofortiger Stopp ohne Rückfrage:** Beeinträchtigt ein Zusatzschritt Zeit, Stabilität oder Qualität des Hauptablaufs: sofort deaktivieren (nicht drosseln), Meldung nachgelagert.
- **LP-05 — Kein Publish vor Betreiber-Freigabe (Live-Start-Regel):** Kein neuer Kanal/Job/Format veröffentlicht vor ausdrücklicher Freigabe. Bis dahin: Probelauf mit Nicht-Veröffentlichungs-Kennzeichnung + noindex.
- **LP-06 — Keine Eigenreparatur fremder Rollen-Terrains:** Fund in fremdem Zuständigkeitsbereich → Fundmeldung an die zuständige Rolle, NICHT selbst heilen. Nicht einmal „kurz draufschauen" außerhalb des eigenen Auftrags.
- **LP-07 — Kein stiller Vortags-Rückgriff:** Fehlt ein Vorqualifikations-Produkt oder ist es leer → Vortags-Fallback MIT sichtbarem Vermerk in der Ausgabe; kein leises Weiterschreiben, als wäre alles frisch.
- **LP-08 — Prototyp-zuerst bei Gestaltung:** Jede Gestaltungs-Änderung läuft als Testdatei (gekennzeichnet, unverlinkt); Live-Übernahme erst nach Freigabe des Prototyps.
- **LP-09 — Beobachtungsdaten in den Beweisraum:** Roh-Beobachtungen gehören in den beweisbaren Bestand, nicht ins Arbeitsgedächtnis der Rollen. Kalibrierte Erkenntnisse wandern erst nach Freigabe kanonisch.
- **LP-10 — Chronik ist append-only:** Ehren-/Chronik-Einträge dürfen nach der ersten Veröffentlichung nur ERGÄNZT, nie verändert oder gelöscht werden. Chronik ist episodisches Gedächtnis (einmal geschrieben, eingefroren), nicht semantisches (Regeln leben von Aktualisierung).

## Verwendungs-Mechanik

- Leitplanken werden in Aufträgen per **ID referenziert**, nicht ausformuliert — der Katalog ist die eine Wahrheit, die Nachricht trägt nur die Referenz.
- **Neue Leitplanke = neue ID** über den Regel-Freigabe-Weg, nie Inline-Freitext-Variante (Drift-Prinzip).
- **Versions-Prüfpflicht:** Empfänger prüft unbekannte IDs gegen den Katalog-Stand — bekannter Stand + unbekannte ID = Katalog-Lücke → Fundmeldung (Eskalation) statt Improvisation.
- **Fail-Mode-Entlastung:** Referenziert ein Auftrag LP-02, gilt das als einzelne, benannte Begründung — das Fail-Mode-Feld muss das nicht erneut ausschreiben.
