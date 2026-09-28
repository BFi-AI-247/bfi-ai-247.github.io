# Kanon-Export

Versionierte Auslagerung des KI-Framework-Exports aus der internen Wissens-Ablage in dieses öffentliche Repository.

## Zweck

Der Export macht den Framework-Bestand öffentlich nachprüfbar. Seit v3 gilt das Vierschema: **Kern** (portable Verfahrens-Substanz), **Tools** (generische Skillbooks — werkzeugneutral, ohne Projektdaten, von fremden KI-Umgebungen anwendbar), **Adapter** (Werkzeug-Quirks einer Zielumgebung), **Personas** (projektspezifische Instanzierung). Je Skillbook existiert zusätzlich ein Kapsel-Teil (Projekt-/Umgebungs-Wahrheiten), der bewusst NICHT exportiert wird — er verbleibt in der internen Wissens-Ablage. Öffentlich angeboten werden nur die generischen Teile.

## Versionierungs-Prinzip

**Versionierung auf Betreiber-Initiative, kein Dauerabgleich.** Jede Version (v1, v2, …) wird ausschließlich auf ausdrücklichen Auftrag des Betreibers erzeugt — kein Scheduler, keine automatische Aktualisierung, kein Abgleich bei Regel-Änderungen. Bestehende Versionen werden nie überschrieben, verändert oder gelöscht (append-only); jede neue Version entsteht als neuer Ordner `vN/` mit Eintrag in dieser README.

## Betreiber-Weck-Kontext

Der Export bleibt unverlinkt (kein Eintrag in index.html oder Footer) — eine Live-Verlinkung auf der Website ist Gegenstand eines separaten Betreiber-Beschlusses (LP-05). Zuständig für Erzeugung und Versionierung: Spezial-Instanz Kanon_Sync (Initialisierung 27.09.2026, Betreiber-Beschluss; Schreibrecht NUR für Pfade unter `kanon-export/` als dokumentierte Regel-3-Ausnahme — jeder Commit trägt [no-post] und den Ausnahme-Verweis im Kommentar).

## Versionen

| Version | Erzeugt | Auftrag |
|---|---|---|
| v1 | 27.09.2026 | Betreiber-Initiative (Beschluss 27.09.2026, Kanon-Sync-Chat); Kern + Anhang + Adapter, 1:1, byte-exakt; Kapselungs-Prüfung des Kerns: 0 Treffer |
| v2 | 27.09.2026 | Betreiber-Initiative (Ein-Wort-Auftrag, Kanon-Sync-Chat); Kern-Stand 13:50 Uhr (Kap. 7+8, Nacharbeit, Signaturzeilen-Pflicht); Anhang/
Adapter unverändert; Kapselungs-Prüfung: 0 Treffer |
| v3 | 28.09.2026 | Betreiber-Initiative (RUN-ID SKILL-V3-2809, Kanon-Sync-Chat); Vierschema-Ordnung: Kern (Stand 27.09., 13:50 Uhr, unverändert aus v2-Logik) + Skillbooks Welle 1+2 (generisch, neu destilliert — Kapsel-Teile bewusst nicht exportiert): Welle 1 tools/{inject-schutz, sprach-ebenen, beweis-disziplin}.md; Welle 2 tools/{auftragsformat, leitplanken, instanzwechsel, betriebs-modell, datenrecherche, drive-ablage, zeitjustierung}.md (Quellen-Liste offen laut Betreiber-Entscheidung 28.09.); Adapter/Personas: Öffentlichkeits-Entscheidung des Betreibers folgt; Trenn-Selbsttest je Skillbook: 0 Treffer; Original-Quelldateien nur gelesen, nie geschrieben |
