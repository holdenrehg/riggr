// metric.js
// ---
// Part of the Riggr SPA framework <https://github.com/Fluidbyte/Riggr> and released
// under the MIT license. This notice must remain intact.
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['date'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('date'));
  } else {
    root.metric = factory(root.date);
  }
}(this, function (date) {

  return (function () {

    var MetricEvent = function (event, el, data) {
      this.event = event;
      this.el = el;
      this.data = data;
    };

    var metric = {

      /**
       * Map of currently watched events
       * @type {Object}
       */
      watching: {},

      /**
       * Unique id for watched events
       * @type {Number}
       */
      metricId: 0,

      /**
       * Jquery event namespace
       * @type {String}
       */
      namespace: 'metric',

      /**
       * Environment configurations
       * @type {Object}
       */
      config: undefined,

      /**
       * Watch an event on a dom node
       * @param {String} event - name of the event to watch
       * @param {String} el - dom query selector
       * @return {Number} the watcher id
       */
      watch: function (event, el, data) {
        data = data || {};

        $(el).on([event, metric.metricId, metric.namespace].join('.'), {
          metricId: metric.metricId
        }, metric.onEvent);

        metric.watching[metric.metricId] = new MetricEvent(event, el, data);

        return metric.metricId++;
      },

      /**
       * Stop watching a specific event
       * @param {Number} id - event id to stop watching
       */
      unwatch: function (id) {
        if (metric.watching[id]) {
          var unwatch = metric.watching[id];
          var event = [unwatch.event, id, metric.namespace].join('.');
          $(unwatch.el).off(event);
        }
      },

      /**
       * Push a new metric out to the server
       * @param {MetricEvent} metricEvent
       */
      publish: function (metricEvent) {
        console.log(metricEvent);
      },

      /**
       * Event handler for all watched events
       */
      onEvent: function (e) {
        e.stopPropagation();
        if (metric.watching[e.data.metricId]) {
          var metricEvent = metric.watching[e.data.metricId];
          $.extend(metricEvent.data, {
            domE: e
          });
          metric.publish(metricEvent);
        }
      },

      view: {

        /**
         * The current view being displayed
         */
        current: undefined,

        /**
         * Load a new view to start watching
         * @param {Object} controller - the controller object of the view
         */
        load: function (controller) {
          metric.view.current = {
            controller: controller,
            start: new Date()
          };
        },

        /**
         * Unload the current view being watched
         */
        unload: function () {
          var view = metric.view.current,
            stop = new Date(),
            secondsWatched = ((stop - view.start) / 1000.0);

          metric.publish(new MetricEvent('unload', undefined, {
            path: view.controller.path ? view.controller.path() : undefined,
            pageTitle: view.controller.pageTitle || undefined,
            secondsWatched: secondsWatched,
            start: view.start,
            stop: stop
          }));
        }

      }

    };

    return metric;
  })();

}));
