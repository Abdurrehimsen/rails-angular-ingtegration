angular.module('flapperNews')
.factory('posts', ['$http', function($http){
  var o = {
    posts: []
  };
  o.getAll = function() {
  		return $http.get('/posts.json').then(
  			function(data){
		      	angular.copy(data.data, o.posts);
		    });
  	};
  return o;
}]);

