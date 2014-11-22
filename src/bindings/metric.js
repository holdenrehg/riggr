define([
  'knockout',
  'metric'
], function (ko, metric) {

  ko.bindingHandlers.metric = {
    update: function (element, valueAccessor) {
      var event = ko.unwrap(valueAccessor());
      
      if (event) {
        metric.watch(event, element);
      }
    }
  };

});
