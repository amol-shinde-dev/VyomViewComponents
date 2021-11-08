(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.ppttoimg')
        .directive('comVyomVyomlibPpttoimg',

            function (rxNotificationMessage, rxRecordInstanceDataPageResource, rxRecordInstanceResource, rxGUID, $window, rxCurrentUser, $sce, rxViewComponentEventManager) {
                return {
                    restrict: 'E',
                    templateUrl: 'scripts/view-components/ppttoimg/com-vyom-vyomlib-ppttoimg.directive.html',

                    scope: {
                        rxConfiguration: '='
                    },

                    link: function ($scope, $element) {
                        var _config,
                            eventManager = rxViewComponentEventManager.getInstance($scope);




                        var init = function () {
                            _config = $scope.rxConfiguration.propertiesByName,

                                $scope.RecordDefinition = _config.recordDefinitionFullName;
                            $scope.pptField = _config.pptField;
                            $scope.RecInstanceId = _config.RecInstanceId;
                            $scope.slideNumber = _config.slideNumber ? _config.slideNumber : 1;


                        };

                        $scope.generateEditor = function () {

                            angular.element(document).ready(function () {

                                $element.find("#slide-resolte-contaniner").pptxToHtml({
                                    pptxFileUrl: "/api/rx/application/record/attachment/" + $scope.RecordDefinition + "/" + $scope.RecInstanceId + "/" + $scope.pptField,
                                    slideMode: true,
                                    slidesScale: "100%",
                                    keyBoardShortCut: true,
                                    mediaProcess: true,
                                    /** true,false: if true tan process video and audio files */
                                    slideModeConfig: { //on slide mode (slideMode: true) 
                                        first: parseInt($scope.slideNumber),
                                        nav: true,
                                        /** true,false : show or not nav buttons*/
                                        navTxtColor: "black",
                                        /** color */
                                        showPlayPauseBtn: true,
                                        /** true,false */
                                        showSlideNum: true,
                                        /** true,false */
                                        showTotalSlideNum: true,
                                        /** true,false */
                                        autoSlide: 2,
                                        /** false or seconds (the pause time between slides) , F8 to active(keyBoardShortCut: true) */
                                        randomAutoSlide: false,
                                        /** true,false ,autoSlide:true */
                                        loop: false,
                                        /** true,false */
                                        background: "black",
                                        /** false or color*/
                                        transition: "slid",
                                        /** transition type: "slid","fade","default","random" , to show transition efects :transitionTime > 0.5 */
                                        transitionTime: 1 /** transition time in seconds */
                                    }
                                });



                            });
                        }

                        $scope.$watch("rxConfiguration.propertiesByName.RecInstanceId", function (obj) {
                            $scope.RecInstanceId = obj;
                            $scope.RecInstanceId ? $scope.generateEditor() : "";
                        });

                        init();


                    }

                };
            });
})();
