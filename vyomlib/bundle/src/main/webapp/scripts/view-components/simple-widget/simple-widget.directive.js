(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.simple-widget')
        .directive('comVyomVyomlibSimpleWidget',
            function (rxViewComponentEventManager,$document,$timeout,rxNotificationMessage,rxString) {
                return {
                    restrict: 'E',
                    templateUrl: 'scripts/view-components/simple-widget/com-vyom-vyomlib-simple-widget.directive.html',
                    scope: {
                        rxConfiguration: '='
                    },

                    link: function ($scope) {
                        var _config;
                        var eventManager = rxViewComponentEventManager.getInstance($scope);
    
                        // Getting the view component input parameters
                        _config = $scope.rxConfiguration.propertiesByName;
    
                        $scope.URL1 = _config.URL1;
                        $scope.URL2 = _config.URL2;
                        $scope.URL1 = _config.URL3;
                        $scope.URL4 = _config.URL4;
                        // $scope.btn1 = _config.btn1;
                        $scope.ViewGuid1 = _config.ViewGuid1;

                        $scope.ViewButton = function () {
                 
                            $timeout(function(){
                                var button;
    
                                    var ViewGuid1 = rxString.format('rx-action-button[rx-view-component-id=\'%s\'] > button', $scope.ViewGuid1);
    
                                    button = $document.find(ViewGuid1);
                                
    
                                if (button) {
                                    button.click();
                                } else {
                                    rxNotificationMessage.error('Cannot find button ' + $scope.ViewGuid1);
                                }
                            });
                        };

    
                    }

              
                };
            });
})();

