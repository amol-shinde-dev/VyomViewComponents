(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.chatbot')
        .directive('comVyomVyomlibChatbot',
            function (rxRecordInstanceDataPageResource) {
                return {
                    restrict: 'E',
                    templateUrl: 'scripts/view-components/chatbot/com-vyom-vyomlib-chatbot.directive.html',

                    // rxConfiguration is used to get input parameters:
                    scope: {
                        rxConfiguration: '='
                    },

                    link: function ($scope) {
                        var _param;
                        _param = $scope.rxConfiguration.propertiesByName;


                    }
                };
            });
})();