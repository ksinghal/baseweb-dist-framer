function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
import { getMediaQueries } from '../helpers/responsive-helpers.js';
import { BEHAVIOR } from './constants.js';
export var StyledGridWrapper = styled('div', function (_ref) {
  var $theme = _ref.$theme,
      _ref$$behavior = _ref.$behavior,
      $behavior = _ref$$behavior === void 0 ? BEHAVIOR.fixed : _ref$$behavior,
      _ref$$gridMargins = _ref.$gridMargins,
      $gridMargins = _ref$$gridMargins === void 0 ? $theme.grid.margins : _ref$$gridMargins,
      _ref$$gridMaxWidth = _ref.$gridMaxWidth,
      $gridMaxWidth = _ref$$gridMaxWidth === void 0 ? $theme.grid.maxWidth : _ref$$gridMaxWidth,
      _ref$$gridUnit = _ref.$gridUnit,
      $gridUnit = _ref$$gridUnit === void 0 ? $theme.grid.unit : _ref$$gridUnit;
  return {
    margin: 'auto',
    maxWidth: $behavior === BEHAVIOR.fixed ? "".concat($gridMaxWidth + 2 * getResponsiveNumber($gridMargins, Infinity) - 1).concat($gridUnit) : null
  };
});
StyledGridWrapper.displayName = "StyledGridWrapper";
export var StyledGrid = styled('div', function (_ref2) {
  var $theme = _ref2.$theme,
      _ref2$$align = _ref2.$align,
      $align = _ref2$$align === void 0 ? null : _ref2$$align,
      _ref2$$behavior = _ref2.$behavior,
      $behavior = _ref2$$behavior === void 0 ? BEHAVIOR.fixed : _ref2$$behavior,
      _ref2$$gridGutters = _ref2.$gridGutters,
      $gridGutters = _ref2$$gridGutters === void 0 ? $theme.grid.gutters : _ref2$$gridGutters,
      _ref2$$gridMargins = _ref2.$gridMargins,
      $gridMargins = _ref2$$gridMargins === void 0 ? $theme.grid.margins : _ref2$$gridMargins,
      _ref2$$gridMaxWidth = _ref2.$gridMaxWidth,
      $gridMaxWidth = _ref2$$gridMaxWidth === void 0 ? $theme.grid.maxWidth : _ref2$$gridMaxWidth,
      _ref2$$gridUnit = _ref2.$gridUnit,
      $gridUnit = _ref2$$gridUnit === void 0 ? $theme.grid.unit : _ref2$$gridUnit;
  var mediaQueries = getMediaQueries($theme.breakpoints);
  var gridStyles = mediaQueries.reduce(function (acc, cur, idx) {
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, cur, {
      paddingLeft: "".concat(getResponsiveNumber($gridMargins, idx)).concat($gridUnit),
      paddingRight: "".concat(getResponsiveNumber($gridMargins, idx)).concat($gridUnit),
      marginLeft: "-".concat(getResponsiveNumber($gridGutters, idx) / 2).concat($gridUnit),
      marginRight: "-".concat(getResponsiveNumber($gridGutters, idx) / 2).concat($gridUnit),
      alignItems: getResponsiveValue($align, idx)
    }));
  }, {
    paddingLeft: "".concat(getResponsiveNumber($gridMargins, 0)).concat($gridUnit),
    paddingRight: "".concat(getResponsiveNumber($gridMargins, 0)).concat($gridUnit),
    marginLeft: "-".concat(getResponsiveNumber($gridGutters, 0) / 2).concat($gridUnit),
    marginRight: "-".concat(getResponsiveNumber($gridGutters, 0) / 2).concat($gridUnit),
    alignItems: getResponsiveValue($align, 0)
  });
  return _objectSpread({
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: $behavior === BEHAVIOR.fixed ? "".concat($gridMaxWidth + 2 * getResponsiveNumber($gridMargins, Infinity) - 1).concat($gridUnit) : null
  }, gridStyles);
});
StyledGrid.displayName = "StyledGrid";
export var StyledCell = styled('div', function (_ref3) {
  var $theme = _ref3.$theme,
      _ref3$$align = _ref3.$align,
      $align = _ref3$$align === void 0 ? null : _ref3$$align,
      _ref3$$order = _ref3.$order,
      $order = _ref3$$order === void 0 ? null : _ref3$$order,
      _ref3$$gridColumns = _ref3.$gridColumns,
      $gridColumns = _ref3$$gridColumns === void 0 ? $theme.grid.columns : _ref3$$gridColumns,
      _ref3$$gridGaps = _ref3.$gridGaps,
      $gridGaps = _ref3$$gridGaps === void 0 ? $theme.grid.gaps : _ref3$$gridGaps,
      _ref3$$gridGutters = _ref3.$gridGutters,
      $gridGutters = _ref3$$gridGutters === void 0 ? $theme.grid.gutters : _ref3$$gridGutters,
      _ref3$$gridUnit = _ref3.$gridUnit,
      $gridUnit = _ref3$$gridUnit === void 0 ? $theme.grid.unit : _ref3$$gridUnit,
      _ref3$$skip = _ref3.$skip,
      $skip = _ref3$$skip === void 0 ? [0, 0, 0] : _ref3$$skip,
      _ref3$$span = _ref3.$span,
      $span = _ref3$$span === void 0 ? [1, 1, 1] : _ref3$$span;
  var mediaQueries = getMediaQueries($theme.breakpoints);
  var cellStyles = mediaQueries.reduce(function (acc, cur, idx) {
    if (getResponsiveNumber($span, idx) === 0) {
      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, cur, {
        width: '0',
        paddingLeft: '0',
        paddingRight: '0',
        marginLeft: '0',
        marginRight: '0',
        display: 'none'
      }));
    }

    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, cur, {
      display: 'block',
      width: "calc(".concat(100 / getResponsiveNumber($gridColumns, idx) * Math.min(getResponsiveNumber($span, idx), getResponsiveNumber($gridColumns, idx)), "% - ").concat(getResponsiveNumber($gridGutters, idx)).concat($gridUnit, ")"),
      marginLeft: "calc(".concat(100 / getResponsiveNumber($gridColumns, idx) * Math.min(getResponsiveNumber($skip, idx), getResponsiveNumber($gridColumns, idx) - 1), "% + ").concat(getResponsiveNumber($gridGutters, idx) / 2).concat($gridUnit, ")"),
      marginRight: "".concat(getResponsiveNumber($gridGutters, idx) / 2).concat($gridUnit),
      marginBottom: "".concat(getResponsiveNumber($gridGaps, idx)).concat($gridUnit),
      alignSelf: getResponsiveValue($align, idx),
      order: getResponsiveNumber($order, idx)
    }));
  }, {
    width: '100%',
    marginLeft: "".concat(getResponsiveNumber($gridGutters, 0) / 2).concat($gridUnit),
    marginRight: "".concat(getResponsiveNumber($gridGutters, 0) / 2).concat($gridUnit),
    marginBottom: "".concat(getResponsiveNumber($gridGaps, 0)).concat($gridUnit),
    alignSelf: getResponsiveValue($align, 0),
    order: getResponsiveNumber($order, 0)
  });
  return _objectSpread({
    boxSizing: 'border-box'
  }, cellStyles);
});
StyledCell.displayName = "StyledCell";

function getResponsiveNumber(responsive, i) {
  var res = getResponsiveValue(responsive, i);
  return typeof res === 'number' ? res : 0;
}

function getResponsiveValue(responsive, i) {
  if (!responsive) {
    return null;
  }

  if (!Array.isArray(responsive)) {
    return responsive;
  }

  if (typeof responsive[i] === 'undefined') {
    return responsive[responsive.length - 1];
  }

  return responsive[i];
}