function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

/* eslint-disable cup/no-undef */
import * as React from 'react';
import FocusLock from 'react-focus-lock';
import { LocaleContext } from '../locale/index.js';
import { getOverrides } from '../helpers/overrides.js';
import { Layer } from '../layer/index.js';
import { SIZE, CLOSE_SOURCE, ANCHOR } from './constants.js';
import { StyledRoot, StyledBackdrop, StyledDrawerContainer, StyledDrawerBody, StyledClose, Hidden } from './styled-components.js';
import { CloseIcon } from './close-icon.js';
import { isFocusVisible, forkFocus, forkBlur } from '../utils/focusVisible.js';

var Drawer = /*#__PURE__*/function (_React$Component) {
  _inherits(Drawer, _React$Component);

  var _super = _createSuper(Drawer);

  function Drawer() {
    var _this;

    _classCallCheck(this, Drawer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "animateOutTimer", void 0);

    _defineProperty(_assertThisInitialized(_this), "animateStartTimer", void 0);

    _defineProperty(_assertThisInitialized(_this), "lastFocus", null);

    _defineProperty(_assertThisInitialized(_this), "lastMountNodeOverflowStyle", null);

    _defineProperty(_assertThisInitialized(_this), "_refs", {});

    _defineProperty(_assertThisInitialized(_this), "state", {
      isVisible: false,
      mounted: false,
      isFocusVisible: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
      if (isFocusVisible(event)) {
        _this.setState({
          isFocusVisible: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      if (_this.state.isFocusVisible !== false) {
        _this.setState({
          isFocusVisible: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onEscape", function () {
      if (!_this.props.closeable) {
        return;
      }

      _this.triggerClose(CLOSE_SOURCE.escape);
    });

    _defineProperty(_assertThisInitialized(_this), "onBackdropClick", function (event) {
      if (_this.props.onBackdropClick) {
        _this.props.onBackdropClick(event);
      }

      if (!_this.props.closeable) {
        return;
      }

      _this.triggerClose(CLOSE_SOURCE.backdrop);
    });

    _defineProperty(_assertThisInitialized(_this), "onCloseClick", function () {
      _this.triggerClose(CLOSE_SOURCE.closeButton);
    });

    _defineProperty(_assertThisInitialized(_this), "animateOutComplete", function () {
      _this.setState({
        isVisible: false
      });
    });

    return _this;
  }

  _createClass(Drawer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        mounted: true
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.resetMountNodeScroll();
      this.clearTimers();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var isOpen = this.props.isOpen;

      if ( // If isOpen is changing *or* we just mounted and drawer should be open
      isOpen !== prevProps.isOpen || isOpen && this.state.mounted && !prevState.mounted) {
        if (isOpen) {
          this.didOpen();
        } else {
          this.didClose();
        }
      }
    }
  }, {
    key: "disableMountNodeScroll",
    value: function disableMountNodeScroll() {
      if (this.props.showBackdrop) {
        var mountNode = this.getMountNode();
        this.lastMountNodeOverflowStyle = mountNode.style.overflow || '';
        mountNode.style.overflow = 'hidden';
      }
    }
  }, {
    key: "resetMountNodeScroll",
    value: function resetMountNodeScroll() {
      if (this.props.showBackdrop) {
        var mountNode = this.getMountNode();
        var lastStyle = this.lastMountNodeOverflowStyle;

        if (mountNode && lastStyle !== null) {
          mountNode.style.overflow = lastStyle || '';
          this.lastMountNodeOverflowStyle = null;
        }
      }
    }
  }, {
    key: "getMountNode",
    value: function getMountNode() {
      var mountNode = this.props.mountNode;

      if (mountNode) {
        return mountNode;
      } // Flow thinks body could be null (cast through any)
      // eslint-disable-next-line flowtype/no-weak-types


      return document.body;
    }
  }, {
    key: "clearTimers",
    value: function clearTimers() {
      if (this.animateOutTimer) {
        clearTimeout(this.animateOutTimer);
      }

      if (this.animateStartTimer) {
        // eslint-disable-next-line cup/no-undef
        cancelAnimationFrame(this.animateStartTimer);
      }
    }
  }, {
    key: "didOpen",
    value: function didOpen() {
      var _this2 = this;

      // Sometimes scroll starts past zero, possibly due to animation
      // Reset scroll to 0 (other libraries do this as well)
      var rootRef = this.getRef('Root').current;

      if (rootRef) {
        rootRef.scrollTop = 0;
      } // Clear any existing timers (like previous animateOutTimer)


      this.clearTimers();
      this.disableMountNodeScroll(); // eslint-disable-next-line cup/no-undef

      this.animateStartTimer = requestAnimationFrame(function () {
        _this2.setState({
          isVisible: true
        });
      });
    }
  }, {
    key: "didClose",
    value: function didClose() {
      this.resetMountNodeScroll();
      this.animateOutTimer = setTimeout(this.animateOutComplete, 500);
    }
  }, {
    key: "triggerClose",
    value: function triggerClose(source) {
      // If there's no source, it just means the isOpen prop changed. No need to call onClose.
      if (this.props.onClose && source) {
        this.props.onClose({
          closeSource: source
        });
      }
    }
  }, {
    key: "getSharedProps",
    value: function getSharedProps() {
      var _this$props = this.props,
          animate = _this$props.animate,
          isOpen = _this$props.isOpen,
          size = _this$props.size,
          closeable = _this$props.closeable,
          anchor = _this$props.anchor,
          showBackdrop = _this$props.showBackdrop;
      return {
        $animating: animate,
        $isVisible: this.state.isVisible,
        $isOpen: !!isOpen,
        $size: size,
        $closeable: !!closeable,
        $anchor: anchor,
        $isFocusVisible: this.state.isFocusVisible,
        $showBackdrop: showBackdrop
      };
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      var children = this.props.children;
      return typeof children === 'function' ? children() : children;
    }
  }, {
    key: "getRef",
    value: function getRef(component) {
      if (!this._refs[component]) {
        this._refs[component] = /*#__PURE__*/React.createRef();
      }

      return this._refs[component];
    }
  }, {
    key: "renderDrawer",
    value: function renderDrawer(renderedContent) {
      var _this3 = this;

      var _this$props2 = this.props,
          _this$props2$override = _this$props2.overrides,
          overrides = _this$props2$override === void 0 ? {} : _this$props2$override,
          closeable = _this$props2.closeable,
          autoFocus = _this$props2.autoFocus;
      var RootOverride = overrides.Root,
          DrawerContainerOverride = overrides.DrawerContainer,
          DrawerBodyOverride = overrides.DrawerBody,
          BackdropOverride = overrides.Backdrop,
          CloseOverride = overrides.Close;

      var _getOverrides = getOverrides(RootOverride, StyledRoot),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          Root = _getOverrides2[0],
          rootProps = _getOverrides2[1];

      var _getOverrides3 = getOverrides(BackdropOverride, StyledBackdrop),
          _getOverrides4 = _slicedToArray(_getOverrides3, 2),
          Backdrop = _getOverrides4[0],
          backdropProps = _getOverrides4[1];

      var _getOverrides5 = getOverrides(DrawerContainerOverride, StyledDrawerContainer),
          _getOverrides6 = _slicedToArray(_getOverrides5, 2),
          DrawerContainer = _getOverrides6[0],
          drawerContainerProps = _getOverrides6[1];

      var _getOverrides7 = getOverrides(DrawerBodyOverride, StyledDrawerBody),
          _getOverrides8 = _slicedToArray(_getOverrides7, 2),
          DrawerBody = _getOverrides8[0],
          drawerBodyProps = _getOverrides8[1];

      var _getOverrides9 = getOverrides(CloseOverride, StyledClose),
          _getOverrides10 = _slicedToArray(_getOverrides9, 2),
          Close = _getOverrides10[0],
          closeProps = _getOverrides10[1];

      var sharedProps = this.getSharedProps();
      return /*#__PURE__*/React.createElement(LocaleContext.Consumer, null, function (locale) {
        return /*#__PURE__*/React.createElement(FocusLock, {
          returnFocus: true,
          autoFocus: autoFocus,
          noFocusGuards: true
        }, /*#__PURE__*/React.createElement(Root, _extends({
          "data-baseweb": "drawer",
          ref: _this3.getRef('Root')
        }, sharedProps, rootProps), /*#__PURE__*/React.createElement(Backdrop, _extends({
          onClick: _this3.onBackdropClick
        }, sharedProps, backdropProps)), /*#__PURE__*/React.createElement(DrawerContainer, _extends({}, sharedProps, drawerContainerProps), /*#__PURE__*/React.createElement(DrawerBody, _extends({}, sharedProps, drawerBodyProps), renderedContent), closeable ? /*#__PURE__*/React.createElement(Close, _extends({
          "aria-label": locale.drawer.close,
          onClick: _this3.onCloseClick
        }, sharedProps, closeProps, {
          onFocus: forkFocus(closeProps, _this3.handleFocus),
          onBlur: forkBlur(closeProps, _this3.handleBlur)
        }), /*#__PURE__*/React.createElement(CloseIcon, {
          title: locale.drawer.close
        })) : null)));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var mountedAndOpen = this.state.mounted && (this.props.isOpen || this.state.isVisible);
      var renderedContent = mountedAndOpen || this.props.renderAll ? this.getChildren() : null;

      if (renderedContent) {
        if (mountedAndOpen) {
          return /*#__PURE__*/React.createElement(Layer, {
            onEscape: this.onEscape,
            mountNode: this.props.mountNode
          }, this.renderDrawer(renderedContent));
        } else {
          return /*#__PURE__*/React.createElement(Hidden, null, renderedContent);
        }
      }

      return null;
    }
  }]);

  return Drawer;
}(React.Component);

_defineProperty(Drawer, "defaultProps", {
  animate: true,
  closeable: true,
  isOpen: false,
  overrides: {},
  size: SIZE.default,
  anchor: ANCHOR.right,
  showBackdrop: true,
  autoFocus: true,
  renderAll: false
});

export default Drawer;