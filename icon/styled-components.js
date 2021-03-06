/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
export function getSvgStyles(_ref) {
  var $theme = _ref.$theme,
      $size = _ref.$size,
      $color = _ref.$color;
  var size = $theme.sizing.scale600;

  if ($size) {
    if ($theme.sizing[$size]) {
      size = $theme.sizing[$size];
    } else if (typeof $size === 'number') {
      size = "".concat($size, "px");
    } else {
      size = $size;
    }
  }

  var color = 'currentColor';

  if ($color) {
    if ($theme.colors[$color]) {
      color = $theme.colors[$color];
    } else {
      color = $color;
    }
  }

  return {
    display: 'inline-block',
    fill: color,
    color: color,
    height: size,
    width: size
  };
}
export var Svg = styled('svg', getSvgStyles);
Svg.displayName = "Svg";