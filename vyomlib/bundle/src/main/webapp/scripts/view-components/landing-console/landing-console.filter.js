(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.landing-console')
        .filter('comVyomVyomlibReverse', function () {
            return function (items) {
                if (items != null || items != "") {
                    return items.slice().reverse();
                }

            };
        });
})();
