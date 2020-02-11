angular.module('HotelError',[]).component('errorCtrl' , {
    restrict:'E',
    templateUrl:'error-modal/error.component.html',
    bindings : {
        room :'@?'
    },
    controller : function ($scope , $rootScope , dataService, $attrs) {
        // $("#OneAtATimeModal").click();
        $rootScope.$watch('errorRoomNumber' , function(newVal, oldVal){
            if( newVal != oldVal) {
                $scope.roomNumber = $rootScope.errorRoomNumber;
            }
        }, true);
       
        console.log('error modal is triggered' , $attrs.roomNumber);
    }

});