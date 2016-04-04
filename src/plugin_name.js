(function($, window, document) {
  'use strict';

  var namespace, defaults;

  // plugin name
  namespace = 'pluginName';

  // defaults for pluginName option
  defaults = {

  };

  function PluginName(parent, options) {
    this.options = $.extend({}, defaults, options);
    this.$parent = $(parent);

    this.initalize();

    // public API
    return {}
  }

  PluginName.prototype.initalize = function() {}

  $.fn[namespace] = function(options) {
    return this.each(function() {
      var instanceOptions;

      if(!$.data(this, namespace)) {
        instanceOptions = $.$.extend({}, options, $(this).data());
        $.data(this, namespace, new PluginName(this, instanceOptions));
      }
    });
  };

  $[namespace] = function() {};

  $[namespace].event = {};

  $.each([
    // event name
  ], function() {
    $[namespace].event[this] = namespace + '_' + this;
  });
}($, window, document));
