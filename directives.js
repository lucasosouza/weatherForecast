weatherApp.directive("searchResult", function() {

  return {
       templateUrl: 'directives/searchResult.html',
       replace: true,
       scope: {
            weatherData: "=",
            convertDate: "&"
       }
  }

});