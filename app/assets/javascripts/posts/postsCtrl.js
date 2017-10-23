angular.module('flapperNews')
.controller('PostsCtrl', ['$scope', '$stateParams', 'posts', 'post',
	function($scope, $stateParams, posts, post){
		$scope.post = post;
		$scope.addComment = function(){
		  posts.addComment(post.id, {
		    body: $scope.body,
		    author: 'user',
		  }).then(function(comment) {
		  	console.log('json : ' + JSON.stringify(comment))
		    $scope.post.comments.push(comment.data.comment);
		  });
		  $scope.body = '';
		};
	}
]);
