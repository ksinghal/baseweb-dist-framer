function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
import React from 'react'; // needs to be removed from here

import { COUNTRIES, STATE_CHANGE_TYPE } from './constants.js';
import defaultProps from './default-props.js';

var defaultStateReducer = function defaultStateReducer(type, nextState) {
  return nextState;
};

var StatefulPhoneInputContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(StatefulPhoneInputContainer, _React$Component);

  var _super = _createSuper(StatefulPhoneInputContainer);

  function StatefulPhoneInputContainer() {
    var _this;

    _classCallCheck(this, StatefulPhoneInputContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", _objectSpread({
      text: '',
      country: COUNTRIES.US
    }, _this.props.initialState));

    _defineProperty(_assertThisInitialized(_this), "internalSetState", function (type, nextState) {
      _this.setState(_this.props.stateReducer(type, nextState, _this.state));
    });

    _defineProperty(_assertThisInitialized(_this), "onTextChange", function (event) {
      _this.props.onTextChange(event);

      _this.internalSetState(STATE_CHANGE_TYPE.textChange, {
        text: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onCountryChange", function (event) {
      _this.props.onCountryChange(event);

      if (event.option && event.option.id) {
        _this.internalSetState(STATE_CHANGE_TYPE.countryChange, {
          country: COUNTRIES[event.option.id]
        });
      }
    });

    return _this;
  }

  _createClass(StatefulPhoneInputContainer, [{
    key: "render",
    value: function render() {
      return this.props.children(_objectSpread(_objectSpread({}, defaultProps), {}, {
        'aria-label': this.props['aria-label'],
        'aria-labelledby': this.props['aria-labelledby'],
        'aria-describedby': this.props['aria-describedby'],
        disabled: this.props.disabled,
        error: this.props.error,
        id: this.props.id,
        maxDropdownHeight: this.props.maxDropdownHeight,
        maxDropdownWidth: this.props.maxDropdownWidth,
        mapIsoToLabel: this.props.mapIsoToLabel,
        name: this.props.name,
        overrides: this.props.overrides,
        placeholder: this.props.placeholder,
        positive: this.props.positive,
        required: this.props.required,
        size: this.props.size,
        clearable: this.props.clearable,
        country: this.state.country,
        text: this.state.text,
        onTextChange: this.onTextChange,
        onCountryChange: this.onCountryChange
      }));
    }
  }]);

  return StatefulPhoneInputContainer;
}(React.Component);

_defineProperty(StatefulPhoneInputContainer, "defaultProps", {
  initialState: {
    text: defaultProps.text,
    country: defaultProps.country
  },
  onTextChange: defaultProps.onTextChange,
  onCountryChange: defaultProps.onTextChange,
  stateReducer: defaultStateReducer,
  overrides: {}
});

export { StatefulPhoneInputContainer as default };