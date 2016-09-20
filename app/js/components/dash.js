app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('index', {
          url: '/:token',
          views: {
            'top' : { templateUrl: 'templates/base/tpl.top.html', controller: 'TopCtrl'},
            'left' : { templateUrl: 'templates/base/tpl.left.html', controller: 'LeftCtrl'},
            'main' : { templateUrl: 'templates/base/tpl.main.html',},
          },
          resolve: {
            fenixConfig: function($stateParams, FenixData){
              return new FenixData($stateParams.token);
            },
            current: function($stateParams, fenixConfig){
              return {
                token: $stateParams.token,
                domain: fenixConfig.domains[0],
                product_type: fenixConfig.product_types[fenixConfig.domains[0]][0]
              };
            }
          }
        })
      .state('index.dash', {
          url: '/dash/:domain',
          views: {
            'main@index' : {
              templateUrl: 'templates/dash.html',
              controller: 'DashCtrl'
            },
          },
        })
})
.controller('TopCtrl', function($scope, fenixConfig, current){
  $scope.fenix = fenixConfig;
  $scope.current = current;
  $scope.updateNav = function(direction, target){
    var opt = {}
    if(target === 'domains'){
      opt[direction] = current.domain;
      current.domain = fenixConfig.changeArrayEl(opt, target) || current.domain;
      opt[direction] = current.product_type;
      current.product_type = fenixConfig.product_types[current.domain][0];
    }
    if(target === 'product_types'){
      opt[direction] = current.product_type;
      current.product_type = fenixConfig.changeArrayEl(opt, target, current.domain) || current.product_type;
    }
  }
})
.controller('LeftCtrl', function($scope, fenixConfig, current){
  $scope.fenix = fenixConfig;
  $scope.current = current;
})
.controller('DashCtrl', function($scope, $stateParams, current){
  current.domain = $stateParams.domain;
})
