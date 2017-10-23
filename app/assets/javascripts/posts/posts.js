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
    o.create = function(post) {
      return $http.post('/posts.json', post).then(
        function(data){
          console.log("User = " + JSON.stringify(data));
          o.posts.push(data.data);
      });
    };

    o.upvote = function(post) {
      return $http.put('/posts/' + post.id + '/upvote.json')
        .then(function(data){
          post.upvotes += 1;
        });
    };

    o.get = function(id) {
      return $http.get('/posts/' + id + '.json').then(function(res){
        return res.data;
      });
    };

    o.addComment = function(id, comment) {
      return $http.post('/posts/' + id + '/comments.json', comment);
    };
  return o;
}]);

