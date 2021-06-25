(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.topheader-param').directive('comVyomVyomlibTopheaderParam',
        function (rxViewComponentEventManager) {

            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/topheader-param/com-vyom-vyomlib-topheader-param.directive.html',

                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    var _config;

                    var init = function () {
                        _config = $scope.rxConfiguration.propertiesByName;

                        $scope.cfg = {};

                        $scope.cfg.text = _config.text;

                        $scope.cfg.appname = _config.appname;
                        $scope.cfg.hyperlink = _config.hyperlink;
                        $scope.cfg.toggleicon = _config.toggleicon;
                        $scope.toggleicon = _config.toggleicon;
                        $scope.togglefont = _config.togglefont;
                        $scope.bgcolor = _config.bgcolor;
                        $scope.headerSize = _config.headerSize;

                        if (_config.togglefont === '1') {
                            $scope.cfg.font = "Ericfont";



                        } else {
                            $scope.cfg.font = "sans-serif";

                        }

                    };


                    $scope.$watch('rxConfiguration.propertiesByName.text', function (text) {
                        $scope.cfg.text = text;
                    })
                    init();

                }

            };
        });
})();
