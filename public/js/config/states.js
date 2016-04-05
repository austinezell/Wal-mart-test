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
      templateUrl: '/html/general/home.html',
      controller: "PageCtrl",
      controllerAs: "Home"
    })
    .state('landing.History',{
      url: '/about',
      templateUrl: '/html/general/about.html',
      controller: "PageCtrl",
      controllerAs: "History"
    })
    $urlRouterProvider.otherwise('/');
  };
})()
