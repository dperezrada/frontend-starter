app.service('FenixData', function ($http, FenixConfig) {
  this.getConfig = function(token){
    console.log(FenixConfig.url);
    return {'domains': ['d1', 'd2']};
  }
});
