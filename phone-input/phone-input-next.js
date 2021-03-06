function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React, { useRef } from 'react';
import { COUNTRIES } from './constants.js';
import CountryPicker from './country-picker.js';
import defaultProps from './default-props.js';
import { StyledPhoneInputRoot, StyledDialCode } from './styled-components.js';
import { Input as DefaultInput } from '../input/index.js';
import { getOverrides, mergeOverrides } from '../helpers/overrides.js';
PhoneInputNext.defaultProps = _objectSpread(_objectSpread({}, defaultProps), {}, {
  countries: COUNTRIES,
  clearable: true
});
export default function PhoneInputNext(props) {
  var ariaLabel = props['aria-label'],
      ariaLabelledBy = props['aria-labelledby'],
      ariaDescribedBy = props['aria-describedby'],
      clearable = props.clearable,
      countries = props.countries,
      country = props.country,
      disabled = props.disabled,
      error = props.error,
      id = props.id,
      mapIsoToLabel = props.mapIsoToLabel,
      maxDropdownHeight = props.maxDropdownHeight,
      maxDropdownWidth = props.maxDropdownWidth,
      name = props.name,
      onTextChange = props.onTextChange,
      onCountryChange = props.onCountryChange,
      overrides = props.overrides,
      placeholder = props.placeholder,
      positive = props.positive,
      required = props.required,
      size = props.size,
      text = props.text,
      restProps = _objectWithoutProperties(props, ["aria-label", "aria-labelledby", "aria-describedby", "clearable", "countries", "country", "disabled", "error", "id", "mapIsoToLabel", "maxDropdownHeight", "maxDropdownWidth", "name", "onTextChange", "onCountryChange", "overrides", "placeholder", "positive", "required", "size", "text"]);

  var inputRef = useRef(null);
  var baseDialCodeOverride = {
    component: StyledDialCode,
    style: function style(_ref) {
      var _ref$$theme = _ref.$theme,
          direction = _ref$$theme.direction,
          sizing = _ref$$theme.sizing;
      var marginDir = direction === 'rtl' ? 'marginRight' : 'marginLeft';
      return _defineProperty({}, marginDir, sizing.scale600);
    },
    props: {
      children: country.dialCode
    }
  };
  var mergedDialCodeOverride = mergeOverrides({
    DialCode: baseDialCodeOverride
  }, {
    DialCode: overrides.DialCode || {}
  });
  var baseOverrides = {
    Input: {
      style: function style(_ref3) {
        var _ref3$$theme = _ref3.$theme,
            direction = _ref3$$theme.direction,
            sizing = _ref3$$theme.sizing;
        var paddingDir = direction === 'rtl' ? 'paddingRight' : 'paddingLeft';
        return _defineProperty({}, paddingDir, sizing.scale100);
      }
    },
    Before: mergedDialCodeOverride.DialCode
  };

  var _getOverrides = getOverrides(overrides.Root, StyledPhoneInputRoot),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      Root = _getOverrides2[0],
      rootProps = _getOverrides2[1];

  var _getOverrides3 = getOverrides(overrides.Input, DefaultInput),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      Input = _getOverrides4[0],
      inputProps = _getOverrides4[1]; // $FlowFixMe


  inputProps.overrides = mergeOverrides(baseOverrides, inputProps.overrides);
  return /*#__PURE__*/React.createElement(Root, _extends({}, rootProps, {
    "data-baseweb": "phone-input-next"
  }), /*#__PURE__*/React.createElement(CountryPicker, {
    country: country,
    countries: countries,
    disabled: disabled,
    error: error,
    mapIsoToLabel: mapIsoToLabel,
    maxDropdownHeight: maxDropdownHeight,
    maxDropdownWidth: maxDropdownWidth,
    onCountryChange: onCountryChange,
    overrides: overrides,
    positive: positive,
    required: required,
    size: size
  }), /*#__PURE__*/React.createElement(Input, _extends({
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
    autoComplete: "tel-national",
    "data-baseweb": "phone-input",
    disabled: disabled,
    error: error,
    id: id,
    inputMode: "tel",
    inputRef: inputRef,
    name: name,
    onChange: onTextChange,
    positive: positive,
    placeholder: placeholder,
    size: size,
    type: "text",
    value: text,
    clearable: clearable
  }, restProps, inputProps)));
}