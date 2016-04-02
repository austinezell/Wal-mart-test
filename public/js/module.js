(function(){
  'use strict';
  angular.module('testWM', [
    'ui.router',
    'ngAnimate',
    'ngMessages',
    'ngAria',
    'ngMaterial'
  ])
  .constant('localStorageKey', 'testWM-token')
})()
