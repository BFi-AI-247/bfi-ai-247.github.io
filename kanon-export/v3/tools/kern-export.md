# Skillbook: Versionsierter Verfahrens-Kern-Export (generisch)

**Status:** Skillbook generisch (anbietbar) · **Quelle:** Export-Kern-Abgleich 29.09.2026 (Kanon↔Export, vollständige Prüfung) + Export-Verfahren v1–v3 (bewährt) · **Autor-Instanz:** Kanon_Sync (Destillation, RUN-ID SKILL-V3-2809, Welle 4) · **Trenn-Stempel:** Kapsel-Inhalt (konkrete Repo-Pfade, Commits, Projekt-Rollen, Prüf-Ausdruck) separat abgelegt im Kapsel-Teil; dieser Teil ist werkzeug- und projektneutral.

## Zweck

Ein portabler Verfahrens-Kern (werkzeugneutrale Verfahrens-Substanz) wird versioniert in einen öffentlichen, beweisbaren Bestand exportiert — so, dass jede Version nachprüfbar, unveränderlich und gegen den internen Kanon abgleichbar bleibt.

## Kern-Regeln

1. **Versionierung append-only:** Jede Version entsteht als neuer Ordner `vN/`; bestehende Versionen werden NIE überschrieben, verändert oder gelöscht. Nachträglichkeit ist ein Append (neue Version), nie ein Nachtrag an einer alten.
2. **Provenienz-Pflicht (Kopfzeile):** Jede Export-Datei trägt im Kopf: Erzeugungsdatum · Quelle (kanonischer Ort) · **Kanon-Stand mit Datum/Uhrzeit**, auf dem die Fassung beruht. Nie vage Herkunfts-Angaben („aus Vorgänger-Logik") — ein Versions-Vergleich muss zeigen können, welcher innere Stand exportiert wurde.
3. **Kanon↔Kern-Abgleich vor JEDEM Export (Pflicht-Verfahren):** Vor jeder neuen Version wird der letzte Export vollständig gegen den aktuellen Kanon geprüft (Voll-Lektüre beider Fassungen + Inhalts-Vergleich, nicht Stichprobe). Jede Abweichung wird klassifiziert: (a) Kanon weiter als Export → neue Version mit Abgleichs-Vermerk; (b) Export weiter als Kanon → Fund (unklar, welche Wahrheit gilt) → melden, nicht eigenmächtig angleichen; (c) Übereinstimmung → Vermerk im Beweis. **Rückgezogene oder geänderte Kanon-Regeln müssen im nächsten Export eingearbeitet sein** — ein Export, der widerlegte Substanz weitergibt, ist ein Substanz-Defekt.
4. **Unversehrtheits-Beweis:** Vor dem Push wird der Blob-Hash (Prüfsumme des exakten Dateiinhalts inkl. Längen-Header) der VOR-version remote gelesen und mit dem letzten Beweis verglichen — unverändert = Bestandsschutz bewiesen. Nach dem Push wird dieselbe Prüfsumme lokal gegen remote gerechnet (Längen-Berechnung in Bytes, nicht Zeichen — Mehrbyte-Kodierung fällt sonst durch).
5. **Kapselungs-Prüfung (0 Treffer):** Jede Export-Datei wird gegen ein festes Prüfwort-Muster (Plattform-, Domain-, Projekt-Schlagworte; im Projekt-Anhang verzeichnet, nie im Export selbst — es enthält die Prüfworte) geprüft, Groß-/Kleinschreibung ignoriert, Kopf eingeschlossen. Ein Treffer = Kapselungs-Defekt → abstrahieren statt benennen.
6. **README-Versionseintrag:** Je Version genau eine Zeile (Erzeugt · Auftrag · Kernstand · Beweis-Kurzvermerk); alte Zeilen unangetastet.
7. **Commit-Diziplin:** Nachricht trägt das projectübliche Nicht-Veröffentlichen-Präfix und den Ausnahme-/Auftrags-Verweis; nach dem Commit Diff-Verifikation des eigenen Commits (nur erwartete Dateien im Diff).
8. **Inhalts-Basis:** Commit-Inhalte NIEMALS über Web-Abruf als Basis (Proxy-Streuung); Inhalt aus der autoritativen Quelle, per Web gelesen nur mit Cache-Buster über einen Zweitweg, falls Rücklesen nötig ist.

## Abgleichs-Bericht (je Prüfung)

Als dokumentiertes Artefakt mit Mess-Stempel: Bestätigungen (Unversehrtheit, Kapselung, Stand-Gleichheit), Funds mit Klassifikation (Dokumentation / Kanon-offen / Projekt-Strang), eine Empfehlung. Funds werden nie still repariert — sie laufen über die zuständige Entscheidungsebene.
