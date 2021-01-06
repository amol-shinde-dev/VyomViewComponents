(function () {
  'use strict';

  angular.module('com.vyom.vyomlib.view-components.chatbot1')
    .config(function (rxViewComponentProvider) {
      var starRatingDescriptor = {
        name: 'Chatbot1',
        group: 'vyomlib',
        icon: 'at',
        type: 'com-vyom-vyomlib-chatbot1',  // the name of runtime directive
        designType: 'com-vyom-vyomlib-chatbot1-design', // register design directive
        bundleId: 'com.vyom.vyomlib',

        // define component properties
        propertiesByName: [

        ]
      };

      rxViewComponentProvider.registerComponent(starRatingDescriptor);
    });
})();