app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/dash/1');

    $stateProvider
        .state('index', {
            url: '/dash/:token',
            views: {
              'top' : { templateUrl: 'templates/base/tpl.top.html', controller: 'TopCtrl'},
              'left' : { templateUrl: 'templates/base/tpl.left.html', controller: 'LeftCtrl'},
              'main' : { templateUrl: 'templates/base/tpl.main.html',},
            },
            resolve: {
              config: function($stateParams, FenixData){
                return FenixData.getConfig($stateParams.token);
              },
              current: function(){
                return {};
              }
            }
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
.controller('IndexCtrl', function($scope, config){
})
.controller('TopCtrl', function($scope, config, current){
  $scope.config = config;
  $scope.current = current;
})
.controller('LeftCtrl', function($scope, config, current){
  $scope.config = config;
  $scope.current = current;
})
.controller('StatsCtrl', function($scope,$stateParams){
  $scope.id = $stateParams.id;
})
