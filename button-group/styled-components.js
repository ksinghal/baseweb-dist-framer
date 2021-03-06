/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
import { SHAPE } from '../button/index.js';
export var StyledRoot = styled('div', function (_ref) {
  var $shape = _ref.$shape,
      $length = _ref.$length,
      $theme = _ref.$theme;
  var margin = $length === 1 ? undefined : $shape !== SHAPE.default ? "-".concat($theme.sizing.scale100) : '-0.5px';
  return {
    display: 'flex',
    marginLeft: margin,
    marginRight: margin
  };
});
StyledRoot.displayName = "StyledRoot";