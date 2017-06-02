angular.module('2017Apps').run(['$rootScope', '$ionicPlatform', 'AlertService', function ($rootScope, $ionicPlatform, AlertService) {
    $rootScope.storeId = '18';
    //$rootScope.iStoreUrl = 'https://peter.csie.io:8443/apps' + $rootScope.storeId + '/istore';
    $rootScope.iStoreUrl = 'https://0dcd6f17.ngrok.io/apps' + $rootScope.storeId + '/istore';
    $rootScope.storeTopic = 'store' + $rootScope.storeId;
     
    $ionicPlatform.ready(function () {
        FCMPlugin.onNotification(function (data) {
            if (!data.wasTapped) {
                AlertService.alertPopup(data.title, data.body);
            }
        });
    });
}]);