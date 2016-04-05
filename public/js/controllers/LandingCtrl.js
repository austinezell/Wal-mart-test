(function(){
  'use strict';
  angular.module('testWM')
  .controller('LandingCtrl', LandingCtrl);

  LandingCtrl.$inject = ["$scope", "$state"]

  function LandingCtrl($scope, $state){
    let vm = this;
    $scope.$watch(
      ()=> $state.current.name,
      (current, previous)=>{
        vm.toHistory = (current === "landing.History");
      })
    }
  })()
