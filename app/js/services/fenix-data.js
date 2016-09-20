app.factory('FenixData', function ($http, FenixConfig) {
  var FenixData = function(token) {
    var self = this;

    this.initialize = function() {
      self.token = token;
      self.domains = ['d1', 'd2', 'd3'];
      self.product_types = {
        'd1': ['singles1', 'catalog1'],
        'd2': ['singles2', 'catalog2'],
        'd3': ['singles3', 'catalog3']
      };
    };

    this.changeArrayEl = function(opt, target, subtarget){
      if(!opt){
        return null;
      }
      var targetEl = self[target];
      if(subtarget){
        targetEl = targetEl[subtarget];
      }
      if(opt.current){
        var currentIndex = targetEl.indexOf(newDomain);
        if( currentIndex >= 0){
          return targetEl[currentIndex];
        }
        return null;
      }
      if(opt.next){
        var currentIndex = targetEl.indexOf(opt.next);
        if(currentIndex >= 0){
          if( currentIndex < targetEl.length - 1){
            return targetEl[currentIndex+1];
          }
          return targetEl[0];
        }
        return null;
      }
      if(opt.prev){
        var currentIndex = targetEl.indexOf(opt.prev);
        if(currentIndex >= 0){
          if( currentIndex > 0){
            return targetEl[currentIndex-1];
          }
          return targetEl[self[target].length - 1];
        }
        return null;
      }
    };
    self.initialize();
  };
  return (FenixData);
});
