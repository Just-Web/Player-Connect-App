'use strict';

describe('Controller: PlayerEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var PlayerEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlayerEditCtrl = $controller('PlayerEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PlayerEditCtrl.awesomeThings.length).toBe(3);
  });
});
