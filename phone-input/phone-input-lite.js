function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React, { useRef } from 'react';
import { Input as DefaultInput } from '../input/index.js';
import CountrySelect from './country-select.js';
import { getOverrides, mergeOverrides } from '../helpers/overrides.js';
import defaultProps from './default-props.js';

var country = defaultProps.country,
    lightDefaultProps = _objectWithoutProperties(defaultProps, ["country"]);

PhoneInputLite.defaultProps = lightDefaultProps;
export default function PhoneInputLite(props) {
  var ariaLabel = props['aria-label'],
      ariaLabelledBy = props['aria-labelledby'],
      ariaDescribedBy = props['aria-describedby'],
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
      restProps = _objectWithoutProperties(props, ["aria-label", "aria-labelledby", "aria-describedby", "countries", "country", "disabled", "error", "id", "mapIsoToLabel", "maxDropdownHeight", "maxDropdownWidth", "name", "onTextChange", "onCountryChange", "overrides", "placeholder", "positive", "required", "size", "text"]);

  var inputRef = useRef(null);
  var baseOverrides = {
    Input: {
      style: function style(_ref) {
        var sizing = _ref.$theme.sizing;
        return {
          paddingLeft: sizing.scale100
        };
      }
    },
    Before: {
      component: CountrySelect,
      props: {
        countries: countries,
        country: country,
        disabled: disabled,
        error: error,
        inputRef: inputRef,
        mapIsoToLabel: mapIsoToLabel,
        maxDropdownHeight: maxDropdownHeight,
        maxDropdownWidth: maxDropdownWidth,
        onCountryChange: onCountryChange,
        overrides: overrides,
        positive: positive,
        required: required,
        size: size
      }
    }
  };

  var _getOverrides = getOverrides(overrides.Input, DefaultInput),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      Input = _getOverrides2[0],
      inputProps = _getOverrides2[1]; // $FlowFixMe


  inputProps.overrides = mergeOverrides(baseOverrides, inputProps.overrides);
  return /*#__PURE__*/React.createElement(Input, _extends({
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
    value: text
  }, restProps, inputProps));
}