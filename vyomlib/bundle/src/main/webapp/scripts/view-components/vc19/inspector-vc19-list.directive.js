// This directive is used at design time to choose a field.
(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.vc19').directive('comVyomVyomlibInspectorVc19List', function (RX_RECORD_DEFINITION, $timeout) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/vc19/com-vyom-vyomlib-inspector-vc19-list.directive.html',

            link: function ($scope) {
                
                   $scope.data = {
                    fields: [],
                    selectedField: null
                };
             
                
                $scope.arr=[];
                
         

                function initColor() {
                   
                    if($scope.cell.prop($scope.path)!= undefined || $scope.cell.prop($scope.path)!= null || $scope.cell.prop($scope.path) != "")
                        {
                    var temp = $scope.cell.prop($scope.path);         
                    $scope.arr=angular.fromJson(temp);
                   
                            
                            
                        }else{
                            
                            $scope.arr=[];
                        }
                    
                }
                
                $scope.remove=function(item)
                {
                   
                    $scope.arr.splice(item, 1);
                    $scope.saveColor();
                    
                    
                   
                    
                }
                
              

                // Saving the parameter
                $scope.saveColor = function () {
                    $scope.cell.prop($scope.path, angular.toJson($scope.arr));
                };

                $scope.$watch('arr', $scope.saveColor)
                initColor();
            }
          
        };
    });
})();