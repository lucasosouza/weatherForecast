weatherApp.controller('mainController', ['$scope', '$resource', 'cityService', function($scope, $resource, cityService) {

  $scope.welcome = "The quickest way to see the forecast for your city!";
  
  $scope.city = cityService.city;

  $scope.$watch('city', function() {
	  cityService.city = $scope.city;
  });
  
}]);


weatherApp.controller('forecastController', ['$scope', '$log', '$resource', '$http', '$routeParams', 'cityService',  function($scope, $log, $resource, $http, $routeParams, cityService) {

  $scope.forecast = "Take a look at your forecast";
	
  $scope.city = cityService.city;
  
  $scope.days = $routeParams.days || 2

  $scope.apiLink = 'http://api.openweathermap.org/data/2.5/forecast/daily?units=metric&q=' + $scope.city + '&cnt=' + $scope.days
  
  $log.log($scope.apiLink)
   
  //assign it to a promisse
  $scope.getWeather = function () {
    return $http.get($scope.apiLink).then(function(result) {
      return result.data;
    });
  }

  //retrieve data from a promise
  $scope.getWeather().then(function (result) {
    $scope.city_retrieved = result.city.name
    $scope.temperatures = result.list
    //$log.log($scope.temperatures);    
  });
  
  //Ajax. Needs to work with promises, since the second runs before you can retrieve data
  
  //this function was passed later to directive searchResult
  $scope.toData = function(date_from_ajax) {
      return date_from_ajax * 1000
  }
  
}]);



//http://api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7\





