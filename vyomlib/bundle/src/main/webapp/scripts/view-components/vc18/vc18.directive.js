(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc18')
        .directive('comVyomVyomlibVc18',

            function (rxRecordInstanceDataPageResource, rxRecordInstanceResource, $window, rxViewComponentEventManager, rxCurrentUser, $timeout, rxString, $document, rxNotificationMessage, $sce) {
                return {
                    restrict: 'E',
                    templateUrl: 'scripts/view-components/vc18/com-vyom-vyomlib-vc18.directive.html',

                    scope: {
                        rxConfiguration: '='
                    },

                    link: function ($scope) {
                        var _config;

                        var init = function () {
                            _config = $scope.rxConfiguration.propertiesByName;
                            $scope.Url = _config.Url;
                            $scope.Icon = _config.Icon;
                            $scope.Title = _config.Title;
                            $scope.Size = _config.Size;
                            $scope.BGcolor = _config.BGcolor;


                            $scope.iconaStyle = $scope.Size ? {
                                "width": $scope.Size
                            } : "";



                        };




                        // <!----------- buit in functions------------------>


                        //redirect to differnt url
                        $scope.redirecturl = function (redurl) {

                            $window.open(redurl, '_blank');
                        };






                        init();

                    }

                };
            });
})();
