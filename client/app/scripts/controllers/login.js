'use strict';

angular.module('clientApp')
.controller('LoginController',
    ['$scope', '$rootScope', '$location',
    function ($scope, $rootScope, $location) {
        // reset login status
        $scope.login = function () {
            $scope.dataLoading = true;
            if($scope.username =="test" && $scope.password == "test")
            {
              console.log("success");
              $location.path("./../../views/main.html");
            }
            else
            {
              $scope.error = "Invalid User Name OR Password"
              console.log('fail');
            }
        };
    }]);

// .controller('LoginController',
//     ['$scope', '$rootScope', '$location', 'AuthenticationService',
//     function ($scope, $rootScope, $location, AuthenticationService) {
//         // reset login status
//         AuthenticationService.ClearCredentials();

//         $scope.login = function () {
//             $scope.dataLoading = true;
//             AuthenticationService.Login($scope.username, $scope.password, function(response) {
//                 if(response.success) {
//                     AuthenticationService.SetCredentials($scope.username, $scope.password);
//                     $location.path('/');
//                 } else {
//                     $scope.error = response.message;
//                     $scope.dataLoading = false;
//                 }
//             });
//         };
//     }]);
