(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.recent-activity')
        .filter('comVyomVyomlibMyFilter', function () {
            return function (labelText) {
                return labelText;
            };
        });
})();
