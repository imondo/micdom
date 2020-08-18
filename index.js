!(function(window) {

  function MicDom(selector) {
    return new MicDom.fn.init(selector)
  }

  MicDom.fn = MicDom.prototype = {
    constructor: MicDom,
    init: function(selector) {
      var elements = document.querySelectorAll(selector)
      for (var i = 0, len = elements.length; i < len; i++) {
        this[i] = elements[i];
      }
      this.length = elements.length
    },
    css: function(arg, value) {
      for (var i = 0, len = this.length; i < len; i++) {
        var el = this[i];
        if (typeof arg === 'object') {
          Object.getOwnPropertyNames(arg).forEach(function(k) {
            el.style[k] = arg[k];
          })
        }
  
        if (typeof arg === 'string' && value) {
          el.style[arg] = value;
        }
      }
      return this
    },
    attr: function(name, value) {

      for (var i = 0, len = this.length; i < len; i++) {
        var el = this[i];
        if (name && value) {
          el.setAttribute(name, value)
        } else {
          return el.getAttribute(name)
        }
      }

    },
    parent: function(elem) {
      for (var i = 0, len = this.length; i < len; i++) {
        var el = this[i];
        var parentNode = el.parentNode
        return parentNode
      }
    },
    dom: function() {
      for (var i = 0, len = this.length; i < len; i++) {
        var el = this[i];
        return el.getBoundingClientRect() // 返回 DOM 元素的位置
      }
    }
  }

  MicDom.fn.init.prototype = MicDom.prototype

  if (typeof module === "object" && module && typeof module.exports === "object") {
    module.exports = MicDom;
  } else {
    window.MicDom = window.$m = MicDom;
  }
})(window)