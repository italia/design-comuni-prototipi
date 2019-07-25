---
layout: page
title: Esempi
description: Esempi
lang: it
ref: esempi
order: 3
toc: false
full-width: true
redirect_from:
  - /esempi
  - /esempi.html
---

<style>
@media (max-width: 992px) {
    .col-right-bg,
    .col-left-bg {
        background: url({{ site.baseurl }}/assets/images/patterns/pattern-08.svg) repeat;
    }
}
@media (min-width: 992px) {
    .section-1 {
        background: linear-gradient(90deg, #f2f7fc 50%, transparent 50%), url({{ site.baseurl }}/assets/images/patterns/pattern-08.svg)
    }
}
</style>
<div class="section p-0 section-1">
  <div class="section-content">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-4 col-right-bg order-2">
          <div class="col-right-bg-inner bg-muted"></div>
        </div>
        <div class="col-12 col-lg-8 px-4 py-5 order-1 bg-muted">
          <h2>Il riuso nella Pubblica Amministrazione</h2>
          <p class="mw-50">In questa pagina vogliamo raccogliere una serie di esempi di Pubbliche Amministrazioni virtuose, che hanno scelto di adottare le linee guida proposte dal modello che vi abbiamo raccontato.</p>
          <p class="mw-50">Non solo: queste Pubbliche Amministrazioni hanno deciso di condividere il codice sorgente utilizzato per la realizzazione dei propri siti così come previsto dall’<a class="font-weight-bold" href="https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/v2017-12-13/_rst/capo6_art69.html">art. 69 del Codice dell’Amministrazione Digitale</a>.</p>
        </div>
      </div>
    </div>
  </div>
</div> 

<style>
@media (min-width: 992px) {
    .section-2 {
        background: linear-gradient(90deg, transparent 50%, #FFF 50%), url({{ site.baseurl }}/assets/images/patterns/pattern-08.svg) repeat;
    }
}
</style>
<div class="section p-0 bg-cover section-2">
  <div class="section-content">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-4 col-left-bg order-2 order-lg-1">
          <div class="col-left-bg-inner bg-white"></div>
        </div>
        <div class="col-12 col-lg-8 px-4 py-5 order-1 order-lg-2 bg-white">
          <h2>Il Comune di Cagliari</h2>
          <p>Il Comune di Cagliari è stato uno dei primi comuni italiani ad adottare le nuove linee guida di design e quindi a rinnovare il proprio sito web. Di seguito elenchiamo i <span class="font-weight-bold">prototipi statici del Comune di Cagliari</span> realizzati e i file sorgente:</p>
          <div id="collapseDiv1" class="collapse-div" role="tablist">
            <div class="collapse-header" id="collapse-template-heading">
              <button data-toggle="collapse" data-target="#collapse-template" aria-expanded="false" aria-controls="collapse-template">Tutti i template a disposizione</button>
            </div>
            <div id="collapse-template" class="collapse" role="tabpanel" aria-labelledby="collapse-template-heading">
              <div class="collapse-body">
                <div class="link-list-wrapper">
                    <ul class="link-list">
                      <li>
                        <a class="list-item" href="{{ site.baseurl }}/esempi/comune-di-cagliari/pagine-statiche/index.html">
                          <svg class="icon icon-sm icon-primary"><use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use></svg>
                          <span class="d-inline">Homepage</span>
                        </a>
                      </li>
                      <li>
                        <a class="list-item" href="{{ site.baseurl }}/esempi/comune-di-cagliari/pagine-statiche/amministrazione.html">
                          <svg class="icon icon-sm icon-primary"><use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use></svg>
                          <span class="d-inline">Pagina Amministrazione</span>
                        </a>
                      </li>
                      <li>
                        <a class="list-item" href="{{ site.baseurl }}/esempi/comune-di-cagliari/pagine-statiche/documenti.html">
                          <svg class="icon icon-sm icon-primary"><use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use></svg>
                          <span class="d-inline">Pagina Documenti</span>
                        </a>
                      </li>
                      <li>
                        <a class="list-item" href="{{ site.baseurl }}/esempi/comune-di-cagliari/pagine-statiche/evento1.html">
                          <svg class="icon icon-sm icon-primary"><use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use></svg>
                          <span class="d-inline">Pagina Evento (festa di Sant'Efisio)</span>
                        </a>
                      </li>
                      <li>
                        <a class="list-item" href="{{ site.baseurl }}/esempi/comune-di-cagliari/pagine-statiche/evento2.html">
                          <svg class="icon icon-sm icon-primary"><use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use></svg>
                          <span class="d-inline">Pagina Evento (canti di donne)</span>
                        </a>
                      </li>
                      <li>
                        <a class="list-item" href="{{ site.baseurl }}/esempi/comune-di-cagliari/pagine-statiche/giuntacomunale.html">
                          <svg class="icon icon-sm icon-primary"><use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use></svg>
                          <span class="d-inline">Pagina Giunta Comunale</span>
                        </a>
                      </li>
                      <li>
                        <a class="list-item" href="{{ site.baseurl }}/esempi/comune-di-cagliari/pagine-statiche/servizi.html">
                          <svg class="icon icon-sm icon-primary"><use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use></svg>
                          <span class="d-inline">Pagina Servizi</span>
                        </a>
                      </li>
                      <li>
                        <a class="list-item" href="{{ site.baseurl }}/esempi/comune-di-cagliari/pagine-statiche/iscrizioni_asili_nido.html">
                          <svg class="icon icon-sm icon-primary"><use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use></svg>
                          <span class="d-inline">Pagina Servizio (iscrizione asili nido)</span>
                        </a>
                      </li>
                      <li>
                        <a class="list-item" href="{{ site.baseurl }}/esempi/comune-di-cagliari/pagine-statiche/prenota_appuntamento.html">
                          <svg class="icon icon-sm icon-primary"><use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use></svg>
                          <span class="d-inline">Pagina Servizio (prenotazione appuntamento)</span>
                        </a>
                      </li>
                      <li>
                        <a class="list-item" href="{{ site.baseurl }}/esempi/comune-di-cagliari/pagine-statiche/muoversi.html">
                          <svg class="icon icon-sm icon-primary"><use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use></svg>
                          <span class="d-inline">Pagina Argomento (muoversi)</span>
                        </a>
                      </li>
                      <li>
                        <a class="list-item" href="{{ site.baseurl }}/esempi/comune-di-cagliari/pagine-statiche/notizia.html">
                          <svg class="icon icon-sm icon-primary"><use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use></svg>
                          <span class="d-inline">Pagina Notizia</span>
                        </a>
                      </li>
                      <li>
                        <a class="list-item" href="{{ site.baseurl }}/esempi/comune-di-cagliari/pagine-statiche/novita.html">
                          <svg class="icon icon-sm icon-primary"><use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use></svg>
                          <span class="d-inline">Pagina Novità</span>
                        </a>
                      </li>
                      <li>
                        <a class="list-item" href="{{ site.baseurl }}/esempi/comune-di-cagliari/pagine-statiche/ricerca.html">
                          <svg class="icon icon-sm icon-primary"><use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use></svg>
                          <span class="d-inline">Risultato Ricerca</span>
                        </a>
                      </li>
                    </ul>
                </div> 
              </div>
            </div>
          </div>
          <div class="link-list-wrapper mt-4">
            <ul class="link-list">
              <li>
              <a class="list-item" href="{{ site.baseurl }}/esempi/comune-di-cagliari/pagine-statiche.zip">
                <svg class="icon icon-sm icon-primary"><use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use></svg>
                <span class="d-inline">Tutti i file sorgente del prototipo in formato <code>.zip</code>.</span>
              </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
@media (min-width: 992px) {
    .section-3 {
        background: linear-gradient(90deg, #17324d 50%, transparent 50%), url({{ site.baseurl }}/assets/images/patterns/pattern-08.svg) repeat;
    }
}
</style>
<div class="section p-0 section-3">
  <div class="section-content">
    <div class="container white-color">
      <div class="row">
        <div class="col-12 col-lg-4 col-right-bg order-2">
          <div class="col-right-bg-inner bg-dark"></div>
        </div>
        <div class="col-12 col-lg-8 px-4 py-5 order-1 bg-dark">
          <h2>Il Consorzio dei Comuni Trentini</h2>
          <p>Il Consorzio dei Comuni Trentini rappresenta oggi oltre un centinaio di comuni del Trentino Alto Adige.</p>
          <p>Il Consorzio sta lavorando con il Team per la Trasformazione Digitale per condividere il proprio lavoro sulla ricerca con gli utenti, i prototipi, e i template che stanno realizzando.</p>
        </div>
      </div>
    </div>
  </div>
</div>


