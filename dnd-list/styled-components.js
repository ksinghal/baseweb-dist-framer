function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';

/**
 * Main component container element
 */
export var Root = styled('div', function (_ref) {
  var $theme = _ref.$theme;
  return {
    width: '100%'
  };
});
Root.displayName = "Root";
Root.displayName = 'StyledRoot';
export var List = styled('ul', function (_ref2) {
  var $isDragged = _ref2.$isDragged;
  return {
    paddingLeft: 0,
    cursor: $isDragged ? 'grabbing' : null,
    pointerEvents: $isDragged ? 'none' : 'auto'
  };
});
List.displayName = "List";
List.displayName = 'StyledList';
export var Item = styled('li', function (_ref3) {
  var $isDragged = _ref3.$isDragged,
      $isSelected = _ref3.$isSelected,
      $theme = _ref3.$theme,
      $isFocusVisible = _ref3.$isFocusVisible;
  return {
    ':hover': !$isDragged && !$isSelected ? {
      borderTopWidth: '2px',
      borderBottomWidth: '2px',
      borderLeftWidth: '2px',
      borderRightWidth: '2px',
      borderTopStyle: 'solid',
      borderBottomStyle: 'solid',
      borderLeftStyle: 'solid',
      borderRightStyle: 'solid',
      borderTopColor: $theme.colors.primary,
      borderBottomColor: $theme.colors.primary,
      borderLeftColor: $theme.colors.primary,
      borderRightColor: $theme.colors.primary
    } : {},
    ':focus': {
      outline: $isFocusVisible && !$isDragged && !$isSelected ? "3px solid ".concat($theme.colors.accent) : 'none',
      outlineOffset: '-3px'
    },
    paddingTop: $theme.sizing.scale600,
    paddingBottom: $theme.sizing.scale600,
    paddingLeft: $theme.sizing.scale600,
    paddingRight: $theme.sizing.scale600,
    color: $theme.colors.contentPrimary,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    listStyle: 'none',
    cursor: $isDragged ? 'grabbing' : 'grab',
    backgroundColor: $theme.colors.backgroundPrimary,
    boxShadow: $isDragged ? '0 2px 6px rgba(0, 0, 0, 0.32)' : null,
    borderTopWidth: '2px',
    borderBottomWidth: '2px',
    borderLeftWidth: '2px',
    borderRightWidth: '2px',
    borderTopStyle: 'solid',
    borderBottomStyle: 'solid',
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
    borderTopColor: $isDragged || $isSelected ? $theme.colors.primary : 'transparent',
    borderBottomColor: $isDragged || $isSelected ? $theme.colors.primary : 'transparent',
    borderLeftColor: $isDragged || $isSelected ? $theme.colors.primary : 'transparent',
    borderRightColor: $isDragged || $isSelected ? $theme.colors.primary : 'transparent'
  };
});
Item.displayName = "Item";
List.displayName = 'StyledItem';
export var DragHandle = styled('div', function (_ref4) {
  var _ref5;

  var $theme = _ref4.$theme;
  var marginDir = $theme.direction === 'rtl' ? 'marginLeft' : 'marginRight';
  return _ref5 = {}, _defineProperty(_ref5, marginDir, $theme.sizing.scale600), _defineProperty(_ref5, "width", $theme.sizing.scale800), _defineProperty(_ref5, "display", 'flex'), _defineProperty(_ref5, "alignItems", 'center'), _ref5;
});
DragHandle.displayName = "DragHandle";
DragHandle.displayName = 'StyledDragHandle';
export var CloseHandle = styled('button', function (_ref6) {
  var _ref7;

  var $theme = _ref6.$theme,
      $isFocusVisible = _ref6.$isFocusVisible;
  var marginDir = $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';
  return _ref7 = {
    borderLeftStyle: 'none',
    borderTopStyle: 'none',
    borderRightStyle: 'none',
    borderBottomStyle: 'none',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    overflow: 'visible',
    cursor: 'pointer',
    backgroundColor: 'transparent'
  }, _defineProperty(_ref7, marginDir, $theme.sizing.scale600), _defineProperty(_ref7, "width", $theme.sizing.scale800), _defineProperty(_ref7, "display", 'flex'), _defineProperty(_ref7, "alignItems", 'center'), _defineProperty(_ref7, ':focus', {
    outline: $isFocusVisible ? "3px solid ".concat($theme.colors.accent) : 'none'
  }), _ref7;
});
CloseHandle.displayName = "CloseHandle";
CloseHandle.displayName = 'StyledCloseHandle';
export var Label = styled('div', function (_ref8) {
  var $theme = _ref8.$theme;
  return _objectSpread({
    flexGrow: 1
  }, $theme.typography.font300);
});
Label.displayName = "Label";
Label.displayName = 'StyledLabel';