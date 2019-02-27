app.factory('GeneralService', function($http, $q) {
	
	var factory = {
        getBaseURL : getBaseURL,
		getFiltriMode : getFiltriMode,
		setFiltriMode : setFiltriMode
    };
    return factory;
	
	this.filtriMode = {filtri:false, internal:false};
	
	function getBaseURL() {
		var url = location.href;
		var baseURL = url.substring(0, url.indexOf('/', 14));

		if (baseURL.indexOf('http://localhost') !== -1) {
		  // Base Url for localhost
		  var url = location.href;
		  var pathname = location.pathname;
		  var index1 = url.indexOf(pathname);
		  var index2 = url.indexOf("/", index1 + 1);
		  var baseLocalUrl = url.substr(0, index2);
		  return baseLocalUrl + "/legacyapi/rs/it/jacms";
		} else {
		  // Root Url for domain name
		  var pathname = location.pathname;
		  pathname = pathname.split('/')[1];
		  return baseURL + "/" + pathname + "/legacyapi/rs/it/jacms";
		}
    };
	
	function getFiltriMode() {
	    return this.filtriMode;
	}
    
    function setFiltriMode(show, interno, pagina) {
		var categoria = [];
		var type = "";
		if(pagina !== undefined){
			categoria = pagina.split(",");
			if (categoria[1].includes("Amministrazione"))
				type = "Amministrazione";
			if (categoria[1].includes("Novit"))
				type = "Novità"
			if (categoria[1].includes("Servizi"))
				type = "Servizi"
			if (categoria[1].includes("Documenti"))
				type = "Documenti"
		}
		this.filtriMode = {filtri:show, internal:interno, categoria: type};
	}
	
});