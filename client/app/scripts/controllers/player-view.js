'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PlayerViewCtrl
 * @description
 * # PlayerViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('PlayerViewCtrl', function (
  $scope,
  $routeParams,
  Player
) {
  $scope.viewPlayer = true;
  $scope.player = Player.one($routeParams.id).get().$object;
});