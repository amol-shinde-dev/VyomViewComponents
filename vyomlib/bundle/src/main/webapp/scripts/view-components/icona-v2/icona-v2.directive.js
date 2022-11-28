(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.icona-v2')
        .directive('comVyomVyomlibIconaV2',

            function (rxRecordInstanceDataPageResource, rxRecordInstanceResource, $window, rxViewComponentEventManager, rxCurrentUser, $timeout, rxString, $document, rxNotificationMessage, $sce) {
                return {
                    restrict: 'E',
                    templateUrl: 'scripts/view-components/icona-v2/com-vyom-vyomlib-icona-v2.directive.html',

                    scope: {
                        rxConfiguration: '='
                    },

                    link: function ($scope) {
                        var _config;

                        var init = function () {
                            _config = $scope.rxConfiguration.propertiesByName;

                            $scope.icon = _config.icon;
                            $scope.tooltipText = _config.tooltipText;
                            $scope.cssStyle = _config.cssStyle;


                        };




                        // <!----------- buit in functions------------------>


                        //redirect to differnt url
                        $scope.redirecturl = function (redurl) {

                            $window.open(redurl, '_blank');
                        };


                        $scope.hoverIn = function (item) {
                            if (item == "popover") {
                                $('[rel="popover"]').popover();
                            }
                            $('[rel="tooltip"]').tooltip();
                        }



                        init();

                    }

                };
            });
})();
