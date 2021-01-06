(function () {
  'use strict';
  angular.module('com.vyom.vyomlib.view-components.chatbot1')
    .directive('comVyomVyomlibChatbot1',
      function (rxRecordInstanceDataPageResource) {
        return {
          restrict: 'E',
          templateUrl: 'scripts/view-components/chatbot1/com-vyom-vyomlib-chatbot1.directive.html',

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