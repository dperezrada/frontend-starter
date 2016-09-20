app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('index', {
            url: '/',
            views: {
              'top' : { templateUrl: 'templates/base/tpl.top.html', controller: 'TopCtrl'},
              'left' : { templateUrl: 'templates/base/tpl.left.html',},
              'main' : { templateUrl: 'templates/base/tpl.main.html',},
            },
          })
        .state('index.stats', {
            url: '/:id',
            views: {
              'main@index' : {
                templateUrl: 'templates/stats.html',
                controller: 'StatsCtrl'
              },
            },
          })
})
.controller('IndexCtrl', function($scope){
})
.controller('TopCtrl', function($scope){
  $scope.domains = ['d1', 'd2'];
})
.controller('ListCtrl', function($scope){
})
.controller('StatsCtrl', function($scope,$stateParams){
  $scope.id = $stateParams.id;
})
