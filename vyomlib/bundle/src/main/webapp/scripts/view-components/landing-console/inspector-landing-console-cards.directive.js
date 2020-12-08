// This directive is used at design time to choose a field.
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.landing-console').directive('comVyomVyomlibInspectorLandingConsoleCards', function (RX_RECORD_DEFINITION, $timeout) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/landing-console/com-vyom-vyomlib-inspector-landing-console-cards.directive.html',

            link: function ($scope) {
                
                   $scope.data = {
                    fields: [],
                    selectedField: null
                };
                
                $scope.cards=[];
                $scope.visible="";
                
                
         

                function initializeObject() {
                    if($scope.cell.prop($scope.path)!= undefined || $scope.cell.prop($scope.path)!= null || $scope.cell.prop($scope.path) != "")
                        {
                    var temp = $scope.cell.prop($scope.path);         
                    $scope.cards=angular.fromJson(temp);
                   
                            
                            
                        }else{
                            
                            $scope.cards=[];
                        }
                }
                $scope.remove=function(item)
                {
                   
                    $scope.cards.splice(item, 1);
                    $scope.saveCards();
                    
                    
                   
                    
                }
                $scope.setObject=function(item)
                {
                   
                    $scope.cell.prop('rxData/ApplicationName', $scope.cards[item].ApplicationName);
                    $scope.cell.prop('rxData/URL', $scope.cards[item].URL);
                    $scope.cell.prop('rxData/Description', $scope.cards[item].Description);
                     $scope.cell.prop('rxData/Icon', $scope.cards[item].Icon);
                    $scope.cell.prop('rxData/Color', $scope.cards[item].Color);
                    $scope.cell.prop('rxData/tooltipHeader', $scope.cards[item].tooltipHeader);
                    $scope.cell.prop('rxData/tooltipDescription', $scope.cards[item].tooltipDescription);
                    $scope.cell.prop('rxData/permissions', $scope.cards[item].permissions);
                    $scope.cell.prop('rxData/Button', item);
                    
                    
                   
                    
                }
                
                
                // Saving the parameter
                $scope.saveCards = function () {
                    $scope.cell.prop($scope.path, angular.toJson($scope.cards));
                };

                initializeObject();
            }
          
        };
    });
})();