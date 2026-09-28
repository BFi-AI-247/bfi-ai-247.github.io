# Skillbook: Lauf-Berichts-Modell (generisch)

**Status:** Skillbook generisch (anbietbar) · **Quelle:** betriebszeiten.md (Regelstand 2026-09-27b, Betreiber-Umbau 27.09.2026) · **Autor-Instanz:** Kanon_Sync (Destillation, RUN-ID SKILL-V3-2809, Welle 2) · **Trenn-Stempel:** Kapsel-Inhalt (Repository-Pfade, konkrete Job-Keys, Cron-Zeiten, Seiten-Verlinkung) separat abgelegt im Kapsel-Teil; dieser Teil ist werkzeug- und projektneutral.

## Zweck

Ein sekundäres Verfahren, das automatisierten Läufen (Jobs) eine **Lauf-Melde-Pflicht** auferlegt: Jeder Lauf hinterlässt Ist-Daten über seinen eigenen Verlauf. Die Meldung ist eine **Nebenpflicht** — sie ist Beweismaterial, kein Steuerungselement.

## Kernregeln

1. **Melde-Pflicht je Lauf:** Am Laufende trägt der Job seine **Ist-Startzeit** (exakte tatsächliche Startzeit, ISO 8601 mit Offset, gemessen am Laufbeginn) und seine **echte Laufzeit** (Minuten, gerundet, Ende minus Start) in seine Melde-Datei ein. Der Kalendertag ist die lokale Tagesgrenze des Laufs.
2. **Eine Datei je Job:** Der Job ist **einziger Schreiber** seiner Melde-Datei — Parallelläufe desselben Jobs kollidieren nicht mit anderen Schreibern. Der Job bearbeitet niemals die Übersichts-Anzeige selbst; diese leitet sich aus den Melde-Dateien ab.
3. **Verlaufs-Array statt Einzelmeldung:** Die Datei enthält bis zu 30 Tages-Einträge. Beim Laufende liest der Job seine Datei frisch (mit Bestands-Verifikation gegen die Version im versionierten Speicher), **ersetzt einen vorhandenen Eintrag mit heutigem Datum oder fügt den heutigen Eintrag oben an**, kürzt auf max. 30 Einträge und schreibt mit Bestands-Verifikation zurück. Fehlt die Datei beim ersten Lauf: mit dem einen Eintrag neu anlegen. Ältere Verläufe bleiben über die Versions-Historie der Datei beweisbar.
4. **Reine Ist-Zahlen:** Die Anzeige zeigt bewusst **keine Abweichungs-Farben, keine Delta-Berechnung** gegen Soll-Zeiten. Ein Soll-Wert darf klein im Kopf stehen, aber nur zur Orientierung — nicht als Rechengrundlage. Fehlende Läufe erscheinen als fehlender Eintrag; fehlgeschlagene Läufe als explizites Status-Feld (`ok` | `fehler` — Job lief, aber die Kernarbeit schlug fehl; Anzeige-Suffix kenntlich).
5. **Nebenpflicht blockiert nie:** Schreib-Fehler beim Melde-Commit brechen den Job **nie** ab (LP-02-Logik: loggen statt blockieren — ein Chat-Vermerk genügt). Die Meldung ist Zugabe, kein Bestandteil des Haupterfolgs.
6. **Commit-Kennzeichnung:** Melde-Commits tragen das projectübliche Nicht-Veröffentlichen-Präfix und laufen über den normalen Schreibweg mit Bestands-Verifikation (frisches SHA vor jedem Replace).

## Melde-Format je Eintrag (verbindlich)

```json
{ "datum": "<JJJJ-MM-TT>", "ist_start": "<ISO 8601 mit Offset>", "dauer_min": <N>, "status": "ok|fehler" }
```

## Anzeige-Grundsätze

- Neueste Einträge oben, beginnend mit heute; Datumliste (keine Wochentags-Matrix).
- Fehlende Läufe: fehlender Eintrag — kein Rückschluss, kein Ausgleich.
- Die Übersicht ist eine Admin-Seite ohne eigenen Inhalt (von Suchmaschinen ferngehalten), keine Publikation.

## Warum diese Regeln (Begründung)

- **Ist statt Soll-Delta:** Abweichungs-Logik erzeugt Ampel-Debatte und Anpassungsdruck; reine Ist-Zahlen sind beweisbar und interpretationsfrei.
- **Nebenpflicht-Ausnahme:** Würde die Meldung den Job blockieren können, verwandelte ein Berichts-Fehler einen erfolgreichen Lauf in einen scheinbar gescheiterten — das Gegenteil des Zwecks.
- **Verlaufs-Array:** Eine Datei je Job statt einer Datei je Lauf hält den Bestand klein, die Historie bleibt über die Versions-Historie lückenlos.
