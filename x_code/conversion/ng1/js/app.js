angular.module('myApp', ['ui.router'])
.service('PinsService', function($http, $q) {
  this._pins = null;

  this.pins = function() {
    var self = this;
    if(self._pins == null) { 
      // initialize with sample data
      return $http.get("/js/data/sample-data.json").then(
        function(response) {
          self._pins = response.data;
          return self._pins;
        })
    } else {
      return $q.when(self._pins);
    }
  }

  this.addPin = function(newPin) {
    // adding would normally be an API request so lets mock async
    return $q.when(
      this._pins.unshift(newPin)
    );
  }
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      templateUrl: '/templates/home.html',
      controller: 'HomeController',
      url: '/',
      resolve: {
        'pins': function(PinsService) {
          return PinsService.pins();
        }
      }
    })
    .state('add', {
      templateUrl: '/templates/add.html',
      controller: 'AddController',
      url: '/add',
      resolve: {
        'pins': function(PinsService) {
          return PinsService.pins();
        }
      }
    })
 
    $urlRouterProvider.when('', '/') ;
})
.filter('truncate', function() {
  return function(input, amt) {
    if(input.length > amt) {
      return input.substring(0, amt);
    } else {
      return input;
    }
  }
})
.controller('HomeController', function($scope, pins) {
  $scope.pins = pins;
})
.controller('AddController', function($scope, $state, PinsService, $timeout) {
  $scope.saving = false;

  var makeNewPin = function() {
    return {
      "title": "Steampunk Cat",
      "description": "A cat wearing goggles",
      "user_name": "me",
      "avatar_src": "images/avatars/me.jpg",
      "src": "/images/pins/cat.jpg",
      "url": "http://cats.com",
      "faved": false,
      "id": Math.floor(Math.random() * 10000).toString()
    }
  }

  $scope.newPin = makeNewPin();

  $scope.submitPin = function() {
    $scope.saving = true;
    $timeout(function() {
      PinsService.addPin($scope.newPin).then(function() {
        $scope.newPin = makeNewPin();
        $scope.saving = false;
        $state.go('home');
      });
    }, 2000);
  }
})
.directive('pin', function() {
  return {
    restrict: 'E',
    templateUrl: '/templates/pin.html',
    scope: {
      'pin': "=item"
    },
    link: function(scope, elem, attrs) {
      scope.toggleFav = function() {
        scope.pin.faved = !scope.pin.faved;
      }
    }
  }
})


//  
