﻿angular.module('2017Apps').service('UserService', ['$rootScope', '$http', function ($rootScope, $http) {
    var self = this;

    self.login = function (user, onSuccess) {
        $http.post('https://ilab.csie.io/apps09/istore/user/login', user).
          success(function (data, status, headers, config) {
              (onSuccess || angular.noop)(data);
          }).error(function (data, status, headers, config) {
              alert("Error - Data:" + data + " status:" + status);
          });
    };

    self.register = function (user, onSuccess) {
        $http.post('https://ilab.csie.io/apps09/istore/user', user).
          success(function (data, status, headers, config) {
              (onSuccess || angular.noop)(data);
          }).error(function (data, status, headers, config) {
              alert("Error - Data:" + data + " status:" + status);
          });
    };
}]);