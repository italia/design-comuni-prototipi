app.controller('ctrlPrenotaSpid', [ '$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll){
	selfps = this;

	this.zeroSubmit = function() {
		this.primostep = true;
		this.secondostep = false;
		this.terzostep = false;
		this.spid_sel = {};
		this.email = '';
		this.password = '';

		this.serviziView = true;
		this.prenotazioneView = false;
	}

	selfps.zeroSubmit();

	this.servizi_spid = [{'id':0, 'value':'aruba', 'name':'Aruba SPID', 'image':'/ponmetroca/resources/static/img/spid-idp-arubaid.svg'},
			{'id':1, 'value':'poste', 'name':'Poste SPID',  'image':'/ponmetroca/resources/static/img/spid-idp-posteid.svg'},
			{'id':2, 'value':'infocert', 'name':'Infocert SPID',  'image':'/ponmetroca/resources/static/img/spid-idp-infocertid.svg'},
			{'id':3, 'value':'sielte', 'name':'Sielte SPID',  'image':'/ponmetroca/resources/static/img/spid-idp-sielteid.svg'},
			{'id':4, 'value':'intesa', 'name':'Intesa SPID',  'image':'/ponmetroca/resources/static/img/spid-idp-intesaid.svg'},
			{'id':5, 'value':'register', 'name':'Register SPID',  'image':'/ponmetroca/resources/static/img/spid-idp-spiditalia.svg'},
			{'id':6, 'value':'namirial', 'name':'Namirial SPID',  'image':'/ponmetroca/resources/static/img/spid-idp-namirialid.svg'},
			{'id':7, 'value':'tim', 'name':'TIM SPID',  'image':'/ponmetroca/resources/static/img/spid-idp-timid.svg'}];

	this.primoSubmit = function(id) {
		if (id !== null)
			selfps.spid_sel = selfps.servizi_spid[id];
		selfps.primostep = false;
		selfps.secondostep = true;
		selfps.terzostep = false;
	}

	this.secondoSubmit = function() {
		selfps.secondostep = false;
		selfps.terzostep = true;
	}

	this.startPrenotazione = function() {
		this.serviziView = false;
		this.prenotazioneView = true;

		this.primostep = true;
		this.secondostep = false;
		this.terzostep = false;
		this.quartostep = false;
		this.quintostep = false;
		this.sestostep = false;

		this.numstep = 1;
		this.namestep = 'Ufficio';
		this.nome = 'Mario';
		this.cognome = 'Piras';
	}

	this.uffici = [{'id':0, 'value':'ambiente', 'name':'Ambiente', 'enable':false},
			{'id':1, 'value':'cultura-spettacolo', 'name':'Cultura e Spettacolo', 'enable':true},
			{'id':2, 'value':'istruzione', 'name':'Istruzione', 'enable':false},
			{'id':3, 'value':'turismo', 'name':'Turismo', 'enable':false},
			{'id':4, 'value':'urbanistica', 'name':'Urbanistica', 'enable':false}];

	this.referenti = [{'id':0, 'name':'Gabriele Bianchi', 'role':'Responsabile del servizio', 'disp':'Riceve lun / mar ore 9:00 - 11:00'},
			{'id':1, 'name':'Raffaele Rossi', 'role':'Tecnico di area', 'disp':'Riceve mar / mer ore 10:00 - 13:00'},
			{'id':2, 'name':'Gino Ferrari', 'role':'Funzionario tecnico', 'disp':'Riceve ven ore 14:00 - 18:00'},
			{'id':3, 'name':'Luciano Rigoletti', 'role':'Funzionario amministrativo', 'disp':'Riceve lun / mar ore 9:00 - 11:00'}];

	this.primoSubmitP = function() {
		selfps.primostep = false;
		selfps.secondostep = true;
		selfps.terzostep = false;
		selfps.numstep = 2;
		selfps.namestep = 'Referente';
		$location.hash('anchor-link');
		$anchorScroll();
	}

	this.secondoSubmitP = function() {
		selfps.secondostep = false;
		selfps.terzostep = true;
		selfps.quartostep = false;
		selfps.numstep = 3;
		selfps.namestep = 'Data e orario';
		$location.hash('anchor-link');
		$anchorScroll();
	}

	this.terzoSubmitP = function() {
		selfps.terzostep = false;
		selfps.quartostep = true;
		selfps.quintostep = false;
		selfps.numstep = 4;
		selfps.namestep = 'Richiesta';
		$location.hash('anchor-link');
		$anchorScroll();
	}

	this.quartoSubmitP = function() {
		selfps.quartostep = false;
		selfps.quintostep = true;
		selfps.numstep = 5;
		selfps.namestep = 'Verifica';
		selfps.modifica = false;
		$location.hash('anchor-link');
		$anchorScroll();
	}

	this.quintoSubmitP = function() {
		selfps.quintostep = false;
		selfps.sestostep = true;
		selfps.appuntamento_tit = "L'appuntamento con "+selfps.referenti[selfps.referente].name+" &egrave; stato confermato";
                selfps.appuntamento_data = selfps.giorno+" | Ore "+selfps.ora;
		$location.hash('intro');
		$anchorScroll();
	}

	this.setOra = function(intervallo) {
		selfps.ora = intervallo;
	}
}]);

app.directive('datepicker', function () {

	var array = ["2018-11-26","2018-12-04","2018-12-05"]

		 function link(scope, element, attrs, controller) {
			 element.datepicker({
				 onSelect: function (dt) {
					 scope.$apply(function () {
						 controller.$setViewValue(dt);   
					 });
				 },
//                dateFormat: 'dd/mm/yy',
				 dateFormat: 'DD dd MM yy',
		minDate: new Date(),
		beforeShowDay: function(date){
				var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
				return [ array.indexOf(string) == -1 ]
			 }
			 });
		 }

		 return {
			 require: 'ngModel',
			 link: link
		 };
});
