app.controller('ctrlPrenotazione', [ '$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll){
	selfp = this;

	this.ufficio = '';
	this.referente = -1;
	this.giorno = '';
	this.ora = '';
	this.causale = '';
	this.nome = '';
	this.cognome = '';
	this.email = '';

	this.zeroSubmit = function() {
		this.primostep = true;
		this.secondostep = false;
		this.terzostep = false;
		this.quartostep = false;
		this.quintostep = false;
		this.sestostep = false;

		this.numstep = 1;
		this.namestep = 'Ufficio';
	}

	selfp.zeroSubmit();

	this.uffici = [{'id':0, 'value':'ambiente', 'name':'Ambiente', 'enable':false},
			{'id':1, 'value':'edilizia-privata', 'name':'Edilizia Privata', 'enable':true},
			{'id':2, 'value':'istruzione', 'name':'Istruzione', 'enable':false},
			{'id':3, 'value':'turismo', 'name':'Turismo', 'enable':false},
			{'id':4, 'value':'urbanistica', 'name':'Urbanistica', 'enable':false}];

	this.referenti = [{'id':0, 'name':'Gabriele Bianchi', 'role':'Responsabile del servizio', 'disp':'Riceve lun / mar ore 9:00 - 11:00'},
			{'id':1, 'name':'Raffaele Rossi', 'role':'Tecnico di area', 'disp':'Riceve mar / mer ore 10:00 - 13:00'},
			{'id':2, 'name':'Gino Ferrari', 'role':'Funzionario tecnico', 'disp':'Riceve ven ore 14:00 - 18:00'},
			{'id':3, 'name':'Luciano Rigoletti', 'role':'Funzionario amministrativo', 'disp':'Riceve lun / mar ore 9:00 - 11:00'}]

	this.primoSubmit = function() {
		selfp.primostep = false;
		selfp.secondostep = true;
		selfp.terzostep = false;
		selfp.numstep = 2;
		selfp.namestep = 'Referente';
		$location.hash('anchor-link');
		$anchorScroll();
	}

	this.secondoSubmit = function() {
		selfp.secondostep = false;
		selfp.terzostep = true;
		selfp.quartostep = false;
		selfp.numstep = 3;
		selfp.namestep = 'Data e orario';
		$location.hash('anchor-link');
		$anchorScroll();
	}

	this.terzoSubmit = function() {
		selfp.terzostep = false;
		selfp.quartostep = true;
		selfp.quintostep = false;
		selfp.numstep = 4;
		selfp.namestep = 'Richiesta';
		$location.hash('anchor-link');
		$anchorScroll();
	}

	this.quartoSubmit = function() {
		selfp.quartostep = false;
		selfp.quintostep = true;
		selfp.numstep = 5;
		selfp.namestep = 'Verifica';
		selfp.modifica = false;
		$location.hash('anchor-link');
		$anchorScroll();
	}

	this.quintoSubmit = function() {
		selfp.quintostep = false;
		selfp.sestostep = true;
		selfp.appuntamento_tit = "L'appuntamento con "+selfp.referenti[selfp.referente].name+" &egrave; stato confermato";
                selfp.appuntamento_data = selfp.giorno+" | Ore "+selfp.ora;
		$location.hash('intro');
		$anchorScroll();
	}

	this.setOra = function(intervallo) {
		selfp.ora = intervallo;
	}

	 }]);

app.directive('datepicker', function () {

	var array = ["2018-10-18","2018-10-21","2018-10-26"]

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
