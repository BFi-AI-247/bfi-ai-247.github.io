# Leitplanken-Modell (Kanon)

STATUS: KANONISCH (Export-Fassung 1.0 — verbindlich für Ziel-Umgebungen, die dieses Paket übernehmen)
VERSION: 1.0 (Erstausgabe)
ZWECK: Verbindliches Muster: bedingte Verhaltens-Begrenzungen für Aufträge mit eindeutigen IDs — plus generische, bewährte Instanzierungen.
KAPSELUNGS-GRENZE: keine Plattform-, Domain-, Projekt- oder Personennamen; Konnektivität nur als Schnittstelle (Adapter_Skelett.md)
KONNEKTIVITÄT:
BENÖTIGT: dauerhafte Wissens-Ablage (Leitplanken-Katalog als eine Stelle, eine Wahrheit)
FEHLT Ablage: Katalog nicht führbar → Fundmeldung; keine Improvisation, keine Inline-Neuerscheinungen.

## Das Modell

- Eine Leitplanke ist eine **bedingte Verhaltens-Begrenzung für Aufträge** — KEINE Regel (Regeln gelten immanent; Leitplanken begrenzen Aufträge).
- **Eindeutige IDs; eine Wahrheit genau einmal:** Der Katalog ist die Quelle, die Nachricht trägt nur die Referenz.
- **Neue Leitplanke = neue ID über den Freigabe-Weg**, nie Inline-Variante (Drift-Prinzip).
- **Versions-Prüfpflicht:** Bekannter Katalog-Stand + unbekannte ID = Katalog-Lücke → Fundmeldung (Eskalation) statt Improvisation.

## Generische Instanzierungen (bewährt; Zielumgebung ergänzt eigene über den Freigabe-Weg)

1. **Keine Rückspeisung** — kanonisch in KeinRaten_Kanon.md (dort Volltext).
2. **Fehler beim Zusatzschritt blockiert nie den Hauptablauf:** loggen statt blockieren (bewusste fail-offen-Ausnahme).
3. **Additiv / reversibel / entfernbar:** Jeder Pilot-/Zusatz-Eingriff ist additiv, versioniert, jederzeit vollständig entfernbar, ohne Bestand zu verändern.
4. **Sofortiger Stopp ohne Rückfrage:** Beeinträchtigt ein Zusatzschritt Zeit, Stabilität oder Qualität des Hauptablaufs, wird er sofort deaktiviert (nicht gedrosselt); Meldung nachgelagert.
5. **Keine Veröffentlichung vor Betreiber-Freigabe:** Kein neuer Kanal, Job oder Ausgabe-Format vor ausdrücklicher Freigabe; bis dahin Probelauf mit Unterdrückung der Veröffentlichung + Unsichtbarkeits-Vermerk.
6. **Kein Eigenheilen fremder Zuständigkeiten** — kanonisch in Grundregeln_Kanon.md, Regel 3 (dort Volltext).
7. **Fail-closed bei fehlendem/leerem Vorprodukt:** Kein stiller Vortags-Rückgriff — Rückgriff nur MIT sichtbarem Vermerk in der Ausgabe.
8. **Prototyp-zuerst bei Design/Gestaltung:** Jede Änderung läuft als Test-Artefakt; Übernahme erst nach Freigabe des Prototyps.
9. **Abgrenzung zweier Lagen:** Das Versagen eines Zusatzschritts (er darf nie blockieren) und seine Gefährdung des Hauptablaufs (er wird abgeschaltet) sind verschiedene Lagen mit verschiedenen Antworten — kein Widerspruch.

*Regel-Datei des Export-Pakets, Zug 2 — Namensform <Name>_Kanon.md, Gesetzes-Charakter für die Ziel-Agentur. Änderungen nur über den Freigabe-Weg (Entwurf → Review → Betreiber-Freigabe → Verankerung); Versions-Historie append-only. Ablage: kanon-export/Konzept-2_20261002/.*
