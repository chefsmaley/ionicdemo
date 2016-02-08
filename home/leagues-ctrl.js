(function () {
  'use strict';

  angular.module('eliteApp').controller('LeaguesCtrl', ['$state', 'eliteApi', LeaguesCtrl]);

  function LeaguesCtrl($state, eliteApi) {
    var vm = this;

    //vm.leagues=eliteApi.getLeagues();

    eliteApi.getLeagues().then(function(data){
      vm.leagues=data;
    });

    vm.selectLeague = function(leagueId) {

      eliteApi.setLeagueId(leagueId);

      console.log("Selected league : " + leagueId);
      $state.go("app.teams");
    };

    //var leagueData=eliteApi.getLeagueData();

    //console.log(leagues, leagueData);
  }
})();
