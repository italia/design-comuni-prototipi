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
        <div class="col-12 col-lg-2 col-right-bg order-2">
          <div class="col-right-bg-inner bg-muted"></div>
        </div>
        <div class="col-12 col-lg-10 px-4 py-5 order-1 bg-muted">
          <h1>Il riuso nella Pubblica Amministrazione</h1>
          <p class="mw-50">Tutte le Pubbliche Amministrazioni hanno l’<span class="font-weight-bold">obbligo per legge di pubblicare il software da loro commissionato</span>.<br/>
          All'interno di <a class="font-weight-bold" href="https://developers.italia.it/it/riuso/pubblicazione">Developers Italia</a> è spiegato dettagliatamente il processo di pubblicazione del proprio software come da Linee Guida, che includono allegati tecnici che le Amministrazioni possono includere nei contratti con i propri fornitori al fine di accertarsi di adempiere all’obbligo in modo corretto e di seguire le best practice dell’open source.</p>
          <p class="mw-50">In questa pagina vogliamo raccogliere una serie di esempi di Pubbliche Amministrazioni virtuose, che hanno scelto di adottare le linee guida proposte dal modello che vi abbiamo raccontato, e di condividere il codice sorgente utilizzato per la realizzazione dei propri siti così come previsto dall’<a class="font-weight-bold" href="https://docs.italia.it/italia/piano-triennale-ict/codice-amministrazione-digitale-docs/it/v2017-12-13/_rst/capo6_art69.html">art. 69 del Codice dell’Amministrazione Digitale</a>.</p>
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
        <div class="col-12 col-lg-2 col-left-bg order-2 order-lg-1">
          <div class="col-left-bg-inner bg-white"></div>
        </div>
        <div class="col-12 col-lg-10 px-4 py-5 order-1 order-lg-2 bg-white">
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
                        <a class="list-item" href="{{ site.baseurl }}/esempi/comune-di-cagliari/pagine-statiche/area.html">
                          <svg class="icon icon-sm icon-primary"><use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use></svg>
                          <span class="d-inline">Pagina Amministrazione - Area</span>
                        </a>
                      </li>
                      <li>
                        <a class="list-item" href="{{ site.baseurl }}/esempi/comune-di-cagliari/pagine-statiche/documenti.html">
                          <svg class="icon icon-sm icon-primary"><use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use></svg>
                          <span class="d-inline">Pagina Documenti</span>
                        </a>
                      </li>
                      <li>
                        <a class="list-item" href="{{ site.baseurl }}/esempi/comune-di-cagliari/pagine-statiche/servizi.html">
                          <svg class="icon icon-sm icon-primary"><use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use></svg>
                          <span class="d-inline">Pagina Servizi</span>
                        </a>
                      </li>
                      <li>
                        <a class="list-item" href="{{ site.baseurl }}/esempi/comune-di-cagliari/pagine-statiche/servizio.html">
                          <svg class="icon icon-sm icon-primary"><use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use></svg>
                          <span class="d-inline">Pagina Servizio</span>
                        </a>
                      </li>
                      <li>
                        <a class="list-item" href="{{ site.baseurl }}/esempi/comune-di-cagliari/pagine-statiche/evento.html">
                          <svg class="icon icon-sm icon-primary"><use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use></svg>
                          <span class="d-inline">Pagina Evento</span>
                        </a>
                      </li>
                      <li>
                        <a class="list-item" href="{{ site.baseurl }}/esempi/comune-di-cagliari/pagine-statiche/argomenti.html">
                          <svg class="icon icon-sm icon-primary"><use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use></svg>
                          <span class="d-inline">Pagina Argomenti</span>
                        </a>
                      </li>
                      <li>
                        <a class="list-item" href="{{ site.baseurl }}/esempi/comune-di-cagliari/pagine-statiche/argomento_cultura.html">
                          <svg class="icon icon-sm icon-primary"><use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use></svg>
                          <span class="d-inline">Pagina Argomento di esempio</span>
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
                        <a class="list-item" href="{{ site.baseurl }}/esempi/comune-di-cagliari/pagine-statiche/persona.html">
                          <svg class="icon icon-sm icon-primary"><use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use></svg>
                          <span class="d-inline">Persona</span>
                        </a>
                      </li>
                      <li>
                        <a class="list-item" href="{{ site.baseurl }}/esempi/comune-di-cagliari/pagine-statiche/ricerca.html">
                          <svg class="icon icon-sm icon-primary"><use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use></svg>
                          <span class="d-inline">Risultato Ricerca</span>
                        </a>
                      </li>
                      <li>
                        <a class="list-item" href="{{ site.baseurl }}/esempi/comune-di-cagliari/pagine-statiche/newsletter.html">
                          <svg class="icon icon-sm icon-primary"><use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use></svg>
                          <span class="d-inline">Template per Newsletter</span>
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
              <a class="list-item" href="{{ site.baseurl }}/esempi/comune-di-cagliari/pagine-statiche/sorgenti-prototipo-cagliari.zip">
                <svg class="icon icon-sm icon-primary"><use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use></svg>
                <span class="d-inline">Tutti i file sorgente del prototipo.</span>
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
        <div class="col-12 col-lg-2 col-right-bg order-2">
          <div class="col-right-bg-inner bg-dark"></div>
        </div>
        <div class="col-12 col-lg-10 px-4 py-5 order-1 bg-dark">
          <h2>Il Consorzio dei Comuni Trentini</h2>
          <p>Il Consorzio dei Comuni Trentini rappresenta tutti i comuni del Trentino a cui offre numerosi servizi digitali. Attraverso l'ecosistema <a class="font-weight-bold text-light" href="https://www.comunweb.it">Comunweb</a> favorisce la diffusione presso i comuni che ne fanno parte delle linee guida di design di contenuti e servizi della pubblica amministrazione, con particolare attenzione alla gestione e rappresentazione di dati strutturati e alla creazione di interfacce e servizi digitali moderni. I comuni ottengono pertanto un duplice beneficio: disponibilità di nuovi canali di dialogo con il cittadino e strumenti concreti per gestire il processo di trasformazione digitale. </p>
          <p>Il Consorzio sta lavorando con il Team per la Trasformazione Digitale per realizzare un modello unico di interazione digitale tra cittadini e comuni in Italia (basato su linee guida e kit di Designers Italia) e i comuni del Consorzio saranno tra i primi in Italia ad utilizzarlo.</p>
          <p>Di seguito si possono trovare i primi software messi a disposizione, dal catalogo del software a riuso di Developers Italia:</p>
          <div id="collapseDiv2" class="collapse-div" role="tablist">
            <div class="collapse-header" id="collapse-template-heading">
                <button class="text-light" data-toggle="collapse" data-target="#collapse-template-2" aria-expanded="false" aria-controls="collapse-template-2">Tutti i software a disposizione</button>
            </div>
            <div id="collapse-template-2" class="collapse" role="tabpanel" aria-labelledby="collapse-template-heading">
              <div class="collapse-body">
                <div class="link-list-wrapper">
                  <ul class="link-list">
                    <li>
                      <a class="list-item" href="https://developers.italia.it/it/software/c_a116-comune-di-ala-comunweb" target="_blank" rel="noopener noreferrer">
                        <svg class="icon icon-sm icon-white"><use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use></svg>
                        <span class="d-inline text-white">Comunweb: una piattaforma completa per la costruzione del sito web</span>
                      </a>
                    </li>
                    <li>
                      <a class="list-item" href="https://developers.italia.it/it/software/c_a116-opencontent-stanzadelcittadino" target="_blank" rel="noopener noreferrer">
                        <svg class="icon icon-sm icon-white"><use xlink:href="{{ site.baseurl }}/assets/bootstrap-italia/dist/svg/sprite.svg#it-chevron-right"></use></svg>
                        <span class="d-inline text-white">La "stanza del cittadino" per costruire l'area personale</span>
                      </a>
                    </li>
                  </ul>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


