function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled, withStyle } from '../styles/index.js';
import { Root as StyledInputRoot, Input as StyledInputInput } from '../input/styled-components.js';
import { SIZE } from '../input/constants.js';
export var StyledRoot = styled('div', {
  display: 'flex',
  alignItems: 'center'
});
StyledRoot.displayName = "StyledRoot";
export var StyledInputOverrideRoot = withStyle(StyledInputRoot, function (_ref) {
  var _SIZE$mini$SIZE$compa;

  var _ref$$size = _ref.$size,
      $size = _ref$$size === void 0 ? SIZE.default : _ref$$size;
  var width = (_SIZE$mini$SIZE$compa = {}, _defineProperty(_SIZE$mini$SIZE$compa, SIZE.mini, '32px'), _defineProperty(_SIZE$mini$SIZE$compa, SIZE.compact, '36px'), _defineProperty(_SIZE$mini$SIZE$compa, SIZE.default, '48px'), _defineProperty(_SIZE$mini$SIZE$compa, SIZE.large, '56px'), _SIZE$mini$SIZE$compa)[$size];
  return {
    width: width,
    marginRight: '8px'
  };
});
StyledInputOverrideRoot.displayName = "StyledInputOverrideRoot";
export var StyledInputOverrideInput = withStyle(StyledInputInput, {
  textAlign: 'center',
  paddingLeft: '0',
  paddingRight: '0'
});
StyledInputOverrideInput.displayName = "StyledInputOverrideInput";