import React, { Component } from 'react';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

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

var css = "/*********************************************************************\n**********************************************************************\nCherry 0.0.1 - Design System\nVariables & Mixins\n**********************************************************************\n*********************************************************************/\n\n:root {\n\n\t/* Spacing ----------------------------------------------- */\n\t--max-width: 1440px;\n\t--padding-top-body-mobile: 70px;\n\t--padding-top-body-desktop: 0;\n\t--margin-container-mobile: 20px;\n\t--margin-container-desktop: 20px;\n\t--margin-row-mobile: -10px;\n\t--margin-row-desktop: -10px;\n\t--gutter-col-mobile: 10px;\n\t--gutter-col-desktop: 10px;\n\n\t/* Colors ----------------------------------------------------- */\n\t--color-primary: #1F2D3D;\n\t--color-secondary: #8492A6;\n\t--color-tertiary: #F9FAFC;\n\n\t--color-dark: #000;\n\t--color-light: #fff;\n\n\t--color-gray-light: #E5E5E5;\n\t--color-gray-medium: #666666;\n\t--color-gray-dark: #4a4a4a;\n\n\t--color-success: #28a745;\n\t--color-error: #dc3545;\n\t--color-warning: #ffc107;\n\t--color-info: #17a2b8;\n\n\t/* Fonts ------------------------------------------------------ */\n\t--font-text: 'Roboto', sans-serif;\n\t--font-head: var(--font-text);\n\t--font-special: var(--font-text);\n\t--font-mono: 'Roboto Mono', monospace;\n\n\t/* Font Sizes ------------------------------------------------- */\n\t/* --> Hero --------------------------------------------------- */\n\t--size-hero1-mobile: 52px;\n\t--lineheight-hero1-mobile: 1.35;\n\t--size-hero1-desktop: 62px;\n\t--lineheight-hero1-desktop: 1.15;\n\n\t--size-hero2-mobile: 42px;\n\t--lineheight-hero2-mobile: 1.35;\n\t--size-hero2-desktop: 52px;\n\t--lineheight-hero2-desktop: 1.15;\n\n\t--size-hero3-mobile: 32px;\n\t--lineheight-hero3-mobile: 1.35;\n\t--size-hero3-desktop: 42px;\n\t--lineheight-hero3-desktop: 1.15;\n\n\t/* --> Eyebrow ------------------------------------------------ */\n\t--size-eyebrow-mobile: 16px;\n\t--lineheight-eyebrow-mobile: 1.35;\n\t--size-eyebrow-desktop: 18px;\n\t--lineheight-eyebrow-desktop: 1.15;\n\n\t/* --> Heading ------------------------------------------------ */\n\t--size-h1-mobile: 38px;\n\t--lineheight-h1-mobile: 1.35;\n\t--size-h1-desktop: 40px;\n\t--lineheight-h1-desktop: 1.15;\n\n\t--size-h2-mobile: 28px;\n\t--lineheight-h2-mobile: 1.35;\n\t--size-h2-desktop: 32px;\n\t--lineheight-h2-desktop: 1.15;\n\n\t--size-h3-mobile: 24px;\n\t--lineheight-h3-mobile: 1.35;\n\t--size-h3-desktop: 28px;\n\t--lineheight-h3-desktop: 1.15;\n\n\t--size-h4-mobile: 22px;\n\t--lineheight-h4-mobile: 1.35;\n\t--size-h4-desktop: 24px;\n\t--lineheight-h4-desktop: 1.15;\n\n\t--size-h5-mobile: 18px;\n\t--lineheight-h5-mobile: 1.35;\n\t--size-h5-desktop: 20px;\n\t--lineheight-h5-desktop: 1.15;\n\n\t--size-h6-mobile: 14px;\n\t--lineheight-h6-mobile: 1.35;\n\t--size-h6-desktop: 16px;\n\t--lineheight-h6-desktop: 1.15;\n\n\t/* --> Subtitle ----------------------------------------------- */\n\t--size-subtitle-mobile: 18px;\n\t--lineheight-subtitle-mobile: 1.35;\n\t--size-subtitle-desktop: 20px;\n\t--lineheight-subtitle-desktop: 1.15;\n\t\n\n\t/* --> Lead --------------------------------------------------- */\n\t--size-lead-mobile: 16px;\n\t--lineheight-lead-mobile: 1.5;\n\t--size-lead-desktop: 18px;\n\t--lineheight-lead-desktop: 1.75;\n\n\t/* --> Text --------------------------------------------------- */\n\t--size-text-mobile: 16px;\n\t--lineheight-text-mobile: 1.5;\n\t--size-text-desktop: 18px;\n\t--lineheight-text-desktop: 1.7;\n\n\t/* --> Small -------------------------------------------------- */\n\t--size-small-mobile: 12px;\n\t--lineheight-small-mobile: 1.7;\n\t--size-small-desktop: 14px;\n\t--lineheight-small-desktop: 1.7;\n\n\t/* --> Blockquote --------------------------------------------- */\n\t--size-blockquote-mobile: var(--size-h3-mobile);\n\t--size-blockquote-desktop: var(--size-h3-desktop);\n\n\t/* --> List --------------------------------------------------- */\n\t--size-list-mobile: var(--size-text-mobile);\n\t--size-list-desktop: var(--size-text-desktop);\n}\n\n.testi_testi__1gL1t {\n\tbackground: #1F2D3D;\n\tbackground: #1F2D3D;\n\tbackground: #1F2D3D;\n\tbackground: #1F2D3D;\n\tbackground: var(--color-primary);\n\tcolor: #fff;\n\tcolor: #fff;\n\tcolor: #fff;\n\tcolor: #fff;\n\tcolor: var(--color-light);\n}";
var styles = {"testi":"testi_testi__1gL1t"};
styleInject(css);

var Test =
/*#__PURE__*/
function (_Component) {
  _inherits(Test, _Component);

  function Test() {
    _classCallCheck(this, Test);

    return _possibleConstructorReturn(this, _getPrototypeOf(Test).apply(this, arguments));
  }

  _createClass(Test, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: styles.testi
      }, this.props.children);
    }
  }]);

  return Test;
}(Component);

export { Test };
//# sourceMappingURL=cherry.module.js.map
