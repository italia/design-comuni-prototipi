app.controller('FiltriController', [ '$scope', 'FiltriService', 'GeneralService', '$location', '$anchorScroll', '$sce', '$timeout', 
	function($scope, FiltriService, GeneralService, $location, $anchorScroll, $sce, $timeout){
	
	$scope.contents = [];
	$scope.renderContent = [];
	$scope.renderContentSecondModel = [];
	$scope.calendar = [];
	$scope.secondModelId = "";
	$scope.filters = "";
	$scope.events = [];
	$scope.renderEventContent = [];
	$scope.categoryContent = [];
	$scope.dayName = [];
	$scope.loader = [];
	
		
	$scope.setParameters = function (pageSize, maxElem, contentType, modelId, categoryCode, elemId, secondModelId, filters, contents) {
		$scope.pageSize = parseInt(pageSize);
		if (categoryCode != "")
			$scope.categorie = categoryCode;
		if (maxElem != "")
			$scope.maxElements =  parseInt(maxElem);
		if (filters != "")
			$scope.filters = filters;
		if (secondModelId != undefined)
			$scope.secondModelId = secondModelId;
		if (contents) {
			$scope.setContents(contents);
		} else
			$scope.getContents(contentType, modelId, categoryCode, elemId);
	}
	
	$scope.setCalendarParameters = function (day, finemese, nextMonth) {
		$scope.day = day;
		$scope.finemese = finemese;
		$scope.days = finemese - day;
		for (i = 0; i <= $scope.days; i++) { 
			$scope.calendar[i] = i+parseInt($scope.day);
		}
		if ($scope.days <= 2) {
			$scope.daysOld = angular.copy($scope.days)+1;
			$scope.day = 1;
			$scope.finemese = 3 - $scope.days;
			$scope.days = $scope.finemese - $scope.day;
			for (i = 0; i <= $scope.days; i++) { 
				$scope.calendar[i+$scope.daysOld] = i+parseInt($scope.day);
			}
		}
	}
	
	$scope.getContents = function (contentType, modelId, categoryCode, elemId, filters, date) {
		if (filters != undefined)
			$scope.filters = filters;
		$scope.currentPage = 0;
		$scope.pages = [];
		if (elemId) {
			setActive(elemId, $scope.oldElem);
			$scope.oldElem = elemId;
		}
		FiltriService.getContents(contentType, categoryCode, $scope.filters, date).then(
			function(response) {
				$scope.events[date]=[];
				if(response != undefined)
					$scope.loader[date]= true;
				if (response != undefined) {
					if (!Array.isArray(response)) {
						if (response.$){
							$scope.contents = [];
							$scope.contents[0] = response;
							$scope.events[date].push(response);
						}
					} else {
						if ($scope.maxElements >= response.length){
							$scope.contents = response;
							$scope.events[date] = response;
						} else {
							for (i = 0; i < $scope.maxElements; i++) {
								$scope.contents[i] = response[i];
								$scope.events[date] = response[i];
							}
						}
					}
					$scope.numberOfPages = Math.ceil($scope.contents.length/$scope.pageSize);
					for (i = 0; i < $scope.numberOfPages; i++) { 
						$scope.pages[i] = i+1;
					}
					for(var i in $scope.contents){
						FiltriService.getContent($scope.contents[i].$, modelId).then(
							function(response) {
								$scope.renderContent[response.item.id] = $sce.trustAsHtml(response.html);
							}, function(errResponse) {
								console.error("Errore durante il caricamento del contenuto");
						});
					}
					if ($scope.secondModelId != ""){
						for(var i in $scope.contents){
							FiltriService.getContent($scope.contents[i].$, $scope.secondModelId).then(
								function(response) {
									$scope.renderContentSecondModel[response.item.id] = $sce.trustAsHtml(response.html);
								}, function(errResponse) {
									console.error("Errore durante il caricamento del contenuto");
							});
						}
					}
					if (date != undefined) {
						$scope.renderEventContent[date] = [];
						$scope.categoryContent[date] = [];
						for(var i in $scope.events[date]){
							FiltriService.getContent($scope.events[date][i].$, modelId).then(
								function(response) {
									$scope.renderEventContent[date][response.item.id] = $sce.trustAsHtml(response.html);
									$scope.loader[date]= false;
									$scope.categoryContent[date][response.item.id] = "";
									for(var i in response.item.categories.category){
										if(response.item.categories.category[i] != undefined)
											$scope.categoryContent[date][response.item.id] += response.item.categories.category[i];
									}
								}, function(errResponse) {
									$scope.loader[date]= false;
									console.error("Errore durante il caricamento del contenuto");
							});
						}
					}
				} else {
					$scope.contents = [];
				}
			}, function(errResponse) {
				$scope.contents = [];
				$scope.loader[date]= false;
			});
	}
	
	function setActive(element, oldElement) {
		if(oldElement) {
			var oldElem = document.getElementById(oldElement);
			$(oldElem).removeClass("active");
		}
    	if (element != "") {
			var elem = document.getElementById(element);
			$(elem).addClass("active");
    	}
    }
	
	$scope.goToPage = function (page) {
		$scope.currentPage = page;
	}
	
	$scope.goToFirstPage = function () {
		$scope.currentPage = 0;
	}
	
	$scope.refreshPage = function () {
		$scope.currentPage = 1;
		$timeout($scope.goToFirstPage, 1000);
	}
	
	$scope.getFilterDay = function (day, month, year) {
		var monthInt = parseInt(month)-1;
		var date = new Date(year,monthInt,day);
		$scope.dayName[day] = date.toLocaleString(undefined, {weekday: 'short'});
		return "(attributeFilter=true;key=data_iniz;start="+ day +"/"+ month +"/"+ year+";end="+ day +"/"+ month +"/"+ year+")"
	}
	
	$scope.setContents = function (contents) {
		$scope.contents = contents.replace(/=/g, '":"');
		$scope.contents = $scope.contents.replace(/}/g, '"}');
		$scope.contents = $scope.contents.replace(/contentId/g, '"contentId').replace(/modelId/g, '"modelId');
		$scope.contents = $scope.contents.replace(/, "/g, '", "');
		$scope.contents = JSON.parse($scope.contents);
		if ($scope.pageSize != 0)
			$scope.numberOfPages = Math.ceil($scope.contents.length/$scope.pageSize);
		else
			$scope.numberOfPages = 1;
		$scope.pages = [];
		$scope.currentPage = 0;
		for (i = 0; i < $scope.numberOfPages; i++) { 
			$scope.pages[i] = i+1;
		}
		for(var i in $scope.contents){
			FiltriService.getContent($scope.contents[i].contentId, $scope.contents[i].modelId).then(
				function(response) {
					$scope.renderContent[response.item.id] = $sce.trustAsHtml(response.html);
				}, function(errResponse) {
					console.error("Errore durante il caricamento del contenuto");
			});
		}
}
	
}]);

app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});