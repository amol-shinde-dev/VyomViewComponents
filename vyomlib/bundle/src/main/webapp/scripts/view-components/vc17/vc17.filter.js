(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.vc17')
        .filter('comVyomVyomlibMyFilter', function () {
            return function (labelText) {
                return labelText;
            };
        });
})();