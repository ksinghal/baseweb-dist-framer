function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
import * as React from 'react';
import { STATE_TYPE } from './constants.js';

var defaultStateReducer = function defaultStateReducer(type, nextState) {
  return nextState;
};

var StatefulCheckboxContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(StatefulCheckboxContainer, _React$Component);

  var _super = _createSuper(StatefulCheckboxContainer);

  function StatefulCheckboxContainer(props) {
    var _this;

    _classCallCheck(this, StatefulCheckboxContainer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      _this.stateReducer(STATE_TYPE.change, e);

      var onChange = _this.props.onChange;
      onChange && onChange(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseEnter", function (e) {
      var onMouseEnter = _this.props.onMouseEnter;
      onMouseEnter && onMouseEnter(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function (e) {
      var onMouseLeave = _this.props.onMouseLeave;
      onMouseLeave && onMouseLeave(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (e) {
      var onFocus = _this.props.onFocus;
      onFocus && onFocus(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (e) {
      var onBlur = _this.props.onBlur;
      onBlur && onBlur(e);
    });

    _defineProperty(_assertThisInitialized(_this), "stateReducer", function (type, e) {
      var nextState = {};
      var stateReducer = _this.props.stateReducer;

      switch (type) {
        case STATE_TYPE.change:
          nextState = {
            checked: e.target.checked
          };
          break;
      }

      var newState = stateReducer(type, nextState, _this.state, e);

      _this.setState(newState);
    });

    var initialState = _this.props.initialState;
    _this.state = _objectSpread({}, initialState);
    return _this;
  }

  _createClass(StatefulCheckboxContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$children = _this$props.children,
          children = _this$props$children === void 0 ? function (childProps) {
        return null;
      } : _this$props$children,
          initialState = _this$props.initialState,
          stateReducer = _this$props.stateReducer,
          restProps = _objectWithoutProperties(_this$props, ["children", "initialState", "stateReducer"]);

      var onChange = this.onChange,
          onMouseEnter = this.onMouseEnter,
          onMouseLeave = this.onMouseLeave,
          onFocus = this.onFocus,
          onBlur = this.onBlur;
      return children(_objectSpread(_objectSpread({}, restProps), {}, {
        checked: this.state.checked,
        isIndeterminate: this.state.isIndeterminate,
        onChange: onChange,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        onFocus: onFocus,
        onBlur: onBlur
      }));
    }
  }]);

  return StatefulCheckboxContainer;
}(React.Component);

_defineProperty(StatefulCheckboxContainer, "defaultProps", {
  initialState: {
    checked: false,
    isIndeterminate: false
  },
  stateReducer: defaultStateReducer,
  onChange: function onChange() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {}
});

export default StatefulCheckboxContainer;