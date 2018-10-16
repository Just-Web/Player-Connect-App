'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .controller('IndexCtrl', ['$scope', function($scope){}])
  .config(function ($routeProvider, RestangularProvider) {

    // Set the base URL for Restangular.
    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/homepage.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/register', {
        templateUrl: 'views/player_register.html',
        /*controller: ''*/
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/players', {
        templateUrl: 'views/players.html',
        controller: 'PlayersCtrl'
      })
      .when('/create/player', {
        templateUrl: 'views/player-add.html',
        controller: 'PlayerAddCtrl',
        controllerAs: 'playerAdd'
      })
      .when('/player/:id', {
        templateUrl: 'views/player-view.html',
        controller: 'PlayerViewCtrl',
        controllerAs: 'playerView'
      })
      .when('/player/:id/delete', {
        templateUrl: 'views/player-delete.html',
        controller: 'PlayerDeleteCtrl',
        controllerAs: 'playerDelete'
      })
      .when('/player/:id/edit', {
        templateUrl: 'views/player-edit.html',
        controller: 'PlayerEditCtrl',
        controllerAs: 'playerEdit'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('PlayerRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Player', function(PlayerRestangular) {
    return PlayerRestangular.service('player');
  })
  .filter('trusted', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  });
