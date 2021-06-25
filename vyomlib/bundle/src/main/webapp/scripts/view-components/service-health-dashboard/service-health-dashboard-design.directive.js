(function () {
  'use strict';

  angular.module('com.vyom.vyomlib.view-components.service-health-dashboard')
    .directive('comVyomVyomlibServiceHealthDashboardDesign', function () {
      return {
        restrict: 'E',
        templateUrl: 'scripts/view-components/service-health-dashboard/com-vyom-vyomlib-service-health-dashboard-design.directive.html',

        scope: {
          rxConfiguration: '='
        }
      };
    });
})();