# Skillbook: Zwei-Kanal-Auftragsformat (generisch)

**Status:** Skillbook generisch (anbietbar) · **Quelle:** agent-zusammenarbeit/zwei-kanal-format.md (Kanon-Fassung, Pilot-Verankerung 27.09.2026) · **Autor-Instanz:** Kanon_Sync (Destillation, RUN-ID SKILL-V3-2809, Welle 2) · **Trenn-Stempel:** Kapsel-Inhalt (Pilot-Chronik, Umgebungs-Spezifika der Messtechnik) separat abgelegt im Kapsel-Teil; dieser Teil ist werkzeug- und projektneutral.

## Grundsatz: Schichtung nach Auswirkungs-Potenzial

Aufträge mit **Auswirkungs-Potenzial** laufen in einem strukturierten Zwei-Kanal-Format. Ein Auftrag darf im Klartext bleiben, wenn ALLE drei Bedingungen erfüllt sind (**Bagatell-Schwelle**):

1. **Keine Bestands-/Prozess-Berührung** (kein Schreibzugriff auf versionierten Bestand, kein Job/Prompt-Patch)
2. **Keine Leitplanken-Relevanz** (keine Begrenzungs-ID passt, keine wäre nötig)
3. **Ein-Empfänger-Ein-Strang** (keine Weiterleitung, kein paralleler Beteiligter)

Quittierungen sind KEINE Aufträge — sie bleiben im kurzen Format unabhängig von der Schwelle. **Begründungs-Maßstab:** Mehrdeutigkeit entsteht bei Wirkung, nicht bei Wortzahl; das Format schichtet nur, wo Fehlinterpretation Schaden anrichten könnte (Doppelausführung, Format-Drift).

## Block A — Ausführungskanal (Felder)

```text
VON: <Absender-Instanz>
AN: <Empfänger-Instanz>
DATUM: <TT.MM.JJJJ, HH:MM> (Zeitzone, Systemzeit gemessen — PFLICHTFELD;
  bei Abweichung > 2 Min zur Betreiber-Wahrnehmung: Vermerk „Stempel unsicher"
  statt stiller Abweichung)
RUN-ID: <fortlaufende Auftrags-Nummer>
AUFTRAG: <Handlung in einem Satz>
PARAMETER: <Dateien, Pfade, Werte, Fristen — alles Ausführungsrelevante>
LEITPLANKEN: <Begrenzungs-IDs aus dem Katalog oder „keine">
FAIL-MODE: <Verhalten bei Teilmisserfolg>
REQUIRE-ACK: <was der Empfänger zurückmeldet — IMMER zu füllen,
  mindestens RUN-ID + Ausführungsstand>
ESKALATION: <wann/an wen bei Blockern>
```

## Block B — Mensch-Kanal (Trennregel)

**Block B darf niemals Informationen enthalten, die für die Ausführung notwendig sind — alles Ausführungsrelevante gehört zwingend in Block A.**

Self-Checks für Absender (verbindlich):
1. „Ist dieser Kontext-Satz eigentlich eine Anweisung? → nach A verschieben."
2. „Könnte der Empfänger den Auftrag korrekt ausführen, wenn Block B weg wäre?" — Nein → Inhalt fehlt in A.

Block B darf enthalten: Hintergrund, Motivation, Einordnung, Betreiber-Zitate. Block B darf NICHT: Fristen, Datei-Pfade, Schwellen, Freigaben, Namen/Beteiligte, Verweise auf frühere Punkte.

## Mechanik-Regeln

- **RUN-ID-Rückbezugspflicht:** Der Empfänger zitiert die Auftrags-Nummer am Anfang seiner Quittierung — nur mit Rückbezug kann abgleichen, ob der Auftrag schon bearbeitet wurde (auch über einen Instanz-Wechsel hinweg).
- **REQUIRE-ACK ist kein Ja/Nein-Feld:** Innerhalb von Block A IMMER zu füllen; „Nein" existiert nicht — Aufträge ohne Bestätigungspflicht sind nach der Bagatell-Schwelle ohnehin Klartext.
- **Begrenzungs-Referenzen:** Leitplanken werden per ID referenziert, nicht ausformuliert — der Katalog ist die eine Wahrheit, die Nachricht trägt nur die Referenz.
- **Kanon-Vorrang:** Das Format SCHICHTET die Kommunikation zusätzlich; es suspendiert, ersetzt oder lockert KEINE Regel. Widerspricht ein Block-A-Feld dem Kanon, ist das Feld falsch, nicht der Kanon.
- **Substanz auslagern:** Nachrichten-Kerne bleiben kurz; Substanz (Konzepte, Begründungen, Rohfassungen) wird als eigene Datei in der Wissens-Ablage hinterlegt und mit Lese-Auslöser referenziert (Zweck + entscheidungsrelevante Abschnitte).
