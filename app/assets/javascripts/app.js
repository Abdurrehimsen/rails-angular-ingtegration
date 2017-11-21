angular.module('flapperNews', ['ui.router', 'templates'])

.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

  $stateProvider
    .state('/', {
      url: '/',
      templateUrl: 'login/_login.html',
      controller: 'LoginCtrl',
    })
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl',
      resolve: {
        postPromise: ['posts', function(posts){
          return posts.getAll();
        }]
      }
    })

    .state('posts', {
	  url: '/posts/{id}',
	  templateUrl: 'posts/_posts.html',
	  controller: 'PostsCtrl',
    resolve: {
      post: ['$stateParams', 'posts', function($stateParams, posts) {
        return posts.get($stateParams.id);
      }]
    }
	});

 
}]);



