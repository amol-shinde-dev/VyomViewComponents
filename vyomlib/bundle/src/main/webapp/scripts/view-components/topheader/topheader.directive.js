(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.topheader').directive('comVyomVyomlibTopheader',
        function (rxViewComponentEventManager) {
        
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/topheader/com-vyom-vyomlib-topheader.directive.html',

            scope: {
                rxConfiguration: '='
            },

                 link: function ($scope) {
                var _config;

                var init = function () {
                    _config = $scope.rxConfiguration.propertiesByName;
                   
                     $scope.cfg = {};  
                    
                    $scope.cfg.text=_config.text;
                    $scope.cfg.appname=_config.appname;
                    $scope.cfg.hyperlink=_config.hyperlink;  
					$scope.cfg.toggleicon=_config.toggleicon;  
					$scope.toggleicon=_config.toggleicon;  
					$scope.togglefont=_config.togglefont;
                    $scope.bgcolor=_config.bgcolor;
					
					if(_config.togglefont=== '1')//if(_config.togglefont=== '1')
					{
						$scope.cfg.font="Ericfont";
						
						
						//console.log("_config.togglefont: "+_config.togglefont);
					}else{
						$scope.cfg.font="sans-serif";
						
					}

                };

    

                init();

            }

        };
        });
})();