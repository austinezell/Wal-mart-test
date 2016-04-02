(function(){

  angular
  .module('testWM')

  .controller('PageCtrl', PageCtrl);

  PageCtrl.$inject = ["$state", "ContentService"];

  function PageCtrl($state, ContentService) {
    let vm = this;
    vm.name = $state.current.name.replace('landing.', "");
    getContent(vm.name)

    function getContent(location){
      ContentService.getContent(location)
      .then(res=>{
        vm.content = res.data
      }, err=>{
        console.error(err);
      })
    }

  }
})()
