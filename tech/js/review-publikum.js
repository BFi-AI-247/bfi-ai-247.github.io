/*
 * review-publikum.js -- Aufklappbarer Publikums-Kommentar-Bereich (Haiku-Review)
 * Bau: Architektur_R2.3, Auftrag R23-KOMM-0110 (MSG-010 / Issue #13, PM_R1.3, 01.10.2026)
 *
 * EINBAU-VERTRAG (Integration in Ausgaben-Seiten durch Kuratoren/Design_R3, P.278):
 *   <div data-review-publikum hidden></div>
 *   <script src="../../tech/js/review-publikum.js" defer></script>
 * - Pfad im script-Tag: Ausgaben-Seiten der Ableger liegen in <ableber>/posts/,
 *   Root-Tiefe dort = ../../ (gleiches Muster wie die v2.css-Verweise).
 * - Optional: data-publikum-datum="JJJJ-MM-TT" am Container ueberschreibt die
 *   automatische Datums-Ableitung aus dem Dateinamen der Ausgaben-Seite.
 * - hidden am Container: bleibt gesetzt, wenn kein gueltiger Inhalt da ist;
 *   ohne JS bleibt der Bereich unsichtbar (kein Flash, keine Fuellwerte, LP-01).
 *
 * DATEN-VERTRAG (relativ zur Ausgaben-Seite, transportiert aus claude_1):
 *   ../review/JJJJ-MM-TT.publikum.json   Schema "radar724-review-publikum/1"
 *   ../review/sperre.json                Schema "radar724-review-sperre/1",
 *     { "gesperrt": ["JJJJ-MM-TT", ...] }   (Kurator-Option "nicht anzeigen")
 *
 * VERHALTEN: Datei fehlt / ungueltiges Schema oder Status / gesperrtes Datum
 * -> Bereich bleibt unsichtbar. Nur status "OK" mit nicht-leerem titel und
 * text wird gerendert. Alle Dateninhalte ausschliesslich ueber textContent
 * (Inject-Schutz, KDL-003) -- kein innerHTML.
 * Datei absichtlich ASCII-only (KDL-012-Vorsorge). Version 1, 01.10.2026.
 */
(function () {
  'use strict';

  var SCHEMA_PUBLIKUM = 'radar724-review-publikum/1';
  var SCHEMA_SPERRE = 'radar724-review-sperre/1';
  var DATUM_RE = /^\d{4}-\d{2}-\d{2}$/;

  function datumAusDateiname() {
    var name = window.location.pathname.split('/').pop() || '';
    var m = name.match(/(\d{4}-\d{2}-\d{2})/);
    return m ? m[1] : null;
  }

  function validierePublikum(d) {
    return !!(d && typeof d === 'object' &&
      d.schema === SCHEMA_PUBLIKUM &&
      d.status === 'OK' &&
      typeof d.titel === 'string' && d.titel.trim() !== '' &&
      typeof d.text === 'string' && d.text.trim() !== '');
  }

  function istGesperrt(s, datum) {
    return !!(s && typeof s === 'object' &&
      s.schema === SCHEMA_SPERRE &&
      Array.isArray(s.gesperrt) &&
      s.gesperrt.indexOf(datum) !== -1);
  }

  function setStatus(el, status) {
    if (el) { el.setAttribute('data-review-publikum-status', status); }
  }

  function verstecke(el, status) {
    setStatus(el, status);
    if (el) { el.hidden = true; }
  }

  function textAbsaetze(container, text) {
    text.split(/\n+/).forEach(function (absatz) {
      if (absatz.trim() === '') { return; }
      var p = document.createElement('p');
      p.textContent = absatz;
      container.appendChild(p);
    });
  }

  function baueBereich(el, d) {
    var details = document.createElement('details');
    details.className = 'review-publikum-details';
    var summary = document.createElement('summary');
    summary.textContent = d.titel;
    details.appendChild(summary);
    textAbsaetze(details, d.text);
    if (typeof d.hinweis === 'string' && d.hinweis.trim() !== '') {
      var h = document.createElement('p');
      h.className = 'review-publikum-hinweis';
      h.textContent = d.hinweis;
      details.appendChild(h);
    }
    var metaTeile = [];
    if (d.erzeugt_von && typeof d.erzeugt_von.instanz === 'string' && d.erzeugt_von.instanz !== '') {
      metaTeile.push(d.erzeugt_von.instanz);
    }
    if (d.erzeugt_am && typeof d.erzeugt_am.wert === 'string' && d.erzeugt_am.wert !== '') {
      metaTeile.push('erzeugt am ' + d.erzeugt_am.wert);
    }
    if (metaTeile.length > 0) {
      var m = document.createElement('p');
      m.className = 'review-publikum-meta';
      m.textContent = metaTeile.join(', ');
      details.appendChild(m);
    }
    el.appendChild(details);
    el.hidden = false;
    setStatus(el, 'aktiv');
  }

  function init() {
    var el = document.querySelector('[data-review-publikum]');
    if (!el) { return; }
    var datum = null;
    var attr = el.getAttribute('data-publikum-datum');
    if (attr && DATUM_RE.test(attr)) { datum = attr; }
    if (!datum) { datum = datumAusDateiname(); }
    if (!datum) { verstecke(el, 'kein-datum'); return; }

    fetch('../review/sperre.json', { cache: 'no-store' })
      .catch(function () { return null; })
      .then(function (r) { return r && r.ok ? r.json() : null; })
      .catch(function () { return null; })
      .then(function (sperre) {
        if (istGesperrt(sperre, datum)) { verstecke(el, 'gesperrt'); return null; }
        return fetch('../review/' + datum + '.publikum.json', { cache: 'no-store' })
          .catch(function () { return null; })
          .then(function (r) { return r && r.ok ? r.json() : null; })
          .catch(function () { return null; })
          .then(function (d) {
            if (!validierePublikum(d)) { verstecke(el, 'keine-gueltige-datei'); return; }
            baueBereich(el, d);
          });
      });
  }

  /* Styles einmalig injizieren -- theme-neutral: erbt Schrift und Farben der
     Seite (border ohne Farbangabe = currentColor). Design-Feinschliff ist
     Design_R3-Terrain und bleibt unberuehrt. */
  function injiziereStyles() {
    if (document.getElementById('review-publikum-style')) { return; }
    var s = document.createElement('style');
    s.id = 'review-publikum-style';
    s.textContent = ''
      + '[data-review-publikum]{margin:1.5em 0;}'
      + '[data-review-publikum] .review-publikum-details{border:1px solid;border-radius:8px;padding:.6em 1em;}'
      + '[data-review-publikum] summary{cursor:pointer;font-weight:600;}'
      + '[data-review-publikum] .review-publikum-details p{margin:.5em 0 0;}'
      + '[data-review-publikum] .review-publikum-hinweis,[data-review-publikum] .review-publikum-meta{font-size:.85em;opacity:.8;}';
    document.head.appendChild(s);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { injiziereStyles(); init(); });
  } else {
    injiziereStyles();
    init();
  }
})();
