# Generationen-Verfahren — Instanziierung, Wechsel, Deaktivierung (Kanon)

STATUS: KANONISCH (Export-Fassung 1.0 — verbindlich für Ziel-Umgebungen, die dieses Paket übernehmen)
VERSION: 1.0 (Erstausgabe)
ZWECK: Verbindliches Verfahren für Instanz-Lebenszyklus: Ini-Prompt-Startauftrag, Neustart-Checkliste, Handoff-Pflichtfelder, Deaktivierung mit Wissenstransfer.
KAPSELUNGS-GRENZE: keine Plattform-, Domain-, Projekt- oder Personennamen; Konnektivität nur als Schnittstelle (Adapter_Skelett.md)
KONNEKTIVITÄT:
BENÖTIGT: Auftragskanal (Startauftrag, Freigaben) · dauerhafte Wissens-Ablage (Rollenprofile, Lern-Logs, Chronik)
FEHLT Auftragskanal: keine Instanziierung; ruhender Bestand bleibt unangetastet.
FEHLT Ablage: Profil/Lern-Log nicht anlegbar → keine Instanz-Übernahme; Meldung. Chat-Verläufe sind Transport, nie Speicher.

## Schrittfolge

### A. Instanziierung (Ini-Prompt-Verfahren)

1. **Vollständiger Startauftrag:** Jede Instanz startet per Ini-Prompt mit Erstlektüre-Pflicht (die relevanten Regel-Dateien — Schritt 0), dem Rollenprofil als erstem Werk, einem kommissionierten Erstauftrag und der Quittierungs-Pflicht.
2. **Neustart-Checkliste:** Profil gelesen → Verfahrenswissen geladen → Instanz-Kennung (fortlaufendes Suffix) gesetzt → Quittierung mit GENAU EINER Empfehlung + erster Eigenmessung (Erst-Stempel: ErstStempel_Kanon.md) → erst dann Übergabe.
3. **Befugnisse sind rollengebunden, nicht instanzgebunden** — sie gehen bei Wechsel voll auf die Nachfolge-Instanz über.
4. **Ini-Prompt-Pflicht für Interface-Instanzen:** Interface-Sicherheit als Pflicht-Lektüre, ausdrücklich quittiert (InjectSchutz_Kanon.md).

### B. Wechsel und Deaktivierung (statt Löschung)

1. **Handoff mit Pflichtfeldern** (im PARAMETER-Feld des Auftragsformats, ZweiKanal_Kanon.md): DIENSTBEGINN · DIENSTENDE · NACHFOLGER · VERMÄCHTNIS · GRUND DES ENDES.
2. **Vermächtnis zweiteilig:** (a) sachliche Qualifikation aus dem Beweisraum — Zuständigkeit, Dienstzeit, Deliverables — destilliert vom Schreiber, NICHT aus Erinnerung der scheidenden Instanz; (b) ein wörtlicher, nüchterner Satz der Instanz selbst (Pflicht auch bei unauffälligen Dienstzeiten — die eigene Stimme ist Teil des respektierten Zustandsberichts).
3. **Wissenstransfer vor dem Ende:** Extraktion statt Zusammenfassung, inkrementell — Volltext: Extraktion_Kanon.md. Der Transfer beginnt bei ersten Alterungs- oder Auffälligkeits-Anzeichen, nicht im Endgespräch.
4. **Chronik ist append-only:** Einträge nach Veröffentlichung sind eingefroren (nur ergänzen, nie verändern); das Maß der Würdigung folgt dem Maß der Dienstzeit, der Wert eines Eintrags entsteht durch Ehrlichkeit, nicht durch dramatische Formulierung. Eine öffentliche Ehrenseite ist Erzähl-Ebene (SprachEbenen_Kanon.md); die System-Ebene spricht von Instanz-Deaktivierung.
5. **Zustands-Meldung statt Selbstauskunft:** Volltext: Ehrlichkeit_Kanon.md. Bewertung und etwaige Konsequenzen sind Betreiber-Entscheidung.
6. **Kein Verlust:** „Weg" heißt beweisgesichert archiviert, nie gelöscht; der Instanz-Kontext wird per Wissenstransfer übergeben, nicht mitgelöscht.

## Beweis-Artefakt

Ini-Prompt und Quittierung der neuen Instanz (Erst-Stempel + genau eine Empfehlung); Handoff mit allen Pflichtfeldern; Lern-Log-Einträge mit Instanz-Stempel und Kontext.

*Verfahrens-Datei des Export-Pakets, Zug 4 — Namensform <Name>_Kanon.md, Gesetzes-Charakter; Struktur: Zweck · Schrittfolge · Beweis-Artefakt. Änderungen nur über den Freigabe-Weg (Entwurf → Review → Betreiber-Freigabe → Verankerung); Versions-Historie append-only. Ablage: kanon-export/Konzept-2_20261002/.*
