define([
  'knockout',
  'metric'
], function (ko, metric) {

  ko.bindingHandlers.metric = {
    init: function (element, valueAccessor) {
      var options = valueAccessor();

      if (options) {
        metric.watch(options.event, element, {
          tag: options.name
        });
      }
    }
  };

});
