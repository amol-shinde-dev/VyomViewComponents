(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.landing-console')
        .filter('comVyomVyomlibMyFilter', function () {
            return function (labelText) {
                return labelText;
            };
        });
})();