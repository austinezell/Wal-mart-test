(function(){
  'use strict';
  angular.module('testWM')
  .controller('LandingCtrl', LandingCtrl);

  LandingCtrl.$inject = ["$scope", "$state"]

  function LandingCtrl($scope, $state){
    let vm = this;
    // establilsh watch to change animation depending on which state is incoming
    $scope.$watch(
      ()=> $state.current.name,
      (current, previous)=>{
        vm.toHistory = (current === "landing.History");
      })
    }
  })()
