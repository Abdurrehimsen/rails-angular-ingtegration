angular.module('flapperNews')
.factory('posts', ['$http', '$location', function($http, $location){
  var o = {
    posts: []
  };

  o.login = function(email, password) {
    var Indata = {"email":email, "password": password}
    return $http.post('http://localhost:3000/session_ctrl/authenticate', Indata).then(
        function(data){
          if (data.data.status == "success") {
            window.localStorage.user = data.data.user;
            console.log(window.localStorage.user);
            $location.path('/home');
            angular.copy(data.data, o.posts);
          }
            
        });
  }

  o.getAll = function() {
  		return $http.get('http://localhost:3000/posts.json').then(
  			function(data){
		      	angular.copy(data.data, o.posts);
		    });
  	};
    o.create = function(post) {
      return $http.post('http://localhost:3000/posts.json', post).then(
        function(data){
          console.log("User = " + JSON.stringify(data));
          o.posts.push(data.data);
      });
    };

    o.upvote = function(post) {
      return $http.put('http://localhost:3000/posts/' + post.id + '/upvote.json')
        .then(function(data){
          post.upvotes += 1;
        });
    };

    o.get = function(id) {
      return $http.get('http://localhost:3000/posts/' + id + '.json').then(function(res){
        return res.data;
      });
    };

    o.addComment = function(id, comment) {
      return $http.post('/posts/' + id + 'https://localhost:3000/comments.json', comment);
    };
  return o;
}]);

