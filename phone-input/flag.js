function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import * as flags from './flags/index.js';
import { styled } from '../styles/index.js';
import { SIZE } from './constants.js';
export default function Flag(props) {
  var $iso = props.$iso,
      oldIsoProp = props.iso,
      _props$width = props.width,
      width = _props$width === void 0 ? '16px' : _props$width,
      restProps = _objectWithoutProperties(props, ["$iso", "iso", "width"]);

  var iso = oldIsoProp || $iso;
  var FlagComponent = flags["Flag".concat(iso.toUpperCase())];
  return /*#__PURE__*/React.createElement(FlagComponent, _extends({
    width: width,
    "data-iso": iso
  }, restProps));
}
export var StyledFlag = styled(Flag, function (_ref) {
  var _sizeToWidth;

  var _ref$$size = _ref.$size,
      $size = _ref$$size === void 0 ? SIZE.default : _ref$$size,
      sizing = _ref.$theme.sizing;
  var sizeToWidth = (_sizeToWidth = {}, _defineProperty(_sizeToWidth, SIZE.mini, sizing.scale700), _defineProperty(_sizeToWidth, SIZE.compact, sizing.scale800), _defineProperty(_sizeToWidth, SIZE.default, sizing.scale900), _defineProperty(_sizeToWidth, SIZE.large, sizing.scale1000), _sizeToWidth);
  return {
    width: sizeToWidth[$size]
  };
});
StyledFlag.displayName = "StyledFlag";