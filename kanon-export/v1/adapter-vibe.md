Export v1 — erzeugt 27.09.2026 auf Betreiber-Initiative, Quelle: radar-247/reinit-adapter-vibe.md

# Umgebungs-Adapter — Zielumgebung: Vibe (Mistral-AI-Work-Chat) (EBENE 2b)

**Status:** ENTWURF (erste Ausdifferenzierung; adaptiert die aktuelle Betriebsumgebung des RADAR-724-Teams) · **Autor-Instanz:** Framework_R6.1 · **Zweck:** Werkzeug-Quirks EINER Zielumgebung, gemappt auf die Connectoren-Set-Schnittstellen des Framework-Kerns (agent-zusammenarbeit/framework-kern.md, Kapitel 7). Ein Umgebungswechsel tauscht NUR diese Datei.

## Connectoren-Set-Mapping

1. **Zeitquelle:** `run_typescript` → `new Date()`, Ausgabe in Europe/Berlin (`Intl.DateTimeFormat`, timeZone 'Europe/Berlin'). Bekannte Falle: Stempel vor Messung schreiben (dreifach dokumentierter Vorfall — Schreibreihenfolge Kern-Kapitel 5 zwingend).
2. **Dauerhafte Wissens-Ablage:** Dateisystem-Zugang unter /home/user/knowledge/ (Topics mit KNOWLEDGE.md je Topic); Signatur-/Signaturen in Chats, nicht in Repos oder veröffentlichten Posts.
3. **Beweisbarer Bestand:** GitHub-Repository `BFi-AI-247/bfi-ai-247.github.io`, Branch main — Abruf frisch über die GitHub-API (Blob-/create-or_update_file mit SHA; niemals über raw-Webabrufe für FRISCHE Inhalte — Cache/Proxy streuen Zeilenumbrüche); Code-Suche mit text_matches als Beweisraum-Ersatz (get_file_contents liefert teils nur Erfolgsmeldung ohne Inhalt); Schreibzugriff nur über die Bau-Rollen (Regel 3); Diff-Verifikation des eigenen Commits; Commit-Präfix [no-post] für Nicht-Ausgaben-Commits.
4. **Auftragskanal:** Chat je Rolle; Betreiber überträgt Nachrichten zwischen Chats (kopierfertige Nachrichten, Zwei-Kanal-Format für Pilot PM↔R2.2); Canvas-Dateien unter /home/user/canvases/ für Betreiber-gerichtete Ansichten — bekannte Transportgrenze: sehr große Dateien (Fassung 3, ~30 KB) über Canvas fehlgeschlagen → Knowledge-Datei + Lese-Auslöser (Anhang-Auslagerungs-Regel, kanonisch 27.09., 09:03 Uhr).
5. **Anhang-/Adapter-Orte:** Knowledge-Topics je Zuständigkeit (radar-247, agent-zusammenarbeit, je Ableger-Topic); skills/-Ableitungen sind chat-gebunden und unzuverlässig (Skill-Verlust-Klasse, P.108/110) — Originale immer in der Knowledge.

## Weitere Eigenheiten dieser Umgebung

- Scheduled Tasks: Vibe-Schedules (13 Jobs, Soll-Zeiten radar-247/betriebszeiten.md); GitHub-Actions nur für Social-Media-Posts; Bluesky-Pickup-Crons laufen in Berliner Zeit (DST-Justierung P.173).
- Chat-Duplikate können bei Initialisierung entstehen (R6-Vorfall 27.09.): gefrorene Duplikate nicht bedienen; one-strang gilt (Diagnose P.229; Chat-Duplikat-Verfahren = Regel-Entwurf empfohlen).
- Laufende Antwort-Kontexte altern (Context Rot) — Health-Stufe und Wechsel-Fenster selbst melden; Instanz-Neustart ersetzt, Kanon bleibt.

— Framework_R6.1 · Ebene 2b von 3 · Änderungen über den Freigabe-Weg.
