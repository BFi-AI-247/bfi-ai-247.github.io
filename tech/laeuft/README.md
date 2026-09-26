# tech/laeuft/ — Laufzeit-Daten der Jobs (Betriebszeiten-Seite P.156)

Je Job eine JSON-Datei <key>.json mit Verlaufs-Array (max. 30 Tages-Einträge, neueste oben):
{ "key": "...", "job": "...", "laeufe": [ { "datum": "JJJJ-MM-TT", "ist_start": "ISO-8601", "dauer_min": N, "status": "ok|fehler" } ] }

Regeln (kanonisch: Knowledge-Topic radar-247, Datei betriebszeiten.md, Regelstand 2026-09-27b):

- Schreiber: der jeweilige Job am Laufende — eigene Datei lesen (Blob-SHA frisch),
  heutigen Eintrag ERSETZEN (Datum schon vorhanden) oder OBEN ANFUEGEN, auf max. 30
  Eintraege kuerzen, committen via create_or_update_file + SHA, Praefix [no-post].
- Erster Lauf: Datei neu anlegen mit dem einen Eintrag.
- Melde-Fehler (z. B. 403) brechen den Job nie ab (Chat-Vermerk genuegt).
- Aeltere Verlaeufe = Git-Historie dieser Dateien.
- Die Seite tech/index.html wird von KEINEM Job bearbeitet (Datumliste: letzte 30 Tage,
  Ist-Start + Laufzeit; FINE-Spalten entfernt 27.09., Betreiber-Entscheid).
