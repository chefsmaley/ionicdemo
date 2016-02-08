(function () {
  'use strict';

  angular.module('eliteApp').controller('teamDetailCtrl', ['$stateParams',
    '$ionicPopup', 'eliteApi', teamDetailCtrl]);

  function teamDetailCtrl($stateParams, $ionicPopup, eliteApi) {
    var vm = this;
    console.log("$stateParams", $stateParams);

    vm.teamId = Number($stateParams.id);
    console.log("Team id: " + vm.teamId);

    var data = eliteApi.getLeagueDataStatic();

    eliteApi.getLeagueData(false).then(function(data) {
      console.log("Team Detail Ctrl got " + data);
    });

    // console.log("All teams : " + JSON.stringify(data.teams));

    //var divTeam = _.chain(data.teams)
    //  .flatten()
    //  .find({ "divisionName":"5th Grade - Green"})
    //  .value();
    //
    //console.log("Division Team: " + JSON.stringify(divTeam));

    var team = _.chain(data.teams)
      .flatten()
      .find( "divisionTeams", { "id": vm.teamId })
      .value();

    console.log("Team: " + JSON.stringify(team));

    var divTeams=team.divisionTeams;

    vm.teamName = divTeams[0].name;

    //console.log("GAMES : " + JSON.stringify(data.games));

    vm.games = _.chain(data.games)
      .filter(isTeamInGame)
      .map(function (item) {
        var isTeam1 = (item.team1Id === vm.teamId);
        var opponentName = isTeam1 ? item.team2 : item.team1;
        var scoreDisplay = getScoreDisplay(isTeam1, item.team1Score, item.team2Score);
        return {
          gameId: item.id,
          opponent: opponentName,
          time: item.time,
          location: item.location,
          locationUrl: item.locationUrl,
          scoreDisplay: scoreDisplay,
          homeAway: (isTeam1 ? "vs." : "at")
        };
      })
      .value();

    console.log(vm.teamId + " games equals " + JSON.stringify(vm.games));

    //console.log("STANDINGS : " + JSON.stringify(data.standings));

    vm.teamStanding = _.chain(data.standings)
      .flatten("divisionStandings")
      .find( "divisionStandings", {"teamId" : vm.teamId})
      .value();

    vm.following=false;

    vm.toggleFollow = function(){
      if (vm.following) {
        var confirmPopup = $ionicPopup.confirm({
          title: 'Unfollow?',
          template: 'Are you sure you want to unfollow?'
        });
        confirmPopup.then(function(res) {
          if (res) {
            vm.following = !vm.following;
          }
        });
      } else {
        vm.following = !vm.following;
      }
    };

    console.log(vm.teamId + " standings equals " + JSON.stringify(vm.teamStanding));

    function isTeamInGame(item) {
      return item.team1Id === vm.teamId || item.team2Id === vm.teamId;
    }

    function getScoreDisplay(isTeam1, team1Score, team2Score) {
      if (team1Score && team2Score) {
        var teamScore = (isTeam1 ? team1Score : team2Score);
        var opponentScore = (isTeam1 ? team2Score : team1Score);
        var winIndicator = teamScore > opponentScore ? "W: " : "L: ";
        console.log("Called getScore " + isTeam1);
        return winIndicator + teamScore + "-" + opponentScore;
      }
      else {
        return "";
      }
    }
  }
})();
