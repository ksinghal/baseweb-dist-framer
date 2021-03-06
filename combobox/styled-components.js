function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { SIZE } from '../input/index.js';
import { styled } from '../styles/index.js';
export var StyledRoot = styled('div', {});
StyledRoot.displayName = "StyledRoot";
export var StyledInputContainer = styled('div', {});
StyledInputContainer.displayName = "StyledInputContainer";
export var StyledListBox = styled('ul', function (_ref) {
  var $theme = _ref.$theme,
      $width = _ref.$width;
  return {
    backgroundColor: $theme.colors.backgroundPrimary,
    marginBlockStart: 'unset',
    marginBlockEnd: 'unset',
    maxHeight: '200px',
    overflowY: 'auto',
    outline: 'none',
    paddingInlineStart: 'unset',
    width: $width
  };
});
StyledListBox.displayName = "StyledListBox";

function buildStylesForSize(size, theme) {
  var paddingDir = theme.direction === 'rtl' ? 'paddingRight' : 'paddingLeft';

  switch (size) {
    case SIZE.mini:
      return _objectSpread(_objectSpread({}, theme.typography.ParagraphXSmall), {}, _defineProperty({
        height: '30px'
      }, paddingDir, theme.sizing.scale200));

    case SIZE.compact:
      return _objectSpread(_objectSpread({}, theme.typography.ParagraphSmall), {}, _defineProperty({
        height: '36px'
      }, paddingDir, theme.sizing.scale400));

    case SIZE.large:
      return _objectSpread(_objectSpread({}, theme.typography.ParagraphLarge), {}, _defineProperty({
        height: '56px'
      }, paddingDir, theme.sizing.scale650));

    case SIZE.default:
    default:
      return _objectSpread(_objectSpread({}, theme.typography.ParagraphMedium), {}, _defineProperty({
        height: '48px'
      }, paddingDir, theme.sizing.scale550));
  }
}

export var StyledListItem = styled('li', function (_ref2) {
  var $isSelected = _ref2.$isSelected,
      $theme = _ref2.$theme,
      $size = _ref2.$size;
  return _objectSpread(_objectSpread({}, buildStylesForSize($size, $theme)), {}, {
    alignItems: 'center',
    backgroundColor: $isSelected ? $theme.colors.comboboxListItemFocus : null,
    cursor: 'default',
    display: 'flex',
    listStyle: 'none',
    ':hover': {
      backgroundColor: $isSelected ? null : $theme.colors.comboboxListItemHover
    }
  });
});
StyledListItem.displayName = "StyledListItem";