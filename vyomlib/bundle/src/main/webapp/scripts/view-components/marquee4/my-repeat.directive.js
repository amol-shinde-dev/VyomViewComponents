angular.module('com.vyom.vyomlib.view-components.marquee4')
    .directive('comVyomVyomlibMyRepeatDirective', function ($timeout, rxString, $document, rxNotificationMessage, $sce) {
        return function (scope, element, attrs) {
            angular.element(element).css('color', 'blue');

            if (scope.$last) {

                $timeout(function () {

                    $('.simple-marquee-container').SimpleMarquee();
                });
            }
        };
    });
