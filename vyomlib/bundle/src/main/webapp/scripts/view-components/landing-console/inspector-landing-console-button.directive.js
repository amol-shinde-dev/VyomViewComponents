// This directive is used at design time to choose a field.
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.landing-console').directive('comVyomVyomlibInspectorLandingConsoleButton', function (RX_RECORD_DEFINITION, $timeout) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/landing-console/com-vyom-vyomlib-inspector-landing-console-button.directive.html',

            link: function ($scope) {
                
                   $scope.data = {
                    fields: [],
                    selectedField: null
                };
             
                
                $scope.objectarray=[];
         

                function initializeObject() {
                    if($scope.cell.prop('rxData/CardList'))
                        {
                    $scope.objectarray = angular.fromJson($scope.cell.prop('rxData/CardList'));
                        }else{
                            $scope.objectarray=[];
                        }
                }

                // Saving the parameter
                $scope.saveObject = function () {
                    $scope.objectarray.push({ApplicationName:$scope.cell.prop('rxData/ApplicationName'),
                                            URL:$scope.cell.prop('rxData/URL'),
                                            Description:$scope.cell.prop('rxData/Description'),
                                             Icon:$scope.cell.prop('rxData/Icon'),
                                             Color:$scope.cell.prop('rxData/Color'),
                                             tooltipHeader:$scope.cell.prop('rxData/tooltipHeader'),
                                             tooltipDescription:$scope.cell.prop('rxData/tooltipDescription'),
                                             permissions:$scope.cell.prop('rxData/permissions')
                                            });
                    $scope.cell.prop('rxData/CardList', angular.toJson($scope.objectarray));
                    $scope.cell.prop('rxData/ApplicationName', "");
                    $scope.cell.prop('rxData/URL', "");
                    $scope.cell.prop('rxData/Description', "");
                    $scope.cell.prop('rxData/Icon', "");
                    $scope.cell.prop('rxData/Color', "");
                    $scope.cell.prop('rxData/tooltipHeader', "");
                    $scope.cell.prop('rxData/tooltipDescription', "");
                    $scope.cell.prop('rxData/permissions', "");
                    
                    
                    
                };
                
                 $scope.updateObject = function () {
                     
                    var index=$scope.cell.prop($scope.path);
                     
                    $scope.objectarray[index]['ApplicationName']=$scope.cell.prop('rxData/ApplicationName');
                     $scope.objectarray[index]['URL']=$scope.cell.prop('rxData/URL');
                     $scope.objectarray[index]['Description']=$scope.cell.prop('rxData/Description');
                     $scope.objectarray[index]['Icon']=$scope.cell.prop('rxData/Icon');
                     $scope.objectarray[index]['Color']=$scope.cell.prop('rxData/Color');
                     $scope.objectarray[index]['tooltipHeader']=$scope.cell.prop('rxData/tooltipHeader');
                     $scope.objectarray[index]['tooltipDescription']=$scope.cell.prop('rxData/tooltipDescription');
                     $scope.objectarray[index]['permissions']=$scope.cell.prop('rxData/permissions');
                     
                     
                    $scope.cell.prop('rxData/CardList', angular.toJson($scope.objectarray));
                    $scope.cell.prop('rxData/ApplicationName', "");
                    $scope.cell.prop('rxData/URL', "");
                    $scope.cell.prop('rxData/Description', "");
                    $scope.cell.prop('rxData/Icon', "");
                    $scope.cell.prop('rxData/Color', "");
                    $scope.cell.prop('rxData/tooltipHeader', "");
                    $scope.cell.prop('rxData/tooltipDescription', "");
                    $scope.cell.prop('rxData/permissions', "");
                     
                    
                    
                };
                $scope.clearFields = function()
                {
                    $scope.cell.prop('rxData/ApplicationName', "");
                    $scope.cell.prop('rxData/URL', "");
                    $scope.cell.prop('rxData/Description', "");
                     $scope.cell.prop('rxData/Icon', "");
                    $scope.cell.prop('rxData/Color', "");
                    $scope.cell.prop('rxData/tooltipHeader', "");
                    $scope.cell.prop('rxData/tooltipDescription', "");
                    $scope.cell.prop('rxData/permissions', "");
                    
                }

                $scope.$watch('rxData/CardList',initializeObject);
                initializeObject();
            }
          
        };
    });
})();