(function() {
  'use strict';
  angular.module("testWM")
  .service("ContentSerivce", ContentSerivce);

  ContentSerivce.$inject = ["$http"];

  function ContentSerivce(){
    this.getPage = (location) => $http.get(`/content/${location}`);
  }

}());
