function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import Blank from '../icon/blank.js';
import ChevronDown from '../icon/chevron-down.js';
import ChevronUp from '../icon/chevron-up.js';
import { styled, withStyle, expandBorderStyles } from '../styles/index.js';
import { SIZE, DIVIDER } from './constants.js';

function sizeToCellPadding($theme, $size) {
  if ($size === SIZE.compact) {
    return $theme.sizing.scale500;
  } else if ($size === SIZE.spacious) {
    return $theme.sizing.scale800;
  }

  return $theme.sizing.scale600;
}

export var StyledRoot = styled('div', function (_ref) {
  var $theme = _ref.$theme,
      $divider = _ref.$divider;
  return _objectSpread(_objectSpread(_objectSpread({}, $divider === DIVIDER.grid || $divider === DIVIDER.vertical ? expandBorderStyles($theme.borders.border300) : {}), $divider === DIVIDER.horizontal ? {
    borderBottomWidth: $theme.borders.border300.borderWidth,
    borderBottomStyle: $theme.borders.border300.borderStyle,
    borderBottomColor: $theme.borders.border300.borderColor
  } : {}), {}, {
    position: 'relative',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    backgroundColor: $theme.colors.tableBackground,
    // Creates a stacking context so we can use z-index on the StyledTableHeadCell
    // without affecting anything outside of this component.
    transform: 'scale(1)'
  });
});
StyledRoot.displayName = "StyledRoot";
export var StyledTable = styled('table', function (_ref2) {
  var $theme = _ref2.$theme,
      $width = _ref2.$width;
  return {
    borderSpacing: '0',
    boxSizing: 'border-box',
    minWidth: '100%',
    width: $width || null
  };
});
StyledTable.displayName = "StyledTable";
export var StyledTableHead = styled('thead', function (_ref3) {
  var $theme = _ref3.$theme;
  return {};
});
StyledTableHead.displayName = "StyledTableHead";
export var StyledTableHeadRow = styled('tr', function (_ref4) {
  var $theme = _ref4.$theme;
  return {};
});
StyledTableHeadRow.displayName = "StyledTableHeadRow";
export var StyledTableHeadCell = styled('th', function (_ref5) {
  var _notLastChild;

  var $theme = _ref5.$theme,
      $size = _ref5.$size,
      $divider = _ref5.$divider,
      $isNumeric = _ref5.$isNumeric;
  var borderDir = $theme.direction === 'rtl' ? 'Left' : 'Right';
  var borderVertical = $divider === DIVIDER.grid || $divider === DIVIDER.vertical;
  var padding = sizeToCellPadding($theme, $size);
  return _objectSpread(_objectSpread(_objectSpread({}, $theme.typography.font350), {}, {
    position: 'sticky',
    top: 0,
    paddingTop: padding,
    paddingRight: padding,
    paddingBottom: padding,
    paddingLeft: padding,
    backgroundColor: $theme.colors.tableHeadBackgroundColor,
    color: $theme.colors.contentPrimary,
    textAlign: $theme.direction === 'rtl' || $isNumeric ? 'right' : 'left',
    verticalAlign: 'top',
    whiteSpace: 'nowrap',
    zIndex: 1
  }, $divider === DIVIDER.clean ? {} : {
    borderBottomColor: $theme.borders.border300.borderColor,
    borderBottomStyle: $theme.borders.border300.borderStyle,
    borderBottomWidth: $theme.borders.border300.borderWidth
  }), {}, {
    ':not(:last-child)': (_notLastChild = {}, _defineProperty(_notLastChild, "border".concat(borderDir, "Color"), borderVertical ? $theme.borders.border300.borderColor : null), _defineProperty(_notLastChild, "border".concat(borderDir, "Style"), borderVertical ? $theme.borders.border300.borderStyle : null), _defineProperty(_notLastChild, "border".concat(borderDir, "Width"), borderVertical ? $theme.borders.border300.borderWidth : null), _notLastChild)
  });
});
StyledTableHeadCell.displayName = "StyledTableHeadCell";
export var StyledTableHeadCellSortable = withStyle(StyledTableHeadCell, function (_ref6) {
  var $theme = _ref6.$theme,
      $isFocusVisible = _ref6.$isFocusVisible;
  return {
    cursor: 'pointer',
    paddingRight: $theme.sizing.scale1000,
    outline: 'none',
    ':focus': {
      outline: $isFocusVisible ? "3px solid ".concat($theme.colors.accent) : 'none',
      outlineOffset: '-3px'
    },
    ':hover': {
      backgroundColor: $theme.colors.tableStripedBackground
    }
  };
});
StyledTableHeadCellSortable.displayName = "StyledTableHeadCellSortable";
export var StyledSortAscIcon = styled(ChevronUp, function (_ref7) {
  var $theme = _ref7.$theme;
  return {
    position: 'absolute',
    top: '50%',
    right: $theme.sizing.scale500,
    transform: 'translateY(-50%)'
  };
});
StyledSortAscIcon.displayName = "StyledSortAscIcon";
export var StyledSortDescIcon = styled(ChevronDown, function (_ref8) {
  var $theme = _ref8.$theme;
  return {
    position: 'absolute',
    top: '50%',
    right: $theme.sizing.scale500,
    transform: 'translateY(-50%)'
  };
});
StyledSortDescIcon.displayName = "StyledSortDescIcon";
export var StyledSortNoneIcon = styled(Blank, function (_ref9) {
  var $theme = _ref9.$theme;
  return {
    position: 'absolute',
    top: '50%',
    right: $theme.sizing.scale500,
    transform: 'translateY(-50%)'
  };
});
StyledSortNoneIcon.displayName = "StyledSortNoneIcon";
export var StyledTableBody = styled('tbody', function (_ref10) {
  var $theme = _ref10.$theme;
  return {};
});
StyledTableBody.displayName = "StyledTableBody";
export var StyledTableBodyRow = styled('tr', function (_ref11) {
  var $theme = _ref11.$theme;
  return {
    ':hover': {
      backgroundColor: $theme.colors.tableStripedBackground
    }
  };
});
StyledTableBodyRow.displayName = "StyledTableBodyRow";
export var StyledTableBodyCell = styled('td', function (_ref12) {
  var _notLastChild2;

  var $theme = _ref12.$theme,
      $size = _ref12.$size,
      $divider = _ref12.$divider,
      $isNumeric = _ref12.$isNumeric,
      $isLastRow = _ref12.$isLastRow,
      $isSortable = _ref12.$isSortable;
  var borderDir = $theme.direction === 'rtl' ? 'Left' : 'Right';
  var borderVertical = $divider === DIVIDER.vertical || $divider === DIVIDER.grid;
  var borderHorizontal = $divider === undefined || $divider === DIVIDER.horizontal || $divider === DIVIDER.grid;
  var padding = sizeToCellPadding($theme, $size);
  return _objectSpread(_objectSpread({}, $theme.typography.font200), {}, {
    paddingTop: padding,
    paddingRight: !$isSortable ? padding : $theme.sizing.scale1000,
    paddingBottom: padding,
    paddingLeft: padding,
    color: $theme.colors.contentPrimary,
    textAlign: $isNumeric ? 'right' : null,
    verticalAlign: 'top',
    borderBottomColor: !$isLastRow && borderHorizontal ? $theme.borders.border300.borderColor : null,
    borderBottomStyle: !$isLastRow && borderHorizontal ? $theme.borders.border300.borderStyle : null,
    borderBottomWidth: !$isLastRow && borderHorizontal ? $theme.borders.border300.borderWidth : null,
    ':not(:last-child)': (_notLastChild2 = {}, _defineProperty(_notLastChild2, "border".concat(borderDir, "Color"), borderVertical ? $theme.borders.border300.borderColor : null), _defineProperty(_notLastChild2, "border".concat(borderDir, "Style"), borderVertical ? $theme.borders.border300.borderStyle : null), _defineProperty(_notLastChild2, "border".concat(borderDir, "Width"), borderVertical ? $theme.borders.border300.borderWidth : null), _notLastChild2)
  });
});
StyledTableBodyCell.displayName = "StyledTableBodyCell";
export var StyledTableLoadingMessage = styled('div', function (_ref13) {
  var $theme = _ref13.$theme;
  return _objectSpread(_objectSpread({}, $theme.typography.ParagraphSmall), {}, {
    color: $theme.colors.contentPrimary,
    padding: $theme.sizing.scale600
  });
});
StyledTableLoadingMessage.displayName = "StyledTableLoadingMessage";
export var StyledTableEmptyMessage = StyledTableLoadingMessage;