(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.recent-activity')
        .directive('comVyomVyomlibRecentActivity',

            function (rxRecordInstanceDataPageResource, rxRecordInstanceResource, $window, rxViewComponentEventManager, rxCurrentUser, $timeout, rxString, $document, rxNotificationMessage, $sce) {
                return {
                    restrict: 'E',
                    templateUrl: 'scripts/view-components/recent-activity/com-vyom-vyomlib-recent-activity.directive.html',

                    scope: {
                        rxConfiguration: '='
                    },

                    link: function ($scope) {
                        var _config;

                        var init = function () {
                            _config = $scope.rxConfiguration.propertiesByName;
                            $scope.URL1 = _config.URL1;
                            $scope.Label1 = _config.Label1;
                            $scope.Icon1 = _config.Icon1;
                            $scope.Color1 = _config.Color1;

                            $scope.URL2 = _config.URL2;
                            $scope.Label2 = _config.Label2;
                            $scope.Icon2 = _config.Icon2;
                            $scope.Color2 = _config.Color2;

                            $scope.URL3 = _config.URL3;
                            $scope.Label3 = _config.Label3;
                            $scope.Icon3 = _config.Icon3;
                            $scope.Color3 = _config.Color3;


                        };




                        // <!----------- buit in functions------------------>
                        $scope.$watch("rxConfiguration.propertiesByName.URL1", function (URL1) {
                            $scope.URL1 = URL1;
                        });
                        $scope.$watch("rxConfiguration.propertiesByName.Label1", function (Label1) {
                            $scope.Label1 = Label1;
                        });
                        $scope.$watch("rxConfiguration.propertiesByName.URL2", function (URL2) {
                            $scope.URL2 = URL2;
                        });
                        $scope.$watch("rxConfiguration.propertiesByName.Label2", function (Label2) {
                            $scope.Label2 = Label2;
                        });
                        $scope.$watch("rxConfiguration.propertiesByName.URL3", function (URL3) {
                            $scope.URL3 = URL3;
                        });
                        $scope.$watch("rxConfiguration.propertiesByName.Label3", function (Label3) {
                            $scope.Label3 = Label3;
                        });


                        $scope.ifUrlBlank = function (data) {
                            if (data == null || data == "") {
                                return 'w3-cursor_default';
                            }
                        }

                        init();

                    }

                };
            });
})();
