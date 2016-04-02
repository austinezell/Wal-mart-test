(function(){
  'use strict';
  angular.module('testWM')
  .controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ["$scope", "$state", "ContentSerivce"]

  function HomeCtrl($scope, $state, ContentSerivce){
    let vm = this;
    vm.title = "Home";
    getContent()

    function getContent(){
      ContentSerivce.getPage()
    }
    $scope.$watch(
      ()=>$state.current.name,
      (current, previous)=>{
        vm.toAbout = (current === "home.about");
      })
    }
  })()
