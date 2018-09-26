'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PlayerAddCtrl
 * @description
 * # PlayerAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PlayerAddCtrl', function ($scope, Player, $location) {
    $scope.player = {};
    $scope.savePlayer = function() {
      Player.post($scope.player).then(function() {
        $location.path('/players');
      });
    };
  });