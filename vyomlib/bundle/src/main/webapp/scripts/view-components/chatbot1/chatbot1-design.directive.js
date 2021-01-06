(function () {
  'use strict';
  angular.module('com.vyom.vyomlib.view-components.chatbot1')
    .directive('comVyomVyomlibChatbot1Design', function () {

      return {
        restrict: 'E',
        templateUrl: 'scripts/view-components/chatbot1/com-vyom-vyomlib-chatbot1-design.directive.html',

        scope: {
          rxConfiguration: '='
        }
      };
    });
})();