(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.dynamic-category')
        .filter('comVyomVyomlibMyFilter', function () {
            return function (labelText) {
                return labelText;
            };
        });
})();
