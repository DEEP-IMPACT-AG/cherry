(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = global || self, factory(global.CherryDesignSystem = {}, global.React));
}(this, function (exports, React) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var defineProperty = _defineProperty;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass;

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
  });

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var assertThisInitialized = _assertThisInitialized;

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
      return call;
    }

    return assertThisInitialized(self);
  }

  var possibleConstructorReturn = _possibleConstructorReturn;

  var getPrototypeOf = createCommonjsModule(function (module) {
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  module.exports = _getPrototypeOf;
  });

  var setPrototypeOf = createCommonjsModule(function (module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  module.exports = _setPrototypeOf;
  });

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }

  var inherits = _inherits;

  var classnames = createCommonjsModule(function (module) {
  /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  /* global define */

  (function () {

  	var hasOwn = {}.hasOwnProperty;

  	function classNames () {
  		var classes = [];

  		for (var i = 0; i < arguments.length; i++) {
  			var arg = arguments[i];
  			if (!arg) continue;

  			var argType = typeof arg;

  			if (argType === 'string' || argType === 'number') {
  				classes.push(arg);
  			} else if (Array.isArray(arg) && arg.length) {
  				var inner = classNames.apply(null, arg);
  				if (inner) {
  					classes.push(inner);
  				}
  			} else if (argType === 'object') {
  				for (var key in arg) {
  					if (hasOwn.call(arg, key) && arg[key]) {
  						classes.push(key);
  					}
  				}
  			}
  		}

  		return classes.join(' ');
  	}

  	if (module.exports) {
  		classNames.default = classNames;
  		module.exports = classNames;
  	} else {
  		window.classNames = classNames;
  	}
  }());
  });

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = ":root{--max-width:1440px;--padding-top-body-mobile:70px;--padding-top-body-desktop:0;--margin-container-mobile:20px;--margin-container-desktop:20px;--margin-container-child-mobile:10px;--margin-container-child-desktop:10px;--margin-row-mobile:-10px;--margin-row-desktop:-10px;--gutter-col-mobile:10px;--gutter-col-desktop:10px;--color-primary:#1f2d3d;--color-secondary:#8492a6;--color-tertiary:#f9fafc;--color-dark:#000;--color-light:#fff;--color-gray-light:#e5e5e5;--color-gray-medium:#666;--color-gray-dark:#4a4a4a;--color-success:#28a745;--color-error:#dc3545;--color-warning:#ffc107;--color-info:#17a2b8;--font-text:\"Roboto\",sans-serif;--font-head:var(--font-text);--font-special:var(--font-text);--font-mono:\"Roboto Mono\",monospace;--size-hero1-mobile:52px;--lineheight-hero1-mobile:1.35;--size-hero1-desktop:62px;--lineheight-hero1-desktop:1.15;--size-hero2-mobile:42px;--lineheight-hero2-mobile:1.35;--size-hero2-desktop:52px;--lineheight-hero2-desktop:1.15;--size-hero3-mobile:32px;--lineheight-hero3-mobile:1.35;--size-hero3-desktop:42px;--lineheight-hero3-desktop:1.15;--size-eyebrow-mobile:16px;--lineheight-eyebrow-mobile:1.35;--size-eyebrow-desktop:18px;--lineheight-eyebrow-desktop:1.15;--size-h1-mobile:38px;--lineheight-h1-mobile:1.35;--size-h1-desktop:40px;--lineheight-h1-desktop:1.15;--size-h2-mobile:28px;--lineheight-h2-mobile:1.35;--size-h2-desktop:32px;--lineheight-h2-desktop:1.15;--size-h3-mobile:24px;--lineheight-h3-mobile:1.35;--size-h3-desktop:28px;--lineheight-h3-desktop:1.15;--size-h4-mobile:22px;--lineheight-h4-mobile:1.35;--size-h4-desktop:24px;--lineheight-h4-desktop:1.15;--size-h5-mobile:18px;--lineheight-h5-mobile:1.35;--size-h5-desktop:20px;--lineheight-h5-desktop:1.15;--size-h6-mobile:14px;--lineheight-h6-mobile:1.35;--size-h6-desktop:16px;--lineheight-h6-desktop:1.15;--size-subtitle-mobile:18px;--lineheight-subtitle-mobile:1.35;--size-subtitle-desktop:20px;--lineheight-subtitle-desktop:1.15;--size-lead-mobile:16px;--lineheight-lead-mobile:1.5;--size-lead-desktop:18px;--lineheight-lead-desktop:1.75;--size-text-mobile:16px;--lineheight-text-mobile:1.5;--size-text-desktop:18px;--lineheight-text-desktop:1.7;--size-small-mobile:12px;--lineheight-small-mobile:1.7;--size-small-desktop:14px;--lineheight-small-desktop:1.7;--size-blockquote-mobile:var(--size-h3-mobile);--size-blockquote-desktop:var(--size-h3-desktop);--size-list-mobile:var(--size-text-mobile);--size-list-desktop:var(--size-text-desktop)}.Container_container__2EpCb{margin:auto;max-width:1440px;max-width:1440px;max-width:var(--max-width);padding-right:20px;padding-right:20px;padding-right:var(--margin-container-mobile);padding-left:20px;padding-left:20px;padding-left:var(--margin-container-mobile)}@media (min-width:992px){.Container_container__2EpCb{padding-right:20px;padding-right:20px;padding-right:var(--margin-container-desktop);padding-left:20px;padding-left:20px;padding-left:var(--margin-container-desktop)}}@media (min-width:1920px){.Container_container__2EpCb{max-width:1704px}}.Container_containerFluid__OhNAC{width:100%;max-width:none;padding-right:20px;padding-right:20px;padding-right:var(--margin-container-mobile);padding-left:20px;padding-left:20px;padding-left:var(--margin-container-mobile);margin-right:auto;margin-left:auto}@media (min-width:992px){.Container_containerFluid__OhNAC{padding-right:20px;padding-right:20px;padding-right:var(--margin-container-desktop);padding-left:20px;padding-left:20px;padding-left:var(--margin-container-desktop)}}.Container_containerChild___hMEW{padding-right:10px;padding-right:10px;padding-right:var(--margin-container-child-mobile);padding-left:10px;padding-left:10px;padding-left:var(--margin-container-child-mobile)}@media (min-width:992px){.Container_containerChild___hMEW{padding-right:10px;padding-right:10px;padding-right:var(--margin-container-child-desktop);padding-left:10px;padding-left:10px;padding-left:var(--margin-container-child-desktop)}}";
  var styles = {"container":"Container_container__2EpCb","containerFluid":"Container_containerFluid__OhNAC","containerChild":"Container_containerChild___hMEW"};
  styleInject(css);

  (function () {
    var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
    enterModule && enterModule(module);
  })();

  var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
    return a;
  };
  var Container =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(Container, _React$Component);

    function Container() {
      classCallCheck(this, Container);

      return possibleConstructorReturn(this, getPrototypeOf(Container).apply(this, arguments));
    }

    createClass(Container, [{
      key: "render",
      value: function render() {
        var _classNames;

        var _this$props = this.props,
            className = _this$props.className,
            children = _this$props.children,
            _this$props$fluid = _this$props.fluid,
            fluid = _this$props$fluid === void 0 ? false : _this$props$fluid,
            _this$props$child = _this$props.child,
            child = _this$props$child === void 0 ? false : _this$props$child;
        return React__default.createElement("div", {
          className: classnames(styles.container, (_classNames = {}, defineProperty(_classNames, styles.containerFluid, fluid), defineProperty(_classNames, styles.containerChild, child), _classNames), className)
        }, children);
      }
    }, {
      key: "__reactstandin__regenerateByEval",
      // @ts-ignore
      value: function __reactstandin__regenerateByEval(key, code) {
        // @ts-ignore
        this[key] = eval(code);
      }
    }]);

    return Container;
  }(React__default.Component);
  var _default = Container;

  (function () {
    var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

    if (!reactHotLoader) {
      return;
    }

    reactHotLoader.register(Container, "Container", "/Users/luangjokaj/dev/cherry/src/Components/Layout/Content/Container/Container.js");
    reactHotLoader.register(_default, "default", "/Users/luangjokaj/dev/cherry/src/Components/Layout/Content/Container/Container.js");
  })();

  (function () {
    var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
    leaveModule && leaveModule(module);
  })();

  var css$1 = ":root{--max-width:1440px;--padding-top-body-mobile:70px;--padding-top-body-desktop:0;--margin-container-mobile:20px;--margin-container-desktop:20px;--margin-container-child-mobile:10px;--margin-container-child-desktop:10px;--margin-row-mobile:-10px;--margin-row-desktop:-10px;--gutter-col-mobile:10px;--gutter-col-desktop:10px;--color-primary:#1f2d3d;--color-secondary:#8492a6;--color-tertiary:#f9fafc;--color-dark:#000;--color-light:#fff;--color-gray-light:#e5e5e5;--color-gray-medium:#666;--color-gray-dark:#4a4a4a;--color-success:#28a745;--color-error:#dc3545;--color-warning:#ffc107;--color-info:#17a2b8;--font-text:\"Roboto\",sans-serif;--font-head:var(--font-text);--font-special:var(--font-text);--font-mono:\"Roboto Mono\",monospace;--size-hero1-mobile:52px;--lineheight-hero1-mobile:1.35;--size-hero1-desktop:62px;--lineheight-hero1-desktop:1.15;--size-hero2-mobile:42px;--lineheight-hero2-mobile:1.35;--size-hero2-desktop:52px;--lineheight-hero2-desktop:1.15;--size-hero3-mobile:32px;--lineheight-hero3-mobile:1.35;--size-hero3-desktop:42px;--lineheight-hero3-desktop:1.15;--size-eyebrow-mobile:16px;--lineheight-eyebrow-mobile:1.35;--size-eyebrow-desktop:18px;--lineheight-eyebrow-desktop:1.15;--size-h1-mobile:38px;--lineheight-h1-mobile:1.35;--size-h1-desktop:40px;--lineheight-h1-desktop:1.15;--size-h2-mobile:28px;--lineheight-h2-mobile:1.35;--size-h2-desktop:32px;--lineheight-h2-desktop:1.15;--size-h3-mobile:24px;--lineheight-h3-mobile:1.35;--size-h3-desktop:28px;--lineheight-h3-desktop:1.15;--size-h4-mobile:22px;--lineheight-h4-mobile:1.35;--size-h4-desktop:24px;--lineheight-h4-desktop:1.15;--size-h5-mobile:18px;--lineheight-h5-mobile:1.35;--size-h5-desktop:20px;--lineheight-h5-desktop:1.15;--size-h6-mobile:14px;--lineheight-h6-mobile:1.35;--size-h6-desktop:16px;--lineheight-h6-desktop:1.15;--size-subtitle-mobile:18px;--lineheight-subtitle-mobile:1.35;--size-subtitle-desktop:20px;--lineheight-subtitle-desktop:1.15;--size-lead-mobile:16px;--lineheight-lead-mobile:1.5;--size-lead-desktop:18px;--lineheight-lead-desktop:1.75;--size-text-mobile:16px;--lineheight-text-mobile:1.5;--size-text-desktop:18px;--lineheight-text-desktop:1.7;--size-small-mobile:12px;--lineheight-small-mobile:1.7;--size-small-desktop:14px;--lineheight-small-desktop:1.7;--size-blockquote-mobile:var(--size-h3-mobile);--size-blockquote-desktop:var(--size-h3-desktop);--size-list-mobile:var(--size-text-mobile);--size-list-desktop:var(--size-text-desktop)}.Row_row__ESzl0{display:flex;flex-wrap:wrap;justify-content:space-between;margin:0 -10px;margin:0 -10px;margin:0 var(--margin-row-mobile)}@media (min-width:992px){.Row_row__ESzl0{margin:0 -10px;margin:0 -10px;margin:0 var(--margin-row-desktop)}}.Row_justifyContent-flex-start__HlKgv{justify-content:flex-start}.Row_justifyContent-flex-end__2OO_8{justify-content:flex-end}.Row_justifyContent-center__2fjeB{justify-content:center}.Row_justifyContent-space-between__3_XnL{justify-content:space-between}.Row_justifyContent-space-around__1a3GE{justify-content:space-around}.Row_justifyContent-initial__2VQqv{justify-content:normal}.Row_alignItems-stretch__moQBh{align-items:stretch}.Row_alignItems-center__1tyqR{align-items:center}.Row_alignItems-flex-start__X5tl2{align-items:flex-start}.Row_alignItems-flex-end__2Luvo{align-items:flex-end}.Row_alignItems-baseline__DdKcy{align-items:baseline}.Row_alignItems-initial__31qIY{align-items:normal}";
  var styles$1 = {"row":"Row_row__ESzl0","justifyContent-flex-start":"Row_justifyContent-flex-start__HlKgv","justifyContent-flex-end":"Row_justifyContent-flex-end__2OO_8","justifyContent-center":"Row_justifyContent-center__2fjeB","justifyContent-space-between":"Row_justifyContent-space-between__3_XnL","justifyContent-space-around":"Row_justifyContent-space-around__1a3GE","justifyContent-initial":"Row_justifyContent-initial__2VQqv","alignItems-stretch":"Row_alignItems-stretch__moQBh","alignItems-center":"Row_alignItems-center__1tyqR","alignItems-flex-start":"Row_alignItems-flex-start__X5tl2","alignItems-flex-end":"Row_alignItems-flex-end__2Luvo","alignItems-baseline":"Row_alignItems-baseline__DdKcy","alignItems-initial":"Row_alignItems-initial__31qIY"};
  styleInject(css$1);

  (function () {
    var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
    enterModule && enterModule(module);
  })();

  var __signature__$1 = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
    return a;
  };
  var Row =
  /*#__PURE__*/
  function (_Component) {
    inherits(Row, _Component);

    function Row() {
      classCallCheck(this, Row);

      return possibleConstructorReturn(this, getPrototypeOf(Row).apply(this, arguments));
    }

    createClass(Row, [{
      key: "render",
      value: function render() {
        var _classNames;

        var _this$props = this.props,
            className = _this$props.className,
            children = _this$props.children,
            alignItems = _this$props.alignItems,
            justifyContent = _this$props.justifyContent;
        return React__default.createElement("div", {
          className: classnames(styles$1.row, (_classNames = {}, defineProperty(_classNames, styles$1["alignItems-".concat(alignItems)], alignItems), defineProperty(_classNames, styles$1["justifyContent-".concat(justifyContent)], justifyContent), _classNames), className)
        }, children);
      }
    }, {
      key: "__reactstandin__regenerateByEval",
      // @ts-ignore
      value: function __reactstandin__regenerateByEval(key, code) {
        // @ts-ignore
        this[key] = eval(code);
      }
    }]);

    return Row;
  }(React.Component);
  var _default$1 = Row;

  (function () {
    var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

    if (!reactHotLoader) {
      return;
    }

    reactHotLoader.register(Row, "Row", "/Users/luangjokaj/dev/cherry/src/Components/Layout/Content/Row/Row.js");
    reactHotLoader.register(_default$1, "default", "/Users/luangjokaj/dev/cherry/src/Components/Layout/Content/Row/Row.js");
  })();

  (function () {
    var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
    leaveModule && leaveModule(module);
  })();

  var css$2 = ":root{--max-width:1440px;--padding-top-body-mobile:70px;--padding-top-body-desktop:0;--margin-container-mobile:20px;--margin-container-desktop:20px;--margin-container-child-mobile:10px;--margin-container-child-desktop:10px;--margin-row-mobile:-10px;--margin-row-desktop:-10px;--gutter-col-mobile:10px;--gutter-col-desktop:10px;--color-primary:#1f2d3d;--color-secondary:#8492a6;--color-tertiary:#f9fafc;--color-dark:#000;--color-light:#fff;--color-gray-light:#e5e5e5;--color-gray-medium:#666;--color-gray-dark:#4a4a4a;--color-success:#28a745;--color-error:#dc3545;--color-warning:#ffc107;--color-info:#17a2b8;--font-text:\"Roboto\",sans-serif;--font-head:var(--font-text);--font-special:var(--font-text);--font-mono:\"Roboto Mono\",monospace;--size-hero1-mobile:52px;--lineheight-hero1-mobile:1.35;--size-hero1-desktop:62px;--lineheight-hero1-desktop:1.15;--size-hero2-mobile:42px;--lineheight-hero2-mobile:1.35;--size-hero2-desktop:52px;--lineheight-hero2-desktop:1.15;--size-hero3-mobile:32px;--lineheight-hero3-mobile:1.35;--size-hero3-desktop:42px;--lineheight-hero3-desktop:1.15;--size-eyebrow-mobile:16px;--lineheight-eyebrow-mobile:1.35;--size-eyebrow-desktop:18px;--lineheight-eyebrow-desktop:1.15;--size-h1-mobile:38px;--lineheight-h1-mobile:1.35;--size-h1-desktop:40px;--lineheight-h1-desktop:1.15;--size-h2-mobile:28px;--lineheight-h2-mobile:1.35;--size-h2-desktop:32px;--lineheight-h2-desktop:1.15;--size-h3-mobile:24px;--lineheight-h3-mobile:1.35;--size-h3-desktop:28px;--lineheight-h3-desktop:1.15;--size-h4-mobile:22px;--lineheight-h4-mobile:1.35;--size-h4-desktop:24px;--lineheight-h4-desktop:1.15;--size-h5-mobile:18px;--lineheight-h5-mobile:1.35;--size-h5-desktop:20px;--lineheight-h5-desktop:1.15;--size-h6-mobile:14px;--lineheight-h6-mobile:1.35;--size-h6-desktop:16px;--lineheight-h6-desktop:1.15;--size-subtitle-mobile:18px;--lineheight-subtitle-mobile:1.35;--size-subtitle-desktop:20px;--lineheight-subtitle-desktop:1.15;--size-lead-mobile:16px;--lineheight-lead-mobile:1.5;--size-lead-desktop:18px;--lineheight-lead-desktop:1.75;--size-text-mobile:16px;--lineheight-text-mobile:1.5;--size-text-desktop:18px;--lineheight-text-desktop:1.7;--size-small-mobile:12px;--lineheight-small-mobile:1.7;--size-small-desktop:14px;--lineheight-small-desktop:1.7;--size-blockquote-mobile:var(--size-h3-mobile);--size-blockquote-desktop:var(--size-h3-desktop);--size-list-mobile:var(--size-text-mobile);--size-list-desktop:var(--size-text-desktop)}.Col_textAlign-left__8zrrN{text-align:left}.Col_textAlign-center__1qBKP{text-align:center}.Col_textAlign-right__2WC5X{text-align:right}.Col_col__nE0P9{position:relative;width:100%;min-height:1px;padding-right:10px;padding-right:10px;padding-right:var(--gutter-col-mobile);padding-left:10px;padding-left:10px;padding-left:var(--gutter-col-mobile);flex-basis:0;flex-grow:1;max-width:100%;box-sizing:border-box}@media (min-width:992px){.Col_col__nE0P9{padding-right:10px;padding-right:10px;padding-right:var(--gutter-col-desktop);padding-left:10px;padding-left:10px;padding-left:var(--gutter-col-desktop)}}.Col_colAuto__1k5bN{flex:0 0 auto;width:auto;max-width:none}.Col_col1__GlJQX{flex:0 0 8.333333%;max-width:8.333333%}.Col_col2__3Wq7S{flex:0 0 16.666667%;max-width:16.666667%}.Col_col3__Xkbxf{flex:0 0 25%;max-width:25%}.Col_col4__Vp5TY{flex:0 0 33.333333%;max-width:33.333333%}.Col_col5__24H4y{flex:0 0 41.666667%;max-width:41.666667%}.Col_col6__2NzM3{flex:0 0 50%;max-width:50%}.Col_col7__1NF41{flex:0 0 58.333333%;max-width:58.333333%}.Col_col8__13X-2{flex:0 0 66.666667%;max-width:66.666667%}.Col_col9__2rWwK{flex:0 0 75%;max-width:75%}.Col_col10__17Cx7{flex:0 0 83.333333%;max-width:83.333333%}.Col_col11__2sJPx{flex:0 0 91.666667%;max-width:91.666667%}.Col_col12__3HXvM{flex:0 0 100%;max-width:100%}.Col_orderFirst__5Sg4t{order:-1}.Col_orderLast__2dEtE{order:13}@media (min-width:576px){.Col_colSm__1VNqW{position:relative;width:100%;min-height:1px;padding-right:10px;padding-right:10px;padding-right:var(--gutter-col-mobile);padding-left:10px;padding-left:10px;padding-left:var(--gutter-col-mobile);flex-basis:0;flex-grow:1;max-width:100%;box-sizing:border-box}}@media (min-width:576px) and (min-width:992px){.Col_colSm__1VNqW{padding-right:10px;padding-right:10px;padding-right:var(--gutter-col-desktop);padding-left:10px;padding-left:10px;padding-left:var(--gutter-col-desktop)}}@media (min-width:576px){.Col_colSmAuto__1mrFP{flex:0 0 auto;width:auto;max-width:none}.Col_colSm1__1k4aG{flex:0 0 8.333333%;max-width:8.333333%}.Col_colSm2__19dFW{flex:0 0 16.666667%;max-width:16.666667%}.Col_colSm3__3Y9Fs{flex:0 0 25%;max-width:25%}.Col_colSm4__2UQ70{flex:0 0 33.333333%;max-width:33.333333%}.Col_colSm5__22OXF{flex:0 0 41.666667%;max-width:41.666667%}.Col_colSm6__3CIu5{flex:0 0 50%;max-width:50%}.Col_colSm7__2PakL{flex:0 0 58.333333%;max-width:58.333333%}.Col_colSm8__eqUwL{flex:0 0 66.666667%;max-width:66.666667%}.Col_colSm9__2QMGr{flex:0 0 75%;max-width:75%}.Col_colSm10__14QV9{flex:0 0 83.333333%;max-width:83.333333%}.Col_colSm11__RlA-l{flex:0 0 91.666667%;max-width:91.666667%}.Col_colSm12__1lU-W{flex:0 0 100%;max-width:100%}.Col_orderSmFirst__qpVL5{order:-1}.Col_orderSmLast__1Hf30{order:13}}@media (min-width:768px){.Col_colMd__30Mjk{position:relative;width:100%;min-height:1px;padding-right:10px;padding-right:10px;padding-right:var(--gutter-col-mobile);padding-left:10px;padding-left:10px;padding-left:var(--gutter-col-mobile);flex-basis:0;flex-grow:1;max-width:100%;box-sizing:border-box}}@media (min-width:768px) and (min-width:992px){.Col_colMd__30Mjk{padding-right:10px;padding-right:10px;padding-right:var(--gutter-col-desktop);padding-left:10px;padding-left:10px;padding-left:var(--gutter-col-desktop)}}@media (min-width:768px){.Col_colMdAuto__2t_hL{flex:0 0 auto;width:auto;max-width:none}.Col_colMd1__1npqM{flex:0 0 8.333333%;max-width:8.333333%}.Col_colMd2__TKZTH{flex:0 0 16.666667%;max-width:16.666667%}.Col_colMd3__3wUO3{flex:0 0 25%;max-width:25%}.Col_colMd4__1Lb3g{flex:0 0 33.333333%;max-width:33.333333%}.Col_colMd5__2U9uE{flex:0 0 41.666667%;max-width:41.666667%}.Col_colMd6__1Xu0o{flex:0 0 50%;max-width:50%}.Col_colMd7__1e3ib{flex:0 0 58.333333%;max-width:58.333333%}.Col_colMd8__3D0dK{flex:0 0 66.666667%;max-width:66.666667%}.Col_colMd9__3ZtlY{flex:0 0 75%;max-width:75%}.Col_colMd10__2j2G0{flex:0 0 83.333333%;max-width:83.333333%}.Col_colMd11__1_Lrw{flex:0 0 91.666667%;max-width:91.666667%}.Col_colMd12__1-uEW{flex:0 0 100%;max-width:100%}.Col_orderMdFirst__2uk6G{order:-1}.Col_orderMdLast__12Cba{order:13}}@media (min-width:992px){.Col_colLg__3wFzy{position:relative;width:100%;min-height:1px;padding-right:10px;padding-right:10px;padding-right:var(--gutter-col-mobile);padding-left:10px;padding-left:10px;padding-left:var(--gutter-col-mobile);flex-basis:0;flex-grow:1;max-width:100%;box-sizing:border-box;padding-right:10px;padding-right:var(--gutter-col-desktop);padding-left:10px;padding-left:var(--gutter-col-desktop)}.Col_colLgAuto__1MOsV{flex:0 0 auto;width:auto;max-width:none}.Col_colLg1__29uYu{flex:0 0 8.333333%;max-width:8.333333%}.Col_colLg2__2aPkt{flex:0 0 16.666667%;max-width:16.666667%}.Col_colLg3__1M7d8{flex:0 0 25%;max-width:25%}.Col_colLg4__ape37{flex:0 0 33.333333%;max-width:33.333333%}.Col_colLg5__WGEGW{flex:0 0 41.666667%;max-width:41.666667%}.Col_colLg6__3lViV{flex:0 0 50%;max-width:50%}.Col_colLg7__1e01O{flex:0 0 58.333333%;max-width:58.333333%}.Col_colLg8__ePPu9{flex:0 0 66.666667%;max-width:66.666667%}.Col_colLg9__2Eq6l{flex:0 0 75%;max-width:75%}.Col_colLg10__KWLbq{flex:0 0 83.333333%;max-width:83.333333%}.Col_colLg11__2Lba_{flex:0 0 91.666667%;max-width:91.666667%}.Col_colLg12__2MC8J{flex:0 0 100%;max-width:100%}.Col_orderLgFirst__3alz5{order:-1}.Col_orderLgLast__3OPy3{order:13}}@media (min-width:1200px){.Col_colXl__17hxT{position:relative;width:100%;min-height:1px;padding-right:10px;padding-right:10px;padding-right:var(--gutter-col-mobile);padding-left:10px;padding-left:10px;padding-left:var(--gutter-col-mobile);flex-basis:0;flex-grow:1;max-width:100%;box-sizing:border-box}}@media (min-width:1200px) and (min-width:992px){.Col_colXl__17hxT{padding-right:10px;padding-right:10px;padding-right:var(--gutter-col-desktop);padding-left:10px;padding-left:10px;padding-left:var(--gutter-col-desktop)}}@media (min-width:1200px){.Col_colXlAuto__3DtSi{flex:0 0 auto;width:auto;max-width:none}.Col_colXl1__3x_LP{flex:0 0 8.333333%;max-width:8.333333%}.Col_colXl2__1Z7OW{flex:0 0 16.666667%;max-width:16.666667%}.Col_colXl3__3DhSI{flex:0 0 25%;max-width:25%}.Col_colXl4__2wUSn{flex:0 0 33.333333%;max-width:33.333333%}.Col_colXl5__3DEwp{flex:0 0 41.666667%;max-width:41.666667%}.Col_colXl6__3adlF{flex:0 0 50%;max-width:50%}.Col_colXl7__3Gm_-{flex:0 0 58.333333%;max-width:58.333333%}.Col_colXl8__29gNG{flex:0 0 66.666667%;max-width:66.666667%}.Col_colXl9__hRZxg{flex:0 0 75%;max-width:75%}.Col_colXl10__2T-Ze{flex:0 0 83.333333%;max-width:83.333333%}.Col_colXl11__1BEU6{flex:0 0 91.666667%;max-width:91.666667%}.Col_colXl12__2nImA{flex:0 0 100%;max-width:100%}.Col_orderXlFirst__28rgU{order:-1}.Col_orderXlLast__1f8Jc{order:13}}@media (min-width:1440px){.Col_colXxl__21E7W{position:relative;width:100%;min-height:1px;padding-right:10px;padding-right:10px;padding-right:var(--gutter-col-mobile);padding-left:10px;padding-left:10px;padding-left:var(--gutter-col-mobile);flex-basis:0;flex-grow:1;max-width:100%;box-sizing:border-box}}@media (min-width:1440px) and (min-width:992px){.Col_colXxl__21E7W{padding-right:10px;padding-right:10px;padding-right:var(--gutter-col-desktop);padding-left:10px;padding-left:10px;padding-left:var(--gutter-col-desktop)}}@media (min-width:1440px){.Col_colXxlAuto__2BhVs{flex:0 0 auto;width:auto;max-width:none}.Col_colXxl1__2QTuG{flex:0 0 8.333333%;max-width:8.333333%}.Col_colXxl2__OM_Mf{flex:0 0 16.666667%;max-width:16.666667%}.Col_colXxl3__10kMG{flex:0 0 25%;max-width:25%}.Col_colXxl4__2YSFD{flex:0 0 33.333333%;max-width:33.333333%}.Col_colXxl5__39zaW{flex:0 0 41.666667%;max-width:41.666667%}.Col_colXxl6__R9fEn{flex:0 0 50%;max-width:50%}.Col_colXxl7__2kUit{flex:0 0 58.333333%;max-width:58.333333%}.Col_colXxl8__7LOnv{flex:0 0 66.666667%;max-width:66.666667%}.Col_colXxl9__kVzQa{flex:0 0 75%;max-width:75%}.Col_colXxl10__4oVpP{flex:0 0 83.333333%;max-width:83.333333%}.Col_colXxl11__2-FRA{flex:0 0 91.666667%;max-width:91.666667%}.Col_colXxl12__1rk3O{flex:0 0 100%;max-width:100%}.Col_orderXxlFirst__17zmD{order:-1}.Col_orderXxlLast__pUqEK{order:13}}@media (min-width:1920px){.Col_colXxxl__MEHKZ{position:relative;width:100%;min-height:1px;padding-right:10px;padding-right:10px;padding-right:var(--gutter-col-mobile);padding-left:10px;padding-left:10px;padding-left:var(--gutter-col-mobile);flex-basis:0;flex-grow:1;max-width:100%;box-sizing:border-box}}@media (min-width:1920px) and (min-width:992px){.Col_colXxxl__MEHKZ{padding-right:10px;padding-right:10px;padding-right:var(--gutter-col-desktop);padding-left:10px;padding-left:10px;padding-left:var(--gutter-col-desktop)}}@media (min-width:1920px){.Col_colXxxlAuto__18Qt5{flex:0 0 auto;width:auto;max-width:none}.Col_colXxxl1__2078T{flex:0 0 8.333333%;max-width:8.333333%}.Col_colXxxl2__3FNcy{flex:0 0 16.666667%;max-width:16.666667%}.Col_colXxxl3__1VKmp{flex:0 0 25%;max-width:25%}.Col_colXxxl4__3tlWR{flex:0 0 33.333333%;max-width:33.333333%}.Col_colXxxl5__7qxEU{flex:0 0 41.666667%;max-width:41.666667%}.Col_colXxxl6__CvtIS{flex:0 0 50%;max-width:50%}.Col_colXxxl7__26mXV{flex:0 0 58.333333%;max-width:58.333333%}.Col_colXxxl8__2H7NT{flex:0 0 66.666667%;max-width:66.666667%}.Col_colXxxl9__JfyOl{flex:0 0 75%;max-width:75%}.Col_colXxxl10__314Hi{flex:0 0 83.333333%;max-width:83.333333%}.Col_colXxxl11__3Wk9D{flex:0 0 91.666667%;max-width:91.666667%}.Col_colXxxl12__23K7j{flex:0 0 100%;max-width:100%}.Col_orderXxxlFirst__pLRCt{order:-1}.Col_orderXxxlLast__2Dhkg{order:13}}";
  var styles$2 = {"textAlign-left":"Col_textAlign-left__8zrrN","textAlign-center":"Col_textAlign-center__1qBKP","textAlign-right":"Col_textAlign-right__2WC5X","col":"Col_col__nE0P9","colAuto":"Col_colAuto__1k5bN","col1":"Col_col1__GlJQX","col2":"Col_col2__3Wq7S","col3":"Col_col3__Xkbxf","col4":"Col_col4__Vp5TY","col5":"Col_col5__24H4y","col6":"Col_col6__2NzM3","col7":"Col_col7__1NF41","col8":"Col_col8__13X-2","col9":"Col_col9__2rWwK","col10":"Col_col10__17Cx7","col11":"Col_col11__2sJPx","col12":"Col_col12__3HXvM","orderFirst":"Col_orderFirst__5Sg4t","orderLast":"Col_orderLast__2dEtE","colSm":"Col_colSm__1VNqW","colSmAuto":"Col_colSmAuto__1mrFP","colSm1":"Col_colSm1__1k4aG","colSm2":"Col_colSm2__19dFW","colSm3":"Col_colSm3__3Y9Fs","colSm4":"Col_colSm4__2UQ70","colSm5":"Col_colSm5__22OXF","colSm6":"Col_colSm6__3CIu5","colSm7":"Col_colSm7__2PakL","colSm8":"Col_colSm8__eqUwL","colSm9":"Col_colSm9__2QMGr","colSm10":"Col_colSm10__14QV9","colSm11":"Col_colSm11__RlA-l","colSm12":"Col_colSm12__1lU-W","orderSmFirst":"Col_orderSmFirst__qpVL5","orderSmLast":"Col_orderSmLast__1Hf30","colMd":"Col_colMd__30Mjk","colMdAuto":"Col_colMdAuto__2t_hL","colMd1":"Col_colMd1__1npqM","colMd2":"Col_colMd2__TKZTH","colMd3":"Col_colMd3__3wUO3","colMd4":"Col_colMd4__1Lb3g","colMd5":"Col_colMd5__2U9uE","colMd6":"Col_colMd6__1Xu0o","colMd7":"Col_colMd7__1e3ib","colMd8":"Col_colMd8__3D0dK","colMd9":"Col_colMd9__3ZtlY","colMd10":"Col_colMd10__2j2G0","colMd11":"Col_colMd11__1_Lrw","colMd12":"Col_colMd12__1-uEW","orderMdFirst":"Col_orderMdFirst__2uk6G","orderMdLast":"Col_orderMdLast__12Cba","colLg":"Col_colLg__3wFzy","colLgAuto":"Col_colLgAuto__1MOsV","colLg1":"Col_colLg1__29uYu","colLg2":"Col_colLg2__2aPkt","colLg3":"Col_colLg3__1M7d8","colLg4":"Col_colLg4__ape37","colLg5":"Col_colLg5__WGEGW","colLg6":"Col_colLg6__3lViV","colLg7":"Col_colLg7__1e01O","colLg8":"Col_colLg8__ePPu9","colLg9":"Col_colLg9__2Eq6l","colLg10":"Col_colLg10__KWLbq","colLg11":"Col_colLg11__2Lba_","colLg12":"Col_colLg12__2MC8J","orderLgFirst":"Col_orderLgFirst__3alz5","orderLgLast":"Col_orderLgLast__3OPy3","colXl":"Col_colXl__17hxT","colXlAuto":"Col_colXlAuto__3DtSi","colXl1":"Col_colXl1__3x_LP","colXl2":"Col_colXl2__1Z7OW","colXl3":"Col_colXl3__3DhSI","colXl4":"Col_colXl4__2wUSn","colXl5":"Col_colXl5__3DEwp","colXl6":"Col_colXl6__3adlF","colXl7":"Col_colXl7__3Gm_-","colXl8":"Col_colXl8__29gNG","colXl9":"Col_colXl9__hRZxg","colXl10":"Col_colXl10__2T-Ze","colXl11":"Col_colXl11__1BEU6","colXl12":"Col_colXl12__2nImA","orderXlFirst":"Col_orderXlFirst__28rgU","orderXlLast":"Col_orderXlLast__1f8Jc","colXxl":"Col_colXxl__21E7W","colXxlAuto":"Col_colXxlAuto__2BhVs","colXxl1":"Col_colXxl1__2QTuG","colXxl2":"Col_colXxl2__OM_Mf","colXxl3":"Col_colXxl3__10kMG","colXxl4":"Col_colXxl4__2YSFD","colXxl5":"Col_colXxl5__39zaW","colXxl6":"Col_colXxl6__R9fEn","colXxl7":"Col_colXxl7__2kUit","colXxl8":"Col_colXxl8__7LOnv","colXxl9":"Col_colXxl9__kVzQa","colXxl10":"Col_colXxl10__4oVpP","colXxl11":"Col_colXxl11__2-FRA","colXxl12":"Col_colXxl12__1rk3O","orderXxlFirst":"Col_orderXxlFirst__17zmD","orderXxlLast":"Col_orderXxlLast__pUqEK","colXxxl":"Col_colXxxl__MEHKZ","colXxxlAuto":"Col_colXxxlAuto__18Qt5","colXxxl1":"Col_colXxxl1__2078T","colXxxl2":"Col_colXxxl2__3FNcy","colXxxl3":"Col_colXxxl3__1VKmp","colXxxl4":"Col_colXxxl4__3tlWR","colXxxl5":"Col_colXxxl5__7qxEU","colXxxl6":"Col_colXxxl6__CvtIS","colXxxl7":"Col_colXxxl7__26mXV","colXxxl8":"Col_colXxxl8__2H7NT","colXxxl9":"Col_colXxxl9__JfyOl","colXxxl10":"Col_colXxxl10__314Hi","colXxxl11":"Col_colXxxl11__3Wk9D","colXxxl12":"Col_colXxxl12__23K7j","orderXxxlFirst":"Col_orderXxxlFirst__pLRCt","orderXxxlLast":"Col_orderXxxlLast__2Dhkg"};
  styleInject(css$2);

  (function () {
    var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
    enterModule && enterModule(module);
  })();

  var __signature__$2 = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
    return a;
  };
  var Col =
  /*#__PURE__*/
  function (_Component) {
    inherits(Col, _Component);

    function Col() {
      classCallCheck(this, Col);

      return possibleConstructorReturn(this, getPrototypeOf(Col).apply(this, arguments));
    }

    createClass(Col, [{
      key: "render",
      value: function render() {
        var _classNames;

        var _this$props = this.props,
            textAlign = _this$props.textAlign,
            className = _this$props.className,
            id = _this$props.id,
            children = _this$props.children,
            xs = _this$props.xs,
            sm = _this$props.sm,
            md = _this$props.md,
            lg = _this$props.lg,
            xl = _this$props.xl,
            xxl = _this$props.xxl,
            xxxl = _this$props.xxxl,
            first = _this$props.first,
            firstSm = _this$props.firstSm,
            firstMd = _this$props.firstMd,
            firstLg = _this$props.firstLg,
            firstXl = _this$props.firstXl,
            firstXxl = _this$props.firstXxl,
            firstXxxl = _this$props.firstXxxl,
            last = _this$props.last,
            lastSm = _this$props.lastSm,
            lastMd = _this$props.lastMd,
            lastLg = _this$props.lastLg,
            lastXl = _this$props.lastXl,
            lastXxl = _this$props.lastXxl,
            lastXxxl = _this$props.lastXxxl;
        return React__default.createElement("div", {
          id: id,
          className: classnames(styles$2.col, (_classNames = {}, defineProperty(_classNames, styles$2["textAlign-".concat(textAlign || '')], textAlign), defineProperty(_classNames, styles$2["col".concat(xs || '')], xs), defineProperty(_classNames, styles$2["colSm".concat(sm || '')], sm), defineProperty(_classNames, styles$2["colMd".concat(md || '')], md), defineProperty(_classNames, styles$2["colLg".concat(lg || '')], lg), defineProperty(_classNames, styles$2["colXl".concat(xl || '')], xl), defineProperty(_classNames, styles$2["colXxl".concat(xxl || '')], xxl), defineProperty(_classNames, styles$2["colXxxl".concat(xxxl || '')], xxxl), defineProperty(_classNames, styles$2.orderFirst, first), defineProperty(_classNames, styles$2.orderSmFirst, firstSm), defineProperty(_classNames, styles$2.orderMdFirst, firstMd), defineProperty(_classNames, styles$2.orderLgFirst, firstLg), defineProperty(_classNames, styles$2.orderXlFirst, firstXl), defineProperty(_classNames, styles$2.orderXxlFirst, firstXxl), defineProperty(_classNames, styles$2.orderXxxlFirst, firstXxxl), defineProperty(_classNames, styles$2.orderLast, last), defineProperty(_classNames, styles$2.orderSmLast, lastSm), defineProperty(_classNames, styles$2.orderMdLast, lastMd), defineProperty(_classNames, styles$2.orderLgLast, lastLg), defineProperty(_classNames, styles$2.orderXlLast, lastXl), defineProperty(_classNames, styles$2.orderXxlLast, lastXxl), defineProperty(_classNames, styles$2.orderXxxlLast, lastXxxl), _classNames), className)
        }, children);
      }
    }, {
      key: "__reactstandin__regenerateByEval",
      // @ts-ignore
      value: function __reactstandin__regenerateByEval(key, code) {
        // @ts-ignore
        this[key] = eval(code);
      }
    }]);

    return Col;
  }(React.Component);
  var _default$2 = Col;

  (function () {
    var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

    if (!reactHotLoader) {
      return;
    }

    reactHotLoader.register(Col, "Col", "/Users/luangjokaj/dev/cherry/src/Components/Layout/Content/Col/Col.js");
    reactHotLoader.register(_default$2, "default", "/Users/luangjokaj/dev/cherry/src/Components/Layout/Content/Col/Col.js");
  })();

  (function () {
    var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
    leaveModule && leaveModule(module);
  })();

  exports.Col = Col;
  exports.Container = Container;
  exports.Row = Row;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=cherry.js.map
