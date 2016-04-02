(function(){
  'use strict';
  angular.module('testWM')
  .controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ["$scope", "$state", "ContentService"]

  function HomeCtrl($scope, $state, ContentService){
    let vm = this;
    vm.title = "Home";
    getContent(vm.title)

    function getContent(location){
      ContentService.getContent(location)
      .then(res=>{
        console.log(res);
      })
    }
    $scope.$watch(
      ()=>$state.current.name,
      (current, previous)=>{
        vm.toAbout = (current === "home.About");
      })
    }
  })()
