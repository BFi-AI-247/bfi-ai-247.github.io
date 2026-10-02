# Routing-Tabelle — Quelle × Ziele (lebender Bestand — Schema und Beispiele)

STATUS: VERZEICHNIS (lebender Bestand — KEIN Gesetz; bewusst ohne _Kanon.md-Endung)
VERSION: 1.0 (Erstausgabe)
ZWECK: Machine-lesbares Schema, welche Quelle in welche Vorprodukt-Ziele fließt — mit je-Ziel-Filtern (n:m). Vollständige Quellen-Basis: Verzeichnis_Quellen.md; Prüfkriterien: QuellenQS_Kanon.md.
KAPSELUNGS-GRENZE: keine Plattform-, Domain-, Projekt- oder Personennamen; Ziel-Namen sind generisch (Ziel A/B/C …) — Konkretisierung durch die Zielumgebung.
KONNEKTIVITÄT:
BENÖTIGT: dauerhafte Wissens-Ablage (diese Tabelle) · Netz-Instrument (prüfender Lauf)
FEHLT Netz-Instrument: Tabelle bleibt am Ablage-Stand; technische Felder ruhen (kennzeichnen, nicht still).

## Ziele-Syntax (machine-lesbar)

- Eintrag: `ziel[filter:Ausdruck]`; mehrere Ziele durch Semikolon getrennt; Filter `alle` = ganze Quelle für das Ziel.
- Je Ziel eine datierte Vorprodukt-Datei (je Tag ein Bestand); Filter werten auf Titel/Kurzfassung aus.
- Ein Ziel für ein thematisches Sonderformat ist als weiteres Ziel ohne Schema-Änderung möglich.

## Tabellen-Schema (Spalten)

quellenname · feed_url · qualifikation · qualifikation_vorlaeufig · typ · quellgruppe · ziele · status · letzter_check · fehlerzaehler · items_referenz

## Pflege-Regeln

1. Anlage, Schema und Änderung: Bau-Rolle (Vorbehalt); fachliche Anträge (neue Quellen, Filter, verbindliche Qualifikation) laufen über die Fachrolle.
2. Der prüfende Lauf schreibt technische Felder selbst (Zugangs-Adresse nach Auto-Eintrag-Regel, Status, letzter Check, Fehlerzähler); Qualifikation nur unter Vorbehalt (`qualifikation_vorlaeufig: true`) — verbindlich nur durch die Fachrolle.
3. Neue Zeile je Quelle (eine Wahrheit: die Quellen-Basis liegt in Verzeichnis_Quellen.md; hier stehen Routing und technische Felder).

## Beispiel-Zeilen (generisch)

| quellenname | feed_url | qualifikation | ziele | status |
|---|---|---|---|---|
| Beispiel: nationale Primärquelle | <feed-url> | Good | ziel_a[filter:alle]; ziel_b[filter:enthält "<Regionaltoken>" nur als Zweitquelle] | aktiv |
| Beispiel: regionale Primärquelle | <feed-url> | Good | ziel_a[filter:alle]; ziel_b[filter:enthält "<Regionaltoken>"]; ziel_c[filter:enthält "<Gebietstoken>"] | aktiv |
| Beispiel: internationale Primärquelle | <feed-url> | Good | ziel_a[filter:alle]; ziel_sonderformat[filter:enthält "<Thementoken A>" oder "<Thementoken B>"] | aktiv |

*Verzeichnis-Datei des Export-Pakets, Zug 5 — Qualifikation als Präfix (Verzeichnis_). Die Zielumgebung ersetzt die generischen Ziel-Namen und Token durch ihre Konfiguration. Ablage: kanon-export/Konzept-2_20261002/.*
