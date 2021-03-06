function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
import { SIZE } from '../input/index.js';
export var IconWrapper = styled('div', function (props) {
  var _margin, _ref;

  var $size = props.$size,
      $theme = props.$theme;
  var margin = (_margin = {}, _defineProperty(_margin, SIZE.mini, $theme.sizing.scale300), _defineProperty(_margin, SIZE.compact, $theme.sizing.scale500), _defineProperty(_margin, SIZE.default, $theme.sizing.scale600), _defineProperty(_margin, SIZE.large, $theme.sizing.scale700), _margin);
  return _ref = {}, _defineProperty(_ref, $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft', margin[$size]), _defineProperty(_ref, "height", '100%'), _defineProperty(_ref, "display", 'flex'), _defineProperty(_ref, "alignItems", 'center'), _ref;
});
IconWrapper.displayName = "IconWrapper";