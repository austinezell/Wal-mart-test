(function(){
  angular.module("testWM")
  .directive('clickStopPropagation', clickStopPropagation)
  function clickStopPropagation(){
    return function(scope, element, attr){
      element.bind('click', function(evt){
        evt.stopPropagation();
      })
    }
  }
})()
