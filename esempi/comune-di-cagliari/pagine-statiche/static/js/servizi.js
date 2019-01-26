app.controller('ctrlServizi', [ '$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll){
	selfs = this;

	this.zeroSubmit = function() {
		this.primostep = true;
		this.secondostep = false;
		this.terzostep = false;
		this.spid_sel = {};
		this.nome = '';
		this.password = '';
	}

	selfs.zeroSubmit();

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
			selfs.spid_sel = selfs.servizi_spid[id];
		selfs.primostep = false;
		selfs.secondostep = true;
		selfs.terzostep = false;
	}

	this.secondoSubmit = function() {
		selfs.secondostep = false;
		selfs.terzostep = true;
	}

}]);
