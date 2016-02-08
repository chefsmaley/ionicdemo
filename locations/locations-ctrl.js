/**
 * Created by smaley on 25/01/2016.
 */
(function () {
  'use strict';

  angular.module('eliteApp').controller('LocationsCtrl', ['eliteApi', LocationsCtrl]);

  function LocationsCtrl(eliteApi) {
    var vm = this;

    var data=eliteApi.getLeagueDataStatic();

    vm.locations=data.locations;

  }
})();
