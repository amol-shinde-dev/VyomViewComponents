/*
This code is run at "design" phase, in Innovation Studio.
It gathers the number of stars defined as a parameter automatically.
*/
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.dynamic-star-rating')
        .directive('comVyomVyomlibDynamicStarRatingDesign', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/dynamic-star-rating/com-vyom-vyomlib-dynamic-star-rating-design.directive.html',

                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    // view component configuration will be stored in $scope.rxConfiguration.model
                    $scope.stars = 0;
                    updateStars();

                    // subscribe to rxData property change
                    $scope.rxConfiguration.model.on('change:rxData', updateStars);

                    function updateStars() {
                        $scope.stars = Number($scope.rxConfiguration.model.prop('rxData/stars'));
                    }

                    // function called by the html code to get the number of stars.
                    $scope.getStars = function () {
                        return new Array($scope.stars);
                    };
                }
            };
        });
})();