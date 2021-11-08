(function () {
  'use strict';

  angular.module('com.vyom.vyomlib.view-components.card-widget')
    .filter('comVyomVyomlibMyFilter', function () {
      return function (labelText) {
        return labelText;
      };
    });
})();