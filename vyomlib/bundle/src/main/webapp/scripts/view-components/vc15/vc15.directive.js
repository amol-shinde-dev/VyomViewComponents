
(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc15')
        .directive('comVyomVyomlibVc15',

                   function (rxRecordInstanceDataPageResource,$document,$timeout,rxNotificationMessage,rxString) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/vc15/com-vyom-vyomlib-vc15.directive.html',

            scope: {
                rxConfiguration: '='
            },

                 link: function ($scope) {
                var _config;

                var init = function () {
                    _config = $scope.rxConfiguration.propertiesByName;
                   
                     $scope.cfg = {};  
                 $scope.cfg.Guid = _config.Guid;
                  
                   
                   
                    
                    $scope.clickButton($scope.cfg.Guid);
              
                    
          
                    
                };
                     
                     
                        $scope.clickButton = function (guid) {
                        // We have to use $timeout to avoid a conflict with the angularJs digest cycle.
                        $timeout(function(){
                            var button;

                            
                                // We are looking for the rx-action-button with the given Guid and then the button embedded inside of it.
                                var buttonGuid = rxString.format('rx-action-button[rx-view-component-id=\'%s\'] > button', guid);
                               // console.log("buttonGUID:"+buttonGuid);
                                button = $document.find(buttonGuid);
                            

                            if (button) {
                                button.click();
                            } else {
                                rxNotificationMessage.error('Cannot find button ' + $scope.buttonGuid);
                            }
                        });
                    };   


                init();

            }

        };
    });
})();