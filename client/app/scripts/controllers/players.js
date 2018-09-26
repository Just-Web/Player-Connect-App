'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PlayersCtrl
 * @description
 * # PlayerssCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PlayersCtrl', function ($scope, Player) {
    $scope.players = Player.getList().$object;
  });