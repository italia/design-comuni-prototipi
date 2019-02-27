app.factory('RicercaService', ['$http', '$q', 'GeneralService', function($http, $q, GeneralService){
	
	var REST_SERVICE = GeneralService.getBaseURL();
	
	self = this;
	
	
	
	var ammins_selected = [];
	var servizi_selected = [];
	var novita_selected = [];
	var docs_selected = [];
	var args_selected = [];
	
	var categoriaTab = "active";
	var argomentoTab = "";
	var opzioniTab = "";
	
	var ammins_chk = [];
	var servizi_chk = [];
	var novita_chk = [];
	var docs_chk = [];
	var active_chk = null;
	var data_inizio = null;
	var data_fine = null;
	var argomenti = [];
	var categorie = [];
	var cercatxt = "";
	
	var factory = {
		Init : Init,
		setArgomenti : setArgomenti,
		setCategorie : setCategorie,
		toggle : toggle,
		exists : exists,
		ammins_isIndeterminate : ammins_isIndeterminate,
		ammins_isChecked : ammins_isChecked,
		ammins_toggleAll : ammins_toggleAll,
		servizi_isIndeterminate : servizi_isIndeterminate,
		servizi_isChecked : servizi_isChecked,
		servizi_toggleAll : servizi_toggleAll,
		novita_isIndeterminate : novita_isIndeterminate,
		novita_isChecked : novita_isChecked,
		novita_toggleAll : novita_toggleAll,
		docs_isIndeterminate : docs_isIndeterminate,
		docs_isChecked : docs_isChecked,
		docs_toggleAll : docs_toggleAll,
		toggleAll : toggleAll,
		class_tutti : class_tutti,
		class_categorie : class_categorie,
		unchk : unchk,
		clean_date : clean_date,
		setActive : setActive,
		setArgsSelected : setArgsSelected,
		setCatSelected : setCatSelected,
		get_ammins_selected : get_ammins_selected,
		get_servizi_selected : get_servizi_selected,
		get_novita_selected : get_novita_selected,
		get_docs_selected : get_docs_selected,
		get_args_selected : get_args_selected,
		get_categoriaTab : get_categoriaTab,
		get_argomentoTab : get_argomentoTab,
		get_opzioniTab : get_opzioniTab,
		get_ammins_chk : get_ammins_chk,
		get_servizi_chk : get_servizi_chk,
		get_novita_chk : get_novita_chk,
		get_docs_chk : get_docs_chk,
		get_active_chk : get_active_chk,
		set_active_chk : set_active_chk,
		get_data_inizio : get_data_inizio,
		get_data_fine : get_data_fine,
		get_argomenti : get_argomenti,
		get_categorie : get_categorie,
    };
    return factory;
	
	function Init(scope){
		scope.RicercaService = this;
	}
	
	function setArgomenti(argomento) {
		argomenti.push(argomento.replace("%", "'"));
	}
	
	function setCategorie(cat) {
		var categoria = [];
		categoria = cat.split("/ ");
		
		if (cat.includes("/ Amministrazione")){
			if(categoria.length == 4)
				ammins_chk.push(categoria[3].replace("%", "'"));
		}
		if (cat.includes("/ Novit")){
			if(categoria.length == 4)
				novita_chk.push(categoria[3].replace("%", "'"));
		}
		if (cat.includes("/ Servizi")){
			if(categoria.length == 4)	
				servizi_chk.push(categoria[3].replace("%", "'"));
		}
		if (cat.includes("/ Documenti")){
			if(categoria.length == 4)
				docs_chk.push(categoria[3].replace("%", "'"));
		}
	}


	function toggle(item, list) {
		 var idx = list.indexOf(item);
		 if (idx > -1) {
		   list.splice(idx, 1);
		 }
		 else {
		   list.push(item);
		 }
	};

	function exists(item, list) {
		 return list.indexOf(item) > -1;
	};

	function ammins_isIndeterminate() {
		 return (ammins_selected.length !== 0 && ammins_selected.length !== ammins_chk.length);
	};

	function ammins_isChecked() {
		 return ammins_selected.length === ammins_chk.length;
	};

	function ammins_toggleAll() {
		 if (ammins_selected.length === ammins_chk.length) {
		   ammins_selected = [];
		 } else if (ammins_selected.length === 0 || ammins_selected.length > 0) {
		   ammins_selected = ammins_chk.slice(0);
		 }
	};

	function servizi_isIndeterminate() {
		 return (servizi_selected.length !== 0 &&
		servizi_selected.length !== servizi_chk.length);
	};

	function servizi_isChecked() {
		 return servizi_selected.length === servizi_chk.length;
	};

	function servizi_toggleAll() {
		 if (servizi_selected.length === servizi_chk.length) {
		   servizi_selected = [];
		 } else if (servizi_selected.length === 0 || servizi_selected.length > 0) {
		   servizi_selected = servizi_chk.slice(0);
		 }
	};

	function novita_isIndeterminate() {
		 return (novita_selected.length !== 0 &&
		novita_selected.length !== novita_chk.length);
	};

	function novita_isChecked() {
		 return novita_selected.length === novita_chk.length;
	};

	function novita_toggleAll() {
		 if (novita_selected.length === novita_chk.length) {
		   novita_selected = [];
		 } else if (novita_selected.length === 0 || novita_selected.length > 0) {
		   novita_selected = novita_chk.slice(0);
		 }
	};

	function docs_isIndeterminate() {
		 return (docs_selected.length !== 0 &&
		docs_selected.length !== docs_chk.length);
	};

	function docs_isChecked() {
		 return docs_selected.length === docs_chk.length;
	};

	function docs_toggleAll() {
		 if (docs_selected.length === docs_chk.length) {
		   docs_selected = [];
		 } else if (docs_selected.length === 0 || docs_selected.length > 0) {
		   docs_selected = docs_chk.slice(0);
		 }
	};

	function toggleAll(filterType) {
		if(filterType == 'categorie') {
			ammins_selected = [];
			servizi_selected = [];
			novita_selected = [];
			docs_selected = [];
		}
		if(filterType =='argomenti') {
			args_selected = [];
		}
		switch(filterType) {
		  case 'categorie':
			ammins_selected = [];
			servizi_selected = [];
			novita_selected = [];
			docs_selected = [];
			break;
		  case 'argomenti':
			args_selected = [];
			break;
		  default:
			ammins_selected = [];
			servizi_selected = [];
			novita_selected = [];
			docs_selected = [];
			args_selected = [];
			active_chk = null;
			clean_date();
		}
	}

	function class_tutti(mode){
		switch(mode) {
		  case 'categorie':
			if(ammins_selected.length !== 0 || servizi_selected.length !== 0 || novita_selected.length !== 0 || docs_selected.length !== 0)
				return ""
			else 
				return "active";
			break;
		  default:
			if(ammins_selected.length !== 0 || servizi_selected.length !== 0 || novita_selected.length !== 0 || docs_selected.length !== 0 || 
				args_selected.length !== 0 || this.active_chk != null || this.data_inizio != null || this.data_fine != null)
				return ""
			else 
				return "active";
			break;
		}
	}

	function class_categorie(selected, checked){
		 if(selected.length !== 0 &&
		selected.length !== checked.length)
		return "active"
		 else if(selected.length === checked.length)
		return "active";
		 else
		return "";
	}

	function unchk(item, list) {
		var idx = list.indexOf(item);
		if (idx > -1) {
			list.splice(idx, 1);
		}
	}

	function clean_date() {
		this.data_inizio = null;
		this.data_fine = null;
	}
	
	function setActive(tab) {
		switch(tab) {
		  case 'argomenti':
			categoriaTab = "";
			argomentoTab = "active";
			opzioniTab = "";
			break;
		  case 'opzioni':
			categoriaTab = "";
			argomentoTab = "";
			opzioniTab = "active";
			break;
		  default:
			categoriaTab = "active";
			argomentoTab = "";
			opzioniTab = "";
		}
	}
	
	function setArgsSelected(argomenti) {
		if(argomenti != "")
			args_selected = argomenti.split(",");
	}
	
	function setCatSelected(type, categorie) {
		if(categorie != "") {
			switch(type) {
				case 'amministrazione':
					ammins_selected = categorie.split(",");
				break;
				case 'servizi':
					servizi_selected = categorie.split(",");
				break;
				case 'novita':
					novita_selected = categorie.split(",");
				break;
				case 'documenti':
					docs_selected = categorie.split(",");
				break;
				default:
			}
		}
			
	}
	
	function get_ammins_selected() {
		return ammins_selected;
	}
	
	function get_servizi_selected() {
		return servizi_selected;
	}
	
	function get_novita_selected() {
		return novita_selected;
	}
	
	function get_docs_selected() {
		return docs_selected;
	}
	
	function get_args_selected() {
		return args_selected;
	}

	function get_categoriaTab() {
		return categoriaTab;
	}
	
	function get_argomentoTab() {
		return argomentoTab;
	}
	
	function get_opzioniTab() {
		return opzioniTab;
	}
	
	function get_ammins_chk() {
		return ammins_chk;
	}
	
	function get_servizi_chk() {
		return servizi_chk;
	}
	
	function get_novita_chk() {
		return novita_chk;
	}
	
	function get_docs_chk() {
		return docs_chk;
	}
	
	function get_active_chk() {
		return this.active_chk;
	}
	
	function set_active_chk(elem) {
		this.active_chk = elem;
	}
	
	function get_data_inizio() {
		return this.data_inizio;
	}
	
	function get_data_fine() {
		return this.data_fine;
	}
	
	function get_argomenti() {
		return argomenti;
	}
	
	function get_categorie() {
		return categorie;
	}
	
}]);