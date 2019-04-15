app.controller('ctrlRicerca', [ '$scope', '$location', '$anchorScroll', 'GeneralService', 'RicercaService', '$mdDialog',
	function($scope, $location, $anchorScroll, GeneralService, RicercaService, $mdDialog){
	
	self = this;

	this.General = GeneralService;
	this.Ricerca = RicercaService;
	
	RicercaService.Init($scope);
	
	
	$scope.setSearchCookie  = function (key) {
		var cookie = "search=" + key;
		document.cookie = cookie;
    };
	
	$scope.getCookie =  function(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i <ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}
	
}]);
