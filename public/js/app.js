(function() {
  'use strict';

  angular.module('zooApp', ['ngRoute'])
  // angular.module('zooApp')
    .controller('zooController', zooController)

  function zooController(){
    var self = this //allows us to use $scope and references the controller itself,
    self.name = 'animalStyle' //creating properties of the zooController
    self.animal = [{name: "Emma", type:"Seahorse", visible: true}, {name: "Andy", type:"Gorilla", visible: false}, {name: "Ted", type:"Bear", visible: true}]
    self.changeVisibility = function(animal){
      animal.visible = !animal.visible
    }
    console.log(self.name);

  }

}());
