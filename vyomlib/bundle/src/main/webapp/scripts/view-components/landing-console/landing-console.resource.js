/*
The Resources return a promise.
 */

(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.landing-console').factory('comVyomVyomlibLandingConsoleResource', function (COM_VYOM_VYOMLIB_LANDING_CONSOLE,rxResource) {
        // rxResource is to call a custom Java API
        var _resource = rxResource.withSubUrlConfiguration(COM_VYOM_VYOMLIB_LANDING_CONSOLE.getInfosUrl, function (RestangularConfigurer) {
            RestangularConfigurer.setRestangularFields({'id': 'name'});
            
        });

        function getUserInfos() {
            return _resource.get('');
        }

        return {
            getUserInfos: getUserInfos
        };
    });
})();