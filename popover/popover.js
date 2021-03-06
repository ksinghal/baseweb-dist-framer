function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

/* eslint-disable react/no-find-dom-node */

/* eslint-disable cup/no-undef */
import * as React from 'react';
import FocusLock, { MoveFocusInside } from 'react-focus-lock';
import { getOverride, getOverrideProps } from '../helpers/overrides.js';
import { ACCESSIBILITY_TYPE, PLACEMENT, TRIGGER_TYPE, ANIMATE_OUT_TIME, ANIMATE_IN_TIME, POPOVER_MARGIN } from './constants.js';
import { Layer, TetherBehavior } from '../layer/index.js';
import { Arrow as StyledArrow, Body as StyledBody, Inner as StyledInner, Hidden } from './styled-components.js';
import { fromPopperPlacement } from './utils.js';
import defaultProps from './default-props.js';
import { useUID } from 'react-uid';

var PopoverInner = /*#__PURE__*/function (_React$Component) {
  _inherits(PopoverInner, _React$Component);

  var _super = _createSuper(PopoverInner);

  function PopoverInner() {
    var _this;

    _classCallCheck(this, PopoverInner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "animateInTimer", void 0);

    _defineProperty(_assertThisInitialized(_this), "animateOutTimer", void 0);

    _defineProperty(_assertThisInitialized(_this), "animateOutCompleteTimer", void 0);

    _defineProperty(_assertThisInitialized(_this), "onMouseEnterTimer", void 0);

    _defineProperty(_assertThisInitialized(_this), "onMouseLeaveTimer", void 0);

    _defineProperty(_assertThisInitialized(_this), "anchorRef", /*#__PURE__*/React.createRef());

    _defineProperty(_assertThisInitialized(_this), "popperRef", /*#__PURE__*/React.createRef());

    _defineProperty(_assertThisInitialized(_this), "arrowRef", /*#__PURE__*/React.createRef());

    _defineProperty(_assertThisInitialized(_this), "state", _this.getDefaultState(_this.props));

    _defineProperty(_assertThisInitialized(_this), "animateIn", function () {
      if (_this.props.isOpen) {
        _this.setState({
          isAnimating: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "animateOut", function () {
      if (!_this.props.isOpen) {
        _this.setState({
          isAnimating: true
        }); // Remove the popover from the DOM after animation finishes


        _this.animateOutCompleteTimer = setTimeout(function () {
          _this.setState({
            isAnimating: false,
            // Reset to ideal placement specified in props
            placement: _this.props.placement
          });
        }, _this.props.animateOutTime || ANIMATE_OUT_TIME);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onAnchorClick", function (e) {
      if (_this.props.onClick) {
        _this.props.onClick(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onAnchorMouseEnter", function (e) {
      // First clear any existing close timers, this ensures that the user can
      // move their mouse from the popover back to anchor without it hiding
      if (_this.onMouseLeaveTimer) {
        clearTimeout(_this.onMouseLeaveTimer);
      }

      _this.triggerOnMouseEnterWithDelay(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onAnchorMouseLeave", function (e) {
      // Clear any existing open timer, otherwise popover could be stuck open
      if (_this.onMouseEnterTimer) {
        clearTimeout(_this.onMouseEnterTimer);
      }

      _this.triggerOnMouseLeaveWithDelay(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onPopoverMouseEnter", function () {
      if (_this.onMouseLeaveTimer) {
        clearTimeout(_this.onMouseLeaveTimer);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPopoverMouseLeave", function (e) {
      _this.triggerOnMouseLeaveWithDelay(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onPopperUpdate", function (normalizedOffsets, data) {
      var placement = fromPopperPlacement(data.placement) || PLACEMENT.top;

      _this.setState({
        arrowOffset: normalizedOffsets.arrow,
        popoverOffset: normalizedOffsets.popper,
        placement: placement
      }); // Now that element has been positioned, we can animate it in


      _this.animateInTimer = setTimeout(_this.animateIn, ANIMATE_IN_TIME);
      return data;
    });

    _defineProperty(_assertThisInitialized(_this), "triggerOnMouseLeave", function (e) {
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "triggerOnMouseEnter", function (e) {
      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onDocumentClick", function (evt) {
      //$FlowFixMe
      var target = evt.composedPath ? evt.composedPath()[0] : evt.target;
      var popper = _this.popperRef.current;
      var anchor = _this.anchorRef.current; // Ignore document click if it came from popover or anchor

      if (!popper || popper === target || popper.contains(target)) {
        return;
      }

      if (!anchor || anchor === target || anchor.contains(target)) {
        return;
      }

      if (_this.props.onClickOutside) {
        _this.props.onClickOutside(evt);
      }
    });

    return _this;
  }

  _createClass(PopoverInner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        isMounted: true
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      this.init(prevProps, prevState);

      if (this.props.autoFocus && !this.state.autoFocusAfterPositioning && this.popperRef.current !== null && this.popperRef.current.getBoundingClientRect().top > 0) {
        this.setState({
          autoFocusAfterPositioning: true
        });
      }

      if (process.env.NODE_ENV !== "production") {
        if (!this.anchorRef.current) {
          // eslint-disable-next-line no-console
          console.warn("[baseui][Popover] ref has not been passed to the Popper's anchor element.\n              See how to pass the ref to an anchor element in the Popover example\n              http://baseui.design/components/popover#anchor-ref-handling-example");
        }
      }
    }
  }, {
    key: "init",
    value: function init(prevProps, prevState) {
      if (this.props.isOpen !== prevProps.isOpen || this.state.isMounted !== prevState.isMounted || this.state.isLayerMounted !== prevState.isLayerMounted) {
        // Transition from closed to open.
        if (this.props.isOpen && this.state.isLayerMounted) {
          // Clear any existing timers (like previous animateOutCompleteTimer)
          this.clearTimers();
          return;
        } // Transition from open to closed.


        if (!this.props.isOpen && prevProps.isOpen) {
          this.animateOutTimer = setTimeout(this.animateOut, 20);
          return;
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearTimers();
    }
  }, {
    key: "getDefaultState",
    value: function getDefaultState(props) {
      return {
        isAnimating: false,
        arrowOffset: {
          left: 0,
          top: 0
        },
        popoverOffset: {
          left: 0,
          top: 0
        },
        placement: props.placement,
        isMounted: false,
        isLayerMounted: false,
        autoFocusAfterPositioning: false
      };
    }
  }, {
    key: "clearTimers",
    value: function clearTimers() {
      [this.animateInTimer, this.animateOutTimer, this.animateOutCompleteTimer, this.onMouseEnterTimer, this.onMouseLeaveTimer].forEach(function (timerId) {
        if (timerId) {
          clearTimeout(timerId);
        }
      });
    }
  }, {
    key: "triggerOnMouseLeaveWithDelay",
    value: function triggerOnMouseLeaveWithDelay(e) {
      var _this2 = this;

      var onMouseLeaveDelay = this.props.onMouseLeaveDelay;

      if (onMouseLeaveDelay) {
        this.onMouseLeaveTimer = setTimeout(function () {
          return _this2.triggerOnMouseLeave(e);
        }, onMouseLeaveDelay);
        return;
      }

      this.triggerOnMouseLeave(e);
    }
  }, {
    key: "triggerOnMouseEnterWithDelay",
    value: function triggerOnMouseEnterWithDelay(e) {
      var _this3 = this;

      var onMouseEnterDelay = this.props.onMouseEnterDelay;

      if (onMouseEnterDelay) {
        this.onMouseEnterTimer = setTimeout(function () {
          return _this3.triggerOnMouseEnter(e);
        }, onMouseEnterDelay);
        return;
      }

      this.triggerOnMouseEnter(e);
    }
  }, {
    key: "isClickTrigger",
    value: function isClickTrigger() {
      return this.props.triggerType === TRIGGER_TYPE.click;
    }
  }, {
    key: "isHoverTrigger",
    value: function isHoverTrigger() {
      return this.props.triggerType === TRIGGER_TYPE.hover;
    }
  }, {
    key: "isAccessibilityTypeMenu",
    value: function isAccessibilityTypeMenu() {
      return this.props.accessibilityType === ACCESSIBILITY_TYPE.menu;
    }
  }, {
    key: "isAccessibilityTypeTooltip",
    value: function isAccessibilityTypeTooltip() {
      return this.props.accessibilityType === ACCESSIBILITY_TYPE.tooltip;
    }
  }, {
    key: "getAnchorIdAttr",
    value: function getAnchorIdAttr() {
      var popoverId = this.getPopoverIdAttr();
      return popoverId ? "".concat(popoverId, "__anchor") : null;
    }
  }, {
    key: "getPopoverIdAttr",
    value: function getPopoverIdAttr() {
      return this.props.id || null;
    }
  }, {
    key: "getAnchorProps",
    value: function getAnchorProps() {
      var isOpen = this.props.isOpen;
      var anchorProps = {
        'aria-haspopup': 'true',
        'aria-expanded': isOpen ? 'true' : 'false',
        key: 'popover-anchor',
        ref: this.anchorRef
      };
      var popoverId = this.getPopoverIdAttr();

      if (this.isAccessibilityTypeMenu()) {
        var relationAttr = this.isClickTrigger() ? 'aria-controls' : 'aria-owns';
        anchorProps[relationAttr] = isOpen ? popoverId : null;
      } else if (this.isAccessibilityTypeTooltip()) {
        anchorProps.id = this.getAnchorIdAttr();
        anchorProps['aria-describedby'] = isOpen ? popoverId : null;
      }

      if (this.isHoverTrigger()) {
        anchorProps.onMouseEnter = this.onAnchorMouseEnter;
        anchorProps.onMouseLeave = this.onAnchorMouseLeave; // Make it focusable too

        anchorProps.onBlur = this.props.onBlur;
        anchorProps.onFocus = this.props.onFocus;
      } else {
        anchorProps.onClick = this.onAnchorClick;
      }

      return anchorProps;
    }
  }, {
    key: "getPopoverBodyProps",
    value: function getPopoverBodyProps() {
      var bodyProps = {};
      var popoverId = this.getPopoverIdAttr();

      if (this.isAccessibilityTypeMenu()) {
        bodyProps.id = popoverId;
      } else if (this.isAccessibilityTypeTooltip()) {
        bodyProps.id = popoverId;
        bodyProps.role = 'tooltip';
      }

      if (this.isHoverTrigger()) {
        bodyProps.onMouseEnter = this.onPopoverMouseEnter;
        bodyProps.onMouseLeave = this.onPopoverMouseLeave;
      }

      return bodyProps;
    }
  }, {
    key: "getSharedProps",
    value: function getSharedProps() {
      var _this$props = this.props,
          isOpen = _this$props.isOpen,
          showArrow = _this$props.showArrow,
          _this$props$popoverMa = _this$props.popoverMargin,
          popoverMargin = _this$props$popoverMa === void 0 ? POPOVER_MARGIN : _this$props$popoverMa;
      var _this$state = this.state,
          isAnimating = _this$state.isAnimating,
          arrowOffset = _this$state.arrowOffset,
          popoverOffset = _this$state.popoverOffset,
          placement = _this$state.placement;
      return {
        $showArrow: !!showArrow,
        $arrowOffset: arrowOffset,
        $popoverOffset: popoverOffset,
        $placement: placement,
        $isAnimating: isAnimating,
        $isOpen: isOpen,
        $popoverMargin: popoverMargin,
        $isHoverTrigger: this.isHoverTrigger()
      };
    }
  }, {
    key: "getAnchorFromChildren",
    value: function getAnchorFromChildren() {
      var children = this.props.children;
      var childArray = React.Children.toArray(children);

      if (childArray.length !== 1) {
        // eslint-disable-next-line no-console
        console.error("[baseui] Exactly 1 child must be passed to Popover/Tooltip, found ".concat(childArray.length, " children"));
      }

      return childArray[0];
    }
  }, {
    key: "renderAnchor",
    value: function renderAnchor() {
      var anchor = this.getAnchorFromChildren();

      if (!anchor) {
        return null;
      }

      var isValidElement = /*#__PURE__*/React.isValidElement(anchor);
      var anchorProps = this.getAnchorProps();

      if (_typeof(anchor) === 'object' && isValidElement) {
        return /*#__PURE__*/React.cloneElement(anchor, anchorProps);
      }

      return /*#__PURE__*/React.createElement("span", anchorProps, anchor);
    }
  }, {
    key: "renderPopover",
    value: function renderPopover(renderedContent) {
      var _this$props2 = this.props,
          showArrow = _this$props2.showArrow,
          _this$props2$override = _this$props2.overrides,
          overrides = _this$props2$override === void 0 ? {} : _this$props2$override;
      var ArrowOverride = overrides.Arrow,
          BodyOverride = overrides.Body,
          InnerOverride = overrides.Inner;
      var Arrow = getOverride(ArrowOverride) || StyledArrow;
      var Body = getOverride(BodyOverride) || StyledBody;
      var Inner = getOverride(InnerOverride) || StyledInner;
      var sharedProps = this.getSharedProps();
      var bodyProps = this.getPopoverBodyProps();
      return /*#__PURE__*/React.createElement(Body, _extends({
        key: "popover-body",
        ref: this.popperRef,
        "data-baseweb": this.props['data-baseweb'] || 'popover'
      }, bodyProps, sharedProps, getOverrideProps(BodyOverride)), showArrow ? /*#__PURE__*/React.createElement(Arrow, _extends({
        key: "popover-arrow",
        ref: this.arrowRef
      }, sharedProps, getOverrideProps(ArrowOverride))) : null, /*#__PURE__*/React.createElement(Inner, _extends({}, sharedProps, getOverrideProps(InnerOverride)), renderedContent));
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var content = this.props.content;
      return typeof content === 'function' ? content() : content;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var mountedAndOpen = this.state.isMounted && this.props.isOpen;
      var rendered = [this.renderAnchor()];
      var renderedContent = mountedAndOpen || this.props.renderAll ? this.renderContent() : null;
      var defaultPopperOptions = {
        modifiers: {
          preventOverflow: {
            enabled: !this.props.ignoreBoundary,
            padding: 0
          }
        }
      }; // Only render popover on the browser (portals aren't supported server-side)

      if (renderedContent) {
        if (mountedAndOpen) {
          rendered.push( /*#__PURE__*/React.createElement(Layer, {
            key: "new-layer",
            mountNode: this.props.mountNode,
            onEscape: this.props.onEsc,
            onDocumentClick: this.isHoverTrigger() ? undefined : this.onDocumentClick,
            isHoverLayer: this.isHoverTrigger(),
            onMount: function onMount() {
              return _this4.setState({
                isLayerMounted: true
              });
            },
            onUnmount: function onUnmount() {
              return _this4.setState({
                isLayerMounted: false
              });
            }
          }, /*#__PURE__*/React.createElement(TetherBehavior, {
            anchorRef: this.anchorRef.current,
            arrowRef: this.arrowRef.current,
            popperRef: this.popperRef.current // Remove the `ignoreBoundary` prop in the next major version
            // and have it replaced with the TetherBehavior props overrides
            ,
            popperOptions: _objectSpread(_objectSpread({}, defaultPopperOptions), this.props.popperOptions),
            onPopperUpdate: this.onPopperUpdate,
            placement: this.state.placement
          }, /*#__PURE__*/React.createElement(FocusLock, {
            disabled: !this.props.focusLock,
            noFocusGuards: false // see popover-focus-loop.scenario.js for why hover cannot return focus
            ,
            returnFocus: this.props.returnFocus && !this.isHoverTrigger(),
            autoFocus: this.state.autoFocusAfterPositioning
          }, !this.props.focusLock && this.state.autoFocusAfterPositioning ? /*#__PURE__*/React.createElement(MoveFocusInside, null, this.renderPopover(renderedContent)) : this.renderPopover(renderedContent)))));
        } else {
          rendered.push( /*#__PURE__*/React.createElement(Hidden, {
            key: "hidden-layer"
          }, renderedContent));
        }
      }

      return rendered;
    }
  }]);

  return PopoverInner;
}(React.Component); // Remove when Popover is converted to a functional component.


_defineProperty(PopoverInner, "defaultProps", defaultProps);

var Popover = function Popover(props) {
  var innerRef = props.innerRef;
  return /*#__PURE__*/React.createElement(PopoverInner, _extends({
    id: props.id || useUID(),
    ref: innerRef
  }, props));
};

Popover.defaultProps = defaultProps;
export default Popover;
/* eslint-enable react/no-find-dom-node */