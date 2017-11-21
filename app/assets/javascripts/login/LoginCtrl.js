angular
  .module('flapperNews')
  .controller('LoginCtrl', ['$scope', 'posts', '$location',

  function($scope, posts, $location){

    $scope.init = function () {
      console.log('init function')
      if(window.localStorage.user != ""){
        $location.path('/home');
      }
    };
    
    $scope.addPost = function(){
      //if(!$scope.title || $scope.title === '') { return; }
      
      posts.login($scope.username, $scope.password);      
      $scope.title = '';
      $scope.link = '';
    };
  }
]);
