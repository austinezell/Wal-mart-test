(function(){

  angular
  .module('testWM')

  .controller('usersCtrl', usersCtrl);

  usersCtrl.$inject = ["$state", "Auth"];

  function usersCtrl($state, Auth) {
  }
})()
