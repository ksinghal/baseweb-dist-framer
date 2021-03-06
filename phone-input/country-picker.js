function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import BaseCountryPicker from './base-country-picker.js';
import { SIZE } from './constants.js';
import { SingleSelect as DefaultSelect } from '../select/index.js';
import { getOverrides, mergeOverrides } from '../helpers/overrides.js';
import defaultProps from './default-props.js';
CountryPicker.defaultProps = {
  disabled: defaultProps.disabled,
  inputRef: {
    current: null
  },
  maxDropdownHeight: defaultProps.maxDropdownHeight,
  maxDropdownWidth: defaultProps.maxDropdownWidth,
  overrides: {},
  size: defaultProps.size,
  error: defaultProps.error,
  positive: defaultProps.positive,
  required: defaultProps.required
};
export default function CountryPicker(props) {
  var overrides = props.overrides;
  var baseSelectOverrides = {
    Root: {
      style: function style(_ref) {
        var _ref2;

        var _ref$$theme = _ref.$theme,
            direction = _ref$$theme.direction,
            sizing = _ref$$theme.sizing;
        var marginDir = direction === 'rtl' ? 'marginLeft' : 'marginRight';
        return _ref2 = {}, _defineProperty(_ref2, marginDir, sizing.scale300), _defineProperty(_ref2, "width", 'auto'), _ref2;
      }
    },
    ControlContainer: {
      style: function style(_ref3) {
        var _sizeToLeftPadding, _sizeToRightPadding, _styleOverride;

        var _ref3$$theme = _ref3.$theme,
            direction = _ref3$$theme.direction,
            sizing = _ref3$$theme.sizing,
            props = _objectWithoutProperties(_ref3, ["$theme"]);

        var sizeToLeftPadding = (_sizeToLeftPadding = {}, _defineProperty(_sizeToLeftPadding, SIZE.mini, '0'), _defineProperty(_sizeToLeftPadding, SIZE.compact, sizing.scale0), _defineProperty(_sizeToLeftPadding, SIZE.default, sizing.scale200), _defineProperty(_sizeToLeftPadding, SIZE.large, sizing.scale400), _sizeToLeftPadding);
        var sizeToRightPadding = (_sizeToRightPadding = {}, _defineProperty(_sizeToRightPadding, SIZE.mini, sizing.scale400), _defineProperty(_sizeToRightPadding, SIZE.compact, sizing.scale500), _defineProperty(_sizeToRightPadding, SIZE.default, sizing.scale600), _defineProperty(_sizeToRightPadding, SIZE.large, sizing.scale700), _sizeToRightPadding);
        var padStartDir = direction === 'rtl' ? 'paddingRight' : 'paddingLeft';
        var padEndDir = direction === 'rtl' ? 'paddingLeft' : 'paddingRight';
        var styleOverride = (_styleOverride = {}, _defineProperty(_styleOverride, padStartDir, sizeToLeftPadding[props.$size || SIZE.default]), _defineProperty(_styleOverride, padEndDir, sizeToRightPadding[props.$size || SIZE.default]), _styleOverride); // do not add positive and error color borders when not focused

        if (!props.$isFocused && !props.$isPseudoFocused) {
          return _objectSpread(_objectSpread({}, styleOverride), {}, {
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderTopColor: 'transparent',
            borderBottomColor: 'transparent'
          });
        }

        return styleOverride;
      }
    }
  };

  var _getOverrides = getOverrides(overrides.CountrySelect, DefaultSelect),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      Select = _getOverrides2[0],
      selectProps = _getOverrides2[1]; // $FlowFixMe


  var selectOverrides = mergeOverrides(baseSelectOverrides, {
    Dropdown: overrides.CountrySelectDropdown,
    DropdownListItem: overrides.CountrySelectDropdownListItem
  }); // $FlowFixMe

  selectProps.overrides = mergeOverrides(selectOverrides, // $FlowFixMe
  selectProps.overrides);
  var baseOverrides = {
    FlagContainer: {
      style: function style(_ref4) {
        var _sizeToMargin;

        var _ref4$$theme = _ref4.$theme,
            direction = _ref4$$theme.direction,
            sizing = _ref4$$theme.sizing,
            props = _objectWithoutProperties(_ref4, ["$theme"]);

        var sizeToMargin = (_sizeToMargin = {}, _defineProperty(_sizeToMargin, SIZE.mini, sizing.scale200), _defineProperty(_sizeToMargin, SIZE.compact, sizing.scale300), _defineProperty(_sizeToMargin, SIZE.default, sizing.scale400), _defineProperty(_sizeToMargin, SIZE.large, sizing.scale500), _sizeToMargin);
        var marginDir = direction === 'rtl' ? 'marginLeft' : 'marginRight';
        return _defineProperty({}, marginDir, sizeToMargin[props.$size || SIZE.default]);
      }
    },
    DialCode: {
      style: function style(_ref6) {
        var _ref6$$theme = _ref6.$theme,
            direction = _ref6$$theme.direction,
            sizing = _ref6$$theme.sizing;
        var marginDir = direction === 'rtl' ? 'marginRight' : 'marginLeft';
        return _defineProperty({}, marginDir, sizing.scale600);
      }
    }
  };
  var mergedOverrides = mergeOverrides(baseOverrides, overrides);
  return /*#__PURE__*/React.createElement(BaseCountryPicker, _extends({}, props, {
    overrides: _objectSpread(_objectSpread({}, mergedOverrides), {}, {
      CountrySelect: {
        component: Select,
        props: selectProps
      }
    })
  }));
}