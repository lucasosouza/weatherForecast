//weatherApp.directive("weatherReport", function() {
//   return {
//       restrict: 'E',
//       templateUrl: 'directives/weatherReport.html',
//       replace: true,
//       scope: {
//           weatherDay: "=",
//           convertToStandard: "&",
//           convertToDate: "&",
//           dateFormat: "@"
//       }
//   }
//});
//

weatherApp.directive("searchResult", function() {
  
  return {
       templateUrl: 'directives/searchResult.html',
       replace: true,
       scope: {
            weatherData: "="
            convertDate: "&"
       }
  }
  
});