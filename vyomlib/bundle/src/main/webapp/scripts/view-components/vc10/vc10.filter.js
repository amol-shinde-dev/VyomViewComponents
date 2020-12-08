(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.vc10')
        .filter('comVyomVyomlibMyFilter', function () {
            return function (labelText) {
                return labelText;
            };
        });
})();