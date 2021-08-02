(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.star-rating').directive('comVyomVyomlibStarRating', function (rxRecordInstanceResource, rxViewComponentEventManager) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/star-rating/com-vyom-vyomlib-star-rating.directive.html',

            scope: {
                rxConfiguration: '='
            },

            link: function ($scope, $element) {
                var config = $scope.rxConfiguration.propertiesByName;
                var recordResource = rxRecordInstanceResource.withName(config.recordDefinitionName);
                var recordInstance = null;

                $scope.stars = [];

                initialize();

                function initialize() {
                    // reinitialize configuration each time when recordInstanceId is changed
                    $scope.$watch('rxConfiguration.propertiesByName.recordInstanceId', initializeStars);
                }

                function initializeStars() {
                    if (config.recordInstanceId) {
                        recordResource.get(config.recordInstanceId).then(function (recordInstanceResource) {
                            recordInstance = recordInstanceResource;
                            $scope.stars = buildStarsConfiguration(recordInstanceResource.fieldInstances[config.fieldId].value || 0);
                        }).catch(function () {
                            $scope.stars = [];
                        });
                    } else {
                        $scope.stars = [];
                    }
                }

                function buildStarsConfiguration(starCount) {
                    var stars = [];

                    for (var i = 1; i <= config.stars; i++) {
                        stars[i] = {
                            icon: i <= starCount ? 'fa-3x d-icon-star checked' : 'fa-3x d-icon-star_o'
                        };
                    }

                    return stars;
                }
            }
        };
    });
})();