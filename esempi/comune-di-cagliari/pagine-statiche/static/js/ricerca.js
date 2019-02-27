app.controller('ctrlRicerca', [ '$scope', '$location', '$anchorScroll', 'GeneralService', 'RicercaService', 
	function($scope, $location, $anchorScroll, GeneralService, RicercaService){
	
	self = this;

	this.General = GeneralService;
	this.Ricerca = RicercaService;
	
	RicercaService.Init($scope);
}]);
