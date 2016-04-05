(function(){
  'use strict';
  angular.module('testWM', [
    'ui.router',
    'ngAnimate',
    'ngMessages'
  ])
  .constant('localStorageKey', 'testWM-token')
})()
