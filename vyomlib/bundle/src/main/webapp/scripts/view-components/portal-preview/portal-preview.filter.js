(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.portal-preview')
        .filter('comVyomVyomlibReverse', function () {
            return function (items) {
                if (items != null || items != "") {
                    return items.slice().reverse();
                }

            };
        });
})();
