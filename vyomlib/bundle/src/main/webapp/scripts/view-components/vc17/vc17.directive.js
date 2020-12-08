
(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc17')
        .directive('comVyomVyomlibVc17',

                   function (rxRecordInstanceDataPageResource,rxRecordInstanceResource, $window,rxViewComponentEventManager,rxCurrentUser,$timeout,rxString,$document,rxNotificationMessage,$sce) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/vc17/com-vyom-vyomlib-vc17.directive.html',

            scope: {
                rxConfiguration: '='
            },

            link: function ($scope) {
                var _config;

                var init = function () {
                    _config = $scope.rxConfiguration.propertiesByName;
                    $scope.Url1=_config.Url1;
                    $scope.Url2=_config.Url2;
                    $scope.Url3=_config.Url3;
                    $scope.Url4=_config.Url4;
                    $scope.Icon1=_config.Icon1;
                    $scope.Icon2=_config.Icon2;
                    $scope.Icon3=_config.Icon3;
                    $scope.Icon4=_config.Icon4;
                  console.log($scope.Url1);
                   $scope.Slot1Title=_config.Slot1Title;
                   $scope.Slot1Notes=_config.Slot1Notes;
                   $scope.Slot1ClickURL=_config.Slot1ClickURL;
                   $scope.Slot2Notes=_config.Slot2Notes;
                   $scope.Slot2Followers=_config.Slot2Followers;
                    $scope.Slot2Title=_config.Slot2Title;
                    $scope.Slot1ClickBGColor=_config.Slot1ClickBGColor;
                    $scope.Slot2NotesBGColor=_config.Slot2NotesBGColor;
                    
                    $scope.URL=_config.URL;
                    $scope.subTitle=_config.subTitle;
                    $scope.Title1=_config.Title1;
                    $scope.Title2=_config.Title2;
                    $scope.Title3=_config.Title3;
                    $scope.Title4=_config.Title4;
                    
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