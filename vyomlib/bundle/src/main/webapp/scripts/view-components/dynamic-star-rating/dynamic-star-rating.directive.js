(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.dynamic-star-rating')
        .directive('comVyomVyomlibDynamicStarRating',
            function (rxRecordInstanceDataPageResource, rxRecordInstanceResource, rxViewComponentEventManager) {
                return {
                    restrict: 'E',
                    templateUrl: 'scripts/view-components/dynamic-star-rating/com-vyom-vyomlib-dynamic-star-rating.directive.html',

                    scope: {
                        rxConfiguration: '='
                    },

                    link: function ($scope, $element) {

                        $scope.stars = [];
                        var _config;

                        function init() {
                            _config = $scope.rxConfiguration.propertiesByName;

                            $scope.cfg = {};
                            $scope.cfg.recordDefinitionName = _config.recordDefinitionName;
                            $scope.fieldId = _config.fieldId;
                            $scope.ratingName = _config.ratingName;
                            $scope.size = _config.size;
                            $scope.font = _config.font + "px";

                            getData();
                        }

                        function getData() {

                            var queryParams = {
                                propertySelection: $scope.ratingName + "," + $scope.fieldId
                            };

                            var foo = rxRecordInstanceDataPageResource.withName($scope.cfg.recordDefinitionName);
                            foo.get(100, 0, queryParams).then(
                                function (allRecords) {
                                    $scope.starData = allRecords.data;
                                    data($scope.starData);
                                }
                            );
                        }

                        function data(starCount) {
                            for (var i = 0; i < starCount.length; i++) {
                                $scope.stars[i] = buildStarsConfiguration($scope.starData[i][$scope.fieldId]);
                            }
                        }

                        function buildStarsConfiguration(starCount) {
                            var stars = [];

                            for (var i = 1; i <= _config.stars; i++) {
                                stars[i] = {
                                    icon: i <= starCount ? $scope.size + ' d-icon-star checked' : $scope.size + ' d-icon-star_o'
                                };
                            }
                            return stars;
                        }
                        init();
                    }
                };
            });
})();
