'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the index.html view which contains a navigation bar and other views
 */
angular.module('clientApp')
  .controller('IndexCtrl', ['$scope', function ($scope) {
    $scope.states = {};
    $scope.states.activeItem = 'item1';
    $scope.items = [{
      id: 'item1',
      title: 'Home'
    }, {
      id: 'item2',
      title: 'About'
    }, {
      id: 'item3',
      title: 'Register'
    }, {
      id: 'item 4',
      title: 'Login'
    }, {
      id: 'item5',
      title: 'Players'
    }, {
      id: 'item6',
      title: 'Profile'
    }];
  }]);
