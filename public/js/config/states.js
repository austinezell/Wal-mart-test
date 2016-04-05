(function(){
  angular.module('testWM')
  .config(StateConfig)
  StateConfig.$inject = ["$stateProvider", "$urlRouterProvider"]

  function StateConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('landing', {
      templateUrl: "./html/general/landing.html",
      controller: 'LandingCtrl',
      abstract: true,
      controllerAs: "Landing"
    })
    .state('landing.Home',{
      url: '/',
      templateUrl: '/html/general/content.html',
      controller: "PageCtrl",
      controllerAs: "Page"
    })
    .state('landing.History',{
      url: '/about',
      templateUrl: '/html/general/content.html',
      controller: "PageCtrl",
      controllerAs: "Page"
    })
    $urlRouterProvider.otherwise('/');
  };
})()
