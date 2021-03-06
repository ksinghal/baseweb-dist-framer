function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import InputMask from 'react-input-mask';
import Input from './input.js';
import { Input as StyledInput } from './styled-components.js';
var MaskOverride = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var startEnhancer = _ref.startEnhancer,
      endEnhancer = _ref.endEnhancer,
      error = _ref.error,
      positive = _ref.positive,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      value = _ref.value,
      disabled = _ref.disabled,
      restProps = _objectWithoutProperties(_ref, ["startEnhancer", "endEnhancer", "error", "positive", "onChange", "onFocus", "onBlur", "value", "disabled"]);

  return /*#__PURE__*/React.createElement(InputMask, _extends({
    onChange: onChange,
    onFocus: onFocus,
    onBlur: onBlur,
    value: value,
    disabled: disabled
  }, restProps), function (props) {
    return /*#__PURE__*/React.createElement(StyledInput, _extends({
      ref: ref,
      onChange: onChange,
      onFocus: onFocus,
      onBlur: onBlur,
      value: value,
      disabled: disabled
    }, props));
  });
});
export default function MaskedInput(_ref2) {
  var mask = _ref2.mask,
      maskChar = _ref2.maskChar,
      _ref2$overrides = _ref2.overrides;
  _ref2$overrides = _ref2$overrides === void 0 ? {} : _ref2$overrides;

  var _ref2$overrides$Input = _ref2$overrides.Input,
      inputOverride = _ref2$overrides$Input === void 0 ? {} : _ref2$overrides$Input,
      restOverrides = _objectWithoutProperties(_ref2$overrides, ["Input"]),
      restProps = _objectWithoutProperties(_ref2, ["mask", "maskChar", "overrides"]);

  var componentOverride = MaskOverride;
  var propsOverride = {};
  var styleOverride = {};

  if (typeof inputOverride === 'function') {
    componentOverride = inputOverride;
  } else if (_typeof(inputOverride) === 'object') {
    componentOverride = inputOverride.component || componentOverride;
    propsOverride = inputOverride.props || {};
    styleOverride = inputOverride.style || {};
  }

  if (_typeof(propsOverride) === 'object') {
    propsOverride = _objectSpread(_objectSpread({}, propsOverride), {}, {
      mask: propsOverride.mask || mask,
      maskChar: propsOverride.maskChar || maskChar
    });
  }

  var nextOverrides = _objectSpread({
    Input: {
      component: componentOverride,
      props: propsOverride,
      style: styleOverride
    }
  }, restOverrides);

  return /*#__PURE__*/React.createElement(Input, _extends({}, restProps, {
    overrides: nextOverrides
  }));
}
MaskedInput.defaultProps = {
  maskChar: ' '
};