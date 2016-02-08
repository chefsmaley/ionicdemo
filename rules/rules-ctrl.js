/**
 * Created by smaley on 07/02/2016.
 */
(function () {
  'use strict';

  angular.module('eliteApp').controller('RulesCtrl', [RulesCtrl]);

  function RulesCtrl() {
    var vm = this;

    var rulesMarkdown='### HS Federation rules will be used except where noted: ###\n\n' +
  '\n*\tThe first team listed (under V) on the schedule is considered VISITORS and should wear Dark Jerseys. ' +
  'Second team listed (under H) is HOME and wears White (light) jerseys.\n*\tHome Team Provides game Ball – ' +
  'It should be a NFHS approved 28.5 indoor game ball. ' +
  'If the Home team does not have a NFHS approved ball the Away team can provide a NFHS game ball.\n' +
  '*\tEach team must provide a team representative at the scorer’s table for their game. ' +
  'One team covers the book; the other team covers the clock.\n*\t20 minute halves. ' +
  'Running Clock except last 1 minute of first half, last 2 minutes of game and all time outs.\n' +
  '*\tTwo 45 second timeouts per half - Timeouts don’t carry-over from 1st half to 2nd half.\n' +
  '*\t**Free Throw Bonus**: ' +
  'We’re trying to minimize wasting playing time shooting fouls shots while the clock runs. \n' +
  '*\t**1st half**, NO 1-n-1 bonus at 7 fouls. 2 shot bonus will be shot at 10th foul. \n' +
  '*\t**2nd Half**, Same as first half, except when we get to 2 minutes and we are in “stop clock” mode. ' +
  'So, 2 minutes or less in 2nd half, we go to 1-n-1 bonus at 7 fouls. ' +
  'So if there are 3 minutes left in the 2nd half, with 7, 8 or 9 fouls, we are not shooting 1-n-1. ' +
  'If there are 2 minutes or less in the second half with 7, 8 or 9 fouls, we “are” shooting 1-n-1.\n' +
  '*\tNo pressing or half-court trapping after lead reaches 20 points. Team gets 2 warnings. ' +
  'On third violation, a Team Technical assessed (not counted against individual player) ' +
  'where offense get automatic 2 points and ball at half court.\n' +
  '*\t2 behavior related technical fouls result in removal from current and next game.\n' +
  '*\tNo technical fouls for book errors. Just correct the mistake and move on.\n' +
  '*\tTeams can start game with 4 players. If you have 4 players available at game time, the game must start.\n' +
  '*\tOvertime - One 2 minute OT. Teams get one additional timeout in OT, two maximum. ' +
  'If still tied after OT, the 10 players on the court immediately go into a “foul shooting shootout.” ' +
  'Players from each team alternate shooting one foul shot, one player at a time. ' +
  'All ten players shoot. If one team has made more shots than the other team after 10 shots, that team wins. ' +
  'If tied after all 10 players shoot, go back to first players until one team makes it and the other misses. ' +
  'This is similar to a soccer shootout. This is only for regular season. Normal O/Ts in playoffs, not shootout.\n';

    vm.mainContent=rulesMarkdown;

    //eliteApi.getLeagueData().then(function(data) {
    //    console.log("Rules Ctrl got " + JSON.stringify(data));
     //   vm.mainContent=data.league.rulesScreen;
      //})
    }
})();
