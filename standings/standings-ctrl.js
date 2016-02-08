/**
 * Created by smaley on 25/01/2016.
 */
(function () {
  'use strict';

  angular.module('eliteApp').controller('StandingsCtrl', ['$scope', 'eliteApi', StandingsCtrl]);

  function StandingsCtrl($scope, eliteApi) {
    var vm = this;

    vm.loadList = function(forceRefresh) {
      console.log("Loading list " + forceRefresh);

      eliteApi.getLeagueData(forceRefresh).then(function(data) {
        console.log("Standings Ctrl got " + data);
        vm.standings=data.standings;
      }).finally(function() {
        $scope.$broadcast('scroll.refreshComplete');
      });
    };

    vm.loadList(false);

    //
    //var data=eliteApi.getLeagueData(true);
    //vm.standings=data.standings;
  }
})();
