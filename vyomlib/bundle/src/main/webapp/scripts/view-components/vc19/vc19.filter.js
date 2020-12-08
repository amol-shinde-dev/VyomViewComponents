(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.vc19')
        .filter('comVyomVyomlibRemoveSpace', function() {
    return function(string) {
        if (!angular.isString(string)) {
            return string;
        }
        return string.replace(/[\s]/g, '');
    };
});
})();