'use strict';

describe('Controller: PlayerDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var PlayerDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlayerDeleteCtrl = $controller('PlayerDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PlayerDeleteCtrl.awesomeThings.length).toBe(3);
  });
});
