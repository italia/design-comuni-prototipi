app.factory('FiltriService', ['$http', '$q', 'GeneralService', function($http, $q, GeneralService){
	
	var REST_SERVICE = GeneralService.getBaseURL();
	
	var factory = {
		getContents : getContents,
		getContent : getContent
    };
    return factory;
	
	function getContents(contentType, categoryCode, filters){
		var category = "";
		var filter = "";
		if (categoryCode != undefined)
			category = "&categories=" + categoryCode
		if (filters != "" && filters != undefined)
			filter = "&filters=" + filters
        var deferred = $q.defer();
    	$http({
            method: 'GET',
            url: REST_SERVICE+"/contents.json?contentType=" + contentType + category + filter
        }).then(
                function (response) {
                    deferred.resolve(response.data.response.result.items.item);
                },
                function (errResponse) {
                    console.error(errResponse);
                    deferred.reject(errResponse);
                }
        );
        return deferred.promise;
    };
	
	function getContent(contentId, modelId){
        var deferred = $q.defer();
    	$http({
            method: 'GET',
            url: REST_SERVICE+"/content.json?id=" + contentId + "&modelId=" + modelId
        }).then(
                function (response) {
                    deferred.resolve(response.data.response.result);
                },
                function (errResponse) {
                    console.error(errResponse);
                    deferred.reject(errResponse);
                }
        );
        return deferred.promise;
    };
	
}]);