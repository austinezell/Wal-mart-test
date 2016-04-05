(function(){

  angular
  .module('testWM')

  .controller('PageCtrl', PageCtrl);

  PageCtrl.$inject = ["$state", "ContentService"];

  function PageCtrl($state, ContentService) {
    let vm = this;
    vm.dataLoaded = false;
    vm.name = $state.current.name.replace('landing.', "");
    getContent(vm.name)

    function getContent(location){
      ContentService.getContent(location)
      .then(res=>{
        vm.dataLoaded = true;
        vm.content = res.data
      }, err=>{
        console.error(err);
      })
    }

  }
})()
