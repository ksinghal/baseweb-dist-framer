function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import Block from '../block/block.js';
export var AspectRatioBoxBody = function AspectRatioBoxBody(_ref) {
  var position = _ref.position,
      top = _ref.top,
      bottom = _ref.bottom,
      width = _ref.width,
      restProps = _objectWithoutProperties(_ref, ["position", "top", "bottom", "width"]);

  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "aspect-ratio-box-body",
    position: position || 'absolute',
    top: top || 0,
    bottom: bottom || 0,
    width: width || '100%'
  }, restProps));
};
export default AspectRatioBoxBody;