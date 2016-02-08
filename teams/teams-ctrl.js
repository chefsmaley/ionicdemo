(function () {
  'use strict';

  angular.module('eliteApp').controller('TeamsCtrl', ['$scope', 'eliteApi', TeamsCtrl]);

  function TeamsCtrl($scope, eliteApi) {
    var vm = this;

    vm.loadList = function(forceRefresh) {
      console.log("Loading list " + forceRefresh);

      eliteApi.getLeagueData(forceRefresh).then(function(data) {
        console.log("Team Ctrl got " + data);
        vm.teams = data.teams;
      }).finally(function() {
        $scope.$broadcast('scroll.refreshComplete');
      });
    };

    vm.loadList(false);

    //eliteApi.getLeagueData(function(data){
    //  vm.teams=data.teams;
    //});
    //
    //var data=eliteApi.getLeagueData();
    //vm.teams=data.teams;
  }
})();
