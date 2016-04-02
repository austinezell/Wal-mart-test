'use strict';
(function(){
  angular.module('testWM')
  .controller('navCtrl', navCtrl)

  navCtrl.$inject = ["Auth"]

  function navCtrl(Auth) {
    let vm = this;
    vm.logout = function (){
      Auth.logOut();
    }
  };
})()
