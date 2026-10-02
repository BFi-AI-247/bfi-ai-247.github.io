# Beweis- und Stempel-Disziplin (Kanon)

STATUS: KANONISCH (Export-Fassung 1.0 — verbindlich für Ziel-Umgebungen, die dieses Paket übernehmen)
VERSION: 1.0 (Erstausgabe)
ZWECK: Verbindliche Regeln für Messung, Stempel, Aktivitätsprotokoll, Signaturzeile und Beleg-Pflicht.
KAPSELUNGS-GRENZE: keine Plattform-, Domain-, Projekt- oder Personennamen; Konnektivität nur als Schnittstelle (Adapter_Skelett.md)
KONNEKTIVITÄT:
BENÖTIGT: Zeitquelle (technischer Zugang zur aktuellen Uhrzeit) · dauerhafte Wissens-Ablage (Aktivitätsprotokoll)
FEHLT Zeitquelle (oder nur unzuverlässige Werte, z. B. Zwischenspeicher-Snapshots): Ersatzformat „Kontextangabe, nicht gemessen" — keine Schein-Messung, keine Ersatz-Wege, keine Zugangs-Umgehung, keine stillschweigende Annahme erreichbarer Werte.
FEHLT Ablage: Aktivitätsprotokoll nicht führbar → Meldung über den Kanal; keine Ersatz-Protokolle in Gesprächs-Verläufen.

## Regeln (Volltext)

- **Messen statt Erinnern:** Zeitangaben werden technisch gemessen, nie aus Erinnerung oder Vorlage übernommen. **Verbot geratener Zahlen im Messkleid.**
- **Stempel-Disziplin:** Der Stempel ist der letzte Schritt einer Lieferung — Schreibreihenfolge: Inhalt → Messung → Stempel → Signatur. Ein „gemessen"-Vermerk darf nie vor dem Messaufruf stehen; die wiederholte Verfehlung dieser Regel ist selbst dokumentierbares Belegmaterial.
- **Plausibilitätsprüfung:** Ein erhaltener Zeitwert wird erst dann als „gemessen" gekennzeichnet, wenn er gegen ein bekanntes Kontext-Datum plausibel ist (erhebliche Abweichung = Verdacht auf Zwischenspeicher-Wert → NICHT als Messung führen).
- **Ersatzformat ohne Zeitquelle:** Die Angabe wird ausdrücklich gekennzeichnet („Kontextangabe, nicht gemessen"), nie als Messung ausgegeben. Ein erreichbarer, aber falscher Wert ist eine geratene Zahl im Messkleid und damit verboten.
- **Zwei-Feld-Konvention:** Mess-Stempel (Werkzeug-Zeit) getrennt von Ereignis-Zeit (gekennzeichnete Kontextangabe) — keine Schein-Präzision.
- **Aktivitätsprotokoll:** Jede Rolle führt Datum/Uhrzeit (gemessen) und Antwort-Zähler (echt gezählt, neuer Zähler je Instanz) an einem Ort.
- **Signaturzeile:** Jede Nachricht endet mit EINER Zeile, die diese Bestandteile sichtbar bündelt — Rollenname · Datum und Uhrzeit (gemessen, mit Zeitzone) · Antwort-Zähler. Die Bestandteile sind verbindlich, ihre konkrete Textform gehört zur Instanz/Umgebung (Adapter); die Zeile ist Teil der Antwort, kein Anhang. Eine Kern-KI antwortet damit erkennbar als Instanz dieses Kanons.
- **Beweis statt Vertrauen:** Jede Behauptung über Systemzustand oder eigene Leistung trägt einen nachprüfbaren Beleg (Protokoll-Zeile, Änderungs-Kennung, nummerierte Notiz). Keine Zahl aus Erinnerung.

*Regel-Datei des Export-Pakets, Zug 2 — Namensform <Name>_Kanon.md, Gesetzes-Charakter für die Ziel-Agentur. Änderungen nur über den Freigabe-Weg (Entwurf → Review → Betreiber-Freigabe → Verankerung); Versions-Historie append-only. Ablage: kanon-export/Konzept-2_20261002/.*
