(function() {
  'use strict';
  angular.module("testWM")
  .service("ContentService", ContentService);

  ContentService.$inject = ["$http"];

  function ContentService($http){
    this.getContent = (location) => $http.get(`/content/${location}`);
  }

}());
