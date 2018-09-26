'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PlayerEditCtrl
 * @description
 * # PlayerEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PlayerEditCtrl', function (
    $scope,
    $routeParams,
    Player,
    $location
  ) {
    $scope.editPlayer = true;
    $scope.player = {};
    Player.one($routeParams.id).get().then(function(player) {
      $scope.player = player;
      $scope.savePlayer = function() {
        $scope.player.save().then(function() {
          $location.path('/player/' + $routeParams.id);
        });
      };
    });
  });
