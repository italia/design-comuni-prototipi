app.controller('ctrlRicerca', [ '$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll){
	self = this;

	this.filtri = false;

	this.ammins_chk = ['Giunta e consiglio',
		'Aree di competenza',
		'Dipendenti',
		'Luoghi',
		'Associazioni e Societ&agrave; partecipate'];

	this.servizi_chk = ['Pagamenti',
		'Sostegno',
		'Domande e iscrizioni',
		'Segnalazioni',
		'Autorizzazioni e concessioni',
		'Certificati e dichiarazioni'];

	this.novita_chk = ['Notizie',
		'Eventi',
		'Comunicati stampa'];

	this.docs_chk = ['Progetti e attivit&agrave;',
		'Delibere, determine e ordinanze',
		'Bandi',
		'Concorsi',
		'Albo pretorio'];

	this.argomenti = ['Agevolazioni per la casa',
		'Animali',
		'Anziani',
		'Assistenza e inclusione',
		'Associazioni',
		'Bambini e ragazzi',
		'Cantieri e progetti',
		'Comune',
		'Comunicare con il comune',
		'Corsi e tempo libero',
		'Costruire e ristrutturare',
		'Cultura',
		'Edilizia',
		'Famiglia',
		'Formazione professionale',
		'Fornitori del comune',
		'Immigrazione',
		'Imparare',
		'Imprese e investitori',
		'Inquinamento',
		'La citt&agrave; che cambia',
		'Lavorare',
		'Muoversi',
		'Parcheggi e ZTL',
		'Partecipare',
		'Rete idrica e fognaria',
		'Rifiuti, pulizia a riciclaggio',
		'Salute',
		'Servizi anagrafici',
		'Servizi e supporto all\'educazione',
		'Servizi per i cittadini',
		'Servizi per le imprese',
		'Servizio civile',
		'Sicurezza',
		'Spazi del comune',
		'Spazi verdi',
		'Sport',
		'Sposarsi',
		'Strade e visibilit&agrave;',
		'Studenti',
		'Trasferirsi',
		'Uffici comunali',
		'Visitare',
		'Vivere la citt&agrave;',
		'Votare'];

	this.ammins_selected = [];
	this.servizi_selected = [];
	this.novita_selected = [];
	this.docs_selected = [];
	this.args_selected = [];

	this.toggle = function (item, list) {
		 var idx = list.indexOf(item);
		 if (idx > -1) {
		   list.splice(idx, 1);
		 }
		 else {
		   list.push(item);
		 }
	};

	this.exists = function (item, list) {
		 return list.indexOf(item) > -1;
	};

	this.ammins_isIndeterminate = function() {
		 return (self.ammins_selected.length !== 0 &&
		self.ammins_selected.length !== self.ammins_chk.length);
	};

	this.ammins_isChecked = function() {
		 return self.ammins_selected.length === self.ammins_chk.length;
	};

	this.ammins_toggleAll = function() {
		 if (self.ammins_selected.length === self.ammins_chk.length) {
		   self.ammins_selected = [];
		 } else if (self.ammins_selected.length === 0 || self.ammins_selected.length > 0) {
		   self.ammins_selected = self.ammins_chk.slice(0);
		 }
	};

	this.servizi_isIndeterminate = function() {
		 return (self.servizi_selected.length !== 0 &&
		self.servizi_selected.length !== self.servizi_chk.length);
	};

	this.servizi_isChecked = function() {
		 return self.servizi_selected.length === self.servizi_chk.length;
	};

	this.servizi_toggleAll = function() {
		 if (self.servizi_selected.length === self.servizi_chk.length) {
		   self.servizi_selected = [];
		 } else if (self.servizi_selected.length === 0 || self.servizi_selected.length > 0) {
		   self.servizi_selected = self.servizi_chk.slice(0);
		 }
	};

	this.novita_isIndeterminate = function() {
		 return (self.novita_selected.length !== 0 &&
		self.novita_selected.length !== self.novita_chk.length);
	};

	this.novita_isChecked = function() {
		 return self.novita_selected.length === self.novita_chk.length;
	};

	this.novita_toggleAll = function() {
		 if (self.novita_selected.length === self.novita_chk.length) {
		   self.novita_selected = [];
		 } else if (self.novita_selected.length === 0 || self.novita_selected.length > 0) {
		   self.novita_selected = self.novita_chk.slice(0);
		 }
	};

	this.docs_isIndeterminate = function() {
		 return (self.docs_selected.length !== 0 &&
		self.docs_selected.length !== self.docs_chk.length);
	};

	this.docs_isChecked = function() {
		 return self.docs_selected.length === self.docs_chk.length;
	};

	this.docs_toggleAll = function() {
		 if (self.docs_selected.length === self.docs_chk.length) {
		   self.docs_selected = [];
		 } else if (self.docs_selected.length === 0 || self.docs_selected.length > 0) {
		   self.docs_selected = self.docs_chk.slice(0);
		 }
	};

	this.toggleAll = function() {
		self.ammins_selected = [];
		self.servizi_selected = [];
		self.novita_selected = [];
		self.docs_selected = [];
	}

	this.class_tutti = function(){
		 if(self.ammins_selected.length !== 0 || self.servizi_selected.length !== 0 ||
		self.novita_selected.length !== 0 || self.docs_selected.length !== 0)
		return ""
		 else return "active";
	}

	this.class_categorie = function(selected, checked){
		 if(selected.length !== 0 &&
		selected.length !== checked.length)
		return "activepart"
		 else if(selected.length === checked.length)
		return "active";
		 else
		return "";
	}

	this.unchk = function(item, list) {
		var idx = list.indexOf(item);
		if (idx > -1) {
			list.splice(idx, 1);
		}
	}

	this.clean_date = function() {
		self.data_inizio = null;
		self.data_fine = null;
	}
}]);
