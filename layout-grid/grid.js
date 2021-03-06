function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides.js';
import { STYLE, STYLE_VALUES } from './constants.js';
import { StyledGrid as DefaultStyledGrid, StyledGridWrapper as DefaultStyledGridWrapper } from './styled-components.js';
export var GridContext = /*#__PURE__*/React.createContext({});
export default function Grid(_ref) {
  var align = _ref.align,
      behavior = _ref.behavior,
      children = _ref.children,
      gridColumns = _ref.gridColumns,
      gridGaps = _ref.gridGaps,
      gridGutters = _ref.gridGutters,
      gridMargins = _ref.gridMargins,
      gridMaxWidth = _ref.gridMaxWidth,
      _ref$gridStyle = _ref.gridStyle,
      gridStyle = _ref$gridStyle === void 0 ? STYLE.default : _ref$gridStyle,
      gridUnit = _ref.gridUnit,
      _ref$overrides = _ref.overrides,
      overrides = _ref$overrides === void 0 ? {} : _ref$overrides;

  var _getOverrides = getOverrides(overrides.Grid, DefaultStyledGrid),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      StyledGrid = _getOverrides2[0],
      overrideProps = _getOverrides2[1];

  var _getOverrides3 = getOverrides(overrides.GridWrapper, DefaultStyledGridWrapper),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      StyledGridWrapper = _getOverrides4[0],
      wrapperProps = _getOverrides4[1];

  var presetStyleValues = STYLE_VALUES[gridStyle];
  var gridStyleValues = presetStyleValues ? {
    $gridGutters: presetStyleValues.gutters,
    $gridMargins: presetStyleValues.margins,
    $gridMaxWidth: presetStyleValues.maxWidth,
    $gridUnit: presetStyleValues.unit
  } : {};
  var gridContextStyleValues = presetStyleValues && {
    gridColumns: presetStyleValues.columns,
    gridGaps: presetStyleValues.gaps,
    gridGutters: presetStyleValues.gutters,
    gridUnit: presetStyleValues.unit
  };
  return /*#__PURE__*/React.createElement(StyledGridWrapper, _extends({
    $behavior: behavior,
    $gridMargins: gridMargins != null ? gridMargins : gridStyleValues.$gridMargins,
    $gridMaxWidth: gridMaxWidth != null ? gridMaxWidth : gridStyleValues.$gridMaxWidth,
    $gridUnit: gridUnit != null ? gridUnit : gridStyleValues.$gridUnit
  }, wrapperProps), /*#__PURE__*/React.createElement(StyledGrid, _extends({
    $align: align,
    $behavior: behavior,
    $gridGutters: gridGutters != null ? gridGutters : gridStyleValues.$gridGutters,
    $gridMargins: gridMargins != null ? gridMargins : gridStyleValues.$gridMargins,
    $gridMaxWidth: gridMaxWidth != null ? gridMaxWidth : gridStyleValues.$gridMaxWidth,
    $gridUnit: gridUnit != null ? gridUnit : gridStyleValues.$gridUnit
  }, overrideProps), /*#__PURE__*/React.createElement(GridContext.Provider, {
    value: _objectSpread({
      gridColumns: gridColumns,
      gridGaps: gridGaps,
      gridGutters: gridGutters,
      gridUnit: gridUnit
    }, gridContextStyleValues)
  }, children)));
}