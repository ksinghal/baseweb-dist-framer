function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { withStyle, withWrapper } from '../styles/index.js';
import { StyledTable as FlexStyledTable, StyledHeadCell as FlexStyledHeadCell, StyledCell as FlexStyledBodyCell } from '../table/index.js';
var StyledTableElement = withStyle(FlexStyledTable, function (props) {
  return {
    display: 'grid',
    gridTemplateColumns: props.$gridTemplateColumns,
    flexDirection: 'unset',
    // Creates a stacking context so we can use z-index on the StyledHeadCell
    // without affecting anything outside of this component.
    transform: 'scale(1)'
  };
});
StyledTableElement.displayName = "StyledTableElement";
export var StyledTable = withWrapper(StyledTableElement, function (StyledComponent) {
  return function StyledTable(props) {
    return /*#__PURE__*/React.createElement(StyledComponent, _extends({
      "data-baseweb": "table-grid"
    }, props));
  };
});
export var StyledHeadCell = withStyle(FlexStyledHeadCell, function (_ref) {
  var _ref$$sticky = _ref.$sticky,
      $sticky = _ref$$sticky === void 0 ? true : _ref$$sticky,
      $isFocusVisible = _ref.$isFocusVisible,
      $theme = _ref.$theme;
  return {
    backgroundColor: $theme.colors.tableHeadBackgroundColor,
    boxShadow: $theme.lighting.shadow400,
    position: $sticky ? 'sticky' : null,
    top: $sticky ? 0 : null,
    width: 'unset',
    ':focus': {
      outline: $isFocusVisible ? "3px solid ".concat($theme.colors.accent) : 'none',
      outlineOffset: '-3px'
    },
    zIndex: $sticky ? 1 : 'auto'
  };
});
StyledHeadCell.displayName = "StyledHeadCell";
export var StyledBodyCell = withStyle(FlexStyledBodyCell, function (props) {
  return {
    display: 'block',
    flex: 'unset',
    gridColumn: props.$gridColumn || null,
    gridRow: props.$gridRow || null,
    ':focus': {
      outline: props.$isFocusVisible ? "3px solid ".concat(props.$theme.colors.accent) : 'none',
      outlineOffset: '-3px'
    }
  };
});
StyledBodyCell.displayName = "StyledBodyCell";