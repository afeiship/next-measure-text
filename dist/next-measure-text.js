/*!
 * name: next-measure-text
 * url: https://github.com/afeiship/next-measure-text
 * version: 1.0.0
 * date: 2019-09-16T04:02:53.598Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var DEFAULT_OPTIONS = { callback: nx.noop, x: 0, y: 0, text: '' };

  nx.measureText = function(inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var ctx = options.canvas.getContext('2d');
    options.callback.call(null, ctx);
    return ctx.measureText(options.text);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.measureText;
  }
})();

//# sourceMappingURL=next-measure-text.js.map
