
(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc19')
        .directive('comVyomVyomlibVc19',

                   function (rxRecordInstanceDataPageResource,rxRecordInstanceResource, $window,rxViewComponentEventManager,rxCurrentUser,$timeout,rxString,$document,rxNotificationMessage,$sce) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/vc19/com-vyom-vyomlib-vc19.directive.html',

            scope: {
                rxConfiguration: '='
            },

            link: function ($scope) {
                var _config;

                var init = function () {
                    _config = $scope.rxConfiguration.propertiesByName;
                    $scope.Url=_config.Url;
                    $scope.Icon=_config.Icon;
                    $scope.Title=_config.Title;
                    $scope.Size=_config.Size;
                    $scope.BGcolor=_config.BGcolor;

                    
                    $scope.mydata=[];
                    $scope.statusValue=[];
                   
                   
                  

                };

               
                

                // <!----------- buit in functions------------------>

                $scope.callAction=function(actionname)
                {
                    if(actionname == "Saction")
                        {
                            $scope.executeAction($scope.subscriberaction);
                            
                        }
                    else if(actionname == "Iaction")
                        {
                            $scope.executeAction($scope.incidentaction);
                            
                        }
                    else if(actionname == "Caction")
                        {
                            $scope.executeAction($scope.changeaction);
                            
                        }
                  
                    
                }
                //redirect to differnt url
                  $scope.redirecturl = function(redurl) {
       // $window.location.href=redurl;
                      $window.open(redurl, '_blank');
    };
                
                $scope.executeAction=function(guid)
                {
                    console.log("start process "+guid);
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
                }
   
                


                init();

            }

        };
    });
})();