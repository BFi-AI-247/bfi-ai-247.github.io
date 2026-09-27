# Kanon-Export

Versionierte Auslagerung des KI-Framework-Exports (Framework-Kern, RADAR-724-Anhang, Umgebungs-Adapter) aus der internen Wissens-Ablage in dieses öffentliche Repository.

## Zweck

Der Export macht den Framework-Bestand öffentlich nachprüfbar: eine beliebige KI-Umgebung kann mit den drei Dateien Agenten-Instanzen nach den Verfahren des Frameworks initialisieren (Kern = portable Verfahrens-Substanz, Anhang = Projektspezifika, Adapter = Werkzeug-Quirks der Zielumgebung).

## Versionierungs-Prinzip

**Versionierung auf Betreiber-Initiative, kein Dauerabgleich.** Jede Version (v1, v2, …) wird ausschließlich auf ausdrücklichen Auftrag des Betreibers erzeugt — kein Scheduler, keine automatische Aktualisierung, kein Abgleich bei Regel-Änderungen. Bestehende Versionen werden nie überschrieben, verändert oder gelöscht (append-only); jede neue Version entsteht als neuer Ordner `vN/` mit Eintrag in dieser README.

## Betreiber-Weck-Kontext

Der Export bleibt unverlinkt (kein Eintrag in index.html oder Footer) — eine Live-Verlinkung auf der Website ist Gegenstand eines separaten Betreiber-Beschlusses (LP-05). Zuständig für Erzeugung und Versionierung: Spezial-Instanz Kanon_Sync (Initialisierung 27.09.2026, Betreiber-Beschluss; Schreibrecht NUR für Pfade unter `kanon-export/` als dokumentierte Regel-3-Ausnahme — jeder Commit trägt [no-post] und den Ausnahme-Verweis im Kommentar).

## Versionen

| Version | Erzeugt | Auftrag |
|---|---|---|
| v1 | 27.09.2026 | Betreiber-Initiative (Beschluss 27.09.2026, Kanon-Sync-Chat); Quelle: Wissens-Ablage (framework-kern.md, reinit-anhang-radar724.md, reinit-adapter-vibe.md), 1:1, byte-exakt; Kapselungs-Prüfung des Kerns: 0 Treffer |
