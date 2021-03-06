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
import * as React from 'react';
import { getOverrides } from '../helpers/overrides.js';
import { Root as StyledRoot, Label as StyledLabel, Input as StyledInput, RadioMarkInner as StyledRadioMarkInner, RadioMarkOuter as StyledRadioMarkOuter, Description as StyledDescription } from './styled-components.js';

function isLabelTopLeft(labelPlacement) {
  return labelPlacement === 'top' || labelPlacement === 'left';
}

function isLabelBottomRight(labelPlacement) {
  return labelPlacement === 'bottom' || labelPlacement === 'right';
}

var stopPropagation = function stopPropagation(e) {
  return e.stopPropagation();
};

var Radio = /*#__PURE__*/function (_React$Component) {
  _inherits(Radio, _React$Component);

  var _super = _createSuper(Radio);

  function Radio() {
    var _this;

    _classCallCheck(this, Radio);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isActive: false,
      isHovered: false
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseEnter", function (e) {
      _this.setState({
        isHovered: true
      });

      _this.props.onMouseEnter && _this.props.onMouseEnter(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function (e) {
      _this.setState({
        isHovered: false
      });

      _this.props.onMouseLeave && _this.props.onMouseLeave(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (e) {
      _this.setState({
        isActive: true
      });

      _this.props.onMouseDown && _this.props.onMouseDown(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function (e) {
      _this.setState({
        isActive: false
      });

      _this.props.onMouseUp && _this.props.onMouseUp(e);
    });

    return _this;
  }

  _createClass(Radio, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoFocus && this.props.inputRef.current) {
        this.props.inputRef.current.focus();
      }

      if (process.env.NODE_ENV !== "production" && this.props.isError) {
        console.warn('baseui:Radio Property "isError" will be removed in the next major version. Use "error" property instead.');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$overrides = this.props.overrides,
          overrides = _this$props$overrides === void 0 ? {} : _this$props$overrides;

      var _getOverrides = getOverrides(overrides.Root, StyledRoot),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          Root = _getOverrides2[0],
          rootProps = _getOverrides2[1];

      var _getOverrides3 = getOverrides(overrides.Label, StyledLabel),
          _getOverrides4 = _slicedToArray(_getOverrides3, 2),
          Label = _getOverrides4[0],
          labelProps = _getOverrides4[1];

      var _getOverrides5 = getOverrides(overrides.Input, StyledInput),
          _getOverrides6 = _slicedToArray(_getOverrides5, 2),
          Input = _getOverrides6[0],
          inputProps = _getOverrides6[1];

      var _getOverrides7 = getOverrides(overrides.Description, StyledDescription),
          _getOverrides8 = _slicedToArray(_getOverrides7, 2),
          Description = _getOverrides8[0],
          descriptionProps = _getOverrides8[1];

      var _getOverrides9 = getOverrides(overrides.RadioMarkInner, StyledRadioMarkInner),
          _getOverrides10 = _slicedToArray(_getOverrides9, 2),
          RadioMarkInner = _getOverrides10[0],
          radioMarkInnerProps = _getOverrides10[1];

      var _getOverrides11 = getOverrides(overrides.RadioMarkOuter, StyledRadioMarkOuter),
          _getOverrides12 = _slicedToArray(_getOverrides11, 2),
          RadioMarkOuter = _getOverrides12[0],
          radioMarkOuterProps = _getOverrides12[1];

      var sharedProps = {
        $align: this.props.align,
        $checked: this.props.checked,
        $disabled: this.props.disabled,
        $hasDescription: !!this.props.description,
        $isActive: this.state.isActive,
        $isError: this.props.isError,
        $error: this.props.error,
        $isFocused: this.props.isFocused,
        $isFocusVisible: this.props.isFocused && this.props.isFocusVisible,
        $isHovered: this.state.isHovered,
        $labelPlacement: this.props.labelPlacement,
        $required: this.props.required,
        $value: this.props.value
      };
      var label = /*#__PURE__*/React.createElement(Label, _extends({}, sharedProps, labelProps), this.props.containsInteractiveElement ?
      /*#__PURE__*/
      // Prevents the event from bubbling up to the label and moving focus to the radio button
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      React.createElement("div", {
        onClick: function onClick(e) {
          return e.preventDefault();
        }
      }, this.props.children) : this.props.children);
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Root, _extends({
        "data-baseweb": "radio",
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp
      }, sharedProps, rootProps), isLabelTopLeft(this.props.labelPlacement) && label, /*#__PURE__*/React.createElement(RadioMarkOuter, _extends({}, sharedProps, radioMarkOuterProps), /*#__PURE__*/React.createElement(RadioMarkInner, _extends({}, sharedProps, radioMarkInnerProps))), /*#__PURE__*/React.createElement(Input, _extends({
        "aria-invalid": this.props.error || this.props.isError || null,
        checked: this.props.checked,
        disabled: this.props.disabled,
        name: this.props.name,
        onBlur: this.props.onBlur,
        onFocus: this.props.onFocus // Prevent a second click event from firing when label is clicked.
        // See https://github.com/uber/baseweb/issues/3847 & https://github.com/uber/baseweb/issues/4033
        ,
        onClick: stopPropagation,
        onChange: this.props.onChange,
        ref: this.props.inputRef,
        required: this.props.required,
        tabIndex: this.props.tabIndex,
        type: "radio",
        value: this.props.value
      }, sharedProps, inputProps)), isLabelBottomRight(this.props.labelPlacement) && label), !!this.props.description && /*#__PURE__*/React.createElement(Description, _extends({}, sharedProps, descriptionProps), this.props.description));
    }
  }]);

  return Radio;
}(React.Component);

_defineProperty(Radio, "defaultProps", {
  overrides: {},
  containsInteractiveElement: false,
  checked: false,
  disabled: false,
  autoFocus: false,
  inputRef: /*#__PURE__*/React.createRef(),
  align: 'vertical',
  isError: false,
  error: false,
  onChange: function onChange() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  onMouseDown: function onMouseDown() {},
  onMouseUp: function onMouseUp() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {}
});

export default Radio;