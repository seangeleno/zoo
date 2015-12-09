(function() {
  'use strict';

  angular.module('zooApp', ['ngRoute'])
  // angular.module('zooApp')
    .controller('zooController', zooController)

  function zooController(){
    var self = this //allows us to use $scope and references the controller itself,
    self.name = 'animalStyle' //creating properties of the zooController
    console.log(self.name);

  }

}());
