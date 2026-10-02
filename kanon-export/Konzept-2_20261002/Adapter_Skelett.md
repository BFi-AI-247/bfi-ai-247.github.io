# Adapter-Skelett — Konnektivitäts-Deklaration der Zielumgebung

STATUS: ZU FÜLLEN DURCH DEN BETREIBER DER ZIELUMGEBUNG (leere Vorlage; je Zielumgebung EIN Adapter)
ZWECK: Jede Konkretisierung der Konnektivität (welches Werkzeug, welcher Mechanismus, welche Eigenheiten) gehört HIERHER, nie in die Kanon-Dateien. Die Paket-Module verweisen ausschließlich auf die Connector-Rollen-Namen unten. Bei Umgebungswechsel wird nur dieser Adapter ausgetauscht — Kern und Regeln bleiben unberührt.
KONNEKTIVITÄT:
BENÖTIGT: Bearbeitung durch den Betreiber der Zielumgebung (ausfüllen, pflegen, bei Änderung nachtragen — append-only für die Eigenheiten-Historie)
FEHLT Bearbeitung: Paket-Module arbeiten mit ihren Ausfall-Verhalten aus dem jeweiligen Pflicht-Kopf (KONNEKTIVITÄT je Datei) — keine Improvisation.

## Connector-Rollen (Schnittstelle des Pakets)

| Connector-Rolle | Zweck (wofür die Module sie brauchen) | Vorhanden? (ja/nein) | Werkzeug/Mechanismus der Zielumgebung | Eigenheiten/Quirks | Zuverlässigkeit |
|---|---|---|---|---|---|
| 1. Zeitquelle | Technischer Zugang zur aktuellen Uhrzeit (Stempel-Disziplin). Ausfall → Ersatzformat „Kontextangabe, nicht gemessen" | ☐ | | | |
| 2. Dauerhafte Wissens-Ablage | Lese-/Schreibzugriff auf dateibasierte Regel- und Gedächtnisstruktur | ☐ | | | |
| 3. Beweisbarer Bestand | Versionierter, historisch nachprüfbarer Bestand mit Änderungs-Kennung je Schreibzugriff | ☐ | | | |
| 4. Auftragskanal | Einziger autorisierter Auftragseingang (Weisungswirkung nur über diesen Weg) | ☐ | | | |
| 5. Anhang-/Adapter-Orte | Ablagemöglichkeiten für Projekt-Anhang (Ebene 2a) und Adapter (diese Datei, Ebene 2b) | ☐ | | | |
| 6. Netz-Instrument | Gerichtete Außen-Abfragen (Recherche) mit Werkzeug-Kennung, unter Respektierung der Zugangs-Konventionen des jeweiligen Angebots | ☐ | | | |
| 7. Such-Instrument | Durchsuchen des versionierten Bestands nach Zeichenmustern (Beweisraum-Abfragen ohne Voll-Auslesen) | ☐ | | | |

## Ausfüll-Regeln

1. Je Rolle eintragen: Vorhanden? — Werkzeug/Mechanismus — Eigenheiten (unübliches Verhalten, Fallstricke) — Zuverlässigkeit.
2. Fehlt ein Connector: In der betreffenden Kanon-Datei steht das Ausfall-Verhalten im Pflicht-Kopf (KONNEKTIVITÄT) — dort nachlesen, keine Improvisation.
3. Neue Connector-Rolle nur über den Freigabe-Weg (Entwurf → Review → Betreiber-Freigabe → Verankerung in der Schnittstellen-Regel des Kerns).
4. Änderungen (Werkzeug-Wechsel, neue Eigenheiten): Nachtrag, alte Einträge unangetastet (append-only); „weg" heißt beweisgesichert archiviert, nie löschen.
5. Werkzeug-spezifische Verfahren (wie Zeitmessung, Schreiben, Abruf konkret ablaufen) gehören hierher oder in je eigene `Skill_`-Dateien — niemals in `_Kanon.md`-Dateien.

*Adapter-Datei des Export-Pakets (Zug 1), abgelegt im Ziel-Verzeichnis kanon-export/Konzept-2_20261002/. Der Betreiber der Zielumgebung ist Eigentümer dieser Datei.*
