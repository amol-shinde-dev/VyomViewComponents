(function () {
  'use strict';

  angular.module('com.vyom.vyomlib.view-components.generic-card-widget')
    .filter('comVyomVyomlibMyFilter', function () {
      return function (labelText) {
        return labelText;
      };
    });
})();