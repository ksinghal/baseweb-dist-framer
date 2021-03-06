function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* global document */
import * as React from 'react';
import ReactDOM from 'react-dom';
import { styled } from '../styles/index.js';
import { LayersContext, Consumer } from './layers-manager.js';
var Container = styled('div', function (_ref) {
  var $zIndex = _ref.$zIndex;
  return {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: $zIndex || null
  };
});
Container.displayName = "Container";

var LayerComponent = /*#__PURE__*/function (_React$Component) {
  _inherits(LayerComponent, _React$Component);

  var _super = _createSuper(LayerComponent);

  function LayerComponent() {
    var _this;

    _classCallCheck(this, LayerComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      container: null
    });

    _defineProperty(_assertThisInitialized(_this), "onEscape", function () {
      if (_this.props.onEscape) {
        _this.props.onEscape();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onDocumentClick", function (event) {
      if (_this.props.onDocumentClick) {
        _this.props.onDocumentClick(event);
      }
    });

    return _this;
  }

  _createClass(LayerComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.context.addEscapeHandler(this.onEscape);

      if (!this.props.isHoverLayer) {
        this.context.addDocClickHandler(this.onDocumentClick);
      }

      var _this$props = this.props,
          onMount = _this$props.onMount,
          mountNode = _this$props.mountNode,
          layersManagerHost = _this$props.host;

      if (mountNode) {
        onMount && onMount();
        return;
      } // There was no LayersManager added if this.props.host === undefined.
      // Use document.body is the case no LayersManager is used.


      var hasLayersManager = layersManagerHost !== undefined;

      if (process.env.NODE_ENV !== "production") {
        if (!hasLayersManager) {
          console.warn('`LayersManager` was not found. This occurs if you are attempting to use a component requiring `Layer` without using the `BaseProvider` at the root of your app. Please visit https://baseweb.design/components/base-provider/ for more information');
        }
      }

      var host = hasLayersManager ? layersManagerHost : document.body;

      if (host) {
        this.addContainer(host);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          host = _this$props2.host,
          mountNode = _this$props2.mountNode;

      if (mountNode) {
        return;
      }

      if (host && host !== prevProps.host && prevProps.host === null) {
        this.addContainer(host);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.context.removeEscapeHandler(this.onEscape);
      this.context.removeDocClickHandler(this.onDocumentClick);

      if (this.props.onUnmount) {
        this.props.onUnmount();
      }

      var host = this.props.host;
      var container = this.state.container;

      if (host && container) {
        if (host.contains(container)) {
          host.removeChild(container);
        }
      }
    }
  }, {
    key: "addContainer",
    value: function addContainer(host) {
      var _this$props3 = this.props,
          index = _this$props3.index,
          mountNode = _this$props3.mountNode,
          onMount = _this$props3.onMount; // Do nothing if mountNode is provided

      if (mountNode) {
        return;
      }

      if (host) {
        var container = host.ownerDocument.createElement('div'); // `host` is an DOM node, but not a React component

        var sibling = typeof index === 'number' ? host.children[index] : null;
        sibling ? host.insertBefore(container, sibling) : host.appendChild(container);
        this.setState({
          container: container
        }, function () {
          onMount && onMount();
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var container = this.state.container;
      var _this$props4 = this.props,
          children = _this$props4.children,
          mountNode = _this$props4.mountNode,
          zIndex = _this$props4.zIndex; // Only adding an additional wrapper when a layer has z-index to be set

      var childrenToRender = zIndex ? /*#__PURE__*/React.createElement(Container, {
        $zIndex: zIndex
      }, children) : children;

      if (typeof document !== 'undefined') {
        if (mountNode || container) {
          // $FlowFixMe
          return /*#__PURE__*/ReactDOM.createPortal(childrenToRender, mountNode || container);
        }

        return null;
      }

      return null;
    }
  }]);

  return LayerComponent;
}(React.Component);

_defineProperty(LayerComponent, "contextType", LayersContext);

export default function Layer(props) {
  return /*#__PURE__*/React.createElement(Consumer, null, function (_ref2) {
    var host = _ref2.host,
        zIndex = _ref2.zIndex;
    return /*#__PURE__*/React.createElement(LayerComponent, _extends({}, props, {
      host: host,
      zIndex: zIndex
    }));
  });
}