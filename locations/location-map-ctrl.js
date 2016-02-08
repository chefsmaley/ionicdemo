/**
 * Created by smaley on 07/02/2016.
 */
(function () {
  'use strict';

  angular.module('eliteApp').controller('LocationMapCtrl', ['$stateParams', LocationMapCtrl]);

  function LocationMapCtrl($stateParams) {
    var vm = this;

    vm.locationId = Number($stateParams.id);

    vm.map = {
      center: {
        latitude: 38.897677,
        longitude: -77.036530
      },
      zoom: 12
    };

    vm.marker = { };

    //var data=eliteApi.getLeagueDataStatic();
    //
    //vm.locations=data.locations;

    //eliteApi.getLeagueData(true).then(function(data){
    //  vm.location = _find(data.locations, {id: vm.locationId});
    //  vm.marker = {
    //    latitude: vm.location.latitude,
    //    longitude: vm.location.longitude,
    //    title: vm.location.name + "<br/>(Tap for Directions)",
    //    showWindow: true
    //  };
    //  vm.map.center.latitude = vm.location.latitude;
    //  vm.map.center.longitude = vm.location.longitude;
    //})
  }
})();
