(function(){
  'use strict';
  angular.module('testWM', [
    'ui.router',
    'ngAnimate',
  ])
  .constant('localStorageKey', 'testWM-token')
})()
