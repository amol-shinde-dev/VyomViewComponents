angular.module('com.vyom.vyomlib.view-components.marquee3')
.directive('comVyomVyomlibMyRepeatDirective', function($timeout,rxString,$document,rxNotificationMessage,$sce) {
  return function(scope, element, attrs) {
    angular.element(element).css('color','blue');
	//window.alert("");
    if (scope.$last){
      //window.alert("im the last!");
	   $timeout(function () {
			//scope.$emit(attr.onFinishRender);
			$('.simple-marquee-container').SimpleMarquee();
		});
    }
  };
});