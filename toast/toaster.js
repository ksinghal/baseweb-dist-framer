function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

/* eslint-disable cup/no-undef */
import * as React from 'react';
import ReactDOM from 'react-dom';
import { getOverrides, mergeOverrides } from '../helpers/overrides.js';
import { KIND, PLACEMENT } from './constants.js';
import { Root as StyledRoot, Body as StyledBody, CloseIconSvg as StyledCloseIcon, InnerContainer as StyledInnerContainer } from './styled-components.js';
import Toast from './toast.js';
var toasterRef = null;
export var ToasterContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(ToasterContainer, _React$Component);

  var _super = _createSuper(ToasterContainer);

  function ToasterContainer(_props) {
    var _this;

    _classCallCheck(this, ToasterContainer);

    _this = _super.call(this, _props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      isMounted: false,
      toasts: []
    });

    _defineProperty(_assertThisInitialized(_this), "dismissHandlers", {});

    _defineProperty(_assertThisInitialized(_this), "toastId", 0);

    _defineProperty(_assertThisInitialized(_this), "getToastProps", function (props) {
      var _this$props = _this.props,
          autoFocus = _this$props.autoFocus,
          autoHideDuration = _this$props.autoHideDuration,
          closeable = _this$props.closeable;
      var key = props.key || "toast-".concat(_this.toastId++);
      return _objectSpread(_objectSpread({
        autoFocus: autoFocus,
        autoHideDuration: autoHideDuration,
        closeable: closeable
      }, props), {}, {
        key: key
      });
    });

    _defineProperty(_assertThisInitialized(_this), "show", function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (_this.state.toasts.map(function (t) {
        return t.key;
      }).includes(props.key)) {
        _this.update(props.key, props);

        return props.key;
      }

      var toastProps = _this.getToastProps(props);

      _this.setState(function (_ref) {
        var toasts = _ref.toasts;
        return {
          toasts: [].concat(_toConsumableArray(toasts), [toastProps])
        };
      });

      return toastProps.key;
    });

    _defineProperty(_assertThisInitialized(_this), "update", function (key, props) {
      _this.setState(function (_ref2) {
        var toasts = _ref2.toasts;
        var updatedToasts = toasts.map(function (toast) {
          if (toast.key === key) {
            var updatedToastProps = _objectSpread(_objectSpread(_objectSpread({}, toast), _this.getToastProps(_objectSpread({
              autoHideDuration: toast.autoHideDuration
            }, props))), {}, {
              key: key
            }, _this.props.resetAutoHideTimerOnUpdate ? {
              __updated: (parseInt(toast.__updated) || 0) + 1
            } : {});

            return updatedToastProps;
          }

          return toast;
        });
        return {
          toasts: updatedToasts
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "dismiss", function (key) {
      if (_this.dismissHandlers[key]) {
        _this.dismissHandlers[key]();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "clearAll", function () {
      Object.keys(_this.dismissHandlers).forEach(function (key) {
        _this.dismissHandlers[key]();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "clear", function (key) {
      key === undefined ? _this.clearAll() : _this.dismiss(key);
    });

    _defineProperty(_assertThisInitialized(_this), "internalOnClose", function (key) {
      delete _this.dismissHandlers[key];

      _this.setState(function (_ref3) {
        var toasts = _ref3.toasts;
        return {
          toasts: toasts.filter(function (t) {
            return !(t.key === key);
          })
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getOnCloseHandler", function (key, onClose) {
      return function () {
        _this.internalOnClose(key);

        typeof onClose === 'function' && onClose();
      };
    });

    _defineProperty(_assertThisInitialized(_this), "renderToast", function (toastProps) {
      var onClose = toastProps.onClose,
          children = toastProps.children,
          key = toastProps.key,
          restProps = _objectWithoutProperties(toastProps, ["onClose", "children", "key"]);

      var _this$props$overrides = _this.props.overrides,
          BodyOverride = _this$props$overrides.ToastBody,
          CloseIconOverride = _this$props$overrides.ToastCloseIcon,
          InnerContainerOverride = _this$props$overrides.ToastInnerContainer;
      var globalToastOverrides = mergeOverrides({
        Body: StyledBody,
        CloseIcon: StyledCloseIcon,
        InnerContainer: StyledInnerContainer
      }, // $FlowFixMe
      {
        Body: BodyOverride,
        CloseIcon: CloseIconOverride,
        InnerContainer: InnerContainerOverride
      });
      var toastOverrides = mergeOverrides(globalToastOverrides, toastProps.overrides);
      return /*#__PURE__*/React.createElement(Toast, _extends({}, restProps, {
        overrides: toastOverrides,
        key: key,
        onClose: _this.getOnCloseHandler(key, onClose)
      }), function (_ref4) {
        var dismiss = _ref4.dismiss;
        _this.dismissHandlers[key] = dismiss; // $FlowFixMe

        return children;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getSharedProps", function () {
      var placement = _this.props.placement;
      return {
        $placement: placement
      };
    });

    toasterRef = _assertThisInitialized(_this);
    return _this;
  }

  _createClass(ToasterContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        isMounted: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var sharedProps = this.getSharedProps();
      var RootOverride = this.props.overrides.Root;

      var _getOverrides = getOverrides(RootOverride, StyledRoot),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          Root = _getOverrides2[0],
          rootProps = _getOverrides2[1];

      var toastsLength = this.state.toasts.length;
      var toastsToRender = []; // render the toasts from the newest at the start
      // to the oldest at the end
      // eslint-disable-next-line for-direction

      for (var i = toastsLength - 1; i >= 0; i--) {
        toastsToRender.push(this.renderToast(this.state.toasts[i]));
      }

      var root = /*#__PURE__*/React.createElement(Root, _extends({
        "data-baseweb": "toaster"
      }, sharedProps, rootProps), toastsToRender); //Only render the portal in the browser, otherwise render the toasts and children

      if (this.state.isMounted) {
        return /*#__PURE__*/React.createElement(React.Fragment, null, this.props.usePortal && typeof document !== 'undefined' ? /*#__PURE__*/ReactDOM.createPortal(root, // $FlowFixMe
        document.body) : root, this.props.children);
      } else {
        return /*#__PURE__*/React.createElement(React.Fragment, null, this.props.children);
      }
    }
  }]);

  return ToasterContainer;
}(React.Component);

_defineProperty(ToasterContainer, "defaultProps", {
  autoFocus: false,
  autoHideDuration: 0,
  children: null,
  closeable: true,
  overrides: {},
  placement: PLACEMENT.top,
  resetAutoHideTimerOnUpdate: true,
  usePortal: true
});

var toaster = {
  getRef: function getRef() {
    return toasterRef;
  },
  show: function show(children) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // toasts can not be added until Toaster is mounted
    // no SSR for the `toaster.show()`
    var toasterInstance = this.getRef();

    if (toasterInstance) {
      return toasterInstance.show(_objectSpread(_objectSpread({}, props), {}, {
        children: children
      }));
    } else if (process.env.NODE_ENV !== "production") {
      throw new Error('Please make sure to add the ToasterContainer to your application, and it is mounted, before adding toasts! You can find more information here: https://baseweb.design/components/toast');
    }
  },
  info: function info(children) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return this.show(children, _objectSpread(_objectSpread({}, props), {}, {
      kind: KIND.info
    }));
  },
  positive: function positive(children) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return this.show(children, _objectSpread(_objectSpread({}, props), {}, {
      kind: KIND.positive
    }));
  },
  warning: function warning(children) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return this.show(children, _objectSpread(_objectSpread({}, props), {}, {
      kind: KIND.warning
    }));
  },
  negative: function negative(children) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return this.show(children, _objectSpread(_objectSpread({}, props), {}, {
      kind: KIND.negative
    }));
  },
  update: function update(key, props) {
    var toasterInstance = this.getRef();

    if (toasterInstance) {
      toasterInstance.update(key, props);
    } else if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.error('No ToasterContainer is mounted yet.');
    }
  },
  clear: function clear(key) {
    var toasterInstance = this.getRef();

    if (toasterInstance) {
      toasterInstance.clear(key);
    } else if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.error('No ToasterContainer is mounted yet.');
    }
  }
};
export default toaster;