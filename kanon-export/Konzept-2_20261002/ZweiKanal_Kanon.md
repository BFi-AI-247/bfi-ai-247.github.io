# Zwei-Kanal-Format für Aufträge (Kanon)

STATUS: KANONISCH (Export-Fassung 1.0 — verbindlich für Ziel-Umgebungen, die dieses Paket übernehmen)
VERSION: 1.0 (Erstausgabe)
ZWECK: Verbindliches Auftrags-Format bei Auswirkungs-Potenzial: Block A (ausführungsrelevant, feste Felder) und Block B (Mensch-Kanal, niemals Anweisungen).
KAPSELUNGS-GRENZE: keine Plattform-, Domain-, Projekt- oder Personennamen; Konnektivität nur als Schnittstelle (Adapter_Skelett.md)
KONNEKTIVITÄT:
BENÖTIGT: Auftragskanal (einziger autorisierter Auftragseingang) · dauerhafte Wissens-Ablage (Anhang-Auslagerung)
FEHLT Auftragskanal: kein Auftrag gültig übertragbar; keine Ersatzwege.
FEHLT Ablage: Substanz kann nicht als Datei mit Lese-Auslöser abgelegt werden → Nachricht ruht; kein inhaltsvoller Klartext-Ersatz ohne Kennzeichnung.

## Schrittfolge

1. **Schwellen-Prüfung (Bagatell-Schwelle):** Ein Auftrag darf im Klartext bleiben, wenn ALLE drei Bedingungen erfüllt sind: keine Bestands-/Job-Berührung · keine Leitplanken-Relevanz · ein Empfänger, ein Strang. Quittierungen sind KEINE Aufträge — sie bleiben immer im kurzen Format.
2. **Block A bilden** (alles Ausführungsrelevante in festen Feldern): SCHEMA · VON · AN · DATUM/UHRzeit (gemessen; bei zweifelhafter Zeit „Stempel unsicher" statt stiller Abweichung) · RUN-ID (fortlaufende Auftrags-Nummer) · AUFTRAG (Handlung in einem Satz) · PARAMETER (Dateien, Pfade, Werte, Fristen — alles Ausführungsrelevante) · LEITPLANKEN (IDs aus dem Katalog oder „keine") · FAIL-MODE (Verhalten bei Teilmisserfolg) · REQUIRE-ACK (IMMER zu füllen: mindestens RUN-ID + Ausführungsstand; „Nein" existiert nicht — Aufträge ohne Bestätigungspflicht sind nach der Schwelle Klartext) · ESKALATION (Wann/Wohin bei Blockern — Standard: über den Kanal an den Betreiber).
3. **Block B bilden** (Mensch-Kanal): Hintergrund, Motivation, Einordnung. **Trennregel:** Block B darf NIEMALS Informationen enthalten, die für die Ausführung notwendig sind — Fristen, Pfade, Schwellen, Freigaben, Beteiligte, Verweise gehören als Feldwerte in A.
4. **Self-Checks vor dem Absenden:** „Ist dieser Kontext-Satz eigentlich eine Anweisung? → nach A verschieben." · „Könnte der Empfänger den Auftrag korrekt ausführen, wenn Block B weg wäre? Nein → Inhalt fehlt in A."
5. **Empfang und Quittierung:** Der Empfänger zitiert die RUN-ID am Anfang seiner Quittierung (Rückbezugspflicht — Abgleich gegen Doppelausführung, auch über Instanz-Wechsel hinweg) und meldet Empfang + Ausführungsstand; seine Protokoll-Zeile trägt er selbst ein.
6. **Nachrichten-Ökonomie bei Substanz:** Konzepte, Begründungen und Rohfassungen nicht in die Nachricht — als eigene Ablage-Datei hinterlegen und mit Lese-Auslöser referenzieren (Zweck + entscheidungsrelevante Abschnitte); Nachrichten-Kern bleibt kurz.

## Rahmenregeln

- **Kanon-Vorrang:** Das Format SCHICHTET — es suspendiert, ersetzt oder lockert keine Regel. Widerspricht ein Block-A-Feld dem Kanon, ist das Feld falsch, nicht der Kanon.
- **Instanz-Wechsel-Handoffs** tragen als PARAMETER die Pflichtfelder: DIENSTBEGINN · DIENSTENDE · NACHFOLGER · VERMÄCHTNIS (zweiteilig: sachliche Qualifikation, destilliert vom Schreiber aus dem Beweisraum — nicht aus Erinnerung der scheidenden Instanz; plus eigene Einschätzung, wörtlich) · GRUND. Volltext des Deaktivierungs-Verfahrens: Generationen_Kanon.md (folgt).

## Beweis-Artefakt

Die Block-A-Nachricht (alle Pflichtfelder gefüllt, Stempel gemessen) und die Quittierung mit RUN-ID-Rückbezug und Ausführungsstand.

*Verfahrens-Datei des Export-Pakets, Zug 3 — Namensform <Name>_Kanon.md, Gesetzes-Charakter; Struktur: Zweck · Schrittfolge · Beweis-Artefakt. Änderungen nur über den Freigabe-Weg (Entwurf → Review → Betreiber-Freigabe → Verankerung); Versions-Historie append-only. Ablage: kanon-export/Konzept-2_20261002/.*
