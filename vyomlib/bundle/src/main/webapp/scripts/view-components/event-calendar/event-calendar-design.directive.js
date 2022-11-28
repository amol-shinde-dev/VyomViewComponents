(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.event-calendar')
        .directive('comVyomVyomlibEventCalendarDesign', function () {

            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/event-calendar/com-vyom-vyomlib-event-calendar-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();
